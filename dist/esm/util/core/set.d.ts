/**
 * Util module to house basic Set operations.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#Implementing_basic_set_operations
 */
/**
 * Returns true if set is a superset of the subset.
 * Example:
 * <code>
 * let setA = new Set([1, 2, 3, 4]);
 * let setB = new Set([2, 3]);
 *
 * isSuperset(setA, setB); // => true
 * </code>
 * @param {Set|Array} set
 * @param {Set|Array} subset
 * @returns {boolean}
 */
export function isSuperset(set: Set<any> | any[], subset: Set<any> | any[]): boolean;
/**
 * Returns the union of the two sets.
 * Example:
 * <code>
 * let setA = new Set([1, 2, 3, 4]);
 * let setB = new Set([3, 4, 5, 6]);
 *
 * union(setA, setB); // => Set [1, 2, 3, 4, 5, 6]
 * </code>
 * @param {Set|Array} setA
 * @param {Set|Array} setB
 * @returns {Set<any>}
 */
export function union(setA: Set<any> | any[], setB: Set<any> | any[]): Set<any>;
/**
 * Returns the intersection of the two sets.
 * Example:
 * <code>
 * let setA = new Set([1, 2, 3, 4]);
 * let setB = new Set([3, 4, 5, 6]);
 *
 * intersection(setA, setB); // => Set [3, 4]
 * </code>
 * @param {Set|Array} setA
 * @param {Set|Array} setB
 * @returns {Set<any>}
 */
export function intersection(setA: Set<any> | any[], setB: Set<any> | any[]): Set<any>;
/**
 * Returns the symmetric difference of the two sets.
 * Example:
 * <code>
 * let setA = new Set([1, 2, 3, 4]);
 * let setB = new Set([3, 4, 5, 6]);
 *
 * symmetricDifference(setA, setB); // => Set [1, 2, 5, 6]
 * </code>
 * @param {Set|Array} setA
 * @param {Set|Array} setB
 * @returns {Set<any>}
 */
export function symmetricDifference(setA: Set<any> | any[], setB: Set<any> | any[]): Set<any>;
/**
 * Returns the symmetric difference of the two sets.
 * Example:
 * <code>
 * let setA = new Set([1, 2, 3, 4]);
 * let setB = new Set([3, 4, 5, 6]);
 *
 * difference(setA, setB); // => Set [1, 2]
 * </code>
 * @param {Set|Array} setA
 * @param {Set|Array} setB
 * @returns {Set<any>}
 */
export function difference(setA: Set<any> | any[], setB: Set<any> | any[]): Set<any>;
//# sourceMappingURL=set.d.ts.map