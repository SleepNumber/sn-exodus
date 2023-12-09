/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _enumify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(829);


/**
 * Cookie names used by us.
 * @enum
 */
class Cookie extends _enumify__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static access_token = new Cookie('access_token');
  static analytics_session = new Cookie('analytics_session');
  static auth_token = new Cookie('authentication_token');
  static bq_auto_lead_send = new Cookie('bq_auto_lead_send');
  static cart = new Cookie('order_id');
  static ccpa = new Cookie('sn-ccpa-optin');
  static debug = new Cookie('sn-debug');
  static dynamic_yield_id_server = new Cookie('_dyid_server');
  static dynamic_yield_id = new Cookie('_dyid'); // This client cookie must match _dyid_server
  static dynamic_yield_jsession = new Cookie('_dyjsession');
  static id_token = new Cookie('id_token');
  static log_ignores = new Cookie('sn_log_ignores');
  static price_lists = new Cookie('plid');
  static promo_drawer = new Cookie('promo_drawer');
  static refresh_token = new Cookie('refresh_token');
  static request_names = new Cookie('request_names'); // Set by rails if user is missing names
  static session = new Cookie('_sleep_number_session');
  static sessions = new Cookie('sessions');
  static suppress_chat = new Cookie('suppress_chat');
  static sn = new Cookie('sn');
  static _ = this.closeEnum();
  constructor(name) {
    super();
    this.name = name;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cookie);

/***/ }),

/***/ 292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(814);
/**
 * Deferred api for promises.
 * Replaces $.Deferred()
 */

class Deferred {
  // # denotes private fields
  // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
  #state;
  constructor() {
    this.#state = 'pending';
    this.p = new Promise((resolve, reject) => {
      this.resolver = resolve;
      this.rejector = reject;
    });
  }
  state() {
    return this.#state;
  }
  resolve() {
    this.resolver(...arguments);
    this.#state = 'resolved';
    return this;
  }
  reject() {
    this.rejector(...arguments);
    this.#state = 'rejected';
    return this;
  }
  promise() {
    return this.p;
  }
  done(cb) {
    this.p.then(cb, () => {});
    return this;
  }
  then() {
    this.p.then(...arguments);
    return this;
  }
  fail() {
    this.p.catch(...arguments);
    return this;
  }
  catch() {
    this.p.catch(...arguments);
    return this;
  }
  always() {
    this.p.finally(...arguments);
    return this;
  }
  finally() {
    this.p.finally(...arguments);
    return this;
  }
}
(0,_object__WEBPACK_IMPORTED_MODULE_0__.namespace)('sn.dfd', Deferred);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Deferred);

/***/ }),

/***/ 276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports arrays, reducers, sorters, entityTable, includesAll, includesAny, asArray, safeArray */
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(814);
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(981);
/* ARRAY UTILS
   --------------------------------------------------------------- */




const arrays = {
  /**
   * Creates a shallow clone of the array.
   * If objects exist in the original array, the references
   * are kept.
   *
   * https://davidwalsh.name/javascript-clone-array
   */
  clone(arr) {
    return arr.slice(0);
  },
  /**
   * Insert an item in an array at the index.
   *
   * USAGE:
   * let months = ['Jan', 'March', 'April'];
   * sn.arrays.insert(months, 1, 'Feb'); // insert at index 1
   * console.log(months); // Array ['Jan', 'Feb', 'March', 'April']
   */
  insert(arr, index, item) {
    if (index < 0) {
      throw new Error('Index must be greater than 0.');
    }
    if (index > this.length - 1) {
      throw new Error(`Index must be less than array length. Index: ${index}, Length: ${this.length}`);
    }
    arr.splice(index, 0, item);
    return arr;
  },
  /**
   * Add an item or array of items in between every item in the array.
   * @param {any[]} arr - The array to weave things into.
   * @param {*} item - The item to weave into the array.
   *        If `item` is an Array then the items of `item` are woven into `arr` sequentially.
   *        If `item` is a function, then the result of item(i) is woven into `arr` sequentially.
   * @param {boolean} before - if true, the first item in the resulting array will be the weave item
   */
  weave(arr, item) {
    let before = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    const next = i => {
      if (Array.isArray(item)) return item[i];
      if (typeof item === 'function') return item(i);
      return item;
    };
    return arr.reduce((prev, curr, i) => {
      if (before) prev.push(next(i));
      prev.push(curr);
      if (!before && i !== arr.length - 1) prev.push(next(i));
      return prev;
    }, []);
  },
  /** Chunk an array into smaller arrays. */
  chunk(arr, size) {
    const groups = [];
    let i;
    for (i = 0; i < arr.length; i += size) {
      groups.push(arr.slice(i, i + size));
    }
    return groups;
  },
  /**
   * Returns true if two arrays have strictly equal (not equivalent) items.
   * Does NOT account for objects or nested arrays.
   * Order does not matter.
   * @see http://stackoverflow.com/a/16436975
   *
   * USAGE:
   * sn.arrays.equalish([1, 2], [1, 2])           // true
   * sn.arrays.equalish([1, "2"], [1, 2])         // false
   * sn.arrays.equalish(["2", 1], [1, "2"])       // true
   * sn.arrays.equalish([1, [2, 3]], [1, [2, 3]]) // false (The nested arrays are different instances.)
   * sn.arrays.equalish([1, {}], [1, {}])         // false (The nested objects are different instances.)
   */
  equalish(a, b) {
    if (a && !b) return false;
    if (!a && b) return false;
    if (a.length !== b.length) return false;
    const arr1 = [...a];
    const arr2 = [...b];
    arr1.sort();
    arr2.sort();
    for (let i = arr1.length; i--;) if (arr1[i] !== arr2[i]) return false;
    return true;
  },
  /**
   * Move element at index `from` to index `to` in the `array` provided.
   * @param {any[]} arr - The array to modify.
   * @param {Number} from - The index of the item to move.
   * @param {Number} to - The index to move the item to.
   */
  move(arr, from, to) {
    arr.splice(to, 0, arr.splice(from, 1)[0]);
    return arr;
  },
  /**
   * Move element at index `from`, `by` a certain amount (negative or positive),
   * in the `array` provided.
   * @param {any[]} arr - The array to modify.
   * @param {Number} from - The index of the item to move.
   * @param {Number} by - The number of space to move the element.
   *
   * USAGE:
   * let arr = ['a', 'b', 'c'];
   * sn.arrays.moveBy(arr, 0, 2);  // ['b', 'c', 'a']
   * sn.arrays.moveBy(arr, 2, -2); // ['a', 'b', 'c']
   */
  moveBy(arr, from) {
    let by = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    let newPos = +from + +by;
    const value = arr[from];
    if (newPos < 0) newPos = 0;
    arr.splice(from, 1);
    arr.splice(newPos, 0, value);
    return arr;
  },
  /**
   * Returns a new array trimmed to the first n items desired.
   * Does not mutate the original array.
   * @param {any[]} arr - The original array.
   * @param {number} size - the size to trim to.
   * @return {any[]}
   */
  trim(arr, size) {
    if (arr.length > size) return arr.slice(0, size);
    return arr;
  },
  /**
   * Remove the first occurrence of the item found in the
   * array using the predicate. Note this mutates the array.
   * @param {any[]} arr - The array to modify.
   * @param {function|number} predicate - function to find the element to remove or the index number itself.
   */
  remove(arr, predicate) {
    if (typeof predicate === 'function') {
      const index = arr.findIndex(predicate);
      if (index !== -1) arr.splice(index, 1);
    } else if (typeof predicate === 'number') {
      arr.splice(predicate, 1);
    }
    return arr;
  },
  /**
   * Returns a new array with the item removed.
   * The original array is not mutated.
   * @param {any[]} arr - The original array.
   * @param {function|number} predicate - function to find the element to remove or the index number itself.
   * @return {*[]|*}
   */
  removeSafe(arr, predicate) {
    let index = -1;
    if (typeof predicate === 'function') {
      index = arr.findIndex(predicate);
    } else if (typeof predicate === 'number') {
      index = predicate;
    }
    if (index === -1) return arr;
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  },
  /**
   * Combines many filter functions into a single filter function.
   * @param {function(*=)} filters - the filters to combine.
   * @return {function(*=)}
   *
   * USAGE:
   * let even = (x) => x % 2 === 0;
   * let gt_5 = (x) => x > 5;
   * let filter = arrays.combineFilters(even, gt_5);
   * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(filter);
   * // [6, 8, 10]
   */
  combineFilters() {
    for (var _len = arguments.length, filters = new Array(_len), _key = 0; _key < _len; _key++) {
      filters[_key] = arguments[_key];
    }
    return function compositeFilter(x) {
      return filters.reduce(function reduceFilters(result, f) {
        return result && f(x);
      }, true);
    };
  },
  /**
   * Add items to the end of an array if needed up to a limit.
   * @param {any[]} arr - The array to modify.
   * @param {Number} [to] - the resulting size of the padded array.
   * @param {*} [filler] - the stuffing to use for padding.
   *
   * USAGE:
   * let arr = ['a', 'b', 'c', 'd'];
   * sn.arrays.pad(arr, 10);
   * // ["a", "b", "c", "d", null, null, null, null, null, null]
   *
   */
  pad() {
    let arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0,_function__WEBPACK_IMPORTED_MODULE_0__.required)('arr');
    let to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    let filler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    for (let i = arr.length; i < to; i++) {
      if (typeof arr[i] === 'undefined') {
        // eslint-disable-next-line no-unused-expressions
        typeof filler === 'function' ? arr[i] = filler(i) : arr[i] = filler;
      }
    }
    return arr;
  },
  /**
   * Returns a new array such that it contains a distinct set of values from the
   * original array, i.e. all duplicates are removed.
   * @param {any[]} arr - the the array to work on.
   * @returns {Array} - a new array with distinct values, order is preserved.
   *
   * USAGE:
   * const names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
   * // ['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Carl']
   *
   */
  uniq(arr) {
    if (!arr) return arr;
    return arr.reduce((a, b) => {
      if (a.indexOf(b) < 0) a.push(b);
      return a;
    }, []);
  },
  /** Check how many times an element occurs in an array */
  checkOccurrences(arr, element) {
    let counter = 0;
    arr.forEach(item => {
      if (JSON.stringify(item) === JSON.stringify(element)) counter += 1;
    });
    return counter;
  },
  /**
   * Sort an array by using the items indexes in an ordered array.
   * @param {any[]} arr - the array to sort.
   * @param {any[]} order - the ordered array to reference for sorting.
   * @param {function} [getValue] - an optional function to fetch the value to sort by.
   */
  sortByIndex(arr, order) {
    let getValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _function__WEBPACK_IMPORTED_MODULE_0__.identity;
    arr.sort((a, b) => {
      const valueA = getValue(a);
      const valueB = getValue(b);
      let indexA = order.indexOf(valueA);
      let indexB = order.indexOf(valueB);
      if (indexA === -1) indexA = 999;
      if (indexB === -1) indexB = 999;
      return indexA - indexB;
    });
    return arr;
  },
  /**
   * Build an array sort function by using the items indexes in an ordered array.
   * @param {any[]} order - the ordered array to reference for sorting.
   * @param {function} [getValue] - an optional function to fetch the value to sort by.
   */
  sorterByIndex(order) {
    let getValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _function__WEBPACK_IMPORTED_MODULE_0__.identity;
    return (a, b) => {
      const valueA = getValue(a);
      const valueB = getValue(b);
      let indexA = order.indexOf(valueA);
      let indexB = order.indexOf(valueB);
      if (indexA === -1) indexA = 999;
      if (indexB === -1) indexB = 999;
      return indexA - indexB;
    };
  }
};

/** Common reducer callbacks. */
const reducers = {
  /** Entity table mapped by item 'id'. */
  id(acc, item) {
    acc[item.id] = item;
    return acc;
  },
  /**
   * Create a reducer to build an entity table mapped by item `field`.
   * @param {string} field - the property name or property path of the id.
   */
  by(field) {
    return (acc, item) => {
      acc[(0,_object__WEBPACK_IMPORTED_MODULE_1__.prop)(item, field)] = item;
      return acc;
    };
  },
  /** Reduce array to hash where the item is the key AND the value. */
  identity(acc, item) {
    acc[item] = item;
    return acc;
  }
};
const sorters = {
  alphaOn(field) {
    return (a, b) => {
      if (a[field] === b[field]) return 0;
      return a[field] > b[field] ? 1 : -1;
    };
  }
};

/**
 * Build an entity table for an array.
 * @param {any[]} arr - the array to convert to an entity table.
 * @param {string} [by] - the array item's property to map by. Default: `id`.
 */
const entityTable = function (arr) {
  let by = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
  const reducer = by === 'id' ? reducers.id : reducers.by(by);
  const table = {
    byId: arr.reduce(reducer, {})
  };
  table.allIds = Object.keys(table.byId);
  table.allIds.sort((a, b) => {
    const iA = arr.findIndex(o => o[by] === a[by]);
    const iB = arr.findIndex(o => o[by] === b[by]);
    return iA - iB;
  });
  return table;
};

/**
 * Returns true if the first array contains ALL the elements in the second array.
 * USAGE:
 * let arr1 = [1, 2, 3, 4];
 * let arr2 = [3, 4, 5, 6];
 * let arr3 = [3, 4, 6];
 * includesAll(arr1, arr2) // returns false
 * includesAll(arr2, arr3) // returns true
 */
