// Push-only worker: deliberately no fetch handler or offline application cache.
self.addEventListener('install',()=>self.skipWaiting())
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()))
const uuid=/^[a-f\d]{8}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{12}$/i
const valid=data=>data&&uuid.test(data.eventGuid||'')&&(uuid.test(data.recipientGuid||'')||data.recipientGuid==='SYSTEM')
self.addEventListener('push',event=>{
  let data;try{data=event.data.json()}catch{return}
  if(!valid(data))return
  event.waitUntil(self.registration.showNotification('Bet Max Tourney',{
    body:typeof data.body==='string'?data.body.slice(0,220):'You have a tournament update. Open Bet Max to see it.',
    tag:data.eventGuid,data:{eventGuid:data.eventGuid,recipientGuid:data.recipientGuid},
  }))
})
self.addEventListener('notificationclick',event=>{
  event.notification.close()
  const data=event.notification.data;if(!valid(data))return
  const url=new URL(self.registration.scope)
  url.hash='/home_route?pushEvent='+encodeURIComponent(data.eventGuid)+'&pushRecipient='+encodeURIComponent(data.recipientGuid)
  // Opening a fresh client preserves any unsaved picks in an existing window.
  event.waitUntil(self.clients.openWindow(url.href))
})
