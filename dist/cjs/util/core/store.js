/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _enumify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(829);


/**
 * Cookie names used by us.
 * @enum
 */
class Cookie extends _enumify__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static access_token = new Cookie('access_token');
  static analytics_session = new Cookie('analytics_session');
  static auth_token = new Cookie('authentication_token');
  static bq_auto_lead_send = new Cookie('bq_auto_lead_send');
  static cart = new Cookie('order_id');
  static ccpa = new Cookie('sn-ccpa-optin');
  static debug = new Cookie('sn-debug');
  static dynamic_yield_id_server = new Cookie('_dyid_server');
  static dynamic_yield_id = new Cookie('_dyid'); // This client cookie must match _dyid_server
  static dynamic_yield_jsession = new Cookie('_dyjsession');
  static id_token = new Cookie('id_token');
  static log_ignores = new Cookie('sn_log_ignores');
  static price_lists = new Cookie('plid');
  static pa_priv_shown = new Cookie('pa_priv_shown');
  static promo_drawer = new Cookie('promo_drawer');
  static refresh_token = new Cookie('refresh_token');
  static request_names = new Cookie('request_names'); // Set by rails if user is missing names
  static session = new Cookie('_sleep_number_session');
  static sessions = new Cookie('sessions');
  static suppress_chat = new Cookie('suppress_chat');
  static sn = new Cookie('sn');
  static _ = this.closeEnum();
  constructor(name) {
    super();
    this.name = name;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cookie);

/***/ }),

/***/ 292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(814);
/**
 * Deferred api for promises.
 * Replaces $.Deferred()
 */

class Deferred {
  // # denotes private fields
  // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
  #state;
  constructor() {
    this.#state = 'pending';
    this.p = new Promise((resolve, reject) => {
      this.resolver = resolve;
      this.rejector = reject;
    });
  }
  state() {
    return this.#state;
  }
  resolve() {
    this.resolver(...arguments);
    this.#state = 'resolved';
    return this;
  }
  reject() {
    this.rejector(...arguments);
    this.#state = 'rejected';
    return this;
  }
  promise() {
    return this.p;
  }
  done(cb) {
    this.p.then(cb, () => {});
    return this;
  }
  then() {
    this.p.then(...arguments);
    return this;
  }
  fail() {
    this.p.catch(...arguments);
    return this;
  }
  catch() {
    this.p.catch(...arguments);
    return this;
  }
  always() {
    this.p.finally(...arguments);
    return this;
  }
  finally() {
    this.p.finally(...arguments);
    return this;
  }
}
(0,_object__WEBPACK_IMPORTED_MODULE_0__.namespace)('sn.dfd', Deferred);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Deferred);

/***/ }),

/***/ 276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrays: () => (/* binding */ arrays)
/* harmony export */ });
/* unused harmony exports reducers, sorters, entityTable, includesAll, includesAny, asArray, safeArray */
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(814);
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(981);
/* ARRAY UTILS
   --------------------------------------------------------------- */




