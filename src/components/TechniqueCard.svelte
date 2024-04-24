<script lang="ts">
	import type { Components, Level } from '$types/types';
	import LevelTag from './LevelTag.svelte';

	export let href: string;
	export let title: string;
	export let description: string;
	export let level: Level;
	export let components: Components[] = [];
</script>

<div class="technique">
	<a {href} class="technique-title">{title}</a>
	{#if description}
		<p>{description || 'No description available.'}</p>
	{/if}
	<ul class="tag-list">
		{#if level}
			<li>
				<LevelTag value="WCAG 2.2" />
			</li>
			<li>
				<LevelTag value={level} />
			</li>
		{/if}

		{#if components.length > 0}
			{#each components as component}
				<li>
					<a href="/component/{component}" class="tag surface-link">&num;{component}</a>
				</li>
			{/each}
		{/if}
	</ul>
</div>

<style lang="scss">
	.technique {
		padding-block: var(--size-3);
		padding-inline: var(--size-4);
		border-color: var(--border);
		border-width: var(--border-size-1);
		border-radius: var(--radius-3);
		display: flex;
		flex-direction: column;
		gap: var(--size-1);

		a {
			text-decoration: none;
		}

		p {
			text-wrap: balance;
			font-size: var(--font-size-1);
			line-height: var(--font-lineheight-1);
			color: var(--text-2);
		}

		.technique-title {
			display: block;
			font-size: var(--font-size-fluid-1);
			line-height: var(--font-lineheight-1);
			text-wrap: balance;
			margin-bottom: var(--size-2);
		}

		&:hover {
			background-color: var(--surface-2);
			box-shadow: 0 0 0 2px var(--border);
		}
	}

	.tag-list {
		list-style: none;
		display: flex;
		gap: var(--size-2);
		padding: 0;
		margin-top: var(--size-2);

		li {
			padding: 0;
		}
	}
</style>
