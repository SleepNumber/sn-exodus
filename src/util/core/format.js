import { pad } from './string';
import { timezone } from './constants';

export const formats = {
  date: {
    /** "Thursday, November 7" */
    DAY_MONTH_LONG: date =>
      date.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        timeZone: timezone,
      }),

    /** "Nov 7, 2019" */
    MONTH_ABR_DAY_YEAR: date =>
      date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        timeZone: timezone,
      }),

    /** "November 7, 2019" */
    MONTH_LONG_DAY_YEAR: date =>
      date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        timeZone: timezone,
      }),

    /** "11/7/2019" */
    SIMPLE: date =>
      date.toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
        timeZone: timezone,
      }),

    /** "11/07/2019" */
    SIMPLE_2_DIGIT: date =>
      date.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        timeZone: timezone,
      }),

    /** "11/07/2019" */
    UTC_SIMPLE_2_DIGIT: date =>
      date.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        timeZone: 'UTC',
      }),

    /** "11/7/2019" */
    MONTH_DAY_YEAR: date =>
      date.toLocaleDateString('en-US', { timeZone: timezone }),

    /** "11/8/2019" */
    UTC_MONTH_DAY_YEAR: date =>
      date.toLocaleDateString('en-US', { timeZone: 'UTC' }),

    /** "2019-11-07"
     * See https://www.iso.org/iso-8601-date-and-time-format.html
     */
    /* eslint-disable prefer-template */
    ISO: date =>
      date.getUTCFullYear() +
      '-' +
      pad(date.getUTCMonth() + 1, 2) +
      '-' +
      pad(date.getUTCDate(), 2),
    /* eslint-enable prefer-template */

    /** "20191107" */
    COMPACT: date =>
      date.getFullYear() + pad(date.getMonth() + 1, 2) + pad(date.getDate(), 2),
  },

  time: {
    /** "2:07 PM CST" */
    SIMPLE: time =>
      time.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        timeZone: timezone,
        timeZoneName: 'short',
      }),
    /** "2:07 PM" */
    HOUR_AND_MINUTE: time =>
      time.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
      }),
    /** "2 PM" */
    HOUR_ONLY: time =>
      time.toLocaleTimeString('en-US', {
        hour: 'numeric',
      }),

    /** "14:07 CST" */
    ARMY: time =>
      time.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        timeZone: timezone,
        timeZoneName: 'short',
      }),

    /** "14:07:59.506" */
    PRECISE: time =>
      `${pad(time.getHours(), 2)}` +
      `:${pad(time.getMinutes(), 2)}` +
      `:${pad(time.getSeconds(), 2)}` +
      `.${pad(time.getMilliseconds(), 3)}`,

    /** "14:07:59" */
    PRECISE_NO_MILLISECONDS: time =>
      `${pad(time.getHours(), 2)}` +
      `:${pad(time.getMinutes(), 2)}` +
      `:${pad(time.getSeconds(), 2)}`,
  },

  datetime: {
    /** "11/7/2019, 2:07 PM" */
    LOCAL: datetime =>
      datetime.toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        timeZone: timezone,
      }),

    /** "11/7/2019, 2:07 PM CST" */
    SIMPLE: datetime =>
      datetime.toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        timeZone: timezone,
        timeZoneName: 'short',
      }),
  },
};
/** Formatters */
export const format = {
  /**
   ** Format a Date object into a date, with the browser's timezone and a configurable format
   * @param {Date|String|Number} [date=now] - Unix timestamp to format as a readable date-time
   * @param {Function} [formatter='MMM D, YYYY'] - The format to use.
   */
  date(date = new Date(), formatter = formats.date.MONTH_ABR_DAY_YEAR) {
    return formatter(new Date(date));
  },

  /**
   * Convert 24h time string to 12h time string with meridiems(PM/AM).
   * @param {String} time - ie.: "19:00"
   * @returns {String} - ie.: "7 PM"
   */
  formatTimeString(time, trim = false) {
    const parts = time.split(':');
    const hour = Number(parts[0]);
    const minute = Number(parts[1]);
    const showMinute = minute !== 0 ? `:${parts[1]}` : '';

    const pm = hour >= 12;
    let formattedHour = hour;
    if (pm) formattedHour = hour === 12 ? '12' : hour % 12;
    let result = pm
      ? `${formattedHour}${showMinute} PM`
      : `${hour}${showMinute} AM`;

    if (trim) {
      result = result.replace(' PM', 'pm').replace(' AM', 'am');
    }
    return result;
  },

  /**
   * Return a formatted percent string to the decimal places specified.
   * USAGE:
   * sn.format.percent(13, 205, 3) // "6.341%"
   * sn.format.percent(5, 10, 3) // "50%"
   * @param {Number} count - The current count of items.
   * @param {Number} total - The total number of items.
   * @param {Number} decimals - The number of decimal places.
   */
  percent(count, total, decimals = 3) {
    return `${Number(((count / total) * 100).toFixed(decimals)).toString()}%`;
  },

  /**
   * Return a formatted currency string for the supplied number.
   * USAGE:
   * sn.format.currency(123456789.12345) // "$123,456,789.12"
   * @param {string|number} num - the currency amount.
   * @param {boolean} trim - if `true`, '.00' is omitted, default to `false`.
   */
  currency(num, trim = false) {
    let n = num;

    if (typeof num === 'object') {
      // convert price type
      n = num.cents / 100;
    }

    const trimming = trim ? '.00' : '';
    const c = 2;
    const d = '.';
    const t = ',';
    const s = n < 0 ? '-$' : '$';
    const i = `${parseInt((n = Math.abs(+n || 0).toFixed(c)), 10)}`;
    let j = i.length;
    j = j > 3 ? j % 3 : 0;

    return (
      s +
      (j ? i.substr(0, j) + t : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, `$1${t}`) +
      (c
        ? d +
          Math.abs(n - i)
            .toFixed(c)
            .slice(2)
        : ''
      ).replace(trimming, '')
    );
  },

  /**
   * Reduce a numerator and denominator to it's smallest,
   * integer ratio using Euclid's Algorithm. Example:
   * <code>
   *   ratio(1920, 1080) -> "16:9"
   * </code>
   */
  ratio(numerator, denominator) {
    let flip = false;
    let n = numerator;
    let d = denominator;
    const gcd = (a, b) => {
      if (b === 0) return a;
      return gcd(b, a % b);
    };

    if (n === d) return '1 : 1';

    // Make sure numerator is always the larger number
    if (+n < +d) {
      flip = true;
      const temp = n;
      n = d;
      d = temp;
    }

    const divisor = gcd(+n, +d);

    return flip
      ? `${d / divisor}:${n / divisor}`
      : `${n / divisor}:${d / divisor}`;
  },

  time(sec) {
    const seconds = Number(sec);

    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor((seconds % 3600) % 60);

    let result = `${`0${m}`.slice(-2)}:${`:0${s}`.slice(-2)}`;
    if (h > 0) result = `${`0${h}`.slice(-2)}:${result}`;

    return result;
  },
};

