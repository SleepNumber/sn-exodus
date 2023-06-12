import 'url-polyfill';
import 'custom-event-polyfill';

/**
 * core-js polyfills are now added automatically by babel
 * See https://babeljs.io/docs/en/babel-preset-env#usebuiltins-usage
 */

/**
 * String.prototype.contains
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes#String.prototype.contains
 *
 * We still need this because of a recent rename.
 */
if (!String.prototype.contains) {
  String.prototype.contains = String.prototype.includes; // eslint-disable-line no-extend-native
}

/**
 * Element.prototype.matches
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
 */
if (BROWSER_ENV && !Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;
}
