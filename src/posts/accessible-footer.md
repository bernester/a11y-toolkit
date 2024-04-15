---
title: Accessible footer
description: Use semantic HTML for footer.
date: '2024-4-15'
categories:
  - basics
components:
  - footer
  - layout
published: true
successCriteria:
  - '1.3.1'
  - '2.4.1'
level: basic
source: https://www.magentaa11y.com/checklist-web/footer/#example-footer
---

This semantic HTML contains all accessibility features by default.

```html
<!-- This link lets people skip content and jump directly to the footer -->
<a href="#example-footer">Skip to example footer</a>

<footer tabindex="-1" id="example-footer">
	<nav aria-label="Site map">
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/about/">About</a></li>
			<li><a href="/contact/">Contact</a></li>
		</ul>
	</nav>
	© 2021
</footer>
```

If you can't use semantic HTML give the element a specific attribute to define its role

```html
<div role="contentinfo" tabindex="-1" id="example-footer">&copy; 2021 Site Name</div>
```
