import type { Post } from '$lib/types';

export async function load({ fetch, params }) {
    // Access the slug from the parameters
    const { slug } = params;

    const response = await fetch('../../api/posts');
    const posts: Post[] = await response.json();

    // Filter posts to only include those where the `components` array contains the slug
    const filteredPosts = posts.filter(post => post.components.includes(slug));

    return { posts: filteredPosts };
}
