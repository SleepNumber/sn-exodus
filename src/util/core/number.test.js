import { clamp } from './number';

describe('clamp() limits values to bounds', () => {
  test('if the value is too high', () => {
    expect(clamp(2, 0, 1)).toBe(1);
    expect(clamp(200, 0, 12)).toBe(12);
    expect(clamp(-10, -500, -15)).toBe(-15);
  });
  test('if within range the value is unaltered', () => {
    expect(clamp(5, 0, 100)).toBe(5);
    expect(clamp(50, 50, 50)).toBe(50);
    expect(clamp(-100, -500, -50)).toBe(-100);
  });
  test('if the value is too low', () => {
    expect(clamp(15, 50, 100)).toBe(50);
    expect(clamp(20, 30, 32)).toBe(30);
    expect(clamp(-10, -5, -1)).toBe(-5);
  });
});
