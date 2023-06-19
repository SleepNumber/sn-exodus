import { isBrowser } from 'browser-or-node';
import Cookies from 'js-cookie';

import Cookie from './Cookie';
import Enumify from './enumify';
import { isFunc } from './function';
import { namespace } from './object';

export const localUrl = 'https://sleepnumber.test';
export const qaUrl = 'https://qa.sleepnumber.com';
export const stageUrl = 'https://staging.sleepnumber.com';
export const prodUrl = 'https://www.sleepnumber.com';

export const isJestEnv = global?.process?.env?.NODE_ENV === 'test';
let windowObject = global || window;
const isSSR = !isBrowser && !isJestEnv;
if (isSSR) {
  const hosts = {
    local: 'https://sleepnumber.test:8090',
    qa: qaUrl,
    staging: stageUrl,
    production: prodUrl,
  };
  const ssrHost = hosts[process.env.BUILD_ENV] || hosts.local;
  const ssrHref = `${ssrHost}/categories/beds-on-sale`;
  const ssrUrl = new URL(ssrHref);

  // Set the origin for all the places that check it
  windowObject = {
    ...windowObject,
    location: ssrUrl,
  };
}
export const win = windowObject;
export const sn_globals = win?.sn_globals || { config: {} };

export const isProduction = () => sn_globals.config.env === 'production';
export const isStaging = () => sn_globals.config.env === 'staging';
export const isQa = () => sn_globals.config.env === 'qa';
export const isDevelopment = () => sn_globals.config.env === 'development';

export const isDevPage = win?.location?.pathname?.startsWith('/dev/');
export const isAdminPage =
  win?.top?.location?.href?.includes('/admin/') ||
  win?.location?.pathname?.startsWith('/admin/');

export const isTestEnv = sn_globals.config.env !== 'production';

export function isDebug() {
  if (!isBrowser) return false;
  const cookieValue = Cookies.get(Cookie.debug.name);
  return cookieValue && cookieValue !== 'false';
}

namespace('sn.toggleDebug', function toggleDebug() {
  const current = isDebug();
  Cookies.set(Cookie.debug.name, !current);
  // eslint-disable-next-line no-console
  console.log(`sn-debug set to "${!current}"`);
});

export const timezone =
  'Intl' in win
    ? Intl.DateTimeFormat().resolvedOptions().timeZone
    : 'America/Chicago';

/** Returns the browser locale. Defaults to `en-US`. */
export function locale() {
  return (
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    'en-US'
  );
}

export const attributes = {
  // window.sessionStorage fields
  session: {
    mlp: {
      compare: 'mlp_compare_order',
    },
  },
  // window.localStorage fields
  local: {
    modals: {
      insider_appreciation_shown: 'insider_appreciation_shown',
      insider_signin_shown: 'insider_signin_shown',
      lead_capture_link: 'lead_capture_link',
      lead_compare_shown: 'lead_compare_shown',
      lead_compare_submitted: 'lead_compare_submitted',
      lead_modal_email_submitted: 'lead_capture_email_submitted',
      lead_modal_help_shown: 'lead_capture_help_shown',
      lead_modal_help_submitted: 'lead_capture_help_submitted',
      lead_modal_shown: 'lead_capture_shown',
      lead_modal_submitted: 'lead_capture_submitted',
      lead_quiz_shown: 'lead_quiz_shown',
      lead_quiz_submitted: 'lead_quiz_submitted',
    },
    toasts: {
      blog_toast_shown: 'blog_toast_shown',
      bq_toast_shown: 'bq_toast_shown',
    },
    misc: {
      hd_pending_cancel: 'hd_pending_cancel',
      last_tracked_order_id: 'last_tracked_order_id',
    },
    bq: {
      skus: 'bed-quiz-skus',
      results: 'bed-quiz-results',
    },
    ic: {
      points: 'inner-circle-points',
    },
  },

  // Response header fields
  headers: {
    flash: 'x-flash-messages',
  },
};

