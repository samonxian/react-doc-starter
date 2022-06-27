/**
 * 获取字符串的 DOM 宽度
 * @param str 需要计算宽度的字符串。
 * @param options.noReplaceWithOne? 不替换 `1`，默认值为 true，windows 的 1 和 mac 的 1 宽度不一样的。
 * @param options.fontSize? 渲染的字体大小，默认值为 14px
 * @returns 返回字符串在真实浏览器上渲染的宽度。
 */
export default function getStringDOMWidth(
  str: string | number,
  options: {
    noReplaceWithOne?: boolean;
    fontSize?: string;
  } = {},
) {
  const { noReplaceWithOne = true, fontSize = '14px' } = options;

  const tempElement = document.createElement('span');

  if (noReplaceWithOne) {
    tempElement.innerHTML = String(str);
  } else {
    // mac系统 1 和 0、2 等数字的宽度是不一样的，1 比其他数字的宽度小，所有 1 都替换成0，来计算宽度
    // 这种情况就有可能，最大值不一定是宽度最大的
    tempElement.innerHTML = String(str).replace(/1/g, '0');
  }

  tempElement.style.position = 'absolute';
  tempElement.style.padding = '0';
  tempElement.style.left = '-10000px';
  tempElement.style.fontSize = fontSize;

  // 兼容ie edge
  document.body.appendChild(tempElement);
  const width = tempElement.clientWidth;
  // 兼容ie edge
  document.body.removeChild(tempElement);
  return width;
}
