<script lang="ts">
	import { browser } from '$app/environment';
	import TechniqueCard from '$components/TechniqueCard.svelte';
	import type { TechniqueMeta } from '$types/types';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	export let techniques: TechniqueMeta[] = [];
	let resolvedList: string[] = [];

	onMount(async () => {
		if (browser) {
			resolvedList = JSON.parse(localStorage.getItem('resolvedList') || '[]');
		}
	});

	$: {
		if (resolvedList) {
			techniques = techniques.map((technique) => {
				technique.resolved = resolvedList.includes(technique.slug);
				return technique;
			});
		}
	}
</script>

<ul class="techniques">
	{#if techniques.length > 0}
		{#each techniques as technique, i}
			{#if i === 0}
				<li style="margin-top: var(--size-4)">
					<h2 class="page-subheader">Available techniques:</h2>
				</li>
			{/if}
			{#if !technique.resolved}
				<li>
					<TechniqueCard
						href={`/${technique.slug}`}
						title={technique.title}
						description={technique.description || ''}
						level={technique.level}
						components={technique.components}
					/>
				</li>
			{/if}
		{/each}
		{#each techniques as technique, i}
			{#if technique.resolved}
				{#if i === 0}
					<li style="margin-top: var(--size-4)">
						<h2 class="page-subheader">Resolved techniques</h2>
					</li>
				{/if}
				<li>
					<TechniqueCard
						href={`/${technique.slug}`}
						title={technique.title}
						description={technique.description || ''}
						level={technique.level}
						components={technique.components}
					/>
				</li>
			{/if}
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
