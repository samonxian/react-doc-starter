"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5746],{43570:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"react-doc-starter","metadata":{"permalink":"/react-doc-starter/blog/react-doc-starter","editUrl":"https://github.com/samonxian/react-doc-starter/tree/master/blog/2022-06-27-react-doc-starter.md","source":"@site/blog/2022-06-27-react-doc-starter.md","title":"React \u7ec4\u4ef6\u6587\u6863\u65b9\u6848","description":"React Doc Starter \u9002\u5408\u7ec4\u5185\u6216\u8005\u90e8\u95e8\u5185\u6c89\u6dc0\u524d\u7aef\u9879\u76ee\u7684\u4e1a\u52a1\u7ec4\u4ef6\u548c\u4e1a\u52a1 Utilis\u3002","date":"2022-06-27T00:00:00.000Z","formattedDate":"2022\u5e746\u670827\u65e5","tags":[{"label":"react-doc-starter","permalink":"/react-doc-starter/blog/tags/react-doc-starter"}],"readingTime":7.36,"truncated":false,"authors":[{"name":"samonxian","title":"Front End Engineer @tencent","url":"https://github.com/samonxian","imageURL":"https://github.com/samonxian.png","key":"samonxian"}],"frontMatter":{"slug":"react-doc-starter","title":"React \u7ec4\u4ef6\u6587\u6863\u65b9\u6848","authors":["samonxian"],"tags":["react-doc-starter"]}},"content":"**React Doc Starter \u9002\u5408\u7ec4\u5185\u6216\u8005\u90e8\u95e8\u5185\u6c89\u6dc0\u524d\u7aef\u9879\u76ee\u7684\u4e1a\u52a1\u7ec4\u4ef6\u548c\u4e1a\u52a1 Utilis\u3002**\\n\\n`React Doc Starter` \u662f\u57fa\u4e8e facebook [docusaurus 2](https://docusaurus.io/)\uff0c\u8be6\u7ec6\u7684\u7528\u6cd5\u53ef\u4ee5\u67e5\u770b\u5b98\u65b9\u6587\u6863\u3002\\n\\n\u7ed3\u5408\u4e1a\u52a1\u7ec4\u4ef6\u548c Utils \u7c7b\u5e93\u5f00\u53d1\u7684\u6d41\u7a0b\uff0c\u63d0\u4f9b\u4e00\u5957\u53ef\u76f4\u63a5\u4f7f\u7528\u7684 React \u7ec4\u4ef6\u5e93\u548c Utils \u7c7b\u5e93\u5f00\u53d1\u89e3\u51b3\u65b9\u6848\u3002\\n\\n\u76ee\u524d\u7ec4\u4ef6\u548c Uitls \u4f7f\u7528 `vite` \u8fdb\u884c\u6253\u5305\uff0c\u53ea\u9700\u8981\u7b80\u5355\u7684\u914d\u7f6e\u5373\u53ef\u5b9e\u73b0\u6253\u5305\u3002\\n\\n**Node \u7248\u672c\u8981\u6c42 >= v16\uff0c\u76ee\u524d\u6839\u636e\u6ce8\u91ca\u751f\u6210\u7684\u6587\u6863\u4e0d\u652f\u6301\u56fd\u9645\u5316\u7684\u573a\u666f\uff0c\u56fd\u9645\u5316\u7684\u573a\u666f\u9700\u8981\u6839\u636e docusaurus \u6587\u6863\u624b\u52a8\u7f16\u5199\u6587\u6863\u3002**\\n\\n## Starter \u5e26\u6765\u4e86\u54ea\u4e9b\u4fbf\u5229\uff1f\\n\\nStarter \u89e3\u51b3\u4e86 `docusaurus` \u7684 4 \u70b9\u95ee\u9898\uff1a\\n\\n1. `docusaurus` \u652f\u6301 mdx\uff0c\u6240\u4ee5 md \u6587\u4ef6\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 React \u7ec4\u4ef6\uff0c\u4f46\u662f\u8fd8\u9700\u8981\u624b\u52a8 import \u7ec4\u4ef6\u3002\\n2. `docusaurus` \u6ca1\u6709\u76f4\u63a5\u652f\u6301\u7ec4\u4ef6\u5c55\u793a\u548c\u4ee3\u7801\u5c55\u793a\u4e00\u8d77\u7684\u7528\u6cd5\uff08\u4e00\u822c\u4e0a\u65b9\u662f\u4f8b\u5b50\uff0c\u4e0b\u65b9\u53ef\u9009\u67e5\u770b\u70b9\u524d\u4f8b\u5b50\u4ee3\u7801\uff09\u3002\\n3. `docusaurus` \u6587\u6863\u9700\u8981\u624b\u52a8\u7f16\u5199\\n4. `docusaurus` \u6ca1\u6709\u63d0\u4f9b\u7ec4\u4ef6\u5f00\u53d1\u4e00\u6761\u9f99\u7684\u89e3\u51b3\u65b9\u6848\\n\\n## \u6ce8\u610f\u4e8b\u9879\\n\\n\u5176\u4e2d `packages/components` \u548c `packages/utils` \u662f\u56fa\u5b9a\u7684\u547d\u540d\uff0c\u5982\u679c\u6709\u9700\u8981\u81ea\u5b9a\u4e49\u7684\u9700\u8981\uff0c\\n\u53ef\u4ee5\u5148\u770b\u4e0b\u4e0b\u9762\u8fd9\u4e9b\u6587\u4ef6\uff1a\\n\\n```\\n./website/loader/codeShow.js // \u6b64 loader \u652f\u6301 md \u6587\u4ef6\u4f7f\u7528 <CodeShow/> \u7ec4\u4ef6\\n./website/loader/propsTable.js // \u6b64 loader \u652f\u6301 md \u6587\u4ef6\u4f7f\u7528 <PropsTable /> \u7ec4\u4ef6\\n./website/plugins/alias.js // \u914d\u7f6e\u4e1a\u52a1\u7ec4\u4ef6\u7684 alias \u65e0\u9700\u6253\u5305\u5c31\u53ef\u4ee5\u5728\u6587\u6863\u4e0a\u8c03\u8bd5\\n./website/plugins/less.js // \u914d\u7f6e less-loader\\n./website/plugins/mdx.js // \u914d\u7f6e propsTable \u548c codeShow loader\\n./website/plugins/tsdoc.js // \u914d\u7f6e ts-doc-webpack-loader\uff0c\u652f\u6301 md \u6587\u4ef6\u4f7f\u7528 <TsDoc /> \u7ec4\u4ef6\\n./website/utils/getJsxCodeAst.js // \u83b7\u53d6 JSX \u4ee3\u7801\u7684 AST \u7ed3\u6784\\n```\\n\\n## \u672c\u5730\u5f00\u53d1\\n\\n```shell\\n$ git clone https://github.com/samonxian/react-doc-starter.git\\n$ cd ./website # \u8fdb\u5165 website \u6587\u4ef6\u5939\\n$ npm start\\n```\\n\\n`npm start` \u540e\u5c31\u53ef\u4ee5\u901a\u8fc7 [http://localhost:3000/](http://localhost:3000/) \u8bbf\u95ee\u6587\u6863\u3002\\n\\n## \u6784\u5efa\\n\\n```shell\\n$ cd ./website # \u786e\u4fdd\u8fdb\u5165 website \u6587\u4ef6\u5939\\n$ npm run build\\n```\\n\\n\u6b64\u547d\u4ee4\u5c06\u9759\u6001\u5185\u5bb9\u751f\u6210 `build` \u76ee\u5f55\uff0c\u5e76\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u9759\u6001\u5185\u5bb9\u6258\u7ba1\u670d\u52a1\u63d0\u4f9b\u670d\u52a1\u3002\\n\\n## Github pages \u5feb\u6377\u90e8\u7f72\\n\\n\u4f7f\u7528 SSH:\\n\\n```shell\\n$ cd ./website # \u786e\u4fdd\u8fdb\u5165 website \u6587\u4ef6\u5939\\n$ USE_SSH=true npm run deploy\\n```\\n\\n\u4e0d\u4f7f\u7528 SSH:\\n\\n```shell\\n$ cd ./website # \u786e\u4fdd\u8fdb\u5165 website \u6587\u4ef6\u5939\\n$ GIT_USER=<\u4f60\u7684 GitHub \u7528\u6237\u540d> npm run deploy\\n```\\n\\n\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f github \u9875\u9762\u8fdb\u884c\u6258\u7ba1\uff0c\u5219\u6b64\u547d\u4ee4\u662f\u6784\u5efa\u7f51\u7ad9\u5e76\u5c06\u5176\u63a8\u5411 `GH-pages` \u5206\u652f\u7684\u4fbf\u6377\u65b9\u6cd5\u3002\\n\\n## md \u53ef\u7528\u7ec4\u4ef6 API\\n\\n\u8fd9\u91cc\u6d89\u53ca md \u6587\u4ef6\u53ef\u4f7f\u7528\u7684\u7279\u6b8a\u7ec4\u4ef6\\n\\n### CodeShow \u7528\u6cd5\\n\\n\u7528\u4e8e\u5728 md \u6587\u4ef6\u6e32\u67d3\u6307\u5b9a\u6587\u4ef6\u7684\u7ec4\u4ef6\u5185\u5bb9\uff0c\u5e76\u9644\u5e26\u7ec4\u4ef6\u6e90\u7801\u3002\\n\u652f\u6301 file \u548c fileList \u5c5e\u6027\uff08\u5373\u6587\u4ef6\u8def\u5f84\uff09\uff0c\u5176\u4e2d\u6587\u4ef6\u8def\u5f84\u53ef\u4ee5\u4f7f\u7528 alias\u3002\\n\\n```jsx\\n<CodeShow. file=\\"$demo/Image/Basic.tsx\\" />\\n```\\n\\n\u6216\u8005\\n\\n```jsx\\n<CodeShow. fileList={[\'$demo/Image/Basic.tsx\']} />\\n```\\n\\n### PropsTable \u7528\u6cd5\\n\\n\u7528\u4e8e md \u6587\u4ef6\u4e2d\u8bfb\u53d6\u5bf9\u5e94 ts \u6587\u4ef6\u4e2d React \u7ec4\u4ef6 Props interface \u7684\u6ce8\u91ca\uff0c\u8be6\u7ec6\u7684\u7528\u6cd5\u53ef\u4ee5\u67e5\u770b[react-docgen](https://github.com/reactjs/react-docgen#example-1)\\n\\n\u5c5e\u6027 `src` \u652f\u6301 alias\uff0c\u7528\u6cd5\u548c\u8bed\u6cd5 import \u7684\u8def\u5f84\u4e00\u81f4\uff0c`showDescriptionOnSummary=true` \u4f1a\u8bfb\u53d6\u7ec4\u4ef6\\n\u5934\u90e8\u6ce8\u91ca\u5230 md \u6587\u4ef6\u5f00\u59cb\u5904\u3002\\n\\n```jsx\\n<PropsTable. src=\\"$components/pro-content\\" showDescriptionOnSummary />\\n```\\n\\n```ts\\nexport interface ProContentProps {\\n  /**\\n   * \u662f\u5426\u5c55\u793a\u641c\u7d22\u63d0\u793a\u8bed\\n   */\\n  showSearchTip?: boolean;\\n  /**\\n   * \u641c\u7d22\u63d0\u793a\u8bed\\n   */\\n  searchTip?: string;\\n  /**\\n   * \u662f\u5426\u5c55\u793a\u7a7a\u6570\u636e\u63d0\u793a\u8bed\\n   */\\n  showNoDataTip?: boolean;\\n  /**\\n   * \u7a7a\u6570\u636e\u63d0\u793a\u8bed\\n   */\\n  noDataTip?: string;\\n  /**\\n   * \u662f\u5426\u5c55\u793a\u8b66\u544a\u63d0\u793a\u8bed\\n   */\\n  showWarnTip?: boolean;\\n  /**\\n   * \u8b66\u544a\u63d0\u793a\u8bed\\n   */\\n  warnTip?: string;\\n  /**\\n   * \u662f\u5426\u5c55\u793a\u9519\u8bef\u63d0\u793a\u8bed\\n   */\\n  showErrorTip?: boolean;\\n  /**\\n   * \u9519\u8bef\u63d0\u793a\u8bed\\n   */\\n  errorTip?: string;\\n  /**\\n   * \u662f\u5426\u5c55\u793a\u6210\u529f\u63d0\u793a\u8bed\\n   */\\n  showSuccessTip?: boolean;\\n  /**\\n   * \u6210\u529f\u63d0\u793a\u8bed\\n   */\\n  successTip?: string;\\n  children: React.ReactNode;\\n}\\n/**\\n * \u5185\u5bb9\u7ec4\u4ef6\uff0c\u5305\u542b\u641c\u7d22\u63d0\u793a\u3001\u7a7a\u6570\u636e\u63d0\u793a\u3001\u9519\u8bef\u63d0\u793a\uff0c\u5982\u679c\u8fd9\u4e9b\u5176\u4e2d\u4e00\u4e2a\u8bbe\u7f6e\u4e86\uff0c\u5b50\u7ec4\u4ef6\u5185\u5bb9\u4e0d\u4f1a\u88ab\u6e32\u67d3\\n * \u63d0\u793a\u4f18\u5148\u7ea7\\n * \u9519\u8bef\u63d0\u793a > \u8b66\u544a\u63d0\u793a > \u6210\u529f\u63d0\u793a > \u65e0\u6570\u636e\u63d0\u793a > \u67e5\u8be2\u63d0\u793a\\n */\\nconst ProContent: {\\n  (props: ProContentProps): JSX.Element | null;\\n  displayName: string;\\n  propList?: PropList;\\n  defaultProps?: Record<string, any>;\\n} = (props: ProContentProps) => {\\n  const {\\n    showSearchTip,\\n    searchTip,\\n    showNoDataTip,\\n    noDataTip,\\n    showWarnTip,\\n    warnTip,\\n    showErrorTip,\\n    errorTip,\\n    showSuccessTip,\\n    successTip,\\n  } = props;\\n\\n  if (showErrorTip) {\\n    return <Alert type=\\"error\\" message={errorTip} showIcon />;\\n  }\\n\\n  if (showWarnTip) {\\n    return <Alert type=\\"warning\\" message={warnTip} showIcon />;\\n  }\\n\\n  if (showSuccessTip) {\\n    return <Alert type=\\"success\\" message={successTip} showIcon />;\\n  }\\n\\n  if (showNoDataTip) {\\n    // return <Alert type=\\"info\\" message={noDataTip} showIcon />;\\n    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={noDataTip} />;\\n  }\\n\\n  if (showSearchTip) {\\n    return <Alert type=\\"info\\" message={searchTip} showIcon />;\\n  }\\n\\n  return <>{props.children}</>;\\n};\\n\\nProContent.displayName = \'ProContent\';\\n\\nProContent.defaultProps = {\\n  searchTip: \'\u8bf7\u5728\u4e0a\u65b9\u8f93\u5165\u7136\u540e\u70b9\u51fb\u67e5\u8be2\',\\n  noDataTip: \'\u6682\u65e0\u6570\u636e\',\\n  successTip: \'\u6210\u529f\u63d0\u793a\',\\n  warnTip: \'\u8b66\u544a\u63d0\u793a\',\\n  errorTip: \'\u9519\u8bef\u63d0\u793a\',\\n};\\n\\nexport default ProContent;\\n```\\n\\n### TsDoc \u7528\u6cd5\\n\\n\u652f\u6301\u5728 md \u6587\u4ef6\u4e2d\u8bfb\u53d6\u6307\u5b9a\u6587\u4ef6\u4e2d\u7684\u51fd\u6570\u6ce8\u91ca\uff08\u53ea\u652f\u6301\u7b2c\u4e00\u4e2a\u51fd\u6570\uff09, \u5e76\u751f\u6210 md \u6587\u4ef6\u5185\u5bb9\u3002\\n\\n`src` \u7ea7\u6587\u4ef6\u8def\u5f84\uff0c\u7528\u6cd5\u548c\u8bed\u6cd5 `import` \u4e00\u81f4\u3002\\n\\n\u4e00\u822c\u4e0b\u65b9\u7684\u4e00\u884c\u4ee3\u7801\u5373\u53ef\u751f\u6210\u5bf9\u5e94\u51fd\u6570\u7684\u6587\u6863\uff0c\u8be6\u7ec6\u53ef\u770b\u4ed3\u5e93\u4f8b\u5b50\u3002\\n\\n```jsx\\n<TsDoc src=\\"$utils/format/toCamelCase\\" />\\n```\\n\\n\u57fa\u4e8e tsdoc\uff0c\u9075\u5faa tsdoc \u89c4\u8303\uff0c\u540c\u65f6\u65b0\u52a0\u4e86 @default\uff0c?\uff08\u5373\u975e\u5fc5\u586b\uff09\u4e24\u79cd\u7528\u6cd5\uff0c\u5982\u4e0b\\n\\n```ts\\n/**\\n * \u6570\u7ec4\uff08\u6210\u5458\u662f\u53ef\u679a\u4e3e\u5bf9\u8c61\uff09\u6216\u53ef\u679a\u4e3e\u5bf9\u8c61 key \u503c\u4e0b\u5212\u7ebf\u4f1a\u8f6c\u4e3a\u9a7c\u5cf0\u5f0f key \u503c\uff08\u53ef\u679a\u4e3e\u7684\u5c5e\u6027\u624d\u4f1a\u8f6c\u6362\uff09\\n * \u540c\u65f6\u4fdd\u8bc1 key \u503c\u7b2c\u4e00\u4e2a\u5b57\u6bcd\u662f\u5c0f\u5199\u3002\\n *\\n * @remarks \u8fd9\u4e2a\u51fd\u6570\u7684\u4e3b\u8981\u76ee\u7684\u662f\u4e3a\u4e86\u7edf\u4e00\u89c4\u8303\u540e\u7aef\u63a5\u53e3\u8fd4\u56de\u7684\u53d8\u91cf\uff0c\u524d\u7aef\u53d8\u91cf\u89c4\u8303\u91c7\u7528\u9a7c\u5cf0\u5f0f\u3002\\n * @param obj \u9700\u8981\u683c\u5f0f\u5316\u7684\u53d8\u91cf\uff0c\u53ef\u4ee5\u662f\u4efb\u610f\u503c\\n * @param options? \u914d\u7f6e\\n * @default { firstLetter: true }\\n * @param options.firstLetter? \u914d\u7f6e\\n * @default true\\n * @returns \u5982\u679c\u4e0d\u662f\u53ef\u53ef\u679a\u4e3e\u5bf9\u8c61\u6216\u8005\u6570\u7ec4\u5219\u76f4\u63a5\u8fd4\u56de\u4f20\u5165\u53c2\u6570\uff0c\u53ef\u679a\u4e3e\u5bf9\u8c61\u6216\u8005\u6570\u7ec4\u5219\u8fd4\u56de\u5904\u7406\u540e\u7684\u5bf9\u8c61\u6216\u8005\u6570\u7ec4\\n * @example\\n * toCamelCase(\\"test\\")  // test\\n * @example\\n * toCamelCase({ test_a: 1 })  // { testA: 1 }\\n * @example\\n * toCamelCase({ _test_a: 1 })  // { testA: 1 }\\n * @example\\n * toCamelCase({ test_a_b: 1 })  // { testAB: 1 }\\n * @example\\n * toCamelCase([[{ test_a: 1 }]])  // [[{ testA: 1 }]]\\n */\\n```\\n\\n\u66f4\u591a\u7684\u7528\u6cd5\u53ef\u67e5\u770b [ts-doc-webpack-loader](https://github.com/samonxian/ts-doc-webpack-loader)\u3002\\n\\n## alias\\n\\n\u53ef\u5728 `./website/plugins/alias.js` \u4fee\u6539\\n\\n- `react-antd-business-components` \u76f8\u5f53\u4e8e npm \u5305\u540d\uff0c\u5bf9\u5e94 `packages/components` \u6587\u4ef6\u5939\\n- `business-utils` \u76f8\u5f53\u4e8e npm \u5305\u540d\uff0c\u5bf9\u5e94 `packages/utils` \u6587\u4ef6\u5939\\n- `$components` \u5bf9\u5e94 `packages/components` \u6587\u4ef6\u5939\\n- `$utils` \u5bf9\u5e94 `packages/components` \u6587\u4ef6\u5939\\n- `$demo` \u5bf9\u5e94 `packages/components` \u6587\u4ef6\u5939"}]}')}}]);