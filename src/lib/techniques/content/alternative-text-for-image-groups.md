---
title: Alternative text for image groups
description: Using a text alternative on one item within a group of images that describes all items in the group.
date: '2024-4-15'
category: content
components:
  - image
published: true
successCriteria:
  - '1.1.1'
level: A
source: https://www.w3.org/WAI/WCAG21/Techniques/general/G196.html
---

Example for a rating component

```html
<p>
	Rating:
	<img src="star1" alt="3 out of 5 stars" role="image" />
	<img src="star1" alt="" role="presentation" />
	<img src="star1" alt="" role="presentation" />
	<img src="star2" alt="" role="presentation" />
	<img src="star2" alt="" role="presentation" />
</p>
```