const arrays = {
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
      throw new Error(`Index must be less than array length. Index: ${index}, Length: ${this.length}`);
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
  weave(arr, item) {
    let before = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
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
    for (let i = arr1.length; i--;) if (arr1[i] !== arr2[i]) return false;
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
  moveBy(arr, from) {
    let by = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
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
  combineFilters() {
    for (var _len = arguments.length, filters = new Array(_len), _key = 0; _key < _len; _key++) {
      filters[_key] = arguments[_key];
    }
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
  pad() {
    let arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0,_function__WEBPACK_IMPORTED_MODULE_0__.required)('arr');
    let to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    let filler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    for (let i = arr.length; i < to; i++) {
      if (typeof arr[i] === 'undefined') {
        // eslint-disable-next-line no-unused-expressions
        typeof filler === 'function' ? arr[i] = filler(i) : arr[i] = filler;
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
  sortByIndex(arr, order) {
    let getValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _function__WEBPACK_IMPORTED_MODULE_0__.identity;
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
  sorterByIndex(order) {
    let getValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _function__WEBPACK_IMPORTED_MODULE_0__.identity;
    return (a, b) => {
      const valueA = getValue(a);
      const valueB = getValue(b);
      let indexA = order.indexOf(valueA);
      let indexB = order.indexOf(valueB);
      if (indexA === -1) indexA = 999;
      if (indexB === -1) indexB = 999;
      return indexA - indexB;
    };
  }
};

/** Common reducer callbacks. */
const reducers = {
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
      acc[(0,_object__WEBPACK_IMPORTED_MODULE_1__.prop)(item, field)] = item;
      return acc;
    };
  },
  /** Reduce array to hash where the item is the key AND the value. */
  identity(acc, item) {
    acc[item] = item;
    return acc;
  }
};
const sorters = {
  alphaOn(field) {
    return (a, b) => {
      if (a[field] === b[field]) return 0;
      return a[field] > b[field] ? 1 : -1;
    };
  }
};

/**
 * Build an entity table for an array.
 * @param {any[]} arr - the array to convert to an entity table.
 * @param {string} [by] - the array item's property to map by. Default: `id`.
 */
const entityTable = function (arr) {
  let by = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
  const reducer = by === 'id' ? reducers.id : reducers.by(by);
  const table = {
    byId: arr.reduce(reducer, {})
  };
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
function includesAll(arrA, arrB) {
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
function includesAny(arrA, arrB) {
  return intersection(new Set(arrA), new Set(arrB)).size > 0;
}

/** Simply wrap input in array if it is not an array */
function asArray(input) {
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
function safeArray(input) {
  if (Array.isArray(input)) return input;
  if (typeof input === 'undefined' || input === null) return [];
  return asArray(input);
}

/***/ }),

/***/ 168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   css: () => (/* binding */ css),
/* harmony export */   isDebug: () => (/* binding */ isDebug),
/* harmony export */   isJestEnv: () => (/* binding */ isJestEnv),
/* harmony export */   isProduction: () => (/* binding */ isProduction),
/* harmony export */   styles: () => (/* binding */ styles),
/* harmony export */   timezone: () => (/* binding */ timezone),
/* harmony export */   win: () => (/* binding */ win)
/* harmony export */ });
/* unused harmony exports localUrl, qaUrl, stageUrl, prodUrl, sn_globals, isStaging, isQa, isDevelopment, isDevPage, isAdminPage, isTestEnv, locale, attributes, months, specials, keyCodes, spacing, timing, mime, headers, millisPerYear, ALERT_TYPES, ALERT_FLAVORS, Status, Direction, USER_SEGMENT, CheckoutStep, ZIndex, page_classes, page_selectors, timer, regex */
/* harmony import */ var browser_or_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(192);
/* harmony import */ var browser_or_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(browser_or_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(734);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(531);
/* harmony import */ var _enumify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(829);
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(981);
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(814);






const localUrl = 'https://sleepnumber.test';
const qaUrl = 'https://qa.sleepnumber.com';
const stageUrl = 'https://staging.sleepnumber.com';
const prodUrl = 'https://www.sleepnumber.com';
const isJestEnv = __webpack_require__.g?.process?.env?.NODE_ENV === 'test';
let windowObject = __webpack_require__.g || window;
const isSSR = !browser_or_node__WEBPACK_IMPORTED_MODULE_0__.isBrowser && !isJestEnv;
if (isSSR) {
  const hosts = {
    local: 'https://sleepnumber.test:8090',
    qa: qaUrl,
    staging: stageUrl,
    production: prodUrl
  };
  const ssrHost = hosts[process.env.BUILD_ENV] || hosts.local;
  const ssrHref = `${ssrHost}/categories/beds-on-sale`;
  const ssrUrl = new URL(ssrHref);

  // Set the origin for all the places that check it
  windowObject = {
    ...windowObject,
    location: ssrUrl
  };
}
const win = windowObject;
const sn_globals = win?.sn_globals || {
  config: {}
};
const isProduction = () => sn_globals.config.wa_env === 'production';
const isStaging = () => sn_globals.config.wa_env === 'staging';
const isQa = () => sn_globals.config.wa_env === 'qa';
const isDevelopment = () => sn_globals.config.wa_env === 'development';
const isDevPage = win?.location?.pathname?.startsWith('/dev/');
const isAdminPage = win?.top?.location?.href?.includes('/admin/') || win?.location?.pathname?.startsWith('/admin/');
const isTestEnv = sn_globals.config.wa_env !== 'production';
function isDebug() {
  if (!browser_or_node__WEBPACK_IMPORTED_MODULE_0__.isBrowser) return false;
  const cookieValue = js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get(_Cookie__WEBPACK_IMPORTED_MODULE_2__["default"].debug.name);
  return cookieValue && cookieValue !== 'false';
}
(0,_object__WEBPACK_IMPORTED_MODULE_4__.namespace)('sn.toggleDebug', function toggleDebug() {
  const current = isDebug();
  js_cookie__WEBPACK_IMPORTED_MODULE_1___default().set(_Cookie__WEBPACK_IMPORTED_MODULE_2__["default"].debug.name, !current);
  // eslint-disable-next-line no-console
  console.log(`sn-debug set to "${!current}"`);
});
const timezone = 'Intl' in win ? Intl.DateTimeFormat().resolvedOptions().timeZone : 'America/Chicago';

/** Returns the browser locale. Defaults to `en-US`. */
function locale() {
  return navigator.languages && navigator.languages[0] || navigator.language || 'en-US';
}
const attributes = {
  // window.sessionStorage fields
  session: {
    mlp: {
      compare: 'mlp_compare_order'
    },
    geo_prompted: 'geo_prompted'
  },
  // window.localStorage fields
  local: {
    modals: {
      insider_appreciation_shown: 'insider_appreciation_shown',
      insider_signin_shown: 'insider_signin_shown',
      lead_capture_link: 'lead_capture_link',
      lead_compare_shown: 'lead_compare_shown',
      lead_compare_submitted: 'lead_compare_submitted',
      lead_modal_email_submitted: 'lead_capture_email_submitted',
      lead_modal_help_shown: 'lead_capture_help_shown',
      lead_modal_help_submitted: 'lead_capture_help_submitted',
      lead_modal_shown: 'lead_capture_shown',
      lead_modal_submitted: 'lead_capture_submitted',
      lead_quiz_shown: 'lead_quiz_shown',
      lead_quiz_submitted: 'lead_quiz_submitted'
    },
    toasts: {
      blog_toast_shown: 'blog_toast_shown',
      bq_toast_shown: 'bq_toast_shown'
    },
    misc: {
      hd_pending_cancel: 'hd_pending_cancel',
      last_tracked_order_id: 'last_tracked_order_id'
    },
    bq: {
      skus: 'bed-quiz-skus',
      results: 'bed-quiz-results'
    },
    ic: {
      points: 'inner-circle-points'
    }
  },
  // Response header fields
  headers: {
    flash: 'x-flash-messages'
  }
};

// Used in console logging
const css = {
  fwb: 'font-weight: bold;',
  fwn: 'font-weight: normal;',
  black: 'color: #777777;',
  gray: 'color: #9e9e9e;',
  white: 'color: #ffffff',
  blue: 'color: #03a9f4;',
  green: 'color: #4caf50;',
  red: 'color: #f20404;',
  orange: 'color: #ff8000;'
};

// Used in console logging
const styles = {
  normal: `${css.fwn}${css.black}`,
  strong: `${css.fwb}${css.black}`,
  label: `${css.fwb}${css.gray}`,
  value: `${css.fwn}${css.blue}`,
  success: `${css.fwn}${css.green}`,
  error: `${css.fwn}${css.red}`,
  orange: `${css.fwn}${css.orange}`
};
const months = [{
  name: 'January',
  abbr: 'Jan',
  value: 1
}, {
  name: 'February',
  abbr: 'Feb',
  value: 2
}, {
  name: 'March',
  abbr: 'Mar',
  value: 3
}, {
  name: 'April',
  abbr: 'Apr',
  value: 4
}, {
  name: 'May',
  abbr: 'May',
  value: 5
}, {
  name: 'June',
  abbr: 'Jun',
  value: 6
}, {
  name: 'July',
  abbr: 'Jul',
  value: 7
}, {
  name: 'August',
  abbr: 'Aug',
  value: 8
}, {
  name: 'September',
  abbr: 'Sept',
  value: 9
}, {
  name: 'October',
  abbr: 'Oct',
  value: 10
}, {
  name: 'November',
  abbr: 'Nov',
  value: 11
}, {
  name: 'December',
  abbr: 'Dec',
  value: 12
}];
const specials = {
  asterisk: {
    label: 'Asterisk',
    value: '*',
    entity: '*',
    unicode: '\u20F0'
  },
  reg: {
    label: 'Registered Trade Mark',
    value: '®',
    entity: '&reg;',
    unicode: '\u00AE'
  },
  tm: {
    label: 'Trade Mark',
    value: '™',
    entity: '&trade;',
    unicode: '\u2122'
  },
  sm: {
    label: 'Service Mark',
    value: '℠',
    entity: '&#8480;',
    unicode: '\u2120'
  },
  dagger: {
    label: 'Dagger',
    value: '†',
    entity: '&dagger;',
    unicode: '\u2020'
  },
  doubledagger: {
    label: 'Double Dagger',
    value: '‡',
    entity: '&Dagger;',
    unicode: '\u2021'
  },
  section: {
    label: 'Section',
    value: '§',
    entity: '&sect;',
    unicode: '\u00A7'
  }
};
const keyCodes = {
  esc: 27,
  space: 32,
  backspace: 8,
  enter: 13,
  tab: 9,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  home: 36,
  end: 35,
  n: 78,
  p: 80
};
keyCodes.radio = {
  prev: [keyCodes.left, keyCodes.up],
  next: [keyCodes.right, keyCodes.down]
};
keyCodes.arrows = [keyCodes.left, keyCodes.up, keyCodes.right, keyCodes.down];
const spacing = {
  space: '\u0020',
  nbsp: '\u00a0',
  ndash: '\u0096',
  mdash: '\u0097',
  ellipsis: '\u2026'
};
const timing = {
  scroll: 500,
  expand: 150,
  transition: 250,
  animation: 'cubic-bezier(0.42, 0, 0.58, 1)'
};
const mime = {
  app: {
    json: 'application/json',
    form: 'multipart/form-data'
  }
};
const headers = {
  accept: 'Accept',
  content: 'Content-Type'
};
const millisPerYear = 31536000000;
const ALERT_TYPES = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  danger: 'danger',
  warning: 'warning',
  info: 'info',
  dark: 'dark',
  light: 'light'
};
const ALERT_FLAVORS = {
  normal: 'normal',
  toast: 'toast'
};

/**
 * General purpose status enum.
 * @enum
 */
class Status extends _enumify__WEBPACK_IMPORTED_MODULE_3__["default"] {
  static idle = new Status();
  static pending = new Status();
  static success = new Status();
  static error = new Status();
  static active = new Status();
  static complete = new Status();
  static _ = this.closeEnum();
}

/**
 * General purpose direction enum.
 * @enum
 */
class Direction extends _enumify__WEBPACK_IMPORTED_MODULE_3__["default"] {
  static up = new Direction();
  static down = new Direction();
  static left = new Direction();
  static right = new Direction();
  static _ = this.closeEnum();
}

/**
 * Listing of user segments.
 * @enum
 */
const USER_SEGMENT = {
  innercircle: 'InnerCircle',
  insider: 'Insider'
};
class CheckoutStep extends _enumify__WEBPACK_IMPORTED_MODULE_3__["default"] {
  static NotStarted = new CheckoutStep('not_started', -1);
  static Login = new CheckoutStep('login', 0);
  static Shipping = new CheckoutStep('shipping', 1);
  static Delivery = new CheckoutStep('delivery', 2);
  static Payment = new CheckoutStep('payment', 3);
  static Review = new CheckoutStep('review', 4);
  static Confirmation = new CheckoutStep('confirmation', 5);
  static _ = this.closeEnum();

  /** @returns {CheckoutStep} the next step in the enum after this one. */
  next() {
    const ordinal = CheckoutStep.enumValues[this.enumOrdinal + 1];
    return ordinal;
  }
  constructor(name, number) {
    super();
    this.name = name;
    this.number = number;
  }
}
const zindex_dropdown = 1000;
const zindex_fixed = 1030;
const zindex_modal = 107159;
const zindex_modal_backdrop = 1040;
const zindex_popover = 1060;
const zindex_sticky = 1020;
const zindex_tooltip = 1070;

/** Global z-index values */
class ZIndex extends _enumify__WEBPACK_IMPORTED_MODULE_3__["default"] {
  // From bootstrap
  static dropdown = new ZIndex(zindex_dropdown);
  static sticky = new ZIndex(zindex_sticky);
  static fixed = new ZIndex(zindex_fixed);
  static modal_backdrop = new ZIndex(zindex_modal_backdrop);
  static modal = new ZIndex(zindex_modal);
  static popover = new ZIndex(zindex_popover);
  static tooltip = new ZIndex(zindex_tooltip);

  // Live person chat button
  static chat_button = new ZIndex(107158);
  // Overlap live person chat
  static over_chat = new ZIndex(107159);
  constructor(index) {
    super();
    this.value = index;
  }
}

/** Classes used as logic flags on the page. */
const page_classes = {
  header_unpin: '-unpinned-header',
  jumping: '-jump-scrolling',
  position_sticky: 'position-sticky',
  top_below_header: 'top-below-header',
  search_open: '-search-open',
  skip_nav_show: '-skip-nav-show'
};
// cx can take arrays: `cx('foo', page_classes.sticky_top)`
page_classes.sticky_top = [page_classes.position_sticky, page_classes.top_below_header];
const page_selectors = {
  sticky_top: '.position-sticky.top-below-header',
  search_open: '.-search-open',
  header_unpin: '.-unpinned-header',
  jumping: '.-jump-scrolling'
};

/** Use performance API if it's available for better precision. */
const timer = (0,_function__WEBPACK_IMPORTED_MODULE_5__.isFunc)(win, 'performance.now') ? win?.performance : win?.Date;
const regex = {
  // https://emailregex.com
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/,
  zip_partial: /^\d{1,5}$/,
  zip: /^\d{5}$/,
  zip_full: /^\d{5}(?:-\d{4})?$/,
  iso_state: /(US-[A-Z]{2})/,
  geo: {
    lat: /^-?([0-8]?\d|90)\.\d{1,6}$/,
    long: /^-?((1?[0-7]?|\d?)\d|180)\.\d{1,6}$/
  },
  /** @see http://www.regular-expressions.info/creditcard.html */
  cc: {
    visa: /^4\d{12}(?:\d{3})?$/,
    master: /^5[1-5]\d{14}$/,
    amex: /^3[47]\d{13}$/,
    diners: /^3(?:0[0-5]|[68]\d)\d{11}$/,
    discover: /^6(?:011|5\d{2})\d{12}$/,
    jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
    sn: /^(60346233|60191702|60191708).*/ // Sleep Number Financing Cards
  }
};

/***/ }),

/***/ 997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ cookiejar)
});

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(734);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
;// CONCATENATED MODULE: external "cookie"
const external_cookie_namespaceObject = require("cookie");
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_namespaceObject);
// EXTERNAL MODULE: ./src/util/core/Cookie.js
var Cookie = __webpack_require__(531);
// EXTERNAL MODULE: ./src/util/core/enumify.js
var enumify = __webpack_require__(829);
// EXTERNAL MODULE: ./src/util/core/object.js
var object = __webpack_require__(814);
// EXTERNAL MODULE: ./src/util/core/string.js
var string = __webpack_require__(203);
;// CONCATENATED MODULE: ./src/util/core/cookiejar.js
/**
 * Module to store data as json in a single cookie.
 * @module sn.cookiejar
 */







