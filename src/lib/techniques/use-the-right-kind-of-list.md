---
title: Use the right kind of list
date: '2024-4-23'
category: content
components:
  - lists
published: true
successCriteria:
  - '1.3.1'
level: A
source: https://webaim.org/techniques/semanticstructure/
---

List structure should be used wherever a logical list is present, and nowhere else. Don't merely create something that looks like a list by starting each paragraph with a bullet character. Likewise, don't apply list structure to elements that do not logically form a list.

**Unordered lists `<ul>`**  
are for content having no order of sequence or importance. List items are typically prepended with a bullet, although this can be overridden with CSS if desired.

```html
<ul>
	<li>Milk</li>
	<li>
		Cheese
		<ul>
			<li>Blue cheese</li>
			<li>Feta</li>
		</ul>
	</li>
</ul>
```

**Ordered lists `<ol>`**  
suggest sequence, order, or ranking. List items are typically prepended with a number, letter, Roman numeral, etc.

```html
<ol>
	<li>Mix flour, baking powder, sugar, and salt.</li>
	<li>In another bowl, mix eggs, milk, and oil.</li>
	<li>Stir both mixtures together.</li>
	<li>Fill muffin tray 3/4 full.</li>
	<li>Bake for 20 minutes.</li>
</ol>
```

**Description lists `<dl>`**  
are for key:value pairs, such as terms and definitions in a glossary or questions and answers in a FAQ. Terms `<dt>` are typically bold, while descriptions `<dd>` are typically normal weight and indented.

```html
<p>Cryptids of Cornwall:</p>

<dl>
	<dt>Beast of Bodmin</dt>
	<dd>A large feline inhabiting Bodmin Moor.</dd>

	<dt>Morgawr</dt>
	<dd>A sea serpent.</dd>

	<dt>Owlman</dt>
	<dd>A giant owl-like creature.</dd>
</dl>
```
