/* ARRAY UTILS
   --------------------------------------------------------------- */

import { prop } from './object';
import { identity, required } from './function';
import { isSuperset, intersection } from './set';

export const arrays = {
  /**
   * Creates a shallow clone of the array.
   * If objects exist in the original array, the references
   * are kept.
   *
   * https://davidwalsh.name/javascript-clone-array
   */
  clone(arr) {
    return arr.slice(0);
  },

  /**
   * Insert an item in an array at the index.
   *
   * USAGE:
   * let months = ['Jan', 'March', 'April'];
   * sn.arrays.insert(months, 1, 'Feb'); // insert at index 1
   * console.log(months); // Array ['Jan', 'Feb', 'March', 'April']
   */
  insert(arr, index, item) {
    if (index < 0) {
      throw new Error('Index must be greater than 0.');
    }
    if (index > this.length - 1) {
      throw new Error(
        `Index must be less than array length. Index: ${index}, Length: ${this.length}`
      );
    }

    arr.splice(index, 0, item);
    return arr;
  },

  /**
   * Add an item or array of items in between every item in the array.
   * @param {any[]} arr - The array to weave things into.
   * @param {*} item - The item to weave into the array.
   *        If `item` is an Array then the items of `item` are woven into `arr` sequentially.
   *        If `item` is a function, then the result of item(i) is woven into `arr` sequentially.
   * @param {boolean} before - if true, the first item in the resulting array will be the weave item
   */
  weave(arr, item, before = false) {
    const next = i => {
      if (Array.isArray(item)) return item[i];
      if (typeof item === 'function') return item(i);
      return item;
    };

    return arr.reduce((prev, curr, i) => {
      if (before) prev.push(next(i));
      prev.push(curr);
      if (!before && i !== arr.length - 1) prev.push(next(i));
      return prev;
    }, []);
  },

  /** Chunk an array into smaller arrays. */
  chunk(arr, size) {
    const groups = [];

    let i;
    for (i = 0; i < arr.length; i += size) {
      groups.push(arr.slice(i, i + size));
    }
    return groups;
  },

  /**
   * Returns true if two arrays have strictly equal (not equivalent) items.
   * Does NOT account for objects or nested arrays.
   * Order does not matter.
   * @see http://stackoverflow.com/a/16436975
   *
   * USAGE:
   * sn.arrays.equalish([1, 2], [1, 2])           // true
   * sn.arrays.equalish([1, "2"], [1, 2])         // false
   * sn.arrays.equalish(["2", 1], [1, "2"])       // true
   * sn.arrays.equalish([1, [2, 3]], [1, [2, 3]]) // false (The nested arrays are different instances.)
   * sn.arrays.equalish([1, {}], [1, {}])         // false (The nested objects are different instances.)
   */
  equalish(a, b) {
    if (a && !b) return false;
    if (!a && b) return false;
    if (a.length !== b.length) return false;

    const arr1 = [...a];
    const arr2 = [...b];
    arr1.sort();
    arr2.sort();

    for (let i = arr1.length; i--; ) if (arr1[i] !== arr2[i]) return false;

    return true;
  },

  /**
   * Move element at index `from` to index `to` in the `array` provided.
   * @param {any[]} arr - The array to modify.
   * @param {Number} from - The index of the item to move.
   * @param {Number} to - The index to move the item to.
   */
  move(arr, from, to) {
    arr.splice(to, 0, arr.splice(from, 1)[0]);
    return arr;
  },

  /**
   * Move element at index `from`, `by` a certain amount (negative or positive),
   * in the `array` provided.
   * @param {any[]} arr - The array to modify.
   * @param {Number} from - The index of the item to move.
   * @param {Number} by - The number of space to move the element.
   *
   * USAGE:
   * let arr = ['a', 'b', 'c'];
   * sn.arrays.moveBy(arr, 0, 2);  // ['b', 'c', 'a']
   * sn.arrays.moveBy(arr, 2, -2); // ['a', 'b', 'c']
   */
  moveBy(arr, from, by = 1) {
    let newPos = +from + +by;
    const value = arr[from];

    if (newPos < 0) newPos = 0;

    arr.splice(from, 1);
    arr.splice(newPos, 0, value);

    return arr;
  },

  /**
   * Returns a new array trimmed to the first n items desired.
   * Does not mutate the original array.
   * @param {any[]} arr - The original array.
   * @param {number} size - the size to trim to.
   * @return {any[]}
   */
  trim(arr, size) {
    if (arr.length > size) return arr.slice(0, size);
    return arr;
  },

  /**
   * Remove the first occurrence of the item found in the
   * array using the predicate. Note this mutates the array.
   * @param {any[]} arr - The array to modify.
   * @param {function|number} predicate - function to find the element to remove or the index number itself.
   */
  remove(arr, predicate) {
    if (typeof predicate === 'function') {
      const index = arr.findIndex(predicate);
      if (index !== -1) arr.splice(index, 1);
    } else if (typeof predicate === 'number') {
      arr.splice(predicate, 1);
    }

    return arr;
  },

  /**
   * Returns a new array with the item removed.
   * The original array is not mutated.
   * @param {any[]} arr - The original array.
   * @param {function|number} predicate - function to find the element to remove or the index number itself.
   * @return {*[]|*}
   */
  removeSafe(arr, predicate) {
    let index = -1;
    if (typeof predicate === 'function') {
      index = arr.findIndex(predicate);
    } else if (typeof predicate === 'number') {
      index = predicate;
    }

    if (index === -1) return arr;
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  },

  /**
   * Combines many filter functions into a single filter function.
   * @param {function(*=)} filters - the filters to combine.
   * @return {function(*=)}
   *
   * USAGE:
   * let even = (x) => x % 2 === 0;
   * let gt_5 = (x) => x > 5;
   * let filter = arrays.combineFilters(even, gt_5);
   * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(filter);
   * // [6, 8, 10]
   */
  combineFilters(...filters) {
    return function compositeFilter(x) {
      return filters.reduce(function reduceFilters(result, f) {
        return result && f(x);
      }, true);
    };
  },

  /**
   * Add items to the end of an array if needed up to a limit.
   * @param {any[]} arr - The array to modify.
   * @param {Number} [to] - the resulting size of the padded array.
   * @param {*} [filler] - the stuffing to use for padding.
   *
   * USAGE:
   * let arr = ['a', 'b', 'c', 'd'];
   * sn.arrays.pad(arr, 10);
   * // ["a", "b", "c", "d", null, null, null, null, null, null]
   *
   */
  pad(arr = required('arr'), to = 0, filler = null) {
    for (let i = arr.length; i < to; i++) {
      if (typeof arr[i] === 'undefined') {
        // eslint-disable-next-line no-unused-expressions
        typeof filler === 'function' ? (arr[i] = filler(i)) : (arr[i] = filler);
      }
    }

    return arr;
  },

  /**
   * Returns a new array such that it contains a distinct set of values from the
   * original array, i.e. all duplicates are removed.
   * @param {any[]} arr - the the array to work on.
   * @returns {Array} - a new array with distinct values, order is preserved.
   *
   * USAGE:
   * const names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
   * // ['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Carl']
   *
   */
  uniq(arr) {
    if (!arr) return arr;
    return arr.reduce((a, b) => {
      if (a.indexOf(b) < 0) a.push(b);
      return a;
    }, []);
  },

  /** Check how many times an element occurs in an array */
  checkOccurrences(arr, element) {
    let counter = 0;
    arr.forEach(item => {
      if (JSON.stringify(item) === JSON.stringify(element)) counter += 1;
    });
    return counter;
  },

  /**
   * Sort an array by using the items indexes in an ordered array.
   * @param {any[]} arr - the array to sort.
   * @param {any[]} order - the ordered array to reference for sorting.
   * @param {function} [getValue] - an optional function to fetch the value to sort by.
   */
  sortByIndex(arr, order, getValue = identity) {
    arr.sort((a, b) => {
      const valueA = getValue(a);
      const valueB = getValue(b);

      let indexA = order.indexOf(valueA);
      let indexB = order.indexOf(valueB);

      if (indexA === -1) indexA = 999;
      if (indexB === -1) indexB = 999;

      return indexA - indexB;
    });

    return arr;
  },

  /**
   * Build an array sort function by using the items indexes in an ordered array.
   * @param {any[]} order - the ordered array to reference for sorting.
   * @param {function} [getValue] - an optional function to fetch the value to sort by.
   */
  sorterByIndex(order, getValue = identity) {
    return (a, b) => {
      const valueA = getValue(a);
      const valueB = getValue(b);

      let indexA = order.indexOf(valueA);
      let indexB = order.indexOf(valueB);

      if (indexA === -1) indexA = 999;
      if (indexB === -1) indexB = 999;

      return indexA - indexB;
    };
  },
};

