/**
 * Returns true if the taggable object has the specified tags.
 *
 * EXAMPLES:
 * hasTags({ tags: ['a', 'b']}, ['a']) \\ -> true
 * hasTags({ tags: ['a', 'b']}, ['a', 'b']) \\ -> true
 * hasTags({ tags: ['a', 'b']}, 'a') \\ -> true
 * hasTags({ tags: ['a', 'b']}, 'a, b') \\ -> true
 * hasTags({ tags: ['a', 'b']}, 'a, b, c') \\ -> false
 *
 * @param {{ tags: string[]}} taggable - object with tags property
 * @param {string|string[]} tags - array of tags, single tag, or string of comma separated tags
 * @return {boolean}
 */
export function hasTags(taggable: {
    tags: string[];
}, tags: string | string[]): boolean;
/**
 * Tags used by storefront entities like products, images, and features
 */
export type Tag = Tag;
export namespace Tag {
    export let test: string;
    export let gallery: string;
    export let postcard: string;
    export let ghosted_base: string;
    export let promo: string;
    export let thumbnail: string;
    export let corner_thumbnail: string;
    export let mb: string;
    export let tb: string;
    export let dt: string;
    export let split: string;
    export let flextop: string;
    export let standard: string;
    export let front: string;
    export let lifestyle: string;
    export let bundle: string;
    export let matt_only: string;
    export let matt_only_thumbnail: string;
    export let ib: string;
    export let ibf: string;
    export let ff: string;
    export let ff1: string;
    export let ff2: string;
    export let ff3: string;
    export let includes: string;
    export let base: string;
    export let split_base: string;
    export let temp_balancing: string;
    export let addon: string;
    export let single: string;
    export let double: string;
    let _new: string;
    export { _new as new };
    export let nextgen: string;
    export let next_gen_compare: string;
    export let quiz: string;
}
//# sourceMappingURL=tags.d.ts.map