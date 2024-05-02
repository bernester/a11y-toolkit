// vitest.config.ts
import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	plugins: [svelte()],
	resolve: {
		alias: [{ find: /^svelte$/, replacement: 'svelte/internal' }]
	},
	test: {
		globals: true,
		environment: 'jsdom'
	}
});
