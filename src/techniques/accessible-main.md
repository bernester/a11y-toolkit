---
title: Accessible main
description: Use semantic HTML for main.
date: '2024-4-15'
category: basics
components:
  - structure
published: true
successCriteria:
  - '1.3.1'
  - '2.4.1'
level: A
source: https://www.magentaa11y.com/checklist-web/main/
---

This semantic HTML contains all accessibility features by default.

```html
<!-- This link lets people skip content and jump directly to the content -->
<a href="#example-main">Skip to main content</a>
<main tabindex="-1" id="example-main">
	<h1>About main content</h1>
	<p>The main content of the page belongs here.</p>
	<p><a href="#">Focus moves here next</a></p>
</main>
```

If you can't use semantic HTML give the element a specific attribute to define its role

```html
<div role="main" tabindex="-1" id="example-main">
	<h1>About our company</h1>
	<p>The main content of the page belongs here.</p>
</div>
```
