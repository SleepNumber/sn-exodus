import './polyfill';
import { combineReducers } from './function';

const addAmount = (state, action) => {
  return {
    ...state,
    value: state.value + action.amount,
    added: state.added + 1,
    lastAdded: performance.now(),
  };
};

const multiAmount = (state, action) => {
  return {
    ...state,
    value: state.value * action.amount,
    multiplied: state.multiplied + 1,
    lastMultiplied: performance.now(),
  };
};

const baseState = {
  value: 3,
  added: 0,
  multiplied: 0,
  lastAdded: null,
  lastMultiplied: null,
};
const action = { type: 'lol', amount: 3 };

describe('SN JS library: functions', () => {
  it('should combine reducers correctly', () => {
    const addThenMultiply = combineReducers(addAmount, multiAmount);

    let nextState = addThenMultiply(baseState, action);
    expect(nextState.value).toEqual(18);
    expect(nextState.added).toEqual(1);
    expect(nextState.multiplied).toEqual(1);

    nextState = addThenMultiply(nextState, action);
    expect(nextState.value).toEqual(63);
    expect(nextState.added).toEqual(2);
    expect(nextState.multiplied).toEqual(2);
  });

  it('should combine reducers in the right order', () => {
    const multiplyThenAdd = combineReducers(multiAmount, addAmount);

    let nextState = multiplyThenAdd(baseState, action);
    expect(nextState.value).toEqual(12);
    expect(nextState.added).toEqual(1);
    expect(nextState.multiplied).toEqual(1);
    expect(nextState.lastAdded).toBeGreaterThan(nextState.lastMultiplied);

    nextState = multiplyThenAdd(nextState, action);
    expect(nextState.value).toEqual(39);
    expect(nextState.added).toEqual(2);
    expect(nextState.multiplied).toEqual(2);
    expect(nextState.lastAdded).toBeGreaterThan(nextState.lastMultiplied);
  });
});
