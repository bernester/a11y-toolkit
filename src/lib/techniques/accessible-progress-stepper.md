---
title: Accessible progress-stepper
description: Create an accessible multi-step progress bar.
date: '2024-4-15'
category: navigation
components:
  - progress
published: true
successCriteria:
  - '1.3.1'
  - '2.4.1'
  - '2.4.8'
  - '4.1.1'
level: AAA
---

```html
<nav aria-label="progress">
	<ol>
		<li>
			<a href="<link>" aria-current="step">1. Step one placeholder</a>
		</li>
		<li>
			<a href="<link>" aria-current="false" aria-disabled="true">2. Step two placeholder</a>
		</li>
		<li>
			<a href="<link>" aria-current="false" aria-disabled="true">3. Step three placeholder</a>
		</li>
	</ol>
</nav>
```

## Developer notes

1. The ordered list `<ol>` helps to keep the logical order even when the styling is not available (SC 1.3.1)
2. Using standard HTML ensures that multi-step indicators work well with assistive technologies like screen readers (SC 4.1.1)
