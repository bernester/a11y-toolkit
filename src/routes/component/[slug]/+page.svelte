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
	import Breadcrumb from '$components/Breadcrumb.svelte';
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
		localStorage.setItem('parentPage', data.slug);
		localStorage.setItem('parentType', `component`);
	}
</script>

<svelte:head>
	<title>{config.title} - techniques for {data.slug}</title>
</svelte:head>

<!-- Posts -->
<section>
	<Breadcrumb current={data.slug} parent={undefined} />

	<hgroup class="space-2">
		<h1 class="page-title space-2">{data.slug}</h1>
		{#if data.introText}
			<Render html={data.introText} />
		{/if}
	</hgroup>

	<LevelFilter {selectedLevel} />

	<!-- <h2 class="page-subheader space-2">Accessibility techniques:</h2> -->

	<TechniquesList techniques={data.techniques} />
</section>
