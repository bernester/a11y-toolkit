<script lang="ts">
	export let component: string;
	export let count: { total: number; resolved: number };
	export let level: string;
</script>

<a href="/component/{component}?level={level}" class="component">
	<strong class="component-title">{component}</strong>
	<small class="component-count">
		{count.resolved || 0}/{count.total}
		{#if count.total > 1}
			Techniques
		{:else}
			Technique
		{/if}
	</small>
</a>

<style lang="scss">
	.component-title {
		font-size: var(--font-size-fluid-1);
	}

	.component-count {
		font-size: var(--font-size-fluid-0);
	}

	.component {
		display: flex;
		flex-direction: column;
		align-items: start;
		padding: var(--size-3) var(--size-4);
		border-radius: var(--radius-3);
		text-decoration: none;
		color: var(--link);
		box-shadow:
			inset 0 0 0 2px var(--link),
			0 6px 0 0 var(--link);

		&:hover,
		&:focus {
			transform: translateY(2px);
			box-shadow:
				inset 0 0 0 2px var(--link),
				0 2px 0 0 var(--link);
			color: var(--link);
			margin: 0;
			text-decoration: none;
		}

		&:active {
			transform: translateY(4px);
			box-shadow: inset 0 0 0 2px var(--link);
		}
	}
</style>
