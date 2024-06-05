import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DCyGkiNA.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BRH9OpLS.mjs');
const _page1 = () => import('./chunks/index_izmvbPBt.mjs');
const _page2 = () => import('./chunks/_.._B-HwsPt1.mjs');
const _page3 = () => import('./chunks/index_D2J4tYet.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/[subject]/index.astro", _page1],
    ["src/pages/[subject]/[...slug].astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "3a90bd92-4843-46bc-9ca1-76050e07a23e"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
