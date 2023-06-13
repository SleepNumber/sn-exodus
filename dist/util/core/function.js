/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prop: () => (/* binding */ prop)
/* harmony export */ });
/* unused harmony exports setProp, namespace, values, reverse, shallowEqual, shrink, eq, has, isPlainObject, extend, type */
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
/* harmony export */   cappedCallback: () => (/* binding */ cappedCallback),
/* harmony export */   combineReducers: () => (/* binding */ combineReducers),
/* harmony export */   compose: () => (/* binding */ compose),
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   isFunc: () => (/* binding */ isFunc),
/* harmony export */   lazy: () => (/* binding */ lazy),
/* harmony export */   noop: () => (/* binding */ noop),
/* harmony export */   onEnter: () => (/* binding */ onEnter),
/* harmony export */   onKey: () => (/* binding */ onKey),
/* harmony export */   pipe: () => (/* binding */ pipe),
/* harmony export */   required: () => (/* binding */ required),
/* harmony export */   retry: () => (/* binding */ retry)
/* harmony export */ });
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
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;