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
 * An immutable class to represent a video/audio media source and type.
 * Prefer the static initializer `MediaSource.of` instead of the constructor.
 */
class MediaSource {
  #src;
  #type;

  /**
   * Create a new MediaSource instance
   * @param {string} src - The media source used in 'src' attributes.
   * @param {string} type - The media type for type hinting, i.e. "video/mp4;codecs=hvc1"
   */
  constructor(src, type) {
    this.#src = src;
    this.#type = type;
  }

  /**
   * Returns the `src` value.
   * @returns {string}
   */
  get src() {
    return this.#src;
  }

  /**
   * Returns the `type` value.
   * @returns {string}
   */
  get type() {
    return this.#type;
  }

  /**
   * Prints the string representation of the instance
   * @returns {string}
   */
  toString() {
    return `[MediaSource src: "${this.#src}", type: "${this.#type}"]`;
  }

  /**
   * Informs JSON.stringify how to print this class instance.
   * Without it, all you'd get is "{}"
   * @return {{ src: string, type: string }}
   */
  toJSON() {
    return {
      src: this.#src,
      type: this.#type
    };
  }

  /**
   * Static initializer to create a MediaSource instance.
   * Prefer this over the constructor.
   * @param {string} src - The media source used in 'src' attributes.
   * @param {string} type - The media type for type hinting, i.e. "video/mp4;codecs=hvc1"
   * @returns {MediaSource}
   */
  static of(src, type) {
    return new MediaSource(src, type);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MediaSource);
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;