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
/* harmony export */   G: () => (/* binding */ validate),
/* harmony export */   S: () => (/* binding */ regex)
/* harmony export */ });
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
var __webpack_exports__regex = __webpack_exports__.S;
var __webpack_exports__validate = __webpack_exports__.G;
export { __webpack_exports__regex as regex, __webpack_exports__validate as validate };
