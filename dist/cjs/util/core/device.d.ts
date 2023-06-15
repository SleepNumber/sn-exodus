/**
 * Return true if the screen width is less than the tablet breakpoint start or
 * an optional, provided breakpoint.
 * @param {number} bp - an optional provided breakpoint to check
 * @return {boolean}
 */
export function isMobile(bp: number): boolean;
export function isTablet(): boolean;
export function isDesktop(): boolean;
export function isPreModule(): false | SymbolConstructor;
export function getBreakpoint(): Breakpoint;
export function getDeviceType(): "Mobile" | "Desktop";
export function isLandscape(): boolean;
export class Breakpoint extends Enumify {
    static mb: Breakpoint;
    static tb: Breakpoint;
    static dt: Breakpoint;
    static _: void;
    constructor({ name, start }: {
        name: any;
        start: any;
    });
    name: any;
    start: any;
}
export function isIos(useUserAgent: boolean): boolean;
export function isAndroid(): boolean;
export function isMobileDevice(): boolean;
export function isIE(): boolean;
export function isSafari(): boolean;
export function isFirefox(): boolean;
export namespace events {
    export let wheel: string;
    export { supportsPassive as passive };
}
import Enumify from './enumify';
declare let supportsPassive: boolean;
export {};
//# sourceMappingURL=device.d.ts.map