var __webpack_exports__ = {};

;// CONCATENATED MODULE: external "browser-or-node"
const external_browser_or_node_namespaceObject = require("browser-or-node");
;// CONCATENATED MODULE: external "url-polyfill"
const external_url_polyfill_namespaceObject = require("url-polyfill");
;// CONCATENATED MODULE: external "custom-event-polyfill"
const external_custom_event_polyfill_namespaceObject = require("custom-event-polyfill");
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
