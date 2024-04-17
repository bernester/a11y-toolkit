import { error } from '@sveltejs/kit';

export async function load({ fetch, params, url }) {
	const category = params.slug;
	const levelCode = url.searchParams.get('level') || 'AA';

	const levelTranslation: { [key: string]: string } = {
		A: 'basic',
		AA: 'recommended',
		AAA: 'advanced'
	};

	const levelDescription = levelTranslation[levelCode] || 'recommended'; // Default to "recommended" if not found

	try {
		const response = await fetch(`/api/category?level=${levelCode}&category=${category}`);
		if (!response.ok) {
			console.error('Failed to fetch data:', response.statusText);
			throw new Error('Failed to fetch data');
		}
		const data = await response.json();

		return {
			techniques: data,
			category,
			level: levelDescription
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
