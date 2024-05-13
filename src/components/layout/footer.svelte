<script lang="ts">
	import Link from '$components/Link.svelte';
</script>

<!-- Footer -->
<footer>
	<div class="box">
		<h2 class="page-subheader space-1">Wanna help?</h2>
		<p>
			Do you also know a technique or best practise that should be included in the A11y toolkit? <Link
				href="https://github.com/bernester/a11y-toolkit"
				target="_blank">Share it with us.</Link
			>
		</p>
	</div>
	<nav aria-label="Footer nav">
		<strong> A11y toolkit </strong>
		<a href="/about">About</a>
	</nav>
	<!-- <p>The A11y toolkit is created </p> -->
</footer>

<style>
	footer {
		padding-block: var(--size-7);
	}

	nav {
		display: flex;
		justify-content: space-between;
		padding-block: var(--size-7);
	}
</style>