/**
 * Returns a human readable format of the difference between an date/timestamp
 * and now.
 * @param {Date|String} dateMillis - the unix timestamp or date instance.
 * @param {boolean} useIn - when true, future times use 'in' instead of 'from now'.
 * @return {string} the formatted difference, i.e. `one month from now` or `two days ago`
 */
export function fromNow(dateMillis, useIn = false) {
  let millis = dateMillis;
  if (dateMillis instanceof Date) {
    millis = dateMillis.getTime();
  }
  const now = Date.now();
  const diff = now - millis;
  const isBefore = dateMillis < now;
  const abs = Math.abs(diff);

  const days = Math.floor(abs / (24 * 60 * 60 * 1000));
  const daysMs = abs % (24 * 60 * 60 * 1000);
  const hrs = Math.floor(daysMs / (60 * 60 * 1000));
  const hrsMs = abs % (60 * 60 * 1000);
  const mins = Math.floor(hrsMs / (60 * 1000));
  const minsMs = abs % (60 * 1000);
  const secs = Math.floor(minsMs / 1000);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (isBefore) {
    // In the past
    if (years > 1) return `${years} years ago`;
    if (years === 1) return 'a year ago';
    if (months > 1) return `${months} months ago`;
    if (months === 1) return '1 month ago';
    if (days > 1) return `${days} days ago`;
    if (days === 1) return 'yesterday';
    if (hrs > 1) return `${hrs} hours ago`;
    if (hrs === 1) return 'one hour ago';
    if (mins > 1) return `${mins} minutes ago`;
    if (mins === 1) return '1 minute ago';
    if (secs > 1) return `${secs} seconds ago`;

    return '1 second ago';
  }

  // In the future
  if (years > 1) return useIn ? `in {years} years` : `${years} years from now`;
  if (years === 1) return useIn ? 'in a year' : 'a year from now';
  if (months > 1)
    return useIn ? `in ${months} months` : `${months} months from now`;
  if (months === 1) return useIn ? 'in a month' : '1 month from now';
  if (days > 1) return useIn ? `in ${days} days` : `${days} days from now`;
  if (days === 1) return 'tomorrow';
  if (hrs > 1) return useIn ? `in ${hrs} hours` : `${hrs} hours from now`;
  if (hrs === 1) return useIn ? 'in an hour' : 'one hour from now';
  if (mins > 1)
    return useIn ? `in ${mins} minutes` : `${mins} minutes from now`;
  if (mins === 1) return useIn ? 'in 1 minute' : '1 minute from now';
  if (secs > 1)
    return useIn ? `in ${secs} seconds` : `${secs} seconds from now`;

  return '1 second from now';
}