class Entry extends enumify["default"] {
  static admin_hide = new Entry('admin', 'hide', false);
  static alerts_queued = new Entry('alerts', 'queued', []);
  static answer_helpful = new Entry('answer', 'helpful', {});
  static answer_reported = new Entry('answer', 'reported', []);
  static dy_editor = new Entry('dy', 'editor', undefined);
  static hub_log_enabled = new Entry('hub', 'log_enabled');
  static insider = new Entry('insider', undefined, false);
  static minicart_last_shown = new Entry('minicart', 'last_shown', 0);
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
const {
  name: cookiejar_name
} = Cookie["default"].sn;
const max = 4093;

/**
 * Return the value with any '+' signs replaced with space characters
 * and some size name casings fixed.
 * @param {string} value
 * @return {string|*}
 */
function cleanCookieValue(value) {
  if (typeof value !== 'string') return value;
  return value.replace(/\+/g, ' ').replace(/flextop/i, 'FlexTop').replace(/xl/i, 'XL');
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
    throw new Error('CookieJar get/set should be called with a CookieJar.Entry instance', 'entry was', entry);
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
  const c = external_js_cookie_default().getJSON(cookiejar_name);
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
    const cookies = external_cookie_default().parse(req.headers.get('Cookie') || '');
    const raw = cookies[cookiejar_name];
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
  const c = external_js_cookie_default().getJSON(cookiejar_name) || {};
  let key = `${entry.group}`;
  if (entry.id) key += `-${entry.id}`;
  c[key] = value;
  const stringified = JSON.stringify(c);
  const stringifiedBytes = (0,string.bytes)(stringified);
  if (stringifiedBytes >= max) {
    // Cookies.set silently fails in this case :(
    // eslint-disable-next-line no-console
    console.error(`Failed to set cookie "${entry.toString()}" with value "${value}":` + ` cookie length (${stringifiedBytes} bytes) exceeds max (${max} bytes)`);
  } else {
    external_js_cookie_default().set(cookiejar_name, c, {
      expires: 365
    });
  }
};
CookieJar.getName = () => cookiejar_name;
CookieJar.lib = (external_js_cookie_default());
CookieJar.Entry = Entry;
(0,object.namespace)('sn.cookiejar', CookieJar);
/* harmony default export */ const cookiejar = (CookieJar);

/***/ }),

/***/ 829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports enumKeyOrNull, enumEntryOrNull */
/**
 * This is a copy of the `enumify` package: https://github.com/rauschma/enumify
 * We are porting it to avoid webpack issues caused by mixing module types
 */
class Enumify {
  static closeEnum() {
    const enumKeys = [];
    const enumValues = [];
    // Traverse the enum entries
    for (const [key, value] of Object.entries(this)) {
      enumKeys.push(key);
      value.enumKey = key;
      value.enumOrdinal = enumValues.length;
      enumValues.push(value);
    }
    // Important: only add more static properties *after* processing the enum entries
    this.enumKeys = enumKeys;
    this.enumValues = enumValues;
    // TODO: prevent instantiation now. Freeze `this`?
  }

  /** Use case: parsing enum values */
  static enumValueOf(str) {
    const index = this.enumKeys.indexOf(str);
    if (index >= 0) {
      return this.enumValues[index];
    }
    return undefined;
  }
  static [Symbol.iterator]() {
    return this.enumValues[Symbol.iterator]();
  }
  toString() {
    return `${this.constructor.name}.${this.enumKey}`;
  }
}
function enumKeyOrNull(input) {
  if (input === null) return null;
  if (input instanceof Enumify) return input.enumKey;
  return input;
}
function enumEntryOrNull(Enum, key) {
  if (key === null) return null;
  return Enum?.enumValueOf(key);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Enumify);

/***/ }),

/***/ 666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   formats: () => (/* binding */ formats)
/* harmony export */ });
/* unused harmony export fromNow */
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(203);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(168);


const formats = {
  date: {
    /** "Thursday, November 7" */
    DAY_MONTH_LONG: date => date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      timeZone: _constants__WEBPACK_IMPORTED_MODULE_1__.timezone
    }),
    /** "Nov 7, 2019" */
    MONTH_ABR_DAY_YEAR: date => date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      timeZone: _constants__WEBPACK_IMPORTED_MODULE_1__.timezone
    }),
    /** "November 7, 2019" */
    MONTH_LONG_DAY_YEAR: date => date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      timeZone: _constants__WEBPACK_IMPORTED_MODULE_1__.timezone
    }),
    /** "11/7/2019" */
    SIMPLE: date => date.toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
      timeZone: _constants__WEBPACK_IMPORTED_MODULE_1__.timezone
    }),
    /** "11/07/2019" */
    SIMPLE_2_DIGIT: date => date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
      timeZone: _constants__WEBPACK_IMPORTED_MODULE_1__.timezone
    }),
    /** "11/07/2019" */
    UTC_SIMPLE_2_DIGIT: date => date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
      timeZone: 'UTC'
    }),
    /** "11/7/2019" */
    MONTH_DAY_YEAR: date => date.toLocaleDateString('en-US', {
      timeZone: _constants__WEBPACK_IMPORTED_MODULE_1__.timezone
    }),
    /** "11/8/2019" */
    UTC_MONTH_DAY_YEAR: date => date.toLocaleDateString('en-US', {
      timeZone: 'UTC'
    }),
    /** "2019-11-07"
     * See https://www.iso.org/iso-8601-date-and-time-format.html
     */
    /* eslint-disable prefer-template */
    ISO: date => date.getUTCFullYear() + '-' + (0,_string__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getUTCMonth() + 1, 2) + '-' + (0,_string__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getUTCDate(), 2),
    /* eslint-enable prefer-template */

    /** "20191107" */
    COMPACT: date => date.getFullYear() + (0,_string__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getMonth() + 1, 2) + (0,_string__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getDate(), 2)
  },
  time: {
    /** "2:07 PM CST" */
    SIMPLE: time => time.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      timeZone: _constants__WEBPACK_IMPORTED_MODULE_1__.timezone,
      timeZoneName: 'short'
    }),
    /** "2:07 PM" */
    HOUR_AND_MINUTE: time => time.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit'
    }),
    /** "2 PM" */
    HOUR_ONLY: time => time.toLocaleTimeString('en-US', {
      hour: 'numeric'
    }),
    /** "14:07 CST" */
    ARMY: time => time.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      timeZone: _constants__WEBPACK_IMPORTED_MODULE_1__.timezone,
      timeZoneName: 'short'
    }),
    /** "14:07:59.506" */
    PRECISE: time => `${(0,_string__WEBPACK_IMPORTED_MODULE_0__.pad)(time.getHours(), 2)}` + `:${(0,_string__WEBPACK_IMPORTED_MODULE_0__.pad)(time.getMinutes(), 2)}` + `:${(0,_string__WEBPACK_IMPORTED_MODULE_0__.pad)(time.getSeconds(), 2)}` + `.${(0,_string__WEBPACK_IMPORTED_MODULE_0__.pad)(time.getMilliseconds(), 3)}`,
    /** "14:07:59" */
    PRECISE_NO_MILLISECONDS: time => `${(0,_string__WEBPACK_IMPORTED_MODULE_0__.pad)(time.getHours(), 2)}` + `:${(0,_string__WEBPACK_IMPORTED_MODULE_0__.pad)(time.getMinutes(), 2)}` + `:${(0,_string__WEBPACK_IMPORTED_MODULE_0__.pad)(time.getSeconds(), 2)}`
  },
  datetime: {
    /** "11/7/2019, 2:07 PM" */
    LOCAL: datetime => datetime.toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      timeZone: _constants__WEBPACK_IMPORTED_MODULE_1__.timezone
    }),
    /** "11/7/2019, 2:07 PM CST" */
    SIMPLE: datetime => datetime.toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      timeZone: _constants__WEBPACK_IMPORTED_MODULE_1__.timezone,
      timeZoneName: 'short'
    })
  }
};
/** Formatters */
const format = {
  /**
   ** Format a Date object into a date, with the browser's timezone and a configurable format
   * @param {Date|String|Number} [date=now] - Unix timestamp to format as a readable date-time
   * @param {Function} [formatter='MMM D, YYYY'] - The format to use.
   */
  date() {
    let date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
    let formatter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : formats.date.MONTH_ABR_DAY_YEAR;
    return formatter(new Date(date));
  },
  /**
   * Convert 24h time string to 12h time string with meridiems(PM/AM).
   * @param {String} time - ie.: "19:00"
   * @returns {String} - ie.: "7 PM"
   */
  formatTimeString(time) {
    let trim = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const parts = time.split(':');
    const hour = Number(parts[0]);
    const minute = Number(parts[1]);
    const showMinute = minute !== 0 ? `:${parts[1]}` : '';
    const pm = hour >= 12;
    let formattedHour = hour;
    if (pm) formattedHour = hour === 12 ? '12' : hour % 12;
    let result = pm ? `${formattedHour}${showMinute} PM` : `${hour}${showMinute} AM`;
    if (trim) {
      result = result.replace(' PM', 'pm').replace(' AM', 'am');
    }
    return result;
  },
  /**
   * Return a formatted percent string to the decimal places specified.
   * USAGE:
   * sn.format.percent(13, 205, 3) // "6.341%"
   * sn.format.percent(5, 10, 3) // "50%"
   * @param {Number} count - The current count of items.
   * @param {Number} total - The total number of items.
   * @param {Number} decimals - The number of decimal places.
   */
  percent(count, total) {
    let decimals = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
    return `${Number((count / total * 100).toFixed(decimals)).toString()}%`;
  },
  /**
   * Return a formatted currency string for the supplied number.
   * USAGE:
   * sn.format.currency(123456789.12345) // "$123,456,789.12"
   * @param {string|number} num - the currency amount.
   * @param {boolean} trim - if `true`, '.00' is omitted, default to `false`.
   */
  currency(num) {
    let trim = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let n = num;
    if (typeof num === 'object') {
      // convert price type
      n = num.cents / 100;
    }
    const trimming = trim ? '.00' : '';
    const c = 2;
    const d = '.';
    const t = ',';
    const s = n < 0 ? '-$' : '$';
    const i = `${parseInt(n = Math.abs(+n || 0).toFixed(c), 10)}`;
    let j = i.length;
    j = j > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, `$1${t}`) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '').replace(trimming, '');
  },
  /**
   * Reduce a numerator and denominator to it's smallest,
   * integer ratio using Euclid's Algorithm. Example:
   * <code>
   *   ratio(1920, 1080) -> "16:9"
   * </code>
   */
  ratio(numerator, denominator) {
    let flip = false;
    let n = numerator;
    let d = denominator;
    const gcd = (a, b) => {
      if (b === 0) return a;
      return gcd(b, a % b);
    };
    if (n === d) return '1 : 1';

    // Make sure numerator is always the larger number
    if (+n < +d) {
      flip = true;
      const temp = n;
      n = d;
      d = temp;
    }
    const divisor = gcd(+n, +d);
    return flip ? `${d / divisor}:${n / divisor}` : `${n / divisor}:${d / divisor}`;
  },
  time(sec) {
    const seconds = Number(sec);
    const h = Math.floor(seconds / 3600);
    const m = Math.floor(seconds % 3600 / 60);
    const s = Math.floor(seconds % 3600 % 60);
    let result = `${`0${m}`.slice(-2)}:${`:0${s}`.slice(-2)}`;
    if (h > 0) result = `${`0${h}`.slice(-2)}:${result}`;
    return result;
  }
};

