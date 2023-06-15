/**
 * Returns `true` if this is a valid number
 * @param {*} input
 * @return {boolean}
 */
export function isNumber(input: any): boolean;
/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
export function random(min: any, max: any): any;
/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution.
 */
export function randomInt(min: any, max: any): any;
/**
 * Return the amount of transactions to go from `start` to `final`, increasing
 * by `rate` each transaction.
 * @param {number} start - the starting value
 * @param {number} final - the final value
 * @param {number} rate - the rate of increase as a percentage, e.i. `1.2` would be 20%
 * @returns {number} - the amount of transactions to reach the final value.
 *
 * Example:
 * console.log('Years till retirement', compound(100000, 4000000, 1.09)); -> 44
 */
export function compound(start: number, final: number, rate: number): number;
/**
 * Limit a number within min and max bounds
 * Example: clamp(15, 50, 100);
 * Returns: 50
 * @param {number} num - Number to clamp
 * @param {number} min - Minimum value to return
 * @param {number} max - Maximum value to return
 * @returns clamped value
 */
export function clamp(num: number, min: number, max: number): number;
//# sourceMappingURL=number.d.ts.map