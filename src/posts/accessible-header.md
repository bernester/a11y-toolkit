---
title: Accessible header
description: Use semantic HTML for header.
date: '2024-4-15'
categories:
  - basic
components:
  - header
  - layout
published: true
successCriteria:
  - '1.3.1'
  - '2.4.1'
level: basic
source: https://www.magentaa11y.com/checklist-web/header/#
---

This semantic HTML contains all accessibility features by default.

```html
<!-- This link lets people skip content and jump directly to the navigation -->
<header id="example-header">
	<a href="#nav-example">Skip to navigation</a>

	<nav tabindex="-1" class="nav-example" id="nav-example">
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/about/">About</a></li>
			<li><a href="/contact/">Contact</a></li>
			<li><button>Sign in</button></li>
		</ul>
	</nav>
</header>
```

If you can't use semantic HTML give the element a specific attribute to define its role

```html
<div role="banner" tabindex="-1" id="example-header">
	<a href="/">Website name</a>
</div>
```
