---
title: Alternative text for image groups
description: Using a text alternative on one item within a group of images that describes all items in the group.
date: '2024-4-15'
category: content
components:
  - images
published: true
successCriteria:
  - '1.1.1'
level: A
source: https://www.w3.org/WAI/WCAG21/Techniques/general/G196.html
---

## Example 1: A rating system in HTML

In the following example, a rating is shown as three filled stars and two empty stars. While a text alternative could have been provided for each of the five images, the author has instead provided the rating in the form "3 out of 5 stars" for the first image and has marked the others using null alt text.

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

### Developer Notes

- `role="presentation"` lets screenreader know that this is just decoraticve content and can be ignored in the output

## Example 2: A button created from a group of images in XHTML

In this example, each button has a set of images to indicate the level of conformance to WCAG being claimed. This approach makes it possible for assistive technologies to avoid announcing things like, "Image A, Image A, Image A" etc.

```html
<p>Conformance Level:</p>
<button name="A">
	<img src="a.png" alt="A" />
</button>
<button name="AA">
	<img src="a.png" alt="AA" />
	<img src="a.png" alt="" />
</button>
<button name="AAA">
	<img src="a.png" alt="AAA" />
	<img src="a.png" alt="" />
	<img src="a.png" alt="" />
</button>
```

### How to test this

1. Check that one item in the group includes a text alternative that serves the equivalent purpose for the entire group.
2. Check that the other items in the group are marked in a way that can be ignored by assistive technologies.
3. Check that the items marked in a way that can be ignored by assistive technologies are adjacent to the item that contains the text alternative for the group.
