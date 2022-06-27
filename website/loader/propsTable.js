const fs = require('fs');
const path = require('path');
const { getReactDocData } = require('react-docgen-webpack-loader');
const { getOptions } = require('loader-utils');
const getJsxCodeAst = require('../utils/getJsxCodeAst');
const resolve = require('../utils/resolve');

module.exports = function propsTable(source) {
  const options = getOptions(this);
  const allPropsTableRegExp = /(<PropsTable[\s\n][^>]*\/>)/g; // 格式为 <PropsTable .../>
  const matchedCode = source.match(allPropsTableRegExp);
  let lastSource = source;
  let summary = '';

  if (matchedCode) {
    matchedCode.forEach((code) => {
      const { source: replacedSource, src, description } = replaceSource.bind(this)(lastSource, code, options);
      lastSource = replacedSource;

      if (src) {
        this.addDependency(src);
      }

      if (description) {
        summary = description;
      }
    });

    // 替换可能多余的引入
    lastSource = lastSource.replace("import PropsTable from '@theme/PropsTable';", '');
    lastSource = lastSource.replace("import PropsTable from '@theme/PropsTable'", '');

    if (/(---\n[^]*\n---)([^]*)/.test(lastSource)) {
      lastSource = lastSource.replace(
        /(---\n[^]*\n---)([^]*)/,
        `$1\n\nimport PropsTable from '@theme/PropsTable';\n\n${summary}$2`,
      );
    } else {
      lastSource = `\n\nimport PropsTable from '@theme/PropsTable';\n\n${summary}${lastSource}`;
    }
  }

  return lastSource;
};

function replaceSource(source, code, options) {
  const result = getJsxCodeAst(code);
  // console.log(JSON.stringify(result, null, 2));
  const { props } = result
    .map((re) => {
      if (re.name === 'PropsTable') {
        let { src, data } = re.props;

        if (!data && src) {
          if (options.alias) {
            Object.keys(options.alias).forEach((aliasName) => {
              if (RegExp(`^${aliasName.replace('$', '\\$')}.*`).test(src)) {
                src = resolve(path.relative(__dirname, src.replace(aliasName, options.alias[aliasName])));
              }
            });
          }
          try {
            const docSource = fs.readFileSync(src, {
              encoding: 'utf-8',
            });
            data = getReactDocData(docSource, true);
          } catch (err) {
            console.trace(err);
            throw err;
          }
        }

        return {
          ...re,
          props: {
            ...re.props,
            src,
            data,
          },
        };
      }
    })
    .filter(Boolean)[0];

  const propsString = Object.keys(props).reduce((pStr, curName) => {
    let re = pStr;

    if (props[curName]) {
      if (typeof props[curName] === 'string') {
        if (/\$({.*})/.test(props[curName])) {
          re += `${curName}=${RegExp.$1}\n`;
        } else {
          re += `${curName}="${props[curName]}"\n`;
        }
      } else {
        re += `${curName}={${JSON.stringify(props[curName])}}\n`;
      }
    }

    return re;
  }, '');

  const replacedCode = `
<PropsTable
  ${propsString.trim().replace(/"\${(.*)}"/g, '$1')}
/>`.replace(/"({require\('!!@tencent\/react-docgen-loader![^()]*'\)})"/g, '$1');

  // console.log(replacedCode);

  const lastSource = source.replace(code, replacedCode);

  return {
    source: lastSource,
    src: props.src,
    description: props.showDescriptionOnSummary && props.data && props.data.description,
  };
}
