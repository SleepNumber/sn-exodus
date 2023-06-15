import { installGlobals } from '@remix-run/node';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';
import jest_dom_matchers from '@testing-library/jest-dom/matchers';
import * as vitest_axe_matchers from 'vitest-axe/matchers';
import sanitizeHtml from 'sanitize-html';
import { expect } from 'vitest';
import { webcrypto } from 'crypto';

expect.extend(jest_dom_matchers);
expect.extend(vitest_axe_matchers);
installGlobals();

global.sn_globals = {
  config: {
    popups: {
      wait_time: -1, // Duration to check for DY in ms
      modal_show_wait_time: 1000, // Duration to wait for our code to request popups in ms
      priority: [
        {
          id: 'MINI_CART',
          name: 'Mini-Cart',
          type: 'Permanent',
          source: '',
        },
        {
          id: 'INSIDER_APPRECIATION',
          name: 'Insider Appreciation',
          type: 'Permanent',
          source: '',
        },
        {
          id: 'TWO_STEP_LEADGEN',
          name: 'Two-Step Lead Generator',
          type: 'Permanent',
          source: '',
        },
        {
          id: 'BED_QUIZ_TOAST',
          name: 'Bed Quiz Toast',
          type: 'Permanent',
          source: '',
        },
        {
          id: 'CMS_HOMEPAGE_VDAY_MODAL',
          name: 'Veterans Day Appreciation',
          type: 'CMS',
          source: { name: 'HomePage', url: '/admin/pages/home' },
        },
      ],
    },
    current_active_bases: {
      modular: [
        { id: 'ib-360', slug: 'ib' },
        { id: 'ibf-360', slug: 'ibf' },
      ],
      adjustable: [
        { id: 'ff1-360', slug: 'ff1' },
        { id: 'ff2-360', slug: 'ff2' },
        { id: 'ff3-360', slug: 'ff3' },
      ],
    },
  },
};

const mockGeolocation = {
  getCurrentPosition: vi.fn(),
  watchPosition: vi.fn(),
};

mockGeolocation.getCurrentPosition.mockImplementation(
  success =>
    success({ coords: { latitude: 37.774929, longitude: -122.419416 } }) // San Francisco
);

// @ts-ignore
global.navigator.geolocation = mockGeolocation;

// testing library will use the data-qa attr when we call *TestId methods
configure({ testIdAttribute: 'data-qa' });

/* Mocked Polyfills
----------------------------------------------------------------------------- */

Object.defineProperty(global.self, 'TextEncoder', { value: TextEncoder });

// jsdom doesn't implement web crypto.subtle, see: https://github.com/jsdom/jsdom/issues/1612
Object.defineProperty(global.self, 'crypto', {
  value: {
    subtle: {
      digest: (algorithm, data) => webcrypto.subtle.digest(algorithm, data),
    },
    getRandomValues: arr =>
      webcrypto.getRandomValues(new Uint8Array(arr.length)),
  },
});

// See https://github.com/akiran/react-slick/issues/742#issuecomment-460281987
window.matchMedia = vi.fn().mockImplementation(query => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
  };
});

// jsdom does not implement innerText
Object.defineProperty(global.Element.prototype, 'innerText', {
  get() {
    return sanitizeHtml(this.textContent, {
      allowedTags: [], // remove all tags and return text content only
      allowedAttributes: {}, // remove all tags and return text content only
    });
  },
  configurable: true, // make it so that it doesn't blow chunks on re-running tests with things like --watch
});

Object.defineProperty(window, 'scrollTo', {
  value: () => {},
  writable: true,
});

/* Jest Extensions
----------------------------------------------------------------------------- */

expect.extend({
  toContainObject(received, argument) {
    const pass = this.equals(
      received,
      expect.arrayContaining([expect.objectContaining(argument)])
    );

    if (pass) {
      return {
        message: () =>
          `expected ${this.utils.printReceived(
            received
          )} not to contain object ${this.utils.printExpected(argument)}`,
        pass: true,
      };
    }
    return {
      message: () =>
        `expected ${this.utils.printReceived(
          received
        )} to contain object ${this.utils.printExpected(argument)}`,
      pass: false,
    };
  },
});
