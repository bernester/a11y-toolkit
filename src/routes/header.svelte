<script lang="ts">
	import * as config from '$lib/config';
	import Toggle from '$lib/components/toggle.svelte';
	import Logo from '$lib/components/logo.svelte';
</script>

<nav>
	<a href="/" class="title">
		<Logo />
	</a>
	<ul class="links">
		<li>
			<a href="/about">About</a>
		</li>
		<li>
			<Toggle />
		</li>
	</ul>
</nav>

<style>
	nav {
		display: flex;
		padding-block: var(--size-7);
	}

	.links {
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
