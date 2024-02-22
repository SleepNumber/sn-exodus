import * as __WEBPACK_EXTERNAL_MODULE_browser_or_node_7b50c710__ from "browser-or-node";
import * as __WEBPACK_EXTERNAL_MODULE_url_polyfill_350dee91__ from "url-polyfill";
import * as __WEBPACK_EXTERNAL_MODULE_custom_event_polyfill_d5506f61__ from "custom-event-polyfill";
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

;// CONCATENATED MODULE: external "browser-or-node"
var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
const external_browser_or_node_namespaceObject = x({ ["isBrowser"]: () => __WEBPACK_EXTERNAL_MODULE_browser_or_node_7b50c710__.isBrowser });
;// CONCATENATED MODULE: external "url-polyfill"
var external_url_polyfill_x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var external_url_polyfill_y = x => () => x
const external_url_polyfill_namespaceObject = external_url_polyfill_x({  });
;// CONCATENATED MODULE: external "custom-event-polyfill"
var external_custom_event_polyfill_x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var external_custom_event_polyfill_y = x => () => x
const external_custom_event_polyfill_namespaceObject = external_custom_event_polyfill_x({  });
;// CONCATENATED MODULE: ./src/util/core/polyfill.js




/**
 * core-js polyfills are now added automatically by babel
 * See https://babeljs.io/docs/en/babel-preset-env#usebuiltins-usage
 */

/**
 * String.prototype.contains
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes#String.prototype.contains
 *
 * We still need this because of a recent rename.
 */
if (!String.prototype.contains) {
  String.prototype.contains = String.prototype.includes; // eslint-disable-line no-extend-native
}

/**
 * Element.prototype.matches
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
 */
if (external_browser_or_node_namespaceObject.isBrowser && !Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
