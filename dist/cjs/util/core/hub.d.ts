export function useSubscription(topic: string, listener: Function, onReady?: Function): void;
export default mod;
declare namespace mod {
    let topicDfds: {};
    /**
     * Return a promise resolved when the first subscription to a topic has happened.
     * @param {valueof mod.topics} topic
     * @return {Promise<function>}
     */
    function onTopicListener(topic: any): Promise<Function>;
    function sub(topic: any, listener: any): any;
}
//# sourceMappingURL=hub.d.ts.map