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
export function withSpecialtyTag({ tags }: {
    tags?: any[];
}): boolean;
/** Predicate to find assets without specialty size tags */
export function withoutSpecialtyTag({ tags }: {
    tags?: any[];
}): boolean;
export function isMp4(url: any): any;
export function isJpg(url: any): any;
export function asMp4(url: any): any;
export function asJpg(url: any): any;
export function sslUrl(url: any): any;
/**
 * Remove the `f_auto` cloudinary transform so, we get back expected formats.
 * Useful when attempting to prefetch for caching
 * @param {string} asset - cloudinary url to modify
 */
export function retainFormat(asset: string): string;
/**
 * Converts `rgb(0, 153, 51)` to `#009933`.
 * @param {string} rgb - the rgb color string to convert.
 */
export function rgbToHex(rgb: string): string;
/**
 * Converts `#009933` to `rgb(0, 153, 51)`.
 * @param {string} hex - the hex color string to convert.
 * @param {boolean} asString - if true, returned value is `rgb(<r>,<g>,<b>)` instead of an object
 */
export function hexToRgb(hex: string, asString?: boolean): string | {
    r: number;
    g: number;
    b: number;
};
/**
 *
 * @returns Cloudinary asset version string e.g. v1607021429
 */
export function getCloudinaryVersion(): string;
/**
 * Given a relative URL, output an absolute URL pointing to
 * the correct cloudinary instance.
 * @param {string} url - the url to transform
 * @param {'image'|'video'} type - One of {'image'|'video'}
 * @returns {string | null} cloudinaryUrl
 */
export function getCloudinaryUrl(url: string, type?: 'image' | 'video'): string | null;
/**
 * Returns a thumbnail image of a cloudinary video at a specific time.
 * @param {ProductAsset|MediaSource|string} asset - media source or product asset or a cloudinary video url
 * @returns {string|null}
 */
export function getVideoPlaceholder(asset: ProductAsset | MediaSource | string): string | null;
/**
 * Returns an image from a frame of a video with a 20% dark tint
 * @param {ProductAsset|MediaSource|string} asset - media source or product asset or a cloudinary video url
 * @returns {string|null}
 */
export function getVideoPoster(asset: ProductAsset | MediaSource | string): string | null;
/**
 * Return a square thumbnail image for a video.
 * Builds a cloudinary url with transforms replaced to produce a square image,
 * 768px tall, with a black tint.
 * @param {AssetData} video - the product video asset data
 * @return {string}
 */
export function getVideoThumb(video: AssetData): string;
/**
 * Returns the width and height of an image.
 * @param {string} url - URL to image
 * @returns {width: number, height: number} image dimensions
 */
export function getImageDimensions(url: string): width;
/**
 * Returns the width and height it would take to cover an element using the
 * dimensions of an asset.  Simulates what object-fit: cover does.
 * @param {string|Image|Video} asset - the asset used to cover an area
 * @param {node|window} elem=window - the element to cover, defaults to window viewport
 * @returns {{width: number, height: number}}
 */
export function getAssetCoverSize(asset: string | (new (width?: number, height?: number) => HTMLImageElement) | Video, elem?: node | (Window & typeof globalThis)): {
    width: number;
    height: number;
};
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
export function importAll(requireContext: Function): object;
/**
 * Remove transforms and file extensions from cloudinary URLs
 *
 * @param {string} videoUrl - Cloudinary video url
 * @return {string}
 */
export function stripCloudinaryUrl(videoUrl: string): string;
/**
 * Given a cloudinary video url and a device width
 * get an array of video urls and types optimized for that width.
 * Assets are scaled down while preserving aspect ratio, and never upscaled.
 *
 * @param {String} videoUrl - Cloudinary URL to video
 * @param {Number} width - Used to determine video resolution
 * @param {Boolean} keepOriginalWidth - Don't apply width transformations
 * @return {Array<MediaSource>} Video urls and formats for delivering optimized video
 */
