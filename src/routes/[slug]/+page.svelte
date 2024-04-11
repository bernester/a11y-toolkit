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

	function getCriterionDetails(refId) {
		const criteria = wcagData[0].success_criteria;
		const criterion = criteria.find((c) => c.ref_id === refId);
		return criterion ? { title: criterion.title, level: criterion.level } : null;
	}

	// Enrich successCriteria with details for rendering
	const enrichedSuccessCriteria = data.meta.successCriteria.map((refId) => ({
		refId,
		details: getCriterionDetails(refId),
		references: findReferences(refId)
	}));
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

	{#if data.meta.source}
		<section>
			<h2 class="section-subheading">Here you can read more:</h2>
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
	{#if enrichedSuccessCriteria}
		<section>
			<h2 class="section-subheading">Covered WCAG 2.2 success criteria:</h2>
			<ul>
				{#each enrichedSuccessCriteria as { refId, details, references }}
					<li>
						<strong>{refId} {details.title}</strong> (Level: {details.level})
						<ul>
							{#each references as { url, title }}
								<li>
									<Link href={url} target="_blank">{title}</Link>
								</li>
							{/each}
						</ul>
					</li>
				{/each}
			</ul>
		</section>
	{/if}
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

	ul {
		margin-bottom: var(--size-6);
	}
</style>
