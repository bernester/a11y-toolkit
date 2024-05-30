---
title: Identify required inputs
description: Visibly mark required inputs
date: '2024-4-15'
category: form
components:
  - inputs
  - labels
published: true
successCriteria:
  - '3.3.2'
level: A
source: https://www.ovl.design/text/inclusive-inputs/
---

```html
<div class="form-group">
	<label for="name">
		Name
		<span class="required" aria-hidden="true">*</span>
		<span class="sr-only">required</span>
	</label>
	<input type="text" id="name" name="name" autocomplete="name" />
</div>
```

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
