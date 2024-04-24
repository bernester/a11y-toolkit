<script lang="ts">
	import Link from '$components/Link.svelte';
	import wcagData from '$lib/wcag.json';
	import { SquareArrowOutUpRight } from 'lucide-svelte';
	import LevelTag from '$components/LevelTag.svelte';
	import type { TechniqueMeta } from '$types/types';
	import { type SvelteComponent } from 'svelte';
	import TechniqueNav from '$components/TechniqueNav.svelte';
	import { browser } from '$app/environment';
	import Breadcrumb from '$components/Breadcrumb.svelte';

	export let data: {
		url: string;
		content: typeof SvelteComponent;
		meta: TechniqueMeta;
	};

	let parentPage: string = browser ? localStorage.getItem('parentPage') ?? '' : '';
	let parentType: string = browser ? localStorage.getItem('parentType') ?? '' : '';
	let parentLevel: string = browser ? localStorage.getItem('selectedLevel') ?? '' : '';

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
	<Breadcrumb
		current={data.meta.title}
		parent={{ name: parentPage, type: parentType, level: parentLevel }}
	/>

	<TechniqueNav title={data.meta.title} style="margin-bottom: var(--size-8);" />

	<hgroup>
		<h1 class="page-title space-2">{data.meta.title}</h1>
		{#if data.meta.level || data.meta.components.length > 0}
			<div class="tags space-1">
				{#if data.meta.level}
					<div class="tag surface-3">WCAG 2.2</div>
					<LevelTag value={data.meta.level} />
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
						<strong>{refId} {details?.title || ''}</strong> (Level: {details?.level || ''})
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

	<TechniqueNav title={data.meta.title} style="margin-top: var(--size-10);" />
</article>

<style>
	.enriched {
		padding: var(--size-6);
		background-color: var(--surface-2);
		border-radius: var(--radius-3);
	}
</style>
