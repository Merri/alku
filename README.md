# Alku

This might become my classless + utility class CSS. Maybe components library too, we shall see.

Stealing ideas from many sources (as we all do) and mixing in some ideas of my own.

## Sources of inspiration

- [normalize.css](https://github.com/necolas/normalize.css/blob/master/normalize.css) & [Modern normalize](https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css)
- [sanitize.css](https://github.com/csstools/sanitize.css/blob/main/sanitize.css)
- [Simple.css](https://github.com/kevquirk/simple.css/blob/main/simple.css)
- Emoji fonts from Emojiterra.com's stylesheet

There are others, maybe I find them again some day.

## Class utilities

| Global class | Purpose |
| :-- | :-- |
| `.visually-hidden` | Hide text visually, keep it available for screen readers.<br />Does not have negative margin as [it can change the text reading order](https://github.com/alphagov/govuk-frontend/pull/1109).<br />Lack of negative margin may however [cause an edge case which adds extra scrolling](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/84). |
| `.horizontally-scrollable` | Wrap tables and other elements that are allowed to grow to be wider than the viewport. |

## HTML attribute utilities

These are opionioned extensions of HTML via the CSS.

| HTML attributes | Purpose |
| :-- | :-- |
| `hidden aria-hidden="false"` | Skip links, or same as `.visually-hidden` for non-focusable elements. |
| `<ol role="list" />` | Remove `list-style` and reset margin and padding of the list. Safari VoiceOver workaround to retain list semantics. |
| `<ul role="list" />` | Remove `list-style` and reset margin and padding of the list. Safari VoiceOver workaround to retain list semantics. |
