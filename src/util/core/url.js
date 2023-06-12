import { win } from './constants';

/** Retrieve a request parameter by name. */
export function getUrlParam(name, url) {
  const href = url || win?.location?.href;
  const sanitizedName = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  const regexS = `[\\?&]${sanitizedName}=([^&#]*)`;
  const results = new RegExp(regexS, 'i').exec(href);

  if (results === null) {
    return null;
  }
  return decodeURIComponent(results[1].replace(/\+/g, ' '));
}

/** Return true if the query string has the parameter. */
export function hasUrlParam(name, url) {
  const loc = url || win?.location;
  if (!loc) return false;
  const params = loc.search
    .split(/[&?]/g)
    .filter(param => Boolean(param))
    .map(param => param.split('=')[0].toLowerCase());

  return params.includes(name.toLowerCase());
}

/** Add url search params to url */
export function buildUrl(endpoint, params = {}, traditional) {
  const isFullUrl = !endpoint.startsWith('/');
  const origin = win.location.origin;

  const url = isFullUrl ? new URL(endpoint) : new URL(endpoint, origin);

  Object.entries(params).forEach(([k, v]) => {
    if (Array.isArray(v) && traditional) {
      v.forEach(item => url.searchParams.append(k, item));
    } else {
      url.searchParams.append(k, v);
    }
  });

  return url.href;
}

export function setUrlHash(hash) {
  const url = new URL(win?.location);
  url.hash = hash;
  win?.history?.pushState({}, '', url);
}
