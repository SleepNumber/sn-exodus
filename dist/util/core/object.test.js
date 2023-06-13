/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 7814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* binding */ extend),
/* harmony export */   isPlainObject: () => (/* binding */ isPlainObject),
/* harmony export */   namespace: () => (/* binding */ namespace),
/* harmony export */   prop: () => (/* binding */ prop),
/* harmony export */   setProp: () => (/* binding */ setProp),
/* harmony export */   type: () => (/* binding */ type)
/* harmony export */ });
/* unused harmony exports values, reverse, shallowEqual, shrink, eq, has */
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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/util/core/object.js
var object = __webpack_require__(7814);
;// CONCATENATED MODULE: ./src/__tests__/data/products/i8-360.json
const i8_360_namespaceObject = JSON.parse('{"id":"i8-360","bazaar_voice_id":"i8-360","name":"i8","branded_name":"i8 smart bed","type":"mattress","description":"You have to feel the luxurious, soothing comfort and pressure relief","long_description":"A wonderful 6\\" combination of pressure-relieving comfort layers with a temperature balancing sleep surface for comforting, soothing sleep.","positioning_statement":"You have to feel the luxurious, soothing comfort and pressure relief","disclaimer":"Furniture sold separately. Prices higher in AK and HI","slug":"i8","content_badge_message":"New","packaged_products":[],"merchant_message":null,"browser_title":"i8","meta_description":"The i8 360 Smart Bed has maximum pressure relief and soothing comfort to ensure that you sleep comfortably all night long. Discover the difference of a Sleep Number Mattress today.","recommended":[],"template":"generic","customizations":null,"tags":[],"details":{"Comfort Layer":["6"],"Mattress Height":["12"],"Pressure Relief":["10"],"Support":["8"],"Cooling":["8"],"Brand":["Sleep Number"]},"digital":false,"swatches":{},"filters":{"Size":["Twin Long","Full","Queen","King","Split King","FlexTop King","California King","Split California King","FlexTop California King"]},"purchasable":true,"inventory_status":"","comfort_guide_details":{"Comfort Layer":["6"],"Mattress Height":["12"],"Pressure Relief":["10"],"Support":["8"],"Cooling":["8"]},"features":[],"variants":[{"id":"5eaad5ec67be5a22c4885636","active":true,"details":{"Size":["Twin Long"]},"name":"i8 360 Bed Twin XL","regular":{"cents":314900,"currency_iso":"USD"},"sale":{"cents":314900,"currency_iso":"USD"},"sku":"XZI8","promo_badge_message":"50% OFF"},{"id":"5eaad5ec67be5a22c4885637","active":true,"details":{"Size":["Full"]},"name":"i8 360 Bed Full","regular":{"cents":342400,"currency_iso":"USD"},"sale":{"cents":342400,"currency_iso":"USD"},"sku":"FZI8","promo_badge_message":"50% OFF"},{"id":"5eaad5ec67be5a22c4885638","active":true,"details":{"Size":["Queen"]},"name":"i8 360 Bed Queen","regular":{"cents":359900,"currency_iso":"USD"},"sale":{"cents":359900,"currency_iso":"USD"},"sku":"QZI8","promo_badge_message":"50% OFF"},{"id":"5eaad5ec67be5a22c4885639","active":true,"details":{"Size":["King"]},"name":"i8 360 Bed King","regular":{"cents":429900,"currency_iso":"USD"},"sale":{"cents":429900,"currency_iso":"USD"},"sku":"KZI8","promo_badge_message":"50% OFF"},{"id":"5eaad5ec67be5a22c488563a","active":true,"details":{"Size":["Split King"]},"name":"i8 360 Bed Split King","regular":{"cents":489900,"currency_iso":"USD"},"sale":{"cents":489900,"currency_iso":"USD"},"sku":"SZI8","promo_badge_message":"50% OFF"},{"id":"5eaad5ec67be5a22c488563b","active":true,"details":{"Size":["FlexTop King"]},"name":"i8 360 Bed FlexTop King","regular":{"cents":489900,"currency_iso":"USD"},"sale":{"cents":489900,"currency_iso":"USD"},"sku":"AZI8","promo_badge_message":"50% OFF"},{"id":"5eaad5ec67be5a22c488563c","active":true,"details":{"Size":["California King"]},"name":"i8 360 Bed California King","regular":{"cents":429900,"currency_iso":"USD"},"sale":{"cents":429900,"currency_iso":"USD"},"sku":"CZI8","promo_badge_message":"50% OFF"},{"id":"5eaad5ec67be5a22c488563d","active":true,"details":{"Size":["Split California King"]},"name":"i8 360 Bed Split California King","regular":{"cents":489900,"currency_iso":"USD"},"sale":{"cents":489900,"currency_iso":"USD"},"sku":"PZI8","promo_badge_message":"50% OFF"},{"id":"5eaad5ec67be5a22c488563e","active":true,"details":{"Size":["FlexTop California King"]},"name":"i8 360 Bed FlexTop California King","regular":{"cents":489900,"currency_iso":"USD"},"sale":{"cents":314900,"currency_iso":"USD"},"sku":"BZI8","promo_badge_message":"50% OFF"}],"original_max_price":{"cents":489900,"currency_iso":"USD"},"original_min_price":{"cents":314900,"currency_iso":"USD"},"sell_max_price":{"cents":489900,"currency_iso":"USD"},"sell_min_price":{"cents":314900,"currency_iso":"USD"},"images":[{"id":"5eaad61667be5a22c4885784","options":{},"position":0,"primary":true,"url":"http://res.cloudinary.com/sleepnumber/image/upload/f_auto,q_auto:eco/v1/workarea/catalog/product_images/i8/upt_2x","tags":["upt","2x"]},{"id":"5eaad61667be5a22c4885785","options":{},"position":1,"primary":false,"url":"http://res.cloudinary.com/sleepnumber/image/upload/f_auto,q_auto:eco/v1/workarea/catalog/product_images/i8/upt_split_2x","tags":["2x","split","upt"]},{"id":"5eaad61667be5a22c4885786","options":{},"position":2,"primary":false,"url":"http://res.cloudinary.com/sleepnumber/image/upload/f_auto,q_auto:eco/v1/workarea/catalog/product_images/i8/upt_flextop_2x","tags":["2x","flextop","upt"]},{"id":"5eaad61667be5a22c4885787","options":{},"position":3,"primary":false,"url":"http://res.cloudinary.com/sleepnumber/image/upload/f_auto,q_auto:eco/v1/workarea/catalog/product_images/i8/upt_flextop","tags":["upt","flextop"]},{"id":"5eaad61667be5a22c4885788","options":{},"position":4,"primary":false,"url":"http://res.cloudinary.com/sleepnumber/image/upload/f_auto,q_auto:eco/v1/workarea/catalog/product_images/i8/upt","tags":["upt"]},{"id":"5eaad61667be5a22c4885789","options":{},"position":5,"primary":false,"url":"http://res.cloudinary.com/sleepnumber/image/upload/f_auto,q_auto:eco/v1/workarea/catalog/product_images/i8/upt_split","tags":["split","upt"]},{"id":"5eaad61667be5a22c488578a","options":{},"position":6,"primary":false,"url":"http://res.cloudinary.com/sleepnumber/image/upload/f_auto,q_auto:eco/v1/workarea/catalog/product_images/i8/zoom-2-mobile","tags":["gallery","mobile"]},{"id":"5eaad61667be5a22c488578b","options":{},"position":7,"primary":false,"url":"http://res.cloudinary.com/sleepnumber/image/upload/f_auto,q_auto:eco/v1/workarea/catalog/product_images/i8/zoom-2","tags":["gallery","desktop"]},{"id":"5eaad61667be5a22c488578c","options":{},"position":8,"primary":false,"url":"http://res.cloudinary.com/sleepnumber/image/upload/f_auto,q_auto:eco/v1/workarea/catalog/product_images/i8/postcard-tablet","tags":["postcard","tablet"]},{"id":"5eaad61667be5a22c488578d","options":{},"position":9,"primary":false,"url":"http://res.cloudinary.com/sleepnumber/image/upload/f_auto,q_auto:eco/v1/workarea/catalog/product_images/i8/45-wide","tags":["desktop","gallery"]},{"id":"5eaad61667be5a22c488578e","options":{},"position":10,"primary":false,"url":"http://res.cloudinary.com/sleepnumber/image/upload/f_auto,q_auto:eco/v1/workarea/catalog/product_images/i8/zoom-1","tags":["desktop","gallery"]},{"id":"5eaad61667be5a22c488578f","options":{},"position":11,"primary":false,"url":"http://res.cloudinary.com/sleepnumber/image/upload/f_auto,q_auto:eco/v1/workarea/catalog/product_images/i8/straight-on-wide-mobile","tags":["gallery","mobile"]},{"id":"5eaad61667be5a22c4885790","options":{},"position":12,"primary":false,"url":"http://res.cloudinary.com/sleepnumber/image/upload/f_auto,q_auto:eco/v1/workarea/catalog/product_images/i8/zoom-1-mobile","tags":["mobile","gallery"]},{"id":"5eaad61667be5a22c4885791","options":{},"position":13,"primary":false,"url":"http://res.cloudinary.com/sleepnumber/image/upload/f_auto,q_auto:eco/v1/workarea/catalog/product_images/i8/straight-on-wide","tags":["desktop","gallery"]},{"id":"5eaad61667be5a22c4885792","options":{},"position":14,"primary":false,"url":"http://res.cloudinary.com/sleepnumber/image/upload/f_auto,q_auto:eco/v1/workarea/catalog/product_images/i8/postcard-mobile","tags":["postcard","mobile"]},{"id":"5eaad61767be5a22c4885793","options":{},"position":15,"primary":false,"url":"http://res.cloudinary.com/sleepnumber/image/upload/f_auto,q_auto:eco/v1/workarea/catalog/product_images/i8/postcard-desktop","tags":["postcard","desktop"]},{"id":"5eaad61767be5a22c4885794","options":{},"position":16,"primary":false,"url":"http://res.cloudinary.com/sleepnumber/image/upload/f_auto,q_auto:eco/v1/workarea/catalog/product_images/i8/45-wide-mobile","tags":["gallery","mobile"]}],"content_blocks":{"top":[],"bottom":[],"product_info":[]}}');
;// CONCATENATED MODULE: ./src/util/core/object.test.js


