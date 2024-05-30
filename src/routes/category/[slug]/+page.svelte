<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import LevelFilter from '$components/LevelFilter.svelte';
	import TechniquesList from '$components/TechniquesList.svelte';
	import * as config from '$lib/config';
	import { getCurrentLevel, levelDescriptions } from '$lib/levels';
	import type { Level, Techniques } from '$types/types';
	import { Render } from '@jill64/svelte-sanitize';
	import Breadcrumb from '$components/Breadcrumb.svelte';
	export let data: {
		techniques: Techniques;
		slug: string;
		introText: string;
		techniqueGroup: Record<string, string>;
	};

	let selectedLevel: Level = 'AA';

	onMount(() => {
		if (browser) {
			let storedTechniqueGroup = localStorage.getItem('techniqueGroup');
			if (storedTechniqueGroup) {
				data.techniqueGroup = JSON.parse(storedTechniqueGroup);
			}
		}
	});

	$: if (browser) {
		selectedLevel = getCurrentLevel($page.url);
		localStorage.setItem('techniqueGroup', JSON.stringify(data.techniqueGroup));
		localStorage.setItem('parentPage', data.slug);
		localStorage.setItem('parentType', `category`);
	}
</script>

<svelte:head>
	<title>
		{levelDescriptions[selectedLevel]} techniques for {data.slug} | {config.title}
	</title>
	<meta name="description" content="Free techniques to make {data.slug} more accessible" />
</svelte:head>

<!-- Posts -->
<section>
	<Breadcrumb current={data.slug} parent={{ name: '', type: '', level: selectedLevel }} />
	<hgroup class="space-2">
		<h1 class="page-title space-2">{data.slug}</h1>
		{#if data.introText}
			<Render html={data.introText} />
		{/if}
	</hgroup>

	<LevelFilter {selectedLevel} />

	<TechniquesList techniques={data.techniques} />
</section>
