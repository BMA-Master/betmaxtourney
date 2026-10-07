"""Reproduce the Oct 7 hotfix while preserving deployed, uncommitted Back fixes.
Usage: python3 scripts/patch-mobile-release.py /path/to/core-at-6e0e2e0
Input assets are retained for rollback and guarded by their release SHA256.
Do not use this as a replacement for recovering the complete production source.
"""
from pathlib import Path
import hashlib, json, sys, subprocess
root=Path(__file__).resolve().parents[1]
core=Path(sys.argv[1])
sha=lambda b: hashlib.sha256(b).hexdigest()
jsold='assets/index-DeIm9Uvz.js'; cssold='assets/index-BNjE4RnH.css'
s=(root/'app'/jsold).read_text()
assert sha(s.encode())=='22218ebb2e586bf649984ef80ae79816c7dd68c3c9edec49a5d7add8298b8e5e'
assert sha((root/'app'/cssold).read_bytes())=='07a868cf636c7e0f377527b150164b257e6d44227420f6435f5a23f06580147f'
changes=[]
def replace(old,new,label):
 global s
 assert s.count(old)==1, (label,s.count(old))
 s=s.replace(old,new);changes.append(label)
# Reuse the reviewed/tested source helpers verbatim, with collision-proof names.
helpers=(core/'src/core/inviteAvailability.js').read_text().replace('export function','function')
for name in ['inviteTime','unavailableInviteReason','inviteAcceptFailure']:
 assert 'bmtOct7_'+name not in s
 helpers=helpers.replace(name,'bmtOct7_'+name)