function includesAll(arrA, arrB) {
  return isSuperset(new Set(arrA), new Set(arrB));
}

/**
 * Returns true if the first array contains ANY of the elements in the second array.
 * USAGE:
 * let arr1 = [1, 2, 3, 4];
 * let arr2 = [3, 4, 5, 6];
 * let arr3 = [5, 6];
 * includesAny(arr1, arr2) // returns true
 * includesAny(arr1, arr3) // returns false
 */
function includesAny(arrA, arrB) {
  return intersection(new Set(arrA), new Set(arrB)).size > 0;
}

/** Simply wrap input in array if it is not an array */
function asArray(input) {
  if (Array.isArray(input)) return input;
  return [input];
}

/**
 * Return input as an array
 * USAGE:
 * safeArray(); -> []
 * safeArray(null); -> []
 * safeArray(0); -> [0]
 * safeArray('a'); -> ['a']
 * safeArray([1,2,3]); -> [1,2,3]
 * safeArray([`a`, 0, { foo: 'bar' }]); -> [`a`, 0, { foo: 'bar' }]
 */
function safeArray(input) {
  if (Array.isArray(input)) return input;
  if (typeof input === 'undefined' || input === null) return [];
  return asArray(input);
}

/***/ }),

/***/ 576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  getBgImages: () => (/* binding */ getBgImages)
});

// UNUSED EXPORTS: asJpg, asMp4, base64GifToSrc, buildSources, filterAssetsByTags, findAssetByTags, findImageByTags, findImagesByTags, findVideoByTags, findVideosByTags, getAssetCoverSize, getCloudinaryUrl, getCloudinaryVersion, getImageDimensions, getOptimizedVideo, getVideoPlaceholder, getVideoPoster, getVideoThumb, hexToRgb, importAll, isFullscreen, isJpg, isMp4, isVideoFullscreen, placehold, retainFormat, rgbToHex, safePause, safePlay, sslUrl, stripCloudinaryUrl, toggleFullscreen, withSpecialtyTag, withoutSpecialtyTag

;// CONCATENATED MODULE: ./src/videos/placeholder-black-10s.mp4
const placeholder_black_10s_namespaceObject = "/dist/videos/placeholder-black-10s-23b41dc17cf05e907ef2.mp4";
// EXTERNAL MODULE: ./src/util/core/logger.js
var core_logger = __webpack_require__(813);
// EXTERNAL MODULE: ./src/util/core/element.js + 2 modules
var core_element = __webpack_require__(336);
// EXTERNAL MODULE: ./src/util/core/array.js
var array = __webpack_require__(276);
// EXTERNAL MODULE: ./src/util/core/string.js
var string = __webpack_require__(203);
// EXTERNAL MODULE: ./src/util/core/device.js
var device = __webpack_require__(109);
// EXTERNAL MODULE: ./src/util/core/tags.js
var tags = __webpack_require__(567);
;// CONCATENATED MODULE: ./src/util/core/assets.js












/**
 * @typedef {AssetData} ImageData
 * @property {string} type - 'image'
 * @property {string} thumb - the image url
 */

/**
 * @typedef {AssetData} VideoData
 * @property {string} type - 'video'
 * @property {string} thumb - video poster
 * @property {string} picture - also the video poster
 */

/** Predicate to find assets with specialty size tags */
function withSpecialtyTag(_ref) {
  let {
    tags = []
  } = _ref;
  return tags.includes(Tag.flextop) || tags.includes(Tag.split);
}

/** Predicate to find assets without specialty size tags */
function withoutSpecialtyTag(_ref2) {
  let {
    tags = []
  } = _ref2;
  return !tags.includes(Tag.flextop) && !tags.includes(Tag.split);
}
const placehold = {
  image: 'https://via.placeholder.com/150',
  video: placeholder_black_10s_namespaceObject
};
function isMp4(url) {
  return url.match(/\.mp4$/i);
}
function isJpg(url) {
  return url.match(/\.jpe?g$/i);
}
function asMp4(url) {
  if (isMp4(url)) return url;
  return `${url}.mp4`;
}
function asJpg(url) {
  if (isJpg(url)) return url;
  if (isMp4(url)) return url.replace(/\.mp4$/i, '.jpg');
  return `${url}.jpg`;
}
function sslUrl(url) {
  if (!url) return url;
  return url.replace(/http:/gi, 'https:');
}

/**
 * Remove the `f_auto` cloudinary transform so, we get back expected formats.
 * Useful when attempting to prefetch for caching
 * @param {string} asset - cloudinary url to modify
 */
function retainFormat(asset) {
  return asset.replace(/\/f_auto,/, '/').replace(/,f_auto/, '');
}

/**
 * Converts `rgb(0, 153, 51)` to `#009933`.
 * @param {string} rgb - the rgb color string to convert.
 */
function rgbToHex(rgb) {
  if (!rgb) return '#000000';
  const hex = x => `0${parseInt(x, 10).toString(16)}`.slice(-2);

  // IE8 returns color in hex
  if (rgb.match(/^#[\da-f]{6}$/)) return rgb;
  const parts = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
  const hash = hex(parts[1]) + hex(parts[2]) + hex(parts[3]).toLowerCase();
  return `#${hash}`;
}

/**
 * Converts `#009933` to `rgb(0, 153, 51)`.
 * @param {string} hex - the hex color string to convert.
 * @param {boolean} asString - if true, returned value is `rgb(<r>,<g>,<b>)` instead of an object
 */
function hexToRgb(hex) {
  let asString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const input = hex.length === 4 ?
  // extend shorthand to full, i.e. #000 to #000000
  `#${hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3]}` : hex;
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(input);
  const r = result ? parseInt(result[1], 16) : null;
  const g = result ? parseInt(result[2], 16) : null;
  const b = result ? parseInt(result[3], 16) : null;
  if (result) {
    return asString ? `rgb(${r}, ${g}, ${b})` : {
      r,
      g,
      b
    };
  }
  return null;
}
function getTransformations() {
  let type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'image';
  switch (type) {
    case 'image':
      return 'f_auto,q_auto:eco';
    case 'video':
      return 'vc_auto';
    case 'svg':
      return '';
    default:
      return 'f_auto,q_auto:eco';
  }
}

/**
 * Build a cloudinary asset version with current year, month, day.
 * See https://support.cloudinary.com/hc/en-us/articles/202520912-What-are-image-versions
 * See https://cloudinary.com/documentation/advanced_url_delivery_options#asset_versions
 * @returns {string} - the cloudinary version string, e.g. 'v20231126'
 */
function getCloudinaryVersion() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  return `v${year}${month}${day}`;
}

/**
 * Given a relative URL, output an absolute URL pointing to
 * the correct cloudinary instance.
 * @param {string} url - the url to transform
 * @param {'image'|'video'} type - One of {'image'|'video'}
 * @param {'prod'|'qa'|'staging'|'local'} env - the build environment
 * @returns {string}
 */
function getCloudinaryUrl(_ref3) {
  let {
    url = '',
    type = 'image',
    env = 'prod'
  } = _ref3;
  const local = env === 'local';
  const done = url.includes('cloudinary') || url.includes('cdn.sleepnumber');
  if (!url || local || done) return sslUrl(url);
  const clouds = {
    local: 'snbr-local',
    qa: 'snbr-qa',
    staging: 'snbr-stg',
    prod: 'sleepnumber'
  };
  const cloud = clouds[env] || clouds.prod;
  const uploadMapping = url.includes('_assets') ? 'uploads-remix' : 'uploads';
  const path = new URL(url, 'https://f.com').pathname;
  const isSvg = path.search(/\.svg$/g) > -1;
  const trans = getTransformations(isSvg ? 'svg' : type);
  const version = getCloudinaryVersion();
  const config = `${type}/upload/${trans}/${version}/${uploadMapping}`;
  return `https://res.cloudinary.com/${cloud}/${config}${path}`;
}

/**
 * Returns a thumbnail image of a cloudinary video at a specific time.
 * @param {ProductAsset|MediaSource|string} asset - media source or product asset or a cloudinary video url
 * @returns {string|null}
 */
function getVideoPlaceholder(asset) {
  let result = null;
  let time = 0;
  let url = asset.url || asset;
  if (asset instanceof ProductAsset || ProductAsset.isAssetLike(asset)) {
    url = asset.url;
    if (asset.type === 'video' && !!asset.thumbnail) {
      url = asset.thumbnail;
    }
    if (asset.poster_enabled) {
      url = asset.url;
      time = asset.poster_time;
    }
  }
  if (asset instanceof MediaSource) url = asset.src;
  if (!url.includes('cloudinary.com') && !url.includes('cdn.sleepnumber.com')) {
    // not a cloudinary url
    return result;
  }
  result = updateCloudinaryTransforms(url, [`so_${time}`]);
  return sslUrl(asJpg(result));
}

/**
 * Returns an image from a frame of a video with a 20% dark tint
 * @param {ProductAsset|MediaSource|string} asset - media source or product asset or a cloudinary video url
 * @returns {string|null}
 */
function getVideoPoster(asset) {
  let result = getVideoPlaceholder(asset);
  result = updateCloudinaryTransforms(result, ['co_black', 'e_colorize:20']);
  return result;
}

/**
 * Return a square thumbnail image for a video.
 * Builds a cloudinary url with transforms replaced to produce a square image,
 * 768px tall, with a black tint.
 * @param {AssetData} video - the product video asset data
 * @return {string}
 */
function getVideoThumb(video) {
  let start = 'auto';
  let url = video.thumbnail;
  if (video.poster_enabled) {
    start = video.poster_time;
    url = video.url;
  }
  const transforms = ['ar_1', 'c_fill', 'h_768', `so_${start}`, 'co_black', 'e_colorize:40'];
  const thumb = setCloudinaryTransforms(url, transforms);
  return sslUrl(asJpg(thumb));
}

/**
 * Returns the width and height of an image.
 * @param {string} url - URL to image
 * @returns {width: number, height: number} image dimensions
 */
function getImageDimensions(url) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height
      });
      img.onload = null;
    };
    img.src = url;
  });
}

/**
 * Returns the width and height it would take to cover an element using the
 * dimensions of an asset.  Simulates what object-fit: cover does.
 * @param {string|Image|Video} asset - the asset used to cover an area
 * @param {node|window} elem=window - the element to cover, defaults to window viewport
 * @returns {{width: number, height: number}}
 */
async function getAssetCoverSize(asset) {
  let elem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
  const isUrl = typeof asset === 'string';
  const dimensions = isUrl ? await getImageDimensions(asset) : {
    width: asset.width,
    height: asset.height
  };
  const isWin = elem === window;
  const toCover = {
    width: isWin ? window.innerWidth : elem.clientWidth,
    height: isWin ? window.innerHeight : elem.clientHeight
  };

  // Adjust width to cover, adjust height to maintain aspect ratio
  let diff = toCover.width - dimensions.width;
  let next_width = dimensions.width + diff;
  let next_height = dimensions.height * next_width / dimensions.width;
  dimensions.width = next_width;
  dimensions.height = next_height;

  // If height still doesn't cover,
  // adjust height to cover, adjust width to maintain aspect ratio
  if (dimensions.height < toCover.height) {
    diff = toCover.height - dimensions.height;
    next_height = dimensions.height + diff;
    next_width = dimensions.width * next_height / dimensions.height;
    dimensions.width = next_width;
    dimensions.height = next_height;
  }
  return dimensions;
}

/**
 * Returns object where keys are the file names. For importing multiple files.
 * https://webpack.js.org/guides/dependency-management/#requirecontext
 *
 * @param {function} requireContext - require.context() function
 * @return {object}  imported items with the key equal to file name.
 *
 * Example usage:
 * const images  = importAll(require.context('../public/images', false, /someFiles*\./)
 * const img1 = images[someFiles1.png].default
 */
function importAll(requireContext) {
  const imported = {};
  requireContext.keys().map(item => {
    return imported[item.replace('./', '')] = requireContext(item);
  });
  return imported;
}

/**
 * Remove transforms and file extensions from cloudinary URLs
 *
 * @param {string} videoUrl - Cloudinary video url
 * @return {string}
 */
function stripCloudinaryUrl(videoUrl) {
  const urlArr = videoUrl.split('/');
  // Strip existing transforms modifying codec or quality
  const urlArrNoTransforms = urlArr.filter(urlPart => !urlPart.includes('q_auto') && !urlPart.includes('vc_auto'));

  // Strip file extension assuming they're up to 4chars long (e.g. jpeg or mp4)
  const filename = urlArrNoTransforms.pop();
  const fileExtIdx = filename.lastIndexOf('.');
  const hasExt = filename.length - 5 <= fileExtIdx;
  const filenameNoExt = hasExt ? filename.substring(0, fileExtIdx) : filename;
  const strippedUrl = [...urlArrNoTransforms, filenameNoExt].join('/');
  return strippedUrl;
}

/**
 * Given a cloudinary video url and a device width
 * get an array of video urls and types optimized for that width.
 * Assets are scaled down while preserving aspect ratio, and never upscaled.
 *
 * @param {String} videoUrl - Cloudinary URL to video
 * @param {Boolean} keepOriginalWidth - Don't apply width transformations
 * @return {Array<MediaSource>} Video urls and formats for delivering optimized video
 */
