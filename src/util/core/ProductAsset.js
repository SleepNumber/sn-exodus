import { has } from './object';

/**
 * An immutable class to represent a video or image workarea product asset.
 * Prefer the static initializer `ProductAsset.of` instead of the constructor.
 */
class ProductAsset {
  /** @type {('image'|'video')} */
  type;

  /** @type {string} the source url of the asset */
  url;

  /** @type {string} the database id, globally unique */
  id;

  /** @type {string} the live text content */
  live_text_content;

  /** @type {string} the live text position */
  live_text_position;

  /** @type {Object.<string>} i.e. { Size: 'Queen', Color: 'Slate' } */
  options = {};

  /** @type {number} the order the asset should appear, 0 indexed */
  position = 0;

  /** @type {string[]} the asset's {@link Tag} tags */
  tags = [];

  /** @type {string} only used for images */
  alt_text = '';

  /** @type {boolean} is this the primary image for the product */
  primary = false;

  /** @type {string} a thumbnail image for a video asset */
  thumbnail = '';

  /** @type {boolean} if true, use `poster_time` to build video poster image */
  poster_enabled = false;

  /** @type {number} indicates the time of video in seconds as poster image */
  poster_time = 0;

  /**
   * Create a new ProductAsset instance
   * @param {string} type - The asset type, i.e. 'image' or 'video'
   * @param {AssetData} asset - the workarea asset data
   */
  constructor(type, asset) {
    if (!['video', 'image'].includes(type)) {
      throw new Error(`Type should be 'image' or 'video', received '${type}'`);
    }
    this.type = type;
    this.id = asset.id;
    this.options = asset.options;
    this.position = asset.position;
    this.tags = asset.tags;
    this.url = asset.url;
    this.live_text_content = asset.live_text_content;
    this.live_text_position = asset.live_text_position;


    // Image assets only
    this.alt_text = asset.alt_text || '';
    this.primary = !!asset.primary;

    // Video assets only
    this.thumbnail = asset.thumbnail || '';
    this.poster_enabled = !!asset.poster_enabled;
    this.poster_time = asset.poster_time;
  }

  /**
   * Static initializer to create a ProductAsset instance.
   * Prefer this over the constructor.
   * @param {string} type - The asset type, i.e. 'image' or 'video'
   * @param {AssetData} asset - the workarea asset data
   * @returns {ProductAsset}
   */
  static of(type, asset) {
    return new ProductAsset(type, asset);
  }

  /**
   * Static initializer to create a ProductAsset instance as an image type.
   * @param {AssetData} asset - the workarea asset data
   * @return {ProductAsset}
   */
  static image(asset) {
    return new ProductAsset('image', asset);
  }

  /**
   * Static initializer to create a ProductAsset instance as a video type.
   * @param {AssetData} asset - the workarea asset data
   * @return {ProductAsset}
   */
  static video(asset) {
    return new ProductAsset('video', asset);
  }

  /**
   * Return `true` if this is a pojo that has the properties needed for a ProductAsset
   * @param {object} o - the object to test
   * @return {boolean}
   */
  static isAssetLike(o) {
    const props = Object.keys(new ProductAsset('image', {}));
    return has(o, props);
  }
}

export default ProductAsset;
