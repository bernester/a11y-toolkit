import { render } from '@testing-library/svelte';
import Tag from './Tag.svelte';
import '@testing-library/jest-dom'; // for the jest-dom matchers

describe('Tag Component', () => {
	test('renders the passed value', () => {
		const { getByText } = render(Tag, { props: { value: 'Hello, world!' } });
		expect(getByText('Hello, world!')).toBeInTheDocument();
	});
});
