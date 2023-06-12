/* eslint-disable no-restricted-syntax */
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
export function isSuperset(set, subset) {
  const a = Array.isArray(set) ? new Set(set) : set;
  const b = Array.isArray(subset) ? new Set(subset) : subset;

  for (const elem of b) {
    if (!a.has(elem)) {
      return false;
    }
  }

  return true;
}

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
export function union(setA, setB) {
  const a = Array.isArray(setA) ? new Set(setA) : setA;
  const b = Array.isArray(setB) ? new Set(setB) : setB;
  const setUnion = new Set(a);

  for (const elem of b) {
    setUnion.add(elem);
  }

  return setUnion;
}

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
export function intersection(setA, setB) {
  const a = Array.isArray(setA) ? new Set(setA) : setA;
  const b = Array.isArray(setB) ? new Set(setB) : setB;
  const setIntersection = new Set();

  for (const elem of b) {
    if (a.has(elem)) {
      setIntersection.add(elem);
    }
  }

  return setIntersection;
}

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
export function symmetricDifference(setA, setB) {
  const a = Array.isArray(setA) ? new Set(setA) : setA;
  const b = Array.isArray(setB) ? new Set(setB) : setB;
  const setDifference = new Set(a);

  for (const elem of b) {
    if (setDifference.has(elem)) {
      setDifference.delete(elem);
    } else {
      setDifference.add(elem);
    }
  }

  return setDifference;
}

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
export function difference(setA, setB) {
  const a = Array.isArray(setA) ? new Set(setA) : setA;
  const b = Array.isArray(setB) ? new Set(setB) : setB;
  const setDifference = new Set(a);

  for (const elem of b) {
    setDifference.delete(elem);
  }

  return setDifference;
}
