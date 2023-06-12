function getTransformations(type = 'image') {
  switch (type) {
    case 'image':
      return 'f_auto,q_auto:eco/';
    case 'video':
      return 'vc_auto,q_auto:eco/';
    case 'svg':
      return '';
    default:
      return 'f_auto,q_auto:eco/';
  }
}

/**
 * @returns Cloudinary asset version string e.g. v1607021429
 */
function getCloudinaryVersion() {
  const buildNumber = new Date().toJSON().slice(0, 10).replace(/-/g, '');
  const buildDigits = buildNumber.replace(/\D/g, '');
  return `v${buildDigits}`;
}

/**
 * @typedef Environments
 * @property {string} local - local environment
 * @property {string} develop - qa environment
 * @property {string} staging - staging environment
 * @property {string} master - production environment
 */
/**
 * Given a relative URL, output an base URL pointing to
 * the correct cloudinary instance.
 * @param {string} url - the url to transform
 * @param {'image'|'video'} type - One of {'image'|'video'}
 * @param {string} build_environment - the environment variable
 * @param {Environments} environments - the type of environment webpack is in
 * @returns {string | null} cloudinary remote fetch url base
 */
function getRemoteFetchUrl(
  filename,
  type = 'image',
  build_environment,
  environments
) {
  const isSvg = filename.search(/\.svg$/g) > -1;
  const transformations = getTransformations(isSvg ? 'svg' : type);
  const domain =
    build_environment === environments.master
      ? 'https://cdn.sleepnumber.com/'
      : 'https://res.cloudinary.com/';

  let cloudName = 'snbr-qa'; // QA
  if (build_environment === environments.staging) cloudName = 'snbr-stg'; // Staging
  if (build_environment === environments.master) cloudName = 'sleepnumber'; // Production

  const config = `/${type}/upload/${transformations}${getCloudinaryVersion()}/uploads/dist/`;
  const result = domain + cloudName + config;
  return result;
}

module.exports = { getRemoteFetchUrl };
