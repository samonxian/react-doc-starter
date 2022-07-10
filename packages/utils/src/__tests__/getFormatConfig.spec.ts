import { describe, it, expect } from 'vitest';
import getFormatConfig from '../getFormatConfig';

describe('format/getFormatConfig', () => {
  it('return correctly when the format is `formatString`', () => {
    expect(getFormatConfig('percent')).toEqual({ type: 'percent' });
    expect(getFormatConfig('fixed')).toEqual({ type: 'fixed' });
  });
  it('return correctly when the format is `formatString(precision)`', () => {
    expect(getFormatConfig('percent(22)')).toEqual({
      type: 'percent',
      value: '22',
    });
    expect(getFormatConfig('fixed(dd)')).toEqual({ type: 'fixed', value: 'dd' });
  });
  it('should throw', () => {
    const errString = 'Expected the format to be a string.';

    expect(() => {
      // @ts-expect-error
      getFormatConfig();
    }).toThrow();
    expect(() => {
      // @ts-expect-error
      getFormatConfig(2);
    }).toThrow(errString);
    expect(() => {
      // @ts-expect-error
      getFormatConfig({});
    }).toThrow(errString);
    expect(() => {
      // @ts-expect-error
      getFormatConfig([]);
    }).toThrow(errString);
  });
});
