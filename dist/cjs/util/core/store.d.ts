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
export function createStore(blueprint: {
    name: string;
    context: object;
    handle: Function;
    getDefaultState: Function;
}): Store;
/**
 * Creates a store state provider component and a dispatch function that will
 * trigger your render for you. No need to subscribe to your store.
 * @param blueprint - the store blueprint
 * @returns {[Provider, Store]} an array containing the provider component and the store
 */
export function createProvider(blueprint: any): [({ children, ...rest }: {
    [x: string]: any;
    children: any;
}) => JSX.Element, Store];
export function providerError(name: any): Error;
export type Store = {
    name: string;
    topic: string;
    context: React.Context;
    dispatch: Function;
    /**
     * *=): onChange)} change
     */
    "": ((arg0: string) => any);
    subscribe: ((arg0: Function) => any);
    selectState: Function;
};
//# sourceMappingURL=store.d.ts.map