<script lang="ts">
	import Link from '$components/Link.svelte';
	import wcagData from '$lib/wcag.json';
	import BackButton from '$components/BackButton.svelte';
	import { SquareArrowOutUpRight } from 'lucide-svelte';
	import LevelTag from '$components/LevelTag.svelte';

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
		<BackButton />
		<h1 class="page-title space-2">{data.meta.title}</h1>
		{#if enrichedSuccessCriteria && enrichedSuccessCriteria.length > 0}
			<div class="tags space-1">
				<div class="tag surface-3">WCAG 2.2</div>
				{#if data.meta.level}
					<LevelTag level={data.meta.level} />
				{/if}
				{#if data.meta.components.length > 0}
					{#each data.meta.components as component}
						<a href="/component/{component}" class="tag link">&num;{component}</a>
					{/each}
				{/if}
			</div>
		{/if}
	</hgroup>

	<!-- Post -->
	<div class="prose space-3">
		<div class="space-2">
			<svelte:component this={data.content} />
		</div>

		{#if data.meta.source}
			<a
				aria-label={`Our source for ${data.meta.title}`}
				href={data.meta.source}
				target="_blank"
				class="btn"
				>Source of this technique <SquareArrowOutUpRight class="blank-icon" />
				<span class="sr-only">&nbsp;Opens in a new window</span></a
			>
		{/if}
	</div>

	{#if enrichedSuccessCriteria && enrichedSuccessCriteria.length > 0}
		<section class="enriched">
			<h2 class="page-subheader space-2">Learn more about the related success criteria:</h2>
			{#each enrichedSuccessCriteria as { refId, details, references }}
				<div>
					<div class="space-2">
						<strong>{refId} {details.title}</strong> (Level: {details.level})
					</div>
					<ul class="space-2">
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
	.enriched {
		padding: var(--size-6);
		background-color: var(--surface-2);
		border-radius: var(--radius-3);
	}
</style>
