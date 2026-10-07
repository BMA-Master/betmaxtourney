// Extract the exact release components into the existing isolated mobile fixture.
// Uses core's test driver and Babel parser; no accounts or submissions involved.
import {readFileSync, writeFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
const core=resolve(process.argv[2]), site=resolve(import.meta.dirname,'..');
const require=createRequire(core+'/package.json');
const {parse}=require('@babel/parser');
const manifest=JSON.parse(readFileSync(site+'/app/bma-release.json'));
const jsPath=manifest.assets.find(a=>a.path.endsWith('.js')&&a.path.includes('index-mobile')).path;
const cssPath=manifest.assets.find(a=>a.path.endsWith('.css')&&a.path.includes('index-mobile')).path;
const js=readFileSync(site+'/app/'+jsPath,'utf8'), base=readFileSync(site+'/app/assets/index-DeIm9Uvz.js','utf8');
const ast=parse(js,{sourceType:'module'}), oldAst=parse(base,{sourceType:'module'});
const node=(tree,name)=>tree.program.body.find(n=>n.id?.name===name);
const code=name=>{const n=node(ast,name);assert.ok(n,name);return js.slice(n.start,n.end)};
// The existing production Android drawer/history owner is byte-identical.
for(const name of ['w_','cd']) {const before=node(oldAst,name);assert.equal(code(name),base.slice(before.start,before.end));}
const lm=ast.program.body.flatMap(n=>n.declarations||[]).find(n=>n.id?.name==='LM');
let module=['ld','TE','It','I_','Nh','a0','OM','bmtOct7_inviteTime','bmtOct7_unavailableInviteReason','bmtOct7_inviteAcceptFailure'].map(code).join('\n');
module+='\nconst En=I_();\nconst '+js.slice(lm.start,lm.end)+';\n';
module+='customElements.define("bma-bet-entry",a0);customElements.define("bma-invite-card",OM);\n';
const start=js.indexOf('p=()=>{const m=document.querySelector(".bet-grid__select")');
const end=js.indexOf(',h=m=>',start);assert.ok(start>0&&end>start);
module+='export function initReleaseToggle(redesign){const C=redesign;const '+js.slice(start,end)+';p()}\nexport {TE as bindPlaySlipViewport,En as invitationActions};';
writeFileSync(core+'/tests/release-components.js',module);
writeFileSync(core+'/tests/release.css',readFileSync(site+'/app/'+cssPath));
let fixture=readFileSync(core+'/tests/mobile-slip.html','utf8');
fixture=fixture.replace("import '/src/assets/css/base.css';", "import './release.css';");
for(const line of ["import '/src/wc/bma-bet-entry.js';", "import '/src/wc/bma-invite-card.js';", "import '/src/assets/css/navigation-preview-play.css';", "import { invitationActions } from '/src/core/invitationActions.js';"])fixture=fixture.replace(line,'');
fixture=fixture.replace("import { bindPlaySlipViewport } from '/src/core/playSlipViewport.js';", "import { bindPlaySlipViewport, invitationActions, initReleaseToggle } from './release-components.js';");
fixture=fixture.replace("style.textContent = homeSource.match(/<style>\\s*([\\s\\S]*?)<\\/style>/)[1] +", "style.textContent =");
fixture=fixture.replace('new Function(\'navigationPreview\', `${toggleSource}; initBetGridToggle();`)(redesign);','initReleaseToggle(redesign);');
writeFileSync(core+'/tests/release-mobile.html',fixture);
writeFileSync('/tmp/bmt-release-mobile-check.mjs',readFileSync(core+'/tests/mobile-slip.mjs','utf8').replace('tests/mobile-slip.html','tests/release-mobile.html'));
console.log('Release fixture generated from exact shipped classes, viewport, toggle, styles; Android Back functions preserved byte-for-byte.');
