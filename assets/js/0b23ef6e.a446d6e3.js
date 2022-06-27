"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8113],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=n,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return r?a.createElement(d,l(l({ref:t},p),{},{components:r})):a.createElement(d,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},84702:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(25773),n=(r(27378),r(35318));const o={sidebar_position:1},l=void 0,i={unversionedId:"format/toCamelCase",id:"format/toCamelCase",title:"toCamelCase",description:"",source:"@site/docs/utils/format/toCamelCase.mdx",sourceDirName:"format",slug:"/format/toCamelCase",permalink:"/react-doc-starter/utils/format/toCamelCase",draft:!1,editUrl:"https://github.com/samonxian/react-doc-starter/tree/master/docs/utils/format/toCamelCase.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"componentsSidebar",previous:{title:"\u683c\u5f0f\u5de5\u5177",permalink:"/react-doc-starter/utils/category/\u683c\u5f0f\u5de5\u5177"},next:{title:"getFormatConfig",permalink:"/react-doc-starter/utils/format/getFormatConfig"}},s={},c=[{value:"\u4f7f\u7528\u4f8b\u5b50",id:"\u4f7f\u7528\u4f8b\u5b50",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:2}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u6570\u7ec4\uff08\u6210\u5458\u662f\u53ef\u679a\u4e3e\u5bf9\u8c61\uff09\u6216\u53ef\u679a\u4e3e\u5bf9\u8c61 key \u503c\u4e0b\u5212\u7ebf\u4f1a\u8f6c\u4e3a\u9a7c\u5cf0\u5f0f key \u503c\uff08\u53ef\u679a\u4e3e\u7684\u5c5e\u6027\u624d\u4f1a\u8f6c\u6362\uff09\n\u540c\u65f6\u4fdd\u8bc1 key \u503c\u7b2c\u4e00\u4e2a\u5b57\u6bcd\u662f\u5c0f\u5199\n\u8fd9\u4e2a\u51fd\u6570\u7684\u4e3b\u8981\u76ee\u7684\u662f\u4e3a\u4e86\u7edf\u4e00\u89c4\u8303\u540e\u7aef\u63a5\u53e3\u8fd4\u56de\u7684\u53d8\u91cf\uff0c\u524d\u7aef\u53d8\u91cf\u89c4\u8303\u91c7\u7528\u9a7c\u5cf0\u5f0f\u3002"),(0,n.kt)("h2",{id:"\u4f7f\u7528\u4f8b\u5b50"},"\u4f7f\u7528\u4f8b\u5b50"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'toCamelCase("test")  // test\ntoCamelCase({ test_a: 1 })  // { testA: 1 }\ntoCamelCase({ _test_a: 1 })  // { testA: 1 }\ntoCamelCase({ test_a_b: 1 })  // { testAB: 1 }\ntoCamelCase([[{ test_a: 1 }]])  // [[{ testA: 1 }]]\n')),(0,n.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"obj"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u683c\u5f0f\u5316\u7684\u53d8\u91cf\uff0c\u53ef\u4ee5\u662f\u4efb\u610f\u503c"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,n.kt)("h2",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,n.kt)("p",null," \u5982\u679c\u4e0d\u662f\u53ef\u53ef\u679a\u4e3e\u5bf9\u8c61\u6216\u8005\u6570\u7ec4\u5219\u76f4\u63a5\u8fd4\u56de\u4f20\u5165\u53c2\u6570\uff0c\u53ef\u679a\u4e3e\u5bf9\u8c61\u6216\u8005\u6570\u7ec4\u5219\u8fd4\u56de\u5904\u7406\u540e\u7684\u5bf9\u8c61\u6216\u8005\u6570\u7ec4"))}m.isMDXComponent=!0}}]);