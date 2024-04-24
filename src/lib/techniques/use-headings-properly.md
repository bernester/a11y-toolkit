---
title: Use headings properly
date: '2024-4-23'
category: content
components:
  - headings
published: true
successCriteria:
  - '1.3.1'
  - '1.3.2'
level: A
---

A heading describes the content that follows it, much like a news headline. When arriving at a new page, sighted users gravitate toward headings to quickly find what they want on the page. Screen reader and other assistive technology users can also skip from heading to heading.

`<h1>` describes the page as a whole and should be similar to the page title. A page should typically have only one `<h1>`.

```html
<h1>My Favorite Recipes</h1>
```

Headings `<h2>` through `<h6>` represent increasing degrees of "indentation" in our conceptual "outline". As such, it does not make sense to skip heading levels, such as from `<h2>` to `<h4>`, going down the page.

```html
<h2>Quick and Easy</h2>
<h3>Spaghetti</h3>
<h3>Hamburgers</h3>
<h3>Tacos</h3>
<h4>Beef Tacos</h4>
<h4>Chicken Tacos</h4>
<h4>Fish Tacos</h4>
```

## Guidelines for headlines

- **Headings must use heading tags.**  
  Screen readers and assistive technologies rely on heading tags to identify headings. Text that is merely large, bold, or emphasized is not interpreted as a heading unless the markup is used.
- **Use headings only when they represent following content.**  
  To highlight or emphasize text that is not a heading, use styles, not heading tags, to achieve visual results.

## Screenreader output

- JAWS: Heading level [number] [label]
- NVDA: Heading level [number] [label]
- Windows Narrator: Heading level [number] [label]