viewport=(core/'src/core/dialogViewport.js').read_text().replace('export function bindDialogViewport','function ld')
a=s.index('function ld(');b=s.index('const Ti="bmaDrawer"',a)
replace(s[a:b],viewport+'\n','visual viewport owner')
replace('compactAttribute:"data-compact-slip",compactHeight:480})','compactAttribute:"data-compact-slip",compactHeight:480,keyboardClass:"slip-keyboard-open",keyboardScrollerSelector:".bet-grid__slip-BETSLIP"})','keyboard scroller')
replace('this.render(),this.setupEventListeners(),setTimeout(()=>{const e=this.shadowRoot.querySelector(".stake-input");e&&e.focus()},100)','this.render(),this.setupEventListeners()','remove hidden autofocus')
replace('const v=(T,E)=>{m.classList.toggle("collapsed",T)', 'const v=(T,E)=>{if(!T&&g.contains(document.activeElement)){const host=document.activeElement;(host?.shadowRoot?.activeElement||host)?.blur()}m.classList.toggle("collapsed",T)', 'dismiss keyboard on collapse')
replace('C&&(n=TE(document.querySelector(".play-cntr")))','(n=TE(document.querySelector(".play-cntr")))','all presentations track viewport')
replace('m=N=>{if(!N?.guid)return;d.value++;', 'm=N=>{if(!N?.guid)return;if(bmtOct7_unavailableInviteReason(N)){T(N.guid);return}d.value++;','filter invitation pushes')
replace('E=N=>{d.value++,l.splice(0,l.length,...Array.isArray(N)?N:[])}','E=N=>{d.value++,l.splice(0,l.length,...Array.isArray(N)?N.filter(invite=>!bmtOct7_unavailableInviteReason(invite)):[])}','filter inbox snapshot')
replace('b=N=>{o.push(N),o.length>10', 'b=N=>{o.push(N);for(const invite of [...l]){const pool=N.data?.find(pool=>pool.guid===invite.tournament_guid);if(pool&&bmtOct7_unavailableInviteReason(invite,pool))T(invite.guid)}o.length>10','lifecycle push pruning')
replace('const ce=()=>{const k=document.getElementById("invites-list");if(!k)return;', '''const ce=()=>{for(const invite of [...t.coreInvites]){const pool=[...t.coreTourn].reverse().flatMap(snapshot=>snapshot.data||[]).find(pool=>pool.guid===invite.tournament_guid);if(bmtOct7_unavailableInviteReason(invite,pool||invite.tournament_preview))t.removeInvite(invite.guid)}const k=document.getElementById("invites-list");''','prune before rendering')
replace('k.innerHTML="",w.forEach(P=>{const I=document.createElement("bma-invite-card")','k&&(k.innerHTML=""),k&&w.forEach(P=>{const I=document.createElement("bma-invite-card")','badges update without inbox DOM')
replace('request:()=>Oe.acceptInvite(w)', '''request:()=>{const invite=t.coreInvites?.find(i=>i.guid===w);const pool=[...(t.coreTourn||[])].reverse().flatMap(snapshot=>snapshot.data||[]).find(pool=>pool.guid===invite?.tournament_guid);const reason=invite&&bmtOct7_unavailableInviteReason(invite,pool||invite.tournament_preview);return reason?{ok:false,data:{error:reason}}:Oe.acceptInvite(w)}''','accept preflight')
a=s.index('const I=P?.data?.error||`http_${P?.status||0}`');b=s.index('&&(t.removeInvite(w)',a)
replace(s[a:b], 'const failure=bmtOct7_inviteAcceptFailure(P);typeof neodigmToast<"u"&&neodigmToast.q(failure.message,"warning"),failure.terminal','specific failure and terminal cleanup')
replace('de.subscribe(t.hierTopics.ROUTE__INVITES_HYDRATE,()=>{ce()})', '''de.subscribe(t.hierTopics.ROUTE__INVITES_HYDRATE,()=>{ce()}),(()=>{const refresh=()=>{ce();return hr(t,()=>Oe.fetchMyInvites(),ce,C?()=>gs(t,rt.getBrand()||""):undefined)};setInterval(()=>{if(!document.hidden&&t.coreInvites.length)refresh()},60000);document.addEventListener("visibilitychange",()=>{if(!document.hidden)refresh()});de.subscribe(t.hierTopics.SSE__CORE__TOURN_SYNC,ce)})()''','foreground and periodic refresh')
replace('${b?"Starts":"Pool"}','${b?(bmtOct7_inviteTime(c)<=Date.now()?"Started":"Starts"):"Pool"}','accurate date label')
s=helpers+'\n'+s
jsnew=f'assets/index-mobile-{sha(s.encode())[:12]}.js'
(root/'app'/jsnew).write_text(s)
# Only append the changed mobile rules; retain all production styling.
css=(root/'app'/cssold).read_text()
home=(core/'src/views/home_route.vue').read_text()
a=home.index('  .play-cntr.pickslip-sheet.slip-keyboard-open')
b=home.index('  @media (prefers-reduced-motion',a)
css+='\n/* Oct 7 keyboard hotfix; matching rules in core home_route.vue. */\n@media (max-width:768px),(orientation:portrait){\n.pickslip-sheet .bet-grid__slip{top:calc(var(--play-viewport-top,0px) + var(--play-visible-height,100dvh)*.14);bottom:auto;height:calc(var(--play-visible-height,100dvh)*.86);max-height:calc(var(--play-visible-height,100dvh)*.86)}\n'+home[a:b]+'\n}\n'
cssnew=f'assets/index-mobile-{sha(css.encode())[:12]}.css'
(root/'app'/cssnew).write_text(css)
index=(root/'app/index.html').read_text()
# Idempotent regeneration accepts this patch's existing content-hashed names.
import re
index=re.sub(r'assets/index-(?:DeIm9Uvz|mobile-[0-9a-f]+)\.js',jsnew,index)
index=re.sub(r'assets/index-(?:BNjE4RnH|mobile-[0-9a-f]+)\.css',cssnew,index)
(root/'app/index.html').write_text(index)
manifest=json.loads(subprocess.check_output(['git','show','7423b0194fd88412244f70cb794d2b84b909ffaf:app/bma-release.json'],cwd=root))
manifest['hotfix']={'id':'2026-10-07-invites-keyboard','baseSiteCommit':'7423b0194fd88412244f70cb794d2b84b909ffaf','sourceFixCommit':subprocess.check_output(['git','rev-parse','HEAD'],cwd=core,text=True).strip(),'apiCommit':'0d08720','method':'Guarded patch of deployed assets; preserves uncommitted production Back navigation changes.','changes':changes}
for asset in manifest['assets']:
 if asset['path']==jsold:asset['path']=jsnew
 if asset['path']==cssold:asset['path']=cssnew
 data=(root/'app'/asset['path']).read_bytes();asset.update(bytes=len(data),sha256=sha(data))
(root/'app/bma-release.json').write_text(json.dumps(manifest,indent=2)+'\n')
print(json.dumps({'js':jsnew,'css':cssnew,'patches':len(changes)}))
