import { describe, it, expect } from 'vitest';
import getFormatValue from '../getFormatValue';

describe('format/getFomatConfig', () => {
  it('return correctly when the format is `date`', () => {
    expect(getFormatValue(1586952637, 'date')).toEqual('2020-04-15');
    expect(getFormatValue(1586952637, 'date(YYYY)')).toEqual('2020');
    expect(getFormatValue(1586952637, 'date(YYYY-MM-DD HH:mm)')).toEqual('2020-04-15 20:10');
  });

  it('return correctly when the format is `rmb`', () => {
    expect(getFormatValue(3771.3, 'rmb')).toEqual('37.71');
    expect(getFormatValue(3771.6, 'rmb')).toEqual('37.72');
    expect(getFormatValue(3771.2, 'rmb(3)')).toEqual('37.712');
    expect(getFormatValue('ddd', 'b(3)')).toEqual('ddd');
  });

  it('return correctly when the format is `percent`', () => {
    expect(getFormatValue(0.37713, 'percent')).toEqual('37.71%');
    expect(getFormatValue(0.37716, 'percent')).toEqual('37.72%');
    expect(getFormatValue(0.37712, 'percent(3)')).toEqual('37.712%');
    expect(getFormatValue('ddd', 'percent(3)')).toEqual('ddd');
  });

  it('return correctly when the format is `percent`', () => {
    expect(getFormatValue(0.3771, 'fixed')).toEqual('0.38');
    expect(getFormatValue(0.371, 'fixed')).toEqual('0.37');
    expect(getFormatValue(0.371111, 'fixed(3)')).toEqual('0.371');
    expect(getFormatValue('ddd', 'fixed(3)')).toEqual('ddd');
  });

  it('return correctly when the format is `thousandSemicolon`', () => {
    expect(getFormatValue(1111110.3771, 'thousandSemicolon')).toEqual('1,111,110.38');
    expect(getFormatValue(1111110.371, 'thousandSemicolon')).toEqual('1,111,110.37');
    expect(getFormatValue('1111110.371111', 'thousandSemicolon(3)')).toEqual('1,111,110.371');
    expect(getFormatValue('ddd', 'thousandSemicolon(3)')).toEqual('ddd');
  });

  it('return correctly when the format is `shortNumber`', () => {
    expect(getFormatValue(103770, 'shortNumber')).toEqual('10.38w');
    expect(getFormatValue(103711, 'shortNumber')).toEqual('10.37w');
    expect(getFormatValue('103711', 'shortNumber(3)')).toEqual('10.371w');
    expect(getFormatValue(10377000, 'shortNumber')).toEqual('1.04kw');
    expect(getFormatValue(10321100, 'shortNumber')).toEqual('1.03kw');
    expect(getFormatValue('10321100', 'shortNumber(3)')).toEqual('1.032kw');
    expect(getFormatValue('ddd', 'shortNumber(3)')).toEqual('ddd');
  });

  it('return N/A', () => {
    expect(getFormatValue(undefined, 'fixed', { shouldReturnNA: true })).toEqual('N/A');
    expect(getFormatValue('', 'fixed', { shouldReturnNA: true })).toEqual('N/A');
    expect(getFormatValue(null, 'fixed', { shouldReturnNA: true })).toEqual('N/A');
  });

  it('should throw', () => {
    const valueErrString = 'Expected the value to be a string or a number.';
    const formatErrString = 'Expected the format to be a string.';

    expect(() => {
      // @ts-expect-error
      getFormatValue(valueErrString);
    }).toThrow();
    expect(() => {
      // @ts-expect-error
      getFormatValue({});
    }).toThrow(valueErrString);
    expect(() => {
      // @ts-expect-error
      getFormatValue([]);
    }).toThrow(valueErrString);
    expect(() => {
      // @ts-expect-error
      getFormatValue(2, 2);
    }).toThrow(formatErrString);
    expect(() => {
      // @ts-expect-error
      getFormatValue(2, {});
    }).toThrow(formatErrString);
    expect(() => {
      // @ts-expect-error
      getFormatValue(2, []);
    }).toThrow(formatErrString);
  });
});