function getOptimizedVideo(videoUrl, keepOriginalWidth) {
  if (!videoUrl) return null;
  // Use a width already eagerly transformed by the backend
  const transformWidth = isMobile() ? 360 : 1920;

  // For descriptions of these transforms see: https://cloudinary.com/documentation/transformation_reference
  const maxWidth = `w_${transformWidth}`;
  let transforms = ['c_limit', 'q_99',
  // Maintain aspect ratio when scaling by using asset metadata
  // Without fl_keep_dar some videos will scale improperly
  // SEE: https://support.cloudinary.com/hc/en-us/articles/4733025405458?input_string=aspect+ratio+isn%27t
  'fl_keep_dar', maxWidth];
  if (keepOriginalWidth) {
    transforms = ['q_auto:best'];
  }
  const formats = [
  // vp9: Chrome / Firefox, newer macOS
  {
    codecTransform: 'vc_vp9',
    container: 'webm',
    codec: 'vp9'
  },
  // h265: Safari iOS, older macOS, and hardware-supported ie11
  {
    codecTransform: 'vc_h265',
    container: 'mp4',
    codec: 'hvc1'
  },
  // h264: other browsers, most widely supported
  {
    codecTransform: 'vc_h264',
    container: 'mp4',
    codec: 'avc1'
  }];

  // Prepare URL to add our own transforms and file ext
  const strippedUrl = stripCloudinaryUrl(videoUrl);
  const sources = formats.map(_ref4 => {
    let {
      codecTransform,
      container,
      codec
    } = _ref4;
    const formatTransform = `f_${container}`;
    const transformString = [...transforms, codecTransform, formatTransform].join(',');
    const transformUrl = strippedUrl.replace('video/upload', `video/upload/${transformString}`);
    const src = [transformUrl, container].join('.');
    const type = `video/${container};codecs=${codec}`;
    return MediaSource.of(src, type);
  });
  return sources;
}
function isFullscreen(node) {
  return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement || document.webkitFullscreenElement ||
  // Current ios, you can only tell by checking elements
  node?.webkitDisplayingFullscreen || Array.from(document.querySelectorAll('video')).reduce((r, v) => r || v.webkitDisplayingFullscreen, false));
}
function isVideoFullscreen(figure, video) {
  const fse = document.fullscreenElement || document.webkitFullscreenElement;

  // Safari full-screens the video, others fullscreen the figure
  const fs = fse === video || fse === figure;
  return fs;
}
function toggleFullscreen(container, video) {
  // If fullscreen mode is active...
  if (isFullscreen(video) || isFullscreen(container)) {
    // ...exit fullscreen mode
    // (Note: this can only be called on document)
    if (document.exitFullscreen) document.exitFullscreen();else if (document.mozCancelFullScreen) document.mozCancelFullScreen();else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();else if (video.webkitExitFullscreen) {
      if (video?.webkitExitFullscreen) video.webkitExitFullscreen();
      if (container?.webkitExitFullscreen) container.webkitExitFullscreen();
    } else if (document.msExitFullscreen) document.msExitFullscreen();
    return false;
  }

  // ...otherwise enter fullscreen mode
  // NOTE:
  // Can be called on document, but here the specific element is used
  // as it will also ensure that the element's children, e.g. the custom
  // controls, go fullscreen also.
  if (container.requestFullscreen) container.requestFullscreen();else if (container.mozRequestFullScreen) container.mozRequestFullScreen();else if (container.webkitEnterFullscreen) container.webkitEnterFullscreen();else if (container.webkitRequestFullScreen) {
    // Safari 5.1 only allows proper fullscreen on the video element.
    // This also works fine on other WebKit browsers.
    // If you are using custom controls, you will need to hide the
    // default controls that appear again with css.
    video.webkitRequestFullScreen();
  } else if (video?.webkitEnterFullscreen) video.webkitEnterFullscreen();else if (container.msRequestFullscreen) container.msRequestFullscreen();
  return true;
}

/**
 * Filters asset in the collection that have all the specified tags.
 * @param {AssetData[]} collection - image or video asset collection
 * @param {string[]|string} tags - the required tag(s) the asset must have.
 * @param {string[]|string} [exclude] - optional tag(s) to that must not be present.
 * @returns {AssetData[]}
 */
function filterAssetsByTags(collection, tags, exclude) {
  const include = typeof tags === 'string' ? [tags] : tags;
  const assets = collection.filter(asset => {
    const includes = includesAll(asset.tags || [], include);
    let hasExcluded = false;
    if (exclude) {
      let exclude_these = exclude;
      if (typeof exclude === 'string') exclude_these = [exclude];
      hasExcluded = includesAny(asset.tags, exclude_these);
    }
    return includes && !hasExcluded;
  });
  return assets;
}

/**
 * Finds and returns the first asset in the collection that has all the specified tags.
 * @param {AssetData[]} collection - image or video asset collection
 * @param {string[]|string} tags - the required tag(s) the asset must have.
 * @param {string[]|string} [exclude] - optional tag(s) to that must not be present.
 * @returns {AssetData|null}
 */
function findAssetByTags(collection, tags, exclude) {
  const include = typeof tags === 'string' ? [tags] : tags;
  const asset = collection.find(asset => {
    const includes = includesAll(asset.tags || [], include);
    let hasExcluded = false;
    if (exclude) {
      let exclude_these = exclude;
      if (isString(exclude)) exclude_these = [exclude];
      hasExcluded = includesAny(asset.tags, exclude_these);
    }
    return includes && !hasExcluded;
  });
  return asset || null;
}

/**
 * Finds and returns the first image that has all the specified tags.
 * @param {object} product - the product data.
 * @param {string[]|string} tags - the required tags the image must have.
 * @param {string[]|string} [exclude] - optional tags to that must not be present.
 * @returns {AssetData|null}
 */
function findImageByTags(product, tags, exclude) {
  return findAssetByTags(product.images || [], tags, exclude);
}

/**
 * Finds and returns the first video that has all the specified tags.
 * @param {object} product - the product data.
 * @param {string[]|string} tags - the required tags the video must have.
 * @param {string[]|string} [exclude] - optional tags to that must not be present.
 * @returns {AssetData|null}
 */
function findVideoByTags(product, tags, exclude) {
  return findAssetByTags(product.videos || [], tags, exclude);
}

/**
 * Finds and returns all images that have all the specified tags.
 * @param {object} product - the product data.
 * @param {string[]|string} tags - the required tags the image must have.
 * @param {string[]|string} [exclude] - optional tags to that must not be present.
 * @returns {AssetData|null}
 */
function findImagesByTags(product, tags, exclude) {
  return filterAssetsByTags(product.images || [], tags, exclude);
}

/**
 * Finds and returns all videos that have all the specified tags.
 * @param {object} product - the product data.
 * @param {string[]|string} tags - the required tags the video must have.
 * @param {string[]|string} [exclude] - optional tags to that must not be present.
 * @returns {AssetData[]|null}
 */
function findVideosByTags(product, tags, exclude) {
  return filterAssetsByTags(product.videos || [], tags, exclude);
}

/**
 * Return an object keyed by {@link Breakpoint} entries and mapped to assets
 * @param {{ videos: AssetData[], images: AssetData[] }} assets - the image or videos
 * @return {{ Breakpoint: AssetData }}
 */
function buildSources(assets) {
  const hasVideos = assets?.videos?.length > 0;
  const collection = hasVideos ? assets.videos : assets.images;
  return {
    type: hasVideos ? 'video' : 'image',
    [BP.mb.name]: findAssetByTags(collection, Tag.mb),
    [BP.tb.name]: findAssetByTags(collection, Tag.tb),
    [BP.dt.name]: findAssetByTags(collection, Tag.dt)
  };
}

/**
 * Attempt to play an audio/video asset and ignore any
 * `The request is not allowed` errors.
 * @param {React.Ref | HTMLVideoElement} media
 */
function safePlay(media) {
  let onFailure = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
  const asset = media?.current ? media.current : media;
  if (!asset) return Promise.reject(new Error('No media asset provided'));
  if (!isFunc(asset?.play)) return Promise.reject(new Error('Not playable'));
  const promise = asset.play() || Promise.resolve();
  promise.catch(error => {
    // Autoplay was prevented.
    logger.log('Play was prevented on asset:', asset, 'Error:', error);
    onFailure(error);
  });
  return promise;
}

/**
 * Attempt to pause an audio/video asset.
 * @param {React.Ref | HTMLVideoElement} media
 */
function safePause(media) {
  // Allow React refs
  const asset = media?.current ? media.current : media;
  if (isFunc(asset?.pause)) asset.pause();
}

/**
 * Prefix a base64 GIF string to display in img src attributes
 * @param {string} base64Image - encoded image data
 * @return {string}
 */
function base64GifToSrc(base64Image) {
  const result = `data:image/gif;base64,${base64Image}`;
  return result;
}

/**
 * Returns an array of objects containing dom node and current background url
 * of all nested child elements that have a background image url currently set.
 * @param {HTMLElement|string} target
 */
function getBgImages(target) {
  const results = [];
  const element = (0,core_element.getElement)(target);
  if (!element) return results;
  const self = {
    node: element,
    bg: getComputedStyle(element).backgroundImage
  };
  if (self.bg !== 'none') results.push(self);
  Array.from(element.querySelectorAll('*')).map(n => ({
    node: n,
    bg: getComputedStyle(n).backgroundImage
  })).filter(n => n.bg !== 'none').forEach(n => results.push(n));
  return results;
}

/***/ }),

