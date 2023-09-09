# Global data-grid utility

```js
import `alku/grid.css`;
```

You can write `data-grid` on any element to enable `display: grid;`.

This utility can accept multiple values at the same time, eg. `data-grid="auto paddingEnd` is a valid combination.

## Automatic responsive columns

Enabled with `data-grid="auto"`.

In this mode you can define a minimum desired width for each item in the grid. When this width is met the grid will
automatically create a new column if there is enough space. If there is enough space for only single column then the
items will always be 100% of the available width.

The default width is `16rem`. You can change this using the `--grid-auto` CSS variable:

```html
<div data-grid="auto" style="--grid-auto: 20rem;">
	<div>Same row if each can be 20rem!</div>
	<div>Same row if each can be 20rem!</div>
</div>
```

You can also change the default width value:

```css
:root {
	--grid-default-auto-min-width: 16rem;
}
```

## Padding

There are three values: `padding`, `paddingStart`, and `paddingEnd`.

-   `data-grid="padding"` centers the element with 15% padding on both sides.
-   `data-grid="paddingStart` will add a 30% padding on the left side.
-   `data-grid="paddingEnd` will add a 30% padding on the right side.

You can mix these values. This utility is LTR and RTL aware.

You may change the default values:

```css
:root {
	--grid-default-padding-medium: 15%;
	--grid-default-padding-large: 30%;
}
```

If you are customizing on a per element basis you should just use CSS:

```html
<div data-grid="auto" style="padding-inline: 10% 40%;"></div>
```

## Centering items

`data-grid="centerItems"` will center all the items.

## Stacking items

`data-grid="stackItems` will force all the items to single grid and column slot. You can use stacking to do similar
things that was traditionally achieved with `position: absolute;`.

This rule is applied with zero specificity so if item is set to have a different `grid-area` then that rule will be
respected.
