import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_8yjJHkrW.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"test\">test</h1>";

				const frontmatter = {"title":"Nota Pengamiran","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laudantium necessitatibus labore.","subject":"Add Math","img":"/images/1.png","url":"nota-pengamiran"};
				const file = "C:/Users/aidil/Documents/study-with-aidil/src/content/notes/addmath/nota-pengamiran.md";
				const url = undefined;
				function rawContent() {
					return "\r\n# test";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"test","text":"test"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
