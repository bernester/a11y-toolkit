---
title: Alternative text for images within a paragraph doesn't interrupt the flow
date: '2024-4-10'
categories:
  - content
components:
  - image
  - text
published: true
successCriteria:
  - '1.1.1'
source: https://html.spec.whatwg.org/multipage/images.html#a-phrase-or-paragraph-with-an-alternative-graphical-representation:-charts,-diagrams,-graphs,-maps,-illustrations
---

In our example the alternative text continues the flow. To think about this also helps to identify purely decorative images and maybe even elements that could be removed completely.

```html
<p>You are standing in an open field west of a house. 
<img src="house.jpeg" role="img" alt="The house is white, with a boarded front door."> There is a small mailbox here. </p>
```

A bad example would be to use "Image of a house" as an alternativ text. A screen reader would read: "You are standing in an open field west of a house - Image: Image of a house - There is a small mailbox here."