// Service worker for PWA behaviour.
//
// Strategy:
//   - Navigations (HTML): network-first, so a fresh deploy is picked up immediately
//     and the cached shell is only used when offline.
//   - Hashed build assets (/assets/*): cache-first — the filename changes on every
//     build, so a cached copy is never stale.
//   - Everything else same-origin: stale-while-revalidate.
//
// Bump CACHE_VERSION whenever this file's caching rules change.

const CACHE_VERSION = 'v3';
const CACHE_NAME = `portfolio-${CACHE_VERSION}`;
const OFFLINE_FALLBACK = '/index.html';

// Only pre-cache paths that genuinely exist in the production build.
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      // addAll rejects the whole batch if one request fails; add individually.
      .then((cache) => Promise.all(
        PRECACHE_URLS.map((url) => cache.add(url).catch(() => null))
      ))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((names) => Promise.all(
        names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Never intercept cross-origin traffic (GitHub API, contribution chart, fonts).
  if (url.origin !== self.location.origin) return;

  // HTML navigations: network-first.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(OFFLINE_FALLBACK, copy));
          return response;
        })
        .catch(() => caches.match(OFFLINE_FALLBACK).then((r) => r || Response.error()))
    );
    return;
  }

  // Hashed build output: cache-first.
  if (url.pathname.startsWith('/assets/')) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        });
      })
    );
    return;
  }

  // Other same-origin assets: stale-while-revalidate.
  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached);

      return cached || network;
    })
  );
});
