export class AlkuElement extends HTMLElement {
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

declare global {
	interface HTMLElementTagNameMap {
		alku: AlkuElement
	}
}
