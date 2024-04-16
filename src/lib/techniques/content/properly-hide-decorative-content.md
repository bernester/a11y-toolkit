---
title: Properly hide decorative content
date: '2024-4-15'
category: content
components:
  - icon
  - image
published: true
successCriteria:
  - '1.1.1'
level: A
source: https://kittygiraudel.com/2021/02/17/hiding-content-responsibly/
---

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
