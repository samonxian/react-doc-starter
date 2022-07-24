"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3995],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,b=m["".concat(s,".").concat(f)]||m[f]||c[f]||i;return r?n.createElement(b,l(l({ref:t},p),{},{components:r})):n.createElement(b,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},471:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(25773),a=(r(27378),r(35318));const i={sidebar_position:1},l=void 0,o={unversionedId:"type/isNumber",id:"type/isNumber",title:"isNumber",description:"",source:"@site/docs/utils/type/isNumber.mdx",sourceDirName:"type",slug:"/type/isNumber",permalink:"/react-doc-starter/utils/type/isNumber",draft:!1,editUrl:"https://github.com/samonxian/react-doc-starter/tree/master/webiste/docs/utils/type/isNumber.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"componentsSidebar",previous:{title:"\u7c7b\u578b\u5224\u65ad",permalink:"/react-doc-starter/utils/category/\u7c7b\u578b\u5224\u65ad"},next:{title:"isPlainObject",permalink:"/react-doc-starter/utils/type/isPlainObject"}},s={},u=[{value:"\u4f7f\u7528\u4f8b\u5b50",id:"\u4f7f\u7528\u4f8b\u5b50",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4f7f\u7528\u4f8b\u5b50"},"\u4f7f\u7528\u4f8b\u5b50"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"isNumber(3) // true\nisNumber(Number.MIN_VALUE) // true\nisNumber(Infinity) // false\nisNumber(Infinity,false) // true\nisNumber(NaN) // false\nisNumber(NaN,false) // true\nisNumber('3') // false\n")),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"value?"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u68c0\u6d4b\u7684\u76ee\u6807"),(0,a.kt)("td",{parentName:"tr",align:"left"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"useIsFinite"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u4f7f\u7528 isFinite\uff0c\u8bbe\u7f6e\u4e3a\u65f6\uff0cNaN,Infinity,-Infinity \u90fd\u4e0d\u7b97 number"),(0,a.kt)("td",{parentName:"tr",align:"left"},"true")))),(0,a.kt)("h2",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,a.kt)("p",null," true or false"))}c.isMDXComponent=!0}}]);