export function getOptimizedVideo(videoUrl: string, width: number, keepOriginalWidth: boolean): Array<MediaSource>;
export function isFullscreen(node: any): boolean;
export function isVideoFullscreen(figure: any, video: any): boolean;
export function toggleFullscreen(container: any, video: any): boolean;
/**
 * Filters asset in the collection that have all the specified tags.
 * @param {AssetData[]} collection - image or video asset collection
 * @param {string[]|string} tags - the required tag(s) the asset must have.
 * @param {string[]|string} [exclude] - optional tag(s) to that must not be present.
 * @returns {AssetData[]}
 */
export function filterAssetsByTags(collection: AssetData[], tags: string[] | string, exclude?: string[] | string): AssetData[];
/**
 * Finds and returns the first asset in the collection that has all the specified tags.
 * @param {AssetData[]} collection - image or video asset collection
 * @param {string[]|string} tags - the required tag(s) the asset must have.
 * @param {string[]|string} [exclude] - optional tag(s) to that must not be present.
 * @returns {AssetData|null}
 */
export function findAssetByTags(collection: AssetData[], tags: string[] | string, exclude?: string[] | string): AssetData | null;
/**
 * Finds and returns the first image that has all the specified tags.
 * @param {object} product - the product data.
 * @param {string[]|string} tags - the required tags the image must have.
 * @param {string[]|string} [exclude] - optional tags to that must not be present.
 * @returns {AssetData|null}
 */
export function findImageByTags(product: object, tags: string[] | string, exclude?: string[] | string): AssetData | null;
/**
 * Finds and returns the first video that has all the specified tags.
 * @param {object} product - the product data.
 * @param {string[]|string} tags - the required tags the video must have.
 * @param {string[]|string} [exclude] - optional tags to that must not be present.
 * @returns {AssetData|null}
 */
export function findVideoByTags(product: object, tags: string[] | string, exclude?: string[] | string): AssetData | null;
/**
 * Finds and returns all images that have all the specified tags.
 * @param {object} product - the product data.
 * @param {string[]|string} tags - the required tags the image must have.
 * @param {string[]|string} [exclude] - optional tags to that must not be present.
 * @returns {AssetData|null}
 */
export function findImagesByTags(product: object, tags: string[] | string, exclude?: string[] | string): AssetData | null;
/**
 * Finds and returns all videos that have all the specified tags.
 * @param {object} product - the product data.
 * @param {string[]|string} tags - the required tags the video must have.
 * @param {string[]|string} [exclude] - optional tags to that must not be present.
 * @returns {AssetData[]|null}
 */
export function findVideosByTags(product: object, tags: string[] | string, exclude?: string[] | string): AssetData[] | null;
/**
 * Return an object keyed by {@link Breakpoint} entries and mapped to assets
 * @param {{ videos: AssetData[], images: AssetData[] }} assets - the image or videos
 * @return {{ Breakpoint: AssetData }}
 */
export function buildSources(assets: {
    videos: AssetData[];
    images: AssetData[];
}): {
    Breakpoint: AssetData;
};
/**
 * Attempt to play an audio/video asset and ignore any
 * `The request is not allowed` errors.
 * @param {React.Ref | HTMLVideoElement} media
 */
export function safePlay(media: React.Ref | HTMLVideoElement, onFailure?: () => void): any;
/**
 * Attempt to pause an audio/video asset.
 * @param {React.Ref | HTMLVideoElement} media
 */
export function safePause(media: React.Ref | HTMLVideoElement): void;
/**
 * Prefix a base64 GIF string to display in img src attributes
 * @param {string} base64Image - encoded image data
 * @return {string}
 */
export function base64GifToSrc(base64Image: string): string;
/**
 * Returns an array of objects containing dom node and current background url
 * of all nested child elements that have a background image url currently set.
 * @param {HTMLElement|string} target
 */
export function getBgImages(target: HTMLElement | string): any[];
export const isSecure: boolean;
export namespace placehold {
    export let image: string;
    export { phVideo as video };
}
export type ImageData = AssetData;
export type VideoData = AssetData;
import ProductAsset from './ProductAsset';
import MediaSource from './MediaSource';
//# sourceMappingURL=assets.d.ts.map