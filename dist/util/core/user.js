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
/* harmony export */   isAdmin: () => (/* binding */ isAdmin)
/* harmony export */ });
/**
 * User data via current_user api call
 * @typedef User
 * @property {boolean}  logged_in
 * @property {number}   cart_quantity
 * @property {boolean}  admin
 * @property {boolean}  impersonating
 * @property {boolean}  browsing_as_guest
 * @property {string}   csrf_param - i.e. 'authenticity_token'
 * @property {string}   csrf_token
 * @property {object}   geolocation
 * @property {string}   geolocation.country - i.e. 'US'
 * @property {string}   geolocation.state - i.e. 'MN'
 * @property {string}   geolocation.city - i.e. 'Saint Paul'
 * @property {string[]} geolocation.localities - i.e. ['Saint Paul']
 * @property {string}   geolocation.zipcode - i.e. '55406'
 * @property {string}   geolocation.longitude - i.e. -93.3047
 * @property {string}   geolocation.latitude - i.e. 44.9702
 * @property {string[]} segments - i.e. ["First Time Visitor"]
 * @property {string[]} price_lists - i.e. ["i don't know?"]
 * @property {boolean}  primary
 */

/**
 * Return true if the user (session data current_user)
 * - is an admin or
 * - is impersonating another user
 * @param {User} user
 * @return {boolean}
 */
function isAdmin(user) {
  return user.impersonation || user.browsing_as_guest || user.admin && user.logged_in;
}
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;