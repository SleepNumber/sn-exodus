/**
 * @typedef AssetData
 * @property {string} id - the asset identifier, i.e. "6006d103b07a02006b870ccf"
 * @property {Object.<string>} options - i.e. { Size: 'Queen', Color: 'Slate' }
 * @property {number} position - the order the asset should appear, 0 indexed
 * @property {string[]} tags - the asset's tags, i.e. ['postcard', 'gallery']
 * @property {string} url - asset url
 * @property {boolean} [primary] - is this image the primary image for the product, images only
 * @property {string} [alt_text] - the asset alt text, images only
 * @property {string} [thumbnail] - a thumbnail image for video assets, videos only
 * @property {boolean} [poster_enabled] - if true, use `poster_time` to build video poster image
 * @property {number} [poster_time] - indicates the time of video in seconds as poster image
 */
