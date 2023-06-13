/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   compound: () => (/* binding */ compound),
/* harmony export */   isNumber: () => (/* binding */ isNumber),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   randomInt: () => (/* binding */ randomInt)
/* harmony export */ });
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
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;