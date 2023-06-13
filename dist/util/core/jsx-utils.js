/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Breakpoint: () => (/* binding */ Breakpoint)
/* harmony export */ });
/* unused harmony exports isMobile, isTablet, isDesktop, isPreModule, getBreakpoint, isIos, isAndroid, isMobileDevice, getDeviceType, isIE, isSafari, isFirefox, isLandscape, events */
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
  if (!isBrowser) return true;
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
  if (!isBrowser) return false;
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
  if (!isBrowser) return false;
  const {
    clientWidth
  } = document.documentElement;
  const {
    innerWidth
  } = window;
  return Math.max(clientWidth, (innerWidth || 0) - 1) >= Breakpoint.dt.start;
}
function isPreModule() {
  if (!isBrowser) return false;
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
  if (!isBrowser) return false;
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
  if (!isBrowser) return false;
  return navigator.userAgent.toLowerCase().indexOf('android') > -1;
};

/** Returns true if the devices is a mobile phone or tablet. */
const isMobileDevice = () => {
  if (!isBrowser) return false;
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
  if (!isBrowser) return false;
  return navigator.appName === 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/));
};
const isSafari = () => {
  if (!isBrowser) return false;
  return navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') < 0;
};
const isFirefox = () => {
  if (!isBrowser) return false;
  return navigator.userAgent.indexOf('Firefox') !== -1 && navigator.userAgent.indexOf('Chrome') < 0;
};
function isLandscape() {
  if (!isBrowser) return false;
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

/***/ }),

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

/***/ 749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validate: () => (/* binding */ validate)
/* harmony export */ });
/* unused harmony export regex */
const regex = {
  // https://emailregex.com
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/,
  zip_partial: /^\d{1,5}$/,
  zip: /^\d{5}$/,
  zip_full: /^\d{5}(?:-\d{4})?$/,
  iso_state: /(US-[A-Z]{2})/,
  geo: {
    lat: /^-?([0-8]?\d|90)\.\d{1,6}$/,
    long: /^-?((1?[0-7]?|\d?)\d|180)\.\d{1,6}$/
  },
  /** @see http://www.regular-expressions.info/creditcard.html */
  cc: {
    visa: /^4\d{12}(?:\d{3})?$/,
    master: /^5[1-5]\d{14}$/,
    amex: /^3[47]\d{13}$/,
    diners: /^3(?:0[0-5]|[68]\d)\d{11}$/,
    discover: /^6(?:011|5\d{2})\d{12}$/,
    jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
    sn: /^(60346233|60191702|60191708).*/ // Sleep Number Financing Cards
  }
};

/** General purpose validators */
const validate = {
  /**
   * Returns true if the string is less than or equal to the limit.
   * @param {string} input - the string to test.
   * @param {number} max - the length to check for.
   */
  max(input, max) {
    if (typeof input !== 'string') throw Error('Input is not a string.');
    return input.trim().length <= max;
  },
  /**
   * Returns true if the string is greater than or equal to the limit.
   * @param {string} input - the string to test.
   * @param {number} min - the length to check for.
   */
  min(input, min) {
    if (typeof input !== 'string') throw Error('Input is not a string.');
    return input.trim().length >= min;
  },
  /**
   * For string inputs, returns true if the string is between the min and max.
   * For number inputs, returns true if the number is between the min and max.
   * @param {string|number} input - the number or string to test.
   * @param {number} min - the minimum length.
   * @param {number} max - the maximum length.
   */
  between(input, min, max) {
    if (typeof input === 'string') {
      const {
        length
      } = input.trim();
      return length >= min && length <= max;
    }
    if (typeof input === 'number') {
      return input >= min && input <= max;
    }
    throw Error(`Input is not a number or string: ${input}`);
  },
  /**
   * Returns true if the supplied latitude is valid, otherwise false.
   * i.e. >= -90 and <= 90, with 6 or less decimal digits
   */
  latitude(lat) {
    if (lat > 90 || lat < -90) return false;
    return regex.geo.lat.test(lat);
  },
  /**
   * Returns true if the supplied longitude is valid, otherwise false.
   * i.e. >= -180 and <= 180, with 6 or less decimal digits
   */
  longitude(long) {
    if (long > 180 || long < -180) return false;
    return regex.geo.long.test(long);
  },
  email(email) {
    return !!(email || '').trim() && regex.email.test(email);
  },
  zip_partial(zip) {
    return regex.zip_partial.test(zip);
  },
  zip(zip) {
    return regex.zip.test(zip);
  },
  cc: {
    visa: number => regex.cc.visa.test(number),
    master: number => regex.cc.master.test(number),
    amex: number => regex.cc.amex.test(number),
    diners: number => regex.cc.diners.test(number),
    discover: number => regex.cc.discover.test(number),
    jcb: number => regex.cc.jcb.test(number),
    sn: number => regex.cc.sn.test(number),
    all: number => regex.cc.visa.test(number) || regex.cc.master.test(number) || regex.cc.amex.test(number) || regex.cc.diners.test(number) || regex.cc.discover.test(number) || regex.cc.jcb.test(number) || regex.cc.sn.test(number),
    type: number => {
      let type = null;
      Object.keys(regex.cc).forEach(re => {
        if (regex.cc[re].test(number)) type = re;
      });
      return type;
    }
  }
};

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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Blank: () => (/* binding */ Blank),
  ConditionalWrapper: () => (/* binding */ ConditionalWrapper),
  common_input_props: () => (/* binding */ common_input_props),
  displayableType: () => (/* binding */ displayableType),
  entitiesOf: () => (/* binding */ entitiesOf),
  text: () => (/* binding */ jsx_utils_text),
  validators: () => (/* binding */ validators)
});

