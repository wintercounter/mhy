workbox.precaching.precacheAndRoute(self.__precacheManifest)

workbox.routing.registerRoute(
    new RegExp('^https://rickandmortyapi.com/api/*'),
    workbox.strategies.cacheFirst({
        cacheName: 'rm-api-cache',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200]
            })
        ]
    })
)