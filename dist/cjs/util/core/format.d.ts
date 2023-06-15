/**
 * Returns a human readable format of the difference between an date/timestamp
 * and now.
 * @param {Date|String} dateMillis - the unix timestamp or date instance.
 * @param {boolean} useIn - when true, future times use 'in' instead of 'from now'.
 * @return {string} the formatted difference, i.e. `one month from now` or `two days ago`
 */
export function fromNow(dateMillis: Date | string, useIn?: boolean): string;
export namespace formats {
    namespace date {
        function DAY_MONTH_LONG(date: any): any;
        function MONTH_ABR_DAY_YEAR(date: any): any;
        function MONTH_LONG_DAY_YEAR(date: any): any;
        function SIMPLE(date: any): any;
        function SIMPLE_2_DIGIT(date: any): any;
        function UTC_SIMPLE_2_DIGIT(date: any): any;
        function MONTH_DAY_YEAR(date: any): any;
        function UTC_MONTH_DAY_YEAR(date: any): any;
        function ISO(date: any): string;
        function COMPACT(date: any): string;
    }
    namespace time {
        export function SIMPLE_1(time: any): any;
        export { SIMPLE_1 as SIMPLE };
        export function HOUR_AND_MINUTE(time: any): any;
        export function HOUR_ONLY(time: any): any;
        export function ARMY(time: any): any;
        export function PRECISE(time: any): string;
        export function PRECISE_NO_MILLISECONDS(time: any): string;
    }
    namespace datetime {
        export function LOCAL(datetime: any): any;
        export function SIMPLE_2(datetime: any): any;
        export { SIMPLE_2 as SIMPLE };
    }
}
export namespace format {
    /**
     ** Format a Date object into a date, with the browser's timezone and a configurable format
     * @param {Date|String|Number} [date=now] - Unix timestamp to format as a readable date-time
     * @param {Function} [formatter='MMM D, YYYY'] - The format to use.
     */
    function date(date?: string | number | Date, formatter?: Function): any;
    /**
     * Convert 24h time string to 12h time string with meridiems(PM/AM).
     * @param {String} time - ie.: "19:00"
     * @returns {String} - ie.: "7 PM"
     */
    function formatTimeString(time: string, trim?: boolean): string;
    /**
     * Return a formatted percent string to the decimal places specified.
     * USAGE:
     * sn.format.percent(13, 205, 3) // "6.341%"
     * sn.format.percent(5, 10, 3) // "50%"
     * @param {Number} count - The current count of items.
     * @param {Number} total - The total number of items.
     * @param {Number} decimals - The number of decimal places.
     */
    function percent(count: number, total: number, decimals?: number): string;
    /**
     * Return a formatted currency string for the supplied number.
     * USAGE:
     * sn.format.currency(123456789.12345) // "$123,456,789.12"
     * @param {string|number} num - the currency amount.
     * @param {boolean} trim - if `true`, '.00' is omitted, default to `false`.
     */
    function currency(num: string | number, trim?: boolean): string;
    /**
     * Reduce a numerator and denominator to it's smallest,
     * integer ratio using Euclid's Algorithm. Example:
     * <code>
     *   ratio(1920, 1080) -> "16:9"
     * </code>
     */
    function ratio(numerator: any, denominator: any): string;
    function time(sec: any): string;
}
//# sourceMappingURL=format.d.ts.map