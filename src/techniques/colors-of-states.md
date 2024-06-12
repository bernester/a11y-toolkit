---
title: Colors of interactive states
description: Define colors for states with sufficient contrast.
date: '2024-4-15'
category: basics
components:
  - colors
published: true
successCriteria:
  - '1.4.3'
level: AA
---

Interactive elements have different states like `:hover`, `:focus`, `:active`, `:visited`, `:disabled`. When defining the color palette for your UI also think about colors for these states and check the compliance with a contrast color.

> Important: Keep in mind that you should not rely on colors only to visualise the state of an interactive element.

```css
--primary: #9b293c;
--primary-hover: #7b2030;
--primary-focus: #7b2030;
--primary-active: #8b2536;
--primary-visited: #7b2030; /* optional in most cases */
--primary-contrast: #fff;
```