/**
 * Returns a human readable format of the difference between an date/timestamp
 * and now.
 * @param {Date|String} dateMillis - the unix timestamp or date instance.
 * @param {boolean} useIn - when true, future times use 'in' instead of 'from now'.
 * @return {string} the formatted difference, i.e. `one month from now` or `two days ago`
 */
function fromNow(dateMillis) {
  let useIn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  let millis = dateMillis;
  if (dateMillis instanceof Date) {
    millis = dateMillis.getTime();
  }
  const now = Date.now();
  const diff = now - millis;
  const isBefore = dateMillis < now;
  const abs = Math.abs(diff);
  const days = Math.floor(abs / (24 * 60 * 60 * 1000));
  const daysMs = abs % (24 * 60 * 60 * 1000);
  const hrs = Math.floor(daysMs / (60 * 60 * 1000));
  const hrsMs = abs % (60 * 60 * 1000);
  const mins = Math.floor(hrsMs / (60 * 1000));
  const minsMs = abs % (60 * 1000);
  const secs = Math.floor(minsMs / 1000);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);
  if (isBefore) {
    // In the past
    if (years > 1) return `${years} years ago`;
    if (years === 1) return 'a year ago';
    if (months > 1) return `${months} months ago`;
    if (months === 1) return '1 month ago';
    if (days > 1) return `${days} days ago`;
    if (days === 1) return 'yesterday';
    if (hrs > 1) return `${hrs} hours ago`;
    if (hrs === 1) return 'one hour ago';
    if (mins > 1) return `${mins} minutes ago`;
    if (mins === 1) return '1 minute ago';
    if (secs > 1) return `${secs} seconds ago`;
    return '1 second ago';
  }

  // In the future
  if (years > 1) return useIn ? `in {years} years` : `${years} years from now`;
  if (years === 1) return useIn ? 'in a year' : 'a year from now';
  if (months > 1) return useIn ? `in ${months} months` : `${months} months from now`;
  if (months === 1) return useIn ? 'in a month' : '1 month from now';
  if (days > 1) return useIn ? `in ${days} days` : `${days} days from now`;
  if (days === 1) return 'tomorrow';
  if (hrs > 1) return useIn ? `in ${hrs} hours` : `${hrs} hours from now`;
  if (hrs === 1) return useIn ? 'in an hour' : 'one hour from now';
  if (mins > 1) return useIn ? `in ${mins} minutes` : `${mins} minutes from now`;
  if (mins === 1) return useIn ? 'in 1 minute' : '1 minute from now';
  if (secs > 1) return useIn ? `in ${secs} seconds` : `${secs} seconds from now`;
  return '1 second from now';
}

/***/ }),

/***/ 981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   isFunc: () => (/* binding */ isFunc),
/* harmony export */   noop: () => (/* binding */ noop),
/* harmony export */   required: () => (/* binding */ required)
/* harmony export */ });
/* unused harmony exports lazy, compose, pipe, debounce, combineReducers, onEnter, onKey, cappedCallback, retry, createChainedFunction */
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(814);
/**
 * FUNCTION UTILS
 * @module sn.functions
 */


function lazy(f) {
  return function lazyApply() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return f.apply(this, args);
  };
}
const compose = function () {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }
  return function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    return fns.forEach(fn => fn && fn(...args));
  };
};

/** Returns `true` only if the property on the object is a function. */
const isFunc = function () {
  if (arguments.length === 1) return typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'function';
  return typeof (0,_object__WEBPACK_IMPORTED_MODULE_0__.prop)(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1]) === 'function';
};

/**
 * Use as an ES6 default parameter to make a parameter required.
 * @param name - The required parameter name.
 *
 * USAGE:
 *  makeSandwich = (meat = required('meat'), cheese) => { ... };
 *  makeSandwich = ({ meat = required('meat'), cheese } = {}) => { ... };
 */
const required = name => {
  throw new Error(`${name} is a required parameter.`);
};

/**
 * Pipe data through a series of functions.
 * @param {[Function]} fns - Array of functions to pipe data through.
 *
 * USAGE:
 * let fn1 = s => s.toLowerCase();
 * let fn2 = s => s.split('').reverse().join('');
 * let fn3 = s => s + '!'
 *
 * let emitter = pipe(fn1, fn2, fn3);
 * console.log(emitter('Time')); // emit!
 */
const pipe = function () {
  for (var _len4 = arguments.length, fns = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    fns[_key4] = arguments[_key4];
  }
  return x => fns.reduce((v, f) => f(v), x);
};

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 * @param {Function} func - The function to debounce.
 * @param {Number} wait - The number of milliseconds to wait between triggering.
 * @param {boolean} [immediate] - Trigger the function on the leading edge, instead of the trailing.
 * @see https://davidwalsh.name/javascript-debounce-function
 *
 * USAGE:
 * let myEfficientFn = sn.debounce(() => {
 *   // All the taxing stuff you do
 * }, 250);
 *
 * window.addEventListener('resize', myEfficientFn);
 */
