import 'react'

declare module 'react' {
	interface CSSProperties {
		/** Change default font inside this element's context. */
		'--default-font'?: string
		/** Change heading font inside this element's context. */
		'--heading-font'?: string
		/** Change mono font inside this element's context. */
		'--mono-font'?: string
	}

	interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
		/**
		 * CSS box utility. Available options:
		 *
		 * - `""`: element becomes a `block` element. The element contains it's layout (child margins won't collapse).
		 * - `inline`: element becomes either `inline-block` or `inline-flex` element.
		 * - `column`: element becomes vertical flexbox element.
		 * - `row`: element becomes horizontal flexbox element. The element wraps.
		 * - `trim`: removes top margin of first child element and bottom margin of last child element.
		 *
		 * You can use `--min-desired-size` CSS variable to set minimum desired size of child elements.
		 */
		'data-box'?: string
		/** Button style utility.
		 *
		 * - `""`: reset to button base styles (no button appearance)
		 * - `systemColor`: use system colors
		 * - `systemContrast`: use contrasting system colors
		 * - `canvasColor`: use canvas colors
		 * - `canvasContrast`: use contrasting canvas colors
		 * - `accent`: theme with accent color
		 * - `muted`: theme with muted color
		 * - `positive`: theme with positive color
		 * - `negative`: theme with negative color
		 * - `outline`: render in outline style
		 * - `mediumSize`: render in medium size
		 * - `smallCircle`: render in small circle size
		 * - `mediumCircle`: render in medium circle size
		 * - `largeCircle`: render in large circle size
		 */
		'data-button'?: string
		/**
		 * CSS column utility. Creates three columns, center column is for content. Available options:
		 *
		 * - `<body data-column="">` disables the default column
		 * - `narrowContent`: 60ch measure
		 * - `smallContent`: 70ch measure
		 * - `mediumContent`: 80ch measure (default on `<body>`)
		 * - `largeContent`: 115ch measure
		 *
		 * You can use `data--="fullRow"` to breakout a child item to all columns.
		 */
		'data-column'?: string
		/**
		 * CSS flex property utility. Available options:
		 *
		 * - `auto`: shrink or grow as necessary.
		 * - `100%`: consume all available space.
		 * - `none`: do not flex at all.
		 *
		 * Always limits element maximum size to 100%.
		 *
		 * **Note:**
		 *
		 * Use `data-box="column|row"` to use flexbox.
		 */
		'data-flex'?: '' | 'auto' | '100%' | 'none'
		/**
		 * CSS grid utility. Available options:
		 *
		 * - `centerItems`
		 * - `stackItems`
		 *
		 * - `auto`
		 * - `padding`
		 * - `paddingStart`
		 * - `paddingEnd`
		 */
		'data-grid'?: string
		/** CSS scroll container utility. */
		'data-scrolling'?: '' | 'block' | 'inline'
		'data-text-color'?: 'current' | 'muted' | 'positive' | 'negative' | 'state'
		/** CSS text utility. Always resets typography to inheritance.
		 *
		 * Sizes: 26, 24, 22, 20, 18, 16, 14
		 *
		 * - `visuallyHidden`: screen reader text, skip links
		 * - `""`: reset to default font, default size, default weight
		 * - `sansserif`: `sans-serif` font
		 * - `serif`: `serif` font
		 * - `monospace`: `monospace` font
		 * - `heading1`: use heading1 typography
		 * - `heading2`: use heading2 typography
		 * - `heading3`: use heading3 typography
		 * - `heading4`: use heading4 typography
		 * - `heading5`: use heading5 typography
		 * - `heading6`: use heading6 typography
		 * - `default`: use `--default-font`
		 * - `mono`: use `--mono-font`
		 * - `thin`: weight 100
		 * - `extralight`: weight 200
		 * - `light`: weight 300
		 * - `reqular`: weight 400
		 * - `medium`: weight 500
		 * - `semibold`: weight 600
		 * - `bold`: weight 700
		 * - `extrabold`: weight 800
		 * - `black`: weight 900
		 * - `extrablack`: weight 950
		 * - `italic`: italic
		 * - `link`: link appearance
		 * - `external link`: external link appearance
		 * - `underline`: underline
		 *
		 * Font stacks:
		 *
		 * - `system`
		 * - `handwritten`
		 * - `transitional`
		 * - `oldstyle`
		 * - `slab`
		 * - `antique`
		 * - `didone`
		 * - `humanist`
		 * - `geometric`
		 * - `classical`
		 * - `grotesque`
		 * - `industrial`
		 * - `rounded`
		 * - `monoslab`
		 * - `monocode`
		 */
		'data-text'?: string
		'data-text-wrap'?: '' | 'none' | 'anywhere'
		/** Generic CSS utils.
		 *
		 * - `newRow`: start a new row in grid.
		 * - `fullRow`: fill entire row in grid / breakout content column.
		 * - `max100%`: 100% maximum width
		 * - `100%`: 100% width
		 * - `bottom`: vertical align bottom
		 * - `middle`: vertical align middle
		 * - `top`: vertical align top
		 * - `cover::before`: place absolute element to take over all available space
		 * - `cover::after`: place absolute element to take over all available space
		 * - `focus`: show focus indicator
		 * - `focus::before`: relocate indicator to ::before pseudo element
		 * - `focus::after`: relocate indicator to ::after pseudo element
		 * - `focusInside`: place indicator inside the element
		 * - `focusOutside`: place indicator outside the element
		 */
		'data--'?: string
	}

	interface AlkuHTMLAttributes<T> extends HTMLAttributes<T> {
		/**
		 * CSS box utility. Available options:
		 *
		 * - `""`: element becomes a `block` element. The element contains it's layout (child margins won't collapse).
		 * - `inline`: element becomes either `inline-block` or `inline-flex` element.
		 * - `column`: element becomes vertical flexbox element.
		 * - `row`: element becomes horizontal flexbox element. The element wraps.
		 * - `trim`: removes top margin of first child element and bottom margin of last child element.
		 *
		 * You can use `--min-desired-size` CSS variable to set minimum desired size of child elements.
		 */
		box?: string
		/**
		 * CSS column utility. Creates three columns, center column is for content. Available options:
		 *
		 * - `narrowContent`: 60ch measure
		 * - `smallContent`: 70ch measure
		 * - `mediumContent`: 80ch measure
		 * - `largeContent`: 115ch measure
		 *
		 * You can use `data--="fullRow"` to breakout a child item to all columns.
		 */
		column?: string
		/**
		 * CSS grid utility. Available options:
		 *
		 * - `centerItems`
		 * - `stackItems`
		 *
		 * - `auto`
		 * - `padding`
		 * - `paddingStart`
		 * - `paddingEnd`
		 */
		grid?: string
	}

	interface ReactHTML {
		'al-ku': DetailedHTMLFactory<AlkuHTMLAttributes<HTMLElement>, HTMLElement>
	}

	namespace JSX {
		interface IntrinsicElements {
			'al-ku': DetailedHTMLProps<AlkuHTMLAttributes<HTMLElement>, HTMLElement>
		}
	}
}
