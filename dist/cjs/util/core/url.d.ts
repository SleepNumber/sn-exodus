/** Retrieve a request parameter by name. */
export function getUrlParam(name: any, url: any): string;
/**
 * Return true if the query string has the parameter.
 * @param {string} name - the parameter name
 * @param {URL} [url] - the url to check
 */
export function hasUrlParam(name: string, url?: URL): boolean;
/** Add url search params to url */
export function buildUrl(endpoint: any, params: {}, traditional: any): string;
export function setUrlHash(hash: any): void;
//# sourceMappingURL=url.d.ts.map