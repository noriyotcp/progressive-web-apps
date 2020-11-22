export default async () => {
  if (!("serviceWorker" in navigator)) {
    return;
  }
  const swRegistration = await navigator.serviceWorker.register("sw.js", {
    scope: "",
  });
  let serviceWorker;

  if (swRegistration.installing) {
    console.log("Resolved on installing: ", swRegistration);
    serviceWorker = swRegistration.installing;
  } else if (swRegistration.waiting) {
    console.log("Resolved on installed/waiting: ", swRegistration);
    serviceWorker = swRegistration.waiting;
  } else if (swRegistration.waiting) {
    console.log("Resolved on activated: ", swRegistration);
    serviceWorker = swRegistration.active;
  }

  serviceWorker?.addEventListener("statechange", (e) => {
    console.log(e.target.state);
  });

  swRegistration.addEventListener("updatefound", () => {
    serviceWorker?.addEventListener("statechange", (e) => {
      console.log("New service worker state: ", e.target.state);
    });
    console.log("New service worker found!", swRegistration);
  });

  navigator.serviceWorker.addEventListener("controllerchange", () => {
    console.log("Controller Changed!");
  });

  setInterval(() => {
    swRegistration.update();
  }, 1000 * 5);
};
