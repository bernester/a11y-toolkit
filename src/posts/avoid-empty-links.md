---
title: Avoid empty links
description: Links with just a visible icon offer a text alternative for assistive technologies
date: '2024-4-15'
categories:
  - content
components:
  - icon
  - link
published: true
successCriteria:
  - '1.1.1'
  - '2.4.4'
level: basic
---

```html
<a href="">
	<svg role="presentation" aria-hidden="true" focusable="false" …>…</svg>
	<span class="sr-only">Go back</span>
</a>
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
