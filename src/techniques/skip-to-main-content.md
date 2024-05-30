---
title: Offer a "skip to main content" link
date: '2024-5-30'
category: basics
components:
  - structure
published: true
successCriteria:
  - '2.4.1'
level: A
source: https://www.magentaa11y.com/checklist-web/footer/#example-footer
---

Especially for websites with a nested page structure, a "skip to content" link can be extremely helpful for screen-reader users to avoid tabbing through the whole header and navigation over and over again.

```html
<body>
  <a href="#main-content" class="screen-reader-text">Skip to main content
  </a>

  <header class="site-header">
    <!-- Rest of your header code, like navigation menus, goes here -->
  </header>

  <main id="main-content">

    <h1>Heading</h1>
    <p>This is the first paragraph</p>

  </main>

</body>
```

Here is an example for how you can style the link so that is only visible for users that use the keyboard to navigate.

```css
.skip-to-main-content-link {
  position: absolute;
  left: -9999px;
  z-index: 999;
  padding: 1em;
  background-color: black;
  color: white;
  opacity: 0;
}

.skip-to-main-content-link:focus {
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}
```
