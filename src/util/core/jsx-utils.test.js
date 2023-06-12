import { text } from './jsx-utils';

function getKeySet(fragments) {
  return fragments.reduce((acc, frag) => {
    acc.add(frag.key);
    return acc;
  }, new Set());
}

describe('util/jsx-utils.js#text', () => {
  it('supSpecial works with no special characters', () => {
    const input = 'foo bar';
    const result = text.supSpecial(input);
    expect(getKeySet(result).size).toEqual(result.length);
    expect(result).toHaveLength(1);
  });

  it('supSpecial works with one special character', () => {
    const input = '§foo bar';
    const result = text.supSpecial(input);
    expect(result).toHaveLength(2);
    expect(getKeySet(result).size).toEqual(result.length);
  });

  it('supSpecial works with special character in the middle', () => {
    const input = 'No sleeping† in Missouri℠';
    const result = text.supSpecial(input);
    expect(result).toHaveLength(4);
    expect(getKeySet(result).size).toEqual(result.length);
  });

  it('supSpecial works with special character on each end', () => {
    const input = '†No sleeping in Missouri℠';
    const result = text.supSpecial(input);
    expect(result).toHaveLength(3);
    expect(getKeySet(result).size).toEqual(result.length);
  });
});