/***/ 168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isDebug: () => (/* binding */ isDebug),
/* harmony export */   isJestEnv: () => (/* binding */ isJestEnv),
/* harmony export */   isProduction: () => (/* binding */ isProduction),
/* harmony export */   timer: () => (/* binding */ timer),
/* harmony export */   win: () => (/* binding */ win)
/* harmony export */ });
/* unused harmony exports localUrl, qaUrl, stageUrl, prodUrl, sn_globals, isStaging, isQa, isDevelopment, isDevPage, isAdminPage, isTestEnv, timezone, locale, attributes, css, styles, months, specials, keyCodes, spacing, timing, mime, headers, millisPerYear, ALERT_TYPES, ALERT_FLAVORS, Status, Direction, USER_SEGMENT, CheckoutSteps, ZIndex, page_classes, page_selectors, regex */
/* harmony import */ var browser_or_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(192);
/* harmony import */ var browser_or_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(browser_or_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(734);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(531);
/* harmony import */ var _enumify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(829);
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(981);
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(814);






const localUrl = 'https://sleepnumber.test';
const qaUrl = 'https://qa.sleepnumber.com';
const stageUrl = 'https://staging.sleepnumber.com';
const prodUrl = 'https://www.sleepnumber.com';
const isJestEnv = __webpack_require__.g?.process?.env?.NODE_ENV === 'test';
let windowObject = __webpack_require__.g || window;
const isSSR = !browser_or_node__WEBPACK_IMPORTED_MODULE_0__.isBrowser && !isJestEnv;
if (isSSR) {
  const hosts = {
    local: 'https://sleepnumber.test:8090',
    qa: qaUrl,
    staging: stageUrl,
    production: prodUrl
  };
  const ssrHost = hosts[process.env.BUILD_ENV] || hosts.local;
  const ssrHref = `${ssrHost}/categories/beds-on-sale`;
  const ssrUrl = new URL(ssrHref);

  // Set the origin for all the places that check it
  windowObject = {
    ...windowObject,
    location: ssrUrl
  };
}
const win = windowObject;
const sn_globals = win?.sn_globals || {
  config: {}
};
const isProduction = () => sn_globals.config.wa_env === 'production';
const isStaging = () => sn_globals.config.wa_env === 'staging';
const isQa = () => sn_globals.config.wa_env === 'qa';
const isDevelopment = () => sn_globals.config.wa_env === 'development';
const isDevPage = win?.location?.pathname?.startsWith('/dev/');
const isAdminPage = win?.top?.location?.href?.includes('/admin/') || win?.location?.pathname?.startsWith('/admin/');
const isTestEnv = sn_globals.config.wa_env !== 'production';
function isDebug() {
  if (!browser_or_node__WEBPACK_IMPORTED_MODULE_0__.isBrowser) return false;
  const cookieValue = js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get(_Cookie__WEBPACK_IMPORTED_MODULE_2__["default"].debug.name);
  return cookieValue && cookieValue !== 'false';
}
(0,_object__WEBPACK_IMPORTED_MODULE_4__.namespace)('sn.toggleDebug', function toggleDebug() {
  const current = isDebug();
  js_cookie__WEBPACK_IMPORTED_MODULE_1___default().set(_Cookie__WEBPACK_IMPORTED_MODULE_2__["default"].debug.name, !current);
  // eslint-disable-next-line no-console
  console.log(`sn-debug set to "${!current}"`);
});
const timezone = 'Intl' in win ? Intl.DateTimeFormat().resolvedOptions().timeZone : 'America/Chicago';

/** Returns the browser locale. Defaults to `en-US`. */
function locale() {
  return navigator.languages && navigator.languages[0] || navigator.language || 'en-US';
}
const attributes = {
  // window.sessionStorage fields
  session: {
    mlp: {
      compare: 'mlp_compare_order'
    },
    geo_prompted: 'geo_prompted'
  },
  // window.localStorage fields
  local: {
    modals: {
      insider_appreciation_shown: 'insider_appreciation_shown',
      insider_signin_shown: 'insider_signin_shown',
      lead_capture_link: 'lead_capture_link',
      lead_compare_shown: 'lead_compare_shown',
      lead_compare_submitted: 'lead_compare_submitted',
      lead_modal_email_submitted: 'lead_capture_email_submitted',
      lead_modal_help_shown: 'lead_capture_help_shown',
      lead_modal_help_submitted: 'lead_capture_help_submitted',
      lead_modal_shown: 'lead_capture_shown',
      lead_modal_submitted: 'lead_capture_submitted',
      lead_quiz_shown: 'lead_quiz_shown',
      lead_quiz_submitted: 'lead_quiz_submitted'
    },
    toasts: {
      blog_toast_shown: 'blog_toast_shown',
      bq_toast_shown: 'bq_toast_shown'
    },
    misc: {
      hd_pending_cancel: 'hd_pending_cancel',
      last_tracked_order_id: 'last_tracked_order_id'
    },
    bq: {
      skus: 'bed-quiz-skus',
      results: 'bed-quiz-results'
    },
    ic: {
      points: 'inner-circle-points'
    }
  },
  // Response header fields
  headers: {
    flash: 'x-flash-messages'
  }
};

// Used in console logging
const css = {
  fwb: 'font-weight: bold;',
  fwn: 'font-weight: normal;',
  black: 'color: #777777;',
  gray: 'color: #9e9e9e;',
  white: 'color: #ffffff',
  blue: 'color: #03a9f4;',
  green: 'color: #4caf50;',
  red: 'color: #f20404;',
  orange: 'color: #ff8000;'
};

// Used in console logging
const styles = {
  normal: `${css.fwn}${css.black}`,
  strong: `${css.fwb}${css.black}`,
  label: `${css.fwb}${css.gray}`,
  value: `${css.fwn}${css.blue}`,
  success: `${css.fwn}${css.green}`,
  error: `${css.fwn}${css.red}`,
  orange: `${css.fwn}${css.orange}`
};
const months = [{
  name: 'January',
  abbr: 'Jan',
  value: 1
}, {
  name: 'February',
  abbr: 'Feb',
  value: 2
}, {
  name: 'March',
  abbr: 'Mar',
  value: 3
}, {
  name: 'April',
  abbr: 'Apr',
  value: 4
}, {
  name: 'May',
  abbr: 'May',
  value: 5
}, {
  name: 'June',
  abbr: 'Jun',
  value: 6
}, {
  name: 'July',
  abbr: 'Jul',
  value: 7
}, {
  name: 'August',
  abbr: 'Aug',
  value: 8
}, {
  name: 'September',
  abbr: 'Sept',
  value: 9
}, {
  name: 'October',
  abbr: 'Oct',
  value: 10
}, {
  name: 'November',
  abbr: 'Nov',
  value: 11
}, {
  name: 'December',
  abbr: 'Dec',
  value: 12
}];
const specials = {
  asterisk: {
    label: 'Asterisk',
    value: '*',
    entity: '*',
    unicode: '\u20F0'
  },
  reg: {
    label: 'Registered Trade Mark',
    value: '®',
    entity: '&reg;',
    unicode: '\u00AE'
  },
  tm: {
    label: 'Trade Mark',
    value: '™',
    entity: '&trade;',
    unicode: '\u2122'
  },
  sm: {
    label: 'Service Mark',
    value: '℠',
    entity: '&#8480;',
    unicode: '\u2120'
  },
  dagger: {
    label: 'Dagger',
    value: '†',
    entity: '&dagger;',
    unicode: '\u2020'
  },
  doubledagger: {
    label: 'Double Dagger',
    value: '‡',
    entity: '&Dagger;',
    unicode: '\u2021'
  },
  section: {
    label: 'Section',
    value: '§',
    entity: '&sect;',
    unicode: '\u00A7'
  }
};
const keyCodes = {
  esc: 27,
  space: 32,
  backspace: 8,
  enter: 13,
  tab: 9,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  home: 36,
  end: 35,
  n: 78,
  p: 80
};
keyCodes.radio = {
  prev: [keyCodes.left, keyCodes.up],
  next: [keyCodes.right, keyCodes.down]
};
keyCodes.arrows = [keyCodes.left, keyCodes.up, keyCodes.right, keyCodes.down];
const spacing = {
  space: '\u0020',
  nbsp: '\u00a0',
  ndash: '\u0096',
  mdash: '\u0097',
  ellipsis: '\u2026'
};
const timing = {
  scroll: 500,
  expand: 150,
  transition: 250,
  animation: 'cubic-bezier(0.42, 0, 0.58, 1)'
};
const mime = {
  app: {
    json: 'application/json',
    form: 'multipart/form-data'
  }
};
const headers = {
  accept: 'Accept',
  content: 'Content-Type'
};
const millisPerYear = 31536000000;
const ALERT_TYPES = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  danger: 'danger',
  warning: 'warning',
  info: 'info',
  dark: 'dark',
  light: 'light'
};
const ALERT_FLAVORS = {
  normal: 'normal',
  toast: 'toast'
};

/**
 * General purpose status enum.
 * @enum
 */
class Status extends _enumify__WEBPACK_IMPORTED_MODULE_3__["default"] {
  static idle = new Status();
  static pending = new Status();
  static success = new Status();
  static error = new Status();
  static active = new Status();
  static complete = new Status();
  static _ = this.closeEnum();
}

/**
 * General purpose direction enum.
 * @enum
 */
class Direction extends _enumify__WEBPACK_IMPORTED_MODULE_3__["default"] {
  static up = new Direction();
  static down = new Direction();
  static left = new Direction();
  static right = new Direction();
  static _ = this.closeEnum();
}

/**
 * Listing of user segments.
 * @enum
 */
const USER_SEGMENT = {
  innercircle: 'InnerCircle',
  insider: 'Insider'
};
class CheckoutSteps extends _enumify__WEBPACK_IMPORTED_MODULE_3__["default"] {
  static NotStarted = new CheckoutSteps({
    name: 'not_started'
  });
  static Login = new CheckoutSteps({
    name: 'login',
    next: () => CheckoutSteps.Shipping
  });
  static Shipping = new CheckoutSteps({
    name: 'shipping',
    next: () => CheckoutSteps.Delivery
  });
  static Delivery = new CheckoutSteps({
    name: 'delivery',
    next: () => CheckoutSteps.Payment
  });
  static Payment = new CheckoutSteps({
    name: 'payment',
    next: () => CheckoutSteps.Review
  });
  static Review = new CheckoutSteps({
    name: 'review',
    next: () => CheckoutSteps.Confirmation
  });
  static Confirmation = new CheckoutSteps({
    name: 'confirmation'
  });
  static _ = this.closeEnum();
  constructor(props) {
    super();
    this.next = props.next;
    this.name = props.name;
  }
}
const zindex_dropdown = 1000;
const zindex_fixed = 1030;
const zindex_modal = 107159;
const zindex_modal_backdrop = 1040;
const zindex_popover = 1060;
const zindex_sticky = 1020;
const zindex_tooltip = 1070;

/** Global z-index values */
class ZIndex extends _enumify__WEBPACK_IMPORTED_MODULE_3__["default"] {
  // From bootstrap
  static dropdown = new ZIndex(zindex_dropdown);
  static sticky = new ZIndex(zindex_sticky);
  static fixed = new ZIndex(zindex_fixed);
  static modal_backdrop = new ZIndex(zindex_modal_backdrop);
  static modal = new ZIndex(zindex_modal);
  static popover = new ZIndex(zindex_popover);
  static tooltip = new ZIndex(zindex_tooltip);

  // Live person chat button
  static chat_button = new ZIndex(107158);
  // Overlap live person chat
  static over_chat = new ZIndex(107159);
  constructor(index) {
    super();
    this.value = index;
  }
}

/** Classes used as logic flags on the page. */
const page_classes = {
  header_unpin: '-unpinned-header',
  jumping: '-jump-scrolling',
  position_sticky: 'position-sticky',
  top_below_header: 'top-below-header',
  search_open: '-search-open',
  skip_nav_show: '-skip-nav-show'
};
// cx can take arrays: `cx('foo', page_classes.sticky_top)`
page_classes.sticky_top = [page_classes.position_sticky, page_classes.top_below_header];
const page_selectors = {
  sticky_top: '.position-sticky.top-below-header',
  search_open: '.-search-open',
  header_unpin: '.-unpinned-header',
  jumping: '.-jump-scrolling'
};

/** Use performance API if it's available for better precision. */
const timer = (0,_function__WEBPACK_IMPORTED_MODULE_5__.isFunc)(win, 'performance.now') ? win?.performance : win?.Date;
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

/***/ }),

/***/ 109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports Breakpoint, isMobile, isTablet, isDesktop, isPreModule, getBreakpoint, isIos, isAndroid, isMobileDevice, getDeviceType, isIE, isSafari, isFirefox, isLandscape, events */
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
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series([46])0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br([ev])w|bumb|bw-([nu])|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do([cp])o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly([-_])|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-([mpt])|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c([- _agpst])|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac([ -/])|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja([tv])a|jbro|jemu|jigs|kddi|keji|kgt([ /])|klon|kpt |kwc-|kyo([ck])|le(no|xi)|lg( g|\/([klu])|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t([- ov])|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30([02])|n50([025])|n7(0([01])|10)|ne(([cm])-|on|tf|wf|wg|wt)|nok([6i])|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan([adt])|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c([-01])|47|mc|nd|ri)|sgh-|shar|sie([-m])|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel([im])|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c([- ])|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(a.substr(0, 4)) ||
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

/***/ 336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  findAncestor: () => (/* binding */ findAncestor),
  getElement: () => (/* binding */ getElement),
  isDisplayNone: () => (/* binding */ isDisplayNone),
  isElement: () => (/* binding */ isElement)
});

// UNUSED EXPORTS: addClass, addListeners, addTabindexToContent, after, animate, append, before, closest, contains, create, css, fadeIn, fadeOut, findWithRetry, focusFirstElement, focusSection, gebi, getChildMeasurements, getHiddenMeasurements, getMeasurement, hasClass, height, hide, html, index, is, isElementAboveViewport, isElementInViewport, isNotHidden, next, nextAll, offset, outerHeight, outerWidth, position, prepend, prev, prevAll, qs, qsa, ready, remove, removeClass, removeListeners, scrollLeft, scrollTop, show, siblings, text, toggle, toggleClass, transitionEndListener, trigger, triggerBrowserReflow, width

// EXTERNAL MODULE: external "browser-or-node"
var external_browser_or_node_ = __webpack_require__(192);
;// CONCATENATED MODULE: external "dom-helpers/css"
const css_namespaceObject = require("dom-helpers/css");
;// CONCATENATED MODULE: external "dom-helpers/transitionEnd"
const transitionEnd_namespaceObject = require("dom-helpers/transitionEnd");
// EXTERNAL MODULE: ./src/util/core/constants.js
var constants = __webpack_require__(168);
// EXTERNAL MODULE: ./src/util/core/logger.js
var core_logger = __webpack_require__(813);
// EXTERNAL MODULE: ./src/util/core/string.js
var string = __webpack_require__(203);
// EXTERNAL MODULE: ./src/util/core/Deferred.js
var core_Deferred = __webpack_require__(292);
;// CONCATENATED MODULE: ./src/util/core/element.js









/* Utilities
   --------------------------------------------------------------- */

/** Returns true if this is a dom element */
function isElement(node) {
  return !!node?.nodeType;
}

/**
 * Returns target if it is an element or attempts to find it via query selector
 * @param {HTMLElement|string} target -
 *        the target element or a css selector to an element
 * @param {HTMLElement|string} [container] -
 *        an optional container to look inside when using a css selector as the
 *        target
 * @return {HTMLElement|null}
 */
function getElement(target, container) {
  if (target === window || isElement(target)) return target;
  const within = !container ? document : getElement(container);
  try {
    return within.querySelector(target) || null;
  } catch (err) {
    core_logger["default"].error('Error getting element', 'target', target, 'container', container, err);
    return null;
  }
}

/**
 * Get element by id
 * @param {string} id - the id of the element to find
 * @returns {HTMLElement|undefined}
 */
function gebi(id) {
  return document.getElementById(id);
}

/**
 * Returns selected elements as an array
 * If two arguments, the first one is assumed to be the node to query.
 * @return {HTMLElement[]}
 */
function qsa() {
  const node = arguments.length === 2 ? arguments.length <= 0 ? undefined : arguments[0] : document;
  const selector = arguments.length === 2 ? arguments.length <= 1 ? undefined : arguments[1] : arguments.length <= 0 ? undefined : arguments[0];
  return Array.from(node.querySelectorAll(selector));
}

/**
 * Find and element by query selector
 * If two arguments, the first one is assumed to be the node to query.
 * @return {HTMLElement|undefined}
 */
function qs() {
  const node = arguments.length === 2 ? arguments.length <= 0 ? undefined : arguments[0] : document;
  const selector = arguments.length === 2 ? arguments.length <= 1 ? undefined : arguments[1] : arguments.length <= 0 ? undefined : arguments[0];
  return node.querySelector(selector);
}

/**
 * Find the closest ancestor matching the selector
 * Replaces $(selector).closest
 * @return {HTMLElement|undefined}
 */
function closest(target, selector) {
  if (!target) return null;
  let element = getElement(target);
  const matchesSelector = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.msMatchesSelector;
  while (element) {
    if (matchesSelector.call(element, selector)) return element;
    element = element.parentElement;
  }
  return null;
}

