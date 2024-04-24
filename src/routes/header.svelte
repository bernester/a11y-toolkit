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
	<ul class="links">
		<li>
			<a href="/about">About</a>
		</li>
		<li>
			<ThemeToggle />
		</li>
	</ul>
</nav>

<style>
	nav {
		display: flex;
		padding-block: var(--size-7);
	}

	.links {
		list-style: none;
		padding: 0;
		margin-block: var(--size-7);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	@media (min-width: 768px) {
		nav {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}
	}
</style>
