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
/* harmony export */   shippable_states: () => (/* binding */ shippable_states),
/* harmony export */   states: () => (/* binding */ states)
/* harmony export */ });
const states = [{
  isocode: 'AL',
  name: 'Alabama'
}, {
  isocode: 'AK',
  name: 'Alaska'
}, {
  isocode: 'AZ',
  name: 'Arizona'
}, {
  isocode: 'AR',
  name: 'Arkansas'
}, {
  isocode: 'CA',
  name: 'California'
}, {
  isocode: 'CO',
  name: 'Colorado'
}, {
  isocode: 'CT',
  name: 'Connecticut'
}, {
  isocode: 'DE',
  name: 'Delaware'
}, {
  isocode: 'DC',
  name: 'District of Columbia'
}, {
  isocode: 'FL',
  name: 'Florida'
}, {
  isocode: 'GA',
  name: 'Georgia'
}, {
  isocode: 'HI',
  name: 'Hawaii'
}, {
  isocode: 'ID',
  name: 'Idaho'
}, {
  isocode: 'IL',
  name: 'Illinois'
}, {
  isocode: 'IN',
  name: 'Indiana'
}, {
  isocode: 'IA',
  name: 'Iowa'
}, {
  isocode: 'KS',
  name: 'Kansas'
}, {
  isocode: 'KY',
  name: 'Kentucky'
}, {
  isocode: 'LA',
  name: 'Louisiana'
}, {
  isocode: 'ME',
  name: 'Maine'
}, {
  isocode: 'MD',
  name: 'Maryland'
}, {
  isocode: 'MA',
  name: 'Massachusetts'
}, {
  isocode: 'MI',
  name: 'Michigan'
}, {
  isocode: 'MN',
  name: 'Minnesota'
}, {
  isocode: 'MS',
  name: 'Mississippi'
}, {
  isocode: 'MO',
  name: 'Missouri'
}, {
  isocode: 'MT',
  name: 'Montana'
}, {
  isocode: 'NE',
  name: 'Nebraska'
}, {
  isocode: 'NV',
  name: 'Nevada'
}, {
  isocode: 'NH',
  name: 'New Hampshire'
}, {
  isocode: 'NJ',
  name: 'New Jersey'
}, {
  isocode: 'NM',
  name: 'New Mexico'
}, {
  isocode: 'NY',
  name: 'New York'
}, {
  isocode: 'NC',
  name: 'North Carolina'
}, {
  isocode: 'ND',
  name: 'North Dakota'
}, {
  isocode: 'OH',
  name: 'Ohio'
}, {
  isocode: 'OK',
  name: 'Oklahoma'
}, {
  isocode: 'OR',
  name: 'Oregon'
}, {
  isocode: 'PA',
  name: 'Pennsylvania'
}, {
  isocode: 'RI',
  name: 'Rhode Island'
}, {
  isocode: 'SC',
  name: 'South Carolina'
}, {
  isocode: 'SD',
  name: 'South Dakota'
}, {
  isocode: 'TN',
  name: 'Tennessee'
}, {
  isocode: 'TX',
  name: 'Texas'
}, {
  isocode: 'UT',
  name: 'Utah'
}, {
  isocode: 'VT',
  name: 'Vermont'
}, {
  isocode: 'VA',
  name: 'Virginia'
}, {
  isocode: 'WA',
  name: 'Washington'
}, {
  isocode: 'WV',
  name: 'West Virginia'
}, {
  isocode: 'WI',
  name: 'Wisconsin'
}, {
  isocode: 'WY',
  name: 'Wyoming'
}];

// Remove Alaska and Hawaii for shipping
const shippable_states = [...states].filter(s => s.isocode !== 'AK' && s.isocode !== 'HI');
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;