/**
 * Like `snq.closest()` except a function is used instead of selectors.
 * Finds the closest ancestor that passes the predicate function.
 * @param {string|HTMLElement} target - the starting point node
 * @param {function} predicate - the predicate function
 * @return {HTMLElement|null}
 */
function findAncestor(target, predicate) {
  let element = getElement(target)?.parentElement;
  if (!isElement(element)) return null;
  while (element) {
    if (predicate(element)) return element;
    element = element.parentElement;
  }
  return null;
}

/** Add a class to an element */
function addClass(target) {
  let className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  const classes = className.trim().split(' ');
  const element = getElement(target);
  classes.forEach(c => {
    if (element) element.classList.add(c);
  });
  return element;
}

/** Remove a class from an element */
function removeClass(target) {
  let className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  const classes = className.trim().split(' ');
  const element = getElement(target);
  classes.forEach(c => {
    if (element) element.classList.remove(c);
  });
  return element;
}

/** Add an element after a target */
function after(target, element) {
  getElement(target).insertAdjacentElement('afterend', element);
}

/** Add an element before a target */
function before(target, element) {
  getElement(target).insertAdjacentElement('beforebegin', element);
}

/** Append an element to a parent */
function append(target, element) {
  getElement(target).appendChild(element);
}

/** Prepend an element to a parent */
function prepend(target, element) {
  const parent = getElement(target);
  const elem = isString(element) ? create(element) : element;
  parent.insertBefore(elem, parent.firstChild);
}

/** Is the target a child of the parent */
function contains(parent, child) {
  const p = getElement(parent);
  const c = getElement(child);
  return p !== c && p.contains(c);
}

/** Remove an element */
function remove(target) {
  const element = getElement(target);
  element.parentNode.removeChild(element);
}

/**
 * Get or set a css property on an element
 * @param {string|node} target - the target element or css selector to it
 * @param {string} ruleName - the js version (camelCase) of the css property name
 * @param {string} [value] - if provide, the css property is set to this value
 * @return {string|node} the node when setting a value, the value when getting a value
 */
function css(target, ruleName, value) {
  const rule = camelCase(ruleName);
  const element = getElement(target);
  if (typeof value !== 'undefined') {
    // Set a css value
    element.style[rule] = value;
    return element;
  }

  // get a css value
  const win = element.ownerDocument.defaultView;
  return win.getComputedStyle(element)[rule];
}

/**
 * Get or set the text content of an element
 * @param {string|node} target - the target element or css selector to it
 * @param {string} [value] - if provide, the text context is set to this value
 * @return {string|node} the node when the text content is being set, otherwise the text content
 */
function element_text(target, value) {
  const element = getElement(target);
  if (typeof value === 'undefined') return element.textContent || '';
  element.textContent = value;
  return element;
}

/**
 * Get or set the inner html of an element
 * Replaces $('.foo').html
 * @param {string|node} target - the target element or css selector to it
 * @param {string} [value] - if provide, the inner html is set to this value
 * @return {string|node} the node when the inner html is being set, otherwise the text content
 */
function html(target, value) {
  const element = getElement(target);
  if (typeof value === 'undefined') return element.innerHTML;
  element.innerHTML = value;
  return element;
}

/**
 * Create an html document fragment from html text.
 * Replaces $('<div class="foo">bar</div>');
 * @param {string} html - the html text, i.e. "<div>foo</div>" or "<button>"
 * @return {DocumentFragment|Element} the element if only one was created or the fragment
 */
function create(html) {
  const range = document.createRange();
  const parse = range.createContextualFragment.bind(range);
  const fragment = parse(html);
  if (fragment.childElementCount === 1) return fragment.childNodes[0];
  return fragment;
}

/** Return the text content of an element */
function hasClass(target, className) {
  const elem = getElement(target);
  return elem && elem.classList.contains(className);
}

/**
 * Adds or removes a class from an element
 * @param {string|node} target
 * @param {string} className
 * @param {boolean} [condition] - if present class is added/removed based on this
 */
function toggleClass(target) {
  let className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  let condition = arguments.length > 2 ? arguments[2] : undefined;
  const hasCond = typeof condition !== 'undefined';
  const element = getElement(target);
  const classes = className.trim().split(' ');
  classes.forEach(c => {
    if (hasCond) {
      if (condition) element?.classList?.add(c);else element?.classList?.remove(c);
    } else {
      element?.classList?.toggle(c);
    }
  });
  return element;
}

/** Return the index of an element within it's parents child list */
function index(target) {
  let index = -1;
  const element = getElement(target);
  if (!element) return index;
  Array.from(getElement(element.parentElement).children).forEach((c, i) => {
    if (c === element) index = i;
  });
  return index;
}

/** Returns true if the target matches the selector */
function is(target, selector) {
  const element = getElement(target);
  return (element.matches || element.matchesSelector || element.msMatchesSelector || element.mozMatchesSelector || element.webkitMatchesSelector || element.oMatchesSelector).call(element, selector);
}

/** Returns the element immediately after this one */
function next(target) {
  return getElement(target).nextElementSibling;
}

/** Returns all elements after this one */
function nextAll(elem, filter) {
  const siblings = [];
  let nextElem = elem.parentNode.firstChild;
  // eslint-disable-next-line no-cond-assign
  do {
    // eslint-disable-next-line no-continue
    if (nextElem.nodeType === 3) continue; // ignore text nodes
    // eslint-disable-next-line no-continue
    if (nextElem === elem) continue; // ignore elem of target
    if (nextElem === elem.nextElementSibling) {
      if (!filter || filter(elem)) {
        siblings.push(nextElem);
        elem = nextElem;
      }
    }
  } while (nextElem = nextElem.nextSibling);
  return siblings;
}

/** Returns the element immediately before this one */
function prev(target) {
  return getElement(target).previousElementSibling;
}

/** Returns all elements before this one */
function prevAll(elem, filter) {
  const siblings = [];
  let current = elem;
  // eslint-disable-next-line no-cond-assign
  while (current = current.previousSibling) {
    // eslint-disable-next-line no-continue
    if (current.nodeType === 3) continue; // ignore text nodes
    if (!filter || filter(current)) siblings.push(current);
  }
  return siblings;
}

/** Returns the sibling elements of an element */
function siblings(target) {
  const element = getElement(target);
  return Array.from(element.parentNode.children).filter(el => el !== element);
}

/**
 * Returns the top and left offsets of this element relative to the document
 * Replaces $.offset()
 * @param {HTMLElement|string} target
 */
function offset(target) {
  const node = getElement(target);
  const rect = node.getBoundingClientRect();
  return {
    node,
    top: rect.top + window.pageYOffset - document.documentElement.clientTop,
    left: rect.left + window.pageXOffset - document.documentElement.clientLeft
  };
}

/** Replaces $(window).scrollTop() */
function scrollTop() {
  let target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : win;
  if (!isBrowser) return 0; // Make safe for SSR
  if (target === window) {
    return (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
  }
  const container = getElement(target);
  return container.scrollTop;
}

/** Replaces $(window).scrollLeft() */
function scrollLeft() {
  let target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  if (target === window) {
    return (window.pageXOffset || document.documentElement.scrollLeft) - (document.documentElement.clientLeft || 0);
  }
  const container = getElement(target);
  return container.scrollLeft;
}

/**
 * Returns the outer height of the element
 * @param {string|node} target - the element to measure or css selector to it
 * @param {boolean} [includeMargin=false] - if true, measurement will include margin
 * @return {number}
 */
function element_outerHeight(target) {
  let includeMargin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const element = getElement(target);
  if (!element) return 0;
  let height = element.offsetHeight;
  if (!includeMargin) return height;
  const style = getComputedStyle(element);
  height += parseInt(style.marginTop, 10) + parseInt(style.marginBottom, 10);
  return height;
}

/**
 * Returns the outer width of the element
 * @param {string|node} target - the element to measure
 * @param {boolean} [includeMargin=false] - if true, measurement will include margin
 * @return {number}
 */
function element_outerWidth(target) {
  let includeMargin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const element = getElement(target);
  if (!element) return 0;
  let width = element.offsetWidth;
  if (!includeMargin) return width;
  const style = getComputedStyle(element);
  width += parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10);
  return width;
}

/** Return the offset position of this element */
function position(target) {
  const element = getElement(target);
  return {
    top: element.offsetTop,
    left: element.offsetLeft
  };
}

/**
 * Get or set the height of an element
 * @param {string|node} target - the target element or css selector to it
 * @param {function|string|number} [value] - function, string, or number to set the height to
 * @returns {number|node} the height when not setting a value, the element when setting a value
 */
function height(target, value) {
  const element = getElement(target);
  if (!value) return element.offsetHeight;
  const val = typeof value === 'function' ? value() : value;
  if (typeof val === 'string') element.style.height = val;else element.style.height = `${val}px`;
  return element;
}

/**
 * Get or set the width of an element
 * @param {string|node} target - the element to adjust
 * @param {function|string|number} [value] - function, string, or number to set the width to
 * @returns {number|node} the width when not setting a value, the element when setting a value
 */
function width(target, value) {
  const element = getElement(target);
  if (!value) return element.offsetWidth;
  const val = typeof value === 'function' ? value() : value;
  if (typeof val === 'string') element.style.width = val;else element.style.width = `${val}px`;
  return element;
}

/**
 * Returns the node plus the left, right, width, and height measurements of an element
 * @param {string|node} target - the element to measure
 * @return {{
 *   node: node,
 *   left: number,
 *   width: number,
 *   right: number,
 *   height: number
 * }}
 */
function getMeasurement(target) {
  const node = getElement(target);
  return {
    node,
    left: node.offsetLeft,
    right: node.offsetLeft + node.clientWidth,
    width: node.clientWidth,
    height: node.clientHeight
  };
}

/**
 * Returns the measurements of all children in a container.
 * @param {string|node} target - the element whose children we are measuring
 * @return {[{
 *   index: number,
 *   node: node,
 *   left: number,
 *   width: number,
 *   right: number,
 *   height: number
 * }]}
 */
function getChildMeasurements(target) {
  const container = getElement(target);
  if (!container?.childNodes) return {};
  return Array.from(container.childNodes).map((node, i) => ({
    index: i,
    ...getMeasurement(node)
  }));
}

/**
 * Return the measurements of a hidden element as a promise by cloning it and
 * measuring it in an offscreen container.
 * @param {HTMLElement} node - the currently hidden node to clone
 * @param {string} [selector] - optional selector to the child node to measure
 * @param {boolean} queryAll - return all query selector measurements
 * @return Promise<{ height: string, width: string, outerHeight: string, outerWidth: string }>
 */
function getHiddenMeasurements(node, selector) {
  let queryAll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  const offscreen = document.createElement('div');
  offscreen.style.position = 'absolute';
  offscreen.style.top = '-9999px';
  offscreen.style.left = '-9999px';
  offscreen.ariaHidden = 'true';
  document.body.appendChild(offscreen);
  const clone = node.cloneNode(true);
  offscreen.style.setProperty('width', `${element_outerWidth(node, true)}px`);
  offscreen.appendChild(clone);

  // Need to do this in a promise in order to wait for images to load/render
  return new Promise(resolve => {
    setTimeout(() => {
      const targets = typeof selector !== 'undefined' ? qsa(clone, selector) : clone;
      const measurements = targets.map(target => {
        const result = {
          height: '',
          width: '',
          outerHeight: '',
          outerWidth: ''
        };
        result.width = width(target);
        result.height = height(target);
        result.outerWidth = element_outerWidth(target, true);
        result.outerHeight = element_outerHeight(target, true);
        return result;
      });
      document.body.removeChild(offscreen);
      const resolved = queryAll ? measurements : measurements[0];
      resolve(resolved);
    }, 200);
  });
}

/**
 * Returns true if the element is in the viewport.
 * @param {node} elem - the element in question
 * @param {number} [offset=5] - optional offset, i.e. use to determine half in viewport
 *                              Defaults to 5.
 *                              With an offset of 0, you can't actually get to
 *                              the 'bottom' to trigger an in-view scenario.
 *                              i.e. if bottom is 940, you end up at 940.1
 * @return {boolean}
 */