describe('util/object.prop', () => {
  const employee = {
    name: 'Bob Vila',
    nicknames: ['Bobby V', 'Bob the Builder', 'The Veebs'],
    address: {
      street1: '12345 67th St',
      state: {
        'iso-code': 'US-MN',
        'short-code': 'US-MN',
        'long-code': 'US-Minnesota'
      }
    }
  };
  const format = 'iso';
  test('Finds a shallow value', () => {
    expect((0,object.prop)(employee, 'name')).toBe('Bob Vila');
  });
  test('Attempts to find a missing deep value without throwing and error', () => {
    expect((0,object.prop)(employee, 'address.street2')).toBe(undefined);
  });
  test('Finds a value using bracket syntax with single quotes', () => {
    expect((0,object.prop)(employee, "address.state['long-code']")).toBe('US-Minnesota');
  });
  test('Finds a value using bracket syntax with double quotes', () => {
    expect((0,object.prop)(employee, 'address.state["short-code"]')).toBe('US-MN');
  });
  test('Finds a value using bracket syntax with back-ticks', () => {
    expect((0,object.prop)(employee, 'address.state[`short-code`]')).toBe('US-MN');
  });
  test('Finds a value using bracket syntax with string interpolation', () => {
    expect((0,object.prop)(employee, `address.state['${format}-code']`)).toBe('US-MN');
  });
  test('Finds a value using bracket syntax with an index', () => {
    expect((0,object.prop)(employee, 'nicknames[1]')).toBe('Bob the Builder');
    expect((0,object.prop)(employee, 'nicknames[1].length')).toBe(15);
    expect((0,object.prop)(employee, 'nicknames[3].length')).toBe(undefined);
  });
});
describe('util/object.setProp', () => {
  test('Sets a property at a path that does not yet exist', () => {
    const bookshelf = {};
    const book = {
      name: 'Treasure Island',
      author: 'Robert Louis Stevenson'
    };
    (0,object.setProp)(bookshelf, 'fiction.favorite', book);
    expect(bookshelf.fiction.favorite).toBe(book);
  });
  test('Sets a property on a path that already exists', () => {
    const bookshelf = {
      fiction: {
        favorite: {
          name: 'Treasure Island',
          author: 'Robert Louis Stevenson'
        }
      }
    };
    const recent = {
      name: 'The Third Option',
      author: 'Vince Flynn'
    };
    (0,object.setProp)(bookshelf, 'fiction.recent', recent);
    expect(bookshelf.fiction.favorite.name).toBe('Treasure Island');
    expect(bookshelf.fiction.recent).toBe(recent);
  });
});
describe('util/object.namespace', () => {
  test('Creates a simple object path', () => {
    (0,object.namespace)('foo.bar.baz');
    expect(window.foo.bar.baz).toBeDefined();
  });
  test('Appends an object at the end of the path', () => {
    (0,object.namespace)('foo.bar.baz', {
      score: 42
    });
    expect(window.foo.bar.baz.score).toBe(42);
  });
  test('Appends to an object path, without destroying it', () => {
    window.foo.author = 'Aaron';
    (0,object.namespace)('foo.bar.some.other.path');
    expect(window.foo.author).toBe('Aaron');
  });
});
describe('util/object.isPlainObject', () => {
  test('detects plain objects correctly', () => {
    class Foo {
      constructor(bar) {
        this.bar = bar;
      }
    }
    const foo = new Foo('bar');
    expect((0,object.isPlainObject)(foo)).toBe(false);
    expect((0,object.isPlainObject)({})).toBe(true);
    expect((0,object.isPlainObject)(Object.create({}))).toBe(false);
    expect((0,object.isPlainObject)(Object.create(null))).toBe(true);
  });
});
describe('util/object.extend', () => {
  test('shallow does not clone deep elements', () => {
    const source = {
      foo: {
        bar: 'baz'
      }
    };
    const clone = (0,object.extend)({}, source);
    expect(source.foo === clone.foo).toBe(true);
  });
  test('deep does clone deep elements', () => {
    const source = {
      foo: {
        bar: 'baz'
      }
    };
    const clone = (0,object.extend)(true, {}, source);
    expect(source.foo === clone.foo).toBe(false);
  });
  test('deep extend of complex object works', () => {
    const source = i8_360_namespaceObject;
    const stringified_i8 = JSON.stringify(source);
    const clone = (0,object.extend)(true, {}, i8_360_namespaceObject);
    expect(JSON.stringify(clone)).toEqual(stringified_i8);
  });
});
describe('util/object.type', () => {
  test('returns the correct type', () => {
    expect((0,object.type)([])).toBe('array');
    expect((0,object.type)({})).toBe('object');
    expect((0,object.type)('')).toBe('string');
    expect((0,object.type)(42)).toBe('number');
    expect((0,object.type)(Symbol)).toBe('function');
    expect((0,object.type)(Symbol(42))).toBe('symbol');
  });
});
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;