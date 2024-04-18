---
title: Declare mid page language changes
description: Ensure that icon buttons are accessible for screenreader and other assistive technologies.
date: '2024-4-15'
category: basics
components:
  - language
published: true
successCriteria:
  - '3.1.1'
level: A
source: https://equalizedigital.com/accessibility-checker/missing-language-declaration/
---

```html
<p>
	Here is a sentence in English. Most of my content is in English and the main document language is
	declared to be English so this paragraph does not need a language declaration.
</p>

<p lang="es" xml:lang="es">
	Aquí hay una oración en español. Usamos el traductor de Google, así que espero que sea correcto.
	Debido a que este párrafo está en un idioma nuevo, lo hemos notado en el HTML del párrafo.
</p>
```

[List of available language codes.](https://www.w3schools.com/tags/ref_language_codes.asp)
