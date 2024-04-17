import fs from 'fs';
import path from 'path';
import pkg from 'yaml';
const { parse } = pkg;
import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
	const level = url.searchParams.get('level') || 'AA';
	const requestedCategory = url.searchParams.get('category') || 'basics'; // Default to 'basics' if not specified

	// Further filter for the specified category
	const categoryPath = path.resolve('src/lib/techniques', requestedCategory);
	const componentsMap: Record<string, number> = {};

	// Define level inclusion based on the requested level
	const validLevels = {
		A: ['A', undefined], // Only level A and undefined (no level specified)
		AA: ['A', 'AA', undefined], // Levels A, AA, and undefined
		AAA: ['A', 'AA', 'AAA', undefined] // All levels and undefined
	};

	try {
		const files = fs.readdirSync(categoryPath);
		files.forEach((file) => {
			const filePath = path.join(categoryPath, file);
			const content = fs.readFileSync(filePath, 'utf-8');
			const metadata = parse(content.split('---')[1]) as Technique;
			if (metadata.published && validLevels[level].includes(metadata.level)) {
				metadata.components.forEach((component) => {
					componentsMap[component] = (componentsMap[component] || 0) + 1;
				});
			}
		});

		return new Response(JSON.stringify(componentsMap));
	} catch (err) {
		return error(500, `Failed to read techniques from category ${requestedCategory}: ${err}`);
	}
};
