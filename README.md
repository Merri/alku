# Alku

A classless + HTML attribute utility CSS. Might become a component library later on, we shall see.

-   Ideal for sites that are written in plain HTML or in markdown: you get good looking content by default when you use semantic elements.
-   Familiarity: you know browser defaults, they are mostly retained.
-   Opt-in resets: utilities do resets. Use utilities for UI development.
-   Typography: lots of font stacks to choose form.

Also: does not change the default `box-sizing` behavior!

## Installation

```bash
npm install alku --save-dev
pnpm install alku --save-dev
yarn add alku --save-dev
```

### Usage: Astro

Intended to be the first CSS you load:

```astro
---
import 'alku';
// or alternatively if you wish to be more specific:
import 'alku/alku.css';
---
```

### Usage: HTML

As your first CSS:

```html
<!-- minified -->
<link rel="stylesheet" href="https://www.unpkg.com/alku/alku.css" type="text/css" />
<!-- source -->
<link rel="stylesheet" href="https://www.unpkg.com/alku/src/alku.css" type="text/css" />
```

Or host it yourself.

## Sources of inspiration

Stealing ideas from many sources (as we all do) and mixing in some ideas of my own.

-   [Modern Font Stacks](https://modernfontstacks.com/)
-   [normalize.css](https://github.com/necolas/normalize.css/blob/master/normalize.css) & [Modern normalize](https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css)
-   [sanitize.css](https://github.com/csstools/sanitize.css/blob/main/sanitize.css)
-   [Simple.css](https://github.com/kevquirk/simple.css/blob/main/simple.css)
-   Emoji fonts from Emojiterra.com's stylesheet

There are others, maybe I find or remember them again some day.

## Customization

You can customize these CSS variables in your own stylesheet:

```css
:root {
	--page-default-font: var(--system-sans-stack);
	--page-marker-font: var(--mono-stack);
	--page-heading-font: var(--old-style-serif-stack);
	--page-mono-font: var(--mono-stack);

	--focus-color: Highlight;
	--link-color: currentColor;

	--ol-indent: 2em;
	--ul-indent: 1.375em;
}
```

You can check the available font stack variables from [source alku.css file](src/alku.css).

## HTML attribute utilities

These are opinioned usability related extensions of HTML via the CSS.

| HTML attributes                                                    | Purpose                                                                                                                                                            |
| :----------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data-before="cover"`                                              | Insert a transparent `::before` pseudo element which covers the container. Useful to make links cover their entire container.                                      |
| `data-scrolling="horizontal"`                                      | Wrap tables and other elements that are allowed to grow to be wider than the viewport.                                                                             |
| `data-scrolling="vertical"`                                        | Wrap elements that you desire to scroll vertically. Note that you do need to have something that defines the height for the element such as a parent grid element. |
| `<a aria-describedby rel="noopener noreferrer" target="_blank" />` | Link to external site with a matching icon. [<sup>1</sup>](#1-external-link-icon)                                                                                  |
| `<ol role="list" />`<br />`<ul role="list" />`                     | Remove `list-style` and reset margin and padding of the list. Safari VoiceOver workaround to retain list semantics.                                                |
| `data-text`                                                        | Typographic utilities [<sup>2</sup>](#2-typographic-utilities)                                                                                                     |
| `data-text="visually-hidden"`                                      | Hide text visually, keep it available for screen readers. Display if focused (useful for skip link). [<sup>3</sup>](#3-visually-hidden)                            |

### Notes

#### 1) External link icon

`aria-describedby` should point to an element which describes that the link leads to an external site. For example:

```html
<!-- best place is in the beginning of body element -->
<div id="link-to-external-site" hidden>Opens external site</div>

<!-- example link -->
<a href="https://www.example.com" aria-describedby="link-to-external-site" rel="noopener noreferrer" target="_blank">
	Example
</a>
```

-   `rel="noopener noreferrer"` is recommended for security reasons.
-   Icon is part of the last word and does not wrap alone to a new line. (Except in Samsung Internet.)
-   Implemented using `::after` pseudo-element.

#### 2) Typographic utilities

`data-text` works as a typographic style reset (zero specificity), and it removes margin and padding, and inherits color
by default (specificity of `0, 1, 0`). If you only need the resets you can write `data-text=""`.

| Value           | Description                                                     |
| :-------------- | :-------------------------------------------------------------- |
| `heading1`      | `<h1 />` without margin                                         |
| `heading2`      | `<h2 />` without margin                                         |
| `heading3`      | `<h3 />` without margin                                         |
| `heading4`      | `<h4 />` without margin                                         |
| `heading5`      | `<h5 />` without margin                                         |
| `heading6`      | `<h6 />` without margin                                         |
| `heading`       | Use page default heading font                                   |
| `default`       | Use page default font                                           |
| `mono`          | Use page default monospace font                                 |
| `link`          | Link style                                                      |
| `external link` | External link style. Note that the words must be in this order. |
| `thin`          | Weight 100                                                      |
| `extralight`    | Weight 200                                                      |
| `light`         | Weight 300                                                      |
| `regular`       | Weight 400                                                      |
| `medium`        | Weight 500                                                      |
| `semibold`      | Weight 600                                                      |
| `bold`          | Weight 700                                                      |
| `extrabold`     | Weight 800                                                      |
| `black`         | Weight 900                                                      |
| `extrablack`    | Weight 950                                                      |
| `italic`        | Oblique 10% (italic)                                            |
| `underline`     | Underline                                                       |

So for example `<div data-text="heading3 italic external link mono" />` will result into what you would expect from what
it says: text in the size and weight of heading3, monospace italic, and looking like an external link.

The following font sizes are available: 24, 22, 20, 18, 16, 14. Usage:

`<span data-text="regular 18">Slightly bigger text than the usual 16.</span>`

The sizes are fluid and increase gradually from 400px to 800px viewport width being 4px bigger at the end.

All the variants from Modern Font Stacks are also available:

| Value          | Description                         |
| :------------- | :---------------------------------- |
| `system`       | System sans serif stack             |
| `handwritten`  | Handwritten stack                   |
| `transitional` | Transitional serif stack            |
| `oldstyle`     | Old style serif stack               |
| `slab`         | Slab serif stack                    |
| `antique`      | Antique serif stack                 |
| `didone`       | Didone serif stack                  |
| `humanist`     | Humanist sans serif stack           |
| `geometric`    | Geometric humanist sans serif stack |
| `classical`    | Classical humanist sans serif stack |
| `grotesque`    | Neo-grotesque sans serif stack      |
| `industrial`   | Industrial sans serif stack         |
| `rounded`      | Rounded sans serif stack            |
| `monoslab`     | Monospace slab serif stack          |
| `monocode`     | Monospace code stack                |

So if you want a part of the site use operating system default font you can do it with `data-text="system"`.

#### 3) Visually hidden

This is a modernized variant:

```css
:root [data-text='visually-hidden' i]:not(:focus):not(:active) {
	all: initial;
	clip-path: inset(50%);
	contain: content;
	position: absolute;
	height: 1px;
	width: 1px;
	white-space: nowrap;
}
```

-   Has intentionally high specificity of `0, 4, 0` which should be enough to win over most other selectors without resorting to `!important`.
-   Does not have negative margin as [it can change the text reading order](https://github.com/alphagov/govuk-frontend/pull/1109).
-   Lack of negative margin may however [cause an edge case which adds extra scrolling](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/84).

## Rendering fixes

| Element                    | Description                                                                                                                                                             |
| :------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Lists                      | List elements do not align correctly against floated elements. Especially noticeable with nested lists where the nesting is lost entirely next to a float.              |
| Tables                     | When `border-collapse: collapse;` is enabled and you apply `filter` on a table cell part of it's border is or may be included to the effect in both Chrome and Firefox. |
| Subscript<br />Superscript | As in original `normalize.css` these elements have been fixed not to have effect on line height.                                                                        |

## Opinionated stylings

This list may get outdated over time or may be incomplete.

| Feature                     | Description                                                                                                                                        |
| :-------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| Anchor                      | Link style is also applied to regular anchor. Anchors as such have no use so this allows easy repurposing of them as buttons that appear as links. |
| Body                        | The page is in a centered grid column by default.                                                                                                  |
| Cursor                      | Disabled elements have `not-allowed`. Busy elements have `progress`.                                                                               |
| Disabled elements           | Reduced saturation and opacity.                                                                                                                    |
| Fieldset and legend         | Padding removed by default.                                                                                                                        |
| Focus indication            | Strong `focus-visible` is applied to all elements by default.                                                                                      |
| Form inputs, iframe, images | `height: auto; max-width: 100%;`                                                                                                                   |
| Headings                    | Have default `font-weight` of semibold (600).                                                                                                      |
| Inline media and embeds     | `vertical-align: middle` by default.                                                                                                               |
| Links                       | Have `font-weight` of medium (500) by default. They are also underlined and inherit color.                                                         |
| Nested lists                | Have no margin.                                                                                                                                    |
| Scroll behavior             | Smooth scrolling is enabled by default.                                                                                                            |
| Search input                | Appear as regular text field for consistent styling.                                                                                               |
| Strong                      | Has default `font-weight` of semibold (600). `<b />` is bold (700).                                                                                |
| SVG                         | `fill: currentColor;` by default.                                                                                                                  |
| Textarea                    | `resize: vertical;` by default.                                                                                                                    |
