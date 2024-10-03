import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$components: '/src/components',
			$lib: '/src/lib'
			// Add other aliases if needed
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler', // or "modern", "legacy"
				importers: [
					// ...
				]
			}
		}
	}
});
