import { render } from '@testing-library/svelte';
import ComponentCard from './ComponentCard.svelte';
import '@testing-library/jest-dom';

describe('ComponentCard', () => {
	test('displays the correct count and text', () => {
		const { getByText } = render(ComponentCard, {
			props: {
				component: 'ExampleComponent',
				count: { total: 1, resolved: 1 },
				level: 'high'
			}
		});
		expect(getByText('ExampleComponent')).toBeInTheDocument();
		expect(getByText('1/1 Technique')).toBeInTheDocument();
	});

	test('applies the resolved class when total equals resolved', () => {
		const { container } = render(ComponentCard, {
			props: {
				component: 'ExampleComponent',
				count: { total: 5, resolved: 5 },
				level: 'medium'
			}
		});
		const linkElement = container.querySelector('a');
		expect(linkElement).toHaveClass('resolved');
	});

	test('does not apply resolved class when total does not equal resolved', () => {
		const { container } = render(ComponentCard, {
			props: {
				component: 'ExampleComponent',
				count: { total: 5, resolved: 3 },
				level: 'low'
			}
		});
		const linkElement = container.querySelector('a');
		expect(linkElement).not.toHaveClass('resolved');
	});
});
