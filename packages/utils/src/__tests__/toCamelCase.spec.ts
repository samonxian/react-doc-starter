import { describe, it, expect } from 'vitest';
import toCamelCase from '../toCamelCase';

describe('format/toCamelCase', () => {
  it('format the  variable', () => {
    expect(toCamelCase(null)).toBeNull();
    expect(toCamelCase(undefined)).toBeUndefined();
    expect(toCamelCase(1)).toBe(1);
    expect(toCamelCase(true)).toBe(true);
    expect(toCamelCase({ test_a: 1 })).toEqual({ testA: 1 });
    expect(toCamelCase({ 'test-a': 1 })).toEqual({ testA: 1 });
    expect(toCamelCase({ test_ad: 1 })).toEqual({ testAd: 1 });
    expect(toCamelCase({ _test_a: 1 })).toEqual({ testA: 1 });
    expect(toCamelCase({ '-test-a': 1 })).toEqual({ testA: 1 });
    expect(toCamelCase({ test_a_b: 1 })).toEqual({ testAB: 1 });
    expect(toCamelCase({ test_ad_bd: 1 })).toEqual({ testAdBd: 1 });
    expect(toCamelCase([{ test_ad_bd: 1 }])).toEqual([{ testAdBd: 1 }]);
    expect(toCamelCase([[{ test_ad_bd: 1 }], { test_a: 1 }, 'test'])).toEqual([
      [{ testAdBd: 1 }],
      { testA: 1 },
      'test',
    ]);
  });
});
