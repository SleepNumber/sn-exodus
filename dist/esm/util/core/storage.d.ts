export default mod;
declare namespace mod {
    /**
     * Retrieve value stored in local storage.
     * @param {string} key - The key to lookup the value, will be prefixed with 'sn-'.
     * @param {string} defaultValue - Returned if the key is not found.
     */
    function get(key: string, defaultValue: string): any;
    /**
     * Sets a value in local storage.
     * @param {string} key - The key to store the value at, will be prefixed with 'sn-'.
     * @param {string} value - Value to store.
     */
    function set(key: string, value: string): void;
    /**
     * Removes a value from local storage.
     * @param {string} key - The key to remove, automatically prefixed with 'sn-'.
     */
    function remove(key: string): void;
    function getName(): string;
    /**
     * Return a local storage value directly from (not in our JSON bucket).
     * Returns `defaultValue` or `undefined` if running on server or item not in storage
     * @param key
     * @param defaultValue
     * @return {*}
     */
    function getRaw(key: any, defaultValue: any): any;
}
//# sourceMappingURL=storage.d.ts.map