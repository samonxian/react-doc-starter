import { Key } from 'react';
import { getFormatValue } from 'business-utils';

export type Formatter = (v: Key | null | undefined) => string;

export default function useFormat(options: {
  stackOffset?: string | undefined;
  layout?: string;
  xAxisFormat?: string;
  yAxisFormat?: string;
  xAxisFormatter?: Formatter;
  yAxisFormatter?: Formatter;
}) {
  const { stackOffset, layout, xAxisFormatter = (v: Key | null) => v, yAxisFormatter = (v: Key | null) => v } = options;
  let { xAxisFormat = '', yAxisFormat = '' } = options;

  const getAxisFormatValue = (countValue: Key | null | undefined, formatStr: string) =>
    getFormatValue(countValue, formatStr);
  const isVertical = layout === 'vertical';

  if (stackOffset === 'expand') {
    if (isVertical) {
      xAxisFormat = 'percent(0)';
    } else {
      yAxisFormat = 'percent(0)';
    }
  }

  const valueFormatter = (v: Key) => {
    if (isVertical) {
      return getAxisFormatValue(xAxisFormatter(v), xAxisFormat || 'thousandSemicolon');
    }
    return getAxisFormatValue(yAxisFormatter(v), yAxisFormat || 'thousandSemicolon');
  };

  return valueFormatter;
}
