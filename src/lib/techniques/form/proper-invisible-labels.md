---
title: Proper invisible labels
description: If label is not visible offer a text alternative for assistive technologies
date: '2024-4-15'
category: form
components:
  - input
  - label
published: true
successCriteria:
  - '3.3.2'
level: A
---

```html
<label for="name" class="sr-only">Enter your name:</label> <input id="name" type="text" />
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
