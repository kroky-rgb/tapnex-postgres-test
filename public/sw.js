const CACHE_NAME = "tapnex-v1.2"
const STATIC_CACHE = "tapnex-static-v1.2"
const DYNAMIC_CACHE = "tapnex-dynamic-v1.2"

// Assets to cache immediately
const STATIC_ASSETS = [
  "/",
  "/features",
  "/solutions",
  "/about",
  "/contact",
  "/blog",
  "/tapnex-logo.png",
  "/nextgen-logo.png",
  "/manifest.json",
]

// Assets to cache on first request
const DYNAMIC_ASSETS = ["/TapNex-payment-device.jpg", "/TapNex-event-entry.jpg", "/og-image.jpg"]

// Install event - cache static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then((cache) => {
        return cache.addAll(STATIC_ASSETS)
      }),
      caches.open(DYNAMIC_CACHE),
    ]).then(() => {
      return self.skipWaiting()
    }),
  )
})

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              return caches.delete(cacheName)
            }
          }),
        )
      })
      .then(() => {
        return self.clients.claim()
      }),
  )
})

// Fetch event - serve from cache with network fallback
self.addEventListener("fetch", (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== "GET") {
    return
  }

  // Skip external requests
  if (url.origin !== location.origin) {
    return
  }

  // Handle API requests
  if (url.pathname.startsWith("/api/")) {
    event.respondWith(
      fetch(request).catch(() => {
        return new Response(JSON.stringify({ error: "Network unavailable" }), {
          status: 503,
          headers: { "Content-Type": "application/json" },
        })
      }),
    )
    return
  }

  // Handle static assets
  if (STATIC_ASSETS.includes(url.pathname) || url.pathname.startsWith("/_next/static/")) {
    event.respondWith(
      caches.match(request).then((response) => {
        if (response) {
          return response
        }
        return fetch(request).then((fetchResponse) => {
          const responseClone = fetchResponse.clone()
          caches.open(STATIC_CACHE).then((cache) => {
            cache.put(request, responseClone)
          })
          return fetchResponse
        })
      }),
    )
    return
  }

  // Handle images
  if (request.destination === "image") {
    event.respondWith(
      caches.match(request).then((response) => {
        if (response) {
          return response
        }
        return fetch(request)
          .then((fetchResponse) => {
            if (fetchResponse.ok) {
              const responseClone = fetchResponse.clone()
              caches.open(DYNAMIC_CACHE).then((cache) => {
                cache.put(request, responseClone)
              })
            }
            return fetchResponse
          })
          .catch(() => {
            // Return a placeholder image if network fails
            return new Response(
              '<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f3f4f6"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#6b7280">Image unavailable</text></svg>',
              { headers: { "Content-Type": "image/svg+xml" } },
            )
          })
      }),
    )
    return
  }

  // Handle page requests with stale-while-revalidate strategy
  event.respondWith(
    caches
      .match(request)
      .then((response) => {
        const fetchPromise = fetch(request).then((fetchResponse) => {
          if (fetchResponse.ok) {
            const responseClone = fetchResponse.clone()
            caches.open(DYNAMIC_CACHE).then((cache) => {
              cache.put(request, responseClone)
            })
          }
          return fetchResponse
        })

        return response || fetchPromise
      })
      .catch(() => {
        // Return offline page for navigation requests
        if (request.mode === "navigate") {
          return caches.match("/") || new Response("Offline", { status: 503 })
        }
        return new Response("Network error", { status: 503 })
      }),
  )
})

// Background sync for form submissions
self.addEventListener("sync", (event) => {
  if (event.tag === "contact-form") {
    event.waitUntil(
      // Handle offline form submissions
      handleOfflineFormSubmissions(),
    )
  }
})

async function handleOfflineFormSubmissions() {
  // Implementation for handling offline form submissions
  console.log("Handling offline form submissions")
}

// Push notifications (if needed in future)
self.addEventListener("push", (event) => {
  if (event.data) {
    const data = event.data.json()
    event.waitUntil(
      self.registration.showNotification(data.title, {
        body: data.body,
        icon: "/tapnex-logo.png",
        badge: "/tapnex-logo.png",
      }),
    )
  }
})
