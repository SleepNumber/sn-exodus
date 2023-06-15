export default ProductAsset;
/**
 * An immutable class to represent a video or image workarea product asset.
 * Prefer the static initializer `ProductAsset.of` instead of the constructor.
 */
declare class ProductAsset {
    /**
     * Static initializer to create a ProductAsset instance.
     * Prefer this over the constructor.
     * @param {string} type - The asset type, i.e. 'image' or 'video'
     * @param {AssetData} asset - the workarea asset data
     * @returns {ProductAsset}
     */
    static of(type: string, asset: AssetData): ProductAsset;
    /**
     * Static initializer to create a ProductAsset instance as an image type.
     * @param {AssetData} asset - the workarea asset data
     * @return {ProductAsset}
     */
    static image(asset: AssetData): ProductAsset;
    /**
     * Static initializer to create a ProductAsset instance as a video type.
     * @param {AssetData} asset - the workarea asset data
     * @return {ProductAsset}
     */
    static video(asset: AssetData): ProductAsset;
    /**
     * Return `true` if this is a pojo that has the properties needed for a ProductAsset
     * @param {object} o - the object to test
     * @return {boolean}
     */
    static isAssetLike(o: object): boolean;
    /**
     * Create a new ProductAsset instance
     * @param {string} type - The asset type, i.e. 'image' or 'video'
     * @param {AssetData} asset - the workarea asset data
     */
    constructor(type: string, asset: AssetData);
    /** @type {('image'|'video')} */
    type: ('image' | 'video');
    /** @type {string} the source url of the asset */
    url: string;
    /** @type {string} the database id, globally unique */
    id: string;
    /** @type {Object.<string>} i.e. { Size: 'Queen', Color: 'Slate' } */
    options: any;
    /** @type {number} the order the asset should appear, 0 indexed */
    position: number;
    /** @type {string[]} the asset's {@link Tag} tags */
    tags: string[];
    /** @type {string} only used for images */
    alt_text: string;
    /** @type {boolean} is this the primary image for the product */
    primary: boolean;
    /** @type {string} a thumbnail image for a video asset */
    thumbnail: string;
    /** @type {boolean} if true, use `poster_time` to build video poster image */
    poster_enabled: boolean;
    /** @type {number} indicates the time of video in seconds as poster image */
    poster_time: number;
}
//# sourceMappingURL=ProductAsset.d.ts.map