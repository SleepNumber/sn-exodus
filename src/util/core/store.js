/**
 * Module to create data stores and providers.
 */

import React from 'react';
import Cookies from 'js-cookie';
import Cookie from './Cookie';

import { styles, css, isDebug, isProduction } from './constants';
import { namespace, prop } from './object';
import { noop } from './function';
import { uuid } from './string';
import logger from './logger';
import hub, { useSubscription } from './hub';
import { arrays } from './array';
import { format, formats } from './format';

const stores = {};

/**
 * @typedef Store
 * @property {string} name
 * @property {string} topic
 * @property {React.Context} context
 * @property {function} dispatch
 * @property {(function(string, *=): onChange)} change
 * @property {(function(string, *=): onSelect)} select
 * @property {(function(Function))} subscribe
 * @property {function: object} getState
 * @property {function} selectState
 */

/**
 * Create a store.
 * @param {object} blueprint
 * @param {string} blueprint.name
 * @param {object} blueprint.context
 * @param {function} blueprint.handle
 * @param {function} blueprint.getDefaultState
 * @return {Store}
 */
export function createStore(blueprint) {
  const { name, context, handle: rootReducer } = blueprint;
  const topic = `store.${name}`;
  const logging = !isProduction() || isDebug();

  let state = blueprint.getDefaultState();

  let listeners = [];

  /** Retrieve the current state of the store. */
  function getState() {
    return state;
  }

  /**
   * Select portions of the state tree
   * @param {Object.<string, string|function>} selectors -
   *   Map of prop names to either
   *     1. string - Part of the state tree to be selected
   *     2. function - Run on the state to return the value
   * @param {Object} [currentState=getState()] -
   *   State to run against. Defaults to the stores state.
   *   Use this parameter if the state is a combination of multiple store states.
   * @returns props based on the selectors
   */
  const selectState = (selectors, currentState = getState()) => {
    const props = {};

    if (!selectors) {
      return props;
    }
    Object.keys(selectors).forEach(propName => {
      const selector = selectors[propName];
      if (typeof selector === 'string') {
        props[propName] = prop(currentState, selector);
      } else if (typeof selector === 'function') {
        props[propName] = selector(currentState);
      }
    });
    return props;
  };

  /**
   * Dispatch an action or actions to the action handler,
   * then notify all store listeners.
   * @param {object|object[]} action - action or array of actions to dispatch.
   * @param {string} [action.type] - the action type
   */
  function dispatch(action) {
    const multi = Array.isArray(action);
    const filters = getLogIgnores();
    const shouldLog = logging && !filters.includes(name);

    if (shouldLog) {
      const canGroup = logger.groupCollapsed !== noop;
      const time = format.date(new Date(), formats.time.PRECISE);
      const grouper = canGroup ? logger.groupCollapsed : logger.info;
      const type = multi ? action.map(a => a.type).join(', ') : action.type;

      grouper.apply(logger, [
        `${time} %cstore: %c${name} %caction${multi ? 's' : ''}: %c${type}`,
        `${styles.label}`,
        `${styles.value}`,
        `${styles.label}`,
        `${styles.value}`,
      ]);
      logger.info('%cBefore', `${css.gray}`, state);
      logger.info(`%cAction${multi ? 's' : ''}`, `${css.blue}`, action);
    }

    if (multi) {
      if (!action.length) return;
      action.forEach(a => {
        state = rootReducer(state, a);
      });
    } else {
      state = rootReducer(state, action);
    }

    if (shouldLog) {
      logger.info('%cAfter', `${css.green}`, state);
      logger.groupEnd();
    }

    listeners.forEach(listener => listener());
    hub.pub(topic, action);
  }

  /**
   * Returns an event handler function to dispatch actions with
   * a `type` and `value` property. If the first argument is an
   * event, the `value` is pulled from the  event's current target,
   * otherwise the first argument is used as the `value`.
   *
   * Useful for creating `onClick` or `onChange` handlers.
   *
   * @param {string} type - The action type.
   * @param {*} [item] - Optional identifier of item to change.
   * @returns {function(arg)}.
   */
  function change(type, item) {
    return function onChange(arg) {
      let value;
      const isEvent = typeof arg === 'object' && arg.currentTarget;

      if (isEvent) {
        if (arg.currentTarget.type === 'checkbox') {
          value = arg.currentTarget.checked;
        } else {
          // eslint-disable-next-line prefer-destructuring
          value = arg.currentTarget.value;
        }
      } else {
        value = arg;
      }

      dispatch({ type, item, value });
    };
  }

  /**
   * Returns a ReactBootstrap `onSelect` handler.
   * Necessary since the first arg is the eventKey, not the event.
   * See https://react-bootstrap.github.io/components.html
   * @param {string} type - The action type.
   * @param {*} [item] - Optional identifier of item to select.
   * @returns {function(value)}
   */
  function select(type, item) {
    return function onSelect(value) {
      dispatch({ type, item, value });
    };
  }

  /**
   * Register a listener callback to the store.
   * Listeners callbacks are fired after actions are dispatched in the
   * order they were registered.
   * @param {function} listener - The listener callback to register.
   * @returns {function} - A function to unregister the listener.
   */
  function subscribe(listener) {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }

  // Dispatch an initial event to populate store with default state.
  dispatch({});

  const store = {
    name,
    context,
    topic,
    getState,
    selectState,
    subscribe,
    dispatch,
    change,
    select,
  };

  stores[name] = store;
  return store;
}

/**
 * Creates a store state provider component and a dispatch function that will
 * trigger your render for you. No need to subscribe to your store.
 * @param blueprint - the store blueprint
 * @returns {[Provider, Store]} an array containing the provider component and the store
 */
export function createProvider(blueprint) {
  const store = createStore(blueprint);

  const { context: Context } = blueprint;

  /**
   * Using react context as the app state management lib.
   * @see https://kentcdodds.com/blog/application-state-management-with-react
   * @see https://kentcdodds.com/blog/how-to-use-react-context-effectively
   */
  function Provider({ children, ...rest }) {
    const [, startTransition] = React.useTransition();
    const [, pulse] = React.useState('');
    useSubscription(store.topic, () => {
      startTransition(() => pulse(uuid()));
    });

    const state = store.getState();
    const value = React.useMemo(
      () => ({
        state,
        dispatch: store.dispatch,
        change: store.change,
        select: store.select,
        store,
      }),
      [state]
    );

    return (
      <Context.Provider value={value} {...rest}>
        {children}
      </Context.Provider>
    );
  }

  return [Provider, store];
}

export function providerError(name) {
  return new Error(
    `useStore must be used within the "${name}" store's Provider`
  );
}

/**
 * Gets the list of stores whose logs are being hidden.
 * @return {*|*[]}
 */
function getLogIgnores() {
  return JSON.parse(Cookies.get(Cookie.log_ignores) || '[]');
}

/**
 * Hides logging for a stores actions in the console.
 * @param {string} store - the store name to hide logs for.
 */
function ignore(store) {
  const filters = getLogIgnores();

  if (!filters.includes(store)) {
    filters.push(store);
    Cookies.set(Cookie.log_ignores, JSON.stringify(filters));
  }

  return getLogIgnores();
}

/**
 * Removes store from list of stores whose actions are hidden from the console.
 * @param {string} store - the store name
 */
function unignore(store) {
  const filters = getLogIgnores();
  arrays.remove(filters, s => s === store);
  Cookies.set(Cookie.log_ignores, JSON.stringify(filters));
  return getLogIgnores();
}

namespace('sn.store', {
  getLogIgnores,
  ignore,
  unignore,
  get: store => (!store ? stores : stores[store]),
});
