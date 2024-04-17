import fs from 'fs';
import path from 'path';
import pkg from 'yaml';
const { parse } = pkg;
import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

interface Technique {
	title: string;
	description?: string;
	date: string;
	slug: string;
	category: string;
	components: string[];
	published: boolean;
	successCriteria?: string[];
	level?: string;
	source?: string;
	content?: string;
}

type LevelKey = 'A' | 'AA' | 'AAA';

const validLevels: Record<LevelKey, (string | undefined)[]> = {
	A: ['A', undefined],
	AA: ['A', 'AA', undefined],
	AAA: ['A', 'AA', 'AAA', undefined]
};

export const GET: RequestHandler = async ({ url }) => {
	const levelCode = (url.searchParams.get('level') as LevelKey) || ('AA' as LevelKey);
	const requestedCategory = url.searchParams.get('category') || 'basics';

	const categoryPath = path.resolve('src/lib/techniques', requestedCategory);
	const techniques: Technique[] = []; // Array to store each technique's full details

	try {
		const files = fs.readdirSync(categoryPath);
		files.forEach((file) => {
			if (file.endsWith('.md')) {
				const filePath = path.join(categoryPath, file);
				const slug = filePath.split('/').at(-1)?.replace('.md', '');
				const content = fs.readFileSync(filePath, 'utf-8');
				const metadataPart = content.split('---')[1];
				const bodyContent = content.split('---')[2]; // Assuming that the body is after the second ---
				const metadata = parse(metadataPart) as Technique;

				if (metadata.published && validLevels[levelCode].includes(metadata.level)) {
					metadata.slug = slug;
					metadata.content = bodyContent.trim(); // Store body content in metadata
					techniques.push(metadata); // Add the full technique metadata to the array
				}
			}
		});

		return new Response(JSON.stringify(techniques), {
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (err) {
		return error(500, `Failed to read techniques from category ${requestedCategory}: ${err}`);
	}
};
