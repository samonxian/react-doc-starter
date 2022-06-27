/**
 * 根据传入的 format 字符串获取 format 配置
 * @param  format 格式,如 percent，percent(2),fixed,fixed(2)
 * @returns
 * ```ts
 * {
 *   type: string,
 *   value: string
 * }
 * ```
 */
export default function getFormatConfig(format: string) {
  if (process.env.NODE_ENV !== 'production') {
    if (typeof format !== 'string') {
      throw new TypeError('Expected the format to be a string.');
    }
  }

  const match = format.match(/^(.*)\((.*)\)$|(.*)/);

  if (!match) {
    return {};
  }

  return {
    type: match[1] || match[0],
    value: match[2],
  };
}
