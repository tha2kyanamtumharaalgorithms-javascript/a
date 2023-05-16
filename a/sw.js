self.addEventListener("fetch", (event) => {
    console.log(`Handling fetch event for ${event.request.url}`);
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          console.log("Found response in cache:");
          return response;
        }
        console.log("No response found in cache. About to fetch from network…");
        return fetch(event.request)
          .then((response) => {
            console.log("Response from network is:");
            return response;
          })
          .catch((error) => {
            console.error(`Fetching failed: ${error}`);
            throw error;
          });
      })
    );
  });
//   let p="http://127.0.0.1:5500/";
let p='/a/a/';


p=[p+"index.html",
p+"rop.html",
p+"pc.html",
p+"exgst.html",
p+"allcache.html",
p+"my.js",
p+"myy.js",
p+"om.js",
p+"w3.js",
p+"dexie.min.js",
p+"exgst.js",
p+"vue.js",
p+"sw.js",
p+"my.css",
p+"om.css",
p];
self.addEventListener("install", (event) => {
    console.log("Service Worker : Installed!");
    event.waitUntil(
        (async() => {
            try {
                cache_obj = await caches.open('v1').then((c) => {
                p.fetch((v)=>{
                    if (!caches.match(v)) {
                        c.add(v);
                    } 
                })
            });
            }
            catch{
                console.log("error occured while caching...")
            }
        })()
    )
} )



