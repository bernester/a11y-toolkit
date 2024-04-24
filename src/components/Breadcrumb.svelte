<script lang="ts">
	export let parent: { name: string; type: string; level: string };
	export let current: string;
</script>

<nav aria-label="Breadcrumbs">
	<ol>
		<li><a href="/">home</a> /</li>
		{#if parent}
			<li>
				<a href="{parent.type ? parent.type + '/' : ''}{parent.name}?level={parent.level}"
					>{parent.name}</a
				> /
			</li>
		{/if}
		<li><span aria-current="page">{current}</span></li>
	</ol>
</nav>

<style lang="scss">
	ol {
		list-style: none;
		display: flex;
		gap: var(--size-2);
		padding: 0;
		margin: 0 0 var(--size-4) 0;
		align-items: baseline;

		li {
			padding: 0;
		}
	}
</style>
