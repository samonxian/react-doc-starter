import { describe, it, expect } from 'vitest';
import isNumber from '../isNumber';

describe('isNumber', () => {
  it('returns true only if number', () => {
    expect(isNumber(1)).toBe(true);
    expect(isNumber([1, 2, 3])).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber()).toBe(false);
    expect(isNumber(NaN)).toBe(false);
    expect(isNumber(NaN, false)).toBe(true);
    expect(isNumber(Infinity)).toBe(false);
    expect(isNumber(Infinity, false)).toBe(true);
    expect(isNumber(-Infinity)).toBe(false);
    expect(isNumber(-Infinity, false)).toBe(true);
    expect(isNumber({})).toBe(false);
    expect(isNumber(() => {})).toBe(false);
  });
});