function isElementInViewport(elem) {
  let offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  // Handle elements that are wrapped by jQuery
  const el = getElement(elem);
  if (!el || !el.getBoundingClientRect) return false;
  const rect = el.getBoundingClientRect();
  return rect.top + offset >= 0 && rect.left >= 0 && rect.bottom - offset <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

/** Return `true` if the element is above the current top of the viewport */
function isElementAboveViewport(elem) {
  const el = getElement(elem);
  if (!el || !el.getBoundingClientRect) return false;
  const rect = el.getBoundingClientRect();
  return rect.bottom < 0;
}

/** Find and element, retrying multiple times. */
function findWithRetry(_ref, dfd) {
  let {
    target,
    retries = 3,
    retryDelayMs = 100
  } = _ref;
  const deferred = dfd || new Deferred();
  const element = getElement(target);
  if (element) {
    deferred.resolve(element);
  } else if (retries > 0) {
    setTimeout(() => {
      findWithRetry({
        target,
        retries: retries - 1,
        retryDelayMs
      }, deferred);
    }, retryDelayMs);
  } else {
    deferred.reject(`Failed to find element '${target}'`);
  }
  return deferred;
}
function addTabindexToContent() {
  const contentSelectors = ['.tippy-top', 'header', '.content'];
  const tabableElements = ['a[href]', 'button:not([disabled])', 'area[href]'];
  qsa(contentSelectors.map(s => tabableElements.map(e => `${s} ${e}`)).join(',')).forEach(el => {
    if (!el.getAttribute('tabindex')) el.setAttribute('tabindex', '0');
  });
}

/**
 * Attempt to focus a section of the page, either the target itself or the
 * first visible header inside the section.
 * @param {string|HTMLElement} target - the section to focus
 */
function focusSection(target) {
  if (!target) return;
  const el = getElement(target);
  if (el?.hasAttribute('tabindex')) {
    // Focus this element
    el.focus();
  } else {
    // Focus the first visible header inside element
    const headers = qsa(el, 'h2, h3, h4');
    const filtered = headers.filter(el => el.offsetParent !== null); // remove hidden elements
    const header = filtered?.[0];
    if (header) header.focus();
  }
}

/**
 * Find the first focusable element within the selector, and give it focus
 * @param {node|string} selector
 */
function focusFirstElement() {
  let target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.page-body';
  const container = getElement(target);
  const focusable = qsa(container, 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  const filtered = focusable.filter(el => el.offsetParent !== null); // remove hidden elements
  const firstFocusable = filtered?.[0] || null;
  if (!firstFocusable) return;
  firstFocusable.focus();
}

/** Return true if this element is visible, by checking offset parents up the tree */
function isNotHidden(target) {
  const el = getElement(target);
  if (!el) return false;
  let current = el.offsetParent;
  if (!current) return false;
  while (current) {
    if (current === document.body) break;
    if (!current.offsetParent) return false;
    current = current.offsetParent;
  }
  return true;
}

/* Events
   --------------------------------------------------------------- */

/**
 * @typedef SnListener
 * @property {function} cb - the event handler callback function
 * @property {string} filter - css selector for event target filters i.e. 'input, .btn'
 * @property {*} opts - any options passed to `addEventHandler`
 * @property {boolean} log - should this particular event be logged
 */

/**
 * Add a set of event listeners to a dom element.
 * A listener can be a function or an array of [function, options object].
 * @param {node|string} target - the dom element or css selector to add listeners to
 * @param {Object.<string, function|SnListener>} listeners - events keyed to listener functions
 * @param {boolean} log - if true, events are logged to the console
 *
 * Examples:
 * // Single with logging
 * const remove = snq.addListeners('#foo', { click: myClickHandler }, true);
 * remove();
 *
 * // Multiple with logging
 * const remove = snq.addListeners(elem, {
 *   click: myClickHandler,
 *   touch: myTouchHandler,
 * }, true);
 * remove();
 *
 * // With specific event listener options and per event logging
 * const remove = snq.addListeners(window, {
 *   click: {
 *     cb: myClickHandler,
 *     log: true,
 *     opts: { passive: false, once: true }
 *   }
 * });
 * remove();
 *
 * // With filtering, only listen for clicks on inputs or .btn elements
 * const remove = snq.addListeners(document, {
 *   click: {
 *     cb: myClickHandler,
 *     filter: 'input, .btn'
 *   }
 * });
 * remove();
 */
function addListeners(target, listeners) {
  let log = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  const element = getElement(target);
  const grouper = logger.groupCollapsed || logger.info;
  const groupend = logger.groupEnd || noop;
  const {
    label,
    orange
  } = styles;
  const consoleStyles = [`${label}`, `${orange}`, `${label}`];
  const removes = [];
  Object.entries(listeners).forEach(_ref2 => {
    let [event, listener] = _ref2;
    const hasOptions = typeof listener === 'object';
    const cb = hasOptions ? listener.cb : listener;
    const options = hasOptions ? listener.opts : undefined;
    const logThis = hasOptions ? listener.log : false;
    const filters = hasOptions ? listener.filter : undefined;
    const handler = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      const [e] = args;
      if (!filters || !!closest(e.target, filters)) {
        if (log || logThis) {
          const msg = `%cFiring listener for "%c${event}%c"`;
          grouper.apply(console, [msg, ...consoleStyles]);
          logger.info(`%cCallback`, `${ccss.orange}`, cb);
          logger.info(`%cEvent`, `${ccss.orange}`, ...args);
          groupend();
        }
        cb(...args);
      }
    };
    if (event.trim().includes(' ')) {
      // register for multiple events
      const events = event.trim().split(' ');
      events.forEach(e => {
        element.addEventListener(e, handler, options);
        // Add the args we need to call `removeEventListener`
        removes.push([e, handler, options].filter(Boolean));
      });
    } else {
      // single event
      element.addEventListener(event, handler, options);
      // Add the args we need to call `removeEventListener`
      removes.push([event, handler, options].filter(Boolean));
    }
  });
  return function remove() {
    removes.forEach(r => element.removeEventListener(...r));
  };
}

/**
 * Remove a set of event listeners to a dom element
 * @param {Node} el - the dom element to remove listeners from
 * @param {Object.<string, function>} listeners - events keyed to listener functions
 */
function removeListeners(el, listeners) {
  Object.entries(listeners).forEach(_ref3 => {
    let [event, listener] = _ref3;
    el.removeEventListener(event, listener);
  });
}

/** Replaces $(document).ready(eventHandler); and the shorthand $(eventHandler); */
function ready(callback) {
  if (!isBrowser) return;
  if (document.readyState !== 'loading') callback();else document.addEventListener('DOMContentLoaded', callback);
}

/**
 * Trigger an event on a target
 * @param {string|node} target - target of event
 * @param {string} type - the event type
 * @param {*} [data] - optional data to pass along with the event
 */
function trigger(_ref4) {
  let {
    target,
    type,
    data,
    custom = false
  } = _ref4;
  let event;
  const element = getElement(target);
  if (custom) {
    // Build custom event
    if (window.CustomEvent && typeof window.CustomEvent === 'function') {
      event = new CustomEvent(type, data ? {
        detail: data
      } : undefined);
    } else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(type, true, true, data || undefined);
    }
  } else {
    // Build native event
    event = document.createEvent('HTMLEvents');
    event.initEvent(type, true, false);
  }
  element.dispatchEvent(event);
}

/* Animation
   --------------------------------------------------------------- */
/** Replaces $el.animate({ 'height', '40px' }, 300ms); */
function animate(target, params, ms) {
  const element = getElement(target);
  element.style.transition = `all ${ms}ms`;
  Object.keys(params).forEach(key => element.style[key] = params[key]);
}

/** Replaces $el.hide() */
function hide(target) {
  getElement(target).style.display = 'none';
}

/** Replaces $el.show() */
function show(target) {
  getElement(target).style.display = '';
}

/** Return true if this element is current display:none */
function isDisplayNone(elem) {
  if (!isElement(elem)) return false;
  return getComputedStyle(elem).display === 'none';
}

/** Replaces $el.toggle() */
function toggle(target) {
  const element = getElement(target);
  const win = element.ownerDocument.defaultView;
  if (win.getComputedStyle(element, null).display === 'none') {
    element.style.display =
    // eslint-disable-next-line no-bitwise
    '' | 'inline' | 'inline-block' | 'inline-table' | 'block';
  } else {
    element.style.display = 'none';
  }
}

/** Replaces $el.fadeOut(3000) */
function fadeOut(target, ms) {
  const element = getElement(target);
  if (ms) {
    const originalTrans = element.style.transition || '';
    element.style.opacity = '1';
    element.style.transition = `opacity ${ms}ms`;
    const end = () => {
      element.style.display = 'none';
      element.style.transition = originalTrans;
    };
    element.addEventListener('transitionend', end, {
      once: true,
      capture: false
    });
  }
  element.style.opacity = '0';
}

/** Replaces $el.fadeIn(3000) */
function fadeIn(target, ms) {
  const element = getElement(target);
  element.style.opacity = '0';
  if (element.style.display === 'none') element.style.display = '';
  if (ms) {
    const originalTrans = element.style.transition || '';
    element.style.opacity = '0.01';
    element.style.transition = `opacity ${ms}ms`;
    const end = () => {
      element.style.opacity = '';
      element.style.transition = originalTrans;
    };
    element.addEventListener('transitionend', end, {
      once: true,
      capture: false
    });
    setTimeout(() => element.style.opacity = '1', 1);
  } else {
    element.style.opacity = '1';
  }
}

/**
 * Reading a dimension prop will cause the browser to recalculate,
 * which will let our animations work.
 * @param {HTMLElement} element
 */
function triggerBrowserReflow(element) {
  // eslint-disable-next-line
  element.offsetHeight;
}
/**
 * Parse the animation duration/delay of an element
 * @param {HTMLElement} element
 * @param {'transitionDuration' | 'transitionDelay'} property
 * @return {number}
 */
function parseDuration(element, property) {
  const str = dh_css(element, property) || '';
  const mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}
/**
 * Add a listener callback to the transition end event for a node
 * @param {HTMLElement} element
 * @param {function} handler
 */
function transitionEndListener(element, handler) {
  const duration = parseDuration(element, 'transitionDuration');
  const delay = parseDuration(element, 'transitionDelay');
  const remove = transitionEnd(element, e => {
    if (e.target === element) {
      remove();
      handler(e);
    }
  }, duration + delay);
}

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

/***/ 981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   isFunc: () => (/* binding */ isFunc),
/* harmony export */   noop: () => (/* binding */ noop),
/* harmony export */   required: () => (/* binding */ required)
/* harmony export */ });
/* unused harmony exports lazy, compose, pipe, debounce, combineReducers, onEnter, onKey, cappedCallback, retry, createChainedFunction */
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(814);
/**
 * FUNCTION UTILS
 * @module sn.functions
 */


function lazy(f) {
  return function lazyApply() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return f.apply(this, args);
  };
}
const compose = function () {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }
  return function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    return fns.forEach(fn => fn && fn(...args));
  };
};

/** Returns `true` only if the property on the object is a function. */
const isFunc = function () {
  if (arguments.length === 1) return typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'function';
  return typeof (0,_object__WEBPACK_IMPORTED_MODULE_0__.prop)(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1]) === 'function';
};

/**
 * Use as an ES6 default parameter to make a parameter required.
 * @param name - The required parameter name.
 *
 * USAGE:
 *  makeSandwich = (meat = required('meat'), cheese) => { ... };
 *  makeSandwich = ({ meat = required('meat'), cheese } = {}) => { ... };
 */
const required = name => {
  throw new Error(`${name} is a required parameter.`);
};

/**
 * Pipe data through a series of functions.
 * @param {[Function]} fns - Array of functions to pipe data through.
 *
 * USAGE:
 * let fn1 = s => s.toLowerCase();
 * let fn2 = s => s.split('').reverse().join('');
 * let fn3 = s => s + '!'
 *
 * let emitter = pipe(fn1, fn2, fn3);
 * console.log(emitter('Time')); // emit!
 */
const pipe = function () {
  for (var _len4 = arguments.length, fns = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    fns[_key4] = arguments[_key4];
  }
  return x => fns.reduce((v, f) => f(v), x);
};

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 * @param {Function} func - The function to debounce.
 * @param {Number} wait - The number of milliseconds to wait between triggering.
 * @param {boolean} [immediate] - Trigger the function on the leading edge, instead of the trailing.
 * @see https://davidwalsh.name/javascript-debounce-function
 *
 * USAGE:
 * let myEfficientFn = sn.debounce(() => {
 *   // All the taxing stuff you do
 * }, 250);
 *
 * window.addEventListener('resize', myEfficientFn);
 */
function debounce(func) {
  let wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  let immediate = arguments.length > 2 ? arguments[2] : undefined;
  let timeout;
  return function debounced() {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }
    const context = this;
    function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

/** Convenient 'do nothing' function that doesn't require an argument like void(0); */
const noop = () => {};
const identity = o => o;

/**
 * Combine many redux style reducers into one 'root' reducer function.
 * Similar to redux combineReducers except that redux reducers only
 * receive/update a piece of the app state. Ours receive and can update
 * the entire state object.
 * @param reducers - 0 to many reducer functions
 * @return {function(*=, *=)} a single 'root' reducer function
 */
const combineReducers = function () {
  for (var _len6 = arguments.length, reducers = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    reducers[_key6] = arguments[_key6];
  }
  return function () {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let action = arguments.length > 1 ? arguments[1] : undefined;
    return reducers.reduce((nextState, reducer) => reducer(nextState, action), state);
  };
};

/**
 * Produces an event handler that expects to receive an event and will
 * only fire the provided callback if the event key code is the 'Enter' key.
 * Useful for valid a11y handling, i.e. divs with onClick's.
 *
 * USAGE:
 * <div onClick={changeImage} onKeyDown={onEnter(changeImage)}>
 *
 * @param {function} fn - the callback to fire on enter key.
 * @returns {function}
 */
function onEnter(fn) {
  return function handleOnEnter(e) {
    if (e.keyCode === 13) fn(e);
  };
}

/**
 * Produces an event handler that expects to receive an event and will
 * only fire the provided callback if the event key one of the desired keys.
 * USAGE:
 * <input type="range" onKeyDown={onKey(seek, ['ArrowLeft', 'ArrowRight'])}>
 *
 * @param {function} fn - the callback to fire on key down.
 * @param {(number[]|string[])} keys - key names to respond to
 * @returns {function}
 */
function onKey(fn, keys) {
  return function handleOnKey(e) {
    if (keys.includes(e.key) || keys.includes(e.keyCode)) fn(e);
  };
}

/**
 * Returns a function that can be called only a certain number of times.
 * @param {function} fn - the callback to fire
 * @param {number} times - number of times this callback can be called
 * @param {...*} args - callback arguments, if any
 * @return {function(): *}
 */
function cappedCallback(fn, times) {
  for (var _len7 = arguments.length, args = new Array(_len7 > 2 ? _len7 - 2 : 0), _key7 = 2; _key7 < _len7; _key7++) {
    args[_key7 - 2] = arguments[_key7];
  }
  let count = times;
  return function cappedFunction() {
    if (count > 0) {
      fn(...args);
      count -= 1;
    }
  };
}

/**
 * Fire a callback function if a condition is met.
 * If not met, retry until it is met or the # of retries is expended.
 * @param {function} callback - function to fire
 * @param {function} condition - function to determine to fire callback
 * @param {number} [delay] - number of milliseconds to wait before retrying
 * @param [number [retries] - number or retries to attempt
 */
function retry(_ref) {
  let {
    callback,
    condition,
    delay = 200,
    retries = 10
  } = _ref;
  if (condition()) {
    callback();
  } else if (retries > 0) {
    setTimeout(() => {
      retry({
        callback,
        condition,
        delay,
        retries: retries - 1
      });
    }, delay);
  }
}

/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction() {
  for (var _len8 = arguments.length, funcs = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    funcs[_key8] = arguments[_key8];
  }
  return funcs.filter(f => f != null).reduce((acc, f) => {
    if (typeof f !== 'function') {
      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }
    if (acc === null) return f;
    return function chainedFunction() {
      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }
      acc.apply(this, args);
      f.apply(this, args);
    };
  }, null);
}

