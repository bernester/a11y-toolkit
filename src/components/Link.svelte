<script lang="ts">
	import { onMount } from 'svelte';
	import { SquareArrowOutUpRight } from 'lucide-svelte';

	export let href = '';
	export let target: '_self' | '_blank' = '_self';
	export let ariaLabel = '';

	let link: HTMLAnchorElement;
	onMount(() => {
		if (link.target === '_blank') {
			link.rel = 'noopener noreferrer';
		}
	});
</script>

<a
	aria-label={ariaLabel !== '' ? ariaLabel : undefined}
	{href}
	{target}
	bind:this={link}
	{...$$restProps}
>
	<slot />{#if target === '_blank'}<SquareArrowOutUpRight class="blank-icon" role="presentation" />
		<span class="sr-only">&nbsp;Opens in a new window</span>{/if}
</a>

<style lang="scss">
	a {
		color: var(--link);
		position: relative;
	}

	:global(.blank-icon) {
		user-select: none;
		width: 0.75em;
		height: 0.75em;
		margin-left: 0.25em;
	}
</style>
