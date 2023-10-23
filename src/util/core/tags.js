import { isSuperset } from './set';
import { isString } from './string';

/**
 * Tags used by storefront entities like products, images, and features
 * @enum Tag
 */
export const Tag = {
  test: 'test',
  gallery: 'gallery',
  postcard: 'postcard',
  ghosted_base: 'ghosted-base',
  promo: 'promo',
  thumbnail: 'thumbnail',
  corner_thumbnail: 'corner-thumbnail',
  mb: 'mobile',
  tb: 'tablet',
  dt: 'desktop',
  split: 'split',
  flextop: 'flextop',
  standard: 'standard',
  front: 'front',
  lifestyle: '45',
  bundle: 'bundle',
  matt_only: 'matt-only',
  matt_only_thumbnail: 'matt-only-thumbnail',
  ib: 'ib',
  ibf: 'ibf',
  ff: 'ff',
  ff1: 'ff1',
  ff2: 'ff2',
  ff3: 'ff3',
  includes: 'includes',
  base: 'base',
  split_base: 'split-base',
  temp_balancing: 'temp-balancing',
  addon: 'addon', // image for product reference display
  single: 'single', // image for product reference display, half-King/Queen
  double: 'double', // image for product reference display, full-King/Queen
  new: 'new',
  nextgen: 'nextgen', // used on products
  next_gen_compare: 'next-gen-compare', // used on key features
  quiz: 'quiz',
};
Object.freeze(Tag);

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
export function hasTags(taggable, tags) {
  const tgs = isString(tags) ? tags.split(',').map(t => t.trim()) : tags;
  return isSuperset(taggable?.tags || [], tgs);
}
