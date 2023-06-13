/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 3047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clamp: () => (/* binding */ clamp)
/* harmony export */ });
/* unused harmony exports isNumber, random, randomInt, compound */
/* NUMBER UTILS
   --------------------------------------------------------------- */

/**
 * Returns `true` if this is a valid number
 * @param {*} input
 * @return {boolean}
 */
function isNumber(input) {
  if (Number.isNaN(input)) return false;
  return typeof input === 'number';
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function random(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution.
 */
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Return the amount of transactions to go from `start` to `final`, increasing
 * by `rate` each transaction.
 * @param {number} start - the starting value
 * @param {number} final - the final value
 * @param {number} rate - the rate of increase as a percentage, e.i. `1.2` would be 20%
 * @returns {number} - the amount of transactions to reach the final value.
 *
 * Example:
 * console.log('Years till retirement', compound(100000, 4000000, 1.09)); -> 44
 */
function compound(start, final, rate) {
  let count = 1;
  let amount = start;
  while (amount < final) {
    amount *= rate;
    count += 1;
  }
  return count;
}

/**
 * Limit a number within min and max bounds
 * Example: clamp(15, 50, 100);
 * Returns: 50
 * @param {number} num - Number to clamp
 * @param {number} min - Minimum value to return
 * @param {number} max - Maximum value to return
 * @returns clamped value
 */
function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
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
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3047);

describe('clamp() limits values to bounds', () => {
  test('if the value is too high', () => {
    expect((0,_number__WEBPACK_IMPORTED_MODULE_0__.clamp)(2, 0, 1)).toBe(1);
    expect((0,_number__WEBPACK_IMPORTED_MODULE_0__.clamp)(200, 0, 12)).toBe(12);
    expect((0,_number__WEBPACK_IMPORTED_MODULE_0__.clamp)(-10, -500, -15)).toBe(-15);
  });
  test('if within range the value is unaltered', () => {
    expect((0,_number__WEBPACK_IMPORTED_MODULE_0__.clamp)(5, 0, 100)).toBe(5);
    expect((0,_number__WEBPACK_IMPORTED_MODULE_0__.clamp)(50, 50, 50)).toBe(50);
    expect((0,_number__WEBPACK_IMPORTED_MODULE_0__.clamp)(-100, -500, -50)).toBe(-100);
  });
  test('if the value is too low', () => {
    expect((0,_number__WEBPACK_IMPORTED_MODULE_0__.clamp)(15, 50, 100)).toBe(50);
    expect((0,_number__WEBPACK_IMPORTED_MODULE_0__.clamp)(20, 30, 32)).toBe(30);
    expect((0,_number__WEBPACK_IMPORTED_MODULE_0__.clamp)(-10, -5, -1)).toBe(-5);
  });
});
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;