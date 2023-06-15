/* eslint-disable jest/no-jasmine-globals */
import { waitFor } from '@testing-library/react';
import Deferred from './Deferred';

describe('util/Deferred.js', () => {
  it('resolves correctly', async () => {
    const d = new Deferred();
    const cb1 = vi.fn();
    const cb2 = vi.fn();
    const cb3 = vi.fn();

    d.done(cb1).done(cb1); // tests chaining
    d.promise().then(cb2);
    d.promise().then((...args) => cb3(...args));

    setTimeout(() => {
      d.resolve('foo');
    }, 5);

    await waitFor(() => d);
    expect(cb1).toHaveBeenCalledTimes(2);
    expect(cb1).toHaveBeenCalledWith('foo');
    expect(cb2).toHaveBeenCalledTimes(1);
    expect(cb2).toHaveBeenCalledWith('foo');
    expect(cb3).toHaveBeenCalledTimes(1);
    expect(cb3).toHaveBeenCalledWith('foo');
  });

  it('updates the `state` correctly when resolved', () => {
    const d = new Deferred();
    expect(d.state()).toBe('pending');
    d.resolve();
    expect(d.state()).toBe('resolved');
  });

  it('updates the `state` correctly when rejected', () =>
    new Promise(done => {
      // If onCatch is never called, this test will fail from a timeout.
      //
      // Rejecting a promise will automatically cause the test to fail, so we
      // need to use a special assertion method to reject without failing.
      const onCatch = vi.fn(() => done());
      function rejector() {
        const d = new Deferred();
        d.reject('foo');
        d.done(() => {
          fail('Success callback should not be called when rejecting');
          done();
        }).catch(onCatch);

        return { dfd: d, promise: d.promise() };
      }

      expect.assertions(2);
      const result = rejector();
      expect(result.dfd.state()).toBe('rejected');
      return expect(result.promise).rejects.toMatch('foo');
    }));

  it('resolve returns the Deferred instance', () => {
    const d = new Deferred();
    const r = d.resolve('foo');

    expect(d === r).toBe(true);
  });

  it('is Promise.all compatible', async () => {
    const callback = vi.fn();
    const d1 = new Deferred();
    const d2 = new Deferred();

    Promise.all([d1, d2]).then(callback);

    setTimeout(() => {
      d1.resolve('one');
      d2.resolve('two');
    }, 5);

    await waitFor(() => d1);
    await waitFor(() => d2);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(['one', 'two']);
  });

  it('is Promise.allSettled compatible', async () => {
    const callback = vi.fn();
    const d1 = new Deferred();
    const d2 = new Deferred();

    Promise.allSettled([d1, d2]).then(callback);

    setTimeout(() => {
      d1.resolve('one');
      d2.resolve('two');
    }, 5);

    await waitFor(() => d1);
    await waitFor(() => d2);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith([
      { status: 'fulfilled', value: 'one' },
      { status: 'fulfilled', value: 'two' },
    ]);
  });

  it('"done" still allows "catch"', () =>
    new Promise(done => {
      // "done" uses `then` internally with a noop failure callback to match jquery's api.
      // Make sure we can still use a `dfd.catch()` after using `dfd.done()`

      // If onCatch is never called, this test will fail from a timeout.
      // Allows us to verify failure callback is fired when rejecting a deferred.
      // We can't use `expect(onCatch).toHaveBeenCalled` since rejecting a promise
      // in a test without failing it requires special assertions.
      const onCatch = vi.fn(() => done());
      function rejector() {
        const d = new Deferred();

        setTimeout(() => d.reject('foo'), 5);

        d.done(() => {
          fail('Success callback should not be called when rejecting');
          done();
        }).catch(onCatch);

        return d.promise();
      }

      expect.assertions(1);
      return expect(rejector()).rejects.toMatch('foo');
    }));

  it('"done" still allows "fail"', () =>
    new Promise(done => {
      // "done" uses `then` internally with a noop failure callback to match jquery's api.
      // Make sure we can still use a `dfd.fail()` after using `dfd.done()`

      // If onFail is never called, this test will fail from a timeout.
      // Allows us to verify failure callback is fired when rejecting a deferred.
      // We can't use `expect(onFail).toHaveBeenCalled` since rejecting a promise
      // in a test without failing it requires special assertions.
      const onFail = vi.fn(() => done());
      function rejector() {
        const d = new Deferred();

        setTimeout(() => d.reject('foo'), 5);

        d.done(() => {
          fail('Success callback should not be called when rejecting');
          done();
        }).fail(onFail);

        return d.promise();
      }

      expect.assertions(1);
      return expect(rejector()).rejects.toMatch('foo');
    }));

  it('calls "always"', () =>
    new Promise(async done => {
      expect.assertions(2);
      const onAlways = vi.fn(() => done());
      function resolver() {
        const d = new Deferred();

        setTimeout(() => d.resolve('foo'), 5);

        d.fail(() => fail('`fail` should not be called')).always(onAlways);

        return d.promise();
      }

      const result = await resolver();
      expect(onAlways).toHaveBeenCalledTimes(1);
      return expect(result).toMatch('foo');
    }));
});
