import React from 'react';
import components from '@theme/MDXComponents';

export type CodeSectionProps = {
  // 变成语言，如 js、jsx、ts、tsx
  language: string;
  // 正则替换输入文本
  replace?: Record<string, string>;
  section?: string;
  // 高亮语法，同 https://v2.docusaurus.io/docs/markdown-features/#line-highlighting
  metastring?: string;
  source: string | { default: string };
};

export default function CodeSection({ language, replace, section, source, metastring }: CodeSectionProps) {
  const lastSource = getSourceString(source, { replace, section });

  return (
    <components.pre>
      <components.code
        children={lastSource}
        className={`language-${language}`}
        mdxType="code"
        originalType="code"
        parentName="pre"
        metastring={metastring}
      />
    </components.pre>
  );
}

export function getSourceString(source, options: Record<string, any> = {}) {
  const { section, replace } = options;
  let lastSource: string;

  // Unwrap ES module.
  if (typeof source === 'object' && 'default' in source) {
    lastSource = source.default;
  } else {
    lastSource = source;
  }

  // Cut out only desired section.
  if (section) {
    const pattern = new RegExp(`// <${section}>\\s([\\s\\S]*?)\\s// </${section}>\\s`, 'g');

    lastSource = lastSource
      .split(pattern)
      .reduce((source, part, index) => (index % 2 === 0 ? source : `${source}\n\n${part}`), '');
  }

  // Remove remaining section tags.
  lastSource = lastSource.replace(/\/\/ <.*?\n/g, '');

  // Replace all mapped things.
  if (replace) {
    // eslint-disable-next-line no-restricted-syntax
    for (const [pattern, value] of Object.entries(replace)) {
      lastSource = lastSource.replace(new RegExp(pattern, 'gs'), value);
    }
  }

  // At least one newline is required for non-inline view.
  lastSource = lastSource.trim();
  if (!lastSource.includes('\n')) {
    lastSource += '\n';
  }

  return lastSource;
}
