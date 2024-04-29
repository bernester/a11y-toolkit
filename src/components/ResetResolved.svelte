<script lang="ts">
	import { browser } from '$app/environment';
	import { ListRestart } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let resolvedList: string[] = [];

	onMount(async () => {
		if (browser) {
			resolvedList = JSON.parse(localStorage.getItem('resolvedList') || '[]');
		}
	});

	function resetResolved() {
		localStorage.setItem('resolvedList', '[]');
		location.reload();
	}
</script>

{#if resolvedList.length > 0}
	<button class="btn" on:click={resetResolved}>
		<ListRestart />
		reset resolved
	</button>
{/if}
