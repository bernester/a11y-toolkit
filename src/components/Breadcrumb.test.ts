import { render } from '@testing-library/svelte';
import Breadcrumb from './Breadcrumb.svelte';
import '@testing-library/jest-dom'; // for the jest-dom matchers

describe('Breadcrumb Component', () => {
	test('renders the current page as non-link text', () => {
		const { getByText } = render(Breadcrumb, {
			props: {
				parent: { name: 'ParentPage', type: 'category', level: 'AA' },
				current: 'CurrentPage'
			}
		});
		const currentPage = getByText('CurrentPage');
		expect(currentPage).toBeInTheDocument();
		expect(currentPage).toHaveAttribute('aria-current', 'page');
	});

	test('renders the home breadcrumb with correct link', () => {
		const { getByText } = render(Breadcrumb, {
			props: {
				parent: { name: 'ParentPage', type: 'category', level: 'AA' },
				current: 'CurrentPage'
			}
		});
		const homeLink = getByText('home');
		expect(homeLink).toBeInTheDocument();
		expect(homeLink).toHaveAttribute('href', '/?level=AA');
	});

	test('renders the parent breadcrumb when provided', () => {
		const { getByText } = render(Breadcrumb, {
			props: {
				parent: { name: 'ParentPage', type: 'category', level: 'AA' },
				current: 'CurrentPage'
			}
		});
		const parentLink = getByText('ParentPage');
		expect(parentLink).toBeInTheDocument();
		expect(parentLink).toHaveAttribute('href', 'category/ParentPage?level=AA');
	});

	test('does not render parent breadcrumb when name is not provided', () => {
		const { queryByText } = render(Breadcrumb, {
			props: {
				parent: { name: '', type: 'category', level: 'AA' },
				current: 'CurrentPage'
			}
		});
		const parentLink = queryByText(/ParentPage/i);
		expect(parentLink).toBeNull();
	});
});
