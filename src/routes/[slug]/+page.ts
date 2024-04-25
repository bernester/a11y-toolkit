import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const { slug } = params;

	try {
		const post = await import(`../../techniques/${params.slug}.md`);

		return {
			content: post.default,
			meta: post.metadata,
			slug
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
}