function debounce(func) {
  let wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  let immediate = arguments.length > 2 ? arguments[2] : undefined;
  let timeout;
  return function debounced() {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }
    const context = this;
    function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

/** Convenient 'do nothing' function that doesn't require an argument like void(0); */
const noop = () => {};
const identity = o => o;

/**
 * Combine many redux style reducers into one 'root' reducer function.
 * Similar to redux combineReducers except that redux reducers only
 * receive/update a piece of the app state. Ours receive and can update
 * the entire state object.
 * @param reducers - 0 to many reducer functions
 * @return {function(*=, *=)} a single 'root' reducer function
 */
const combineReducers = function () {
  for (var _len6 = arguments.length, reducers = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    reducers[_key6] = arguments[_key6];
  }
  return function () {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let action = arguments.length > 1 ? arguments[1] : undefined;
    return reducers.reduce((nextState, reducer) => reducer(nextState, action), state);
  };
};

/**
 * Produces an event handler that expects to receive an event and will
 * only fire the provided callback if the event key code is the 'Enter' key.
 * Useful for valid a11y handling, i.e. divs with onClick's.
 *
 * USAGE:
 * <div onClick={changeImage} onKeyDown={onEnter(changeImage)}>
 *
 * @param {function} fn - the callback to fire on enter key.
 * @returns {function}
 */
function onEnter(fn) {
  return function handleOnEnter(e) {
    if (e.keyCode === 13) fn(e);
  };
}

/**
 * Produces an event handler that expects to receive an event and will
 * only fire the provided callback if the event key one of the desired keys.
 * USAGE:
 * <input type="range" onKeyDown={onKey(seek, ['ArrowLeft', 'ArrowRight'])}>
 *
 * @param {function} fn - the callback to fire on key down.
 * @param {(number[]|string[])} keys - key names to respond to
 * @returns {function}
 */
function onKey(fn, keys) {
  return function handleOnKey(e) {
    if (keys.includes(e.key) || keys.includes(e.keyCode)) fn(e);
  };
}

/**
 * Returns a function that can be called only a certain number of times.
 * @param {function} fn - the callback to fire
 * @param {number} times - number of times this callback can be called
 * @param {...*} args - callback arguments, if any
 * @return {function(): *}
 */
function cappedCallback(fn, times) {
  for (var _len7 = arguments.length, args = new Array(_len7 > 2 ? _len7 - 2 : 0), _key7 = 2; _key7 < _len7; _key7++) {
    args[_key7 - 2] = arguments[_key7];
  }
  let count = times;
  return function cappedFunction() {
    if (count > 0) {
      fn(...args);
      count -= 1;
    }
  };
}

/**
 * Fire a callback function if a condition is met.
 * If not met, retry until it is met or the # of retries is expended.
 * @param {function} callback - function to fire
 * @param {function} condition - function to determine to fire callback
 * @param {number} [delay] - number of milliseconds to wait before retrying
 * @param [number [retries] - number or retries to attempt
 */
function retry(_ref) {
  let {
    callback,
    condition,
    delay = 200,
    retries = 10
  } = _ref;
  if (condition()) {
    callback();
  } else if (retries > 0) {
    setTimeout(() => {
      retry({
        callback,
        condition,
        delay,
        retries: retries - 1
      });
    }, delay);
  }
}

/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction() {
  for (var _len8 = arguments.length, funcs = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    funcs[_key8] = arguments[_key8];
  }
  return funcs.filter(f => f != null).reduce((acc, f) => {
    if (typeof f !== 'function') {
      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }
    if (acc === null) return f;
    return function chainedFunction() {
      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }
      acc.apply(this, args);
      f.apply(this, args);
    };
  }, null);
}

/***/ }),

/***/ 564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useSubscription: () => (/* binding */ useSubscription)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(814);
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(981);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(168);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(813);
/* harmony import */ var _cookiejar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var browser_or_node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(192);
/* harmony import */ var browser_or_node__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(browser_or_node__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util_core_Deferred__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(292);
/**
 * A simple pub/sub module.
 * @see http://davidwalsh.name/pubsub-javascript
 */









const win = browser_or_node__WEBPACK_IMPORTED_MODULE_4__.isBrowser ? window : __webpack_require__.g;

/**
 * This is the hub state, mapping topics to their listeners.
 * We use a window (or global) field so that no matter how many hubs instances
 * have been created, there is only one topic-listener dictionary.
 *
 * @type {{ string: Function[] }}
 */
let TOPIC_LISTENERS = win?.sn__hub;
if (!TOPIC_LISTENERS) {
  win.sn__hub = {};
  TOPIC_LISTENERS = win.sn__hub;
}
const hop = TOPIC_LISTENERS.hasOwnProperty;

/**
 * Log a notification for a topic publication.
 * @param {string} topic - the topic that was published.
 * @param {number} listeners - the number of listeners.
 * @param {*} data - the data for the publication.
 */
function log(topic, listeners, data) {
  let notif = `%csn.hub: %cPublished %c'${topic}' %cto ${listeners} subscriber(s)`;
  const hasData = typeof data !== 'undefined';
  if (hasData) notif += ' with data:';
  const grouper = hasData && _logger__WEBPACK_IMPORTED_MODULE_2__["default"].groupCollapsed || _logger__WEBPACK_IMPORTED_MODULE_2__["default"].info;
  const groupend = hasData && _logger__WEBPACK_IMPORTED_MODULE_2__["default"].groupEnd || _function__WEBPACK_IMPORTED_MODULE_6__.noop;
  const consoleStyles = [`${_constants__WEBPACK_IMPORTED_MODULE_1__.styles.strong}`, `${_constants__WEBPACK_IMPORTED_MODULE_1__.styles.normal}`, `${_constants__WEBPACK_IMPORTED_MODULE_1__.styles.value}`, `${_constants__WEBPACK_IMPORTED_MODULE_1__.styles.normal}`];
  grouper.apply(console, [notif, ...consoleStyles]);
  if (hasData) _logger__WEBPACK_IMPORTED_MODULE_2__["default"].info(data);
  groupend();
}

/**
 * Subscribe a listener function to be notified of an event on a topic.
 * Returns an object with a 'remove' property as a function to remove
 * the registered listener.
 *
 * @param {string} topic - The topic to subscribe to.
 * @param {Function} listener - The listener function fired for each
 *                              event on the topic.
 * @return {Object} o - Listener removal handler.
 */
function sub(topic, listener) {
  // Create the topic's object if not yet created
  if (!hop.call(TOPIC_LISTENERS, topic)) TOPIC_LISTENERS[topic] = [];

  // Add the listener to topic's listener queue
  const index = TOPIC_LISTENERS[topic].push(listener) - 1;

  // We're subbed to and ready to be pubbed to
  mod.topicDfds[topic]?.resolve(listener);

  // Provide handle back for removal of a topic listener
  return {
    remove: () => {
      delete TOPIC_LISTENERS[topic][index];
    }
  };
}

/**
 * Publish an event on the topic with optional data.
 *
 * @param {string} topic - The topic to publish the event on.
 * @param {*} [data] - The optional data to pass the listeners.
 */
function pub(topic, data) {
  // If the topic doesn't exist or it has no listeners in queue, just leave.
  if (!hop.call(TOPIC_LISTENERS, topic)) return;

  // Cycle through topics queue, fire!
  const listeners = TOPIC_LISTENERS[topic];
  listeners.forEach(listener => listener(typeof data === 'undefined' ? {} : data));
  const shouldLog = getLogEnabled();
  if (shouldLog) log(topic, listeners.length, data);
}

/**
 * Custom hook to react to hub subscriptions as a side effect.
 * @param {string} topic - The topic to subscribe to.
 * @param {Function} listener - The listener function fired for each
 *                              event on the topic.
 * @param {Function} [onReady] - A callback fired when the subscription has been registered.
 */
const useSubscription = (topic, listener, onReady) => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const subscription = sub(topic, listener);
    if (typeof onReady === 'function') onReady();
    return subscription.remove;
  },
  // Unsub/Resub if they change topics but not handlers.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [topic]);
};

/**
 * Returns true if the cookie is set to `true`, otherwise false.
 * @return {boolean}
 */
function getLogEnabled() {
  return !!_cookiejar__WEBPACK_IMPORTED_MODULE_3__["default"].get(_cookiejar__WEBPACK_IMPORTED_MODULE_3__["default"].Entry.hub_log_enabled);
}
const mod = {
  pub,
  sub,
  toggleLogging: () => {
    const shouldLog = getLogEnabled();
    _cookiejar__WEBPACK_IMPORTED_MODULE_3__["default"].set(_cookiejar__WEBPACK_IMPORTED_MODULE_3__["default"].Entry.hub_log_enabled, !shouldLog);
    return getLogEnabled();
  },
  /** Some common topics. */
  topics: {
    AB_TEST_DATA: 'ab_test_data',
    ALERTS: 'alerts',
    ANALYTICS_CREATE_CONSUMER: 'analytics_create_consumer',
    ANALYTICS_EVENT: 'analytics_event',
    ANALYTICS_REGISTER_CONSUMER: 'analytics_register_consumer',
    CART: 'cart',
    CHAT_BUTTON_CLICK: 'chat_button_click',
    LEAD_MODAL: 'show_lead_capture',
    LIVE_PERSON_MODAL: 'live_person_modal_show',
    MICRO_FOOTER: 'micro_footer',
    MODAL: 'modal',
    MODAL_CLOSE: 'modal_close',
    MODAL_READY: 'modal_ready',
    MODAL_NARWHAL: 'modal_narwhal_show',
    NAV_TOGGLED: 'nav_toggled',
    NAV_UNPIN_AT: 'nav_unpin_at',
    NAV_SHOW_LEAD_LINK: 'nav_show_lead_link',
    PREFERRED_STORE: 'preferred_store',
    SESSION_DATA: 'session_data',
    STORE_FINDER: 'storefinder',
    SUBNAV_TAB: 'subnav_tab',
    USER: 'user',
    VIDEO_MODAL: 'modal_video_show',
    VIDEO_MODAL_PLAY: 'modal_video_play',
    VIDEO_MODAL_READY: 'modal_video_ready'
  }
};
mod.topicDfds = Object.values(mod.topics).reduce((dict, v) => {
  dict[v] = new _util_core_Deferred__WEBPACK_IMPORTED_MODULE_5__["default"]();
  return dict;
}, {});

/**
 * Return a promise resolved when the first subscription to a topic has happened.
 * @param {valueof mod.topics} topic
 * @return {Promise<function>}
 */
mod.onTopicListener = topic => {
  /** @type {Deferred} */
  const dfd = mod.topicDfds[topic];
  return dfd.promise();
};
(0,_object__WEBPACK_IMPORTED_MODULE_7__.namespace)('sn.hub', mod);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mod);

/***/ }),

/***/ 813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(981);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(168);
/* eslint-disable no-console */
/**
 * Module to abstract the console.
 * Performs the log only if
 * - the environment has a console,
 * - with the desired log function,
 * - and either the server is in dev mode or the browser is in debug mode.
 */




