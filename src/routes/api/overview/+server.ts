import fs from 'fs';
import path from 'path';
import pkg from 'yaml';
const { parse } = pkg;
import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import type { Level, Technique } from '$types/types';
import { validLevels } from '$lib/validLevels';

const structurePath = 'src/lib/structure.json';

// get the structure from the
const structure = JSON.parse(fs.readFileSync(structurePath, 'utf-8'));

const techniquesDir = path.resolve('src/lib/techniques');
const files = fs.readdirSync(techniquesDir);

export const GET: RequestHandler = async ({ url }) => {
	// get the currently selected lebel form the url
	const level = (url.searchParams.get('level') as Level) || ('AA' as Level);
	const techniqueMap: Record<string, number> = {};
	const categoryData: Record<string, { components: Record<string, number> }> = {};

	try {
		for (const file of files) {
			const filePath = path.join(techniquesDir, file);
			const fileContent = fs.readFileSync(filePath, 'utf-8');
			const metadata = parse(fileContent.split('---')[1]) as Technique;

			// Check if the post's level is included in the valid levels for the requested level
			if (metadata.published && validLevels[level].includes(metadata.level)) {
				metadata.components.forEach((component) => {
					techniqueMap[component] = (techniqueMap[component] || 0) + 1;
				});
			}
		}

		for (const category of structure.categories) {
			const componentsMap: Record<string, number> = {};
			const categoryTitle = category.title;
			const components = category.components;

			for (const component of components) {
				const componentTitle = component.title;

				if (techniqueMap[componentTitle]) {
					componentsMap[componentTitle] = techniqueMap[componentTitle];
				}
			}

			categoryData[categoryTitle] = { components: componentsMap };
		}

		return new Response(JSON.stringify(categoryData));
	} catch (err) {
		return error(500, `Server error: ${err}`);
	}
};
