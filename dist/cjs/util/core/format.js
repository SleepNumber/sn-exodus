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

/***/ 168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timezone: () => (/* binding */ timezone)
/* harmony export */ });
/* unused harmony exports localUrl, qaUrl, stageUrl, prodUrl, isJestEnv, win, sn_globals, isProduction, isStaging, isQa, isDevelopment, isDevPage, isAdminPage, isTestEnv, isDebug, locale, attributes, css, styles, months, specials, keyCodes, spacing, timing, mime, headers, millisPerYear, ALERT_TYPES, ALERT_FLAVORS, Status, Direction, USER_SEGMENT, CheckoutStep, ZIndex, page_classes, page_selectors, timer, regex */
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

/***/ 981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFunc: () => (/* binding */ isFunc)
/* harmony export */ });
/* unused harmony exports lazy, compose, required, pipe, debounce, noop, identity, combineReducers, onEnter, onKey, cappedCallback, retry, createChainedFunction */
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
/* harmony export */   pad: () => (/* binding */ pad)
/* harmony export */ });
/* unused harmony exports isString, capitalize, titlecase, camelCase, camelToSnake, camelToKabob, pascalToSnake, snakeToPascal, mattressCase, optionize, deoptionize, dasherize, undasherize, repeat, wordCount, replaceAt, endsWith, firstWord, uuid, lazyId, bytes, pluralIf, pxToNum, truncate, asBool, removeSpecialCharacters, hash */
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
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   formats: () => (/* binding */ formats),
/* harmony export */   fromNow: () => (/* binding */ fromNow)
/* harmony export */ });
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
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;