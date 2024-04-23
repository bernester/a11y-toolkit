<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import LevelFilter from '$components/LevelFilter.svelte';
	import TechniquesList from '$components/TechniquesList.svelte';
	import * as config from '$lib/config';
	import { getCurrentLevel } from '$lib/levels';
	import type { TechniqueMeta } from '$types/types';
	import { Render } from '@jill64/svelte-sanitize';
	import { browser } from '$app/environment';
	export let data: {
		techniques: TechniqueMeta[];
		slug: string;
		introText?: string;
		techniqueGroup: Record<string, string>;
	};

	let selectedLevel = getCurrentLevel($page.url);

	onMount(() => {
		if (browser) {
			let storedTechniqueGroup = localStorage.getItem('techniqueGroup');
			if (storedTechniqueGroup) {
				data.techniqueGroup = JSON.parse(storedTechniqueGroup);
			}
		}
	});

	$: if (browser) {
		localStorage.setItem('techniqueGroup', JSON.stringify(data.techniqueGroup));
		console.log(localStorage.getItem('techniqueGroup'));
	}
</script>

<svelte:head>
	<title>{config.title} - techniques for {data.slug}</title>
</svelte:head>

<!-- Posts -->
<section>
	<hgroup class="space-2">
		<h1 class="page-title space-2 capitalize">{data.slug}</h1>
		{#if data.introText}
			<Render html={data.introText} />
		{/if}
	</hgroup>

	<LevelFilter {selectedLevel} />

	<!-- <h2 class="page-subheader space-2">Accessibility techniques:</h2> -->

	<TechniquesList techniques={data.techniques} />
</section>
