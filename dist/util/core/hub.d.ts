export function useSubscription(topic: string, listener: Function, onReady?: Function): void;
export default mod;
declare namespace mod {
    export { pub };
    export { sub };
    export function toggleLogging(): boolean;
    export namespace topics {
        let AB_TEST_DATA: string;
        let ALERTS: string;
        let ANALYTICS_CREATE_CONSUMER: string;
        let ANALYTICS_EVENT: string;
        let ANALYTICS_REGISTER_CONSUMER: string;
        let CART: string;
        let CHAT_BUTTON_CLICK: string;
        let LEAD_MODAL: string;
        let LIVE_PERSON_MODAL: string;
        let MICRO_FOOTER: string;
        let MODAL: string;
        let MODAL_CLOSE: string;
        let MODAL_READY: string;
        let MODAL_NARWHAL: string;
        let NAV_TOGGLED: string;
        let NAV_UNPIN_AT: string;
        let NAV_SHOW_LEAD_LINK: string;
        let SESSION_DATA: string;
        let STORE_FINDER: string;
        let SUBNAV_TAB: string;
        let USER: string;
        let VIDEO_MODAL: string;
        let VIDEO_MODAL_PLAY: string;
        let VIDEO_MODAL_READY: string;
    }
}
/**
 * Publish an event on the topic with optional data.
 *
 * @param {string} topic - The topic to publish the event on.
 * @param {*} [data] - The optional data to pass the listeners.
 */
declare function pub(topic: string, data?: any): void;
/**
 * Subscribe a listener function to be notified of an event on a topic.
 * Returns an object with a 'remove' property as a function to remove
 * the registered listener.
 *
 * @param {string} topic - The topic to subscribe to.
 * @param {Function} listener - The listener function fired for each
 *                              event on the topic.
 * @return {Object} o - Listener removal handler.
 */
declare function sub(topic: string, listener: Function): any;
//# sourceMappingURL=hub.d.ts.map