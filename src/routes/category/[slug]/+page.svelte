<script lang="ts">
	import TechniquesList from '$components/TechniquesList.svelte';
	import * as config from '$lib/config';
	export let data: {
		techniques: any;
		slug: string;
	};
</script>

<svelte:head>
	<title>{config.title} - techniques for {data.slug}</title>
</svelte:head>

<!-- Posts -->
<section>
	<hgroup>
		<h1 class="page-title space-2 capitalize">{data.slug}</h1>
		{#if data.introText}
			{@html data.introText}
		{/if}
	</hgroup>

	<h2 class="page-subheader space-2">Accessibility Techniques:</h2>

	<TechniquesList techniques={data.techniques} />
</section>

<style lang="scss">
	hgroup {
		margin-bottom: var(--size-5);
	}
</style>