// Used in console logging
export const css = {
  fwb: 'font-weight: bold;',
  fwn: 'font-weight: normal;',

  black: 'color: #777777;',
  gray: 'color: #9e9e9e;',
  white: 'color: #ffffff',
  blue: 'color: #03a9f4;',
  green: 'color: #4caf50;',
  red: 'color: #f20404;',
  orange: 'color: #ff8000;',
};

// Used in console logging
export const styles = {
  normal: `${css.fwn}${css.black}`,
  strong: `${css.fwb}${css.black}`,
  label: `${css.fwb}${css.gray}`,
  value: `${css.fwn}${css.blue}`,
  success: `${css.fwn}${css.green}`,
  error: `${css.fwn}${css.red}`,
  orange: `${css.fwn}${css.orange}`,
};

export const months = [
  { name: 'January', abbr: 'Jan', value: 1 },
  { name: 'February', abbr: 'Feb', value: 2 },
  { name: 'March', abbr: 'Mar', value: 3 },
  { name: 'April', abbr: 'Apr', value: 4 },
  { name: 'May', abbr: 'May', value: 5 },
  { name: 'June', abbr: 'Jun', value: 6 },
  { name: 'July', abbr: 'Jul', value: 7 },
  { name: 'August', abbr: 'Aug', value: 8 },
  { name: 'September', abbr: 'Sept', value: 9 },
  { name: 'October', abbr: 'Oct', value: 10 },
  { name: 'November', abbr: 'Nov', value: 11 },
  { name: 'December', abbr: 'Dec', value: 12 },
];

export const specials = {
  asterisk: {
    label: 'Asterisk',
    value: '*',
    entity: '*',
    unicode: '\u20F0',
  },
  reg: {
    label: 'Registered Trade Mark',
    value: '®',
    entity: '&reg;',
    unicode: '\u00AE',
  },
  tm: {
    label: 'Trade Mark',
    value: '™',
    entity: '&trade;',
    unicode: '\u2122',
  },
  sm: {
    label: 'Service Mark',
    value: '℠',
    entity: '&#8480;',
    unicode: '\u2120',
  },
  dagger: {
    label: 'Dagger',
    value: '†',
    entity: '&dagger;',
    unicode: '\u2020',
  },
  doubledagger: {
    label: 'Double Dagger',
    value: '‡',
    entity: '&Dagger;',
    unicode: '\u2021',
  },
  section: {
    label: 'Section',
    value: '§',
    entity: '&sect;',
    unicode: '\u00A7',
  },
};

export const keyCodes = {
  esc: 27,
  space: 32,
  backspace: 8,
  enter: 13,
  tab: 9,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  home: 36,
  end: 35,
  n: 78,
  p: 80,
};
keyCodes.radio = {
  prev: [keyCodes.left, keyCodes.up],
  next: [keyCodes.right, keyCodes.down],
};
keyCodes.arrows = [keyCodes.left, keyCodes.up, keyCodes.right, keyCodes.down];

export const spacing = {
  space: '\u0020',
  nbsp: '\u00a0',
  ndash: '\u0096',
  mdash: '\u0097',
  ellipsis: '\u2026',
};

export const timing = {
  scroll: 500,
  expand: 150,
  transition: 250,
  animation: 'cubic-bezier(0.42, 0, 0.58, 1)',
};

export const mime = {
  app: {
    json: 'application/json',
    form: 'multipart/form-data',
  },
};

export const headers = {
  accept: 'Accept',
  content: 'Content-Type',
};

export const millisPerYear = 31536000000;

export const ALERT_TYPES = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  danger: 'danger',
  warning: 'warning',
  info: 'info',
  dark: 'dark',
  light: 'light',
};

export const ALERT_FLAVORS = {
  normal: 'normal',
  toast: 'toast',
};

/**
 * General purpose status enum.
 * @enum
 */
export class Status extends Enumify {
  static idle = new Status();
  static pending = new Status();
  static success = new Status();
  static error = new Status();
  static active = new Status();
  static complete = new Status();
  static _ = this.closeEnum();
}

/**
 * General purpose direction enum.
 * @enum
 */
