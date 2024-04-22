import { error } from '@sveltejs/kit';

import fs from 'fs';
import { promises as fsPromises } from 'fs';

import path from 'path';
import pkg from 'yaml';
const { parse } = pkg;
import type { Level, Technique } from '$types/types';
import { validLevels } from '$lib/validLevels';

// get the directory of the `.md` files with techniques
const techniquesDir = path.resolve('src/lib/techniques');
const files = fs.readdirSync(techniquesDir);

export async function load({ fetch, url }) {
	const level = (url.searchParams.get('level') as Level) || ('AA' as Level);

	try {
		let techniqueCount: number = 0;
		for (const file of files) {
			const filePath = path.join(techniquesDir, file);
			const fileContent = await fsPromises.readFile(filePath, 'utf-8');
			const metadata = parse(fileContent.split('---')[1]) as Technique;

			if (metadata.published && validLevels[level].includes(metadata.level)) {
				techniqueCount++;
			}
		}

		const response = await fetch(`/api/overview?level=${level}`);

		if (!response.ok) {
			console.error('Failed to fetch data:', response.statusText);
			// Log additional details from the response for debugging
			const errorResponse = await response.text(); // Capture the plain text response if any
			console.error('Error details:', errorResponse);
			throw new Error('Failed to fetch data');
		}

		const data = await response.json();

		return {
			categoriesData: data,
			techniqueCount: techniqueCount
		};
	} catch (err) {
		// Check if the error is an instance of Error
		if (err instanceof Error) {
			console.error('Error fetching data:', err.message);
			return error(500, `Error fetching data: ${err.message}`);
		} else {
			// Handle non-Error objects thrown as errors
			console.error('Error fetching data:', err);
			return error(500, 'Unknown error occurred');
		}
	}
}
