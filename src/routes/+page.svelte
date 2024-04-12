<script lang="ts">
	import * as config from '$lib/config';
	import ComponentCard from '$lib/components/componentCard.svelte';
	export let data: { summary: Summary }; // Assert the type of data

	interface Summary {
		[category: string]: {
			[component: string]: number;
		};
	}

	const summary: Summary = data.summary;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<h1 class="page-title space-3">Techniques to avoid the most common accessibility failures.</h1>
<h2 class="page-header space-3">select a category</h2>
{#each Object.keys(summary) as category}
	<section class="space-3">
		<h3 class="page-subheader space-2">{category}</h3>
		<ul class="techniques unstyled">
			{#each Object.entries(summary[category]) as [component, count]}
				<li>
					<ComponentCard {component} {count} />
				</li>
			{/each}
		</ul>
	</section>
{/each}

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
</style>
