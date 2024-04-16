import fs from 'fs';
import path from 'path';
import pkg from 'yaml';
const { parse } = pkg;
import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

console.log('test');

interface Technique {
	title: string;
	description?: string;
	date: string;
	category: string;
	components: string[];
	published: boolean;
	successCriteria?: string[];
	level?: string; // Level is optional
	source?: string;
}

export const GET: RequestHandler = async ({ url }) => {
	const techniquesDir = path.resolve('src/lib/techniques');
	const categories = ['basics', 'navigation', 'content', 'form'];
	const level = url.searchParams.get('level') || 'AA';
	const categoryData: Record<string, { components: Record<string, number> }> = {};

	// Define level inclusion based on the requested level
	const validLevels = {
		A: ['A', undefined], // Only level A and undefined (no level specified)
		AA: ['A', 'AA', undefined], // Levels A, AA, and undefined
		AAA: ['A', 'AA', 'AAA', undefined] // All levels and undefined
	};

	try {
		for (const category of categories) {
			const categoryPath = path.join(techniquesDir, category);
			const files = fs.readdirSync(categoryPath);
			const componentsMap: Record<string, number> = {};

			for (const file of files) {
				const filePath = path.join(categoryPath, file);
				const content = fs.readFileSync(filePath, 'utf-8');
				const metadata = parse(content.split('---')[1]) as Technique;

				// Check if the post's level is included in the valid levels for the requested level
				if (metadata.published && validLevels[level].includes(metadata.level)) {
					metadata.components.forEach((component) => {
						componentsMap[component] = (componentsMap[component] || 0) + 1;
					});
				}
			}
			categoryData[category] = { components: componentsMap };
		}
		return new Response(JSON.stringify(categoryData));
	} catch (err) {
		return error(500, `Server error: ${err}`);
	}
};
