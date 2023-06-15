export default logger;
export type ConsoleType = {
    log: (...args: any[]) => void;
    info: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    error: (...args: any[]) => void;
    debug?: (...args: any[]) => void;
    assert?: (condition: any, ...args: any[]) => void;
    clear?: (() => void) | undefined;
    count?: (label?: string) => void;
    countReset?: (label?: string) => void;
    table?: (tabularData: any, properties?: string[]) => void;
    group?: (...label: any[]) => void;
    groupCollapsed?: (...label: any[]) => void;
    groupEnd?: (() => void) | undefined;
    time?: (label?: string) => void;
    timeEnd?: (label?: string) => void;
    trace?: (...args: any[]) => void;
    dir?: (obj: any, options?: any) => void;
    dirxml?: (...args: any[]) => void;
};
/**
 * @typedef {Object} ConsoleType
 * @property {(...args: any[]) => void} log
 * @property {(...args: any[]) => void} info
 * @property {(...args: any[]) => void} warn
 * @property {(...args: any[]) => void} error
 * @property {(...args: any[]) => void=} debug
 * @property {(condition: any, ...args: any[]) => void=} assert
 * @property {() => void=} clear
 * @property {(label?: string) => void=} count
 * @property {(label?: string) => void=} countReset
 * @property {(tabularData: any, properties?: string[]) => void=} table
 * @property {(...label: any[]) => void=} group
 * @property {(...label: any[]) => void=} groupCollapsed
 * @property {() => void=} groupEnd
 * @property {(label?: string) => void=} time
 * @property {(label?: string) => void=} timeEnd
 * @property {(...args: any[]) => void=} trace
 * @property {(obj: any, options?: any) => void=} dir
 * @property {(...args: any[]) => void=} dirxml
 */
/** @type {ConsoleType} */
declare const logger: ConsoleType;
//# sourceMappingURL=logger.d.ts.map