import phVideo from '~/videos/placeholder-black-10s.mp4';
import {
  setCloudinaryTransforms,
  updateCloudinaryTransforms,
} from '~/util/vendor/cloudinary';

import logger from './logger';
import { getElement } from './element';
import { includesAll, includesAny } from './array';
import { isString } from './string';
import { Breakpoint as BP } from './device';
import { isFunc, noop } from './function';
import MediaSource from './MediaSource';
import ProductAsset from './ProductAsset';
import { Tag } from './tags';

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
export function withSpecialtyTag({ tags = [] }) {
  return tags.includes(Tag.flextop) || tags.includes(Tag.split);
}

/** Predicate to find assets without specialty size tags */
export function withoutSpecialtyTag({ tags = [] }) {
  return !tags.includes(Tag.flextop) && !tags.includes(Tag.split);
}

export const placehold = {
  image: 'https://via.placeholder.com/150',
  video: phVideo,
};

export function isMp4(url) {
  return url.match(/\.mp4$/i);
}

export function isJpg(url) {
  return url.match(/\.jpe?g$/i);
}

export function asMp4(url) {
  if (isMp4(url)) return url;
  return `${url}.mp4`;
}

export function asJpg(url) {
  if (isJpg(url)) return url;
  if (isMp4(url)) return url.replace(/\.mp4$/i, '.jpg');
  return `${url}.jpg`;
}

export function sslUrl(url) {
  if (!url) return url;
  return url.replace(/http:/gi, 'https:');
}

/**
 * Remove the `f_auto` cloudinary transform so, we get back expected formats.
 * Useful when attempting to prefetch for caching
 * @param {string} asset - cloudinary url to modify
 */
export function retainFormat(asset) {
  return asset.replace(/\/f_auto,/, '/').replace(/,f_auto/, '');
}

/**
 * Converts `rgb(0, 153, 51)` to `#009933`.
 * @param {string} rgb - the rgb color string to convert.
 */
