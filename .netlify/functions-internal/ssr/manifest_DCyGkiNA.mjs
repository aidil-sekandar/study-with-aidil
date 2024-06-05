import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_8yjJHkrW.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/aidil/Documents/study-with-aidil/src/pages/[subject]/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/aidil/Documents/study-with-aidil/src/pages/[subject]/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/aidil/Documents/study-with-aidil/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[subject]/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[subject]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_BB323SSD.mjs","\u0000@astrojs-manifest":"manifest_DCyGkiNA.mjs","C:/Users/aidil/Documents/study-with-aidil/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_BRH9OpLS.mjs","\u0000@astro-page:src/pages/[subject]/index@_@astro":"chunks/index_izmvbPBt.mjs","\u0000@astro-page:src/pages/[subject]/[...slug]@_@astro":"chunks/_.._B-HwsPt1.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_D2J4tYet.mjs","C:/Users/aidil/Documents/study-with-aidil/src/content/notes/addmath/nota-pembezaan.md?astroContentCollectionEntry=true":"chunks/nota-pembezaan_DPQ0ECEo.mjs","C:/Users/aidil/Documents/study-with-aidil/src/content/notes/addmath/nota-pengamiran.md?astroContentCollectionEntry=true":"chunks/nota-pengamiran_CdHcaDpS.mjs","C:/Users/aidil/Documents/study-with-aidil/src/content/notes/sejarah/nota-kinestetik.md?astroContentCollectionEntry=true":"chunks/nota-kinestetik_C5IQH16K.mjs","C:/Users/aidil/Documents/study-with-aidil/src/content/trials/addmath/sbp-2022.yaml?astroDataCollectionEntry=true":"chunks/sbp-2022_X7NWkP5E.mjs","C:/Users/aidil/Documents/study-with-aidil/src/content/trials/sejarah/perak-2023.yaml?astroDataCollectionEntry=true":"chunks/perak-2023_DNySYviy.mjs","C:/Users/aidil/Documents/study-with-aidil/src/content/notes/addmath/nota-pembezaan.md?astroPropagatedAssets":"chunks/nota-pembezaan_gJ_TVqqX.mjs","C:/Users/aidil/Documents/study-with-aidil/src/content/notes/addmath/nota-pengamiran.md?astroPropagatedAssets":"chunks/nota-pengamiran_DpYZcaWX.mjs","C:/Users/aidil/Documents/study-with-aidil/src/content/notes/sejarah/nota-kinestetik.md?astroPropagatedAssets":"chunks/nota-kinestetik_DZydGuEF.mjs","C:/Users/aidil/Documents/study-with-aidil/src/content/notes/addmath/nota-pembezaan.md":"chunks/nota-pembezaan_hM5HZyCb.mjs","C:/Users/aidil/Documents/study-with-aidil/src/content/notes/addmath/nota-pengamiran.md":"chunks/nota-pengamiran_-1PSxHeb.mjs","C:/Users/aidil/Documents/study-with-aidil/src/content/notes/sejarah/nota-kinestetik.md":"chunks/nota-kinestetik_C6QvzmKM.mjs","@/components/MainWindow":"_astro/MainWindow.DpzmlBfa.js","@astrojs/react/client.js":"_astro/client.BIGLHmRd.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_slug_.BXig6R62.css","/favicon/android-chrome-192x192.png","/favicon/android-chrome-512x512.png","/favicon/apple-touch-icon.png","/favicon/browserconfig.xml","/favicon/favicon-16x16.png","/favicon/favicon-32x32.png","/favicon/favicon.ico","/favicon/mstile-150x150.png","/favicon/safari-pinned-tab.svg","/favicon/site.webmanifest","/images/1.png","/images/book.png","/images/header-image.jpg","/_astro/client.BIGLHmRd.js","/_astro/index.DhYZZe0J.js","/_astro/MainWindow.DpzmlBfa.js","/fonts/PlusJakartaSans/PlusJakartaSans-Italic.ttf","/fonts/PlusJakartaSans/PlusJakartaSans-Italic.woff","/fonts/PlusJakartaSans/PlusJakartaSans-Italic.woff2","/fonts/PlusJakartaSans/PlusJakartaSans.ttf","/fonts/PlusJakartaSans/PlusJakartaSans.woff","/fonts/PlusJakartaSans/PlusJakartaSans.woff2","/images/icons/telegram.svg","/index.html"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false});

export { manifest };
