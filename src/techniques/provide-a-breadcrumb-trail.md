---
title: Provide a breadcrumb trail
date: '2024-4-15'
category: navigations
components:
  - breadcrumbs
published: true
successCriteria:
  - '1.3.1'
  - '2.4.1'
  - '2.4.8'
  - '3.1.1'
  - '4.1.1'
level: AAA
---

If a web page is part of a sequence of pages or within a complex site structure, an indication of the current page location is provided, for example, through breadcrumbs or specifying the current step in a sequence (e.g., "Step 2 of 5 - Shipping Address").

```html
<nav aria-label="Breadcrumbs">
	<h2>You are here:</h2>
	<ol>
		<li><a href="/">Acme Company</a> &#8594;</li>
		<li><a href="/electronics/">Electronics</a> &#8594;</li>
		<li><a href="/electronics/computers/">Computers</a> &#8594;</li>
		<li><a aria-current="page">Laptops</a></li>
	</ol>
</nav>
```

## Developer notes

1. This example uses [`aria-label`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) and `<h2>` to provide further orientation to users (SC 2.4.1)
2. (optional) [`aria-current`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current) is used to identify that Laptops refers to the current page.
3. The ordered list `<ol>` helps to keep the logical order even when the styling is not available (SC 1.3.1)
4. Links used in breadcrumb should be descriptive, simple and clear (SC 2.4.1, SC 3.1.1)
5. Using standard HTML ensures that breadcrumbs work well with assistive technologies like screen readers (SC 4.1.1)
6. It can be helpful to users to separate the items in the breadcrumb trailing with a visible separator. Examples of separators include ">", "|", "/", and "→".
