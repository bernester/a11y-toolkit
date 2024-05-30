---
title: Reconsider disabled buttons
date: '2024-4-15'
category: content
components:
  - buttons
published: true
successCriteria:
  - '2.4.3'
level: A
source: https://www.magentaa11y.com/checklist-web/button/#focusable-disabled-button
---

Here are a few reasons why disabled buttons are gruesome things that will ruin your users’ day:

1. They fool users into clicking
2. They are hard to see
3. They don’t give any feedback
4. They give design teams a reason to rush through error handling
5. They make users think
6. Disabled buttons disable disabled users

You can read more about this here: https://axesslab.com/disabled-buttons-suck/

If you still want to use a disabled button, here is a preferred technique to ensure that screen reader users can find the button, click submit and be notified of errors in the form.

```html
<button aria-disabled="true">Continue</button>
```
