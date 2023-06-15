export default client;
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
declare function client({ endpoint, body, params, customConfig, auth, asXhr, asJson, withResp, traditional, }: string): Promise<Response>;
//# sourceMappingURL=client.d.ts.map