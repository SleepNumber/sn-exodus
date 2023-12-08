export function isDebug(): boolean;
/** Returns the browser locale. Defaults to `en-US`. */
export function locale(): string;
export const localUrl: "https://sleepnumber.test";
export const qaUrl: "https://qa.sleepnumber.com";
export const stageUrl: "https://staging.sleepnumber.com";
export const prodUrl: "https://www.sleepnumber.com";
export const isJestEnv: boolean;
export const win: typeof globalThis;
export const sn_globals: any;
export function isProduction(): boolean;
export function isStaging(): boolean;
export function isQa(): boolean;
export function isDevelopment(): boolean;
export const isDevPage: boolean;
export const isAdminPage: boolean;
export const isTestEnv: boolean;
export const timezone: string;
export namespace attributes {
    namespace session {
        namespace mlp {
            let compare: string;
        }
        let geo_prompted: string;
    }
    namespace local {
        namespace modals {
            let insider_appreciation_shown: string;
            let insider_signin_shown: string;
            let lead_capture_link: string;
            let lead_compare_shown: string;
            let lead_compare_submitted: string;
            let lead_modal_email_submitted: string;
            let lead_modal_help_shown: string;
            let lead_modal_help_submitted: string;
            let lead_modal_shown: string;
            let lead_modal_submitted: string;
            let lead_quiz_shown: string;
            let lead_quiz_submitted: string;
        }
        namespace toasts {
            let blog_toast_shown: string;
            let bq_toast_shown: string;
        }
        namespace misc {
            let hd_pending_cancel: string;
            let last_tracked_order_id: string;
        }
        namespace bq {
            let skus: string;
            let results: string;
        }
        namespace ic {
            let points: string;
        }
    }
    namespace headers {
        let flash: string;
    }
}
export namespace css {
    let fwb: string;
    let fwn: string;
    let black: string;
    let gray: string;
    let white: string;
    let blue: string;
    let green: string;
    let red: string;
    let orange: string;
}
export namespace styles {
    export let normal: string;
    export let strong: string;
    export let label: string;
    export let value: string;
    export let success: string;
    export let error: string;
    let orange_1: string;
    export { orange_1 as orange };
}
export const months: {
    name: string;
    abbr: string;
    value: number;
}[];
export namespace specials {
    namespace asterisk {
        let label_1: string;
        export { label_1 as label };
        let value_1: string;
        export { value_1 as value };
        export let entity: string;
        export let unicode: string;
    }
    namespace reg {
        let label_2: string;
        export { label_2 as label };
        let value_2: string;
        export { value_2 as value };
        let entity_1: string;
        export { entity_1 as entity };
        let unicode_1: string;
        export { unicode_1 as unicode };
    }
    namespace tm {
        let label_3: string;
        export { label_3 as label };
        let value_3: string;
        export { value_3 as value };
        let entity_2: string;
        export { entity_2 as entity };
        let unicode_2: string;
        export { unicode_2 as unicode };
    }
    namespace sm {
        let label_4: string;
        export { label_4 as label };
        let value_4: string;
        export { value_4 as value };
        let entity_3: string;
        export { entity_3 as entity };
        let unicode_3: string;
        export { unicode_3 as unicode };
    }
    namespace dagger {
        let label_5: string;
        export { label_5 as label };
        let value_5: string;
        export { value_5 as value };
        let entity_4: string;
        export { entity_4 as entity };
        let unicode_4: string;
        export { unicode_4 as unicode };
    }
    namespace doubledagger {
        let label_6: string;
        export { label_6 as label };
        let value_6: string;
        export { value_6 as value };
        let entity_5: string;
        export { entity_5 as entity };
        let unicode_5: string;
        export { unicode_5 as unicode };
    }
    namespace section {
        let label_7: string;
        export { label_7 as label };
        let value_7: string;
        export { value_7 as value };
        let entity_6: string;
        export { entity_6 as entity };
        let unicode_6: string;
        export { unicode_6 as unicode };
    }
}
export namespace keyCodes {
    namespace radio {
        let prev: number[];
        let next: number[];
    }
    let arrows: number[];
}
export namespace spacing {
    let space: string;
    let nbsp: string;
    let ndash: string;
    let mdash: string;
    let ellipsis: string;
}
export namespace timing {
    let scroll: number;
    let expand: number;
    let transition: number;
    let animation: string;
}
export namespace mime {
    namespace app {
        let json: string;
        let form: string;
    }
}
export namespace headers {
    let accept: string;
    let content: string;
}
export const millisPerYear: 31536000000;
export namespace ALERT_TYPES {
    export let primary: string;
    export let secondary: string;
    let success_1: string;
    export { success_1 as success };
    export let danger: string;
    export let warning: string;
    export let info: string;
    export let dark: string;
    export let light: string;
}
export namespace ALERT_FLAVORS {
    let normal_1: string;
    export { normal_1 as normal };
    export let toast: string;
}
/**
 * General purpose status enum.
 * @enum
 */
export class Status extends Enumify {
    static idle: any;
    static pending: any;
    static success: any;
    static error: any;
    static active: any;
    static complete: any;
    static _: void;
}
/**
 * General purpose direction enum.
 * @enum
 */
export class Direction extends Enumify {
    static up: any;
    static down: any;
    static left: any;
    static right: any;
    static _: void;
}
/**
 * Listing of user segments.
 */
export type USER_SEGMENT = any;
export namespace USER_SEGMENT {
    let innercircle: string;
    let insider: string;
}
export class CheckoutSteps extends Enumify {
    static NotStarted: CheckoutSteps;
    static Login: CheckoutSteps;
    static Shipping: CheckoutSteps;
    static Delivery: CheckoutSteps;
    static Payment: CheckoutSteps;
    static Review: CheckoutSteps;
    static Confirmation: CheckoutSteps;
    static _: void;
    constructor(props: any);
    next: any;
    name: any;
}
/** Global z-index values */
export class ZIndex extends Enumify {
    static dropdown: ZIndex;
    static sticky: ZIndex;
    static fixed: ZIndex;
    static modal_backdrop: ZIndex;
    static modal: ZIndex;
    static popover: ZIndex;
    static tooltip: ZIndex;
    static chat_button: ZIndex;
    static over_chat: ZIndex;
    constructor(index: any);
    value: any;
}
export namespace page_classes {
    let sticky_top: string[];
}
export namespace page_selectors {
    let sticky_top_1: string;
    export { sticky_top_1 as sticky_top };
    export let search_open: string;
    export let header_unpin: string;
    export let jumping: string;
}
/** Use performance API if it's available for better precision. */
export const timer: DateConstructor | Performance;
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
import Enumify from './enumify';
//# sourceMappingURL=constants.d.ts.map