/***/ }),

/***/ 813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(981);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(168);
/* eslint-disable no-console */
/**
 * Module to abstract the console.
 * Performs the log only if
 * - the environment has a console,
 * - with the desired log function,
 * - and either the server is in dev mode or the browser is in debug mode.
 */




/**
 * @typedef {Object} ConsoleType
 * @property {(...args: any[]) => void} log
 * @property {(...args: any[]) => void} info
 * @property {(...args: any[]) => void} warn
 * @property {(...args: any[]) => void} error
 * @property {(...args: any[]) => void=} debug
 * @property {(condition: any, ...args: any[]) => void=} assert
 * @property {() => void=} clear
 * @property {(label?: string) => void=} count
 * @property {(label?: string) => void=} countReset
 * @property {(tabularData: any, properties?: string[]) => void=} table
 * @property {(...label: any[]) => void=} group
 * @property {(...label: any[]) => void=} groupCollapsed
 * @property {() => void=} groupEnd
 * @property {(label?: string) => void=} time
 * @property {(label?: string) => void=} timeEnd
 * @property {(...args: any[]) => void=} trace
 * @property {(obj: any, options?: any) => void=} dir
 * @property {(...args: any[]) => void=} dirxml
 */

/** @type {ConsoleType} */
const logger = {};
['assert', 'dir', 'count', 'log', 'info', 'debug', 'warn', 'error', 'table', 'trace', 'group', 'groupEnd', 'groupCollapsed', 'profile', 'profileEnd', 'time', 'timeEnd', 'timeStamp'].forEach(key => {
  const isLoggable = _constants__WEBPACK_IMPORTED_MODULE_0__.win?.console && _constants__WEBPACK_IMPORTED_MODULE_0__.win?.console[key];
  const shouldLog = !_constants__WEBPACK_IMPORTED_MODULE_0__.isJestEnv && !(0,_constants__WEBPACK_IMPORTED_MODULE_0__.isProduction)() || (0,_constants__WEBPACK_IMPORTED_MODULE_0__.isDebug)();
  logger[key] = isLoggable && shouldLog ? function log() {
    _constants__WEBPACK_IMPORTED_MODULE_0__.win.console[key](...arguments);
  } : _function__WEBPACK_IMPORTED_MODULE_1__.noop;

  /**
   * A log statement that only fires if in `debug mode`,
   * i.e `sn-debug` cookie set to `true`.
   */
  logger.sndebug = function sndebug() {
    if (!(0,_constants__WEBPACK_IMPORTED_MODULE_0__.isDebug)()) return;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    console.log('DEBUG:', ...args);
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logger);

/***/ }),

/***/ 814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   namespace: () => (/* binding */ namespace),
/* harmony export */   prop: () => (/* binding */ prop)
/* harmony export */ });
/* unused harmony exports setProp, values, reverse, shallowEqual, shrink, eq, has, isPlainObject, extend, type */
/* OBJECT UTILS
   --------------------------------------------------------------- */

const _identity = o => o;

/**
 * Get the value of a property at a path without throwing a ReferenceError.
 * If the path contains a {undefined} or {null}, it is returned.
 * @param {object} obj - The object to lookup the property from.
 * @param {string} path - The property path string.
 * @returns {*} - The value at the end of the property path,
 *                or {null} or {undefined} if encountered.
 *
 * USAGE:
 * let employee = {
 *   name: 'Bob Vila',
 *   nicknames: ['Bobby V', 'Bob the Builder', 'The Veebs'],
 *   address: {
 *     street1: '12345 67th St',
 *     state: {
 *       'iso-code': 'US-MN',
 *       'short-code': 'US-MN',
 *       'long-code': 'US-Minnesota'
 *     }
 *   }
 * };
 * let format = 'iso';
 *
 * // values without reference errors
 * prop(employee, 'name');                            // "Bob Vila"
 * prop(employee, 'address.street2');                 // undefined
 *
 * // bracket syntax
 * prop(employee, "address.state['long-code']");      // "US-Minnesota"
 * prop(employee, 'address.state["short-code"]');     // "US-MN"
 * prop(employee, 'address.state[`short-code`]');     // "US-MN"
 * prop(employee, `address.state['${format}-code']`); // "US-MN"
 *
 * // and arrays, oh my!
 * prop(employee, 'nicknames[1]');                    // "Bob the Builder"
 * prop(employee, 'nicknames[1].length');             // 15
 * prop(employee, 'nicknames[3].length');             // undefined
 */
function prop(obj, path) {
  if (!obj) return obj;
  let item = obj;

  // Handle bracket syntax.
  const normalized = path.replace(/\[/g, '.') // convert open bracket to dot
  .replace(/[\]"'`]/g, ''); // remove close bracket and all quote flavors

  const parts = normalized.split('.');
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    const value = item[part];

    // Allow empty strings/objects.
    const bad_value = typeof value === 'undefined' || value === null;
    const last_value = i === parts.length - 1;
    item = value;
    if (last_value || bad_value) break;
  }
  return item;
}

/**
 * Set a property at a path on an object. Parts of the path
 * that do not exist yet are lazily created.
 * @param {object} obj - The object to set a property on.
 * @param {string} path - The '.' separated property path to set.
 * @param {*} value - The value to set at the property path.
 *
 * USAGE:
 * setProp(employee, 'address.city', 'Rogers');
 * let bg = sn.setProp({}, 'background.color', '#efefef');
 */
function setProp(obj, path, value) {
  const parts = path.split('.');
  let object;
  let i;
  let n;
  object = obj; // Start the chain at our object.

  for (i = 0, n = parts.length; i < n; i++) {
    if (i === n - 1) {
      // At the end of the path, set the value.
      object[parts[i]] = value;
    } else {
      // If this part of the path isn't there, fill in with object literal.
      if (!object[parts[i]]) object[parts[i]] = {};
      object = object[parts[i]]; // Move `object` to the next path part.
    }
  }

  return obj;
}

/**
 * Namespace function: so we don't have to put all those checks to see if
 * modules exist and either create empty ones or set a reference to one
 * that was previously created.
 * See Zakas, Maintainable JavaScript, pp. 72-73, and
 * Stefanov, Javascript Patterns, pp. 89-90
 * @param {string} ns - a '.' separated namespace like 'foo.bar.baz'
 * @param {*} [o] - and optional object/number/string to set the path value to
 */
function namespace(ns, o) {
  const win = __webpack_require__.g || window;
  const parts = ns.split('.');
  let object;
  let i;
  let n;

  // Start the object if needed.
  if (!win[parts[0]]) {
    win[parts[0]] = {};
  }
  object = win[parts[0]];
  for (i = 1, n = parts.length; i < n; i++) {
    if (!object[parts[i]]) {
      object[parts[i]] = {};
    }
    object = object[parts[i]];
  }
  if (o) {
    setProp(win, ns, o);
    object = o;
  }
  return object;
}

/**
 * Returns and array of the values in an object.
 * It only returns the objects own values, not those from the prototype chain.
 */
function values(obj) {
  if (Object.values) return Object.values(obj);
  return Object.keys(obj || {}).map(key => obj[key]);
}

/** Reverses a simple object containing key - value pairs. */
function reverse(obj) {
  let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _identity;
  return Object.keys(obj).reduce((prev, curr) => {
    prev[obj[curr]] = callback(curr);
    return prev;
  }, {});
}

/**
 * Returns true if `a` contains the same keys with the same values as `b`.
 * Uses strict equality (===) and does not support `NaN`.
 */
function shallowEqual(a, b) {
  /* eslint-disable no-restricted-syntax */
  for (const key in a) {
    if (!(key in b) || a[key] !== b[key]) return false;
  }
  for (const key in b) {
    if (!(key in a) || a[key] !== b[key]) return false;
  }
  return true;
}

/**
 * Returns a new object containing only the properties listed in `props`.
 * @param {object} o - The object to get properties from.
 * @param {String[]} props - Array of property names to keep.
 * @return {object} - The resulting object containing only the properties listed in `props`.
 *
 * USAGE:
 * const vowels = shrink({ a: 'a', c: 'c', e: 'e' }, ['a', 'e']);
 * // => { a: 'a', e: 'e' }
 */
function shrink(o, props) {
  return props.reduce((acc, curr) => {
    acc[curr] = o[curr];
    return acc;
  }, {});
}

/**
 * Returns `true` if the JSON.stringify result is the same for both arguments.
 * Order matters, properties or array elements in different orders will result in `false`.
 */
function eq(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

/**
 * Returns true if the given object has the 'own' property
 * @param {object} o - the object to check for a property
 * @param {string|string[]} p - the property name or array of names to check for
 * @return {boolean}
 */
function has(o, p) {
  if (!o || !p) return false;
  if (Array.isArray(p)) {
    return p.reduce((result, prop) => {
      if (!result) return result;
      return Object.prototype.hasOwnProperty.call(o, prop);
    }, true);
  }
  return Object.prototype.hasOwnProperty.call(o, p);
}

/** Returns true if this is a plain object, not created from a class/prototype */
function isPlainObject(obj) {
  // Detect obvious negatives
  // Use toString instead of jQuery.type to catch host objects
  if (!obj || {}.toString.call(obj) !== '[object Object]') {
    return false;
  }
  const proto = Object.getPrototypeOf(obj);
  const fnToString = Object.prototype.hasOwnProperty.toString;
  const ObjectFunctionString = fnToString.call(Object);

  // Objects with no prototype (e.g., `Object.create( null )`) are plain
  if (!proto) {
    return true;
  }

  // Objects with prototype are plain iff they were constructed by a global Object function
  const Ctor = Object.prototype.hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor === 'function' && fnToString.call(Ctor) === ObjectFunctionString;
}

/**
 * Extend an object with one to many sources.
 * Can be used to produce a deep copy of an object.
 * Replaces $.extend
 * Example:
 * <code>
 *   let clone;
 *   const source = { foo: { bar: 'baz' } };
 *
 *   clone = extend({}, source) // => { foo: { bar: 'baz' } }
 *   source.foo === clone.foo; // => true
 *
 *   clone = extend(true, {}, source) // => { foo: { bar: 'baz' } }
 *   source.foo === clone.foo; // => false
 * </code>
 */
function extend() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  const deepflag = typeof args[0] === 'boolean';
  const deep = deepflag && args[0];
  const destination = args[deepflag ? 1 : 0];
  const sources = args.slice(deepflag ? 2 : 1);
  if (!deep) return Object.assign(destination, ...sources);
  const target = destination || {};
  for (let i = 0; i < sources.length; i++) {
    const options = sources[i];

    // eslint-disable-next-line no-continue
    if (!options) continue;

    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const name in options) {
      const copy = options[name];

      // Prevent Object.prototype pollution
      // Prevent never-ending loop
      if (name === '__proto__' || target === copy) {
        // eslint-disable-next-line no-continue
        continue;
      }

      // Recurse if we're merging plain objects or arrays
      let copyIsArray = Array.isArray(copy);
      if (deep && copy && (isPlainObject(copy) || copyIsArray)) {
        const src = target[name];
        let clone;

        // Ensure proper type for the source value
        if (copyIsArray && !Array.isArray(src)) {
          clone = [];
        } else if (!copyIsArray && !isPlainObject(src)) {
          clone = {};
        } else {
          clone = src;
        }
        copyIsArray = false;

        // Never move original objects, clone them
        target[name] = extend(deep, clone, copy);

        // Don't bring in undefined values
      } else if (copy !== undefined) {
        target[name] = copy;
      }
    }
  }
  return target;
}