/**
 * @typedef {Object} ConsoleType
 * @property {(...args: any[]) => void} log
 * @property {(...args: any[]) => void} info
 * @property {(...args: any[]) => void} warn
 * @property {(...args: any[]) => void} error
 * @property {(...args: any[]) => void=} debug
 * @property {(condition: any, ...args: any[]) => void=} assert
 * @property {() => void=} clear
 * @property {(label?: string) => void=} count
 * @property {(label?: string) => void=} countReset
 * @property {(tabularData: any, properties?: string[]) => void=} table
 * @property {(...label: any[]) => void=} group
 * @property {(...label: any[]) => void=} groupCollapsed
 * @property {() => void=} groupEnd
 * @property {(label?: string) => void=} time
 * @property {(label?: string) => void=} timeEnd
 * @property {(...args: any[]) => void=} trace
 * @property {(obj: any, options?: any) => void=} dir
 * @property {(...args: any[]) => void=} dirxml
 */

/** @type {ConsoleType} */
const logger = {};
['assert', 'dir', 'count', 'log', 'info', 'debug', 'warn', 'error', 'table', 'trace', 'group', 'groupEnd', 'groupCollapsed', 'profile', 'profileEnd', 'time', 'timeEnd', 'timeStamp'].forEach(key => {
  const isLoggable = _constants__WEBPACK_IMPORTED_MODULE_0__.win?.console && _constants__WEBPACK_IMPORTED_MODULE_0__.win?.console[key];
  const shouldLog = !_constants__WEBPACK_IMPORTED_MODULE_0__.isJestEnv && !(0,_constants__WEBPACK_IMPORTED_MODULE_0__.isProduction)() || (0,_constants__WEBPACK_IMPORTED_MODULE_0__.isDebug)();
  logger[key] = isLoggable && shouldLog ? function log() {
    _constants__WEBPACK_IMPORTED_MODULE_0__.win.console[key](...arguments);
  } : _function__WEBPACK_IMPORTED_MODULE_1__.noop;

  /**
   * A log statement that only fires if in `debug mode`,
   * i.e `sn-debug` cookie set to `true`.
   */
  logger.sndebug = function sndebug() {
    if (!(0,_constants__WEBPACK_IMPORTED_MODULE_0__.isDebug)()) return;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    console.log('DEBUG:', ...args);
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logger);

/***/ }),

/***/ 814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   namespace: () => (/* binding */ namespace),
/* harmony export */   prop: () => (/* binding */ prop)
/* harmony export */ });
/* unused harmony exports setProp, values, reverse, shallowEqual, shrink, eq, has, isPlainObject, extend, type */
/* OBJECT UTILS
   --------------------------------------------------------------- */

const _identity = o => o;

/**
 * Get the value of a property at a path without throwing a ReferenceError.
 * If the path contains a {undefined} or {null}, it is returned.
 * @param {object} obj - The object to lookup the property from.
 * @param {string} path - The property path string.
 * @returns {*} - The value at the end of the property path,
 *                or {null} or {undefined} if encountered.
 *
 * USAGE:
 * let employee = {
 *   name: 'Bob Vila',
 *   nicknames: ['Bobby V', 'Bob the Builder', 'The Veebs'],
 *   address: {
 *     street1: '12345 67th St',
 *     state: {
 *       'iso-code': 'US-MN',
 *       'short-code': 'US-MN',
 *       'long-code': 'US-Minnesota'
 *     }
 *   }
 * };
 * let format = 'iso';
 *
 * // values without reference errors
 * prop(employee, 'name');                            // "Bob Vila"
 * prop(employee, 'address.street2');                 // undefined
 *
 * // bracket syntax
 * prop(employee, "address.state['long-code']");      // "US-Minnesota"
 * prop(employee, 'address.state["short-code"]');     // "US-MN"
 * prop(employee, 'address.state[`short-code`]');     // "US-MN"
 * prop(employee, `address.state['${format}-code']`); // "US-MN"
 *
 * // and arrays, oh my!
 * prop(employee, 'nicknames[1]');                    // "Bob the Builder"
 * prop(employee, 'nicknames[1].length');             // 15
 * prop(employee, 'nicknames[3].length');             // undefined
 */
function prop(obj, path) {
  if (!obj) return obj;
  let item = obj;

  // Handle bracket syntax.
  const normalized = path.replace(/\[/g, '.') // convert open bracket to dot
  .replace(/[\]"'`]/g, ''); // remove close bracket and all quote flavors

  const parts = normalized.split('.');
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    const value = item[part];

    // Allow empty strings/objects.
    const bad_value = typeof value === 'undefined' || value === null;
    const last_value = i === parts.length - 1;
    item = value;
    if (last_value || bad_value) break;
  }
  return item;
}

/**
 * Set a property at a path on an object. Parts of the path
 * that do not exist yet are lazily created.
 * @param {object} obj - The object to set a property on.
 * @param {string} path - The '.' separated property path to set.
 * @param {*} value - The value to set at the property path.
 *
 * USAGE:
 * setProp(employee, 'address.city', 'Rogers');
 * let bg = sn.setProp({}, 'background.color', '#efefef');
 */
function setProp(obj, path, value) {
  const parts = path.split('.');
  let object;
  let i;
  let n;
  object = obj; // Start the chain at our object.

  for (i = 0, n = parts.length; i < n; i++) {
    if (i === n - 1) {
      // At the end of the path, set the value.
      object[parts[i]] = value;
    } else {
      // If this part of the path isn't there, fill in with object literal.
      if (!object[parts[i]]) object[parts[i]] = {};
      object = object[parts[i]]; // Move `object` to the next path part.
    }
  }

  return obj;
}

/**
 * Namespace function: so we don't have to put all those checks to see if
 * modules exist and either create empty ones or set a reference to one
 * that was previously created.
 * See Zakas, Maintainable JavaScript, pp. 72-73, and
 * Stefanov, Javascript Patterns, pp. 89-90
 * @param {string} ns - a '.' separated namespace like 'foo.bar.baz'
 * @param {*} [o] - and optional object/number/string to set the path value to
 */
function namespace(ns, o) {
  const win = __webpack_require__.g || window;
  const parts = ns.split('.');
  let object;
  let i;
  let n;

  // Start the object if needed.
  if (!win[parts[0]]) {
    win[parts[0]] = {};
  }
  object = win[parts[0]];
  for (i = 1, n = parts.length; i < n; i++) {
    if (!object[parts[i]]) {
      object[parts[i]] = {};
    }
    object = object[parts[i]];
  }
  if (o) {
    setProp(win, ns, o);
    object = o;
  }
  return object;
}

/**
 * Returns and array of the values in an object.
 * It only returns the objects own values, not those from the prototype chain.
 */
function values(obj) {
  if (Object.values) return Object.values(obj);
  return Object.keys(obj || {}).map(key => obj[key]);
}

/** Reverses a simple object containing key - value pairs. */
function reverse(obj) {
  let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _identity;
  return Object.keys(obj).reduce((prev, curr) => {
    prev[obj[curr]] = callback(curr);
    return prev;
  }, {});
}

/**
 * Returns true if `a` contains the same keys with the same values as `b`.
 * Uses strict equality (===) and does not support `NaN`.
 */
function shallowEqual(a, b) {
  /* eslint-disable no-restricted-syntax */
  for (const key in a) {
    if (!(key in b) || a[key] !== b[key]) return false;
  }
  for (const key in b) {
    if (!(key in a) || a[key] !== b[key]) return false;
  }
  return true;
}

/**
 * Returns a new object containing only the properties listed in `props`.
 * @param {object} o - The object to get properties from.
 * @param {String[]} props - Array of property names to keep.
 * @return {object} - The resulting object containing only the properties listed in `props`.
 *
 * USAGE:
 * const vowels = shrink({ a: 'a', c: 'c', e: 'e' }, ['a', 'e']);
 * // => { a: 'a', e: 'e' }
 */
function shrink(o, props) {
  return props.reduce((acc, curr) => {
    acc[curr] = o[curr];
    return acc;
  }, {});
}

/**
 * Returns `true` if the JSON.stringify result is the same for both arguments.
 * Order matters, properties or array elements in different orders will result in `false`.
 */
function eq(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

/**
 * Returns true if the given object has the 'own' property
 * @param {object} o - the object to check for a property
 * @param {string|string[]} p - the property name or array of names to check for
 * @return {boolean}
 */
function has(o, p) {
  if (!o || !p) return false;
  if (Array.isArray(p)) {
    return p.reduce((result, prop) => {
      if (!result) return result;
      return Object.prototype.hasOwnProperty.call(o, prop);
    }, true);
  }
  return Object.prototype.hasOwnProperty.call(o, p);
}

/** Returns true if this is a plain object, not created from a class/prototype */
function isPlainObject(obj) {
  // Detect obvious negatives
  // Use toString instead of jQuery.type to catch host objects
  if (!obj || {}.toString.call(obj) !== '[object Object]') {
    return false;
  }
  const proto = Object.getPrototypeOf(obj);
  const fnToString = Object.prototype.hasOwnProperty.toString;
  const ObjectFunctionString = fnToString.call(Object);

  // Objects with no prototype (e.g., `Object.create( null )`) are plain
  if (!proto) {
    return true;
  }

  // Objects with prototype are plain iff they were constructed by a global Object function
  const Ctor = Object.prototype.hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor === 'function' && fnToString.call(Ctor) === ObjectFunctionString;
}

/**
 * Extend an object with one to many sources.
 * Can be used to produce a deep copy of an object.
 * Replaces $.extend
 * Example:
 * <code>
 *   let clone;
 *   const source = { foo: { bar: 'baz' } };
 *
 *   clone = extend({}, source) // => { foo: { bar: 'baz' } }
 *   source.foo === clone.foo; // => true
 *
 *   clone = extend(true, {}, source) // => { foo: { bar: 'baz' } }
 *   source.foo === clone.foo; // => false
 * </code>
 */
function extend() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  const deepflag = typeof args[0] === 'boolean';
  const deep = deepflag && args[0];
  const destination = args[deepflag ? 1 : 0];
  const sources = args.slice(deepflag ? 2 : 1);
  if (!deep) return Object.assign(destination, ...sources);
  const target = destination || {};
  for (let i = 0; i < sources.length; i++) {
    const options = sources[i];

    // eslint-disable-next-line no-continue
    if (!options) continue;

    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const name in options) {
      const copy = options[name];

      // Prevent Object.prototype pollution
      // Prevent never-ending loop
      if (name === '__proto__' || target === copy) {
        // eslint-disable-next-line no-continue
        continue;
      }

      // Recurse if we're merging plain objects or arrays
      let copyIsArray = Array.isArray(copy);
      if (deep && copy && (isPlainObject(copy) || copyIsArray)) {
        const src = target[name];
        let clone;

        // Ensure proper type for the source value
        if (copyIsArray && !Array.isArray(src)) {
          clone = [];
        } else if (!copyIsArray && !isPlainObject(src)) {
          clone = {};
        } else {
          clone = src;
        }
        copyIsArray = false;

        // Never move original objects, clone them
        target[name] = extend(deep, clone, copy);

        // Don't bring in undefined values
      } else if (copy !== undefined) {
        target[name] = copy;
      }
    }
  }
  return target;
}

