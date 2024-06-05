import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_8yjJHkrW.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Cara paling mudah untuk hafal sejarah adalah menggunakan teknik kinestetik.</p>\n<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, omnis officiis? Quaerat, culpa. Unde.</p>\n<p>deleniti ratione voluptatum consequatur itaque ipsam nesciunt pariatur maxime quos nostrum totam.</p>\n<p>repellendus enim ad aspernatur eos, libero placeat facere consectetur. Rerum, voluptas dolores. Vitae, vero.</p>";

				const frontmatter = {"title":"Nota Kinestetik","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laudantium necessitatibus labore.","subject":"Sejarah","img":"/images/1.png","url":"nota-kinestetik"};
				const file = "C:/Users/aidil/Documents/study-with-aidil/src/content/notes/sejarah/nota-kinestetik.md";
				const url = undefined;
				function rawContent() {
					return "\r\nCara paling mudah untuk hafal sejarah adalah menggunakan teknik kinestetik.\r\n\r\n\r\nLorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, omnis officiis? Quaerat, culpa. Unde.\r\n\r\ndeleniti ratione voluptatum consequatur itaque ipsam nesciunt pariatur maxime quos nostrum totam.\r\n\r\nrepellendus enim ad aspernatur eos, libero placeat facere consectetur. Rerum, voluptas dolores. Vitae, vero.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
