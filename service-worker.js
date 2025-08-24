/* Rádio Thay - PWA SW (stale-while-revalidate) */
const CACHE_NAME = "radio-thay-v6";
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
  // Pula a espera para ativar imediatamente
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Ativa e remove caches antigos
self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      // Limpa caches antigos
      caches.keys().then((keys) =>
        Promise.all(keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('Removendo cache antigo:', key);
            return caches.delete(key);
          }
        }))
      ),
      // Toma controle de todas as páginas imediatamente
      self.clients.claim()
    ])
  );

  // Notifica TODOS os clientes sobre a nova versão
  self.clients.matchAll({ includeUncontrolled: true }).then((clients) => {
    clients.forEach(client => {
      client.postMessage({ type: 'NOVA_VERSAO_DISPONIVEL' });
    });
  });
});

// Estratégia stale-while-revalidate
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Ignora tudo que não seja http/https
  if (!request.url.startsWith("http")) {
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cached = await cache.match(request);

      // Tenta buscar da rede primeiro
      try {
        const networkResponse = await fetch(request);

        // Atualiza o cache se a resposta for válida
        if (networkResponse && networkResponse.status === 200) {
          cache.put(request, networkResponse.clone());
        }

        // Retorna da rede (fresco) se disponível, senão do cache
        return networkResponse || cached;
      } catch (err) {
        // Offline → devolve cache se tiver
        return cached;
      }
    })
  );
});