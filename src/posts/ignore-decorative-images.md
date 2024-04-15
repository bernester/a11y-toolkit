---
title: Ignore decorative images
description: Ensure that purely decorative image can be ignored by assistive technology.
date: '2024-4-15'
categories:
  - content
components:
  - image
published: true
successCriteria:
  - '1.1.1'
level: basic
source: https://html.spec.whatwg.org/multipage/images.html#a-purely-decorative-image-that-doesn't-add-any-information
---

```html
<h1>The Lady of Shalott</h1>
<p><img src="shalott.jpeg" role="presentation" alt="" /></p>
<p>
	On either side the river lie<br />
	Long fields of barley and of rye,<br />
	That clothe the wold and meet the sky;<br />
	And through the field the road run by<br />
	To many-tower'd Camelot;<br />
	And up and down the people go,<br />
	Gazing where the lilies blow<br />
	Round an island there below,<br />
	The island of Shalott.
</p>
```
