---
title: Name multiple navigations
description: When there is more than one navigation element, they must have a name.
date: '2024-4-15'
category: navigation
components:
  - navigation
published: true
successCriteria:
  - '1.3.1'
level: A
source: https://www.magentaa11y.com/checklist-web/nav/
---

```html
<nav tabindex="-1" id="nav" aria-label="Main">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about/">About</a></li>
    <li><a href="/contact/">Contact</a></li>
  <ul/>
</nav>

<h2 id="cat-heading">Categories</h2>
<nav id="cat-nav" aria-labelledby="#cat-heading">
  <ul>
    <li><a href="/alpha/">Alpha</a></li>
    <li><a href="/bravo/">Bravo</a></li>
    <li><a href="/charlie/">Charlie</a></li>
  <ul/>
</nav>

<footer>
  <nav aria-label="Site map">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about/">About</a></li>
      <li><a href="/contact/">Contact</a></li>
    <ul/>
  </nav>
</footer>
```
