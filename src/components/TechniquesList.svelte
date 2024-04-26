<script lang="ts">
	import TechniqueCard from '$components/TechniqueCard.svelte';
	import type { TechniqueMeta } from '$types/types';
	import { fly } from 'svelte/transition';

	export let techniques: TechniqueMeta[] = [];
</script>

<ul class="techniques">
	{#if techniques.length > 0}
		{#each techniques as technique}
			<li>
				<TechniqueCard
					href={`/${technique.slug}`}
					title={technique.title}
					description={technique.description || ''}
					level={technique.level}
					components={technique.components}
				/>
			</li>
		{/each}
	{:else}
		<li>
			<div class="no-result" in:fly={{ y: 10 }}>
				<h2>No techniques available for your selection.</h2>
			</div>
		</li>
	{/if}
</ul>

<style lang="scss">
	.techniques {
		list-style: none;
		display: flex;
		flex-direction: column;
		padding: 0;
		gap: var(--size-4);

		li {
			padding-left: 0;
			max-inline-size: inherit;
		}
	}

	.no-result {
		padding: var(--size-4);
		border: 2px solid var(--border);
		text-align: center;
		display: flex;
		justify-content: center;
		border-radius: var(--size-2);

		h2 {
			font-size: var(--font-size-fluid-1);
			margin: 0;
		}
	}
</style>
