<script lang="ts">
	import TechniqueCard from '$components/TechniqueCard.svelte';
	import type { Components, Level } from '$types/types';

	type Technique = {
		title: string;
		description: string;
		slug: string;
		components: Components[];
		level: Level;
	};

	export let techniques: Technique[] = [];
</script>

<ul class="techniques">
	{#each techniques as technique}
		<li>
			<TechniqueCard
				href={`/${technique.slug}`}
				title={technique.title}
				description={technique.description}
				level={technique.level}
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
