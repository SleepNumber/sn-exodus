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
  static price_lists = new Cookie('plid');
  static promo_drawer = new Cookie('promo_drawer');
  static refresh_token = new Cookie('refresh_token');
  static request_names = new Cookie('request_names'); // Set by rails if user is missing names
  static session = new Cookie('_sleep_number_session');
  static sessions = new Cookie('sessions');
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

/***/ 168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   css: () => (/* binding */ css),
/* harmony export */   isDebug: () => (/* binding */ isDebug),
/* harmony export */   isJestEnv: () => (/* binding */ isJestEnv),
/* harmony export */   isProduction: () => (/* binding */ isProduction),
/* harmony export */   styles: () => (/* binding */ styles),
/* harmony export */   win: () => (/* binding */ win)
/* harmony export */ });
/* unused harmony exports localUrl, qaUrl, stageUrl, prodUrl, sn_globals, isStaging, isQa, isDevelopment, isDevPage, isAdminPage, isTestEnv, timezone, locale, attributes, months, specials, keyCodes, spacing, timing, mime, headers, millisPerYear, ALERT_TYPES, ALERT_FLAVORS, Status, Direction, USER_SEGMENT, CheckoutSteps, ZIndex, page_classes, page_selectors, timer, regex */
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
const isProduction = () => sn_globals.config.env === 'production';
const isStaging = () => sn_globals.config.env === 'staging';
const isQa = () => sn_globals.config.env === 'qa';
const isDevelopment = () => sn_globals.config.env === 'development';
const isDevPage = win?.location?.pathname?.startsWith('/dev/');
const isAdminPage = win?.top?.location?.href?.includes('/admin/') || win?.location?.pathname?.startsWith('/admin/');
const isTestEnv = sn_globals.config.env !== 'production';
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
    }
  },
  // window.localStorage fields
  local: {
    modals: {
      insider_appreciation_shown: 'insider_appreciation_shown',
      insider_signin_shown: 'insider_signin_shown',
      lead_compare_shown: 'lead_compare_shown',
      lead_compare_submitted: 'lead_compare_submitted',
      lead_modal_shown: 'lead_capture_shown',
      lead_modal_submitted: 'lead_capture_submitted',
      lead_modal_email_submitted: 'lead_capture_email_submitted',
      lead_capture_link: 'lead_capture_link',
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
class CheckoutSteps extends _enumify__WEBPACK_IMPORTED_MODULE_3__["default"] {
  static NotStarted = new CheckoutSteps({
    name: 'not_started'
  });
  static Login = new CheckoutSteps({
    name: 'login',
    next: () => CheckoutSteps.Shipping
  });
  static Shipping = new CheckoutSteps({
    name: 'shipping',
    next: () => CheckoutSteps.Delivery
  });
  static Delivery = new CheckoutSteps({
    name: 'delivery',
    next: () => CheckoutSteps.Payment
  });
  static Payment = new CheckoutSteps({
    name: 'payment',
    next: () => CheckoutSteps.Review
  });
  static Review = new CheckoutSteps({
    name: 'review',
    next: () => CheckoutSteps.Confirmation
  });
  static Confirmation = new CheckoutSteps({
    name: 'confirmation'
  });
  static _ = this.closeEnum();
  constructor(props) {
    super();
    this.next = props.next;
    this.name = props.name;
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
/* harmony export */   isFunc: () => (/* binding */ isFunc),
/* harmony export */   noop: () => (/* binding */ noop)
/* harmony export */ });
/* unused harmony exports lazy, compose, required, pipe, debounce, identity, combineReducers, onEnter, onKey, cappedCallback, retry, createChainedFunction */
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
/* harmony export */   camelCase: () => (/* binding */ camelCase),
/* harmony export */   isString: () => (/* binding */ isString)
/* harmony export */ });
/* unused harmony exports capitalize, titlecase, camelToSnake, camelToKabob, pascalToSnake, snakeToPascal, mattressCase, optionize, deoptionize, dasherize, undasherize, repeat, wordCount, pad, replaceAt, endsWith, firstWord, uuid, lazyId, bytes, pluralIf, pxToNum, truncate, asBool, removeSpecialCharacters, hash */
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
/* harmony export */   addClass: () => (/* binding */ addClass),
/* harmony export */   addListeners: () => (/* binding */ addListeners),
/* harmony export */   addTabindexToContent: () => (/* binding */ addTabindexToContent),
/* harmony export */   after: () => (/* binding */ after),
/* harmony export */   animate: () => (/* binding */ animate),
/* harmony export */   append: () => (/* binding */ append),
/* harmony export */   before: () => (/* binding */ before),
/* harmony export */   closest: () => (/* binding */ closest),
/* harmony export */   contains: () => (/* binding */ contains),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   css: () => (/* binding */ css),
/* harmony export */   fadeIn: () => (/* binding */ fadeIn),
/* harmony export */   fadeOut: () => (/* binding */ fadeOut),
/* harmony export */   findAncestor: () => (/* binding */ findAncestor),
/* harmony export */   findWithRetry: () => (/* binding */ findWithRetry),
/* harmony export */   focusFirstElement: () => (/* binding */ focusFirstElement),
/* harmony export */   focusSection: () => (/* binding */ focusSection),
/* harmony export */   gebi: () => (/* binding */ gebi),
/* harmony export */   getChildMeasurements: () => (/* binding */ getChildMeasurements),
/* harmony export */   getElement: () => (/* binding */ getElement),
/* harmony export */   getHiddenMeasurements: () => (/* binding */ getHiddenMeasurements),
/* harmony export */   getMeasurement: () => (/* binding */ getMeasurement),
/* harmony export */   hasClass: () => (/* binding */ hasClass),
/* harmony export */   height: () => (/* binding */ height),
/* harmony export */   hide: () => (/* binding */ hide),
/* harmony export */   html: () => (/* binding */ html),
/* harmony export */   index: () => (/* binding */ index),
/* harmony export */   is: () => (/* binding */ is),
/* harmony export */   isDisplayNone: () => (/* binding */ isDisplayNone),
/* harmony export */   isElement: () => (/* binding */ isElement),
/* harmony export */   isElementAboveViewport: () => (/* binding */ isElementAboveViewport),
/* harmony export */   isElementInViewport: () => (/* binding */ isElementInViewport),
/* harmony export */   isNotHidden: () => (/* binding */ isNotHidden),
/* harmony export */   next: () => (/* binding */ next),
/* harmony export */   nextAll: () => (/* binding */ nextAll),
/* harmony export */   offset: () => (/* binding */ offset),
/* harmony export */   outerHeight: () => (/* binding */ outerHeight),
/* harmony export */   outerWidth: () => (/* binding */ outerWidth),
/* harmony export */   position: () => (/* binding */ position),
/* harmony export */   prepend: () => (/* binding */ prepend),
/* harmony export */   prev: () => (/* binding */ prev),
/* harmony export */   prevAll: () => (/* binding */ prevAll),
/* harmony export */   qs: () => (/* binding */ qs),
/* harmony export */   qsa: () => (/* binding */ qsa),
/* harmony export */   ready: () => (/* binding */ ready),
/* harmony export */   remove: () => (/* binding */ remove),
/* harmony export */   removeClass: () => (/* binding */ removeClass),
/* harmony export */   removeListeners: () => (/* binding */ removeListeners),
/* harmony export */   scrollLeft: () => (/* binding */ scrollLeft),
/* harmony export */   scrollTop: () => (/* binding */ scrollTop),
/* harmony export */   show: () => (/* binding */ show),
/* harmony export */   siblings: () => (/* binding */ siblings),
/* harmony export */   text: () => (/* binding */ text),
/* harmony export */   toggle: () => (/* binding */ toggle),
/* harmony export */   toggleClass: () => (/* binding */ toggleClass),
/* harmony export */   trigger: () => (/* binding */ trigger),
/* harmony export */   width: () => (/* binding */ width)
/* harmony export */ });
/* harmony import */ var browser_or_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(192);
/* harmony import */ var browser_or_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(browser_or_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(168);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(813);
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(981);
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(203);
/* harmony import */ var _Deferred__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(292);







/* Utilities
   --------------------------------------------------------------- */

/** Returns true if this is a dom element */
function isElement(node) {
  return !!node?.nodeType;
}

/**
 * Returns target if it is an element or attempts to find it via query selector
 * @param {HTMLElement|string} target -
 *        the target element or a css selector to an element
 * @param {HTMLElement|string} [container] -
 *        an optional container to look inside when using a css selector as the
 *        target
 * @return {HTMLElement|null}
 */
function getElement(target, container) {
  if (target === window || isElement(target)) return target;
  const within = !container ? document : getElement(container);
  try {
    return within.querySelector(target) || null;
  } catch (err) {
    _logger__WEBPACK_IMPORTED_MODULE_2__["default"].error('Error getting element', 'target', target, 'container', container, err);
    return null;
  }
}

/**
 * Get element by id
 * @param {string} id - the id of the element to find
 * @returns {HTMLElement|undefined}
 */
function gebi(id) {
  return document.getElementById(id);
}

/**
 * Returns selected elements as an array
 * If two arguments, the first one is assumed to be the node to query.
 * @return {HTMLElement[]}
 */
function qsa() {
  const node = arguments.length === 2 ? arguments.length <= 0 ? undefined : arguments[0] : document;
  const selector = arguments.length === 2 ? arguments.length <= 1 ? undefined : arguments[1] : arguments.length <= 0 ? undefined : arguments[0];
  return Array.from(node.querySelectorAll(selector));
}

/**
 * Find and element by query selector
 * If two arguments, the first one is assumed to be the node to query.
 * @return {HTMLElement|undefined}
 */
function qs() {
  const node = arguments.length === 2 ? arguments.length <= 0 ? undefined : arguments[0] : document;
  const selector = arguments.length === 2 ? arguments.length <= 1 ? undefined : arguments[1] : arguments.length <= 0 ? undefined : arguments[0];
  return node.querySelector(selector);
}

/**
 * Find the closest ancestor matching the selector
 * Replaces $(selector).closest
 * @return {HTMLElement|undefined}
 */
function closest(target, selector) {
  if (!target) return null;
  let element = getElement(target);
  const matchesSelector = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.msMatchesSelector;
  while (element) {
    if (matchesSelector.call(element, selector)) return element;
    element = element.parentElement;
  }
  return null;
}

/**
 * Like `snq.closest()` except a function is used instead of selectors.
 * Finds the closest ancestor that passes the predicate function.
 * @param {string|HTMLElement} target - the starting point node
 * @param {function} predicate - the predicate function
 * @return {HTMLElement|null}
 */
function findAncestor(target, predicate) {
  let element = getElement(target)?.parentElement;
  if (!isElement(element)) return null;
  while (element) {
    if (predicate(element)) return element;
    element = element.parentElement;
  }
  return null;
}

/** Add a class to an element */
function addClass(target) {
  let className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  const classes = className.trim().split(' ');
  const element = getElement(target);
  classes.forEach(c => {
    if (element) element.classList.add(c);
  });
  return element;
}

/** Remove a class from an element */
function removeClass(target) {
  let className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  const classes = className.trim().split(' ');
  const element = getElement(target);
  classes.forEach(c => {
    if (element) element.classList.remove(c);
  });
  return element;
}

/** Add an element after a target */
function after(target, element) {
  getElement(target).insertAdjacentElement('afterend', element);
}

/** Add an element before a target */
function before(target, element) {
  getElement(target).insertAdjacentElement('beforebegin', element);
}

/** Append an element to a parent */
function append(target, element) {
  getElement(target).appendChild(element);
}

/** Prepend an element to a parent */
function prepend(target, element) {
  const parent = getElement(target);
  const elem = (0,_string__WEBPACK_IMPORTED_MODULE_3__.isString)(element) ? create(element) : element;
  parent.insertBefore(elem, parent.firstChild);
}

/** Is the target a child of the parent */
function contains(parent, child) {
  const p = getElement(parent);
  const c = getElement(child);
  return p !== c && p.contains(c);
}

/** Remove an element */
function remove(target) {
  const element = getElement(target);
  element.parentNode.removeChild(element);
}

/**
 * Get or set a css property on an element
 * @param {string|node} target - the target element or css selector to it
 * @param {string} ruleName - the js version (camelCase) of the css property name
 * @param {string} [value] - if provide, the css property is set to this value
 * @return {string|node} the node when setting a value, the value when getting a value
 */
function css(target, ruleName, value) {
  const rule = (0,_string__WEBPACK_IMPORTED_MODULE_3__.camelCase)(ruleName);
  const element = getElement(target);
  if (typeof value !== 'undefined') {
    // Set a css value
    element.style[rule] = value;
    return element;
  }

  // get a css value
  const win = element.ownerDocument.defaultView;
  return win.getComputedStyle(element)[rule];
}

/**
 * Get or set the text content of an element
 * @param {string|node} target - the target element or css selector to it
 * @param {string} [value] - if provide, the text context is set to this value
 * @return {string|node} the node when the text content is being set, otherwise the text content
 */
function text(target, value) {
  const element = getElement(target);
  if (typeof value === 'undefined') return element.textContent || '';
  element.textContent = value;
  return element;
}

/**
 * Get or set the inner html of an element
 * Replaces $('.foo').html
 * @param {string|node} target - the target element or css selector to it
 * @param {string} [value] - if provide, the inner html is set to this value
 * @return {string|node} the node when the inner html is being set, otherwise the text content
 */
function html(target, value) {
  const element = getElement(target);
  if (typeof value === 'undefined') return element.innerHTML;
  element.innerHTML = value;
  return element;
}

/**
 * Create an html document fragment from html text.
 * Replaces $('<div class="foo">bar</div>');
 * @param {string} html - the html text, i.e. "<div>foo</div>" or "<button>"
 * @return {DocumentFragment|Element} the element if only one was created or the fragment
 */
function create(html) {
  const range = document.createRange();
  const parse = range.createContextualFragment.bind(range);
  const fragment = parse(html);
  if (fragment.childElementCount === 1) return fragment.childNodes[0];
  return fragment;
}

/** Return the text content of an element */
function hasClass(target, className) {
  const elem = getElement(target);
  return elem && elem.classList.contains(className);
}

/**
 * Adds or removes a class from an element
 * @param {string|node} target
 * @param {string} className
 * @param {boolean} [condition] - if present class is added/removed based on this
 */
function toggleClass(target) {
  let className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  let condition = arguments.length > 2 ? arguments[2] : undefined;
  const hasCond = typeof condition !== 'undefined';
  const element = getElement(target);
  const classes = className.trim().split(' ');
  classes.forEach(c => {
    if (hasCond) {
      if (condition) element?.classList?.add(c);else element?.classList?.remove(c);
    } else {
      element?.classList?.toggle(c);
    }
  });
  return element;
}

/** Return the index of an element within it's parents child list */
function index(target) {
  let index = -1;
  const element = getElement(target);
  if (!element) return index;
  Array.from(getElement(element.parentElement).children).forEach((c, i) => {
    if (c === element) index = i;
  });
  return index;
}

/** Returns true if the target matches the selector */
function is(target, selector) {
  const element = getElement(target);
  return (element.matches || element.matchesSelector || element.msMatchesSelector || element.mozMatchesSelector || element.webkitMatchesSelector || element.oMatchesSelector).call(element, selector);
}

/** Returns the element immediately after this one */
function next(target) {
  return getElement(target).nextElementSibling;
}

/** Returns all elements after this one */
function nextAll(elem, filter) {
  const siblings = [];
  let nextElem = elem.parentNode.firstChild;
  // eslint-disable-next-line no-cond-assign
  do {
    // eslint-disable-next-line no-continue
    if (nextElem.nodeType === 3) continue; // ignore text nodes
    // eslint-disable-next-line no-continue
    if (nextElem === elem) continue; // ignore elem of target
    if (nextElem === elem.nextElementSibling) {
      if (!filter || filter(elem)) {
        siblings.push(nextElem);
        elem = nextElem;
      }
    }
  } while (nextElem = nextElem.nextSibling);
  return siblings;
}

/** Returns the element immediately before this one */
function prev(target) {
  return getElement(target).previousElementSibling;
}

/** Returns all elements before this one */
function prevAll(elem, filter) {
  const siblings = [];
  let current = elem;
  // eslint-disable-next-line no-cond-assign
  while (current = current.previousSibling) {
    // eslint-disable-next-line no-continue
    if (current.nodeType === 3) continue; // ignore text nodes
    if (!filter || filter(current)) siblings.push(current);
  }
  return siblings;
}

/** Returns the sibling elements of an element */
function siblings(target) {
  const element = getElement(target);
  return Array.from(element.parentNode.children).filter(el => el !== element);
}

/**
 * Returns the top and left offsets of this element relative to the document
 * Replaces $.offset()
 * @param {HTMLElement|string} target
 */
function offset(target) {
  const node = getElement(target);
  const rect = node.getBoundingClientRect();
  return {
    node,
    top: rect.top + window.pageYOffset - document.documentElement.clientTop,
    left: rect.left + window.pageXOffset - document.documentElement.clientLeft
  };
}

/** Replaces $(window).scrollTop() */
function scrollTop() {
  let target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants__WEBPACK_IMPORTED_MODULE_1__.win;
  if (!browser_or_node__WEBPACK_IMPORTED_MODULE_0__.isBrowser) return 0; // Make safe for SSR
  if (target === window) {
    return (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
  }
  const container = getElement(target);
  return container.scrollTop;
}

/** Replaces $(window).scrollLeft() */
function scrollLeft() {
  let target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  if (target === window) {
    return (window.pageXOffset || document.documentElement.scrollLeft) - (document.documentElement.clientLeft || 0);
  }
  const container = getElement(target);
  return container.scrollLeft;
}

/**
 * Returns the outer height of the element
 * @param {string|node} target - the element to measure or css selector to it
 * @param {boolean} [includeMargin=false] - if true, measurement will include margin
 * @return {number}
 */
function outerHeight(target) {
  let includeMargin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const element = getElement(target);
  if (!element) return 0;
  let height = element.offsetHeight;
  if (!includeMargin) return height;
  const style = getComputedStyle(element);
  height += parseInt(style.marginTop, 10) + parseInt(style.marginBottom, 10);
  return height;
}

/**
 * Returns the outer width of the element
 * @param {string|node} target - the element to measure
 * @param {boolean} [includeMargin=false] - if true, measurement will include margin
 * @return {number}
 */
function outerWidth(target) {
  let includeMargin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const element = getElement(target);
  if (!element) return 0;
  let width = element.offsetWidth;
  if (!includeMargin) return width;
  const style = getComputedStyle(element);
  width += parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10);
  return width;
}

/** Return the offset position of this element */
function position(target) {
  const element = getElement(target);
  return {
    top: element.offsetTop,
    left: element.offsetLeft
  };
}

/**
 * Get or set the height of an element
 * @param {string|node} target - the target element or css selector to it
 * @param {function|string|number} [value] - function, string, or number to set the height to
 * @returns {number|node} the height when not setting a value, the element when setting a value
 */
function height(target, value) {
  const element = getElement(target);
  if (!value) return element.offsetHeight;
  const val = typeof value === 'function' ? value() : value;
  if (typeof val === 'string') element.style.height = val;else element.style.height = `${val}px`;
  return element;
}

/**
 * Get or set the width of an element
 * @param {string|node} target - the element to adjust
 * @param {function|string|number} [value] - function, string, or number to set the width to
 * @returns {number|node} the width when not setting a value, the element when setting a value
 */
function width(target, value) {
  const element = getElement(target);
  if (!value) return element.offsetWidth;
  const val = typeof value === 'function' ? value() : value;
  if (typeof val === 'string') element.style.width = val;else element.style.width = `${val}px`;
  return element;
}

/**
 * Returns the node plus the left, right, width, and height measurements of an element
 * @param {string|node} target - the element to measure
 * @return {{
 *   node: node,
 *   left: number,
 *   width: number,
 *   right: number,
 *   height: number
 * }}
 */
function getMeasurement(target) {
  const node = getElement(target);
  return {
    node,
    left: node.offsetLeft,
    right: node.offsetLeft + node.clientWidth,
    width: node.clientWidth,
    height: node.clientHeight
  };
}

/**
 * Returns the measurements of all children in a container.
 * @param {string|node} target - the element whose children we are measuring
 * @return {[{
 *   index: number,
 *   node: node,
 *   left: number,
 *   width: number,
 *   right: number,
 *   height: number
 * }]}
 */
function getChildMeasurements(target) {
  const container = getElement(target);
  if (!container?.childNodes) return {};
  return Array.from(container.childNodes).map((node, i) => ({
    index: i,
    ...getMeasurement(node)
  }));
}

/**
 * Return the measurements of a hidden element as a promise by cloning it and
 * measuring it in an offscreen container.
 * @param {HTMLElement} node - the currently hidden node to clone
 * @param {string} [selector] - optional selector to the child node to measure
 * @param {boolean} queryAll - return all query selector measurements
 * @return Promise<{ height: string, width: string, outerHeight: string, outerWidth: string }>
 */
function getHiddenMeasurements(node, selector) {
  let queryAll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  const offscreen = document.createElement('div');
  offscreen.style.position = 'absolute';
  offscreen.style.top = '-9999px';
  offscreen.style.left = '-9999px';
  offscreen.ariaHidden = 'true';
  document.body.appendChild(offscreen);
  const clone = node.cloneNode(true);
  offscreen.style.setProperty('width', `${outerWidth(node, true)}px`);
  offscreen.appendChild(clone);

  // Need to do this in a promise in order to wait for images to load/render
  return new Promise(resolve => {
    setTimeout(() => {
      const targets = typeof selector !== 'undefined' ? qsa(clone, selector) : clone;
      const measurements = targets.map(target => {
        const result = {
          height: '',
          width: '',
          outerHeight: '',
          outerWidth: ''
        };
        result.width = width(target);
        result.height = height(target);
        result.outerWidth = outerWidth(target, true);
        result.outerHeight = outerHeight(target, true);
        return result;
      });
      document.body.removeChild(offscreen);
      const resolved = queryAll ? measurements : measurements[0];
      resolve(resolved);
    }, 200);
  });
}

/**
 * Returns true if the element is in the viewport.
 * @param {node} elem - the element in question
 * @param {number} [offset] - optional offset, i.e. use to determine half in viewport
 * @return {boolean}
 */
function isElementInViewport(elem) {
  let offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Handle elements that are wrapped by jQuery
  const el = getElement(elem);
  if (!el || !el.getBoundingClientRect) return false;
  const rect = el.getBoundingClientRect();
  return rect.top + offset >= 0 && rect.left >= 0 && rect.bottom - offset <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

/** Return `true` if the element is above the current top of the viewport */
function isElementAboveViewport(elem) {
  const el = getElement(elem);
  if (!el || !el.getBoundingClientRect) return false;
  const rect = el.getBoundingClientRect();
  return rect.bottom < 0;
}

/** Find and element, retrying multiple times. */
function findWithRetry(_ref, dfd) {
  let {
    target,
    retries = 3,
    retryDelayMs = 100
  } = _ref;
  const deferred = dfd || new _Deferred__WEBPACK_IMPORTED_MODULE_4__["default"]();
  const element = getElement(target);
  if (element) {
    deferred.resolve(element);
  } else if (retries > 0) {
    setTimeout(() => {
      findWithRetry({
        target,
        retries: retries - 1,
        retryDelayMs
      }, deferred);
    }, retryDelayMs);
  } else {
    deferred.reject(`Failed to find element '${target}'`);
  }
  return deferred;
}
function addTabindexToContent() {
  const contentSelectors = ['.tippy-top', 'header', '.content'];
  const tabableElements = ['a[href]', 'button:not([disabled])', 'area[href]'];
  qsa(contentSelectors.map(s => tabableElements.map(e => `${s} ${e}`)).join(',')).forEach(el => {
    if (!el.getAttribute('tabindex')) el.setAttribute('tabindex', '0');
  });
}

/**
 * Attempt to focus a section of the page, either the target itself or the
 * first visible header inside the section.
 * @param {string|HTMLElement} target - the section to focus
 */
function focusSection(target) {
  if (!target) return;
  const el = getElement(target);
  if (el?.hasAttribute('tabindex')) {
    // Focus this element
    el.focus();
  } else {
    // Focus the first visible header inside element
    const headers = qsa(el, 'h2, h3, h4');
    const filtered = headers.filter(el => el.offsetParent !== null); // remove hidden elements
    const header = filtered?.[0];
    if (header) header.focus();
  }
}

/**
 * Find the first focusable element within the selector, and give it focus
 * @param {node|string} selector
 */
function focusFirstElement() {
  let target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.page-body';
  const container = getElement(target);
  const focusable = qsa(container, 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  const filtered = focusable.filter(el => el.offsetParent !== null); // remove hidden elements
  const firstFocusable = filtered?.[0] || null;
  if (!firstFocusable) return;
  firstFocusable.focus();
}

/** Return true if this element is visible, by checking offset parents up the tree */
function isNotHidden(target) {
  const el = getElement(target);
  if (!el) return false;
  let current = el.offsetParent;
  if (!current) return false;
  while (current) {
    if (current === document.body) break;
    if (!current.offsetParent) return false;
    current = current.offsetParent;
  }
  return true;
}

/* Events
   --------------------------------------------------------------- */

/**
 * @typedef SnListener
 * @property {function} cb - the event handler callback function
 * @property {string} filter - css selector for event target filters i.e. 'input, .btn'
 * @property {*} opts - any options passed to `addEventHandler`
 * @property {boolean} log - should this particular event be logged
 */

/**
 * Add a set of event listeners to a dom element.
 * A listener can be a function or an array of [function, options object].
 * @param {node|string} target - the dom element or css selector to add listeners to
 * @param {Object.<string, function|SnListener>} listeners - events keyed to listener functions
 * @param {boolean} log - if true, events are logged to the console
 *
 * Examples:
 * // Single with logging
 * const remove = snq.addListeners('#foo', { click: myClickHandler }, true);
 * remove();
 *
 * // Multiple with logging
 * const remove = snq.addListeners(elem, {
 *   click: myClickHandler,
 *   touch: myTouchHandler,
 * }, true);
 * remove();
 *
 * // With specific event listener options and per event logging
 * const remove = snq.addListeners(window, {
 *   click: {
 *     cb: myClickHandler,
 *     log: true,
 *     opts: { passive: false, once: true }
 *   }
 * });
 * remove();
 *
 * // With filtering, only listen for clicks on inputs or .btn elements
 * const remove = snq.addListeners(document, {
 *   click: {
 *     cb: myClickHandler,
 *     filter: 'input, .btn'
 *   }
 * });
 * remove();
 */
function addListeners(target, listeners) {
  let log = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  const element = getElement(target);
  const grouper = _logger__WEBPACK_IMPORTED_MODULE_2__["default"].groupCollapsed || _logger__WEBPACK_IMPORTED_MODULE_2__["default"].info;
  const groupend = _logger__WEBPACK_IMPORTED_MODULE_2__["default"].groupEnd || _function__WEBPACK_IMPORTED_MODULE_5__.noop;
  const {
    label,
    orange
  } = _constants__WEBPACK_IMPORTED_MODULE_1__.styles;
  const consoleStyles = [`${label}`, `${orange}`, `${label}`];
  const removes = [];
  Object.entries(listeners).forEach(_ref2 => {
    let [event, listener] = _ref2;
    const hasOptions = typeof listener === 'object';
    const cb = hasOptions ? listener.cb : listener;
    const options = hasOptions ? listener.opts : undefined;
    const logThis = hasOptions ? listener.log : false;
    const filters = hasOptions ? listener.filter : undefined;
    const handler = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      const [e] = args;
      if (!filters || !!closest(e.target, filters)) {
        if (log || logThis) {
          const msg = `%cFiring listener for "%c${event}%c"`;
          grouper.apply(console, [msg, ...consoleStyles]);
          _logger__WEBPACK_IMPORTED_MODULE_2__["default"].info(`%cCallback`, `${_constants__WEBPACK_IMPORTED_MODULE_1__.css.orange}`, cb);
          _logger__WEBPACK_IMPORTED_MODULE_2__["default"].info(`%cEvent`, `${_constants__WEBPACK_IMPORTED_MODULE_1__.css.orange}`, ...args);
          groupend();
        }
        cb(...args);
      }
    };
    if (event.trim().includes(' ')) {
      // register for multiple events
      const events = event.trim().split(' ');
      events.forEach(e => {
        element.addEventListener(e, handler, options);
        // Add the args we need to call `removeEventListener`
        removes.push([e, handler, options].filter(Boolean));
      });
    } else {
      // single event
      element.addEventListener(event, handler, options);
      // Add the args we need to call `removeEventListener`
      removes.push([event, handler, options].filter(Boolean));
    }
  });
  return function remove() {
    removes.forEach(r => element.removeEventListener(...r));
  };
}

/**
 * Remove a set of event listeners to a dom element
 * @param {Node} el - the dom element to remove listeners from
 * @param {Object.<string, function>} listeners - events keyed to listener functions
 */
function removeListeners(el, listeners) {
  Object.entries(listeners).forEach(_ref3 => {
    let [event, listener] = _ref3;
    el.removeEventListener(event, listener);
  });
}

/** Replaces $(document).ready(eventHandler); and the shorthand $(eventHandler); */
function ready(callback) {
  if (!browser_or_node__WEBPACK_IMPORTED_MODULE_0__.isBrowser) return;
  if (document.readyState !== 'loading') callback();else document.addEventListener('DOMContentLoaded', callback);
}

/**
 * Trigger an event on a target
 * @param {string|node} target - target of event
 * @param {string} type - the event type
 * @param {*} [data] - optional data to pass along with the event
 */
function trigger(_ref4) {
  let {
    target,
    type,
    data,
    custom = false
  } = _ref4;
  let event;
  const element = getElement(target);
  if (custom) {
    // Build custom event
    if (window.CustomEvent && typeof window.CustomEvent === 'function') {
      event = new CustomEvent(type, data ? {
        detail: data
      } : undefined);
    } else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(type, true, true, data || undefined);
    }
  } else {
    // Build native event
    event = document.createEvent('HTMLEvents');
    event.initEvent(type, true, false);
  }
  element.dispatchEvent(event);
}

/* Animation
   --------------------------------------------------------------- */
/** Replaces $el.animate({ 'height', '40px' }, 300ms); */
function animate(target, params, ms) {
  const element = getElement(target);
  element.style.transition = `all ${ms}ms`;
  Object.keys(params).forEach(key => element.style[key] = params[key]);
}

/** Replaces $el.hide() */
function hide(target) {
  getElement(target).style.display = 'none';
}

/** Replaces $el.show() */
function show(target) {
  getElement(target).style.display = '';
}

/** Return true if this element is current display:none */
function isDisplayNone(elem) {
  if (!isElement(elem)) return false;
  return getComputedStyle(elem).display === 'none';
}

/** Replaces $el.toggle() */
function toggle(target) {
  const element = getElement(target);
  const win = element.ownerDocument.defaultView;
  if (win.getComputedStyle(element, null).display === 'none') {
    element.style.display =
    // eslint-disable-next-line no-bitwise
    '' | 'inline' | 'inline-block' | 'inline-table' | 'block';
  } else {
    element.style.display = 'none';
  }
}

/** Replaces $el.fadeOut(3000) */
function fadeOut(target, ms) {
  const element = getElement(target);
  if (ms) {
    const originalTrans = element.style.transition || '';
    element.style.opacity = '1';
    element.style.transition = `opacity ${ms}ms`;
    const end = () => {
      element.style.display = 'none';
      element.style.transition = originalTrans;
    };
    element.addEventListener('transitionend', end, {
      once: true,
      capture: false
    });
  }
  element.style.opacity = '0';
}

/** Replaces $el.fadeIn(3000) */
function fadeIn(target, ms) {
  const element = getElement(target);
  element.style.opacity = '0';
  if (element.style.display === 'none') element.style.display = '';
  if (ms) {
    const originalTrans = element.style.transition || '';
    element.style.opacity = '0.01';
    element.style.transition = `opacity ${ms}ms`;
    const end = () => {
      element.style.opacity = '';
      element.style.transition = originalTrans;
    };
    element.addEventListener('transitionend', end, {
      once: true,
      capture: false
    });
    setTimeout(() => element.style.opacity = '1', 1);
  } else {
    element.style.opacity = '1';
  }
}
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;