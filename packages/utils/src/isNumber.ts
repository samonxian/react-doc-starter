/**
 * @param value? 检测的目标
 * @param useIsFinite 是否使用 isFinite，设置为 true 时，NaN,Infinity,-Infinity 都不算 number
 * @default true
 * @returns true or false
 * @example
 * ```ts
 * isNumber(3) // true
 * isNumber(Number.MIN_VALUE) // true
 * isNumber(Infinity) // false
 * isNumber(Infinity,false) // true
 * isNumber(NaN) // false
 * isNumber(NaN,false) // true
 * isNumber('3') // false
 * ```
 */
export default function isNumber(value?: any, useIsFinite = true) {
  if (typeof value !== 'number' || (useIsFinite && !isFinite(value))) {
    return false;
  }
  return true;
}
