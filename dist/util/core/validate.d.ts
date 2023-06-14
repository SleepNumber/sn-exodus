export namespace regex {
    let email: RegExp;
    let zip_partial: RegExp;
    let zip: RegExp;
    let zip_full: RegExp;
    let iso_state: RegExp;
    namespace geo {
        let lat: RegExp;
        let long: RegExp;
    }
    namespace cc {
        let visa: RegExp;
        let master: RegExp;
        let amex: RegExp;
        let diners: RegExp;
        let discover: RegExp;
        let jcb: RegExp;
        let sn: RegExp;
    }
}
export namespace validate {
    /**
     * Returns true if the string is less than or equal to the limit.
     * @param {string} input - the string to test.
     * @param {number} max - the length to check for.
     */
    export function max(input: string, max: number): boolean;
    /**
     * Returns true if the string is greater than or equal to the limit.
     * @param {string} input - the string to test.
     * @param {number} min - the length to check for.
     */
    export function min(input: string, min: number): boolean;
    /**
     * For string inputs, returns true if the string is between the min and max.
     * For number inputs, returns true if the number is between the min and max.
     * @param {string|number} input - the number or string to test.
     * @param {number} min - the minimum length.
     * @param {number} max - the maximum length.
     */
    export function between(input: string | number, min: number, max: number): boolean;
    /**
     * Returns true if the supplied latitude is valid, otherwise false.
     * i.e. >= -90 and <= 90, with 6 or less decimal digits
     */
    export function latitude(lat: any): boolean;
    /**
     * Returns true if the supplied longitude is valid, otherwise false.
     * i.e. >= -180 and <= 180, with 6 or less decimal digits
     */
    export function longitude(long: any): boolean;
    export function email(email: any): boolean;
    export function zip_partial(zip: any): boolean;
    export function zip(zip: any): boolean;
    export namespace cc_1 {
        export function visa_1(number: any): boolean;
        export { visa_1 as visa };
        export function master_1(number: any): boolean;
        export { master_1 as master };
        export function amex_1(number: any): boolean;
        export { amex_1 as amex };
        export function diners_1(number: any): boolean;
        export { diners_1 as diners };
        export function discover_1(number: any): boolean;
        export { discover_1 as discover };
        export function jcb_1(number: any): boolean;
        export { jcb_1 as jcb };
        export function sn_1(number: any): boolean;
        export { sn_1 as sn };
        export function all(number: any): boolean;
        export function type(number: any): any;
    }
    export { cc_1 as cc };
}
//# sourceMappingURL=validate.d.ts.map