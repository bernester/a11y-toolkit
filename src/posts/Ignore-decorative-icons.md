---
title: Ignore decorative icons
description: Icons with adjacent text can be ignored by assistive technology.
date: '2024-4-15'
categories:
  - content
components:
  - icon
  - button
  - link
  - image
published: true
successCriteria:
  - '1.1.1'
level: basic
source: https://html.spec.whatwg.org/multipage/images.html#a-short-phrase-or-label-with-an-alternative-graphical-representation:-icons,-logos
---

```html
<a href="products.html">
	<img src="icon.gif" role="presentation" alt="" />
	Products page
</a>
```
