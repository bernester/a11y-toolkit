import type { Level } from '$types/types';

// Define level inclusion based on the requested level
export const validLevels: Record<Level, (string | undefined)[]> = {
	A: ['A'], // Only level A and undefined (no level specified)
	AA: ['A', 'AA'], // Levels A, AA, and undefined
	AAA: ['A', 'AA', 'AAA'] // All levels and undefined
};

export function getCurrentLevel(url: URL): Level {
	const level = url.searchParams.get('level') as Level;
	if (level && Object.keys(validLevels).includes(level)) {
		return level;
	}
	return 'AA'; // Default level if the provided level is invalid or not provided
}
