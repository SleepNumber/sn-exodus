export default ImageTracker;
/**
 * Track when images inside an element have finished loading.
 * Calling 'track()' will query the element for all `<img>` tags and
 * return a promise when all have finished loading.
 *
 * Relies on `HTMLImageElement.complete`
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/complete
 */
declare class ImageTracker {
    /**
     * @param {HTMLElement} element - element to track for image loading
     */
    constructor(element: HTMLElement);
    /**
     * Returns the parent element to track
     * @return {HTMLElement}
     */
    get element(): HTMLElement;
    /**
     * Return a promise that resolves when all images inside the element
     * are `completed`.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/complete
     * @param {number} [delay = 0] -
     *      When mounting suspended components, React needs about 100ms after
     *      they are 'mounted' to actually flush updates to the DOM,
     *      therefore we allow a delay to check for images.
     * @return {Promise<never>|Promise>}
     */
    track(delay?: number): Promise<never> | Promise<any>;
    #private;
}
//# sourceMappingURL=ImageTracker.d.ts.map