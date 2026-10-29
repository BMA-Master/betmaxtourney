// Push-only worker: deliberately no fetch handler or offline application cache.
self.addEventListener('install',()=>self.skipWaiting())
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()))
const uuid=/^[a-f\d]{8}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{12}$/i
const valid=data=>data&&uuid.test(data.eventGuid||'')&&(uuid.test(data.recipientGuid||'')||data.recipientGuid==='SYSTEM')
async function acknowledgedInForeground(data) {
  try {
    const windows=await self.clients.matchAll({type:'window',includeUncontrolled:false})
    for(const client of windows.filter(c=>c.visibilityState==='visible'&&c.url.startsWith(self.registration.scope))) {
      const handled=await new Promise(resolve=>{
        const channel=new MessageChannel(),deadline=Date.now()+1500
        const finish=value=>{clearTimeout(timer);channel.port1.close();resolve(value)}
        const timer=setTimeout(()=>finish(false),1500)
        channel.port1.onmessage=event=>finish(event.data?.handled===true&&event.data.eventGuid===data.eventGuid)
        try{client.postMessage({type:'bma-foreground-push',hint:{eventGuid:data.eventGuid,recipientGuid:data.recipientGuid},deadline},[channel.port2])}
        catch{finish(false)}
      })
      if(handled)return true
    }
  }catch{ /* background/system alert remains the safe fallback */ }
  return false
}
self.addEventListener('push',event=>{
  let data;try{data=event.data.json()}catch{return}
  if(!valid(data))return
  event.waitUntil((async()=>{
    const handled=await acknowledgedInForeground(data)
    // userVisibleOnly subscriptions must still show a system notification
    // (Safari can revoke subscriptions that omit it). Quiet its sound when a
    // matching visible app has already reconciled the in-app notification.
    await self.registration.showNotification('Bet Max Tourney',{
    body:typeof data.body==='string'?data.body.slice(0,220):'You have a tournament update. Open Bet Max to see it.',
    tag:data.eventGuid,...(handled?{silent:true}:{}),data:{eventGuid:data.eventGuid,recipientGuid:data.recipientGuid},
    })
  })())
})
self.addEventListener('notificationclick',event=>{
  event.notification.close()
  const data=event.notification.data;if(!valid(data))return
  const url=new URL(self.registration.scope)
  url.hash='/home_route?pushEvent='+encodeURIComponent(data.eventGuid)+'&pushRecipient='+encodeURIComponent(data.recipientGuid)
  // Opening a fresh client preserves any unsaved picks in an existing window.
  event.waitUntil(self.clients.openWindow(url.href))
})
