<script lang="ts">
	import { onMount } from 'svelte';
	import { SquareArrowOutUpRight } from 'lucide-svelte';

	export let href = '';
	export let target: '_self' | '_blank' = '_self';
	export let style: 'default' | 'secondary' | 'tertiary' | 'button' = 'default';
	export let ariaLabel = '';

	let link: HTMLAnchorElement;
	onMount(() => {
		if (link.target === '_blank') {
			link.rel = 'noopener noreferrer';
		}
	});

	const classes: Record<'default' | 'secondary' | 'button', string> = {
		default: '',
		secondary: 'secondary',
		button: 'btn'
	};
</script>

<a
	aria-label={ariaLabel !== '' ? ariaLabel : undefined}
	{href}
	{target}
	class={classes[style]}
	bind:this={link}
	{...$$restProps}
>
	<slot />{#if target === '_blank'}<SquareArrowOutUpRight class="blank-icon" />
		<span class="sr-only">&nbsp;Opens in a new window</span>{/if}
</a>

<style lang="scss">
	a {
		color: var(--link);
		position: relative;
		text-underline-position: under;

		&.secondary {
			color: var(--text-2);
		}
	}

	:global(.blank-icon) {
		user-select: none;
		width: 0.75em;
		height: 0.75em;
		margin-left: 0.25em;
	}
</style>
