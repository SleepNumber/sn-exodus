/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
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
var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
