export default CookieJar;
declare namespace CookieJar {
    /**
     * Retrieve value from JSON object store in the cookie or the default value.
     * If `e` is undefined, the entire cookie object is returned.
     * @param {Entry} [e] - the cookie entry.
     */
    export function get(e?: Entry): any;
    /**
     * Retrieve value from JSON object store in the cookies of the request,
     * or the default value.
     *
     * If `e` is undefined, the entire cookie object is returned.
     *
     * @param {Request} req - needed on the server-side
     * @param {Entry} [e] - optional the cookie entry.
     */
    export function getFromRequest(req: Request, e?: Entry): any;
    /**
     * Retrieve value from data retrieved form JSON object store in the cookies of the request,
     * or the default value.
     *
     * If `e` is undefined, the entire cookie object is returned.
     *
     * @param {Request} data - the data stored in the `sn` cookie
     * @param {Entry} [e] - optional the cookie entry.
     */
    export function getFromData(data: Request, e?: Entry): any;
    /**
     * Sets a property on the JSON object stored in the 'sn' cookie.
     * @param {Entry} [entry] - the cookie entry.
     * @param {*} value - Value to store.
     */
    export function set(entry?: Entry, value: any): void;
    export function getName(): any;
    export { Cookies as lib };
    export { Entry };
}
declare class Entry extends Enumify {
    static admin_hide: Entry;
    static alerts_queued: Entry;
    static answer_helpful: Entry;
    static answer_reported: Entry;
    static dy_editor: Entry;
    static hub_log_enabled: Entry;
    static insider: Entry;
    static minicart_last_shown: Entry;
    static pa_priv_shown: Cookie;
    static page_loads: Entry;
    static preferred_store: Entry;
    static retargeter_log_enabled: Entry;
    static review_helpful: Entry;
    static review_reported: Entry;
    static trackjs_disable: Entry;
    static segments: Entry;
    static selection_size: Entry;
    static selection_color: Entry;
    static sheerid_disable: Entry;
    static user_email: Entry;
    static user_zip: Entry;
    static user_telephone: Entry;
    static _: void;
    constructor(group: any, id: any, defaultValue: any);
    group: any;
    id: any;
    default: any;
}
import Enumify from './enumify';
import Cookie from './Cookie';
//# sourceMappingURL=cookiejar.d.ts.map