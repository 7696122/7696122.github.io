const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });
      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed");
      } else if (registration.active) {
        console.log("Service worker active");
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

const unregisterServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/sw.js", { scope: "/" })
      .then((registration) => {
        // registration worked
        console.log("Registration succeeded.");
        registration.unregister().then((boolean) => {
          // if boolean = true, unregister is successful
        });
      })
      .catch((error) => {
        // registration failed
        console.error(`Registration failed with ${error}`);
      });
  }
};

unregisterServiceWorker();
// registerServiceWorker();
