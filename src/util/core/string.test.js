import {
  firstWord,
  pluralIf,
  removeSpecialCharacters,
  truncate,
  camelCase,
} from './string';

describe('sn.string.camelCase', () => {
  it('should camel case a snake case string', () => {
    expect(camelCase('dual_panel_hero')).toEqual('dualPanelHero');
  });
  it('should camel case a sentence', () => {
    expect(camelCase('dual panel hero')).toEqual('dualPanelHero');
  });
});

describe('sn.string.pluralIf', () => {
  it('should make a word plural using "s" by default', () => {
    expect(`dad${pluralIf(true)}`).toEqual('dads');
  });

  it('should not make plural if no condition is set', () => {
    expect(`dad${pluralIf()}`).toEqual('dad');
  });

  it('should not affect words if false', () => {
    expect(`dad${pluralIf(false)}`).toEqual('dad');
  });

  it('should allow various plural inputs', () => {
    expect(`dad${pluralIf(true, 'dies')}`).toEqual('daddies');
    expect(`hero${pluralIf(true, 'es')}`).toEqual('heroes');
  });

  it('should allow singular inputs', () => {
    expect(`I love my ${pluralIf(false, 'kitties', 'cat')}`).toEqual(
      'I love my cat'
    );
    expect(`I love my ${pluralIf(true, 'kitties', 'cat')}`).toEqual(
      'I love my kitties'
    );
  });
});

describe('sn.string.firstWord', () => {
  it('should return the first word of a string', () => {
    expect(firstWord('FlexTop California King')).toEqual('FlexTop');
  });
});

describe('sn.string.truncate', () => {
  it('should return the first 5 characters', () => {
    expect(truncate('Mississippi', 5)).toEqual('Missi...');
  });

  it('should return all characters', () => {
    expect(truncate('Hello, World', 12)).toEqual('Hello, World');
  });
});

describe('sn.string.removeSpecialCharacters', () => {
  it('should remove a special character', () => {
    expect(removeSpecialCharacters('Climate 360™')).toEqual('Climate 360');
  });
  it('should remove multiple special characters', () => {
    expect(removeSpecialCharacters('Climate℠ 360™')).toEqual('Climate 360');
  });
});
