# Typography

-   [Fluid font size system](#fluid-font-size-system)
-   [Margins](#margins)
-   [Emoji support](#emoji-support)
-   [Typographic utilities](#typographic-utilities)
-   [Text color](#text-color)
-   [Heading group](#heading-group)

## Fluid font size system

Alku has fluid typography ranging from 400px to 800px viewport width. The sizes are fairly legible and large to ensure
better readability by default.

| Element     | Min size        | Max size        | CSS variable                                         |
| :---------- | :-------------- | :-------------- | :--------------------------------------------------- |
| `<h1 />`    | 32px (2rem)     | 48px (3rem)     | `--page-font-size-32`                                |
| `<h2 />`    | 28px (1.75rem)  | 40px (2.5rem)   | `--page-font-size-28`                                |
| n/a         | 26px (1.625rem) | 32px (2rem)     | `--page-font-size-26`                                |
| `<h3 />`    | 24px (1.5rem)   | 28px (2.75rem)  | `--page-font-size-24`                                |
| `<h4 />`    | 22px (1.375rem) | 26px (1.625rem) | `--page-font-size-22`                                |
| `<h5 />`    | 20px (1.25rem)  | 24px (1.5rem)   | `--page-font-size-20`                                |
| `<h6 />`    | 18px (1.125rem) | 22px (1.375rem) | `--page-font-size-18`                                |
| `<pre />`   | 16px (1rem)     | 20px (1.25rem)  | `--page-font-size-16` and `--page-default-font-size` |
| n/a         | 14px (0.875rem) | 18px (1.125rem) | `--page-font-size-14`                                |
| `<small />` | 87.5%           | 87.5%           | n/a                                                  |

Page default font size is applied to `<body />`, `<button />`, and `<optgroup />`

`<input />`, `<select />`, and `<textarea />` are set to 1rem (16px) to avoid Safari zooming in upon focus.

You can make page wide overrides by altering the font CSS variables in `:root`.

## Margins

One of the things Alku doesn't change which other CSS frameworks commonly alter is that typographic elements retain both
their top and bottom margin. CSS resets usually take away all margin, and even semantic HTML friendly frameworks have a
tendency to remove top margin. Alku opts of embrace the default behavior here and will include both top and bottom
margin, even if altered from the defaults.

## Emoji support

Alku provides a wide Emoji font fallback support by default. You can add `var(--emoji-font)` at the end of your custom
font-family stacks.

## Typographic utilities

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

The following font sizes are available: 26, 24, 22, 20, 18, 16, 14. Usage:

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

## Text color

You can use `data-text-color` to change color:

| Value      | Description                                                          |
| :--------- | :------------------------------------------------------------------- |
| `current`  | Apply currentColor                                                   |
| `muted`    | Muted text color: reduce strength of inherited `currentColor` to 60% |
| `negative` | Negative text color (red)                                            |
| `positive` | Positive text color (green)                                          |

Note that when using `positive` and `negative` you should use other visual means to indicate the positive or negative
aspect as colorblindness may prevent noticing the difference based on only color. Use symbols, icons, emoji etc.

## Heading group

The following pattern is encouraged:

```html
<hgroup>
	<h2>Heading</h2>
	<p>Subheading</p>
</hgroup>
```

Margins are collapsed and the subheading paragraph has muted text color, but only if it immediately follows a heading
element.

You can undo the muting:

```html
<hgroup>
	<h2>Heading</h2>
	<p data-text-color="current">Subheading</p>
</hgroup>
```
