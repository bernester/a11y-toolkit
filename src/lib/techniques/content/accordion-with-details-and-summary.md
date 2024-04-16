---
title: Accordion with details and summary
description: Create an accordion-like component with details and summary
date: '2024-4-10'
category: content
components:
  - accordion
published: true
successCriteria:
  - '1.1.1'
  - '2.1.1'
  - '3.2.3'
  - '4.1.2'
level: AA
source: https://www.scottohara.me/blog/2018/09/03/details-and-summary.html
---

Despite its limitations, `<details>` is a good choice. It's native accordion-like behaviour saves you from
reinventing the wheel and is widely supported in modern browsers.

It is a great option if you need an interactive component to hide some additional content for people to read later.

If you want to add some interactive content to your website without the hassle of custom scripts, this is a
fantastic solution!

```html
<details>
	<summary aria-expanded="true/false" tabindex="0" role="button">
		Text that summarises the rest of the content
	</summary>

	<p>
		Some detailed text for the user to read. It should be hidden by default, but will become visible
		when the user interacts with the summary element.
	</p>
	<p>Multiple paragraphs and other elements are allowed.</p>
</details>
```

But keep in mind. This is not a real accordion. You can read more about this topic in <a href="https://adrianroselli.com/2019/04/details-summary-are-not-insert-control-here.html" target="_blank" rel="nofollow noopener">Adrian Roselli's Blogpost "Details / Summary Are Not [insert control here]"</a>
