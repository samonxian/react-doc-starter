const babelParser = require('@babel/parser');
const chalk = require('chalk');

/**
 * @param expression 需要处理的表达式对象，包括 elements、property.value 等。
 */
function getJSXExpressionContainerPropValue(expression) {
  if (expression.type === 'ArrayExpression') {
    return expression.elements.map((element) => getJSXExpressionContainerPropValue(element));
  }

  if (expression.type === 'ObjectExpression') {
    const attr = {};

    expression.properties.forEach((property) => {
      const { name } = property.key;
      attr[name] = getJSXExpressionContainerPropValue(property.value);
    });

    return attr;
  }

  if (expression.type === 'BooleanLiteral') {
    // boolean 和 number 类型使用 `${xx}` 代表，同变量。
    return expression.value;
  }

  if (expression.type === 'Identifier') {
    // 变量类型使用 `${xx}` 代表变量。
    return `\${${expression.name}}`;
  }

  return expression.value;
}

function getProps(attributes) {
  // console.log(JSON.stringify(attributes, null, 2));
  if (attributes.length === 0) {
    return {};
  }

  const props = {};

  attributes.forEach((attr) => {
    if (attr.value === null) {
      props[attr.name.name] = true;
      return;
    }

    let { value } = attr.value;

    if (attr.value.type === 'JSXExpressionContainer') {
      // 非字符串和数字的情况（StringLiteral,NumberLiteral）
      const { expression } = attr.value;
      value = getJSXExpressionContainerPropValue(expression);
    }

    props[attr.name.name] = value;
  });

  return props;
}

function reduceAstNode(oldNode, currentNode) {
  let element = {};
  if (currentNode.type === 'JSXElement') {
    element = {
      name: currentNode.openingElement.name.name,
      props: getProps(currentNode.openingElement.attributes),
    };
    oldNode.push(element);
  }
  if ('children' in currentNode) {
    currentNode.children.forEach((node) => {
      if (!element.children) {
        element.children = [];
      }

      return oldNode.length > 0 ? reduceAstNode(element.children, node) : reduceAstNode(oldNode, node);
    });
  }
  return oldNode;
}

/**
 * 根据传入的 jsx 字符串获取经过处理的 ast 结构。
 * @example
 * {
 *   name: 'componentName',
 *   props: {},
 *   children: []
 * }
 */
module.exports = function getJsxCodeAst(codeStr) {
  try {
    const rawAst = babelParser.parse(codeStr, {
      plugins: ['jsx'],
    });

    return reduceAstNode([], rawAst.program.body[0].expression);
  } catch (error) {
    console.error(chalk.red('组件语法错误!'));
    console.trace(error);
    throw error;
  }
};
