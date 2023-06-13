/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports enumKeyOrNull, enumEntryOrNull */
/**
 * This is a copy of the `enumify` package: https://github.com/rauschma/enumify
 * We are porting it to avoid webpack issues caused by mixing module types
 */
class Enumify {
  static closeEnum() {
    const enumKeys = [];
    const enumValues = [];
    // Traverse the enum entries
    for (const [key, value] of Object.entries(this)) {
      enumKeys.push(key);
      value.enumKey = key;
      value.enumOrdinal = enumValues.length;
      enumValues.push(value);
    }
    // Important: only add more static properties *after* processing the enum entries
    this.enumKeys = enumKeys;
    this.enumValues = enumValues;
    // TODO: prevent instantiation now. Freeze `this`?
  }

  /** Use case: parsing enum values */
  static enumValueOf(str) {
    const index = this.enumKeys.indexOf(str);
    if (index >= 0) {
      return this.enumValues[index];
    }
    return undefined;
  }
  static [Symbol.iterator]() {
    return this.enumValues[Symbol.iterator]();
  }
  toString() {
    return `${this.constructor.name}.${this.enumKey}`;
  }
}
function enumKeyOrNull(input) {
  if (input === null) return null;
  if (input instanceof Enumify) return input.enumKey;
  return input;
}
function enumEntryOrNull(Enum, key) {
  if (key === null) return null;
  return Enum?.enumValueOf(key);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Enumify);

/***/ }),

