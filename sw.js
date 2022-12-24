const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/",
      "/favicon.ico",
      "/app.js",

      "/00-home/",
      "/00-home/index.html",

      "/01-page/",
      "/01-page/index.html",
      // "/01-page/_sitemap.html",
      // "/01-page/20220618132712_org_agenda.html",
      // "/01-page/20220625092412-org_attach_screenshot.html",
      // "/01-page/20221209131138-동등비교_연산자.html",
      // "/01-page/20221210074652-google_translate.html",
      // "/01-page/20221214102741-prodigy.html",
      // "/01-page/20221215113524-java_development.html",
      // "/01-page/20221215113855-sdkman.html",
      // "/01-page/20221217124836-npm_없이_js_라이브러리_사용하기.html",
      // "/01-page/20221218171719-org_unique_id.html",
      // "/01-page/20221219061119-디지털_가든_만든기.html",
      // "/01-page/20221219061119-디지털_가든_만들기.html",
      // "/01-page/20221219071941-org_roam_node_얻기.html",
      // "/01-page/20221222073142-http_cookie.html",
      // "/01-page/20221223130349-scroll_indicator.html",
      // "/01-page/20221223134610-mac에서_option_을_조합한_입력에_이상한_문자가_찍힐_때.html",
      // "/01-page/20221224093736-서울광장_스케이트장.html",
      // "/01-page/20221224094210-create_link.html",
      // "/01-page/20221224103245-뚝섬ㆍ잠원_눈썰매장.html",

      "/03-about/",
      "/03-about/index.html",

      "/attach/",
      // "/attach/_20220718_142437screenshot.png",
      // "/attach/com.apple.symbolichotkeys.plist-60-modified.jpeg",
      // "/attach/com.apple.symbolichotkeys.plist-60-origin.jpeg",
      // "/attach/com.apple.symbolichotkeys.plist-61-modified.jpeg",
      // "/attach/com.apple.symbolichotkeys.plist-61-origin.jpeg",
      // "/attach/Screenshot 2022-12-18 at 7.43.25 PM.png",
      // "/attach/Screenshot 2022-12-18 at 9.00.50 PM.png",
      // "/attach/Screenshot 2022-12-23 at 1.50.20 PM.png",
      // "/attach/Screenshot 2022-12-23 at 9.07.37 PM.png",
      // "/attach/Screenshot 2022-12-23 at 9.10.39 PM.png",
      // "/attach/Screenshot 2022-12-23 at 9.11.32 PM.png",
      // "/attach/Screenshot 2022-12-23 at 9.12.39 PM.png",
      // "/attach/switcher.png",
      // "/attach/system.png",

      "/img/",
      // "/img/garden.jpg",
      // "/img/sergio-ibannez-W9dFbDmb1Lc-unsplash.jpg",
      // "/img/snail-g0db2990a8_1920.jpg",
      // "/img/subway-g6452b86ed_1920.jpg",

      "/js/",
      // "/js/highlighter-ref-code-blockscript.js",
      // "/js/main.js",
      // "/js/navigator.js",
      // "/js/org-info.js",
      // "/js/script.js",
      // "/js/scroll-indicator.js",
      // "/js/site.js",
      // "/js/sticky-header.js",
      // "/js/theme.js",
      // "/js/top-bottom.js",
      // "/js/word-count.js",

      // "/stylesheets/",
      // "/stylesheets/main.css",
    ])
  );
});

const cacheFirst = async (request) => {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }

  const response = await request.preloadResponse;
  if (response) {
    return response;
  }

  return fetch(request);
};

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});

// Enable navigation preload
const enableNavigationPreload = async () => {
  if (self.registration.navigationPreload) {
    await self.registration.navigationPreload.enable();
  }
};

self.addEventListener("activate", (event) => {
  event.waitUntil(enableNavigationPreload());
});
