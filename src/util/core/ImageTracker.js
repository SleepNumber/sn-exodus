import logger from './logger';
import { findAncestor, isElement, isDisplayNone } from './element';
import { getBgImages } from './assets';
import { timer } from './constants';
import Deferred from './Deferred';

const t = {
  invalid_elem: 'ImageTracker was not created with a valid element',
  length: 'ImageTracker.track',
  too_long: 'ImageTracker: Image took too long to load',
};

/**
 * Map an image element to a promise that resolves when the image has finished
 * loading and decoding.
 * @see https://html.spec.whatwg.org/multipage/embedded-content.html#dom-image-dev
 * @param {HTMLImageElement} image
 * @return <Promise>
 *
 * @todo Figure out why `decode` didn't work:
 * <code>
 * return new Promise((res, rej) => {
 *   image.onload = () => image.decode().then(res).catch(rej);
 * });
 * </code>
 */
function completable(image) {
  const start = timer.now();
  const dfd = new Deferred();

  function check() {
    if (image.complete) {
      dfd.resolve();
    } else {
      const now = timer.now();
      if (now - start > 300) {
        dfd.reject(new Error(t.too_long, image));
      } else {
        setTimeout(check, 50);
      }
    }
  }
  check();

  return dfd;
}

/**
 * Track when images inside an element have finished loading.
 * Calling 'track()' will query the element for all `<img>` tags and
 * return a promise when all have finished loading.
 *
 * Relies on `HTMLImageElement.complete`
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/complete
 */
class ImageTracker {
  #element;

  /**
   * @param {HTMLElement} element - element to track for image loading
   */
  constructor(element) {
    this.#element = element;
  }

  /**
   * Returns the parent element to track
   * @return {HTMLElement}
   */
  get element() {
    return this.#element;
  }

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
  track(delay = 0) {
    if (!isElement(this.#element)) {
      return Promise.reject(new Error(t.invalid_elem, this.#element));
    }
    return new Promise(resolve => {
      // When mounting suspended components, React needs about 100ms
      // after they are 'mounted' to actually flush updates to the DOM.
      // That's why `track` has the option to delay the check for images.
      setTimeout(() => {
        const images = [...this.#element.querySelectorAll('img')];
        const bgs = getBgImages(this.#element)
          .filter(({ node }) => findAncestor(node, isDisplayNone) === null)
          .map(({ bg }) => bg.match(/url\("(.*)"\)/)[1])
          .map(url => {
            const img = new Image();
            img.src = url;
            return img;
          });

        logger.sndebug(t.length, this.#element, images.length);
        Promise.allSettled([...images, ...bgs].map(completable)).then(resolve);
      }, delay);
    });
  }
}

export default ImageTracker;
