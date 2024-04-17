<script lang="ts">
	import Toggle from '$components/Toggle.svelte';
	import Logo from '$components/Logo.svelte';
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
