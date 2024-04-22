import type { Level } from '$types/types';

// Define level inclusion based on the requested level
export const validLevels: Record<Level, (string | undefined)[]> = {
	A: ['A'], // Only level A and undefined (no level specified)
	AA: ['A', 'AA'], // Levels A, AA, and undefined
	AAA: ['A', 'AA', 'AAA'] // All levels and undefined
};

export function getCurrentLevel(url: URL): Level {
	return (url.searchParams.get('level') as Level) || ('AA' as Level);
}
