let summary = {};

export async function load({ fetch }) {
	const response = await fetch('api/summary');
	summary = await response.json();

	return { summary };
}
