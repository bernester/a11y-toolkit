<script lang="ts">
	import { page } from '$app/stores';
	import LevelFilter from '$components/LevelFilter.svelte';
	import TechniquesList from '$components/TechniquesList.svelte';
	import * as config from '$lib/config';
	import { getCurrentLevel } from '$lib/levels';
	export let data: {
		techniques: any;
		slug: string;
		introText?: string;
	};

	let selectedLevel = getCurrentLevel($page.url);
</script>

<svelte:head>
	<title>{config.title} - techniques for {data.slug}</title>
</svelte:head>

<!-- Posts -->
<section>
	<hgroup class="space-2">
		<h1 class="page-title space-2 capitalize">{data.slug}</h1>
		{#if data.introText}
			{@html data.introText}
		{/if}
	</hgroup>

	<LevelFilter {selectedLevel} />

	<!-- <h2 class="page-subheader space-2">Accessibility techniques:</h2> -->

	<TechniquesList techniques={data.techniques} />
</section>
