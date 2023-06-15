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
/* harmony export */   difference: () => (/* binding */ difference),
/* harmony export */   intersection: () => (/* binding */ intersection),
/* harmony export */   isSuperset: () => (/* binding */ isSuperset),
/* harmony export */   symmetricDifference: () => (/* binding */ symmetricDifference),
/* harmony export */   union: () => (/* binding */ union)
/* harmony export */ });
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
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;