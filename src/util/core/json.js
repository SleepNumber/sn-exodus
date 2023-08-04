/**
 * Parses the inner text contents of 'id' as JSON and returns it.
 * Returns undefined if not target is found for 'id'.
 * @param {string} id - The css id of the data script container.
 */
import { namespace } from './object';

export function json(id) {
  const target = document.getElementById(`data-${id}`);
  return target ? JSON.parse(target.innerHTML) : undefined;
}

/** Returns true if this is a json response. */
export function isJson(resp) {
  if (!resp?.getResponseHeader && !resp?.headers) return false;

  try {
    const header = resp.getResponseHeader
      ? resp.getResponseHeader('content-type') // XMLHttpResponse
      : resp.headers.get('content-type'); // Fetch API Response
    return !!header.match(/application\/json/i);
  } catch (err) {
    return false;
  }
}

export function burnin() {
  return Array.from(document.querySelectorAll('.sn-json')).reduce(
    (result, elem) => {
      const name = elem.id.replace('data-', '').trim();
      result[name] = JSON.parse(elem.textContent);
      return result;
    },
    {}
  );
}

export function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export function safeJsonStringify(obj) {
  try {
    return JSON.stringify(obj);
  } catch (err) {
    return null;
  }
}

namespace('sn.json', { parse: json, isJson, burnin, isJsonString });
