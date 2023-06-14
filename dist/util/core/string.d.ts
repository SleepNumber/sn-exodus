export function isString(input: any): boolean;
/**
 * Capitalize the first letter of the string, keep the rest as-is.
 * Example:
 * capitalize('chat with us!') -> "Chat with us!"
 */
export function capitalize(phrase: any): any;
/**
 * For each word in the phrase, uppercase the first letter and lowercase the rest.
 * Example:
 * titlecase('LYOCELL uLTra Sheet SET') -> "Lyocell Ultra Sheet Set"
 */
export function titlecase(phrase: any): any;
/**
 * Convert snake_case or sentence to camelCase
 * @param {string} phrase
 * @return {string}
 *
 * Example:
 * camelCase('foo_bar') -> "fooBar"
 * camelCase('Foo Bar') -> "fooBar"
 */
export function camelCase(phrase: string): string;
/**
 * Convert camelCase into snake_case
 * @param {string} phrase
 * @returns {string}
 *
 * Example:
 * camelToSnake('fooBar') -> "foo_bar"
 */
export function camelToSnake(phrase: string): string;
/**
 * Convert camelCase into kabob-case
 * @param {string} phrase
 * @returns {string}
 *
 * Example:
 * camelToSnake('fooBar') -> "foo-bar"
 */
export function camelToKabob(phrase: string): string;
/**
 * Convert PascalCase into snake_case
 * @param {string} phrase
 * @returns {string}
 *
 * Example:
 * pascalToSnake('FooBar') -> "foo_bar"
 */
export function pascalToSnake(phrase: string): string;
/**
 * Convert snake_case to PascalCase
 * @param {string} phrase
 * @returns {string}
 *
 * Example:
 * snakeToPascal('foo_bar') -> "FooBar"
 */
export function snakeToPascal(phrase: string): string;
/**
 * Sleep Number's crazy naming scheme
 * @param {string} phrase
 * @returns {string} cased like 'pSE SPECIAL EDITION'
 */
export function mattressCase(phrase: string, allowSpecialCase?: boolean): string;
/**
 * Rails has the concept of 'optionizing' text which replaces spaces with
 * underscores and lower-cases text.
 *
 * Example:
 * optionize('Soft Green'); -> "soft_green"
 */
export function optionize(phrase?: string): string;
/**
 * Replace '_' characters with spaces
 *
 * Example:
 * deoptionize('soft_green'); -> "Soft Green"
 */
export function deoptionize(phrase?: string): any;
/**
 * Replaces spaces with dashes and lower-cases text.
 *
 * Example:
 * dasherize('Split California King'); -> "split-california-king"
 */
export function dasherize(phrase?: string): string;
/**
 * Replaces dashes with spaces and uppercase the first letter of each word.
 *
 * Example:
 * dasherize('split-california-king'); -> "Split California King"
 */
export function undasherize(phrase?: string): any;
export function repeat(str: any, times: any): string;
export function wordCount(string: any): any;
export function pad(num: any, maxLength: any): string;
export function replaceAt(s: any, i: any, c: any): any;
export function endsWith(s: any, c: any): boolean;
export function firstWord(s: any): any;
/**
 * Generate a universally unique identifier.
 * @return {string}
 */
export function uuid(): string;
/** Add a uuid to something if it doesn't already have one. */
export function lazyId(o: any): any;
/** Return the size of a string in bytes assuming UTF-8 encoding. */
export function bytes(str: any): any;
/**
 * Returns either an empty string, a plural character of choice, or
 * an optional singular form.
 * @param {boolean} condition False will return an empty string.
 * @param {string} plural Plural suffix, 's' by default.
 * @param {string} [singular] Optional singular suffix, or version.
 */
export function pluralIf(condition: boolean, plural?: string, singular?: string): string;
/**
 * Returns a number of for a string px value, ie: '23px' => 23.
 */
export function pxToNum(str: any): number;
/**
 * Returns a truncated string with ellipsis (...) appended.
 * @param {string} string to truncate
 * @param {number} number of characters to keep
 */
export function truncate(str: any, num: any): any;
/** Convert a 'true' or 'false' string to a boolean */
export function asBool(str: any): boolean;
/** Replace all the special characters from a string */
export function removeSpecialCharacters(input?: string): any;
/**
 * Convert a string to a hash
 * Inspired by https://github.com/garycourt/murmurhash-js
 */
export function hash(str: any): string;
//# sourceMappingURL=string.d.ts.map