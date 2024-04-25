---
title: Buttons have suficient contrast
description: Buttons have have a minimum contrast ratio of 3:1
date: '2024-4-10'
category: form
components:
  - button
published: true
successCriteria:
  - '1.4.3'
level: AA
---

User interface components like buttons should have a minimum contrast ratio of 3:1

You can either achieve this by either giving them a background-color with enough contrast or by adding a border or box-shadow that would help to make the button stand out.

## There is a growing list of tools that help you to find the right colors:

- [Geenes](https://geenes.app/) helps you to create a color scale in seconds and export it to sketch or code.
- [WebAim Contrast Checker](https://webaim.org/resources/contrastchecker/) is probably the most known one
- [Contrast Grid](https://contrast-grid.eightshapes.com/) helps you to check your full color palette and to identify color combinations you should avoid.
- [Stark](https://www.getstark.co/) is a very powerful multi platform assistant that supports you during the design process.
- The [axe DevTools browser extension](https://www.deque.com/axe/browser-extensions/) scans your application and identifies color contrast issues in your current UI (and much more).

## There are exceptions:

- Inactive or disabled interface components
