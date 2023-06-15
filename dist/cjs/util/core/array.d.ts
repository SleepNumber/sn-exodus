/**
 * Returns true if the first array contains ALL the elements in the second array.
 * USAGE:
 * let arr1 = [1, 2, 3, 4];
 * let arr2 = [3, 4, 5, 6];
 * let arr3 = [3, 4, 6];
 * includesAll(arr1, arr2) // returns false
 * includesAll(arr2, arr3) // returns true
 */
export function includesAll(arrA: any, arrB: any): boolean;
/**
 * Returns true if the first array contains ANY of the elements in the second array.
 * USAGE:
 * let arr1 = [1, 2, 3, 4];
 * let arr2 = [3, 4, 5, 6];
 * let arr3 = [5, 6];
 * includesAny(arr1, arr2) // returns true
 * includesAny(arr1, arr3) // returns false
 */
export function includesAny(arrA: any, arrB: any): boolean;
/** Simply wrap input in array if it is not an array */
export function asArray(input: any): any[];
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
export function safeArray(input: any): any[];
export namespace arrays {
    /**
     * Creates a shallow clone of the array.
     * If objects exist in the original array, the references
     * are kept.
     *
     * https://davidwalsh.name/javascript-clone-array
     */
    function clone(arr: any): any;
    /**
     * Insert an item in an array at the index.
     *
     * USAGE:
     * let months = ['Jan', 'March', 'April'];
     * sn.arrays.insert(months, 1, 'Feb'); // insert at index 1
     * console.log(months); // Array ['Jan', 'Feb', 'March', 'April']
     */
    function insert(arr: any, index: any, item: any): any;
    /**
     * Add an item or array of items in between every item in the array.
     * @param {any[]} arr - The array to weave things into.
     * @param {*} item - The item to weave into the array.
     *        If `item` is an Array then the items of `item` are woven into `arr` sequentially.
     *        If `item` is a function, then the result of item(i) is woven into `arr` sequentially.
     * @param {boolean} before - if true, the first item in the resulting array will be the weave item
     */
    function weave(arr: any[], item: any, before?: boolean): any;
    /** Chunk an array into smaller arrays. */
    function chunk(arr: any, size: any): any[];
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
    function equalish(a: any, b: any): boolean;
    /**
     * Move element at index `from` to index `to` in the `array` provided.
     * @param {any[]} arr - The array to modify.
     * @param {Number} from - The index of the item to move.
     * @param {Number} to - The index to move the item to.
     */
    function move(arr: any[], from: number, to: number): any[];
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
    function moveBy(arr: any[], from: number, by?: number): any[];
    /**
     * Returns a new array trimmed to the first n items desired.
     * Does not mutate the original array.
     * @param {any[]} arr - The original array.
     * @param {number} size - the size to trim to.
     * @return {any[]}
     */
    function trim(arr: any[], size: number): any[];
    /**
     * Remove the first occurrence of the item found in the
     * array using the predicate. Note this mutates the array.
     * @param {any[]} arr - The array to modify.
     * @param {function|number} predicate - function to find the element to remove or the index number itself.
     */
    function remove(arr: any[], predicate: number | Function): any[];
    /**
     * Returns a new array with the item removed.
     * The original array is not mutated.
     * @param {any[]} arr - The original array.
     * @param {function|number} predicate - function to find the element to remove or the index number itself.
     * @return {*[]|*}
     */
    function removeSafe(arr: any[], predicate: number | Function): any;
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
    function combineFilters(...filters: any[]): () => any;
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
    function pad(arr?: any[], to?: number, filler?: any): any[];
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
    function uniq(arr: any[]): any[];
    /** Check how many times an element occurs in an array */
    function checkOccurrences(arr: any, element: any): number;
    /**
     * Sort an array by using the items indexes in an ordered array.
     * @param {any[]} arr - the array to sort.
     * @param {any[]} order - the ordered array to reference for sorting.
     * @param {function} [getValue] - an optional function to fetch the value to sort by.
     */
    function sortByIndex(arr: any[], order: any[], getValue?: Function): any[];
    /**
     * Build an array sort function by using the items indexes in an ordered array.
     * @param {any[]} order - the ordered array to reference for sorting.
     * @param {function} [getValue] - an optional function to fetch the value to sort by.
     */
    function sorterByIndex(order: any[], getValue?: Function): (a: any, b: any) => number;
}
export namespace reducers {
    /** Entity table mapped by item 'id'. */
    function id(acc: any, item: any): any;
    /**
     * Create a reducer to build an entity table mapped by item `field`.
     * @param {string} field - the property name or property path of the id.
     */
    function by(field: string): (acc: any, item: any) => any;
    /** Reduce array to hash where the item is the key AND the value. */
    function identity(acc: any, item: any): any;
}
export namespace sorters {
    function alphaOn(field: any): (a: any, b: any) => 0 | 1 | -1;
}
export function entityTable(arr: any[], by?: string): {
    byId: any;
};
//# sourceMappingURL=array.d.ts.map