export class Direction extends Enumify {
  static up = new Direction();
  static down = new Direction();
  static left = new Direction();
  static right = new Direction();
  static _ = this.closeEnum();
}

/**
 * Listing of user segments.
 * @enum
 */
export const USER_SEGMENT = {
  innercircle: 'InnerCircle',
  insider: 'Insider',
};

export class CheckoutSteps extends Enumify {
  static NotStarted = new CheckoutSteps({ name: 'not_started' });

  static Login = new CheckoutSteps({
    name: 'login',
    next: () => CheckoutSteps.Shipping,
  });

  static Shipping = new CheckoutSteps({
    name: 'shipping',
    next: () => CheckoutSteps.Delivery,
  });

  static Delivery = new CheckoutSteps({
    name: 'delivery',
    next: () => CheckoutSteps.Payment,
  });

  static Payment = new CheckoutSteps({
    name: 'payment',
    next: () => CheckoutSteps.Review,
  });

  static Review = new CheckoutSteps({
    name: 'review',
    next: () => CheckoutSteps.Confirmation,
  });

  static Confirmation = new CheckoutSteps({ name: 'confirmation' });

  static _ = this.closeEnum();

  constructor(props) {
    super();
    this.next = props.next;
    this.name = props.name;
  }
}

const zindex_dropdown = 1000;
const zindex_fixed = 1030;
const zindex_modal = 107159;
const zindex_modal_backdrop = 1040;
const zindex_popover = 1060;
const zindex_sticky = 1020;
const zindex_tooltip = 1070;

/** Global z-index values */
export class ZIndex extends Enumify {
  // From bootstrap
  static dropdown = new ZIndex(zindex_dropdown);
  static sticky = new ZIndex(zindex_sticky);
  static fixed = new ZIndex(zindex_fixed);
  static modal_backdrop = new ZIndex(zindex_modal_backdrop);
  static modal = new ZIndex(zindex_modal);
  static popover = new ZIndex(zindex_popover);
  static tooltip = new ZIndex(zindex_tooltip);

  // Live person chat button
  static chat_button = new ZIndex(107158);
  // Overlap live person chat
  static over_chat = new ZIndex(107159);

  constructor(index) {
    super();
    this.value = index;
  }
}

/** Classes used as logic flags on the page. */
export const page_classes = {
  header_unpin: '-unpinned-header',
  jumping: '-jump-scrolling',
  position_sticky: 'position-sticky',
  top_below_header: 'top-below-header',
  search_open: '-search-open',
  skip_nav_show: '-skip-nav-show',
};
// cx can take arrays: `cx('foo', page_classes.sticky_top)`
page_classes.sticky_top = [
  page_classes.position_sticky,
  page_classes.top_below_header,
];
export const page_selectors = {
  sticky_top: '.position-sticky.top-below-header',
  search_open: '.-search-open',
  header_unpin: '.-unpinned-header',
  jumping: '.-jump-scrolling',
};

/** Use performance API if it's available for better precision. */
export const timer = isFunc(win, 'performance.now')
  ? win?.performance
  : win?.Date;
export const regex = {
  // https://emailregex.com
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/,

  zip_partial: /^\d{1,5}$/,
  zip: /^\d{5}$/,
  zip_full: /^\d{5}(?:-\d{4})?$/,

  iso_state: /(US-[A-Z]{2})/,

  geo: {
    lat: /^-?([0-8]?\d|90)\.\d{1,6}$/,
    long: /^-?((1?[0-7]?|\d?)\d|180)\.\d{1,6}$/,
  },

  /** @see http://www.regular-expressions.info/creditcard.html */
  cc: {
    visa: /^4\d{12}(?:\d{3})?$/,
    master: /^5[1-5]\d{14}$/,
    amex: /^3[47]\d{13}$/,
    diners: /^3(?:0[0-5]|[68]\d)\d{11}$/,
    discover: /^6(?:011|5\d{2})\d{12}$/,
    jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
    sn: /^(60346233|60191702|60191708).*/, // Sleep Number Financing Cards
  },
};
