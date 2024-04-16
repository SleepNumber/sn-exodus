export function ConditionalWrapper({ condition, wrapper, children }: {
    condition: any;
    wrapper: any;
    children: any;
}): any;
/**
 * If boolean, show or don't show, if Breakpoint[], show at breakpoints
 * @typedef {boolean|Breakpoint[]} DisplayAt
 */
export function Blank(): any;
/**
 * When there is no good candidate for a React key, use this util to stringify
 * and hash the object/input to generate a unique key.
 *
 * If the input can not be hashed, an empty string is returned.
 * @param {any} input
 * @return {string}
 */
export function hashKey(input: any): string;
export namespace common_input_props {
    let id: any;
    let label: any;
    let desc: any;
    let onChange: any;
    let error: any;
    let classes: any;
    let wrapperClasses: any;
}
export namespace text {
    export { breakText as break };
    export { supSpecial };
    export { supSpecialDangerousHtml };
}
export namespace validators {
    function email(type: string, dispatch: Function, msg?: string): Function;
    function required(type: string, dispatch: Function, msg?: string): Function;
}
export function entitiesOf(type: any): any;
/**
 * PropType where boolean means show or don't show, Breakpoint[] means show at breakpoints
 */
export const displayableType: any;
/**
 * If boolean, show or don't show, if Breakpoint[], show at breakpoints
 */
export type DisplayAt = boolean | Breakpoint[];
/**
 * Weave <br>'s in between each string in an array of strings.
 * Each string in the original array is wrapped in a span to apply a key.
 * @param {String[]} textArray - The array of strings to weave <br>'s into.
 */
declare function breakText(textArray: string[]): any[];
/**
 * Puts special characters in a sup tag, each piece is wrapped in a React.Fragment
 * @param {String} input - The string to turn into an array of fragments.
 * @returns {React.Fragment[] | null} - An array of fragments or null if input falsy
 *
 * Example:
 * text.supSpecial('No sleeping† in Missouri℠') ->
 * [
 *   <React.Fragment key={0}>No sleeping</React.Fragment>,
 *   <React.Fragment key={1}><sup>†</sup></React.Fragment>,
 *   <React.Fragment key={2}> in Missouri</React.Fragment>,
 *   <React.Fragment key={3}><sup>℠</sup></React.Fragment>,
 * ]
 */
declare function supSpecial(input: string): React.Fragment[] | null;
/**
 * Puts special characters in a sup tag and returns string of html for dangerouslySetInnerHTML
 * Input: 'No sleeping†`
 * Output: '<span><span>No sleeping</span><sup>†</sup></span>'
 * @param {String} input - The string to turn into an html string.
 * @returns {string | null} - a string of html or null if input falsy
 */
declare function supSpecialDangerousHtml(input: string): string | null;
import { Breakpoint } from './device';
export {};
//# sourceMappingURL=jsx-utils.d.ts.map