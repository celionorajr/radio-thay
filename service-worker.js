/* Rádio Thay - PWA SW (stale-while-revalidate) */
const CACHE_NAME = "radio-thay-v4";
const ASSETS = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/site.webmanifest",
  "/icons/app-icon-16.png",
  "/icons/app-icon-32.png",
  "/icons/app-icon-180.png",
  "/icons/app-icon-192.png",
  "/icons/app-icon-512.png"
];

// Instala e faz cache inicial
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Ativa e remove caches antigos
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    ).then(() => self.clients.claim())
  );
});

// Estratégia stale-while-revalidate com fallback robusto
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Ignora tudo que não seja http/https
  if (!request.url.startsWith("http")) {
    return;
  }

  // Para arquivos de áudio, evitar cache de respostas parciais (206)
  if (request.url.includes('.mp3')) {
    event.respondWith(
      (async () => {
        try {
          const networkResponse = await fetch(request);
          if (networkResponse && networkResponse.status === 200) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        } catch (err) {
          const cache = await caches.open(CACHE_NAME);
          const cached = await cache.match(request);
          return cached || new Response('Audio not available', { status: 404 });
        }
      })()
    );
    return;
  }

  // Para outros recursos (HTML, CSS, JS, imagens)
  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cached = await cache.match(request);
      
      try {
        const networkResponse = await fetch(request);
        if (networkResponse && networkResponse.status === 200) {
          cache.put(request, networkResponse.clone());
        }
        return cached || networkResponse;
      } catch (err) {
        return cached || new Response('Offline - content not available');
      }
    })
  );
});
