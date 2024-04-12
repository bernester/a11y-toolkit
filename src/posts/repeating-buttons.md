---
title: Repeating buttons
date: '2024-4-10'
description: 'users undestand the purpose of generic buttons like edit, add or remove.'
categories:
  - form
components:
  - button
published: true
successCriteria:
  - '4.1.2'
source: https://www.magentaa11y.com/checklist-web/button/#when-there-are-repeating-buttons
level: 'basic'
---

Often there are repeating buttons like 'edit', 'add' or 'remove'. Most users can understand what they do by how they are places on the interface. Screenreader would need more informative labels to understand the function of the button.

In a case like this, aria-label can be used to name each control’s purpose.

```html
<button aria-label="Edit payment date">Edit</button>
<button aria-label="Edit payment amount">Edit</button>
```
