---
title: Advanced title for links
description: Use the title attribute for links to help users predict where they are going.
date: '2024-4-15'
category: navigation
components:
  - link
published: true
successCriteria:
  - '2.4.4'
  - '2.4.9'
level: AAA
source: https://www.nngroup.com/articles/title-attribute/
---

## Appropriate reasons to use a title attribute for links:

The link leads to an external site:

```html
<a
	href="https://webaim.org/projects/million/"
	title="WebAIM article about the 2023 WebAIM Million report"
>
	Top 6 accessibility failures
</a>
```

The link leads to a sub-site on the same website:

```html
<a href="" title="Member Area: Your Profile"> My profile </a>
```

There is additional information about the content type on the linked page:

```html
<a
	href="https://www.youtube.com/watch?v=XBzXBY9G2u4"
	title="Video of Jamie Knight & Lion's talk about Cognitive Accessibility at the Accessibility London Meetup 2018"
>
	Cognitive Accessibility
</a>
```

There is a warning about possible problems at the other end of the link (for example, "Subscription required")

```html
<a
	href="https://www.wsj.com/"
	title="Subscription Required: Wallstreet Journal Article on a very Wallstreet Journal Topic"
>
	Wallstreet Journal Topic
</a>
```

## General guidelines for using the titles attribute for links

- The title helps users predict what will happen if they follow a link.
- The link itself doesn't require the title to be useful.
- Do not add link titles to all links.
- Link titles should be less than 80 characters, and should only **rarely go above 60 characters**..
- Do not assume that the link title will look the same for all users.
