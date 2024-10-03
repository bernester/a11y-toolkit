<script lang="ts">
	import * as config from '$lib/config';
	import ComponentCard from '$components/ComponentCard.svelte';
	import { getCurrentLevel, levelDescriptions } from '$lib/levels.js';
	import { page } from '$app/stores';
	import LevelFilter from '$components/LevelFilter.svelte';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import type { CategoriesTree, ComponentStats, Level } from '$types/types.js';
	import { ListRestart } from 'lucide-svelte';
	export let data;

	$: techniqueCount = data.techniqueCount as number;
	$: componentStats = {} as ComponentStats;
	$: categoryTree = {} as CategoriesTree;
	$: selectedLevel = getCurrentLevel($page.url) as Level;
	$: structure = data.structure;

	let resolvedList: string[] = [];

	function resetResolved() {
		localStorage.setItem('resolvedList', '[]');
		location.reload();
	}

	onMount(async () => {
		// get the list of resolved techniques
		// from the local storage
		if (browser) {
			resolvedList = JSON.parse(localStorage.getItem('resolvedList') || '[]');
		}
	});

	$: {
		componentStats = data.summary.reduce((acc: ComponentStats, entry) => {
			entry.components.forEach((component) => {
				if (!acc[component]) {
					acc[component] = { total: 0, resolved: 0 };
				}
				acc[component].total += 1;
				if (resolvedList.includes(entry.slug)) {
					acc[component].resolved += 1;
				}
			});
			return acc;
		}, {});

		// Reconstruct categoryTree whenever componentStats changes
		if (structure) {
			categoryTree = structure.categories.reduce((tree: CategoriesTree, category) => {
				let componentsMap: ComponentStats = {};
				category.components.forEach((component) => {
					const title = component.title;
					if (componentStats[title]) {
						componentsMap[title] = componentStats[title];
					}
				});
				tree[category.title] = { components: componentsMap };
				return tree;
			}, {});
		}
	}
</script>

<svelte:head>
	<title>
		{levelDescriptions[selectedLevel]} techniques for accessibility champions - {config.title}
	</title>
	<meta
		name="description"
		content="An open-source library of techniques to avoid the most common accessibility failures."
	/>
</svelte:head>

{#if categoryTree}
	<hgroup class="space-3">
		<h1 class="page-title space-2">
			<span class="tint-link">
				{techniqueCount || 0} techniques
			</span> to avoid the most common accessibility failures.
		</h1>

		{#if resolvedList.length > 0}
			<button class="btn" on:click={resetResolved}>
				<ListRestart role="presentation" />
				reset resolved
			</button>
		{/if}
	</hgroup>

	<LevelFilter {selectedLevel} />

	<h2 class="page-subheader space-3">Select a category</h2>
	{#each Object.keys(categoryTree) as category}
		<section class="space-3">
			<hgroup class="category-hgroup space-2">
				<h3 class="page-header">{category}</h3>
				<a href={`/category/${category}?level=${selectedLevel}`} class="btn"
					>show all <span class="sr-only">techiques for {category}</span></a
				>
			</hgroup>
			<ul class="techniques">
				{#each Object.entries(categoryTree[category].components) as [component, count]}
					<li>
						<ComponentCard {component} {count} level={selectedLevel} />
					</li>
				{/each}
			</ul>
		</section>
	{/each}
{:else}
	<p>Loading...</p>
{/if}

<style lang="scss">
	.techniques {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		align-items: start;
		row-gap: var(--size-4);
		grid-template-columns: 1fr 1fr;
		column-gap: var(--size-2);
		row-gap: var(--size-4);

		li {
			flex: 1 0;
		}

		@media screen and (min-width: 768px) {
			grid-template-columns: 1fr 1fr 1fr;
			column-gap: var(--size-4);
			row-gap: var(--size-6);
		}
	}

	.category-hgroup {
		display: flex;
		gap: var(--size-4);
		justify-content: space-between;
		align-items: center;
	}
</style>
