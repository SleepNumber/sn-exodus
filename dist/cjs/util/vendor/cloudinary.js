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
/* harmony export */   Transformers: () => (/* binding */ Transformers),
/* harmony export */   getCloudinaryTransformData: () => (/* binding */ getCloudinaryTransformData),
/* harmony export */   setCloudinaryTransforms: () => (/* binding */ setCloudinaryTransforms),
/* harmony export */   updateCloudinaryTransforms: () => (/* binding */ updateCloudinaryTransforms)
/* harmony export */ });
/**
 * @see https://cloudinary.com/documentation/transformation_reference
 * @type {string[]}
 */

const Transformers = ['a',
// angle
'ac',
// audio codec
'af',
// audio frequency
'ar',
// aspect ratio
'b',
// background
'bo',
// border
'br',
// bit rate
'c',
// crop/resize
'co',
// color
'cs',
// color space
'd',
// default image
'dl',
// delay
'dn',
// density
'dpr',
// DPR
'du',
// duration
'e',
// effect
'eo',
// end offset
'f',
// format
'fl',
// flag
'fn',
// custom function
'fps',
// FPS
'g',
// gravity
'h',
// height
'if',
// if condition
'ki',
// keyframe interval
'l',
// layer
'o',
// opacity
'p',
// prefix
'pg',
// page or file layer
'q',
// quality
'r',
// round corners
'so',
// start offset
'sp',
// streaming profile
't',
// named transformation
'u',
// underlay
'vc',
// video codec
'vs',
// video sampling
'w',
// width
'x',
// x coordinates
'y',
// y coordinates
'z',
// zoom
'$' // variable
];

/**
 * Return the cloudinary transform url data
 * @param {string} url - the url to inspect
 * @return {{
 *   url: string
 *   start: number,
 *   end: number,
 *   transforms: string[],
 *   asMap: Object<string>,
 *   prefix: string,
 *   suffix: string,
 * }}
 */
function getCloudinaryTransformData() {
  let url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  const t_start = url.indexOf('upload/') + 7;
  const parts = url.substring(t_start).split(/[,/]/);
  const non_transform_part = parts.find(p => {
    if (!p.includes('_')) return true;
    const type = p.substring(0, p.indexOf('_'));
    const isTransform = Transformers.includes(type);
    return !isTransform;
  });
  // Assuming at lease some transforms for now
  const t_end = url.indexOf(non_transform_part, t_start + 1) - 1;
  const transforms = url.substring(t_start, t_end).split(/[,/]/);
  return {
    url,
    start: t_start,
    end: t_end,
    transforms,
    asMap: transforms.reduce((acc, t) => {
      const type = t.substring(0, t.indexOf('_'));
      acc[type] = t;
      return acc;
    }, {}),
    prefix: url.substring(0, t_start),
    suffix: url.substring(t_end)
  };
}

/**
 * Returns a cloudinary url with the transforms replaced
 * @param {string} url - a cloudinary url
 * @param {string[]} transforms - a list of transforms
 * @return {string}
 */
function setCloudinaryTransforms() {
  let url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  let transforms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  const {
    prefix,
    suffix
  } = getCloudinaryTransformData(url);
  return `${prefix}${transforms.join(',')}${suffix}`;
}

/**
 * Returns a cloudinary url with the specified transforms updated if they exist
 * or add if they do not already exist in the url.
 * @param {string} url - a cloudinary url
 * @param {string[]} transforms - a list of cloudinary transforms
 * @return {string}
 */
function updateCloudinaryTransforms() {
  let url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  let transforms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  const data = getCloudinaryTransformData(url);
  const transformsMap = transforms.reduce((acc, t) => {
    const type = t.substring(0, t.indexOf('_'));
    acc[type] = t;
    return acc;
  }, {});
  const updated = {
    ...data.asMap
  };
  Object.entries(transformsMap).forEach(_ref => {
    let [type, value] = _ref;
    // Override existing transform or add new transform
    updated[type] = value;
  });
  const next = Object.values(updated);
  return `${data.prefix}${next.join(',')}${data.suffix}`;
}
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;