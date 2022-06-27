/* eslint-disable quotes */
const getJsxCodeAst = require('../utils/getJsxCodeAst');

module.exports = function codeShow(source) {
  const allCodeShowRegExp = /<CodeShow[\s\n][^>]+(?!\/>).>([^]*?)<\/CodeShow>/gi; // 格式为 <CodeShow ...><Example /></CodeShow>
  const allCodeShowNoChildrenRegExp = /<CodeShow[\s\n][^>]*\/>/gi; // 格式为 <CodeShow .../>
  const sourceUrlRegExp = /demoSourceUrl:\s(.*)/;
  const sourceUrlMatch = source.match(sourceUrlRegExp);
  const matchedCode = source.match(allCodeShowRegExp);
  const matchedNoChildCode = source.match(allCodeShowNoChildrenRegExp);
  let lastSource = source;
  let extraImport = "\n\nimport Playground from '@theme/Playground';\n";

  if (matchedCode || matchedNoChildCode) {
    const allMatchCode = (matchedCode || []).concat(matchedNoChildCode).filter(Boolean);

    allMatchCode.forEach((code) => {
      const { source: replacedSource, extraImport: addImport } = replaceSource(
        lastSource,
        code,
        sourceUrlMatch && sourceUrlMatch[1],
      );
      lastSource = replacedSource;
      extraImport += addImport;
    });
    // 替换可能多余的引入
    lastSource = lastSource.replace("import Playground from '@theme/Playground';", '');
    lastSource = lastSource.replace("import Playground from '@theme/Playground'", '');
    if (/(---\n[^]*\n---)([^]*)/.test(lastSource)) {
      lastSource = lastSource.replace(/(---\n[^]*\n---)([^]*)/, `$1${extraImport}$2`);
    } else {
      lastSource = `${extraImport}\n${lastSource}`;
    }
  }

  return lastSource;
};

function replaceSource(source, code, demoSourceUrl) {
  const childrenRegExp = /<CodeShow[\s\n][^>]*>([^]*)<\/CodeShow>/;
  const childrenMatch = code.match(childrenRegExp);
  let extraImport = '';
  let children = ((childrenMatch && childrenMatch[1]) || '').trim();
  const result = getJsxCodeAst(code);
  // console.log(JSON.stringify(result, null, 2));
  const { props } = result
    .map((re) => {
      if (re.name === 'CodeShow') {
        const { file, fileList = [].concat(file) } = re.props;
        const newfileList = fileList?.map((filePath, index) => {
          const filePathMatch = filePath.match(/.*\/([^/]*)\.([^.]*)/);
          const fileName = filePathMatch ? filePathMatch[1] : filePath.match(/.*\/([^/]*)\.?([^.]*)/)[1];
          const fileSuffix = filePathMatch ? filePathMatch[2] : 'tsx';
          const randomString = Math.random().toString(36).substring(2);

          if (index === 0 && !children) {
            // 随机字符串保证组件不会重复命名
            const componentName = `${fileName.replace(/\./g, '')}${randomString}`.toUpperCase();
            // 没有 CodeShow children 默认展示第一个文件的组件。
            children = `<${componentName} />`;
            extraImport += `import ${componentName} from '${filePath}';\n`;
          }

          return {
            fileName,
            fileSuffix,
            fileContent: `require('!!raw-loader!${filePath}')`,
          };
        });

        return {
          ...re,
          props: {
            ...re.props,
            fileList: newfileList,
            sourceUrl: fileList[0].replace('$', '') || demoSourceUrl,
          },
        };
      }
      return false;
    })
    .filter(Boolean)[0];

  const propsString = Object.keys(props).reduce((pStr, curName) => {
    let re = pStr;

    if (props[curName]) {
      if (typeof props[curName] === 'string') {
        re += `${curName}="${props[curName]}"\n`;
      } else {
        re += `${curName}={${JSON.stringify(props[curName])}}\n`;
      }
    }

    return re;
  }, '');

  const replacedCode = `
<Playground
  ${propsString.trim()}
>
  ${children}
</Playground>`.replace(/"(require\('!!raw-loader![^()]*'\))"/g, '$1');

  const lastSource = source.replace(code, replacedCode);

  return { source: lastSource, extraImport };
}
