import camelcase from 'camelcase';
import isPlainObject from './isPlainObject';

/**
 * 数组（成员是可枚举对象）或可枚举对象 key 值下划线会转为驼峰式 key 值（可枚举的属性才会转换）
 * 同时保证 key 值第一个字母是小写
 * 这个函数的主要目的是为了统一规范后端接口返回的变量，前端变量规范采用驼峰式。
 * @param obj 需要格式化的变量，可以是任意值
 * @returns 如果不是可可枚举对象或者数组则直接返回传入参数，可枚举对象或者数组则返回处理后的对象或者数组
 * @example
 * ```ts
 * toCamelCase("test")  // test
 * toCamelCase({ test_a: 1 })  // { testA: 1 }
 * toCamelCase({ _test_a: 1 })  // { testA: 1 }
 * toCamelCase({ test_a_b: 1 })  // { testAB: 1 }
 * toCamelCase([[{ test_a: 1 }]])  // [[{ testA: 1 }]]
 * ```
 */
export default function toCamelCase(obj: any) {
  if (!isPlainObject(obj) && !Array.isArray(obj)) {
    return obj;
  }

  if (Array.isArray(obj)) {
    const reArr: any = [];
    obj.forEach((arr, index) => {
      reArr[index] = toCamelCase(arr);
    });
    return reArr;
  }

  const reObj: Record<string, any> = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const oldKey in obj) {
    if (isPlainObject(obj[oldKey])) {
      // eslint-disable-next-line no-param-reassign
      obj[oldKey] = toCamelCase(obj[oldKey]);
    } else if (Array.isArray(obj[oldKey])) {
      (obj[oldKey] as any[]).forEach((arrValue, index) => {
        // eslint-disable-next-line no-param-reassign
        obj[oldKey][index] = toCamelCase(arrValue);
      });
    }

    const newKey = camelcase(oldKey);

    reObj[newKey] = obj[oldKey];
  }
  return reObj;
}
