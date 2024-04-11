<script lang="ts">
	import * as config from '$lib/config';
	export let data: {
		posts: any;
		slug: string;
		introText?: string;
	};
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<!-- Posts -->
<section>
	<h1 class="page-title">{data.slug}</h1>
	{#if data.introText}
		{@html data.introText}
	{/if}

	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href="/{post.slug}" class="title">{post.title}</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	.page-title {
		margin-bottom: var(--size-5);
		text-transform: capitalize;
	}
	.posts {
		display: grid;
		gap: 2rem;
	}

	.post {
		max-inline-size: var(--size-content-3);
	}

	.post:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-7);
	}

	.title {
		font-size: var(--font-size-fluid-3);
		text-transform: capitalize;
	}
</style>
