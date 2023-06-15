import React from 'react';
import PT from 'prop-types';
import { validate } from './validate';
import { Breakpoint } from './device';

export const common_input_props = {
  id: PT.string,
  label: PT.any,
  desc: PT.string,
  onChange: PT.func,
  error: PT.string,
  classes: PT.any,
  wrapperClasses: PT.any,
};

export const text = {};
/**
 * Weave <br>'s in between each string in an array of strings.
 * Each string in the original array is wrapped in a span to apply a key.
 * @param {String[]} textArray - The array of strings to weave <br>'s into.
 */
function breakText(textArray) {
  return textArray.reduce((prev, curr, i) => {
    // eslint-disable-next-line react/no-array-index-key
    prev.push(<span key={`t-${i}`}>{curr}</span>);
    // eslint-disable-next-line react/no-array-index-key
    if (i < textArray.length - 1) prev.push(<br key={`b-${i}`} />);
    return prev;
  }, []);
}
text.break = breakText;

/**
 * Puts special characters in a sup tag, each piece is wrapped in a React.Fragment
 * @param {String} input - The string to turn into an array of fragments.
 * @returns {React.Fragment[] | null} - An array of fragments or null if input falsy
 *
 * Example:
 * text.supSpecial('No sleeping† in Missouri℠') ->
 * [
 *   <React.Fragment key={0}>No sleeping</React.Fragment>,
 *   <React.Fragment key={1}><sup>†</sup></React.Fragment>,
 *   <React.Fragment key={2}> in Missouri</React.Fragment>,
 *   <React.Fragment key={3}><sup>℠</sup></React.Fragment>,
 * ]
 */
function supSpecial(input) {
  if (!input) return null;

  if (typeof input === 'string') {
    // We need this to be an array
    return supSpecial([input]);
  }

  // Get last item in input array
  const [unformatted] = input.splice(-1);
  if (typeof unformatted !== 'string') {
    // Everything is formatted
    return [...input, unformatted];
  }

  // Reverse the string and check if the starting <sup> tag is there
  const match =
    unformatted
      .split('')
      .reverse()
      .join('')
      .match(/[†‡§®™℠](?!<pus>)/i) && unformatted.match(/[†‡§®™℠](?!<\/sup>)/i);

  if (!match) {
    // We found the last string, then everything is formatted
    return [
      ...input,
      <React.Fragment key={input.length}>{unformatted}</React.Fragment>,
    ];
  }

  const { 0: matched, index } = match;
  const semiFormatted = [];

  if (input.length > 0) {
    // Add what's already been formatted
    semiFormatted.push(...input);
  }
  let suppedKey = input.length;
  const preSpecial = unformatted.substring(0, index);
  if (preSpecial.length > 0) {
    suppedKey += 1;
    // Add text before our special character
    semiFormatted.push(
      <React.Fragment key={input.length}>{preSpecial}</React.Fragment>
    );
  }

  if (matched.length > 0) {
    semiFormatted.push(
      // Add supped special
      <React.Fragment key={suppedKey}>
        <sup>{matched}</sup>
      </React.Fragment>
    );
  }

  const remainder = unformatted.substring(index + match.length);
  if (remainder.length > 0) {
    // Add remaining unformatted string
    semiFormatted.push(remainder);
  }

  return supSpecial(semiFormatted);
}
text.supSpecial = supSpecial;

/**
 * Puts special characters in a sup tag and returns string of html for dangerouslySetInnerHTML
 * Input: 'No sleeping†`
 * Output: '<span><span>No sleeping</span><sup>†</sup></span>'
 * @param {String} input - The string to turn into an html string.
 * @returns {string | null} - a string of html or null if input falsy
 */
function supSpecialDangerousHtml(input) {
  if (!input) return null;

  if (typeof input === 'string') {
    // We need this to be an array
    return supSpecialDangerousHtml([input]);
  }

  const [unformatted] = input.splice(-1);
  if (typeof unformatted !== 'string') {
    // Everything is formatted
    return [...input, unformatted];
  }

  const match =
    unformatted
      .split('')
      .reverse()
      .join('')
      .match(/[†‡§®™℠](?!<pus>)/i) && // reverse the string and check if the starting <sup> tag is there
    unformatted.match(/[†‡§®™℠](?!<\/sup>)/i);

  if (!match) {
    // We found the last string, then everything is formatted

    const formatted = [
      `<span>`,
      ...input,
      `<span>${unformatted}</span>`,
      `</span>`,
    ].join('');
    return formatted;
  }

  const { 0: matched, index } = match;
  const semiFormatted = [];

  if (input.length > 0) {
    // Add what's already been formatted
    semiFormatted.push(...input);
  }

  const preSpecial = unformatted.substring(0, index);
  if (preSpecial.length > 0) {
    // Add text before our special character
    semiFormatted.push(`<span>${preSpecial}</span>`);
  }

  if (matched.length > 0) {
    semiFormatted.push(
      // Add supped special
      `<span><sup>${matched}</sup></span>`
    );
  }

  const remainder = unformatted.substring(index + match.length || 0);
  if (remainder.length > 0) {
    // Add remaining unformatted string
    semiFormatted.push(remainder);
  }

  return supSpecialDangerousHtml(semiFormatted);
}
text.supSpecialDangerousHtml = supSpecialDangerousHtml;

export const validators = {
  /**
   * Returns a dom event handler (usually for `onBlur`)
   * that dispatches an action if the value is not a valid email.
   * @param {string} type - The action type.
   * @param {function} dispatch - The store dispatcher.
   * @param {string} [msg] - The Error message.
   * @returns {function} - The dom event handler.
   */
  email: (type, dispatch, msg) => e => {
    const { value } = e.target;
    msg = msg || 'Please enter a valid email address.';
    if (!validate.email(value)) dispatch({ type, value: msg });
  },

  /**
   * Returns a dom event handler that dispatches an action value is empty.
   * @param {string} type - The action type.
   * @param {function} dispatch - The store dispatcher.
   * @param {string} [msg] - The Error message.
   * @returns {function} - The dom event handler.
   */
  required: (type, dispatch, msg) => e => {
    const { value } = e.target;
    msg = msg || 'Required';
    if (!value || !value.trim()) dispatch({ type, value: msg });
  },
};

export const entitiesOf = type =>
  PT.shape({
    byId: PT.objectOf(type),
    allIds: PT.arrayOf(PT.string).isRequired,
  });

export function ConditionalWrapper({ condition, wrapper, children }) {
  return condition ? wrapper(children) : children;
}

/**
 * PropType where boolean means show or don't show, Breakpoint[] means show at breakpoints
 */
export const displayableType = PT.oneOfType([PT.bool, PT.arrayOf(Breakpoint)]);

/**
 * If boolean, show or don't show, if Breakpoint[], show at breakpoints
 * @typedef {boolean|Breakpoint[]} DisplayAt
 */

export function Blank() {
  return null;
}
