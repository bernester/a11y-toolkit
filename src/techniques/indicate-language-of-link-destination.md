---
title: Indicate language of link destination
date: '2024-4-15'
category: navigation
components:
  - link
published: true
successCriteria:
  - '3.2.1'
level: A
source: https://www.w3.org/International/questions/qa-link-lang#proscons
---

```html
<p>
	There is also a page describing <a href="swedish-doc.html" hreflang="sv"
		>why a DOCTYPE is useful</a
	>.
</p>
`
```

CSS to show a language indicator next to the link

```css
a[hreflang]:after {
	content: ' [' attr(hreflang) ']';
	color: #999;
	vertical-align: super;
	font-size: 70%;
}
```

CSS alternative with a custom text for each available language:

```css
a[hreflang]:after {
	color: #999;
	vertical-align: super;
	font-size: 70%;
}
a[hreflang='sv']:after {
	content: ' [Swedish]';
}
a[hreflang='fi']:after {
	content: ' [Finnish]';
}
```