/** Common reducer callbacks. */
export const reducers = {
  /** Entity table mapped by item 'id'. */
  id(acc, item) {
    acc[item.id] = item;
    return acc;
  },

  /**
   * Create a reducer to build an entity table mapped by item `field`.
   * @param {string} field - the property name or property path of the id.
   */
  by(field) {
    return (acc, item) => {
      acc[prop(item, field)] = item;
      return acc;
    };
  },

  /** Reduce array to hash where the item is the key AND the value. */
  identity(acc, item) {
    acc[item] = item;
    return acc;
  },
};

export const sorters = {
  alphaOn(field) {
    return (a, b) => {
      if (a[field] === b[field]) return 0;
      return a[field] > b[field] ? 1 : -1;
    };
  },
};

/**
 * Build an entity table for an array.
 * @param {any[]} arr - the array to convert to an entity table.
 * @param {string} [by] - the array item's property to map by. Default: `id`.
 */
export const entityTable = (arr, by = 'id') => {
  const reducer = by === 'id' ? reducers.id : reducers.by(by);
  const table = { byId: arr.reduce(reducer, {}) };
  table.allIds = Object.keys(table.byId);
  table.allIds.sort((a, b) => {
    const iA = arr.findIndex(o => o[by] === a[by]);
    const iB = arr.findIndex(o => o[by] === b[by]);
    return iA - iB;
  });

  return table;
};

