<script lang="ts">
	import type { RadioOnChangeEvent } from '$lib/events';
	import { handleRadioChange } from '$lib/utils';
	import type { Level } from '$types/types';
	import RadioButton from './RadioButton.svelte';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';

	export let selectedLevel: Level;

	function updateLevel(newLevel: Level) {
		if (browser) {
			localStorage.setItem('selectedLevel', newLevel);
		}
		goto(`?level=${newLevel}`, { replaceState: true, keepFocus: true });
	}

	function handleLevelChange(event: RadioOnChangeEvent) {
		selectedLevel = handleRadioChange(event) as Level;
		updateLevel(selectedLevel);
	}
</script>

<fieldset class="space-3">
	<legend class="page-subheader space-2">Select a conformance level</legend>
	<div class="radiobutton-group">
		<div class="radiobutton">
			<RadioButton
				value="A"
				isChecked={selectedLevel === 'A'}
				onChange={handleLevelChange}
				name="level"
				><strong>Basic</strong>
				<small>Level A</small>
			</RadioButton>
		</div>
		<div class="radiobutton">
			<RadioButton
				value="AA"
				isChecked={selectedLevel === 'AA'}
				onChange={handleLevelChange}
				name="level"
				><strong>Recommended</strong>
				<small>Level AA and lower</small>
			</RadioButton>
		</div>
		<div class="radiobutton">
			<RadioButton
				value="AAA"
				isChecked={selectedLevel === 'AAA'}
				onChange={handleLevelChange}
				name="level"
				><strong>Advanced</strong>
				<small>Level AAA and lower</small>
			</RadioButton>
		</div>
	</div>
</fieldset>

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
