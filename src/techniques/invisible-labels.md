---
title: Invisible labels
description: Use aria-label to provide an invisible label where a visible label cannot be used
date: '2024-4-15'
category: form
components:
  - input
  - label
published: true
successCriteria:
  - '4.1.2'
level: A
source: https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA14
---

```html
<div role="group" aria-labelledby="groupLabel">
	<span id="groupLabel">Work Phone</span>
	<input type="number" aria-label="country code" />
	<input type="number" aria-label="area code" />
	<input type="number" aria-label="subscriber number" />
</div>
```
