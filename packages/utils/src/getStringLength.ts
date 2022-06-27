/**
 * 获取字符串长度，一个中文长度为 2，一个英文长度为 1
 * 目前只考虑中文和英文的结合
 * @param str? 传入的目标字符串
 * @default ''
 * @returns 字符串的长度
 */
export default function getStringLength(str = '') {
  // 匹配中文
  const match = str.match(/[\u4e00-\u9fa5]/g);
  let chineseHalfength = 0;

  if (match) {
    chineseHalfength = match.length;
  }

  // str.length 包括了所有中文字符的一个长度
  return str.length + chineseHalfength;
}
