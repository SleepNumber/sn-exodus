export default MicroCache;
/**
 * A very simple cache to hold a limited number of entries.
 * Once the limit is reached, the oldest entry is evicted from the cache.
 */
declare class MicroCache {
    /**
     * @param {Number} [maxSize] - the number of entries to hold, default is 20.
     */
    constructor(maxSize?: number);
    maxSize: number;
    map: Map<any, any>;
    entries: any[];
    has(key: any): boolean;
    get(key: any): any;
    put(key: any, value: any): Map<any, any>;
}
//# sourceMappingURL=cache.d.ts.map