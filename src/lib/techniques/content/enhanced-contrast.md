---
title: Text has enhanced contrast
description: Ensure that the contrast of readable content is enhanced.
date: '2024-4-15'
category: content
components:
  - text
published: true
successCriteria:
  - '1.4.6'
level: AAA
---

- Normal text (14px and more) should have a contrast ratio of at least 7:1
- Large text (at least 24px regular or 18px bold) should have a contrast ratio of at least 4.5:1
- Try to avoid text smaller than 14px since it might be very difficult to read

## There is a growing list of tools that help you to find the right colors:

- [WebAim Contrast Checker](https://webaim.org/resources/contrastchecker/) is probably the most known one
- [Contrast Grid](https://contrast-grid.eightshapes.com/) helps you to check your full color palette and to identify color combinations you should avoid.
- [Stark](https://www.getstark.co/) is a very powerful multi platform assistant that supports you during the design process.
- The [axe DevTools browser extension](https://www.deque.com/axe/browser-extensions/) scans your application and identifies color contrast issues in your current UI (and much more).

## There are exceptions:

- Inactive or disabled interface components
- Purely decorative elements
- Logos