/**
 * Returns true if the first array contains ALL the elements in the second array.
 * USAGE:
 * let arr1 = [1, 2, 3, 4];
 * let arr2 = [3, 4, 5, 6];
 * let arr3 = [3, 4, 6];
 * includesAll(arr1, arr2) // returns false
 * includesAll(arr2, arr3) // returns true
 */
export function includesAll(arrA, arrB) {
  return isSuperset(new Set(arrA), new Set(arrB));
}

/**
 * Returns true if the first array contains ANY of the elements in the second array.
 * USAGE:
 * let arr1 = [1, 2, 3, 4];
 * let arr2 = [3, 4, 5, 6];
 * let arr3 = [5, 6];
 * includesAny(arr1, arr2) // returns true
 * includesAny(arr1, arr3) // returns false
 */
export function includesAny(arrA, arrB) {
  return intersection(new Set(arrA), new Set(arrB)).size > 0;
}

/** Simply wrap input in array if it is not an array */
export function asArray(input) {
  if (Array.isArray(input)) return input;
  return [input];
}

/**
 * Return input as an array
 * USAGE:
 * safeArray(); -> []
 * safeArray(null); -> []
 * safeArray(0); -> [0]
 * safeArray('a'); -> ['a']
 * safeArray([1,2,3]); -> [1,2,3]
 * safeArray([`a`, 0, { foo: 'bar' }]); -> [`a`, 0, { foo: 'bar' }]
 */
export function safeArray(input) {
  if (Array.isArray(input)) return input;
  if (typeof input === 'undefined' || input === null) return [];
  return asArray(input);
}
