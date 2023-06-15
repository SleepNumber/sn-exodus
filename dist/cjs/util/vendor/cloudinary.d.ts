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
export function getCloudinaryTransformData(url?: string): {
    url: string;
    start: number;
    end: number;
    transforms: string[];
    asMap: any;
    prefix: string;
    suffix: string;
};
/**
 * Returns a cloudinary url with the transforms replaced
 * @param {string} url - a cloudinary url
 * @param {string[]} transforms - a list of transforms
 * @return {string}
 */
export function setCloudinaryTransforms(url?: string, transforms?: string[]): string;
/**
 * Returns a cloudinary url with the specified transforms updated if they exist
 * or add if they do not already exist in the url.
 * @param {string} url - a cloudinary url
 * @param {string[]} transforms - a list of cloudinary transforms
 * @return {string}
 */
export function updateCloudinaryTransforms(url?: string, transforms?: string[]): string;
/**
 * @see https://cloudinary.com/documentation/transformation_reference
 * @type {string[]}
 */
export const Transformers: string[];
//# sourceMappingURL=cloudinary.d.ts.map