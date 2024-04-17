<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { derived, writable } from 'svelte/store';
	import ComponentCard from '$components/ComponentCard.svelte';

	let techniques = writable([]);
	const category = derived(page, ($page) => $page.params.category);
	const level = derived(page, ($page) => $page.url.searchParams.get('level') || 'AA');

	onMount(() => {
		const unsubscribe = derived([category, level], ([$category, $level]) => {
			console.log($category);
			fetch(`/api/category?level=${$level}&category=${$category}`)
				.then((response) => response.json())
				.then((data) => techniques.set(data))
				.catch(console.error);
		}).subscribe();

		return unsubscribe; // cleanup the subscription
	});
</script>

<svelte:head>
	<title>{$level} Techniques in {$category}</title>
</svelte:head>

<h1>{$level} Techniques for {$category}</h1>

{#if $techniques.length > 0}
	<ul class="techniques unstyled">
		{#each $techniques as technique}
			<li>
				<a href={`/technique/${technique.slug}`} class="technique-title">{technique.title}</a>
				<p>{technique.description || 'No description available.'}</p>
				<ComponentCard {technique} />
			</li>
		{/each}
	</ul>
{:else}
	<p>No techniques found for this category and level.</p>
{/if}
