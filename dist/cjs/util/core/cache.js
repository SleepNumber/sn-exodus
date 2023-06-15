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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A very simple cache to hold a limited number of entries.
 * Once the limit is reached, the oldest entry is evicted from the cache.
 */
class MicroCache {
  /**
   * @param {Number} [maxSize] - the number of entries to hold, default is 20.
   */
  constructor() {
    let maxSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
    this.maxSize = maxSize;
    this.map = new Map();
    this.entries = [];
  }
  has(key) {
    return this.map.has(key);
  }
  get(key) {
    return this.map.get(key);
  }
  put(key, value) {
    if (!this.map.has(key)) {
      this.entries.push(key);
      if (this.entries.length > this.maxSize) {
        // Evict the oldest entry
        const evicted = this.entries.shift();
        this.map.delete(evicted);
      }
    }
    return this.map.set(key, value);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MicroCache);
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;