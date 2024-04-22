<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { page } from '$app/stores';
	import { getCurrentLevel } from '$lib/levels';
	import type { RadioOnChangeEvent } from '$lib/events';
	import { handleRadioChange } from '$lib/utils';
	import type { Level } from '$types/types';
	import RadioButton from './RadioButton.svelte';
	import { goto } from '$app/navigation';

	export let selectedLevel: Level;

	function updateLevel(newLevel: Level) {
		goto(`?level=${newLevel}`, { replaceState: true, invalidateAll: true });
	}

	function handleLevelChange(event: RadioOnChangeEvent) {
		selectedLevel = handleRadioChange(event) as Level;
		updateLevel(selectedLevel);
	}
</script>

<form>
	<fieldset class="space-3">
		<legend class="page-subheader space-1">Select a conformance level</legend>
		<div class="radiobutton-group">
			<div class="radiobutton">
				<RadioButton value="A" isChecked={selectedLevel === 'A'} onChange={handleLevelChange}
					><strong>Basic</strong><br />
					<small>Level A</small>
				</RadioButton>
			</div>
			<div class="radiobutton">
				<RadioButton value="AA" isChecked={selectedLevel === 'AA'} onChange={handleLevelChange}
					><strong>Recommended</strong><br />
					<small>Level AA and lower</small>
				</RadioButton>
			</div>
			<div class="radiobutton">
				<RadioButton value="AAA" isChecked={selectedLevel === 'AAA'} onChange={handleLevelChange}
					><strong>Advanced</strong><br />
					<small>Level AAA and lower</small>
				</RadioButton>
			</div>
		</div>
	</fieldset>
</form>

<style lang="scss">
	.radiobutton-group {
		display: flex;
		column-gap: 16px;
		margin-top: 8px;

		@media (max-width: 480px) {
			flex-direction: column;
			row-gap: 16px;
		}
	}

	.radiobutton {
		border-radius: 16px;
		flex: 1;
		background-color: var(--surface-2);
	}
</style>
