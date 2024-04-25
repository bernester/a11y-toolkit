<script lang="ts">
	import ThemeToggle from '$components/ThemeToggle.svelte';
	import Logo from '$components/Logo.svelte';
	import { browser } from '$app/environment';

	let selectedLevel = browser ? localStorage.getItem('selectedLevel') : 'AA';
</script>

<nav>
	<a href="/?level={selectedLevel}" class="title" title="A11y Toolkit homepage">
		<Logo />
	</a>
	<ThemeToggle />
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
</style>
