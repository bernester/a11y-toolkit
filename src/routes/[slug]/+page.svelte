<script lang="ts">
	import * as config from '$lib/config';
	import Link from '$components/Link.svelte';
	import wcagData from '$lib/wcag.json';
	import { SquareArrowOutUpRight, CircleCheckBig, Circle } from 'lucide-svelte';
	import Tag from '$components/Tag.svelte';
	import type { TechniqueMeta } from '$types/types';
	import { onMount, type SvelteComponent } from 'svelte';
	import TechniqueNav from '$components/TechniqueNav.svelte';
	import { browser } from '$app/environment';
	import Breadcrumb from '$components/Breadcrumb.svelte';

	export let data: {
		url: string;
		content: typeof SvelteComponent;
		meta: TechniqueMeta;
		slug: string;
	};

	let resolved: boolean = false;

	$: resolvedClass = resolved ? 'resolved' : '';

	let parentPage: string = browser ? (localStorage.getItem('parentPage') ?? '') : '';
	let parentType: string = browser ? (localStorage.getItem('parentType') ?? '') : '';
	let parentLevel: string = browser ? (localStorage.getItem('selectedLevel') ?? '') : '';
	let resolvedList: string[];

	onMount(() => {
		if (browser) {
			resolvedList = JSON.parse(localStorage.getItem('resolvedList') || '[]');
			if (resolvedList.includes(data.slug)) {
				resolved = true;
			} else {
				resolved = false;
			}
		}
	});

	function toggleResolved(technique: string) {
		if (!resolved) {
			resolvedList.push(technique);
			localStorage.setItem('resolvedList', JSON.stringify(resolvedList));
			resolved = true;
		} else {
			resolvedList = resolvedList.filter((item: string) => item !== technique);
			localStorage.setItem('resolvedList', JSON.stringify(resolvedList));
			resolved = false;
		}
	}

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
	<title>{data.meta.title} | Technique | {config.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta name="description" content="Free technique to make {parentPage} more accessible" />
</svelte:head>

<article>
	<Breadcrumb
		current={data.meta.title}
		parent={{ name: parentPage, type: parentType, level: parentLevel }}
	/>

	<div class="toolbar">
		<button class="btn toggle-resolve" on:click={() => toggleResolved(data.slug)}>
			{#if resolved}
				<div class="icon">
					<CircleCheckBig role="presentation" />
				</div>
				Mark as not resolved
			{:else}
				<div class="icon">
					<Circle role="presentation" />
				</div>
				Mark as resolved
			{/if}
		</button>
		<TechniqueNav title={data.meta.title} />
	</div>
	<div class={resolvedClass}>
		<hgroup class="space-3">
			<h1 class="page-title space-2">{data.meta.title}</h1>
			{#if data.meta.level || data.meta.components.length > 0}
				<div class="tags space-1">
					{#if data.meta.level}
						<div class="tag surface-3">WCAG 2.2</div>
						<Tag value={data.meta.level} />
					{/if}
					{#if data.meta.components.length > 0}
						{#each data.meta.components as component}
							<a href="/component/{component}" class="tag surface-link">&num;{component}</a>
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
			<section class="box">
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
	</div>
</article>

<style lang="scss">
	.toolbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--size-4);
		padding-block: var(--size-4);
		margin-block: var(--size-7);
		margin-inline: -48px;
		padding-inline: 48px;
		position: sticky;
		top: 0;

		@media (forced-colors: none) {
			&::after {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: var(--color-surface);
				z-index: -1;
				backdrop-filter: blur(8px);
				mask: linear-gradient(to top, transparent, black 50%);
				background-color: var(--toolbar);
			}
		}
	}

	.resolved {
		.page-title {
			text-decoration: line-through;
		}
	}

	.toggle-resolve {
		padding-left: 0;
		align-items: center;

		.icon {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 48px;
			border-right: 1px solid var(--border);
			font-size: 1.5rem;
			margin-right: var(--size-2);
		}
	}
</style>
