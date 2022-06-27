import moment from 'moment';
import getFomatConfig from './getFormatConfig';
import isNumber from './isNumber';

/**
 * 根据传入的 format，按照已有的格式化方式格式传入的值
 *
 * 目前format支持的格式有:
 *
 * ```js
 * percent(xx)
 * fixed(xx)
 * thousandSemicolon(xx)
 * rmb(xx) // 单位为分
 * date(xx) // 单位为秒
 * shortNumber(xx)
 * ```
 * @param value 需要格式化的值，兼容字符串类型的数字
 * @param format 格式,如 percent，percent(2),fixed,fixed(2)
 * @param  options? 配置项
 * @param  options.shouldReturnNA? value=undefined | null 是否返回 N/A
 * @returns
 * 如果是非数字，返回原值;
 * 如果是 options.shouldReturnNA=true，value=undefined | null 则返回 N/A;
 * 如果是正常数字则返回对象 `{type: xx, value: xx}`
 */
export default function getFormatValue(
  value: string | number | undefined | null,
  format: string,
  options: { shouldReturnNA?: boolean } = {},
) {
  const { shouldReturnNA } = options;

  if (shouldReturnNA && (value === undefined || value === null || value === '')) {
    return 'N/A';
  }

  if (process.env.NODE_ENV !== 'production') {
    if (value !== undefined && value !== null && typeof value !== 'string' && !isNumber(value, false)) {
      throw new TypeError('Expected the value to be a string or a number.');
    }
  }

  const formatConfig = getFomatConfig(format);

  if (!isFinite(value as number)) {
    return value;
  }

  switch (formatConfig.type) {
    // 日期 value 单位为秒
    case 'date': {
      const dateFormat = formatConfig.value || 'YYYY-MM-DD';

      return moment(Number(value) * 1000).format(dateFormat);
    }
    // 分单位的人民币转换为元单位的人民币数值
    case 'rmb': {
      const precision = Number(formatConfig.value || 2);

      return Number((Number(value) / 100).toFixed(precision)).toLocaleString();
    }
    // 小数转百分比
    case 'percent': {
      const precision = Number(formatConfig.value || 2);

      return `${(Number(value) * 100).toFixed(precision)}%`;
    }
    // 保留小数点
    case 'fixed': {
      const precision = Number(formatConfig.value || 2);

      return Number(value).toFixed(precision);
    }
    // 千分号
    case 'thousandSemicolon': {
      const precision = Number(formatConfig.value || 2);

      return Number(Number(value).toFixed(precision)).toLocaleString();
    }
    // 大数字转换为为 w，kw
    case 'shortNumber': {
      const precision = Number(formatConfig.value || 2);
      const lastValue = Number(Number(value).toFixed(precision));
      const w = 10000;
      const kw = 10000000;

      if ((value as string | number) >= w && (value as string | number) < kw) {
        return `${(Number(value) / w).toFixed(precision)}w`;
      }
      if ((value as string | number) >= kw) {
        return `${(Number(value) / kw).toFixed(precision)}kw`;
      }

      return lastValue;
    }
    default:
      return value;
  }
}
