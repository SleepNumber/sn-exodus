/**
 * Convert style objects to a string of valid css.
 * camelCase names are converted to kabob-case.
 * @param {string|object} input
 * @return {string}
 *
 * USAGE:
 * styleObjectToCss({ fontSize: '8px', backgroundColor: 'blue' }) ->
 * `
 * font-size 8px;
 * background-color: blue;
 * `
 */
export function styleObjectToCss(input: string | object): string;
/**
 * Convert the input to a string of css.
 * Input can be a string of css, a css style object, or an array of either
 * @param {string, object, Array<string|object>} input
 * @return {string}
 */
export function buildStyleString(input: any): string;
/**
 * Add some css styles to the page in a new `<style>` tag.
 * If a style tag with the {id} already exists, the contents are updated.
 * @param {string} id - a unique identifier for the style tag
 * @param {string} css - a string of valid css
 */
export function addGlobalStyles(id: string, css: string): void;
/**
 * Create a unique class name and add it to all the rules in the styles
 * i.e. `.foo { color: 'black'; }`
 *      becomes
 *      `.wrapper-class .foo { color: 'black'; }`
 * Returns null if `styles` are falsey or an array of falsey values.
 * @param {string | object} css - a string of valid css, or valid style object
 * @return {{className: string, styles: string} | null}
 */
export function createWrapperStyles(styles: any): {
    className: string;
    styles: string;
};
/**
 * Prefixes all rules in {css} with a unique class name,
 * adds the updated styles to the page in a style tag,
 * and returns the unique class name.
 * @param {string} css - a valid string of css
 * @return {string} - the unique class name to add to your component
 *
 * USAGE:
 * const clazz = addWrapperStyles('.foo { color: "red"; }');
 * return (
 *   <div className={clazz}>
 *     <span className='foo'>bar</span>
 *   </div>
 * );
 */
export function addWrapperStyles(css: string): string;
/**
 * Replace the emotion template string function "css`.foo { color: black; }`;"
 * Just returns the string as-is but allows the IDE to do syntax highlighting
 * @return {string}
 */
export default function css(strings: any, ...values: any[]): string;
//# sourceMappingURL=css.d.ts.map