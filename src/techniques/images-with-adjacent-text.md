---
title: Images with adjacent text
description: Images that are already described by adjacent text can be ignored by assistive technology.
date: '2024-4-15'
category: content
components:
  - images
  - text
published: true
successCriteria:
  - '1.1.1'
level: A
source: https://html.spec.whatwg.org/multipage/images.html#a-graphical-representation-of-some-of-the-surrounding-text
---

```html
<p>
	The Network passes data to the Input Stream Preprocessor, which passes it to the Tokenizer, which
	passes it to the Tree Construction stage. From there, data goes to both the DOM and to Script
	Execution. Script Execution is linked to the DOM, and, using document.write(), passes data to the
	Tokenizer.
</p>
<p><img src="images/parsing-model-overview.svg" role="presentation" alt="" /></p>
```