;// CONCATENATED MODULE: external "react"
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_namespaceObject);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
// EXTERNAL MODULE: ./src/util/core/validate.js
var validate = __webpack_require__(749);
// EXTERNAL MODULE: ./src/util/core/device.js
var device = __webpack_require__(109);
;// CONCATENATED MODULE: ./src/util/core/jsx-utils.js




const common_input_props = {
  id: (external_prop_types_default()).string,
  label: (external_prop_types_default()).any,
  desc: (external_prop_types_default()).string,
  onChange: (external_prop_types_default()).func,
  error: (external_prop_types_default()).string,
  classes: (external_prop_types_default()).any,
  wrapperClasses: (external_prop_types_default()).any
};
const jsx_utils_text = {
  /**
   * Weave <br>'s in between each string in an array of strings.
   * Each string in the original array is wrapped in a span to apply a key.
   * @param {String[]} textArray - The array of strings to weave <br>'s into.
   */
  break: textArray => textArray.reduce((prev, curr, i) => {
    prev.push( /*#__PURE__*/external_react_default().createElement("span", {
      key: `t-${i}`
    }, curr));
    if (i < textArray.length - 1) prev.push( /*#__PURE__*/external_react_default().createElement("br", {
      key: `b-${i}`
    }));
    return prev;
  }, []),
  /**
   * Puts special characters in a sup tag, each piece is wrapped in a React.Fragment
   * @param {String} input - The string to turn into an array of fragments.
   * @returns {React.Fragment[] | null} - An array of fragments or null if input falsy
   *
   * Example:
   * text.supSpecial('No sleeping† in Missouri℠') ->
   * [
   *   <React.Fragment key={0}>No sleeping</React.Fragment>,
   *   <React.Fragment key={1}><sup>†</sup></React.Fragment>,
   *   <React.Fragment key={2}> in Missouri</React.Fragment>,
   *   <React.Fragment key={3}><sup>℠</sup></React.Fragment>,
   * ]
   */
  supSpecial: function supSpecial(input) {
    if (!input) return null;
    if (typeof input === 'string') {
      // We need this to be an array
      return jsx_utils_text.supSpecial([input]);
    }

    // Get last item in input array
    const [unformatted] = input.splice(-1);
    if (typeof unformatted !== 'string') {
      // Everything is formatted
      return [...input, unformatted];
    }

    // Reverse the string and check if the starting <sup> tag is there
    const match = unformatted.split('').reverse().join('').match(/[†‡§®™℠](?!<pus>)/i) && unformatted.match(/[†‡§®™℠](?!<\/sup>)/i);
    if (!match) {
      // We found the last string, then everything is formatted
      return [...input, /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, {
        key: input.length
      }, unformatted)];
    }
    const {
      0: matched,
      index
    } = match;
    const semiFormatted = [];
    if (input.length > 0) {
      // Add what's already been formatted
      semiFormatted.push(...input);
    }
    let suppedKey = input.length;
    const preSpecial = unformatted.substring(0, index);
    if (preSpecial.length > 0) {
      suppedKey += 1;
      // Add text before our special character
      semiFormatted.push( /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, {
        key: input.length
      }, preSpecial));
    }
    if (matched.length > 0) {
      semiFormatted.push(
      /*#__PURE__*/
      // Add supped special
      external_react_default().createElement((external_react_default()).Fragment, {
        key: suppedKey
      }, /*#__PURE__*/external_react_default().createElement("sup", null, matched)));
    }
    const remainder = unformatted.substring(index + match.length);
    if (remainder.length > 0) {
      // Add remaining unformatted string
      semiFormatted.push(remainder);
    }
    return jsx_utils_text.supSpecial(semiFormatted);
  },
  /**
   * Puts special characters in a sup tag and returns string of html for dangerouslySetInnerHTML
   * Input: 'No sleeping†`
   * Output: '<span><span>No sleeping</span><sup>†</sup></span>'
   * @param {String} input - The string to turn into an html string.
   * @returns {string | null} - a string of html or null if input falsy
   */
  supSpecialDangerousHtml: input => {
    if (!input) return null;
    if (typeof input === 'string') {
      // We need this to be an array
      return jsx_utils_text.supSpecialDangerousHtml([input]);
    }
    const [unformatted] = input.splice(-1);
    if (typeof unformatted !== 'string') {
      // Everything is formatted
      return [...input, unformatted];
    }
    const match = unformatted.split('').reverse().join('').match(/[†‡§®™℠](?!<pus>)/i) &&
    // reverse the string and check if the starting <sup> tag is there
    unformatted.match(/[†‡§®™℠](?!<\/sup>)/i);
    if (!match) {
      // We found the last string, then everything is formatted

      const formatted = [`<span key='container'>`, ...input, `<span key={${input.length}}>${unformatted}</span>`, `</span>`].join('');
      return formatted;
    }
    const {
      0: matched,
      index
    } = match;
    const semiFormatted = [];
    if (input.length > 0) {
      // Add what's already been formatted
      semiFormatted.push(...input);
    }
    const preSpecial = unformatted.substring(0, index);
    if (preSpecial.length > 0) {
      // Add text before our special character
      semiFormatted.push(`<span key={${input.length}}>${preSpecial}</span>`);
    }
    if (matched.length > 0) {
      semiFormatted.push(
      // Add supped special
      `<span key={${input.length + 1}}><sup>${matched}</sup></span>`);
    }
    const remainder = unformatted.substring(index + match.length);
    if (remainder.length > 0) {
      // Add remaining unformatted string
      semiFormatted.push(remainder);
    }
    return jsx_utils_text.supSpecialDangerousHtml(semiFormatted);
  }
};
const validators = {
  /**
   * Returns a dom event handler (usually for `onBlur`)
   * that dispatches an action if the value is not a valid email.
   * @param {string} type - The action type.
   * @param {function} dispatch - The store dispatcher.
   * @param {string} [msg] - The Error message.
   * @returns {function} - The dom event handler.
   */
  email: (type, dispatch, msg) => e => {
    const {
      value
    } = e.target;
    msg = msg || 'Please enter a valid email address.';
    if (!validate.validate.email(value)) dispatch({
      type,
      value: msg
    });
  },
  /**
   * Returns a dom event handler that dispatches an action value is empty.
   * @param {string} type - The action type.
   * @param {function} dispatch - The store dispatcher.
   * @param {string} [msg] - The Error message.
   * @returns {function} - The dom event handler.
   */
  required: (type, dispatch, msg) => e => {
    const {
      value
    } = e.target;
    msg = msg || 'Required';
    if (!value || !value.trim()) dispatch({
      type,
      value: msg
    });
  }
};
const entitiesOf = type => external_prop_types_default().shape({
  byId: external_prop_types_default().objectOf(type),
  allIds: external_prop_types_default().arrayOf((external_prop_types_default()).string).isRequired
});
function ConditionalWrapper(_ref) {
  let {
    condition,
    wrapper,
    children
  } = _ref;
  return condition ? wrapper(children) : children;
}

/**
 * PropType where boolean means show or don't show, Breakpoint[] means show at breakpoints
 */
const displayableType = external_prop_types_default().oneOfType([(external_prop_types_default()).bool, external_prop_types_default().arrayOf(device.Breakpoint)]);

/**
 * If boolean, show or don't show, if Breakpoint[], show at breakpoints
 * @typedef {boolean|Breakpoint[]} DisplayAt
 */

function Blank() {
  return null;
}
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;