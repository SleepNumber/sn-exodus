/**
 * An immutable class to represent a video/audio media source and type.
 * Prefer the static initializer `MediaSource.of` instead of the constructor.
 */
class MediaSource {
  #src;
  #type;

  /**
   * Create a new MediaSource instance
   * @param {string} src - The media source used in 'src' attributes.
   * @param {string} type - The media type for type hinting, i.e. "video/mp4;codecs=hvc1"
   */
  constructor(src, type) {
    this.#src = src;
    this.#type = type;
  }

  /**
   * Returns the `src` value.
   * @returns {string}
   */
  get src() {
    return this.#src;
  }

  /**
   * Returns the `type` value.
   * @returns {string}
   */
  get type() {
    return this.#type;
  }

  /**
   * Prints the string representation of the instance
   * @returns {string}
   */
  toString() {
    return `[MediaSource src: "${this.#src}", type: "${this.#type}"]`;
  }

  /**
   * Informs JSON.stringify how to print this class instance.
   * Without it, all you'd get is "{}"
   * @return {{ src: string, type: string }}
   */
  toJSON() {
    return {
      src: this.#src,
      type: this.#type,
    };
  }

  /**
   * Static initializer to create a MediaSource instance.
   * Prefer this over the constructor.
   * @param {string} src - The media source used in 'src' attributes.
   * @param {string} type - The media type for type hinting, i.e. "video/mp4;codecs=hvc1"
   * @returns {MediaSource}
   */
  static of(src, type) {
    return new MediaSource(src, type);
  }
}

export default MediaSource;
