/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 5981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   required: () => (/* binding */ required)
/* harmony export */ });
/* unused harmony exports lazy, compose, isFunc, pipe, debounce, noop, combineReducers, onEnter, onKey, cappedCallback, retry */
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
  return typeof prop(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1]) === 'function';
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

/***/ }),

/***/ 7814:
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

/***/ }),

/***/ 1144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   intersection: () => (/* binding */ intersection),
/* harmony export */   isSuperset: () => (/* binding */ isSuperset)
/* harmony export */ });
/* unused harmony exports union, symmetricDifference, difference */
/* eslint-disable no-restricted-syntax */
/**
 * Util module to house basic Set operations.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#Implementing_basic_set_operations
 */

/**
 * Returns true if set is a superset of the subset.
 * Example:
 * <code>
 * let setA = new Set([1, 2, 3, 4]);
 * let setB = new Set([2, 3]);
 *
 * isSuperset(setA, setB); // => true
 * </code>
 * @param {Set|Array} set
 * @param {Set|Array} subset
 * @returns {boolean}
 */
function isSuperset(set, subset) {
  const a = Array.isArray(set) ? new Set(set) : set;
  const b = Array.isArray(subset) ? new Set(subset) : subset;
  for (const elem of b) {
    if (!a.has(elem)) {
      return false;
    }
  }
  return true;
}

/**
 * Returns the union of the two sets.
 * Example:
 * <code>
 * let setA = new Set([1, 2, 3, 4]);
 * let setB = new Set([3, 4, 5, 6]);
 *
 * union(setA, setB); // => Set [1, 2, 3, 4, 5, 6]
 * </code>
 * @param {Set|Array} setA
 * @param {Set|Array} setB
 * @returns {Set<any>}
 */
function union(setA, setB) {
  const a = Array.isArray(setA) ? new Set(setA) : setA;
  const b = Array.isArray(setB) ? new Set(setB) : setB;
  const setUnion = new Set(a);
  for (const elem of b) {
    setUnion.add(elem);
  }
  return setUnion;
}

/**
 * Returns the intersection of the two sets.
 * Example:
 * <code>
 * let setA = new Set([1, 2, 3, 4]);
 * let setB = new Set([3, 4, 5, 6]);
 *
 * intersection(setA, setB); // => Set [3, 4]
 * </code>
 * @param {Set|Array} setA
 * @param {Set|Array} setB
 * @returns {Set<any>}
 */
function intersection(setA, setB) {
  const a = Array.isArray(setA) ? new Set(setA) : setA;
  const b = Array.isArray(setB) ? new Set(setB) : setB;
  const setIntersection = new Set();
  for (const elem of b) {
    if (a.has(elem)) {
      setIntersection.add(elem);
    }
  }
  return setIntersection;
}

/**
 * Returns the symmetric difference of the two sets.
 * Example:
 * <code>
 * let setA = new Set([1, 2, 3, 4]);
 * let setB = new Set([3, 4, 5, 6]);
 *
 * symmetricDifference(setA, setB); // => Set [1, 2, 5, 6]
 * </code>
 * @param {Set|Array} setA
 * @param {Set|Array} setB
 * @returns {Set<any>}
 */
function symmetricDifference(setA, setB) {
  const a = Array.isArray(setA) ? new Set(setA) : setA;
  const b = Array.isArray(setB) ? new Set(setB) : setB;
  const setDifference = new Set(a);
  for (const elem of b) {
    if (setDifference.has(elem)) {
      setDifference.delete(elem);
    } else {
      setDifference.add(elem);
    }
  }
  return setDifference;
}

/**
 * Returns the symmetric difference of the two sets.
 * Example:
 * <code>
 * let setA = new Set([1, 2, 3, 4]);
 * let setB = new Set([3, 4, 5, 6]);
 *
 * difference(setA, setB); // => Set [1, 2]
 * </code>
 * @param {Set|Array} setA
 * @param {Set|Array} setB
 * @returns {Set<any>}
 */
function difference(setA, setB) {
  const a = Array.isArray(setA) ? new Set(setA) : setA;
  const b = Array.isArray(setB) ? new Set(setB) : setB;
  const setDifference = new Set(a);
  for (const elem of b) {
    setDifference.delete(elem);
  }
  return setDifference;
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
/* harmony export */   arrays: () => (/* binding */ arrays),
/* harmony export */   asArray: () => (/* binding */ asArray),
/* harmony export */   entityTable: () => (/* binding */ entityTable),
/* harmony export */   includesAll: () => (/* binding */ includesAll),
/* harmony export */   includesAny: () => (/* binding */ includesAny),
/* harmony export */   reducers: () => (/* binding */ reducers),
/* harmony export */   safeArray: () => (/* binding */ safeArray),
/* harmony export */   sorters: () => (/* binding */ sorters)
/* harmony export */ });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7814);
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5981);
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1144);
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
  return (0,_set__WEBPACK_IMPORTED_MODULE_2__.isSuperset)(new Set(arrA), new Set(arrB));
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
  return (0,_set__WEBPACK_IMPORTED_MODULE_2__.intersection)(new Set(arrA), new Set(arrB)).size > 0;
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
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;