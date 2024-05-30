---
title: Provide a unique page title
description: Give users orientation with a unique page title
date: '2024-4-15'
category: basics
components:
  - document
published: true
successCriteria:
  - '2.4.2'
level: A
source: https://www.magentaa11y.com/checklist-web/html/
---

If the URL changes, your page needs title unique to that page.

1. Make sure that the important information always comes first. This makes sure that multiple bookmarks from the same site are easy to browse through in the bookmarks folder and listeners to your page get the most important information first.

```html
<head>
	<title>document title | category | site name</title>
	<!-- or just -->
	<title>document title | site name</title>
</head>
```

2. Use a separator character that also works well for screen-reader

```html
<!-- Don't do this -->
<head>
	<title>page title -::- section title -::- site name</title>
</head>

<!-- A screen-reader will read this as: 
Page title minus colon colon minus section title minus colon colon minus site name -->
```

Also check our this article about [The Sound of the Accessible Title Text Separator
](https://www.standards-schmandards.com/index.html%3Fp=15.html)
