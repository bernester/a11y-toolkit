import type { Level, Structure, Technique } from '$types/types';
import structureJson from '$lib/structure.json';
import { validLevels } from '$lib/validLevels';

const structure: Structure = structureJson;

function getDescription(category: string) {
	for (const cat of structure.categories) {
		if (cat.title === category) {
			return cat.description;
		}
	}
}

export async function load({ fetch, params, url }) {
	const level = (url.searchParams.get('level') as Level) || ('AA' as Level);
	// Access the slug from the parameters
	const { slug } = params;
	// get the description of the category
	const introText = getDescription(slug);

	const response = await fetch('../../api/techniques');
	const techniques: Technique[] = await response.json();

	// Filter posts to only include those where the `components` array contains the slug
	const filteredTechniques = techniques.filter(
		(technique) => technique.category.includes(slug) && validLevels[level].includes(technique.level)
	);

	return { techniques: filteredTechniques, introText, slug };
}
