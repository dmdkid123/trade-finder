// Offline support for the installed app.
// App files: network first (so updates show up right away), cached copy when offline.
// League data and values: network first too, so you always see fresh numbers, with the last copy as an offline fallback.
const CACHE = "trade-finder-v6";
const APP_FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png"];
const DATA_HOSTS = ["api.sleeper.app", "api.fantasycalc.com", "www.dynastydealer.com"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(APP_FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if(req.method !== "GET") return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;
  if(!sameOrigin && !DATA_HOSTS.includes(url.hostname)) return;   // fonts, images: browser default
  e.respondWith(
    fetch(req).then(res => {
      if(res.ok){ const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: sameOrigin }).then(hit => hit || (sameOrigin ? caches.match("./index.html") : Response.error())))
  );
});
