---
title: link or button?
date: '2024-4-15'
category: navigation
components:
  - links
  - buttons
published: true
successCriteria:
  - '4.1.2'
level: A
source: https://www.magentaa11y.com/checklist-web/button/
---

Here is a little method to decide if you need a link or a button:

**If it takes the user to a new location, it's a link.**
I can be either another page or even another area of the same page.
Then it is a link. A link can look like a button but it must be coded as a link.

```html
<a href="" class="button">I take you somewhere else</a>
```

**if it does something, it’s a button.**
Buttons cause an action that happens on the same page like submitting a form, opening a menu or a modal, expanding details.
A button can look like a link, but it must be coded as a button.

```html
<button class="link">show me some detail</button>
```
