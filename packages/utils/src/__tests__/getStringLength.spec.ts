import { describe, it, expect } from 'vitest';
import getStringLength from '../getStringLength';

describe('getStringLength', () => {
  it('should equal the length', () => {
    expect(getStringLength('a')).toBe(1);
    expect(getStringLength('ab')).toBe(2);
    expect(getStringLength('ab单独来处理')).toBe(12);
    expect(getStringLength('ab单独来处理单独来处理')).toBe(22);
  });
});
