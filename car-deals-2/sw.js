"use strict";

const carDealsCacheName = "carDealsCacheV1";
const carDealsCachePagesName = "carDealsCachePagesV1";
const carDealsCache = [carDealsCacheName, carDealsCachePagesName];
const carDealsCacheFiles = [
  "https://cdn.jsdelivr.net/npm/pwacompat@2.0.17/pwacompat.min.js",
  "https://cdn.jsdelivr.net/gh/bstavroulakis/progressive-web-apps/resources/localforage.js",
  "js/app.js",
  "js/carPageService.js",
  "js/carService.js",
  "js/clientStorage.js",
  "js/constants.js",
  "js/swRegister.js",
  "js/template.js",
  "/",
  "index.html",
  "style.css",
];

self.addEventListener("install", (event) => {
  console.log("From SW: Install Event");
  self.skipWaiting();
  const preCache = async () => {
    const cache = await caches.open(carDealsCacheName);
    return cache.addAll(carDealsCacheFiles);
  };
  event.waitUntil(preCache());
});

self.addEventListener("activate", (event) => {
  console.log("From SW: Activate Event");
  self.clients.claim();
  const clearCache = async () => {
    const keys = await caches.keys();
    keys.forEach(async k => {
      if (carDealsCache.includes(k)) {
        return;
      }
      await caches.delete(k);
    })
  };
  event.waitUntil(clearCache());
});