/***/ 192:
/***/ ((module) => {

module.exports = require("browser-or-node");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Breakpoint: () => (/* binding */ Breakpoint),
/* harmony export */   events: () => (/* binding */ events),
/* harmony export */   getBreakpoint: () => (/* binding */ getBreakpoint),
/* harmony export */   getDeviceType: () => (/* binding */ getDeviceType),
/* harmony export */   isAndroid: () => (/* binding */ isAndroid),
/* harmony export */   isDesktop: () => (/* binding */ isDesktop),
/* harmony export */   isFirefox: () => (/* binding */ isFirefox),
/* harmony export */   isIE: () => (/* binding */ isIE),
/* harmony export */   isIos: () => (/* binding */ isIos),
/* harmony export */   isLandscape: () => (/* binding */ isLandscape),
/* harmony export */   isMobile: () => (/* binding */ isMobile),
/* harmony export */   isMobileDevice: () => (/* binding */ isMobileDevice),
/* harmony export */   isPreModule: () => (/* binding */ isPreModule),
/* harmony export */   isSafari: () => (/* binding */ isSafari),
/* harmony export */   isTablet: () => (/* binding */ isTablet)
/* harmony export */ });
/* harmony import */ var browser_or_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(192);
/* harmony import */ var browser_or_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(browser_or_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _enumify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(829);


class Breakpoint extends _enumify__WEBPACK_IMPORTED_MODULE_1__["default"] {
  static mb = new Breakpoint({
    name: 'mobile',
    start: 0
  });
  static tb = new Breakpoint({
    name: 'tablet',
    start: 768
  });
  static dt = new Breakpoint({
    name: 'desktop',
    start: 1025
  });
  static _ = this.closeEnum();
  constructor(_ref) {
    let {
      name,
      start
    } = _ref;
    super();
    this.name = name;
    this.start = start;
  }
}

/**
 * Return true if the screen width is less than the tablet breakpoint start or
 * an optional, provided breakpoint.
 * @param {number} bp - an optional provided breakpoint to check
 * @return {boolean}
 */
function isMobile(bp) {
  // For now, we assume all ssr output should be for mobile
  if (!browser_or_node__WEBPACK_IMPORTED_MODULE_0__.isBrowser) return true;
  const max = bp || Breakpoint.tb.start;
  const {
    clientWidth
  } = document.documentElement;
  const {
    innerWidth
  } = window;
  return Math.max(clientWidth, (innerWidth || 0) - 1) < max;
}
function isTablet() {
  // For now, we assume all ssr output should be for mobile
  if (!browser_or_node__WEBPACK_IMPORTED_MODULE_0__.isBrowser) return false;
  const {
    clientWidth
  } = document.documentElement;
  const {
    innerWidth
  } = window;
  return Math.max(clientWidth, (innerWidth || 0) - 1) < Breakpoint.dt.start;
}
function isDesktop() {
  // For now, we assume all ssr output should be for mobile
  if (!browser_or_node__WEBPACK_IMPORTED_MODULE_0__.isBrowser) return false;
  const {
    clientWidth
  } = document.documentElement;
  const {
    innerWidth
  } = window;
  return Math.max(clientWidth, (innerWidth || 0) - 1) >= Breakpoint.dt.start;
}
function isPreModule() {
  if (!browser_or_node__WEBPACK_IMPORTED_MODULE_0__.isBrowser) return false;
  return window.Promise && window.fetch && window.Symbol;
}
function getBreakpoint() {
  switch (true) {
    case isMobile():
      {
        return Breakpoint.mb;
      }
    case isTablet():
      {
        return Breakpoint.tb;
      }
    default:
      return Breakpoint.dt;
  }
}

/**
 * Returns true is device is an ios device, false otherwise.
 * @param {Boolean} useUserAgent - If true, detection uses navigator.userAgent instead
 *                                 of navigator.platform.
 */
const isIos = useUserAgent => {
  if (!browser_or_node__WEBPACK_IMPORTED_MODULE_0__.isBrowser) return false;
  let ios = false;
  if (useUserAgent) {
    ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  } else {
    ios = /iPad|iPhone|iPod/.test(navigator.platform);
  }
  return ios;
};

/** Returns true is device is an android device, false otherwise. */
const isAndroid = () => {
  if (!browser_or_node__WEBPACK_IMPORTED_MODULE_0__.isBrowser) return false;
  return navigator.userAgent.toLowerCase().indexOf('android') > -1;
};

/** Returns true if the devices is a mobile phone or tablet. */
const isMobileDevice = () => {
  if (!browser_or_node__WEBPACK_IMPORTED_MODULE_0__.isBrowser) return false;
  let mobile = false;
  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series([46])0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br([ev])w|bumb|bw-([nu])|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do([cp])o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly([-_])|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-([mpt])|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c([- _agpst])|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac([ -\/])|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja([tv])a|jbro|jemu|jigs|kddi|keji|kgt([ \/])|klon|kpt |kwc-|kyo([ck])|le(no|xi)|lg( g|\/([klu])|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t([- ov])|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30([02])|n50([025])|n7(0([01])|10)|ne(([cm])-|on|tf|wf|wg|wt)|nok([6i])|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan([adt])|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c([-01])|47|mc|nd|ri)|sgh-|shar|sie([-m])|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel([im])|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c([- ])|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(a.substr(0, 4)) ||
    // identify iPad pros as mobile
    // see: https://stackoverflow.com/a/58979271
    navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform)) mobile = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return mobile;
};
function getDeviceType() {
  return isMobile() ? 'Mobile' : 'Desktop';
}
const isIE = () => {
  if (!browser_or_node__WEBPACK_IMPORTED_MODULE_0__.isBrowser) return false;
  return navigator.appName === 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/));
};
const isSafari = () => {
  if (!browser_or_node__WEBPACK_IMPORTED_MODULE_0__.isBrowser) return false;
  return navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') < 0;
};
const isFirefox = () => {
  if (!browser_or_node__WEBPACK_IMPORTED_MODULE_0__.isBrowser) return false;
  return navigator.userAgent.indexOf('Firefox') !== -1 && navigator.userAgent.indexOf('Chrome') < 0;
};
function isLandscape() {
  if (!browser_or_node__WEBPACK_IMPORTED_MODULE_0__.isBrowser) return false;
  return window.orientation === 90 || window.orientation === -90;
}

// Modern Chrome requires { passive: false } when adding event to allow
// calling e.preventDefault() on some event types like 'wheel'
let supportsPassive = false;
(() => {
  try {
    window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
      // eslint-disable-next-line getter-return
      get() {
        supportsPassive = true;
      }
    }));
  } catch (e) {
    /* ignore */
  }
})();
const events = {
  wheel: browser_or_node__WEBPACK_IMPORTED_MODULE_0__.isBrowser && 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel',
  passive: supportsPassive
};
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;