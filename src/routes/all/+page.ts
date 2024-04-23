import type { TechniqueMeta } from '$types/types';

export async function load({ fetch }) {
	const response = await fetch('../../api/techniques');
	const techniques: TechniqueMeta[] = await response.json();
	const techniqueGroup: Record<string, string> = {};

	techniques.forEach((technique) => {
		techniqueGroup[technique.title] = technique.slug;
	});

	return { techniques, techniqueGroup };
}
