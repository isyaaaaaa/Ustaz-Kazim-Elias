importScripts('https://g.lazcdn.com/g/lzd/assets/1.1.20/workbox/6.0.2/workbox-sw.js');
workbox.setConfig({
  debug: false,
  modulePathPrefix: 'https://g.lazcdn.com/g/lzd/assets/1.1.20/workbox/6.0.2/',
});

self.__WB_MANIFEST = [{"url":"https://g.lazcdn.com/g/lzdfe/pdp-modules/1.5.5/pc-mod.css","revision":"1.5.5"},{"url":"https://g.lazcdn.com/g/lzdfe/pdp-modules/1.5.5/pc-mod.js","revision":"1.5.5"},{"url":"https://g.lazcdn.com/g/lzdfe/pdp-platform/0.1.23/pc.js","revision":"0.1.23"},{"url":"https://g.lazcdn.com/g/lzdfe/pdp-platform/0.1.23/pc.css","revision":"0.1.23"}];

const { core, routing, strategies, cacheableResponse, expiration, precaching } = workbox;
const { setCacheNameDetails, skipWaiting, clientsClaim } = core;
const { registerRoute } = routing;
const { CacheFirst, StaleWhileRevalidate, Strategy } = strategies;
const { CacheableResponsePlugin } = cacheableResponse;
const { ExpirationPlugin } = expiration;
const { precacheAndRoute, matchPrecache } = precaching;

// skipWaiting();
clientsClaim();

core.setCacheNameDetails({
  prefix: 'node-pdp',
  suffix: 'v1',
  precache: 'precache',
  runtime: 'runtime',
  googleAnalytics: 'google'
});

precacheAndRoute(self.__WB_MANIFEST);

const matchImgFunction = ({url}) => {
  if (url.href.includes('disable_sw=1')) {
    return false;
  }
  return /laz-img-.+.alicdn.com/.test(url.host) || url.host.includes('slatic.net');
};

registerRoute(
  matchImgFunction,
  new CacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 7 * 24 * 60 * 60,
        maxEntries: 100,
      }),
      new CacheableResponsePlugin({
        statuses: [0, 200],
      })
    ]
  })
);

const matchAssetsFunction = ({url}) => {
  if (url.href.includes('disable_sw=1')) {
    return false;
  }
  return url.host === 'g.lazcdn.com'
    || url.host === 'laz-g-cdn.alicdn.com'
    || url.host === 'g.alicdn.com'
    || url.host === 'assets.alicdn.com';
};

registerRoute(
  matchAssetsFunction,
  new CacheFirst({
    cacheName: 'assets-cache',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 7 * 24 * 60 * 60,
        maxEntries: 100,
      }),
      new CacheableResponsePlugin({
        statuses: [0, 200],
      })
    ]
  })
);