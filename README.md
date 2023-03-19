# Alku

This might become my classless + HTML attribute utility CSS. Maybe components library too, we shall see.

Stealing ideas from many sources (as we all do) and mixing in some ideas of my own.

## Sources of inspiration

-   [Modern Font Stacks](https://modernfontstacks.com/)
-   [normalize.css](https://github.com/necolas/normalize.css/blob/master/normalize.css) & [Modern normalize](https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css)
-   [sanitize.css](https://github.com/csstools/sanitize.css/blob/main/sanitize.css)
-   [Simple.css](https://github.com/kevquirk/simple.css/blob/main/simple.css)
-   Emoji fonts from Emojiterra.com's stylesheet

There are others, maybe I find or remember them again some day.

## HTML attribute utilities

These are opinioned extensions of HTML via the CSS.

| HTML attributes                                                    | Purpose                                                                                                                                                            |
| :----------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data-hidden="visually"`                                           | Hide text visually, keep it available for screen readers. Display if focused (useful for skip link). [<sup>1</sup>](#1-visually-hidden)                            |
| `data-scrolling="horizontal"`                                      | Wrap tables and other elements that are allowed to grow to be wider than the viewport.                                                                             |
| `data-scrolling="vertical"`                                        | Wrap elements that you desire to scroll vertically. Note that you do need to have something that defines the height for the element such as a parent grid element. |
| `<a aria-describedby rel="noopener noreferrer" target="_blank" />` | Link to external site with a matching icon. [<sup>2</sup>](#2-external-link-icon)                                                                                  |
| `<ol role="list" />`<br />`<ul role="list" />`                     | Remove `list-style` and reset margin and padding of the list. Safari VoiceOver workaround to retain list semantics.                                                |

### Notes

#### 1) Visually hidden

This is a modernized variant:

```css
:root [data-hidden='visually' i]:not(:focus):not(:active) {
	all: initial;
	clip-path: path('');
	position: absolute;
	height: 1px;
	width: 1px;
	white-space: nowrap;
}
```

-   Has intentionally high specificity of `0, 4, 0` which should be enough to win over most other selectors without resorting to `!important`.
-   Does not have negative margin as [it can change the text reading order](https://github.com/alphagov/govuk-frontend/pull/1109).
-   Lack of negative margin may however [cause an edge case which adds extra scrolling](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/84).

#### 2) External link icon

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
