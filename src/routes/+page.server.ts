import { error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import type { Level, TechniqueMeta } from '$types/types';
import { getCurrentLevel, validLevels } from '$lib/levels';

// get the directory of the `.md` files with techniques
const techniquesDir = path.resolve('src/lib/techniques');
const files = fs.readdirSync(techniquesDir);

async function getTechniqueCount(level: Level) {
	let techniqueCount: number = 0;
	for (const file of files) {
		const filePath = path.join(techniquesDir, file);
		const fileContent = await import(filePath);
		const metadata = fileContent.metadata as TechniqueMeta;

		if (metadata.published && validLevels[level].includes(metadata.level)) {
			techniqueCount++;
		}
	}
	return techniqueCount;
}

export async function load({ fetch, url }) {
	const currentLevel = getCurrentLevel(url);

	try {
		const techniqueCount = await getTechniqueCount(currentLevel);
		const response = await fetch(`/api/overview?level=${currentLevel}`);

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
