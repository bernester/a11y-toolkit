<script lang="ts">
	import Link from '$lib/components/link.svelte';

	export let data: {
		url: string;
		content: any;
		meta: any;
	};
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<!-- Title -->
	<hgroup>
		<h1 class="page-heading">{data.meta.title}</h1>
		<!-- Tags -->
		<div class="tags">
			{#each data.meta.components as component}
				<a href="/component/{component}" class="surface-2">&num;{component}</a>
			{/each}
		</div>
	</hgroup>

	<!-- Post -->
	<div class="prose">
		<svelte:component this={data.content} />
	</div>

	<section>
		<h2 class="section-subheading">Here you can read more:</h2>
		{#if data.meta.source}
			<Link ariaLabel={`Our source for ${data.meta.title}`} href={data.meta.source} target="_blank"
				>Our source for this technique</Link
			>
		{/if}
	</section>
</article>

<style>
	.page-heading {
		margin-bottom: var(--size-4);
	}

	.section-subheading {
		margin-bottom: var(--size-4);
	}

	.prose {
		margin-bottom: var(--size-8);
	}

	.tags {
		display: flex;
		gap: var(--size-3);
	}

	.tags > * {
		padding: var(--size-2) var(--size-3);
		border-radius: var(--radius-round);
	}
</style>
