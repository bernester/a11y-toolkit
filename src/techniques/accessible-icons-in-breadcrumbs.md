---
title: Accessible icons in breadcrumbs
description: Icons used in breadcrumbs need an accessible title
date: '2024-4-15'
category: navigation
components:
  - breadcrumb
published: true
successCriteria:
  - '1.1.1'
level: A
---

```html
<ol class="breadcrumb">
	<li>
		<a href="#">
			<svg role="presentation" aria-hidden="true" focusable="false" …>[design code]</svg>
			<span class="sr-only">Home</span>
		</a>
	</li>
	<li><a href="#">Products</a></li>
	<li>Pineapples</li>
</ol>
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