/**
 * Returns the type of the argument
 * Replaces $.type
 * @param {*} obj - literally anything
 * Example:
 * <code>
 *   type([]); // => "array"
 *   type({}); // => "object"
 *   type(''); // => "string"
 *   type(42); // => "number"
 *   type(Symbol); // => "function"
 *   type(Symbol(42); // => "symbol"
 * </code>
 */
function type(arg) {
  return Object.prototype.toString.call(arg).replace(/^\[object (.+)]$/, '$1').toLowerCase();
}

/***/ }),

/***/ 203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bytes: () => (/* binding */ bytes),
/* harmony export */   pad: () => (/* binding */ pad),
/* harmony export */   uuid: () => (/* binding */ uuid)
/* harmony export */ });
/* unused harmony exports isString, capitalize, titlecase, camelCase, camelToSnake, camelToKabob, pascalToSnake, snakeToPascal, mattressCase, optionize, deoptionize, dasherize, undasherize, repeat, wordCount, replaceAt, endsWith, firstWord, lazyId, pluralIf, pxToNum, truncate, asBool, removeSpecialCharacters, hash */
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(168);

function isString(input) {
  return typeof input === 'string';
}

/**
 * Capitalize the first letter of the string, keep the rest as-is.
 * Example:
 * capitalize('chat with us!') -> "Chat with us!"
 */
function capitalize(phrase) {
  if (!phrase) return phrase;
  return phrase[0].toUpperCase() + phrase.slice(1);
}

/**
 * For each word in the phrase, uppercase the first letter and lowercase the rest.
 * Example:
 * titlecase('LYOCELL uLTra Sheet SET') -> "Lyocell Ultra Sheet Set"
 */
function titlecase(phrase) {
  if (!phrase) return phrase;
  return phrase.replace(/\w\S*/g, word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
}

/**
 * Convert snake_case or sentence to camelCase
 * @param {string} phrase
 * @return {string}
 *
 * Example:
 * camelCase('foo_bar') -> "fooBar"
 * camelCase('Foo Bar') -> "fooBar"
 */
function camelCase(phrase) {
  return phrase.replace(/^\w|[A-Z]|\b\w|_+\w/g, (word, index) => {
    if (word.startsWith('_')) {
      // handle underscore word
      const next = word.replace('_', '');
      if (index === 0) return next[0].toLowerCase() + next.substr(1);
      return next[0].toUpperCase() + next.substr(1);
    }
    // lowercase or uppercase this letter
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/[\s-_]+/g, '');
}

/**
 * Convert camelCase into snake_case
 * @param {string} phrase
 * @returns {string}
 *
 * Example:
 * camelToSnake('fooBar') -> "foo_bar"
 */
function camelToSnake(phrase) {
  return phrase.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}

/**
 * Convert camelCase into kabob-case
 * @param {string} phrase
 * @returns {string}
 *
 * Example:
 * camelToSnake('fooBar') -> "foo-bar"
 */
function camelToKabob(phrase) {
  return phrase.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
}

/**
 * Convert PascalCase into snake_case
 * @param {string} phrase
 * @returns {string}
 *
 * Example:
 * pascalToSnake('FooBar') -> "foo_bar"
 */
function pascalToSnake(phrase) {
  const first = phrase[0].toLowerCase();
  const rest = phrase.substring(1);
  return `${first}${camelToSnake(rest)}`;
}

/**
 * Convert snake_case to PascalCase
 * @param {string} phrase
 * @returns {string}
 *
 * Example:
 * snakeToPascal('foo_bar') -> "FooBar"
 */
function snakeToPascal(phrase) {
  return capitalize(camelCase(phrase));
}

/**
 * Sleep Number's crazy naming scheme
 * @param {string} phrase
 * @returns {string} cased like 'pSE SPECIAL EDITION'
 */
function mattressCase(phrase) {
  let allowSpecialCase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (!allowSpecialCase) return phrase.toUpperCase();
  return `${phrase[0].toLowerCase()}${phrase.substr(1).toUpperCase()}`;
}

/**
 * Rails has the concept of 'optionizing' text which replaces spaces with
 * underscores and lower-cases text.
 *
 * Example:
 * optionize('Soft Green'); -> "soft_green"
 */
function optionize() {
  let phrase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return phrase.toLowerCase().replace(/\s/g, '_');
}

/**
 * Replace '_' characters with spaces
 *
 * Example:
 * deoptionize('soft_green'); -> "Soft Green"
 */
function deoptionize() {
  let phrase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return titlecase(phrase.replace(/_/g, ' '));
}

/**
 * Replaces spaces with dashes and lower-cases text.
 *
 * Example:
 * dasherize('Split California King'); -> "split-california-king"
 */
function dasherize() {
  let phrase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return phrase.toLowerCase().replace(/\s/g, '-');
}

/**
 * Replaces dashes with spaces and uppercase the first letter of each word.
 *
 * Example:
 * dasherize('split-california-king'); -> "Split California King"
 */
function undasherize() {
  let phrase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  const result = phrase.toLowerCase().replaceAll(/-/g, ' ');
  return titlecase(result);
}
function repeat(str, times) {
  return new Array(times + 1).join(str);
}
function wordCount(string) {
  return string.trim().split(/\s+/).length;
}
function pad(num, maxLength) {
  return repeat(`0`, maxLength - num.toString().length) + num;
}
function replaceAt(s, i, c) {
  return s.substr(0, i) + c + s.substr(i + 1);
}
function endsWith(s, c) {
  return s[s.length - 1] === c;
}
function firstWord(s) {
  return s.replace(/ .*/, '');
}

/**
 * Generate a universally unique identifier.
 * @return {string}
 */
function uuid() {
  /* eslint-disable */
  let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
  return 'uuid-' + uuid;
  /* eslint-enable */
}

/** Add a uuid to something if it doesn't already have one. */
function lazyId(o) {
  o.id = o.id || uuid();
  return o;
}

/** Return the size of a string in bytes assuming UTF-8 encoding. */
function bytes(str) {
  // Matches only the 10.. bytes that are non-initial characters in a multi-byte sequence.
  const m = encodeURIComponent(str).match(/%[89ABab]/g);
  return str.length + (m ? m.length : 0);
}

/**
 * Returns either an empty string, a plural character of choice, or
 * an optional singular form.
 * @param {boolean} condition False will return an empty string.
 * @param {string} plural Plural suffix, 's' by default.
 * @param {string} [singular] Optional singular suffix, or version.
 */
function pluralIf(condition) {
  let plural = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 's';
  let singular = arguments.length > 2 ? arguments[2] : undefined;
  if (!condition) return singular || '';
  return plural;
}

/**
 * Returns a number of for a string px value, ie: '23px' => 23.
 */
function pxToNum(str) {
  return +str.trim().replace('px', '');
}

/**
 * Returns a truncated string with ellipsis (...) appended.
 * @param {string} string to truncate
 * @param {number} number of characters to keep
 */
function truncate(str, num) {
  if (str.length <= num) {
    return str;
  }
  return `${str.slice(0, num)}...`;
}

/** Convert a 'true' or 'false' string to a boolean */
function asBool(str) {
  if (typeof str === 'boolean') return str;
  if (typeof str === 'string') return str === 'true';
  return !!str;
}

/** Replace all the special characters from a string */
function removeSpecialCharacters() {
  let input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return Object.values(specials).reduce((result, special) => {
    return result.replaceAll(special.value, '');
  }, input);
}

/**
 * Convert a string to a hash
 * Inspired by https://github.com/garycourt/murmurhash-js
 */
function hash(str) {
  /* eslint-disable */
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0;
  // Mix 4 bytes at a time into the hash
  var k,
    i = 0,
    len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^= /* k >>> r: */k >>> 24;
    h = /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^ /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  }
  // Handle the last few bytes of the input array
  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  }
  // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.
  h ^= h >>> 13;
  h = /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/***/ }),

