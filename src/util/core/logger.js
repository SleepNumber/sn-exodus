/* eslint-disable no-console */
/**
 * Module to abstract the console.
 * Performs the log only if
 * - the environment has a console,
 * - with the desired log function,
 * - and either the server is in dev mode or the browser is in debug mode.
 */

import { noop } from './function';
import {
  win,
  isDebug,
  isProduction,
  isJestEnv,
} from './constants';

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
