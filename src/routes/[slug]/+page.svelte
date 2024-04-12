<script lang="ts">
	import Link from '$lib/components/link.svelte';
	import wcagData from '$lib/wcag.json';

	export let data: {
		url: string;
		content: any;
		meta: any;
	};

	function findReferences(refId: string) {
		const criteria = wcagData[0].success_criteria;
		const criterion = criteria.find((c) => c.ref_id === refId);
		return criterion ? criterion.references.map((ref) => ({ url: ref.url, title: ref.title })) : [];
	}

	function getCriterionDetails(refId: string) {
		const criteria = wcagData[0].success_criteria;
		const criterion = criteria.find((c) => c.ref_id === refId);
		return criterion ? { title: criterion.title, level: criterion.level } : null;
	}

	// Check if successCriteria is available and non-empty before mapping
	const enrichedSuccessCriteria =
		data.meta.successCriteria && data.meta.successCriteria.length > 0
			? data.meta.successCriteria.map((refId: string) => ({
					refId,
					details: getCriterionDetails(refId),
					references: findReferences(refId)
				}))
			: [];
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
		<h1 class="page-title">{data.meta.title}</h1>
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

	{#if data.meta.source}
		<section>
			<!-- <h2 class="page-subheader">Here you can read more:</h2> -->
			<ul>
				<li>
					<Link
						ariaLabel={`Our source for ${data.meta.title}`}
						href={data.meta.source}
						target="_blank">Our source for this technique</Link
					>
				</li>
			</ul>
		</section>
	{/if}
	{#if enrichedSuccessCriteria && enrichedSuccessCriteria.length > 0}
		<section>
			<h2 class="page-subheader">Learn more about the related success criteria:</h2>
			{#each enrichedSuccessCriteria as { refId, details, references }}
				<div>
					<div style="margin-bottom: var(--size-4);">
						<strong>{refId} {details.title}</strong> (Level: {details.level})
					</div>
					<ul>
						{#each references as { url, title }}
							<li>
								<Link href={url} target="_blank">{title}</Link>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</section>
	{/if}
</article>

<style>
	.page-title {
		margin-bottom: var(--size-4);
	}

	.page-subheader {
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

	ul {
		margin-bottom: var(--size-6);
	}
</style>
