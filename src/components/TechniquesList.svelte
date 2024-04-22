<script lang="ts">
	import TechniqueCard from '$components/TechniqueCard.svelte';
	import type { TechniqueMeta } from '$types/types';

	export let techniques: TechniqueMeta[] = [];
</script>

<ul class="techniques">
	{#each techniques as technique}
		<li>
			<TechniqueCard
				href={`/${technique.slug}`}
				title={technique.title}
				description={technique.description || ''}
				level={technique.level || undefined}
				components={technique.components}
			/>
		</li>
	{/each}
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
</style>
