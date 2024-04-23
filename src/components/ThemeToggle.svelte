<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Moon, Sun } from 'lucide-svelte';
	import { theme, toggleTheme } from '$lib/theme';
</script>

<button on:click={toggleTheme}>
	{#if $theme === 'dark'}
		<div in:fly={{ y: 10 }}>
			<Sun />
			<span class="sr-only">Toggle to </span>
			<span>Light</span>
			<span class="sr-only"> theme</span>
		</div>
	{:else}
		<div in:fly={{ y: -10 }}>
			<Moon />
			<span class="sr-only">Toggle to </span>
			<span>Dark</span>
			<span class="sr-only"> theme</span>
		</div>
	{/if}
</button>

<style>
	button {
		padding: 0;
		font-weight: inherit;
		background: none;
		border: none;
		box-shadow: none;
		overflow: hidden;
	}

	button > * {
		display: flex;
		gap: var(--size-2);
	}
</style>
