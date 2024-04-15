---
title: Accessible navigation
description: Use semantic HTML for navigation.
date: '2024-4-15'
categories:
  - basic
components:
  - navigation
  - layout
published: true
successCriteria:
  - '1.3.1'
  - '2.4.1'
level: basic
---

This semantic HTML contains all accessibility features by default.

```html
<a href="#nav-example">Skip to example navigation</a>
<nav tabindex="-1" class="nav-example" id="nav-example">
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/about/">About</a></li>
		<li><a href="/contact/">Contact</a></li>
		<li><button aria-haspopup="true">Sign in</button></li>
	</ul>
</nav>
```

If you can't use semantic HTML give the element a specific attribute to define its role

```html
<div role="navigation">
  <ul>
    <li><a href="/">Website name</a></li>
    <li><a href="/about/">About</a></li>
    <li><a href="/contact/">Contact</a></li>
  <ul/>
</div>
```
