import type { RadioOnChangeEvent } from './events';

export function handleRadioChange(event: RadioOnChangeEvent): string {
	const value = event.currentTarget.value;
	return value;
}
