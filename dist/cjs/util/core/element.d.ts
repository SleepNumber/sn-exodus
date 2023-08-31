/** Returns true if this is a dom element */
export function isElement(node: any): boolean;
/**
 * Returns target if it is an element or attempts to find it via query selector
 * @param {HTMLElement|string} target -
 *        the target element or a css selector to an element
 * @param {HTMLElement|string} [container] -
 *        an optional container to look inside when using a css selector as the
 *        target
 * @return {HTMLElement|null}
 */
export function getElement(target: HTMLElement | string, container?: HTMLElement | string): HTMLElement | null;
/**
 * Get element by id
 * @param {string} id - the id of the element to find
 * @returns {HTMLElement|undefined}
 */
export function gebi(id: string): HTMLElement | undefined;
/**
 * Returns selected elements as an array
 * If two arguments, the first one is assumed to be the node to query.
 * @return {HTMLElement[]}
 */
export function qsa(...args: any[]): HTMLElement[];
/**
 * Find and element by query selector
 * If two arguments, the first one is assumed to be the node to query.
 * @return {HTMLElement|undefined}
 */
export function qs(...args: any[]): HTMLElement | undefined;
/**
 * Find the closest ancestor matching the selector
 * Replaces $(selector).closest
 * @return {HTMLElement|undefined}
 */
export function closest(target: any, selector: any): HTMLElement | undefined;
/**
 * Like `snq.closest()` except a function is used instead of selectors.
 * Finds the closest ancestor that passes the predicate function.
 * @param {string|HTMLElement} target - the starting point node
 * @param {function} predicate - the predicate function
 * @return {HTMLElement|null}
 */
export function findAncestor(target: string | HTMLElement, predicate: Function): HTMLElement | null;
/** Add a class to an element */
export function addClass(target: any, className?: string): HTMLElement;
/** Remove a class from an element */
export function removeClass(target: any, className?: string): HTMLElement;
/** Add an element after a target */
export function after(target: any, element: any): void;
/** Add an element before a target */
export function before(target: any, element: any): void;
/** Append an element to a parent */
export function append(target: any, element: any): void;
/** Prepend an element to a parent */
export function prepend(target: any, element: any): void;
/** Is the target a child of the parent */
export function contains(parent: any, child: any): boolean;
/** Remove an element */
export function remove(target: any): void;
/**
 * Get or set a css property on an element
 * @param {string|node} target - the target element or css selector to it
 * @param {string} ruleName - the js version (camelCase) of the css property name
 * @param {string} [value] - if provide, the css property is set to this value
 * @return {string|node} the node when setting a value, the value when getting a value
 */
export function css(target: string | node, ruleName: string, value?: string): string | node;
/**
 * Get or set the text content of an element
 * @param {string|node} target - the target element or css selector to it
 * @param {string} [value] - if provide, the text context is set to this value
 * @return {string|node} the node when the text content is being set, otherwise the text content
 */
export function text(target: string | node, value?: string): string | node;
/**
 * Get or set the inner html of an element
 * Replaces $('.foo').html
 * @param {string|node} target - the target element or css selector to it
 * @param {string} [value] - if provide, the inner html is set to this value
 * @return {string|node} the node when the inner html is being set, otherwise the text content
 */
export function html(target: string | node, value?: string): string | node;
/**
 * Create an html document fragment from html text.
 * Replaces $('<div class="foo">bar</div>');
 * @param {string} html - the html text, i.e. "<div>foo</div>" or "<button>"
 * @return {DocumentFragment|Element} the element if only one was created or the fragment
 */
export function create(html: string): DocumentFragment | Element;
/** Return the text content of an element */
export function hasClass(target: any, className: any): boolean;
/**
 * Adds or removes a class from an element
 * @param {string|node} target
 * @param {string} className
 * @param {boolean} [condition] - if present class is added/removed based on this
 */
