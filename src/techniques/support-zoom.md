---
title: Support document zoom
description: Ensure that users can zoom in.
date: '2024-4-15'
category: basics
components:
  - document
published: true
successCriteria:
  - '1.4.4'
level: AA
source: https://www.magentaa11y.com/checklist-web/html/
---

People with low vision need the ability to enlarge the page on mobile and desktop.

```html
<head>
	<meta
		name="viewport"
		content="width=device-width, 
        initial-scale=1"
	/>
</head>
```

## How to test for web

| When I use | I see/hear                                                    |
| ---------- | ------------------------------------------------------------- |
| Tab        | Enters the page and visibly focuses only interactive elements |
| Zoom       | Content zooms up to 200%                                      |
