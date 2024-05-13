import { render, screen } from '@testing-library/svelte';
import '@testing-library/jest-dom';
import Link from './Link.svelte';
import LinkTest from './Link.test.svelte';

describe('LinkComponent', () => {
	test('renders an anchor element with provided href and target', () => {
		render(Link, {
			props: { href: 'https://example.com', target: '_blank', ariaLabel: 'Open Example' }
		});

		const link = screen.getByRole('link', { name: 'Open Example' });
		expect(link).toHaveAttribute('href', 'https://example.com');
		expect(link).toHaveAttribute('target', '_blank');
		expect(link).toHaveAttribute('rel', 'noopener noreferrer');
	});

	test('renders additional icon and text if target is _blank', () => {
		render(Link, {
			props: { href: 'https://example.com', target: '_blank', ariaLabel: 'Open Example' }
		});
		const icon = screen.getByLabelText('Opens in a new window'); // Assumes the icon uses aria-label correctly.
		expect(icon).toBeInTheDocument();
	});

	test('does not add rel attribute if target is not _blank', () => {
		render(Link, { props: { href: 'https://example.com', target: '_self' } });
		const link = screen.getByRole('link');

		expect(link).not.toHaveAttribute('rel', 'noopener noreferrer');
	});

	test('passes extra props to the anchor element', () => {
		const testId = 'custom-link';
		render(Link, { props: { href: 'https://example.com', 'data-testid': testId } });
		const link = screen.getByTestId(testId);

		expect(link).toHaveAttribute('href', 'https://example.com');
	});

	test('renders slot content correctly', () => {
		const { getByText } = render(LinkTest);

		expect(getByText('Click Here')).toBeInTheDocument();
	});
});