export function rgbToHex(rgb) {
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
export function hexToRgb(hex, asString = false) {
  const input =
    hex.length === 4
      ? // extend shorthand to full, i.e. #000 to #000000
        `#${hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3]}`
      : hex;
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(input);
  const r = result ? parseInt(result[1], 16) : null;
  const g = result ? parseInt(result[2], 16) : null;
  const b = result ? parseInt(result[3], 16) : null;

  if (result) {
    return asString ? `rgb(${r}, ${g}, ${b})` : { r, g, b };
  }
  return null;
}

function getTransformations(type = 'image') {
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
export function getCloudinaryVersion() {
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
export function getCloudinaryUrl({ url = '', type = 'image', env = 'prod' }) {
  const local = env === 'local';
  const done = url.includes('cloudinary') || url.includes('cdn.sleepnumber');
  if (!url || local || done) return sslUrl(url);

  const clouds = {
    local: 'snbr-local',
    qa: 'snbr-qa',
    staging: 'snbr-stg',
    prod: 'sleepnumber',
  };
  const cloud = clouds[env] || clouds.prod;

  const uploadMapping = url.includes('assets') ? 'uploads-remix' : 'uploads';

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
export function getVideoPlaceholder(asset) {
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
export function getVideoPoster(asset) {
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
export function getVideoThumb(video) {
  let start = 'auto';
  let url = video.thumbnail;
  if (video.poster_enabled) {
    start = video.poster_time;
    url = video.url;
  }
  const transforms = [
    'ar_1',
    'c_fill',
    'h_768',
    `so_${start}`,
    'co_black',
    'e_colorize:40',
  ];
  const thumb = setCloudinaryTransforms(url, transforms);
  return sslUrl(asJpg(thumb));
}

/**
 * Returns the width and height of an image.
 * @param {string} url - URL to image
 * @returns {width: number, height: number} image dimensions
 */
export function getImageDimensions(url) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.width, height: img.height });
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
export async function getAssetCoverSize(asset, elem = window) {
  const isUrl = typeof asset === 'string';
  const dimensions = isUrl
    ? await getImageDimensions(asset)
    : {
        width: asset.width,
        height: asset.height,
      };
  const isWin = elem === window;
  const toCover = {
    width: isWin ? window.innerWidth : elem.clientWidth,
    height: isWin ? window.innerHeight : elem.clientHeight,
  };

  // Adjust width to cover, adjust height to maintain aspect ratio
  let diff = toCover.width - dimensions.width;
  let next_width = dimensions.width + diff;
  let next_height = (dimensions.height * next_width) / dimensions.width;
  dimensions.width = next_width;
  dimensions.height = next_height;

  // If height still doesn't cover,
  // adjust height to cover, adjust width to maintain aspect ratio
  if (dimensions.height < toCover.height) {
    diff = toCover.height - dimensions.height;
    next_height = dimensions.height + diff;
    next_width = (dimensions.width * next_height) / dimensions.height;
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
export function importAll(requireContext) {
  const imported = {};
  requireContext.keys().map(item => {
    return (imported[item.replace('./', '')] = requireContext(item));
  });
  return imported;
}

/**
 * Remove transforms and file extensions from cloudinary URLs
 *
 * @param {string} videoUrl - Cloudinary video url
 * @return {string}
 */
export function stripCloudinaryUrl(videoUrl) {
  const urlArr = videoUrl.split('/');
  // Strip existing transforms modifying codec or quality
  const urlArrNoTransforms = urlArr.filter(
    urlPart => !urlPart.includes('q_auto') && !urlPart.includes('vc_auto')
  );

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
 * @param {string} videoUrl - cloudinary URL to video
 * @param {boolean} isMobile - if true, and 'keepOriginalWidth' is false,
 *                             dimensions are downscaled to 360px width
 * @param {boolean} keepOriginalWidth - don't apply width transformations
 * @return {MediaSource[]} Video urls and formats for delivering optimized video
 */
export function getOptimizedVideo({ url, isMobile, keepOriginalWidth }) {
  if (!url) return null;
  // Use a width already eagerly transformed by the backend
  const transformWidth = isMobile ? 360 : 1920;

  // For descriptions of these transforms see: https://cloudinary.com/documentation/transformation_reference
  const maxWidth = `w_${transformWidth}`;
  let transforms = [
    'c_limit',
    'q_99',
    // Maintain aspect ratio when scaling by using asset metadata
    // Without fl_keep_dar some videos will scale improperly
    // SEE: https://support.cloudinary.com/hc/en-us/articles/4733025405458?input_string=aspect+ratio+isn%27t
    'fl_keep_dar',
    maxWidth,
  ];
  if (keepOriginalWidth) {
    transforms = ['q_auto:best'];
  }

  const formats = [
    // vp9: Chrome / Firefox, newer macOS
    { codecTransform: 'vc_vp9', container: 'webm', codec: 'vp9' },
    // h265: Safari iOS, older macOS, and hardware-supported ie11
    { codecTransform: 'vc_h265', container: 'mp4', codec: 'hvc1' },
    // h264: other browsers, most widely supported
    { codecTransform: 'vc_h264', container: 'mp4', codec: 'avc1' },
  ];

  // Prepare URL to add our own transforms and file ext
  const strippedUrl = stripCloudinaryUrl(url);

  const sources = formats.map(({ codecTransform, container, codec }) => {
    const formatTransform = `f_${container}`;
    const transformString = [
      ...transforms,
      codecTransform,
      formatTransform,
    ].join(',');

    const transformUrl = strippedUrl.replace(
      'video/upload',
      `video/upload/${transformString}`
    );
    const src = [transformUrl, container].join('.');
    const type = `video/${container};codecs=${codec}`;

    return MediaSource.of(src, type);
  });

  return sources;
}

export function isFullscreen(node) {
  return !!(
    document.fullScreen ||
    document.webkitIsFullScreen ||
    document.mozFullScreen ||
    document.msFullscreenElement ||
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    // Current ios, you can only tell by checking elements
    node?.webkitDisplayingFullscreen ||
    Array.from(document.querySelectorAll('video')).reduce(
      (r, v) => r || v.webkitDisplayingFullscreen,
      false
    )
  );
}

export function isVideoFullscreen(figure, video) {
  const fse = document.fullscreenElement || document.webkitFullscreenElement;

  // Safari full-screens the video, others fullscreen the figure
  const fs = fse === video || fse === figure;

  return fs;
}

export function toggleFullscreen(container, video) {
  // If fullscreen mode is active...
  if (isFullscreen(video) || isFullscreen(container)) {
    // ...exit fullscreen mode
    // (Note: this can only be called on document)
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
    else if (video.webkitExitFullscreen) {
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
  if (container.requestFullscreen) container.requestFullscreen();
  else if (container.mozRequestFullScreen) container.mozRequestFullScreen();
  else if (container.webkitEnterFullscreen) container.webkitEnterFullscreen();
  else if (container.webkitRequestFullScreen) {
    // Safari 5.1 only allows proper fullscreen on the video element.
    // This also works fine on other WebKit browsers.
    // If you are using custom controls, you will need to hide the
    // default controls that appear again with css.
    video.webkitRequestFullScreen();
  } else if (video?.webkitEnterFullscreen) video.webkitEnterFullscreen();
  else if (container.msRequestFullscreen) container.msRequestFullscreen();

  return true;
}

/**
 * Filters asset in the collection that have all the specified tags.
 * @param {AssetData[]} collection - image or video asset collection
 * @param {string[]|string} tags - the required tag(s) the asset must have.
 * @param {string[]|string} [exclude] - optional tag(s) to that must not be present.
 * @returns {AssetData[]}
 */
export function filterAssetsByTags(collection, tags, exclude) {
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
export function findAssetByTags(collection, tags, exclude) {
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
export function findImageByTags(product, tags, exclude) {
  return findAssetByTags(product.images || [], tags, exclude);
}

/**
 * Finds and returns the first video that has all the specified tags.
 * @param {object} product - the product data.
 * @param {string[]|string} tags - the required tags the video must have.
 * @param {string[]|string} [exclude] - optional tags to that must not be present.
 * @returns {AssetData|null}
 */
export function findVideoByTags(product, tags, exclude) {
  return findAssetByTags(product.videos || [], tags, exclude);
}

/**
 * Finds and returns all images that have all the specified tags.
 * @param {object} product - the product data.
 * @param {string[]|string} tags - the required tags the image must have.
 * @param {string[]|string} [exclude] - optional tags to that must not be present.
 * @returns {AssetData|null}
 */
export function findImagesByTags(product, tags, exclude) {
  return filterAssetsByTags(product.images || [], tags, exclude);
}

/**
 * Finds and returns all videos that have all the specified tags.
 * @param {object} product - the product data.
 * @param {string[]|string} tags - the required tags the video must have.
 * @param {string[]|string} [exclude] - optional tags to that must not be present.
 * @returns {AssetData[]|null}
 */
export function findVideosByTags(product, tags, exclude) {
  return filterAssetsByTags(product.videos || [], tags, exclude);
}

/**
 * Return an object keyed by {@link Breakpoint} entries and mapped to assets
 * @param {{ videos: AssetData[], images: AssetData[] }} assets - the image or videos
 * @return {{ Breakpoint: AssetData }}
 */
export function buildSources(assets) {
  const hasVideos = assets?.videos?.length > 0;
  const collection = hasVideos ? assets.videos : assets.images;
  return {
    type: hasVideos ? 'video' : 'image',
    [BP.mb.name]: findAssetByTags(collection, Tag.mb),
    [BP.tb.name]: findAssetByTags(collection, Tag.tb),
    [BP.dt.name]: findAssetByTags(collection, Tag.dt),
  };
}

/**
 * Attempt to play an audio/video asset and ignore any
 * `The request is not allowed` errors.
 * @param {React.Ref | HTMLVideoElement} media
 */
export function safePlay(media, onFailure = noop) {
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
export function safePause(media) {
  // Allow React refs
  const asset = media?.current ? media.current : media;
  if (isFunc(asset?.pause)) asset.pause();
}

/**
 * Prefix a base64 GIF string to display in img src attributes
 * @param {string} base64Image - encoded image data
 * @return {string}
 */
export function base64GifToSrc(base64Image) {
  const result = `data:image/gif;base64,${base64Image}`;
  return result;
}

/**
 * Returns an array of objects containing dom node and current background url
 * of all nested child elements that have a background image url currently set.
 * @param {HTMLElement|string} target
 */
export function getBgImages(target) {
  const results = [];
  const element = getElement(target);
  if (!element) return results;

  const self = { node: element, bg: getComputedStyle(element).backgroundImage };
  if (self.bg !== 'none') results.push(self);

  Array.from(element.querySelectorAll('*'))
    .map(n => ({ node: n, bg: getComputedStyle(n).backgroundImage }))
    .filter(n => n.bg !== 'none')
    .forEach(n => results.push(n));

  return results;
}
