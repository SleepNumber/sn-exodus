/* eslint-disable no-console */
/**
 * Module to abstract the console.
 * Performs the log only if
 * - the environment has a console,
 * - with the desired log function,
 * - and either the server is in dev mode or the browser is in debug mode.
 */

import { noop } from './function';
import { win, isDebug, isProduction, isJestEnv } from './constants';

/**
 * @typedef {Object} ConsoleType
 * @property {(...args: any[]) => void} log
 * @property {(...args: any[]) => void} info
 * @property {(...args: any[]) => void} warn
 * @property {(...args: any[]) => void} error
 * @property {(...args: any[]) => void=} debug
 * @property {(condition: any, ...args: any[]) => void=} assert
 * @property {() => void=} clear
 * @property {(label?: string) => void=} count
 * @property {(label?: string) => void=} countReset
 * @property {(tabularData: any, properties?: string[]) => void=} table
 * @property {(...label: any[]) => void=} group
 * @property {(...label: any[]) => void=} groupCollapsed
 * @property {() => void=} groupEnd
 * @property {(label?: string) => void=} time
 * @property {(label?: string) => void=} timeEnd
 * @property {(...args: any[]) => void=} trace
 * @property {(obj: any, options?: any) => void=} dir
 * @property {(...args: any[]) => void=} dirxml
 */

/** @type {ConsoleType} */
const logger = {};

[
  'assert',
  'dir',
  'count',
  'log',
  'info',
  'debug',
  'warn',
  'error',
  'table',
  'trace',
  'group',
  'groupEnd',
  'groupCollapsed',
  'profile',
  'profileEnd',
  'time',
  'timeEnd',
  'timeStamp',
].forEach(key => {
  const isLoggable = win?.console && win?.console[key];
  const shouldLog = (!isJestEnv && !isProduction()) || isDebug();

  logger[key] =
    isLoggable && shouldLog
      ? function log(...args) {
          win.console[key](...args);
        }
      : noop;

  /**
   * A log statement that only fires if in `debug mode`,
   * i.e `sn-debug` cookie set to `true`.
   */
  logger.sndebug = function sndebug(...args) {
    if (!isDebug()) return;
    console.log('DEBUG:', ...args);
  };
});

export default logger;
