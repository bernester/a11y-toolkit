<script lang="ts">
	import * as config from '$lib/config';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import type { Level } from '$types/types';
	import ComponentCard from '$components/ComponentCard.svelte';
	import RadioButton from '$components/RadioButton.svelte';

	export let data;
	export let techniqueCount = data.techniqueCount;
	export let categoriesData = data.categoriesData;

	// get the selected level from url or return 'AA' as a default
	let selectedLevel = derived(page, ($page) => $page.url.searchParams.get('level') || 'AA');

	function updateLevel(newLevel: Level) {
		goto(`?level=${newLevel}`, { replaceState: true });
	}

	function handleLevelChange(event: Event): void {
		const target = event.target as HTMLInputElement; // Ensuring the target is an HTML input element
		updateLevel(target.value as Level);
	}
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

	<form>
		<fieldset class="space-3">
			<legend class="page-subheader space-1">Select a level</legend>
			<div class="radiobutton-group">
				<div class="radiobutton">
					<RadioButton value="A" isChecked={$selectedLevel === 'A'} onChange={handleLevelChange}
						><strong>Basic</strong><br />
						<small>Level A</small>
					</RadioButton>
				</div>
				<div class="radiobutton">
					<RadioButton value="AA" isChecked={$selectedLevel === 'AA'} onChange={handleLevelChange}
						><strong>Recommended</strong><br />
						<small>Level AA and lower</small>
					</RadioButton>
				</div>
				<div class="radiobutton">
					<RadioButton value="AAA" isChecked={$selectedLevel === 'AAA'} onChange={handleLevelChange}
						><strong>Advanced</strong><br />
						<small>Level AAA and lower</small>
					</RadioButton>
				</div>
			</div>
		</fieldset>
	</form>

	<h2 class="page-subheader space-3">Select a category</h2>
	{#each Object.keys(categoriesData) as category}
		<section class="space-3">
			<hgroup class="category-hgroup space-2">
				<h3 class="page-header">{category}</h3>
				<a href={`/category/${category}?level=${$selectedLevel}`} class="btn">Show all techniques</a
				>
			</hgroup>
			<ul class="techniques unstyled">
				{#each Object.entries(categoriesData[category].components) as [component, count]}
					<li>
						<ComponentCard {component} {count} level={$selectedLevel} />
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
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		align-items: start;
		column-gap: var(--size-4);
		row-gap: var(--size-6);

		li {
			flex: 1 0;
		}
	}

	.category-hgroup {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.radiobutton-group {
		display: flex;
		column-gap: 16px;
		margin-top: 8px;

		@media (max-width: 480px) {
			flex-direction: column;
			row-gap: 16px;
		}
	}

	.radiobutton {
		border-radius: 16px;
		flex: 1;
		background-color: var(--surface-2);
	}
</style>
