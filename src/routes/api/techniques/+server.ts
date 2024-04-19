import { json } from '@sveltejs/kit';
import type { Technique } from '$types/types';

async function getTechniques() {
	const techniques: Technique[] = [];

	const paths = import.meta.glob('/src/lib/techniques/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Technique, 'slug'>;
			const technique = { ...metadata, slug } satisfies Technique;

			technique.published && techniques.push(technique);
		}
	}

	return techniques;
}

export async function GET() {
	const techniques = await getTechniques();
	return json(techniques);
}
