---
title: Accessible rating component
description: Create a rating component with semantic HTMl
date: '2024-4-15'
category: form
components:
  - ratings
published: true
successCriteria:
  - '1.1.1'
  - '1.3.1'
  - '1.4.1'
  - '2.1.1'
  - '2.4.1'
  - '3.3.2'
  - '4.1.2'
level: A
source: https://dev.to/grahamthedev/5-star-rating-system-actually-accessible-no-js-no-wai-aria-3idl
---

Rating systems are a very common pattern on the internet. Here is a very elegant and fully accessible solution using HTML only. Go to <a href="https://dev.to/grahamthedev/5-star-rating-system-actually-accessible-no-js-no-wai-aria-3idl" target="_blank" rel="nofollow noopener">the source of the technique</a> for a complete explanation fo the pattern.

```html
<fieldset class="star-rating">
	<legend>Your rating:</legend>
	<div>
		<input type="radio" name="rating" value="1" id="rating1" />
		<label for="rating1"><span>1</span></label>
		<input type="radio" name="rating" value="2" id="rating2" />
		<label for="rating2"><span>2</span></label>
		<input type="radio" name="rating" value="3" id="rating3" />
		<label for="rating3"><span>3</span></label>
		<input type="radio" name="rating" value="4" id="rating4" />
		<label for="rating4"><span>4</span></label>
		<input type="radio" name="rating" value="5" id="rating5" />
		<label for="rating5"><span>5</span></label>
	</div>
</fieldset>
```
