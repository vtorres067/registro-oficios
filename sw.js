const CACHE = 'registro-oficios-v1';
const URLS = [
  '/registro-oficios/',
  '/registro-oficios/index.html',
  '/registro-oficios/manifest.json',
  '/registro-oficios/icon-192.png',
  '/registro-oficios/icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => r || fetch(e.request))
  );
});
