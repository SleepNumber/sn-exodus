/**
 * Module to store data as json in a single cookie.
 * @module sn.cookiejar
 */

import Cookies from 'js-cookie';
import cookie from 'cookie';

import Cookie from './Cookie';
import Enumify from './enumify';
import { namespace } from './object';
import { bytes } from './string';

class Entry extends Enumify {
  static admin_hide = new Entry('admin', 'hide', false);
  static alerts_queued = new Entry('alerts', 'queued', []);
  static answer_helpful = new Entry('answer', 'helpful', {});
  static answer_reported = new Entry('answer', 'reported', []);
  static bq_skus = new Entry('bq', 'skus', []);
  static bq_results = new Entry('bq', 'results');
  static dy_editor = new Entry('dy', 'editor', undefined);
  static hub_log_enabled = new Entry('hub', 'log_enabled');
  static insider = new Entry('insider', undefined, false);
  static minicart_last_shown = new Entry('minicart', 'last_shown', 0);
  static pa_priv_shown = new Entry('pa_priv_shown', undefined, false);
  static page_loads = new Entry('page', 'loads', [0, 0]);
  static preferred_store = new Entry('preferred_store', undefined, '');
  static retargeter_log_enabled = new Entry('retargeter', 'log_enabled');
  static review_helpful = new Entry('review', 'helpful', {});
  static review_reported = new Entry('review', 'reported', []);
  static trackjs_disable = new Entry('trackjs', 'disable');
  static segments = new Entry('segments', undefined, []);
  static selection_size = new Entry('selection', 'size', '');
  static selection_color = new Entry('selection', 'color');
  static sheerid_disable = new Entry('sheerid', 'disable');
  static user_email = new Entry('email', undefined, '');
  static user_zip = new Entry('postal_code', undefined, '');
  static user_telephone = new Entry('telephone', undefined, '');
  static _ = this.closeEnum();

  constructor(group, id, defaultValue) {
    super();
    this.group = group;
    this.id = id;
    this.default = defaultValue;
  }
}

const CookieJar = {};

const { name } = Cookie.sn;
const max = 4093;

/**
 * Return the value with any '+' signs replaced with space characters
 * and some size name casings fixed.
 * @param {string} value
 * @return {string|*}
 */
function cleanCookieValue(value) {
  if (typeof value !== 'string') return value;
  return value
    .replace(/\+/g, ' ')
    .replace(/flextop/i, 'FlexTop')
    .replace(/xl/i, 'XL');
}

/**
 * Throw error if entry is not an instance of {@link Entry}
 * @param {Entry|string} [entry]
 * @param {boolean} [allowUndefined]
 */
function checkEntry(entry, allowUndefined) {
  if (typeof entry === 'undefined' && allowUndefined) return;
  const ent = typeof entry === 'string' ? Entry.enumValueOf(entry) : entry;

  if (!(ent instanceof Entry)) {
    throw new Error(
      'CookieJar get/set should be called with a CookieJar.Entry instance',
      'entry was',
      entry
    );
  }
}

/**
 * Retrieve value from JSON object store in the cookie or the default value.
 * If `e` is undefined, the entire cookie object is returned.
 * @param {Entry} [e] - the cookie entry.
 */
CookieJar.get = function get(e) {
  const entry = typeof e === 'string' ? Entry.enumValueOf(e) : e;
  checkEntry(entry, true);
  const c = Cookies.getJSON(name);

  if (!entry) return c || {};
  if (!c) return entry.default;

  let key = `${entry.group}`;
  if (entry.id) key += `-${entry.id}`;
  let value = typeof c[key] === 'undefined' ? entry.default : c[key];
  value = cleanCookieValue(value);

  return value;
};

/**
 * Retrieve value from JSON object store in the cookies of the request,
 * or the default value.
 *
 * If `e` is undefined, the entire cookie object is returned.
 *
 * @param {Request} req - needed on the server-side
 * @param {Entry} [e] - optional the cookie entry.
 */
CookieJar.getFromRequest = function get(req, e) {
  const entry = typeof e === 'string' ? Entry.enumValueOf(e) : e;
  checkEntry(entry, true);
  let c = {};
  try {
    const cookies = cookie.parse(req.headers.get('Cookie') || '');
    const raw = cookies[name];
    c = JSON.parse(raw);
  } catch (err) {
    /* ignore */
  }

  if (!entry) return c || {};
  if (!c) return entry.default;

  let key = `${entry.group}`;
  if (entry.id) key += `-${entry.id}`;
  let value = typeof c[key] === 'undefined' ? entry.default : c[key];
  value = cleanCookieValue(value);

  return value;
};

/**
 * Retrieve value from data retrieved form JSON object store in the cookies of the request,
 * or the default value.
 *
 * If `e` is undefined, the entire cookie object is returned.
 *
 * @param {Request} data - the data stored in the `sn` cookie
 * @param {Entry} [e] - optional the cookie entry.
 */
CookieJar.getFromData = function get(data, e) {
  const entry = typeof e === 'string' ? Entry.enumValueOf(e) : e;
  checkEntry(entry, true);

  if (!entry) return data || {};

  let key = `${entry.group}`;
  if (entry.id) key += `-${entry.id}`;
  let value = typeof data[key] === 'undefined' ? entry.default : data[key];
  value = cleanCookieValue(value);

  return value;
};

/**
 * Sets a property on the JSON object stored in the 'sn' cookie.
 * @param {Entry} [entry] - the cookie entry.
 * @param {*} value - Value to store.
 */
CookieJar.set = function set(entry, value) {
  checkEntry(entry);
  const c = Cookies.getJSON(name) || {};
  let key = `${entry.group}`;
  if (entry.id) key += `-${entry.id}`;
  c[key] = value;
  const stringified = JSON.stringify(c);
  const stringifiedBytes = bytes(stringified);

  if (stringifiedBytes >= max) {
    // Cookies.set silently fails in this case :(
    // eslint-disable-next-line no-console
    console.error(
      `Failed to set cookie "${entry.toString()}" with value "${value}":` +
        ` cookie length (${stringifiedBytes} bytes) exceeds max (${max} bytes)`
    );
  } else {
    Cookies.set(name, c, { expires: 365 });
  }
};

CookieJar.getName = () => name;

CookieJar.lib = Cookies;
CookieJar.Entry = Entry;

namespace('sn.cookiejar', CookieJar);
export default CookieJar;
