<script lang="ts">
	import { browser } from '$app/environment';
	import { ArrowLeft, ArrowRight } from 'lucide-svelte';
	import { onMount } from 'svelte';

	export let title: string;

	let previousEntry: string | undefined, nextEntry: string | undefined;

	onMount(() => {
		if (browser) {
			const stored = localStorage.getItem('techniqueGroup');
			if (stored) {
				const techniqueGroup = JSON.parse(stored);
				const keys = Object.keys(techniqueGroup);
				const currentIndex = keys.indexOf(title);

				// Check boundaries and assign previous and next entries
				if (currentIndex > 0) {
					previousEntry = techniqueGroup[keys[currentIndex - 1]];
				}
				if (currentIndex < keys.length - 1) {
					nextEntry = techniqueGroup[keys[currentIndex + 1]];
				}
			}
		}
	});
</script>

<div class="technique-nav" {...$$restProps}>
	<div class="technique-nav--prev">
		{#if previousEntry}
			<a href={previousEntry} class="btn icon-btn">
				<ArrowLeft role="presentation" />
				<span class="sr-only">Previous technique</span>
			</a>
		{:else}
			<div class="btn icon-btn disabled">
				<ArrowLeft role="presentation" />
				<span class="sr-only">Previous technique</span>
			</div>
		{/if}
	</div>
	<div class="technique-nav--next">
		{#if nextEntry}
			<a href={nextEntry} class="btn icon-btn">
				<span class="sr-only">Next technique</span>
				<ArrowRight role="presentation" />
			</a>
		{:else}
			<div class="btn icon-btn disabled">
				<span class="sr-only">Next technique</span>
				<ArrowRight role="presentation" />
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.technique-nav {
		display: flex;
		gap: var(--size-2);
	}
</style>
