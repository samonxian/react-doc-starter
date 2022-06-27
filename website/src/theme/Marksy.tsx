import React, { createElement, useMemo } from 'react';
import marksy from 'marksy';

/**
 * 文本渲染解析为 markdown react 组件格式
 */
function Marksy(props: { children: string }) {
  const { children } = props;
  const compile = useMemo(() => marksy({ createElement }), []);
  const topDesc = typeof children === 'string' ? compile(children).tree : children;

  return <>{topDesc}</>;
}

export default Marksy;
