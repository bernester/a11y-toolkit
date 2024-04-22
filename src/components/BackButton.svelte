<script lang="ts">
	import { ArrowLeft } from 'lucide-svelte';

	function goBack() {
		window.history.back();
	}
</script>

<button on:click={goBack} class="btn">
	<ArrowLeft role="presentation" />
	Go Back
</button>

<style lang="scss">
	button {
		margin-bottom: var(--size-4);
	}
</style>
