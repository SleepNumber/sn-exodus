import { compile, middleware, serialize, stringify } from 'stylis';

import MicroCache from '~/util/core/cache';
import { isPlainObject } from '~/util/core/object';
import { isDevelopment } from '~/util/core/constants';
import { camelToKabob, hash, isString } from '~/util/core/string';

const cache = new MicroCache();

/**
 * Convert style objects to a string of valid css.
 * camelCase names are converted to kabob-case.
 * @param {string|object} input
 * @return {string}
 *
 * USAGE:
 * styleObjectToCss({ fontSize: '8px', backgroundColor: 'blue' }) ->
 * `
 * font-size 8px;
 * background-color: blue;
 * `
 */
export function styleObjectToCss(input) {
  if (isString(input)) return input;
  const entries = Object.entries(input);
  const styleText = entries.reduce((result, [k, v], i) => {
    const last = i === entries.length - 1;
    return `${result}${camelToKabob(k)}: ${v};${last ? '' : ' '}`;
  }, '');
  return styleText;
}

/**
 * Convert the input to a string of css.
 * Input can be a string of css, a css style object, or an array of either
 * @param {string, object, Array<string|object>} input
 * @return {string}
 */
export function buildStyleString(input) {
  if (Array.isArray(input)) {
    // Array of <string|object>
    return input
      .filter(Boolean)
      .map(o => {
        if (isPlainObject(o)) return styleObjectToCss(o);
        return o;
      })
      .join(' ');
  } else if (isPlainObject(input)) {
    // style object
    return styleObjectToCss(input);
  } else if (isString(input)) {
    // string
    return input;
  }
  // anything else
  return '';
}

/**
 * Add some css styles to the page in a new `<style>` tag.
 * If a style tag with the {id} already exists, the contents are updated.
 * @param {string} id - a unique identifier for the style tag
 * @param {string} css - a string of valid css
 */
export function addGlobalStyles(id, css) {
  let node = document.getElementById(id);
  if (!node) {
    node = document.createElement('style');
    node.id = id;
    node.dataset.wrapperCss = id;
    node.setAttribute('wrapper-css', id);
    node.innerHTML = css;
    document.head.appendChild(node);
  } else if (node.innerHTML !== css) {
    node.innerHTML = css;
  }
}

/**
 * Create a unique class name and add it to all the rules in the styles
 * i.e. `.foo { color: 'black'; }`
 *      becomes
 *      `.wrapper-class .foo { color: 'black'; }`
 * Returns null if `styles` are falsey or an array of falsey values.
 * @param {string | object} css - a string of valid css, or valid style object
 * @return {{className: string, styles: string} | null}
 */
export function createWrapperStyles(styles) {
  let css = buildStyleString(styles);
  if (!css) return null;

  const className = `wrapper-css-${hash(css)}`;
  css = css.replaceAll('&', `.${className}`);
  if (cache.has(className)) return cache.get(className);

  let text = serialize(
    compile(css),
    middleware([
      element => {
        if (element.type === 'rule' && element.value.includes(className)) {
          element.props = element.props.map(p => {
            // Skip this line since we've replaced a `&` with the className already
            if (p.includes(className)) return p;
            return `.${className} ${p}`;
          });
          // Done, bail out now
          return;
        }

        if (element.type === 'rule') {
          // Add class name to rule
          element.props = element.props.map(p => `.${className} ${p}`);
        } else if (element.type === 'decl' && !element.parent) {
          // Top level (naked) rule, convert it to a rule with declarations
          element.return = `.${className}{${element.value}}`;
        } else if (
          element.type === 'decl' &&
          element.parent.type === '@media'
        ) {
          // Top level (naked) rule inside media query,
          // convert it to a rule with declarations
          element.return = `.${className}{${element.value}}`;
        }
      },
      stringify,
    ])
  );

  if (isDevelopment()) {
    // Make it a little prettier
    text = text
      .replaceAll('{', ' {\n')
      .replaceAll('}', '}\n')
      .replaceAll(';', ';\n');
    text = text.replaceAll(/(.*);/g, '  $&');
  }

  const result = {
    className,
    styles: text,
  };

  cache.put(className, result);

  return result;
}

/**
 * Prefixes all rules in {css} with a unique class name,
 * adds the updated styles to the page in a style tag,
 * and returns the unique class name.
 * @param {string} css - a valid string of css
 * @return {string} - the unique class name to add to your component
 *
 * USAGE:
 * const clazz = addWrapperStyles('.foo { color: "red"; }');
 * return (
 *   <div className={clazz}>
 *     <span className='foo'>bar</span>
 *   </div>
 * );
 */
export function addWrapperStyles(css) {
  const { className, styles } = createWrapperStyles(css);
  addGlobalStyles(className, styles);
  return className;
}

/**
 * Replace the emotion template string function "css`.foo { color: black; }`;"
 * Just returns the string as-is but allows the IDE to do syntax highlighting
 * @return {string}
 */
export default function css(strings, ...values) {
  return strings.reduce((acc, current, i) => acc + values[i - 1] + current);
}
