import type { Level, Technique } from '$types/types';
import componentsIntroJson from '$lib/componentsIntro.json';

interface ComponentsIntro {
	[key: string]: string;
}
const componentsIntro: ComponentsIntro = componentsIntroJson;

// Define level inclusion based on the requested level
const validLevels: Record<Level, (string | undefined)[]> = {
	A: ['A', undefined], // Only level A and undefined (no level specified)
	AA: ['A', 'AA', undefined], // Levels A, AA, and undefined
	AAA: ['A', 'AA', 'AAA', undefined] // All levels and undefined
};

export async function load({ fetch, params, url }) {
	const level = (url.searchParams.get('level') as Level) || ('AA' as Level);
	// Access the slug from the parameters

	const { slug } = params;
	const introText = componentsIntro[slug];

	const response = await fetch('../../api/techniques');
	const techniques: Technique[] = await response.json();

	// Filter posts to only include those where the `components` array contains the slug
	const filteredTechniques = techniques.filter(
		(technique) =>
			technique.components.includes(slug) && validLevels[level].includes(technique.level)
	);

	return { techniques: filteredTechniques, introText, slug };
}
