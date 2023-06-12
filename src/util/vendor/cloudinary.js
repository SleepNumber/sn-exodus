/**
 * @see https://cloudinary.com/documentation/transformation_reference
 * @type {string[]}
 */

export const Transformers = [
  'a', // angle
  'ac', // audio codec
  'af', // audio frequency
  'ar', // aspect ratio
  'b', // background
  'bo', // border
  'br', // bit rate
  'c', // crop/resize
  'co', // color
  'cs', // color space
  'd', // default image
  'dl', // delay
  'dn', // density
  'dpr', // DPR
  'du', // duration
  'e', // effect
  'eo', // end offset
  'f', // format
  'fl', // flag
  'fn', // custom function
  'fps', // FPS
  'g', // gravity
  'h', // height
  'if', // if condition
  'ki', // keyframe interval
  'l', // layer
  'o', // opacity
  'p', // prefix
  'pg', // page or file layer
  'q', // quality
  'r', // round corners
  'so', // start offset
  'sp', // streaming profile
  't', // named transformation
  'u', // underlay
  'vc', // video codec
  'vs', // video sampling
  'w', // width
  'x', // x coordinates
  'y', // y coordinates
  'z', // zoom
  '$', // variable
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
export function getCloudinaryTransformData(url = '') {
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
    suffix: url.substring(t_end),
  };
}

/**
 * Returns a cloudinary url with the transforms replaced
 * @param {string} url - a cloudinary url
 * @param {string[]} transforms - a list of transforms
 * @return {string}
 */
export function setCloudinaryTransforms(url = '', transforms = []) {
  const { prefix, suffix } = getCloudinaryTransformData(url);
  return `${prefix}${transforms.join(',')}${suffix}`;
}

/**
 * Returns a cloudinary url with the specified transforms updated if they exist
 * or add if they do not already exist in the url.
 * @param {string} url - a cloudinary url
 * @param {string[]} transforms - a list of cloudinary transforms
 * @return {string}
 */
export function updateCloudinaryTransforms(url = '', transforms = []) {
  const data = getCloudinaryTransformData(url);
  const transformsMap = transforms.reduce((acc, t) => {
    const type = t.substring(0, t.indexOf('_'));
    acc[type] = t;
    return acc;
  }, {});

  const updated = { ...data.asMap };
  Object.entries(transformsMap).forEach(([type, value]) => {
    // Override existing transform or add new transform
    updated[type] = value;
  });
  const next = Object.values(updated);

  return `${data.prefix}${next.join(',')}${data.suffix}`;
}
