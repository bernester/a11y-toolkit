import { json } from '@sveltejs/kit';
import type { Post, Categories, Components } from '$lib/types';

async function getPostsSummary() {
	const posts: Post[] = [];
	const summary: {
		[category in Categories]?: {
			[component in Components]?: number;
		};
	} = {};

	const paths = import.meta.glob('/src/posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;

			if (post.published) {
				posts.push(post);
				post.categories.forEach((category) => {
					if (!summary[category]) {
						summary[category] = {};
					}

					post.components.forEach((component) => {
						if (!summary[category]![component]) {
							summary[category]![component] = 1;
						} else {
							summary[category]![component]! += 1;
						}
					});
				});
			}
		}
	}

	// Optionally, sort the categories and components within the summary if needed.
	return summary;
}

export async function GET() {
	const summary = await getPostsSummary();
	return json(summary);
}
