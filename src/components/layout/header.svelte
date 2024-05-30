<script lang="ts">
	import ThemeToggle from '$components/ThemeToggle.svelte';
	import Logo from '$components/Logo.svelte';
	import type { Level } from '$types/types';
	import { getCurrentLevel } from '$lib/levels';
	import { page } from '$app/stores';
	import Github from '$components/Github.svelte';


	$: selectedLevel = getCurrentLevel($page.url) as Level;
</script>

<nav aria-label="Header nav">
	<a href="/?level={selectedLevel}" class="title" title="A11y Toolkit homepage">
		<Logo />
	</a>
	<div>
		<ThemeToggle />
		<Github />
	</div>
</nav>

<style>
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-block: var(--size-7);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	div {
		display: inline-flex;
		align-items: baseline;
		gap: var(--size-5);
	}
</style>
