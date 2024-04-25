---
title: User alternative text for chart graphics
description: Use alternative text to describe the content of charts
date: '2024-4-15'
category: content
components:
  - charts
published: true
successCriteria:
  - '1.1.1'
level: A
source: https://html.spec.whatwg.org/multipage/images.html#a-phrase-or-paragraph-with-an-alternative-graphical-representation:-charts,-diagrams,-graphs,-maps,-illustrations
---

_Example_

```html
<p>
	In the common case, the data handled by the tokenization stage comes from the network, but it can
	also come from script.
</p>
<p>
	<img
		src="images/parsing-model-overview.svg"
		role="image"
		alt="The Network passes data to the Input Stream Preprocessor, which passes it to the Tokenizer, which passes it to the Tree Construction stage. From there, data goes to both the DOM and to Script Execution. Script Execution is linked to the DOM, and, using document.write(), passes data to the Tokenizer."
	/>
</p>
```
