---
title: Avoid empty buttons
description: Ensure that icon buttons are accessible for screenreader and other assistive technologies.
date: '2024-4-15'
category: form
components:
  - icons
  - buttons
published: true
successCriteria:
  - '1.1.1'
level: A
source: https://www.sarasoueidan.com/blog/accessible-icon-buttons/
---

Imagine you are on a shopping side. When you see a button with a shopping card icon than you probably automatically know what it is for. Now imagine instead it just would say button. This is what happens to screenreader users on most of the websites world wide. So called empty buttons are one of the most common accessibility issues.

`aria-label="Button purpose"` can also be used (as a last resort).

```html
<button aria-labelledby="button-label">
	<svg viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true" focusable="false">
		<!-- svg content -->
	</svg>
	<span class="sr-only" id="button-label">Add to cart</span>
</button>
```

```css
.sr-only {
	border: 0 !important;
	clip: rect(1px, 1px, 1px, 1px) !important;
	-webkit-clip-path: inset(50%) !important;
	clip-path: inset(50%) !important;
	height: 1px !important;
	overflow: hidden !important;
	margin: -1px !important;
	padding: 0 !important;
	position: absolute !important;
	width: 1px !important;
	white-space: nowrap !important;
}
```
