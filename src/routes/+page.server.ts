import { error } from '@sveltejs/kit';
import structureJson from '$lib/data/structure.json';
import type { Level, Structure, TechniqueMeta } from '$types/types';
import { getCurrentLevel, validLevels } from '$lib/levels';

// get the total count of techniques for the selected level
async function getTotalCount(level: Level) {
	let techniqueCount: number = 0;

	const paths = import.meta.glob('/src/techniques/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<TechniqueMeta, 'slug'>;

			if (metadata.published && validLevels[level].includes(metadata.level)) {
				techniqueCount++;
			}
		}
	}
	return techniqueCount;
}

async function getSummary(level: Level) {
	const summary: { slug: string; components: string[] }[] = [];
	const paths = import.meta.glob('/src/techniques/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<TechniqueMeta, 'slug'>;

			if (metadata.published && validLevels[level].includes(metadata.level)) {
				const fileSummary = {
					slug,
					components: metadata.components
				};
				summary.push(fileSummary);
			}
		}
	}

	return summary;
}

export async function load({ url }) {
	try {
		const currentLevel = getCurrentLevel(url);
		const structure: Structure = structureJson;
		const techniqueCount = await getTotalCount(currentLevel);
		const summary = await getSummary(currentLevel);

		return {
			summary: summary,
			techniqueCount: techniqueCount,
			structure: structure
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
