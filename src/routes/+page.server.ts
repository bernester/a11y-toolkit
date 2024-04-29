import { error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import type { Level, TechniqueMeta } from '$types/types';
import { getCurrentLevel, validLevels } from '$lib/levels';

// get the directory of the `.md` files with techniques
const techniquesDir = path.resolve('src/techniques');
const files = fs.readdirSync(techniquesDir);

// get the total count of techniques for the selected level
async function getTotalCount(level: Level) {
	let techniqueCount: number = 0;
	for (const file of files) {
		const filePath = path.join(techniquesDir, file);
		const fileContent = await import(/* @vite-ignore */ filePath);
		const metadata = fileContent.metadata as TechniqueMeta;

		if (metadata.published && validLevels[level].includes(metadata.level)) {
			techniqueCount++;
		}
	}
	return techniqueCount;
}

async function getSummary(level: Level) {
	const summary: { slug: string; components: string[] }[] = [];

	for (const file of files) {
		const slug = file.replace('.md', '');
		const filePath = path.join(techniquesDir, file);
		const fileContent = await import(/* @vite-ignore */ filePath);
		const metadata = fileContent.metadata as TechniqueMeta;

		if (metadata.published && validLevels[level].includes(metadata.level)) {
			const fileSummary = {
				slug,
				components: metadata.components
			};
			summary.push(fileSummary);
		}
	}

	return summary;
}

export async function load({ url }) {
	const currentLevel = getCurrentLevel(url);

	try {
		const techniqueCount = await getTotalCount(currentLevel);
		const summary = await getSummary(currentLevel);

		return {
			summary: summary,
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