export function toggleClass(target: string | node, className?: string, condition?: boolean): HTMLElement;
/** Return the index of an element within it's parents child list */
export function index(target: any): number;
/** Returns true if the target matches the selector */
export function is(target: any, selector: any): any;
/** Returns the element immediately after this one */
export function next(target: any): Element;
/** Returns all elements after this one */
export function nextAll(elem: any, filter: any): any[];
/** Returns the element immediately before this one */
export function prev(target: any): Element;
/** Returns all elements before this one */
export function prevAll(elem: any, filter: any): any[];
/** Returns the sibling elements of an element */
export function siblings(target: any): Element[];
/**
 * Returns the top and left offsets of this element relative to the document
 * Replaces $.offset()
 * @param {HTMLElement|string} target
 */
export function offset(target: HTMLElement | string): {
    node: HTMLElement;
    top: number;
    left: number;
};
/** Replaces $(window).scrollTop() */
export function scrollTop(target?: typeof globalThis): number;
/** Replaces $(window).scrollLeft() */
export function scrollLeft(target?: Window & typeof globalThis): number;
/**
 * Returns the outer height of the element
 * @param {string|node} target - the element to measure or css selector to it
 * @param {boolean} [includeMargin=false] - if true, measurement will include margin
 * @return {number}
 */
export function outerHeight(target: string | node, includeMargin?: boolean): number;
/**
 * Returns the outer width of the element
 * @param {string|node} target - the element to measure
 * @param {boolean} [includeMargin=false] - if true, measurement will include margin
 * @return {number}
 */
export function outerWidth(target: string | node, includeMargin?: boolean): number;
/** Return the offset position of this element */
export function position(target: any): {
    top: number;
    left: number;
};
/**
 * Get or set the height of an element
 * @param {string|node} target - the target element or css selector to it
 * @param {function|string|number} [value] - function, string, or number to set the height to
 * @returns {number|node} the height when not setting a value, the element when setting a value
 */
export function height(target: string | node, value?: Function | string | number): number | node;
/**
 * Get or set the width of an element
 * @param {string|node} target - the element to adjust
 * @param {function|string|number} [value] - function, string, or number to set the width to
 * @returns {number|node} the width when not setting a value, the element when setting a value
 */
export function width(target: string | node, value?: Function | string | number): number | node;
/**
 * Returns the node plus the left, right, width, and height measurements of an element
 * @param {string|node} target - the element to measure
 * @return {{
 *   node: node,
 *   left: number,
 *   width: number,
 *   right: number,
 *   height: number
 * }}
 */
export function getMeasurement(target: string | HTMLElement): {
    node: HTMLElement;
    left: number;
    width: number;
    right: number;
    height: number;
};
/**
 * Returns the measurements of all children in a container.
 * @param {string|node} target - the element whose children we are measuring
 * @return {[{
 *   index: number,
 *   node: node,
 *   left: number,
 *   width: number,
 *   right: number,
 *   height: number
 * }]}
 */
export function getChildMeasurements(target: string | node): [
    {
        index: number;
        node: node;
        left: number;
        width: number;
        right: number;
        height: number;
    }
];
/**
 * Return the measurements of a hidden element as a promise by cloning it and
 * measuring it in an offscreen container.
 * @param {HTMLElement} node - the currently hidden node to clone
 * @param {string} [selector] - optional selector to the child node to measure
 * @param {boolean} queryAll - return all query selector measurements
 * @return Promise<{ height: string, width: string, outerHeight: string, outerWidth: string }>
 */
export function getHiddenMeasurements(node: HTMLElement, selector?: string, queryAll?: boolean): Promise<any>;
/**
 * Returns true if the element is in the viewport.
 * @param {node} elem - the element in question
 * @param {number} [offset=5] - optional offset, i.e. use to determine half in viewport
 *                              Defaults to 5.
 *                              With an offset of 0, you can't actually get to
 *                              the 'bottom' to trigger an in-view scenario.
 *                              i.e. if bottom is 940, you end up at 940.1
 * @return {boolean}
 */
export function isElementInViewport(elem: node, offset?: number): boolean;
/** Return `true` if the element is above the current top of the viewport */
export function isElementAboveViewport(elem: any): boolean;
/** Find and element, retrying multiple times. */
export function findWithRetry({ target, retries, retryDelayMs }: {
    target: any;
    retries?: number;
    retryDelayMs?: number;
}, dfd: any): any;
export function addTabindexToContent(): void;
/**
 * Attempt to focus a section of the page, either the target itself or the
 * first visible header inside the section.
 * @param {string|HTMLElement} target - the section to focus
 */
