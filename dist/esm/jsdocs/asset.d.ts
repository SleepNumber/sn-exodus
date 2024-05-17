type AssetData = {
    /**
     * - the asset identifier, i.e. "6006d103b07a02006b870ccf"
     */
    id: string;
    /**
     * - the live text content
     */
    live_text_content: string;
    /**
     * - the live text position
     */
    live_text_position: string;
    /**
     * - i.e. { Size: 'Queen', Color: 'Slate' }
     */
    options: any;
    /**
     * - the order the asset should appear, 0 indexed
     */
    position: number;
    /**
     * - the asset's tags, i.e. ['postcard', 'gallery']
     */
    tags: string[];
    /**
     * - asset url
     */
    url: string;
    /**
     * - is this image the primary image for the product, images only
     */
    primary?: boolean;
    /**
     * - the asset alt text, images only
     */
    alt_text?: string;
    /**
     * - a thumbnail image for video assets, videos only
     */
    thumbnail?: string;
    /**
     * - if true, use `poster_time` to build video poster image
     */
    poster_enabled?: boolean;
    /**
     * - indicates the time of video in seconds as poster image
     */
    poster_time?: number;
};
//# sourceMappingURL=asset.d.ts.map