import type { Level } from '$types/types';

// Define level inclusion based on the requested level
export const validLevels: Record<Level, (string | undefined)[]> = {
	A: ['A', undefined], // Only level A and undefined (no level specified)
	AA: ['A', 'AA', undefined], // Levels A, AA, and undefined
	AAA: ['A', 'AA', 'AAA', undefined] // All levels and undefined
};