export function focusSection(target: string | HTMLElement): void;
/**
 * Find the first focusable element within the selector, and give it focus
 * @param {node|string} selector
 */
export function focusFirstElement(target?: string): void;
/** Return true if this element is visible, by checking offset parents up the tree */
export function isNotHidden(target: any): boolean;
/**
 * @typedef SnListener
 * @property {function} cb - the event handler callback function
 * @property {string} filter - css selector for event target filters i.e. 'input, .btn'
 * @property {*} opts - any options passed to `addEventHandler`
 * @property {boolean} log - should this particular event be logged
 */
/**
 * Add a set of event listeners to a dom element.
 * A listener can be a function or an array of [function, options object].
 * @param {node|string} target - the dom element or css selector to add listeners to
 * @param {Object.<string, function|SnListener>} listeners - events keyed to listener functions
 * @param {boolean} log - if true, events are logged to the console
 *
 * Examples:
 * // Single with logging
 * const remove = snq.addListeners('#foo', { click: myClickHandler }, true);
 * remove();
 *
 * // Multiple with logging
 * const remove = snq.addListeners(elem, {
 *   click: myClickHandler,
 *   touch: myTouchHandler,
 * }, true);
 * remove();
 *
 * // With specific event listener options and per event logging
 * const remove = snq.addListeners(window, {
 *   click: {
 *     cb: myClickHandler,
 *     log: true,
 *     opts: { passive: false, once: true }
 *   }
 * });
 * remove();
 *
 * // With filtering, only listen for clicks on inputs or .btn elements
 * const remove = snq.addListeners(document, {
 *   click: {
 *     cb: myClickHandler,
 *     filter: 'input, .btn'
 *   }
 * });
 * remove();
 */
export function addListeners(target: node | string, listeners: {
    [x: string]: Function | SnListener;
}, log?: boolean): () => void;
/**
 * Remove a set of event listeners to a dom element
 * @param {Node} el - the dom element to remove listeners from
 * @param {Object.<string, function>} listeners - events keyed to listener functions
 */
export function removeListeners(el: Node, listeners: {
    [x: string]: Function;
}): void;
/** Replaces $(document).ready(eventHandler); and the shorthand $(eventHandler); */
export function ready(callback: any): void;
/**
 * Trigger an event on a target
 * @param {string|node} target - target of event
 * @param {string} type - the event type
 * @param {*} [data] - optional data to pass along with the event
 */
export function trigger({ target, type, data, custom }: string | node): void;
/** Replaces $el.animate({ 'height', '40px' }, 300ms); */
export function animate(target: any, params: any, ms: any): void;
/** Replaces $el.hide() */
export function hide(target: any): void;
/** Replaces $el.show() */
export function show(target: any): void;
/** Return true if this element is current display:none */
export function isDisplayNone(elem: any): boolean;
/** Replaces $el.toggle() */
export function toggle(target: any): void;
/** Replaces $el.fadeOut(3000) */
export function fadeOut(target: any, ms: any): void;
/** Replaces $el.fadeIn(3000) */
export function fadeIn(target: any, ms: any): void;
/**
 * Reading a dimension prop will cause the browser to recalculate,
 * which will let our animations work.
 * @param {HTMLElement} element
 */
export function triggerBrowserReflow(element: HTMLElement): void;
/**
 * Add a listener callback to the transition end event for a node
 * @param {HTMLElement} element
 * @param {function} handler
 */
export function transitionEndListener(element: HTMLElement, handler: Function): void;
export type SnListener = {
    /**
     * - the event handler callback function
     */
    cb: Function;
    /**
     * - css selector for event target filters i.e. 'input, .btn'
     */
    filter: string;
    /**
     * - any options passed to `addEventHandler`
     */
    opts: any;
    /**
     * - should this particular event be logged
     */
    log: boolean;
};
//# sourceMappingURL=element.d.ts.map