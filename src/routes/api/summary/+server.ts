import { json } from '@sveltejs/kit';
import type { Post, Categories, Components } from '$lib/types';

const preferredOrder = ['basics', 'content', 'data', 'form', 'special', 'navigation'];

function sortCategories(summary) {
	const orderedSummary = {};

	// Add preferred categories first in the specified order
	preferredOrder.forEach((category) => {
		if (summary[category]) {
			orderedSummary[category] = summary[category];
		}
	});

	// Add all other categories that aren't specified in the preferred order
	Object.keys(summary).forEach((category) => {
		if (!preferredOrder.includes(category)) {
			orderedSummary[category] = summary[category];
		}
	});

	return orderedSummary;
}

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

	// Sort categories according to predefined order and return the result
	return sortCategories(summary);
}

export async function GET() {
	const summary = await getPostsSummary();
	return json(summary);
}
