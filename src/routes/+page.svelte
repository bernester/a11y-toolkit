<script lang="ts">
	import * as config from '$lib/config';
	import ComponentCard from '$components/ComponentCard.svelte';
	import { getCurrentLevel } from '$lib/levels.js';
	import { page } from '$app/stores';
	import LevelFilter from '$components/LevelFilter.svelte';

	type CategoriesData = {
		[key: string]: {
			components: {
				[key: string]: number;
			};
		};
	};

	export let data;
	$: techniqueCount = data.techniqueCount as number;
	$: categoriesData = data.categoriesData as CategoriesData;

	let selectedLevel = getCurrentLevel($page.url);
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

{#if categoriesData}
	<h1 class="page-title space-3">
		<span class="tint-link">
			{techniqueCount || 0} techniques
		</span> to avoid the most common accessibility failures.
	</h1>

	<LevelFilter {selectedLevel} />

	<h2 class="page-subheader space-3">Select a category</h2>
	{#each Object.keys(categoriesData) as category}
		<section class="space-3">
			<hgroup class="category-hgroup space-2">
				<h3 class="page-header">{category}</h3>
				<a href={`/category/${category}?level=${selectedLevel}`} class="btn"
					>show all <span class="sr-only">techiques for {category}</span></a
				>
			</hgroup>
			<ul class="techniques">
				{#each Object.entries(categoriesData[category].components) as [component, count]}
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
