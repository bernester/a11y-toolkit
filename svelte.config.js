import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import path from 'path';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import remarkToc from 'remark-toc';
import remarkUnwrapImages from 'remark-unwrap-images';
import { createHighlighter } from 'shiki';
import { transformerNotationHighlight } from '@shikijs/transformers';
import { escapeSvelte } from 'mdsvex';

const THEME = 'github-dark-default';

let highlighterPromise;

const getHighlighter = async () => {
	if (!highlighterPromise) {
		highlighterPromise = createHighlighter({
			themes: [THEME],
			langs: ['javascript', 'typescript', 'html', 'css']
		}).then(async (highlighter) => {
			await highlighter.loadLanguage('javascript');
			await highlighter.loadLanguage('typescript');
			await highlighter.loadLanguage('html');
			await highlighter.loadLanguage('css');
			return highlighter;
		});
	}
	return highlighterPromise;
};

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	layout: {
		_: './src/mdsvex.svelte'
	},
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await getHighlighter();
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
