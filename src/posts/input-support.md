---
title: Input support
description: If needed provide user with further information for inputs.
date: '2024-4-15'
categories:
  - form
components:
  - label
  - input
published: true
successCriteria:
  - '3.3.2'
level: basic
source: https://www.ovl.design/text/inclusive-inputs/
---

```html
<div class="form-group">
	<label for="password">
		Password
		<span class="required" aria-hidden="true">*</span>
		<span class="sr-only">required</span>
	</label>
	<input
		type="password"
		id="password"
		name="password"
		autocomplete="new-password"
		aria-describedby="desc_pw"
	/>
	<p class="aside" id="desc_pw">Your password needs to have at least eight characters.</p>
</div>
```
