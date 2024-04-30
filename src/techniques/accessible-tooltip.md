---
title: Accessible tooltips
description: Here is a pattern to create accessible tooltips
date: '2024-4-15'
category: content
components:
  - tooltip
published: true
successCriteria:
  - '1.4.13'
level: AA
source: https://zoebijl.github.io/apg-tooltip/
---

Tooltips display additional information upon hover or focus that is contextual, helpful, and nonessential while providing the ability to communicate and give clarity to a user.

These implementations follow the guidance of the [ARIA Authoring Practices Guide.](https://w3c.github.io/aria-practices/#tooltip)

**Tooltip on a button **

```html
<div class="tooltip-container">
	<button type="button" aria-describedby="description">Settings</button>
	<p id="description" role="tooltip" class="hidden">View and manage settings</p>
</div>
```

**Tooltip on a link **

```html
<p>
	After lunch we drove up the
	<span class="tooltip-container">
		<a
			href="https://www.alpen-paesse.ch/en/alpenpaesse/sustenpass/"
			aria-describedby="link-description"
			data-tooltip-trigger
		>
			Sustenpass
		</a>
		<span id="link-description" role="tooltip" class="hidden">A beautiful road in Switzerland</span>
	</span>
	to take a group photo.
</p>
```

## Issues

Tooltips are a good way to show sighted people what a control does. For a person that relies on the accessibility information this approach doesn’t add much.

For example, Jane (she/her), an avid user of JAWS lands on this control. JAWS happily announces that it’s a button with the label “Like”. Jane, eager to explore, moves into the tooltip only to find the exact same text. This isn’t the worst experience but certainly not the best either.

In a scenario like this, where the tooltip only adds information for sighted people, it would make a lot more sense to not use the `tooltip` role. The accessible name can still be linked with `aria-labelledby`.

```html
<div class="tooltip-container">
	<button type="button" aria-labelledby="tooltip">
		<span aria-hidden="true">💛</span>
	</button>
	<p id="tooltip" class="hidden">Like</p>
</div>
```

At this point it might be worth to reconsider if ARIA is needed to set the accessible name. After all the [first rule of ARIA](https://www.w3.org/TR/aria-in-html/#rule1) is to not use it if you can do without. An accessible name can also be provided with a visually hidden span inside the button:

```html
<div class="tooltip-container">
	<button type="button">
		<span aria-hidden="true">💛</span>
		<span class="visually-hidden">Like</span>
	</button>
	<p id="tooltip" class="hidden">Like</p>
</div>
```
