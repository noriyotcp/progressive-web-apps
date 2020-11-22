"use strict";

self.addEventListener("install", (event) => {
  console.log("From SW: Install Event");
});

self.addEventListener("activate", (event) => {
  console.log("From SW: Activate Event");
});
