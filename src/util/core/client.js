import Cookies from 'js-cookie';
import Cookie from './Cookie';
import { isJson } from './json';
import { buildUrl } from './url';

/**
 * Build a message for an `Error` using the response data.
 * Text responses will be truncated to the first line of the response.
 * Object responses will be JSON stringified.
 * @param {*} data - the response data
 * @return {string}
 */
function getErrorMessage(data) {
  let msg = '';
  if (typeof data === 'string') {
    // First line
    const matches = data.match(/^([^\n]+)\n/g);
    msg = matches?.[0]?.replace(/\n/g, '') || '';
    msg = `"${msg}"`;
  } else if (typeof data === 'object') {
    try {
      msg = JSON.stringify(data, null, 2);
    } catch (err) {
      /* ignore */
    }
  } else {
    msg = String(data);
  }

  return msg;
}

/**
 * Build the request and return the fetch promise.
 * See https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper
 * @param {string} endpoint - url to fetch
 * @param {any} [body] - optional post body. if present, the method will default to 'POST'
 * @param {object} [params={}] - optional url params. added as params to the endpoint url
 * @param {RequestInit} [customConfig={}] - fetch `config` overrides
 * @param {boolean} [auth=true] - include the auth header if present
 * @param {boolean} [asXhr=true] - if true, x-requested-with header is `XMLHttpRequest`
 * @param {boolean} [asJson=true] - if true, content type will be `application/json` body will be JSON stringified
 * @param {boolean} [withResp=false] - if true, promise resolution will be `[data, response]` instead of `data`
 * @return {Promise<Response>}
 */
function client({
  endpoint,
  body,
  params = {},
  customConfig = {},
  auth = true,
  asXhr = true,
  asJson = true,
  withResp = false,
  traditional = false,
}) {
  const headers = {
    Accept: 'application/json',
  };

  const auth_token = Cookies.get(Cookie.auth_token.name);
  if (auth && auth_token) headers.Authorization = `Token token=${auth_token}`;
  if (asXhr) headers['X-Requested-With'] = 'XMLHttpRequest';
  if (asJson) headers['Content-Type'] = 'application/json';

  const access_token = Cookies.get(Cookie.access_token.name);
  if (access_token) headers['Access-Token'] = `${access_token}`;
  const id_token = Cookies.get(Cookie.id_token.name);
  if (id_token) headers['Id-Token'] = `${id_token}`;
  const refresh_token = Cookies.get(Cookie.refresh_token.name);
  if (refresh_token) headers['Refresh-Token'] = `${refresh_token}`;

  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  const isGet = config.method.match(/get/i);
  const isApi = endpoint.match(/api\/storefront/i);
  const isCartOrCheckout = endpoint.match(/cart|checkout/);
  const { token: csrf } = window?.sn_globals || {};
  const { preview_release_id } = window?.sn_globals?.config || {};
  const price_lists = (Cookies.get(Cookie.price_lists.name) || '').trim();

  // Release preview
  if (preview_release_id && isApi) params.prid = preview_release_id;

  // Price List ID hash
  if (price_lists && isApi && !isCartOrCheckout) {
    // Something in the babel compilation is calling Object.preventExtensions on params
    // which causes a type error when adding plid. Cloning object to get around that.
    // At some point we should figure out how to tell babel to stop doing that.
    params = { ...params, plid: price_lists };
  }

  // CSRF token
  if (!isGet && csrf) config.headers[csrf.header] = csrf.value;

  if (body) config.body = asJson ? JSON.stringify(body) : body;
  config.method = config.method.toUpperCase();

  const url = buildUrl(endpoint, params, traditional);

  return fetch(url, config).then(async response => {
    const text = await response.text();
    const isJsonResponse = isJson(response);

    const data = text && isJsonResponse ? JSON.parse(text) : text;

    if (response.ok) {
      // Handle empty JSON responses
      if (isJsonResponse && text.length === 0) return {};

      return withResp ? [data, response] : data;
    }

    // Error Response
    const msg = getErrorMessage(data);
    const error = new Error(msg);
    error.data = data;
    error.response = response;

    return Promise.reject(error);
  });
}

export default client;
