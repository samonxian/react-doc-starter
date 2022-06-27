/**
 * 对象是否是纯对象
 * @param obj? 检测的目标
 * @returns true or false
 * @example
 * ```js
 * isPlainObject({ a: 2 }) // true
 * isPlainObject(null) // false
 * ```
 */
export default function isPlainObject(obj?: any): boolean {
  if (typeof obj !== 'object' || obj === null) return false;

  let proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}
