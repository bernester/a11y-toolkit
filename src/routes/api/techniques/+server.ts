import { json } from '@sveltejs/kit';
import type { TechniqueMeta } from '$types/types';

async function getTechniques() {
	const techniques: TechniqueMeta[] = [];

	const paths = import.meta.glob('/src/techniques/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<TechniqueMeta, 'slug'>;
			const technique = { ...metadata, slug } satisfies TechniqueMeta;

			technique.published && techniques.push(technique);
		}
	}

	return techniques;
}

export async function GET() {
	const techniques = await getTechniques();
	return json(techniques);
}
