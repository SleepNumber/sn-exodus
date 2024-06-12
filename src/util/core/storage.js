/**
 * Module to store data as json in local storage.
 * Data is storage as stringified json since local storage
 * only supports string values.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
 * @module sn.storage
 */

import { isBrowser } from 'browser-or-node';
import logger from './logger';
import { namespace } from './object';

const _name = 'sn';

const mod = {
  /**
   * Retrieve value stored in local storage.
   * @param {string} key - The key to look up the value, will be prefixed with 'sn-'.
   * @param {string} defaultValue - Returned if the key is not found.
   */
  get(key, defaultValue) {
    const storage = isBrowser ? localStorage : { getItem: () => null };
    const value = JSON.parse(storage?.getItem(`${_name}-${key}`) || null);
    return value || defaultValue;
  },

  /**
   * Sets a value in local storage.
   * @param {string} key - The key to store the value at, will be prefixed with 'sn-'.
   * @param {string} value - Value to store.
   */
  set(key, value) {
    if (!isBrowser) return;
    try {
      const storage = isBrowser ? localStorage : { setItem: () => null };
      storage?.setItem(`${_name}-${key}`, JSON.stringify(value));
    } catch (e) {
      logger.error(`localStorage set failed`, `key: ${key}`, `value:`, value);
    }
  },

  /**
   * Removes a value from local storage.
   * @param {string} key - The key to remove, automatically prefixed with 'sn-'.
   */
  remove(key) {
    if (!isBrowser) return;
    try {
      const storage = isBrowser ? localStorage : { removeItem: () => null };
      storage?.removeItem(`${_name}-${key}`);
    } catch (e) {
      logger.error(`localStorage remove failed`, `key: ${key}`);
    }
  },

  getName() {
    return _name;
  },

  /**
   * Return a local storage value directly from (not in our JSON bucket).
   * Returns `defaultValue` or `undefined` if running on server or item not in storage
   * @param key
   * @param defaultValue
   * @return {*}
   */
  getRaw(key, defaultValue) {
    const storage = isBrowser ? localStorage : { getItem: () => null };
    const value = storage?.getItem(key) || null;
    return value || defaultValue;
  },
};

namespace('sn.storage', mod);
export default mod;
