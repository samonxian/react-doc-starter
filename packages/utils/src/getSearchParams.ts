/**
 * 尽量使用 getSearchParams 这个函数名。
 *
 * 因为新版的 react-router 不支持 location.query，所以需要使用官方推荐的 URLSearchParams 方式处理
 * 使用 URLSearchParams 获取
 * @param locationSearch location.search 格式为 ?adid=xxx&test=xxx
 * @returns 返回解析后的对象，对象无二级嵌套。
 * @example
 * ```ts
 * getQueryParams("?id=33&name=samon"0) // 返回 { id: '33', name: 'samon' }
 * ```
 */
export default function getSearchParams(locationSearch?: string) {
  if (typeof URLSearchParams !== 'undefined') {
    const searchParams = new URLSearchParams(locationSearch);
    const params: Record<string, string | undefined> = {};

    // eslint-disable-next-line no-restricted-syntax
    for (const s of searchParams) {
      const [key, value] = s;
      params[key] = value;
    }
    return params;
  }
  return {};
}
