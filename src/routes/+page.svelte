<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import * as config from '$lib/config';
	import ComponentCard from '$lib/components/componentCard.svelte';
	import { derived, writable } from 'svelte/store';
	import RadioButton from '$lib/components/radioButton.svelte';

	let categoriesData = writable(null);
	const selectedLevel = derived(page, ($page) => $page.url.searchParams.get('level') || 'AA');

	onMount(() => {
		const unsubscribe = selectedLevel.subscribe((currentLevel) => {
			fetch(`/api/overview?level=${currentLevel}`)
				.then((response) => response.json())
				.then((data) => categoriesData.set(data))
				.catch((error) => console.error('Error fetching data:', error));
		});

		return () => {
			unsubscribe(); // cleanup the subscription
		};
	});

	function updateLevel(newLevel) {
		goto(`?level=${newLevel}`, { replaceState: true });
	}

	function handleLevelChange(event) {
		console.log('ping');
		updateLevel(event.target.value);
	}
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

{#if $categoriesData}
	<h1 class="page-title space-3">
		<span class="tint-link">
			{Object.values($categoriesData).reduce(
				(acc, cur) => acc + Object.keys(cur.components).length,
				0
			)} techniques
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

	<h2 class="page-header space-3">Select a category</h2>
	{#each Object.keys($categoriesData) as category}
		<section class="space-3">
			<hgroup class="category-hgroup space-2">
				<h3 class="page-subheader">{category}</h3>
				<a href={`/category/${category}?level={$selectedLevel}`} class="btn">Show all techniques</a>
			</hgroup>
			<ul class="techniques unstyled">
				{#each Object.entries($categoriesData[category].components) as [component, count]}
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
