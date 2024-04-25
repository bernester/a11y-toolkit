---
title: Hide screenreader only content
description: A great technique to visually hide text content while preserving it for assistive technologies.
date: '2024-4-15'
category: content
components:
  - text
published: true
successCriteria:
  - '1.1.1'
level: A
source: https://kittygiraudel.com/2021/02/17/hiding-content-responsibly/
---

The `.sr-only` class is a utility class aiming at visually hiding the element while keeping it accessible to assistive technologies such as screen-readers. It relies on a carefully designed combination of declarations for maximum support, and `!important` bangs to make sure to override any more specific CSS.

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

> **Important:** This technique should only be used to mask text. In other words, there shouldn’t be any focusable element inside the hidden element. This could lead to annoying behaviours, like scrolling to an invisible element.

Check out the article [hiding content responsibly](https://kittygiraudel.com/2021/02/17/hiding-content-responsibly/) by Kitty Giraudel where they explore all the different options of masking content for screenreaders.
