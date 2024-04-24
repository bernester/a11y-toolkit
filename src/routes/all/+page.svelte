<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import TechniquesList from '$components/TechniquesList.svelte';
	import * as config from '$lib/config';
	import type { Techniques } from '$types/types';
	export let data: {
		techniques: Techniques;
		techniqueGroup: Record<string, string>;
	};

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
	}
</script>

<svelte:head>
	<title>{config.title} - all techniques</title>
</svelte:head>

<!-- Posts -->
<section>
	<h1 class="page-title space-2">All techniques</h1>

	<TechniquesList techniques={data.techniques} />
</section>
