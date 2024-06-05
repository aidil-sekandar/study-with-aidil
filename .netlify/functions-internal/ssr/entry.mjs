import { renderers } from './renderers.mjs';
import { manifest } from './manifest_FlBkm3a2.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BRH9OpLS.mjs');
const _page1 = () => import('./chunks/404_CtoBS52n.mjs');
const _page2 = () => import('./chunks/index_iLWrJPZa.mjs');
const _page3 = () => import('./chunks/_.._DnGYjv1x.mjs');
const _page4 = () => import('./chunks/index_B8tEFA4h.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/[subject]/index.astro", _page2],
    ["src/pages/[subject]/[...slug].astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "76160d3c-620b-453d-8cb2-e9b4afecfd38"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
