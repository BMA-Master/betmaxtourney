// Small, guarded copy/action patch; retains the deployed quiet-card/mobile fixes.
// Usage: node scripts/patch-play-label.mjs CORE INPUT OUTPUT web|ios
import {readFileSync,writeFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';
import {resolve} from 'node:path';
import assert from 'node:assert/strict';
const [core,input,output,platform]=process.argv.slice(2);
const {parse}=createRequire(resolve(core,'package.json'))('@babel/parser');
let s=readFileSync(input,'utf8');
const hash=createHash('sha256').update(s).digest('hex');
assert.equal(hash,platform==='web'?'1826cfe3a6b54c3b01b3825bbf5621b244a25fc2c2cd88583bf4ab22c51de19f':'d0bc80dd2051b82a762f79b9acfb2fd028314ba032156e764357304480b0b294');
function replace(old,next){assert.equal(s.split(old).length-1,1,old);s=s.replace(old,next)}
const joined=platform==='web'?'m':'h', status=platform==='web'?'N':'Ne';
const active=`${joined}.value&&["UPCOMING","LOCKED"].includes(${status}.value)`;
replace(`${joined}.value?"View Tournament":${status}.value==="COMPLETED"?"View Results":`,`${status}.value==="COMPLETED"?"View Results":${joined}.value?(["UPCOMING","LOCKED"].includes(${status}.value)?"Play":"View Tournament"):`);
replace(`if(${joined}.value||${status}.value!=="UPCOMING"){e.push({name:"play_route",query:{guid:n.value,action:"INFO"}})`,`if(${joined}.value||${status}.value!=="UPCOMING"){e.push({name:"play_route",query:{guid:n.value,action:${active}?"PLAY":"INFO"}})`);
if(platform==='web')replace('buttonLabel:t.is_private?"View pool":"View tournament"','buttonLabel:n?"Play":t.is_private?"View pool":"View tournament"');
parse(s,{sourceType:'module'});
writeFileSync(output,s);
console.log(platform,createHash('sha256').update(s).digest('hex'));
