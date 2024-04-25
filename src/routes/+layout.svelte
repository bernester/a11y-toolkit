<script lang="ts">
	import Footer from './footer.svelte';
	import Header from './header.svelte';
	import PageTransition from './transition.svelte';

	import 'open-props/style';

	import '../app.scss';

	export let data;
</script>

<div class="layout">
	<!-- Header -->
	<a href="#main-content" class="btn skip-to">Skip to main content</a>
	<Header />

	<main id="main-content" tabindex="-1">
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>

	<!-- Footer -->
	<Footer />
</div>

<style lang="scss">
	.layout {
		height: 100%;
		max-inline-size: 800px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);
	}

	main {
		margin-block: var(--size-7) var(--size-8);
	}

	@media (min-width: 1440px) {
		.layout {
			padding-inline: 0;
		}
	}

	.skip-to {
		position: absolute;
		left: 50%;
		transform: translateY(-100%);
		transition: transform 0.3s;

		&:focus {
			transform: translateY(0%);
		}
	}
</style>
