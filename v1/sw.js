const CACHE='level-up-k12-v1.0.1';
const CORE=['./','./index.html','./assets/styles.css','./assets/app.js','./assets/icon.svg','./manifest.webmanifest','./data/evidence.json','./data/quests.json','./data/foundry-features.json','./docs/IMPLEMENTATION_GUIDE.md','./docs/EVIDENCE_NOTES.md','./docs/SAFEGUARDING.md','./docs/SIGNAGE_PRINT.md','./docs/BOARD_ONE_PAGER.md','./docs/TEACHER_ONBOARDING.md','./docs/FAMILY_FAQ.md','./docs/LAUNCH_RUN_OF_SHOW.md','./docs/PROCUREMENT_PRIVACY_CHECKLIST.md','./docs/BUDGET_MODEL.md','./docs/FEATURE_TRACEABILITY.md','./data/state-schema.json','./LICENSE.txt','./README.md'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(res=>{
    const copy=res.clone(); if(new URL(e.request.url).origin===location.origin) caches.open(CACHE).then(c=>c.put(e.request,copy)); return res;
  }).catch(()=>caches.match('./index.html'))));
});
