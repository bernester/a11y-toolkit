---
title: Advanced clickable button area
description: Buttons should have a clickable area of min. 44x44px
date: '2024-4-10'
category: form
components:
  - buttons
published: true
successCriteria:
  - '2.5.5'
level: AAA
source: https://moderncss.dev/css-button-styling-guide/
---

Buttons are for clicking. By ensuring that they are big enough, you make sure that your users can click them with ease, even if they sit in a bumpy train or they have shaky hands. 44px is about the size of a standard thumb tip, so it also work for touch interfaces.

Here is one example how you could ensure a clickable area of min. 44x44px:

```css
.btn {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	font-size: inherit;
	line-height: 1.1;
	padding: 0.25em 0.75em;
	min-width: 10ch;
	min-height: 44px;
}
```
