---
title: Confirm that high contrast mode is supported
date: '2024-4-10'
categories:
  - basics
components:
  - color
published: true
successCriteria:
  - '1.4.6'
---

High contrast mode alters the way Web content is displayed by disabling certain CSS features. Applications that use CSS to include, position or alter non-decorative content may have issues including the disappearance of images or UI elements when high contrast mode is enabled. Another example is the disappearance of visual focus indicators and visual alterations of UI elements with Windows high contrast mode enabled.

## What to do (Chrome)

1. Open the inspector and open the Rendering Tab.
2. Go to "Emulate CSS media feature forced-colors" and select "forced-colors: active".
3. Confirm all UI elements are visible and inherit the selected high contrast theme.
4. Confirm that checkboxes, radio buttons and text entry field boundaries are visible with good contrast.
5. Confirm the visual focus indicator is highly visible.
6. Confirm that all images that convey information are visible, or a text alternative is displayed.
7. And, confirm that all decorative images are no longer visible.
