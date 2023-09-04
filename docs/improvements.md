# Improvements and changes over browser defaults

-   [Focus indication](#focus-indication)
-   [Lists and floats](#lists-and-floats)
-   [Smooth scrolling](#smooth-scrolling)
-   [Superscript and subscript](#superscript-and-subscript)
-   [Tables](#tables)
-   [Intentionally not included](#intentionally-not-included)

See also: [Typography](./typography.md)

## Focus indication

Alku provides strong focus indication **to all focusable elements** by applying `focus-visible`:

<span style="outline: 3px solid Highlight; outline-offset: 3px;">Sample outline</span>

<button type="button" style="outline: 3px solid Highlight; outline-offset: 3px;">Sample outline</button>

<input style="outline: 3px solid Highlight; outline-offset: 3px;" value="Sample outline">

You can customize the outline color by setting `--focus-color`:

```css
:root {
	--focus-color: Highlight;
}
```

Alku does not enforce any color system by default which is why only browser / OS provided color values are used.

`focus-visible` has been applied with zero specificity:

```css
:where(:focus:not(:focus-visible)) {
	outline: none;
}

:where(:focus-visible) {
	outline: 3px solid var(--focus-color);
	outline-offset: 3px;
}
```

This means your outline rules will always override any focus indication.

## Lists and floats

In default styles list elements do not align correctly against floated elements. Especially noticeable with nested lists
where the nesting is lost entirely when next to a float.

Alku fixes this issue with some margin and transform trickery and will work with both left-to-right and right-to-left
languages.

## Smooth scrolling

Smooth scrolling helps users to retain their sense of space and place on the page. In Alku scrolling to hash targets is
automatically smooth, except if reduced motion is active.

Some scroll margin has been reserved for all targets so you can have a fixed top bar and it won't hide contents (as long
as the top bar is not excessively tall).

## Superscript and subscript

`<sup />` and `<sub />` have been changed so that they do not have an effect to line height. This behavior has been
implemented as it is in `normalize.css`.

## Tables

There is a bug in table rendering in Chrome and Firefox when using `border-collapse: collapse;` and you apply a filter
to a cell: a part of it's border may be included in the filter. Firefox is consistent with the bug, with Chrome you need
to manipulate with JavaScript for the undesired glitchy behavior to occur.

Alku fixes this issue by applying `background-clip: padding-box; filter: brightness(1);` on all table cells.

The fix also guarantees how a transparent border color works in a `border-collapse: collapse;` table: it will always be
based on the table's background color (if any).

## Intentionally not included

These common custom styles are not included:

```css
*,
::before,
::after {
	background-repeat: no-repeat;
	box-sizing: border-box;
}
```

These should be project specific and are more like team/personal preferences which are easy enough to add when desired.
