import {
  prop,
  namespace,
  setProp,
  isPlainObject,
  extend,
  type,
} from './object';
import i8 from '~/__tests__/data/products/i8-360.json';

describe('util/object.prop', () => {
  const employee = {
    name: 'Bob Vila',
    nicknames: ['Bobby V', 'Bob the Builder', 'The Veebs'],
    address: {
      street1: '12345 67th St',
      state: {
        'iso-code': 'US-MN',
        'short-code': 'US-MN',
        'long-code': 'US-Minnesota',
      },
    },
  };
  const format = 'iso';

  test('Finds a shallow value', () => {
    expect(prop(employee, 'name')).toBe('Bob Vila');
  });

  test('Attempts to find a missing deep value without throwing and error', () => {
    expect(prop(employee, 'address.street2')).toBe(undefined);
  });

  test('Finds a value using bracket syntax with single quotes', () => {
    expect(prop(employee, "address.state['long-code']")).toBe('US-Minnesota');
  });

  test('Finds a value using bracket syntax with double quotes', () => {
    expect(prop(employee, 'address.state["short-code"]')).toBe('US-MN');
  });

  test('Finds a value using bracket syntax with back-ticks', () => {
    expect(prop(employee, 'address.state[`short-code`]')).toBe('US-MN');
  });

  test('Finds a value using bracket syntax with string interpolation', () => {
    expect(prop(employee, `address.state['${format}-code']`)).toBe('US-MN');
  });

  test('Finds a value using bracket syntax with an index', () => {
    expect(prop(employee, 'nicknames[1]')).toBe('Bob the Builder');
    expect(prop(employee, 'nicknames[1].length')).toBe(15);
    expect(prop(employee, 'nicknames[3].length')).toBe(undefined);
  });
});

describe('util/object.setProp', () => {
  test('Sets a property at a path that does not yet exist', () => {
    const bookshelf = {};
    const book = {
      name: 'Treasure Island',
      author: 'Robert Louis Stevenson',
    };
    setProp(bookshelf, 'fiction.favorite', book);
    expect(bookshelf.fiction.favorite).toBe(book);
  });
  test('Sets a property on a path that already exists', () => {
    const bookshelf = {
      fiction: {
        favorite: {
          name: 'Treasure Island',
          author: 'Robert Louis Stevenson',
        },
      },
    };
    const recent = {
      name: 'The Third Option',
      author: 'Vince Flynn',
    };
    setProp(bookshelf, 'fiction.recent', recent);

    expect(bookshelf.fiction.favorite.name).toBe('Treasure Island');
    expect(bookshelf.fiction.recent).toBe(recent);
  });
});

describe('util/object.namespace', () => {
  test('Creates a simple object path', () => {
    namespace('foo.bar.baz');
    expect(window.foo.bar.baz).toBeDefined();
  });

  test('Appends an object at the end of the path', () => {
    namespace('foo.bar.baz', { score: 42 });
    expect(window.foo.bar.baz.score).toBe(42);
  });

  test('Appends to an object path, without destroying it', () => {
    window.foo.author = 'Aaron';
    namespace('foo.bar.some.other.path');
    expect(window.foo.author).toBe('Aaron');
  });
});

describe('util/object.isPlainObject', () => {
  test('detects plain objects correctly', () => {
    class Foo {
      constructor(bar) {
        this.bar = bar;
      }
    }
    const foo = new Foo('bar');

    expect(isPlainObject(foo)).toBe(false);
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject(Object.create({}))).toBe(false);
    expect(isPlainObject(Object.create(null))).toBe(true);
  });
});

describe('util/object.extend', () => {
  test('shallow does not clone deep elements', () => {
    const source = { foo: { bar: 'baz' } };
    const clone = extend({}, source);
    expect(source.foo === clone.foo).toBe(true);
  });

  test('deep does clone deep elements', () => {
    const source = { foo: { bar: 'baz' } };
    const clone = extend(true, {}, source);
    expect(source.foo === clone.foo).toBe(false);
  });

  test('deep extend of complex object works', () => {
    const source = i8;

    const stringified_i8 = JSON.stringify(source);
    const clone = extend(true, {}, i8);
    expect(JSON.stringify(clone)).toEqual(stringified_i8);
  });
});

describe('util/object.type', () => {
  test('returns the correct type', () => {
    expect(type([])).toBe('array');
    expect(type({})).toBe('object');
    expect(type('')).toBe('string');
    expect(type(42)).toBe('number');
    expect(type(Symbol)).toBe('function');
    expect(type(Symbol(42))).toBe('symbol');
  });
});
