import { renderers } from './renderers.mjs';
import { manifest } from './manifest_D397Obb-.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BRH9OpLS.mjs');
const _page1 = () => import('./chunks/404_CrFgAZtR.mjs');
const _page2 = () => import('./chunks/index_DW3xMxTy.mjs');
const _page3 = () => import('./chunks/_.._B739bBCV.mjs');
const _page4 = () => import('./chunks/index_yN2CNuk8.mjs');
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
    "middlewareSecret": "cdecf044-30bd-4d74-baf9-cf4c2f33ac78"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
