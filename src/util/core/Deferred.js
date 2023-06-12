/**
 * Deferred api for promises.
 * Replaces $.Deferred()
 */
import { namespace } from './object';

class Deferred {
  // # denotes private fields
  // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
  #state;

  constructor() {
    this.#state = 'pending';
    this.p = new Promise((resolve, reject) => {
      this.resolver = resolve;
      this.rejector = reject;
    });
  }

  state() {
    return this.#state;
  }

  resolve(...args) {
    this.resolver(...args);
    this.#state = 'resolved';
    return this;
  }
  reject(...args) {
    this.rejector(...args);
    this.#state = 'rejected';
    return this;
  }

  promise() {
    return this.p;
  }

  done(cb) {
    this.p.then(cb, () => {});
    return this;
  }
  then(...args) {
    this.p.then(...args);
    return this;
  }

  fail(...args) {
    this.p.catch(...args);
    return this;
  }
  catch(...args) {
    this.p.catch(...args);
    return this;
  }

  always(...args) {
    this.p.finally(...args);
    return this;
  }
  finally(...args) {
    this.p.finally(...args);
    return this;
  }
}

namespace('sn.dfd', Deferred);
export default Deferred;
