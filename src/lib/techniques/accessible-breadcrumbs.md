---
title: Accessible breadcrumbs
date: '2024-4-15'
category: navigation
components:
  - breadcrumb
published: true
successCriteria:
  - '1.3.1'
  - '2.4.1'
  - '2.4.8'
  - '3.1.1'
  - '4.1.1'
level: AAA
---

```html
<ol class="breadcrumb">
	<li><a href="#">Home</a></li>
	<li><a href="#">Products</a></li>
	<li>Pineapples</li>
</ol>
```

## Developer notes

1. The ordered list `<ol>` helps to keep the logical order even when the styling is not available (SC 1.3.1)
2. Links used in breadcrumb should be descriptive, simple and clear (SC 2.4.1, SC 3.1.1)
3. Using standard HTML ensures that breadcrumbs work well with assistive technologies like screen readers (SC 4.1.1)