/**
 * Returns the type of the argument
 * Replaces $.type
 * @param {*} obj - literally anything
 * Example:
 * <code>
 *   type([]); // => "array"
 *   type({}); // => "object"
 *   type(''); // => "string"
 *   type(42); // => "number"
 *   type(Symbol); // => "function"
 *   type(Symbol(42); // => "symbol"
 * </code>
 */
function type(arg) {
  return Object.prototype.toString.call(arg).replace(/^\[object (.+)]$/, '$1').toLowerCase();
}

/***/ }),

/***/ 203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports isString, capitalize, titlecase, camelCase, camelToSnake, camelToKabob, pascalToSnake, snakeToPascal, mattressCase, optionize, deoptionize, dasherize, undasherize, repeat, wordCount, pad, replaceAt, endsWith, firstWord, uuid, lazyId, bytes, pluralIf, pxToNum, truncate, asBool, removeSpecialCharacters, hash */
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(168);

function isString(input) {
  return typeof input === 'string';
}

/**
 * Capitalize the first letter of the string, keep the rest as-is.
 * Example:
 * capitalize('chat with us!') -> "Chat with us!"
 */
function capitalize(phrase) {
  if (!phrase) return phrase;
  return phrase[0].toUpperCase() + phrase.slice(1);
}

/**
 * For each word in the phrase, uppercase the first letter and lowercase the rest.
 * Example:
 * titlecase('LYOCELL uLTra Sheet SET') -> "Lyocell Ultra Sheet Set"
 */
function titlecase(phrase) {
  if (!phrase) return phrase;
  return phrase.replace(/\w\S*/g, word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
}

/**
 * Convert snake_case or sentence to camelCase
 * @param {string} phrase
 * @return {string}
 *
 * Example:
 * camelCase('foo_bar') -> "fooBar"
 * camelCase('Foo Bar') -> "fooBar"
 */
function camelCase(phrase) {
  return phrase.replace(/^\w|[A-Z]|\b\w|_+\w/g, (word, index) => {
    if (word.startsWith('_')) {
      // handle underscore word
      const next = word.replace('_', '');
      if (index === 0) return next[0].toLowerCase() + next.substr(1);
      return next[0].toUpperCase() + next.substr(1);
    }
    // lowercase or uppercase this letter
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/[\s-_]+/g, '');
}

/**
 * Convert camelCase into snake_case
 * @param {string} phrase
 * @returns {string}
 *
 * Example:
 * camelToSnake('fooBar') -> "foo_bar"
 */
function camelToSnake(phrase) {
  return phrase.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}

/**
 * Convert camelCase into kabob-case
 * @param {string} phrase
 * @returns {string}
 *
 * Example:
 * camelToSnake('fooBar') -> "foo-bar"
 */
function camelToKabob(phrase) {
  return phrase.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
}

/**
 * Convert PascalCase into snake_case
 * @param {string} phrase
 * @returns {string}
 *
 * Example:
 * pascalToSnake('FooBar') -> "foo_bar"
 */
function pascalToSnake(phrase) {
  const first = phrase[0].toLowerCase();
  const rest = phrase.substring(1);
  return `${first}${camelToSnake(rest)}`;
}

/**
 * Convert snake_case to PascalCase
 * @param {string} phrase
 * @returns {string}
 *
 * Example:
 * snakeToPascal('foo_bar') -> "FooBar"
 */
function snakeToPascal(phrase) {
  return capitalize(camelCase(phrase));
}

/**
 * Sleep Number's crazy naming scheme
 * @param {string} phrase
 * @returns {string} cased like 'pSE SPECIAL EDITION'
 */
function mattressCase(phrase) {
  let allowSpecialCase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (!allowSpecialCase) return phrase.toUpperCase();
  return `${phrase[0].toLowerCase()}${phrase.substr(1).toUpperCase()}`;
}

/**
 * Rails has the concept of 'optionizing' text which replaces spaces with
 * underscores and lower-cases text.
 *
 * Example:
 * optionize('Soft Green'); -> "soft_green"
 */
function optionize() {
  let phrase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return phrase.toLowerCase().replace(/\s/g, '_');
}

/**
 * Replace '_' characters with spaces
 *
 * Example:
 * deoptionize('soft_green'); -> "Soft Green"
 */
function deoptionize() {
  let phrase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return titlecase(phrase.replace(/_/g, ' '));
}

/**
 * Replaces spaces with dashes and lower-cases text.
 *
 * Example:
 * dasherize('Split California King'); -> "split-california-king"
 */
function dasherize() {
  let phrase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return phrase.toLowerCase().replace(/\s/g, '-');
}

/**
 * Replaces dashes with spaces and uppercase the first letter of each word.
 *
 * Example:
 * dasherize('split-california-king'); -> "Split California King"
 */
function undasherize() {
  let phrase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  const result = phrase.toLowerCase().replaceAll(/-/g, ' ');
  return titlecase(result);
}
function repeat(str, times) {
  return new Array(times + 1).join(str);
}
function wordCount(string) {
  return string.trim().split(/\s+/).length;
}
function pad(num, maxLength) {
  return repeat(`0`, maxLength - num.toString().length) + num;
}
function replaceAt(s, i, c) {
  return s.substr(0, i) + c + s.substr(i + 1);
}
function endsWith(s, c) {
  return s[s.length - 1] === c;
}
function firstWord(s) {
  return s.replace(/ .*/, '');
}

/**
 * Generate a universally unique identifier.
 * @return {string}
 */
function uuid() {
  /* eslint-disable */
  let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
  return 'uuid-' + uuid;
  /* eslint-enable */
}

/** Add a uuid to something if it doesn't already have one. */
function lazyId(o) {
  o.id = o.id || uuid();
  return o;
}

/** Return the size of a string in bytes assuming UTF-8 encoding. */
function bytes(str) {
  // Matches only the 10.. bytes that are non-initial characters in a multi-byte sequence.
  const m = encodeURIComponent(str).match(/%[89ABab]/g);
  return str.length + (m ? m.length : 0);
}

/**
 * Returns either an empty string, a plural character of choice, or
 * an optional singular form.
 * @param {boolean} condition False will return an empty string.
 * @param {string} plural Plural suffix, 's' by default.
 * @param {string} [singular] Optional singular suffix, or version.
 */
function pluralIf(condition) {
  let plural = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 's';
  let singular = arguments.length > 2 ? arguments[2] : undefined;
  if (!condition) return singular || '';
  return plural;
}

/**
 * Returns a number of for a string px value, ie: '23px' => 23.
 */
function pxToNum(str) {
  return +str.trim().replace('px', '');
}

/**
 * Returns a truncated string with ellipsis (...) appended.
 * @param {string} string to truncate
 * @param {number} number of characters to keep
 */
function truncate(str, num) {
  if (str.length <= num) {
    return str;
  }
  return `${str.slice(0, num)}...`;
}

/** Convert a 'true' or 'false' string to a boolean */
function asBool(str) {
  if (typeof str === 'boolean') return str;
  if (typeof str === 'string') return str === 'true';
  return !!str;
}

/** Replace all the special characters from a string */
function removeSpecialCharacters() {
  let input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return Object.values(specials).reduce((result, special) => {
    return result.replaceAll(special.value, '');
  }, input);
}

/**
 * Convert a string to a hash
 * Inspired by https://github.com/garycourt/murmurhash-js
 */
function hash(str) {
  /* eslint-disable */
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0;
  // Mix 4 bytes at a time into the hash
  var k,
    i = 0,
    len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^= /* k >>> r: */k >>> 24;
    h = /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^ /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  }
  // Handle the last few bytes of the input array
  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  }
  // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.
  h ^= h >>> 13;
  h = /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/***/ }),

/***/ 567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports Tag, hasTags */
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(203);



/**
 * Tags used by storefront entities like products, images, and features
 * @enum Tag
 */
const Tag = {
  test: 'test',
  gallery: 'gallery',
  postcard: 'postcard',
  ghosted_base: 'ghosted-base',
  promo: 'promo',
  thumbnail: 'thumbnail',
  corner_thumbnail: 'corner-thumbnail',
  mb: 'mobile',
  tb: 'tablet',
  dt: 'desktop',
  split: 'split',
  flextop: 'flextop',
  standard: 'standard',
  front: 'front',
  lifestyle: '45',
  bundle: 'bundle',
  matt_only: 'matt-only',
  matt_only_thumbnail: 'matt-only-thumbnail',
  ib: 'ib',
  ibf: 'ibf',
  ff: 'ff',
  ff1: 'ff1',
  ff2: 'ff2',
  ff3: 'ff3',
  includes: 'includes',
  base: 'base',
  split_base: 'split-base',
  temp_balancing: 'temp-balancing',
  addon: 'addon',
  // image for product reference display
  single: 'single',
  // image for product reference display, half-King/Queen
  double: 'double',
  // image for product reference display, full-King/Queen
  new: 'new',
  nextgen: 'nextgen',
  // used on products
  next_gen_compare: 'next-gen-compare',
  // used on key features
  quiz: 'quiz'
};
Object.freeze(Tag);

/**
 * Returns true if the taggable object has the specified tags.
 *
 * EXAMPLES:
 * hasTags({ tags: ['a', 'b']}, ['a']) \\ -> true
 * hasTags({ tags: ['a', 'b']}, ['a', 'b']) \\ -> true
 * hasTags({ tags: ['a', 'b']}, 'a') \\ -> true
 * hasTags({ tags: ['a', 'b']}, 'a, b') \\ -> true
 * hasTags({ tags: ['a', 'b']}, 'a, b, c') \\ -> false
 *
 * @param {{ tags: string[]}} taggable - object with tags property
 * @param {string|string[]} tags - array of tags, single tag, or string of comma separated tags
 * @return {boolean}
 */
function hasTags(taggable, tags) {
  const tgs = isString(tags) ? tags.split(',').map(t => t.trim()) : tags;
  return isSuperset(taggable?.tags || [], tgs);
}

/***/ }),

/***/ 192:
/***/ ((module) => {

module.exports = require("browser-or-node");

/***/ }),

/***/ 734:
/***/ ((module) => {

module.exports = require("js-cookie");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(813);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(336);
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(576);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(168);
/* harmony import */ var _Deferred__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(292);





const t = {
  invalid_elem: 'ImageTracker was not created with a valid element',
  length: 'ImageTracker.track',
  too_long: 'ImageTracker: Image took too long to load'
};

/**
 * Map an image element to a promise that resolves when the image has finished
 * loading and decoding.
 * @see https://html.spec.whatwg.org/multipage/embedded-content.html#dom-image-dev
 * @param {HTMLImageElement} image
 * @return <Promise>
 *
 * @todo Figure out why `decode` didn't work:
 * <code>
 * return new Promise((res, rej) => {
 *   image.onload = () => image.decode().then(res).catch(rej);
 * });
 * </code>
 */
function completable(image) {
  const start = _constants__WEBPACK_IMPORTED_MODULE_3__.timer.now();
  const dfd = new _Deferred__WEBPACK_IMPORTED_MODULE_4__["default"]();
  function check() {
    if (image.complete) {
      dfd.resolve();
    } else {
      const now = _constants__WEBPACK_IMPORTED_MODULE_3__.timer.now();
      if (now - start > 300) {
        dfd.reject(new Error(t.too_long, image));
      } else {
        setTimeout(check, 50);
      }
    }
  }
  check();
  return dfd;
}

/**
 * Track when images inside an element have finished loading.
 * Calling 'track()' will query the element for all `<img>` tags and
 * return a promise when all have finished loading.
 *
 * Relies on `HTMLImageElement.complete`
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/complete
 */
class ImageTracker {
  #element;

  /**
   * @param {HTMLElement} element - element to track for image loading
   */
  constructor(element) {
    this.#element = element;
  }

  /**
   * Returns the parent element to track
   * @return {HTMLElement}
   */
  get element() {
    return this.#element;
  }

  /**
   * Return a promise that resolves when all images inside the element
   * are `completed`.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/complete
   * @param {number} [delay = 0] -
   *      When mounting suspended components, React needs about 100ms after
   *      they are 'mounted' to actually flush updates to the DOM,
   *      therefore we allow a delay to check for images.
   * @return {Promise<never>|Promise>}
   */
  track() {
    let delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    if (!(0,_element__WEBPACK_IMPORTED_MODULE_1__.isElement)(this.#element)) {
      return Promise.reject(new Error(t.invalid_elem, this.#element));
    }
    return new Promise(resolve => {
      // When mounting suspended components, React needs about 100ms
      // after they are 'mounted' to actually flush updates to the DOM.
      // That's why `track` has the option to delay the check for images.
      setTimeout(() => {
        const images = [...this.#element.querySelectorAll('img')];
        const bgs = (0,_assets__WEBPACK_IMPORTED_MODULE_2__.getBgImages)(this.#element).filter(_ref => {
          let {
            node
          } = _ref;
          return (0,_element__WEBPACK_IMPORTED_MODULE_1__.findAncestor)(node, _element__WEBPACK_IMPORTED_MODULE_1__.isDisplayNone) === null;
        }).map(_ref2 => {
          let {
            bg
          } = _ref2;
          return bg.match(/url\("(.*)"\)/)[1];
        }).map(url => {
          const img = new Image();
          img.src = url;
          return img;
        });
        _logger__WEBPACK_IMPORTED_MODULE_0__["default"].sndebug(t.length, this.#element, images.length);
        Promise.allSettled([...images, ...bgs].map(completable)).then(resolve);
      }, delay);
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageTracker);
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;