/***/ 192:
/***/ ((module) => {

module.exports = require("browser-or-node");

/***/ }),

/***/ 734:
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProvider: () => (/* binding */ createProvider),
/* harmony export */   createStore: () => (/* binding */ createStore),
/* harmony export */   providerError: () => (/* binding */ providerError)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(734);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(531);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(168);
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(814);
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(981);
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(203);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(813);
/* harmony import */ var _hub__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(564);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(276);
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(666);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * Module to create data stores and providers.
 */












const stores = {};

/**
 * @typedef Store
 * @property {string} name
 * @property {string} topic
 * @property {React.Context} context
 * @property {function} dispatch
 * @property {(function(string, *=): onChange)} change
 * @property {(function(string, *=): onSelect)} select
 * @property {(function(Function))} subscribe
 * @property {function: object} getState
 * @property {function} selectState
 */

/**
 * Create a store.
 * @param {object} blueprint
 * @param {string} blueprint.name
 * @param {object} blueprint.context
 * @param {function} blueprint.handle
 * @param {function} blueprint.getDefaultState
 * @return {Store}
 */
function createStore(blueprint) {
  const {
    name,
    context,
    handle: rootReducer
  } = blueprint;
  const topic = `store.${name}`;
  const logging = !(0,_constants__WEBPACK_IMPORTED_MODULE_3__.isProduction)() || (0,_constants__WEBPACK_IMPORTED_MODULE_3__.isDebug)();
  let state = blueprint.getDefaultState();
  let listeners = [];

  /** Retrieve the current state of the store. */
  function getState() {
    return state;
  }

  /**
   * Select portions of the state tree
   * @param {Object.<string, string|function>} selectors -
   *   Map of prop names to either
   *     1. string - Part of the state tree to be selected
   *     2. function - Run on the state to return the value
   * @param {Object} [currentState=getState()] -
   *   State to run against. Defaults to the stores state.
   *   Use this parameter if the state is a combination of multiple store states.
   * @returns props based on the selectors
   */
  const selectState = function (selectors) {
    let currentState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getState();
    const props = {};
    if (!selectors) {
      return props;
    }
    Object.keys(selectors).forEach(propName => {
      const selector = selectors[propName];
      if (typeof selector === 'string') {
        props[propName] = (0,_object__WEBPACK_IMPORTED_MODULE_9__.prop)(currentState, selector);
      } else if (typeof selector === 'function') {
        props[propName] = selector(currentState);
      }
    });
    return props;
  };

  /**
   * Dispatch an action or actions to the action handler,
   * then notify all store listeners.
   * @param {object|object[]} action - action or array of actions to dispatch.
   * @param {string} [action.type] - the action type
   */
  function dispatch(action) {
    const multi = Array.isArray(action);
    const filters = getLogIgnores();
    const shouldLog = logging && !filters.includes(name);
    if (shouldLog) {
      const canGroup = _logger__WEBPACK_IMPORTED_MODULE_5__["default"].groupCollapsed !== _function__WEBPACK_IMPORTED_MODULE_10__.noop;
      const time = _format__WEBPACK_IMPORTED_MODULE_8__.format.date(new Date(), _format__WEBPACK_IMPORTED_MODULE_8__.formats.time.PRECISE);
      const grouper = canGroup ? _logger__WEBPACK_IMPORTED_MODULE_5__["default"].groupCollapsed : _logger__WEBPACK_IMPORTED_MODULE_5__["default"].info;
      const type = multi ? action.map(a => a.type).join(', ') : action.type;
      grouper.apply(_logger__WEBPACK_IMPORTED_MODULE_5__["default"], [`${time} %cstore: %c${name} %caction${multi ? 's' : ''}: %c${type}`, `${_constants__WEBPACK_IMPORTED_MODULE_3__.styles.label}`, `${_constants__WEBPACK_IMPORTED_MODULE_3__.styles.value}`, `${_constants__WEBPACK_IMPORTED_MODULE_3__.styles.label}`, `${_constants__WEBPACK_IMPORTED_MODULE_3__.styles.value}`]);
      _logger__WEBPACK_IMPORTED_MODULE_5__["default"].info('%cBefore', `${_constants__WEBPACK_IMPORTED_MODULE_3__.css.gray}`, state);
      _logger__WEBPACK_IMPORTED_MODULE_5__["default"].info(`%cAction${multi ? 's' : ''}`, `${_constants__WEBPACK_IMPORTED_MODULE_3__.css.blue}`, action);
    }
    if (multi) {
      if (!action.length) return;
      action.forEach(a => {
        state = rootReducer(state, a);
      });
    } else {
      state = rootReducer(state, action);
    }
    if (shouldLog) {
      _logger__WEBPACK_IMPORTED_MODULE_5__["default"].info('%cAfter', `${_constants__WEBPACK_IMPORTED_MODULE_3__.css.green}`, state);
      _logger__WEBPACK_IMPORTED_MODULE_5__["default"].groupEnd();
    }
    listeners.forEach(listener => listener());
    _hub__WEBPACK_IMPORTED_MODULE_6__["default"].pub(topic, action);
  }

  /**
   * Returns an event handler function to dispatch actions with
   * a `type` and `value` property. If the first argument is an
   * event, the `value` is pulled from the  event's current target,
   * otherwise the first argument is used as the `value`.
   *
   * Useful for creating `onClick` or `onChange` handlers.
   *
   * @param {string} type - The action type.
   * @param {*} [item] - Optional identifier of item to change.
   * @returns {function(arg)}.
   */
  function change(type, item) {
    return function onChange(arg) {
      let value;
      const isEvent = typeof arg === 'object' && arg.currentTarget;
      if (isEvent) {
        if (arg.currentTarget.type === 'checkbox') {
          value = arg.currentTarget.checked;
        } else {
          // eslint-disable-next-line prefer-destructuring
          value = arg.currentTarget.value;
        }
      } else {
        value = arg;
      }
      dispatch({
        type,
        item,
        value
      });
    };
  }

  /**
   * Returns a ReactBootstrap `onSelect` handler.
   * Necessary since the first arg is the eventKey, not the event.
   * See https://react-bootstrap.github.io/components.html
   * @param {string} type - The action type.
   * @param {*} [item] - Optional identifier of item to select.
   * @returns {function(value)}
   */
  function select(type, item) {
    return function onSelect(value) {
      dispatch({
        type,
        item,
        value
      });
    };
  }

  /**
   * Register a listener callback to the store.
   * Listeners callbacks are fired after actions are dispatched in the
   * order they were registered.
   * @param {function} listener - The listener callback to register.
   * @returns {function} - A function to unregister the listener.
   */
  function subscribe(listener) {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }

  // Dispatch an initial event to populate store with default state.
  dispatch({});
  const store = {
    name,
    context,
    topic,
    getState,
    selectState,
    subscribe,
    dispatch,
    change,
    select
  };
  stores[name] = store;
  return store;
}

/**
 * Creates a store state provider component and a dispatch function that will
 * trigger your render for you. No need to subscribe to your store.
 * @param blueprint - the store blueprint
 * @returns {[Provider, Store]} an array containing the provider component and the store
 */
function createProvider(blueprint) {
  const store = createStore(blueprint);
  const {
    context: Context
  } = blueprint;

  /**
   * Using react context as the app state management lib.
   * @see https://kentcdodds.com/blog/application-state-management-with-react
   * @see https://kentcdodds.com/blog/how-to-use-react-context-effectively
   */
  function Provider(_ref) {
    let {
      children,
      ...rest
    } = _ref;
    const [, pulse] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    (0,_hub__WEBPACK_IMPORTED_MODULE_6__.useSubscription)(store.topic, () => pulse((0,_string__WEBPACK_IMPORTED_MODULE_4__.uuid)()));
    const state = store.getState();
    const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
      state,
      dispatch: store.dispatch,
      change: store.change,
      select: store.select,
      store
    }), [state]);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Provider, _extends({
      value: value
    }, rest), children);
  }
  return [Provider, store];
}
function providerError(name) {
  return new Error(`useStore must be used within the "${name}" store's Provider`);
}

/**
 * Gets the list of stores whose logs are being hidden.
 * @return {*|*[]}
 */
function getLogIgnores() {
  return JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get(_Cookie__WEBPACK_IMPORTED_MODULE_2__["default"].log_ignores) || '[]');
}

/**
 * Hides logging for a stores actions in the console.
 * @param {string} store - the store name to hide logs for.
 */
function ignore(store) {
  const filters = getLogIgnores();
  if (!filters.includes(store)) {
    filters.push(store);
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default().set(_Cookie__WEBPACK_IMPORTED_MODULE_2__["default"].log_ignores, JSON.stringify(filters));
  }
  return getLogIgnores();
}

/**
 * Removes store from list of stores whose actions are hidden from the console.
 * @param {string} store - the store name
 */
function unignore(store) {
  const filters = getLogIgnores();
  _array__WEBPACK_IMPORTED_MODULE_7__.arrays.remove(filters, s => s === store);
  js_cookie__WEBPACK_IMPORTED_MODULE_1___default().set(_Cookie__WEBPACK_IMPORTED_MODULE_2__["default"].log_ignores, JSON.stringify(filters));
  return getLogIgnores();
}
(0,_object__WEBPACK_IMPORTED_MODULE_9__.namespace)('sn.store', {
  getLogIgnores,
  ignore,
  unignore,
  get: store => !store ? stores : stores[store]
});
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;