"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9467],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,y=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(y,l(l({ref:t},p),{},{components:r})):a.createElement(y,l({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99412:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(27378),n=r(13099);const o={propsTable:"propsTable_NZ7r"};function l(e){const{data:t}=e,r=(0,a.useMemo)((()=>(0,n.ZP)({createElement:a.createElement})),[]);return null!=t&&t.props?a.createElement("div",{className:o.propsTable},a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{align:"left"},"\u53c2\u6570"),a.createElement("th",{align:"left"},"\u7c7b\u578b"),a.createElement("th",{align:"left"},"\u9ed8\u8ba4\u503c"))),a.createElement("tbody",null,Object.keys(t.props||{}).map((e=>{const{required:n,description:l,tsType:i,defaultValue:c}=t.props[e],s="string"==typeof l?r(l).tree:l;return a.createElement(a.Fragment,{key:e},a.createElement("tr",null,a.createElement("td",{className:o.paramsColumn,align:"left",rowSpan:2},a.createElement("b",null,e),!n&&"?"),a.createElement("td",{className:o.typeColumn,align:"left"},(null==i?void 0:i.raw)||(null==i?void 0:i.name)||"-"),a.createElement("td",{className:o.defaultColumn,align:"left"},(null==c?void 0:c.value)||"-")),a.createElement("tr",null,a.createElement("td",{className:o.descColumn,align:"left",colSpan:2},s||"-")))}))))):null}const i=(0,a.memo)(l)},91101:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=r(25773),n=(r(27378),r(35318)),o=r(99412);const l={},i=void 0,c={unversionedId:"chart/VarietyChart",id:"chart/VarietyChart",title:"VarietyChart",description:"\u5f53\u524d\u7684 LineChart\u3001AreaChart\u3001BarChart\u3001ComposedChart \u7ec4\u4ef6\u90fd\u662f\u57fa\u4e8e VarietyChart \u7ec4\u4ef6\u3002",source:"@site/docs/components/chart/VarietyChart.mdx",sourceDirName:"chart",slug:"/chart/VarietyChart",permalink:"/react-doc-starter/components/chart/VarietyChart",draft:!1,editUrl:"https://github.com/samonxian/react-doc-starter/tree/master/docs/components/chart/VarietyChart.mdx",tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar",previous:{title:"PieChart",permalink:"/react-doc-starter/components/chart/PieChart"}},s={},p=[],u={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u57fa\u4e8e rechart \u5c01\u88c5\u4e86\u5305\u62ec LineChart\u3001AreaChart\u3001BarChart\u3001ComposedChart \u7684\u56fe\u8868\uff0cy \u8f74\u503c\u7684\u957f\u5ea6\u4f1a\u81ea\u9002\u5e94\u3002\u5f53\u524d\u7684 LineChart\u3001AreaChart\u3001BarChart\u3001ComposedChart \u7ec4\u4ef6\u90fd\u662f\u57fa\u4e8e VarietyChart \u7ec4\u4ef6\u3002"),(0,n.kt)("p",null,"\u8be6\u7ec6\u7684\u6848\u4f8b\u8bf7\u770b\u5bf9\u5e94\u7684\u56fe\u8868\u3002"),(0,n.kt)(o.Z,{src:"/data/project/github/react-doc-starter/packages/components/src/chart/VarietyChart.tsx",showDescriptionOnSummary:!0,data:{description:"\u57fa\u4e8e rechart \u5c01\u88c5\u4e86\u5305\u62ec LineChart\u3001AreaChart\u3001BarChart\u3001ComposedChart \u7684\u56fe\u8868\uff0cy \u8f74\u503c\u7684\u957f\u5ea6\u4f1a\u81ea\u9002\u5e94\u3002",displayName:"VarietyChart",methods:[],props:{type:{required:!1,tsType:{name:"union",raw:"'line' | 'area' | 'bar' | 'composed' | 'pie'",elements:[{name:"literal",value:"'line'"},{name:"literal",value:"'area'"},{name:"literal",value:"'bar'"},{name:"literal",value:"'composed'"},{name:"literal",value:"'pie'"}]},description:"\u56fe\u8868\u7684\u7c7b\u578b\uff0c\u5206\u522b\u5bf9\u5e94 `<LineChart/>`,`<AreaChart/>`,`<BarChart/>`,`<ComposedChart/>`\u3002\n\u8fd9\u4e2a\u5c5e\u6027\u5728 VarietyChart \u7ec4\u4ef6\u4e2d\u662f\u5fc5\u586b\u7684\uff0cLinChart \u7b49\u662f\u975e\u5fc5\u586b\uff0c\u8fd9\u91cc\u4e3a\u4e86\u517c\u5bb9\u624d\u8bbe\u7f6e\u4e3a\u975e\u5fc5\u586b\u3002"},data:{required:!1,tsType:{name:"ChartData"},description:"\u6570\u636e\u6e90\u3002"},useResponsiveContainer:{required:!1,tsType:{name:"boolean"},description:"\u662f\u5426\u4f7f\u7528\u54cd\u5e94\u5f0f\uff0c\u5f00\u542f\u7684\u8bdd\u6d4f\u89c8\u5668\u7a97\u53e3\u5927\u5c0f\u6539\u53d8\u4f1a\u54cd\u5e94\u5f0f\u9002\u5e94",defaultValue:{value:"true",computed:!1}},xAxisFormat:{required:!1,tsType:{name:"string"},description:"x\u8f74 value \u65b9\u5f0f\uff0c\u5185\u90e8\u505a\u4e86\u5904\u7406\uff0c\u5177\u4f53\u8bf7\u770b [getFormatValue](/utils/getFormatValue)\u3002"},yAxisFormat:{required:!1,tsType:{name:"string"},description:"y\u8f74 value \u65b9\u5f0f\uff0c\u5185\u90e8\u505a\u4e86\u5904\u7406\uff0c\u5177\u4f53\u8bf7\u770b [getFormatValue](/utils/getFormatValue)\u3002"},xAxisFormatter:{required:!1,tsType:{name:"Formatter"},description:"x\u8f74 value \u683c\u5f0f\u5316\u51fd\u6570\u3002"},yAxisFormatter:{required:!1,tsType:{name:"Formatter"},description:"y\u8f74 value \u683c\u5f0f\u5316\u51fd\u6570\u3002"},width:{required:!1,tsType:{name:"number"},description:"\u56fe\u8868\u5bbd\u5ea6\uff0c\u914d\u5408 recharts ResponsiveContainer \u7ec4\u4ef6\u4f7f\u7528\u4e0d\u9700\u8981\u8bbe\u7f6e\u3002"},height:{required:!1,tsType:{name:"number"},description:"\u56fe\u8868\u9ad8\u5ea6\uff0c\u914d\u5408 recharts ResponsiveContainer \u7ec4\u4ef6\u4f7f\u7528\u4e0d\u9700\u8981\u8bbe\u7f6e\u3002",defaultValue:{value:"300",computed:!1}},layout:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"\u56fe\u8868\u5e03\u5c40\u65b9\u5f0f\uff0c\u6c34\u5e73\u6216\u8005\u5782\u76f4\u3002",defaultValue:{value:"'horizontal'",computed:!1}},brush:{required:!1,tsType:{name:"boolean"},description:"\u56fe\u8868\u662f\u5426\u53ef\u4ee5\u6a2a\u5411\u7f29\u653e\u3002",defaultValue:{value:"false",computed:!1}},stackOffset:{required:!1,tsType:{name:"literal",value:"'expand'"},description:""}}},mdxType:"PropsTable"}))}m.isMDXComponent=!0}}]);