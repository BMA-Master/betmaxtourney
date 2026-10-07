// Preserve both deployed bundles; edit only AST-identified card/grid methods.
// Usage: node scripts/patch-quiet-cards.mjs CORE INPUT OUTPUT [web|ios]
import {readFileSync,writeFileSync} from 'node:fs';
import {createRequire} from 'node:module';
import {resolve} from 'node:path';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
const [core,input,output,platform='web']=process.argv.slice(2).map((x,i)=>i<3?resolve(x):x);
const {parse}=createRequire(core+'/package.json')('@babel/parser');
const source=readFileSync(input,'utf8');
const expected={web:'c785d0e9369e003ab0fc758b12fc13b0fae36b2790cfa8b24af75e193b0a7a3c',ios:'d2f787bf0e5f16b23750d39f6486faf50b9ea9a7660b26c6fb7429a37d48e6a3'};
assert.ok(createHash('sha256').update(source).digest('hex').startsWith(expected[platform]),'Unexpected input asset');
const ast=parse(source,{sourceType:'module'}), edits=[], stats={};
const code=n=>source.slice(n.start,n.end);
function walk(node,fn){if(!node||typeof node!=='object')return; if(node.type)fn(node); for(const [k,v] of Object.entries(node)){if(['loc','start','end','extra'].includes(k))continue;if(Array.isArray(v))v.forEach(x=>walk(x,fn));else if(v&&typeof v==='object')walk(v,fn)}}
function replace(node,text,label){edits.push({start:node.start,end:node.end,text});stats[label]=(stats[label]||0)+1}
function prepend(node,text,label){edits.push({start:node.body.start+1,end:node.body.start+1,text});stats[label]=(stats[label]||0)+1}
const classes={};walk(ast,n=>{if(n.type==='CallExpression'&&code(n.callee)==='customElements.define'&&['bma-tournament-card','bma-tournament-list-card'].includes(n.arguments[0]?.value))classes[n.arguments[0].value]=n.arguments[1].name});
assert.equal(Object.keys(classes).length,2);
for(const [tag,name] of Object.entries(classes)){
 const cls=ast.program.body.find(n=>n.type==='ClassDeclaration'&&n.id.name===name);assert.ok(cls,name);
 for(const method of cls.body.body){
  if(method.key?.name==='attributeChangedCallback')prepend(method,'if(!this.isConnected||this._quietUpdating)return;','batch attributes');
  if(method.key?.name==='attachEventListeners'){
   if(tag==='bma-tournament-card')prepend(method,'if(this._quietClickBound)return;this._quietClickBound=true;','stable card listeners');
   else walk(method.body,n=>{if(n.type==='CallExpression'&&n.callee?.property?.name==='addEventListener')replace(n,`bmtQuiet.quietBind(${code(n.callee.object)},${n.arguments.map(code).join(',')})`,'stable list listeners')});
  }
  if(method.key?.name==='setupFoilSheen')prepend(method,'if(this.shadowRoot.querySelector(".tc-lobby--pool")?.classList.contains("is-seen"))return;','one-shot foil');
  walk(method.body,n=>{if(n.type==='AssignmentExpression'&&code(n.left)==='this.shadowRoot.innerHTML')replace(n,`bmtQuiet.quietCardShadow(this.shadowRoot,${code(n.right)})`,'reconcile card shadow')});
 }
}
let renderer;walk(ast,n=>{if(n.type==='ArrowFunctionExpression'&&code(n).includes('panel-enter 0.3s ease-out both')&&(!renderer||n.end-n.start<renderer.end-renderer.start))renderer=n});assert.ok(renderer);
const grids=[];
walk(renderer.body,n=>{
 if(n.type==='VariableDeclarator'&&n.init?.type==='CallExpression'&&code(n.init.callee)==='document.querySelector'&&['.tournaments-grid','.tournaments-grid--continuation'].includes(n.init.arguments[0]?.value)){
  grids.push(n.id.name);replace(n.init,`bmtQuiet.quietGridDraft(${code(n.init)})`,'stage grid');
 }
 if(n.type==='CallExpression'&&n.callee?.property?.name==='addEventListener'&&(n.arguments[0]?.value==='scroll'||code(n).includes('.scrollBy('))) replace(n,'void 0','delegate rail controls');
});
assert.equal(grids.length,platform==='web'?2:1);
edits.push({start:renderer.body.end-1,end:renderer.body.end-1,text:`;bmtQuiet.commitQuietGrids(${grids.join(',')});`});
if(platform==='web'){
 let sub;walk(ast,n=>{if(n.type==='CallExpression'&&n.callee?.property?.name==='subscribe'&&code(n.arguments[0]).includes('SSE__CORE__TOURN_SYNC')&&code(n).includes('Pushed SSE data to coreTourn'))sub=n});assert.ok(sub);
 let publish,condition;walk(sub,n=>{if(n.type==='CallExpression'&&n.callee?.property?.name==='publish'&&code(n.arguments[0]).includes('ROUTE__HOME_HYDRATE'))publish=n;if(n.type==='IfStatement'&&n.test.type==='Identifier'&&code(n.consequent).includes('.accept('))condition=code(n.test)});
 assert.ok(publish&&condition);replace(publish,`(!${condition}&&${code(publish)})`,'single refresh notification');
}
let result=source;edits.sort((a,b)=>b.start-a.start);let boundary=source.length;for(const e of edits){assert.ok(e.end<=boundary,'Overlapping edits');result=result.slice(0,e.start)+e.text+result.slice(e.end);boundary=e.start}
let helper=readFileSync(core+'/src/core/quietTournamentGrid.js','utf8').replaceAll('export function','function');
result=`const bmtQuiet=(()=>{${helper}\nreturn {quietGridDraft,commitQuietGrid,commitQuietGrids,quietCardShadow,quietBind};})();\n`+result;
parse(result,{sourceType:'module'});
writeFileSync(output,result);console.log(JSON.stringify({platform,stats,sha256:createHash('sha256').update(result).digest('hex')},null,2));
