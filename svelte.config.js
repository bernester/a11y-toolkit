import { transformerNotationHighlight } from '@shikijs/transformers';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { getHighlighter } from 'shiki';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import path from 'path';
import rehypeExternalLinks from 'rehype-external-links';

const THEME = 'github-dark-default';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	layout: {
		_: './src/mdsvex.svelte'
	},
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await getHighlighter({
				themes: [THEME],
				langs: ['javascript', 'typescript', 'html', 'css']
			});
			await highlighter.loadLanguage('javascript', 'typescript', 'html', 'css');
			const html = escapeSvelte(
				highlighter.codeToHtml(code, {
					lang,
					theme: THEME,
					transformers: [transformerNotationHighlight()]
				})
			);
			return `{@html \`${html}\` }`;
		}
	},
	remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }]],
	rehypePlugins: [
		rehypeSlug,
		[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
	]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		adapter: adapter(),
		alias: {
			$components: path.resolve('./src/components'),
			$lib: path.resolve('./src/lib'),
			$types: path.resolve('./src/types')
		}
	}
};

export default config;
