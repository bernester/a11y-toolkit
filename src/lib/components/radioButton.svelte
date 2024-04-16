<script lang="ts">
	import type { RadioOnChangeEvent } from '$lib/events';
	import { onMount } from 'svelte';

	export let value: string;
	export let isChecked: boolean;
	export let onChange: (event: RadioOnChangeEvent) => void;

	// Initialize a variable for the random ID
	let inputId = '';

	// Generate a random ID on component mount
	onMount(() => {
		inputId = 'radio-' + Math.random().toString(36).substr(2, 9);
	});
</script>

<div class="radiobutton-wrapper">
	<input
		id={inputId}
		type="radio"
		class="sr-only"
		checked={isChecked}
		{value}
		on:change={onChange}
		{...$$restProps}
	/>
	<label for={inputId}>
		<div class="radiobutton" />
		<div>
			<slot />
		</div>
	</label>
</div>

<style lang="scss">
	label {
		padding: var(--size-2);
		display: flex;
		flex: 1 1 0;
	}

	.radiobutton-wrapper {
		display: flex;
		flex: 1;

		&:hover {
			.radiobutton {
				border-color: var(--link);
				border-width: var(--size-1);
			}
		}

		&:active {
			.radiobutton {
				transform: scale(1.1);
			}
		}
	}

	.radiobutton {
		width: var(--size-4);
		height: var(--size-4);
		border: 2px solid var(--border);
		background-color: var(--surface-1);
		border-radius: 100vh;
		margin: 4px 8px 4px 4px;
		flex: none;
	}

	input:checked + label {
		.radiobutton {
			border-color: var(--link);
			border-width: var(--size-1);
		}

		&:hover {
			.radiobutton {
				border-color: var(--link);
				border-width: var(--size-0);
			}
		}
	}

	input:focus-visible + label {
		outline: 5px auto Highlight;
		outline: 5px auto -webkit-focus-ring-color;
	}
</style>
