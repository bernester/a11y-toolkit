---
title: Groupe radio-buttons properly
description: Use the right HTML elements to group radio-buttons and labels
date: '2024-4-15'
category: form
components:
  - radio-button
published: true
successCriteria:
  - '1.3.5'
level: AA
---

Using the right HTML elements when implementing forms is essential to ensure they can be used by as many people as possible including screen reader users.

When building forms, we often use groups of related form fields, like a set of radio buttons or checkboxes. These related fields might be used to offer multiple answers to a single question, or to ask for multiple pieces of information about the same thing.

```html
<fieldset role="radiogroup">
	<legend>Do you like pizza?</legend>
	<input type="radio" name="pizza" id="yesAnswer" />
	<label for="yesAnswer">Yes</label>
	<input type="radio" name="pizza" id="noAnswer" />
	<label for="noAnswer">No</label>
	<input type="radio" name="pizza" id="pineappleAnswer" checked aria-checked="true" />
	<label for="pineappleAnswer">Only pineapple one!</label>
</fieldset>
```

using `<fieldset>` and `<legend>` element helps the browser understand the structure and purpose of the radio button group without additional workarounds from developers. Their purpose is to provide a text description or question associated with the radio buttons, a context that might be difficult to retrieve using other markup.

**Descriptive instructions are needed so that people understand what to input.**

## When to use a fieldset and legend

You should use the `<fieldset>` and`<legend>` elements when:

- You have a single multiple choice question (using radio buttons or checkboxes)
- You have several questions relating to the same topic (like text boxes, or any other type of field)
