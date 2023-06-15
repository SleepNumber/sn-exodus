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
 * An enum for days of the week.
 * @enum {object}
 * @readonly
 */
const DAY = {
  values: {
    SUN: {
      id: 'SUN',
      ordinal: 0,
      label: 'Sunday',
      labelAbbr: 'Sun'
    },
    MON: {
      id: 'MON',
      ordinal: 1,
      label: 'Monday',
      labelAbbr: 'Mon'
    },
    TUE: {
      id: 'TUE',
      ordinal: 2,
      label: 'Tuesday',
      labelAbbr: 'Tue'
    },
    WED: {
      id: 'WED',
      ordinal: 3,
      label: 'Wednesday',
      labelAbbr: 'Wed'
    },
    THU: {
      id: 'THU',
      ordinal: 4,
      label: 'Thursday',
      labelAbbr: 'Thu'
    },
    FRI: {
      id: 'FRI',
      ordinal: 5,
      label: 'Friday',
      labelAbbr: 'Fri'
    },
    SAT: {
      id: 'SAT',
      ordinal: 6,
      label: 'Saturday',
      labelAbbr: 'Sat'
    }
  },
  order: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
};
DAY.of = ordinal => Object.values(DAY.values).find(d => d.ordinal === ordinal);
DAY.find = abbr => Object.values(DAY.values).find(d => d.labelAbbr === abbr);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DAY);
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;