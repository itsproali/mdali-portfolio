/* Service worker for mdali.dev — small, dependency-free.
 *
 * Strategy
 *  - Navigations: network first, fall back to cache, then /offline.
 *  - Next.js build assets (/_next/static): cache first (content-hashed).
 *  - Fonts and images (own origin + Cloudinary): stale-while-revalidate.
 *  - Everything else (API, non-GET): straight to the network.
 *
 * Bump VERSION when the strategy changes; old caches are dropped on activate.
 */
const VERSION = "v2";
const PAGES = `pages-${VERSION}`;
const ASSETS = `assets-${VERSION}`;
const MEDIA = `media-${VERSION}`;
const OFFLINE_URL = "/offline";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(PAGES)
      .then((cache) => cache.addAll(["/", OFFLINE_URL, "/icons/icon-192.png"]))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => ![PAGES, ASSETS, MEDIA].includes(k))
            .map((k) => caches.delete(k)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  const sameOrigin = url.origin === self.location.origin;

  if (sameOrigin && url.pathname.startsWith("/api/")) return;

  if (request.mode === "navigate") {
    event.respondWith(networkFirst(request));
    return;
  }

  if (sameOrigin && url.pathname.startsWith("/_next/static/")) {
    event.respondWith(cacheFirst(request, ASSETS));
    return;
  }

  const isMedia =
    request.destination === "image" ||
    request.destination === "font" ||
    url.hostname === "res.cloudinary.com";

  if (isMedia) {
    event.respondWith(staleWhileRevalidate(request, MEDIA));
  }
});

async function networkFirst(request) {
  const cache = await caches.open(PAGES);
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch {
    const cached = await cache.match(request);
    return cached ?? (await cache.match(OFFLINE_URL)) ?? Response.error();
  }
}

async function cacheFirst(request, name) {
  const cache = await caches.open(name);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) cache.put(request, response.clone());
  return response;
}

async function staleWhileRevalidate(request, name) {
  const cache = await caches.open(name);
  const cached = await cache.match(request);
  const refresh = fetch(request)
    .then((response) => {
      if (response.ok || response.type === "opaque") {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => cached);
  return cached ?? refresh;
}
