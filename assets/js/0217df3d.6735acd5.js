(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2329],{27859:(e,t,a)=>{"use strict";a.d(t,{TH:()=>Q,vz:()=>te,cI:()=>ne,wW:()=>$,uc:()=>oe,kH:()=>x,T:()=>i,iA:()=>b});var n=a(25773),r=a(27378),s=a(89107);const l=e=>{const{children:t,direction:a}=e;let{style:l={}}=e;return"vertical"===a&&(l={...l,width:"100%",display:"flex"}),r.createElement(s.Z,(0,n.Z)({},e,{direction:a,style:l}),t)};l.displayName="RSpace";const i=l;var o=a(95911),c=a(60042),u=a.n(c);a(49825);function m(e,t){void 0===t&&(t={});const{noReplaceWithOne:a=!0,fontSize:n="14px"}=t,r=document.createElement("span");r.innerHTML=a?String(e):String(e).replace(/1/g,"0"),r.style.position="absolute",r.style.padding="0",r.style.left="-10000px",r.style.fontSize=n,document.body.appendChild(r);const s=r.clientWidth;return document.body.removeChild(r),s}function d(e){void 0===e&&(e="");const t=e.match(/[\u4e00-\u9fa5]/g);let a=0;return t&&(a=t.length),e.length+a}var p=a(61320),h=a.n(p);function f(e,t,a){void 0===a&&(a={});const{shouldReturnNA:n}=a;if(n&&(null==e||""===e))return"N/A";const r=function(e){const t=e.match(/^(.*)\((.*)\)$|(.*)/);return t?{type:t[1]||t[0],value:t[2]}:{}}(t);if(!isFinite(e))return e;switch(r.type){case"date":{const t=r.value||"YYYY-MM-DD";return h()(1e3*Number(e)).format(t)}case"rmb":{const t=Number(r.value||2);return Number((Number(e)/100).toFixed(t)).toLocaleString()}case"percent":{const t=Number(r.value||2);return(100*Number(e)).toFixed(t)+"%"}case"fixed":{const t=Number(r.value||2);return Number(e).toFixed(t)}case"thousandSemicolon":{const t=Number(r.value||2);return Number(Number(e).toFixed(t)).toLocaleString()}case"shortNumber":{const t=Number(r.value||2),a=Number(Number(e).toFixed(t)),n=1e4,s=1e7;return e>=n&&e<s?(Number(e)/n).toFixed(t)+"w":e>=s?(Number(e)/s).toFixed(t)+"kw":a}default:return e}}const y={container:"business-table__container","td-no-wrap":"business-table__td-no-wrap",tdNoWrap:"business-table__td-no-wrap","td-wrap":"business-table__td-wrap",tdWrap:"business-table__td-wrap"},v=e=>{var t;const{className:a,scrollY:s,showPagination:l,rowKey:i,emptyFieldValue:c,pagination:m,columns:d=[],scroll:p,dataSource:h}=e,v=(0,r.useMemo)((()=>function(e){const{columns:t,emptyFieldValue:a,styles:n={}}=e,s=[],l=[],i=[];return t.filter((e=>!e.hide)).forEach((e=>{const{render:t}=e,o={...e,wrap:!!e.width,title:r.createElement("div",{className:n.th,style:{width:e.width}},e.title),render(n,s,l){if(null==n&&!e.notDealEmptyValue)return a;let i=(null==e.formatter?void 0:e.formatter(n))||n;var o,c;return"string"!=typeof i&&(void 0===c&&(c=!0),"number"!=typeof(o=i)||c&&!isFinite(o))||"string"!=typeof e.format||(i=f(i,e.format)),t&&(i=t(i,s,l)),r.createElement("div",{style:{width:e.width}},i)}};o.wrap?(o.className=u()(e.className,n.tdWrap),delete o.wrap):o.className=u()(e.className,n.tdNoWrap),!0===o.fixed||"left"===o.fixed?s.push(o):"right"===o.fixed?l.push(o):i.push(o)})),s.concat(i).concat(l)}({columns:d,emptyFieldValue:c,styles:y})),[d,c]);let b=i;i||void 0===(null==h||null==(t=h[0])?void 0:t.id)||(b="id");let g=m;return!1===l&&(g=!1),r.createElement(o.Z,(0,n.Z)({},e,{scroll:{x:!0,y:s,...p},className:u()(a,y.container),dataSource:h,rowKey:b,pagination:g,columns:v}))};v.displayName="RTable",v.defaultProps={showPagination:!1,emptyFieldValue:"-"};const b=v;var g=a(56423),j=a(66332);const C=e=>{const{showSearchTip:t,searchTip:a,showNoDataTip:n,noDataTip:s,showWarnTip:l,warnTip:i,showErrorTip:o,errorTip:c,showSuccessTip:u,successTip:m}=e;return o?r.createElement(g.Z,{type:"error",message:c,showIcon:!0}):l?r.createElement(g.Z,{type:"warning",message:i,showIcon:!0}):u?r.createElement(g.Z,{type:"success",message:m,showIcon:!0}):n?r.createElement(j.Z,{image:j.Z.PRESENTED_IMAGE_SIMPLE,description:s}):t?r.createElement(g.Z,{type:"info",message:a,showIcon:!0}):r.createElement(r.Fragment,null,e.children)};C.displayName="ProContent",C.defaultProps={searchTip:"\u8bf7\u5728\u4e0a\u65b9\u8f93\u5165\u7136\u540e\u70b9\u51fb\u67e5\u8be2",noDataTip:"\u6682\u65e0\u6570\u636e",successTip:"\u6210\u529f\u63d0\u793a",warnTip:"\u8b66\u544a\u63d0\u793a",errorTip:"\u9519\u8bef\u63d0\u793a"};const x=C;var E=a(290),k=a(68871),P=a(99308),N=a(76575),w=a(60777),T=a(54446),D=a(75885),A=a(38616),S=a(32529),L=a(26299),_=a(90782),z=a(60028),I=a(46246),F=a(9911),K=a(93761);const Z={"recharts-tooltip":"business-chart__recharts-tooltip",rechartsTooltip:"business-chart__recharts-tooltip","rechart-tooltip-label":"business-chart__rechart-tooltip-label",rechartTooltipLabel:"business-chart__rechart-tooltip-label","recharts-tooltip-content":"business-chart__recharts-tooltip-content",rechartsTooltipContent:"business-chart__recharts-tooltip-content","rechart-tooltip-item-value":"business-chart__rechart-tooltip-item-value",rechartTooltipItemValue:"business-chart__rechart-tooltip-item-value"};function B(e){const{active:t}=e;if(t){const{isPercent:t,payload:a=[],label:n,formatter:s,unit:l,titleColor:i,numberColor:o}=e;let c=0;return t&&(c=a.reduce(((e,t)=>e+Number(t.value)),0)),r.createElement("div",{className:Z.rechartsTooltip},n&&r.createElement("div",{className:Z.rechartTooltipLabel,style:{color:i}},""+n,t&&r.createElement(r.Fragment,null,"\xa0(\u603b\u6570\uff1a",c.toLocaleString(),")")),r.createElement("ul",{className:Z.rechartsTooltipContent},null==a?void 0:a.map(((e,a)=>{let n=l;const{percent:i}=e.payload,u=s?s(e.value):e.value;return 0!==e.value&&"N/A"!==e.value||(n=null),r.createElement("li",{key:a},r.createElement("span",{className:Z.rechartTooltipItemTitle,style:{color:o||e.stroke}},e.name,"\uff1a"),r.createElement("span",{className:Z.rechartTooltipItemValue},u.toLocaleString(),n,t&&r.createElement(r.Fragment,null,"\xa0(",(e.value/(c||1)*100).toFixed(2)+"%",")"),i&&r.createElement(r.Fragment,null,"\xa0(",(100*i).toFixed(2)+"%",")")))}))))}return null}var O=a(42273),R=a(99773);const G=32,M="rgba(0,0,0,.25)";class V extends r.Component{renderIcon(e){const{inactiveColor:t}=this.props,a=16,n=G/6,s=G/3,l=(e.inactive?t:e.color)||M;return"plainline"===e.type?r.createElement("line",{strokeWidth:4,fill:"none",stroke:l,strokeDasharray:e.payload.strokeDasharray,x1:0,y1:a,x2:G,y2:a,className:"recharts-legend-icon"}):"line"===e.type?r.createElement("path",{strokeWidth:4,fill:"none",stroke:l,d:"M0,16h"+s+"\n            A"+n+","+n+",0,1,1,"+2*s+","+"16\n            H"+"32M"+2*s+","+"16\n            A"+n+","+n+",0,1,1,"+s+","+a,className:"recharts-legend-icon"}):"rect"===e.type?r.createElement("path",{stroke:"none",fill:l,d:"M0,4h32v24h-32z",className:"recharts-legend-icon"}):r.createElement(O.v,{fill:l,cx:a,cy:a,size:G,sizeType:"diameter",type:e.type})}renderItems(){const{payload:e=[],customPayload:t=e,iconSize:a,layout:n,onClick:s,formatter:l}=this.props,i={x:0,y:0,width:G,height:G},o={display:"horizontal"===n?"inline-block":"block",marginRight:10},c={display:"inline-block",verticalAlign:"middle",marginRight:4},m=e.reduce(((e,t)=>({...e,[t.dataKey]:t})),{});return t.map(((e,t)=>{const n=m[e.dataKey]||e,d=n.formatter||l,p=u()({"recharts-legend-item":!0,["legend-item-"+t]:!0,inactive:n.inactive});return"none"===n.type?null:r.createElement("li",{className:p,style:{...o,cursor:"pointer"},key:"legend-item-"+t,onClick:()=>{null==s||s(n)}},r.createElement(R.T,{width:a,height:a,viewBox:i,style:c},this.renderIcon(n)),r.createElement("span",{className:"recharts-legend-item-text",style:{color:n.color?"":M}},d?d(n.value,n,t):n.value))}))}render(){const{payload:e,customPayload:t=e,layout:a,align:n}=this.props;if(!t||!t.length)return null;const s={padding:0,margin:0,textAlign:"horizontal"===a?n:"left"};return r.createElement("ul",{className:"recharts-default-legend",style:s},this.renderItems())}}const q=V;const U="business-chart__container",W=["#1890ff","#13c2c2","#52c41a","#a0d911","#fadb14","#faad14","#f5222d","#fa541c","#fa8c16","#ffbf00","#f56a00","#f7a20f","#108ee9","#00a2ae","#eb2f96","#722ed1","#2f54eb"];function H(e){const{type:t,xAxisFormatter:a=(e=>e),yAxisFormatter:s=(e=>e),width:l,height:i,layout:o,stackOffset:c,brush:p,useResponsiveContainer:h,data:{chartData:y=[],dataKeys:v=[],dataKeys:b}={},...g}=e;let{xAxisFormat:j="",yAxisFormat:C=""}=e;const x="vertical"===o,[Z,O]=(0,r.useState)(v);(0,r.useEffect)((()=>{O(b||[])}),[b]),"expand"===c&&(x?j="percent(0)":C="percent(0)");const R=function(e){const{stackOffset:t,layout:a,xAxisFormatter:n=(e=>e),yAxisFormatter:r=(e=>e)}=e;let{xAxisFormat:s="",yAxisFormat:l=""}=e;const i=(e,t)=>f(e,t),o="vertical"===a;return"expand"===t&&(o?s="percent(0)":l="percent(0)"),e=>o?i(n(e),s||"thousandSemicolon"):i(r(e),l||"thousandSemicolon")}({layout:o,stackOffset:c,xAxisFormat:j,yAxisFormat:C,xAxisFormatter:a,yAxisFormatter:s});let{ChartContainer:G,ChartItem:M}=(0,r.useMemo)((()=>"area"===t?{ChartContainer:E.T,ChartItem:k.u}:"bar"===t?{ChartContainer:P.v,ChartItem:N.$}:"composed"===t?{ChartContainer:w.c,ChartItem:T.x}:{ChartContainer:D.w,ChartItem:T.x}),[t]);const{lastChartData:V,margin:H,yTicks:Y}=(0,r.useMemo)((()=>{const e={top:0,left:-52,right:0,bottom:6},t=e=>f(e,x?C:j),n=[],r=[],l=Z.reduce(((e,t)=>(t.hide||(e[t.dataKey]=!0),e)),{}),i=y.map((e=>{const i=(o=e.name,x?s(t(o)):a(t(o)));var o;const c={...e};if(x)r.push(i);else for(const t in e)l[t]&&(n.push(Number(e[t])),null!==e[t]&&(c[t]=Number(e[t])));return{...c,name:i}}));let o;if(x){const t=m(r.reduce(((e,t)=>d(String(t))>d(String(e))?t:e),""));e.left=e.left+t}else if("expand"===c)e.left=e.left+m("100%");else{const t=Math.max.apply(null,n),a=(()=>{const e=Math.min.apply(null,n);return e>0?0:e})(),r=(0,K.Zj)([a,t],5).reduce(((e,t)=>{const a=String(R(t));return a.length>e.length?a:e}),"");1===a&&1===t&&(o=[0,1,2,3,4]);const s=m(String(R(r)));e.left=e.left+s}return{yTicks:o,lastChartData:i,margin:e}}),[y,o,c,Z]),{xAxisProps:X,yAxisProps:$,tooltipProps:J}=(0,r.useMemo)((()=>{let e={},t={},a={};if("vertical"===o){t={dataKey:"name",type:"category",padding:{top:16,bottom:16}},e={type:"number",tickFormatter:R,padding:{left:16,right:16}};const n=j.includes("percent")&&"expand"===c;a={formatter:n?null:R,isPercent:n}}else{e={dataKey:"name",padding:{left:16,right:16}},t={tickFormatter:R,padding:{top:16,bottom:16},ticks:Y};const n=C.includes("percent")&&"expand"===c;a={formatter:n?null:R,isPercent:n}}return{xAxisProps:e,yAxisProps:t,tooltipProps:a}}),[o,j,C]),Q=(0,r.useMemo)((()=>v.map((e=>({value:e.name||e.dataKey,type:"line",...e})))),[v]),ee=Z.reduce(((e,t)=>{let a=e;return t.hide||(a+=1),a}),0),te=r.createElement(G,(0,n.Z)({width:l||500,height:i||300,data:V,layout:o,margin:H,stackOffset:c},g,{className:u()(U,g.className)}),r.createElement(A.q,{strokeDasharray:"3 3"}),ee>0&&r.createElement(S.K,X),ee>0&&r.createElement(L.B,$),r.createElement(_.u,(0,n.Z)({content:r.createElement(B,{isPercent:J.isPercent})},J,{formatter:J.formatter})),p&&r.createElement(z.B,null),v.length>1&&r.createElement(I.D,{iconType:"line",content:r.createElement(q,{customPayload:Q,onClick:e=>{const{dataKey:t}=e,a=Z.map((e=>{const a={...e};return e.dataKey===t&&(a.hide=1!==ee&&!a.hide),a}));O(a)}}),wrapperStyle:p?{bottom:-2}:{bottom:0}}),Z.map(((e,a)=>{const{dataKey:s,chartType:l,stroke:i=W[a],fill:o=W[a],hide:u,...m}=e;if(u)return!1;"composed"===t&&("line"===l?M=T.x:"area"===l?M=k.u:"bar"===l&&(M=N.$));const d=M;return r.createElement(d,(0,n.Z)({key:s,type:"monotone",dataKey:s,stroke:i,fill:o,stackId:"expand"===c?"1":void 0,animationDuration:500},m))})));return h?r.createElement("div",{style:{height:i}},r.createElement(F.h,{width:"100%",height:i},te)):r.createElement(r.Fragment,null,te)}H.displayName="VarietyChart",H.defaultProps={layout:"horizontal",useResponsiveContainer:!0,height:300,brush:!1};const Y=H,X=e=>r.createElement(Y,(0,n.Z)({},e,{type:"line"}));X.displayName="LineChart";const $=X,J=e=>r.createElement(Y,(0,n.Z)({},e,{type:"area"}));J.displayName="Area";const Q=J,ee=e=>r.createElement(Y,(0,n.Z)({},e,{type:"bar"}));ee.displayName="Bar";const te=ee,ae=e=>r.createElement(Y,(0,n.Z)({},e,{type:"composed"}));ae.displayName="ComposedChart";const ne=ae;var re=a(43638),se=a(3509),le=a(14569);const ie=e=>{var t;const{width:a=250,height:s=250,data:l=[],formatter:i=(e=>e),valuePrecision:o=0,percentPrecision:c=0,useResponsiveContainer:u,showLabel:m,outerRadius:d,innerRadius:p,...h}=e,f=e=>i(Number(e.toFixed(o))).toLocaleString();let y=[].concat(l).filter(Boolean);null!=(t=y[0])&&t.chartData||(y=[{chartData:y}]);const v=r.createElement(re.u,(0,n.Z)({width:a,height:s},h),r.createElement(_.u,{content:r.createElement(B,null),formatter:f}),y.map(((e,t)=>{const{chartData:a=[],...s}=e,l=s.dataKey||"value",i=a.reduce(((e,t)=>e+t[l]),0),o=W.slice();a.forEach((e=>{e.fill&&o.unshift(e.fill),e.percent=e[l]/i}));let u=e=>{let{name:t,value:a,percent:n}=e;const r=f(a);return"percent"===s.label?(100*n).toFixed(c)+"%":"name"===s.label?t:"value"===s.label?r:t+" ("+(100*n).toFixed(c)+"%)"};return!1!==s.label&&m||(u=!1),r.createElement(se.b,(0,n.Z)({outerRadius:d,innerRadius:p,key:t.toString(),fill:o[t]},s,{dataKey:l,data:a,label:u,animationDuration:500,isAnimationActive:!1}),a.map(((e,t)=>r.createElement(le.b,{key:"cell-"+t,fill:o[t]}))))})));return u?r.createElement("div",{style:{height:s}},r.createElement(F.h,{width:"100%",height:s},v)):r.createElement(r.Fragment,null,v)};ie.displayName="PieChart",ie.defaultProps={useResponsiveContainer:!0,height:300,showLabel:!0,valuePrecision:2,percentPrecision:2};const oe=ie},23250:(e,t,a)=>{"use strict";a.d(t,{Z:()=>D});var n,r=a(27378),s=a(50353),l=a(33337),i=a(39798),o=a(33099),c=a(85920),u=a(94322);function m(e){let{language:t,replace:a,section:n,source:s,metastring:l}=e;const i=d(s,{replace:a,section:n});return r.createElement(u.Z.pre,null,r.createElement(u.Z.code,{children:i,className:"language-"+t,mdxType:"code",originalType:"code",parentName:"pre",metastring:l}))}function d(e,t){void 0===t&&(t={});const{section:a,replace:n}=t;let r;if(r="object"==typeof e&&"default"in e?e.default:e,a){const e=new RegExp("// <"+a+">\\s([\\s\\S]*?)\\s// </"+a+">\\s","g");r=r.split(e).reduce(((e,t,a)=>a%2==0?e:e+"\n\n"+t),"")}if(r=r.replace(/\/\/ <.*?\n/g,""),n)for(const[s,l]of Object.entries(n))r=r.replace(new RegExp(s,"gs"),l);return r=r.trim(),r.includes("\n")||(r+="\n"),r}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},p.apply(this,arguments)}const h=e=>{let{title:t,titleId:a,...s}=e;return r.createElement("svg",p({viewBox:"0 0 1024 1024",fill:"currentColor","aria-labelledby":a},s),t?r.createElement("title",{id:a},t):null,n||(n=r.createElement("path",{d:"M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798ZM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79L119.947 511.39Zm529.545-377.146c24.911 9.066 37.755 36.61 28.688 61.522L436.03 861.068c-9.067 24.911-36.611 37.755-61.522 28.688-24.911-9.066-37.755-36.61-28.688-61.522l242.15-665.302c9.067-24.911 36.611-37.755 61.522-28.688Z"})))};var f;function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},y.apply(this,arguments)}const v=e=>{let{title:t,titleId:a,...n}=e;return r.createElement("svg",y({viewBox:"0 0 1024 1024",fill:"currentColor","aria-labelledby":a},n),t?r.createElement("title",{id:a},t):null,f||(f=r.createElement("path",{xmlns:"http://www.w3.org/2000/svg",d:"M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798ZM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79L119.947 511.39Z"})))};var b;function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},g.apply(this,arguments)}const j=e=>{let{title:t,titleId:a,...n}=e;return r.createElement("svg",g({viewBox:"0 0 1024 1024",fill:"currentColor","aria-labelledby":a},n),t?r.createElement("title",{id:a},t):null,b||(b=r.createElement("path",{d:"m755 140.3.5-.3h.3L512 0 268.3 140h-.3l.8.4L68.6 256v512L512 1024l443.4-256V256L755 140.3zm-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90zm-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"})))};var C;function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},x.apply(this,arguments)}const E=e=>{let{title:t,titleId:a,...n}=e;return r.createElement("svg",x({viewBox:"0 0 1024 1024",fill:"currentColor","aria-labelledby":a},n),t?r.createElement("title",{id:a},t):null,C||(C=r.createElement("path",{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"})))},k="business-theme-playground__playgroundContainer",P="business-theme-playground__playgroundContent",N="business-theme-playground__playgroundIDE",w="business-theme-playground__codeBoxActions",T="business-theme-playground__svgIcon";function D(e){let{fileList:t,sourceUrl:a,children:n}=e;const[c,u]=(0,r.useState)(!1),d=()=>u((e=>!e)),{siteConfig:{customFields:p={}}={}}=(0,s.Z)(),{demoSourceUrl:f="",codeSandboxPacakgeConfig:y}=p;return r.createElement(o.Z,null,(()=>r.createElement("div",{className:k},r.createElement("div",{className:P},n),r.createElement("div",{className:w},y&&t.length>0&&r.createElement(A,{fileList:t,codeSandboxPacakgeConfig:y}),c&&r.createElement("span",{className:T,onClick:d},r.createElement(h,null)),!c&&r.createElement("span",{className:T,onClick:d},r.createElement(v,null)),a&&r.createElement("a",{href:f+"/"+a,target:"_blank",className:T,rel:"noreferrer"},r.createElement(E,null))),c&&(null==t?void 0:t.length)>0&&r.createElement("div",{className:N},1===t.length&&r.createElement(m,{language:t[0].fileSuffix,source:t[0].fileContent}),t.length>1&&r.createElement(l.Z,{defaultValue:"0",values:t.map(((e,t)=>{let{fileName:a,fileSuffix:n}=e;return{label:a+"."+n,value:String(t)}}))},t.map(((e,t)=>{let{fileName:a,fileContent:n,fileSuffix:s}=e;const l=a+"."+s;return r.createElement(i.Z,{value:String(t),key:l},r.createElement(m,{language:s,source:n}))})))))))}function A(e){const{fileList:t,codeSandboxPacakgeConfig:a}=e,{fileName:n}=t[0]||{},s=t.filter((e=>"jsx"!==e.fileSuffix)).reduce(((e,t)=>(e[t.fileName+"."+t.fileSuffix]={content:d(t.fileContent),isBinary:!1},e)),{});return r.createElement("span",{className:T,onClick:()=>{const e="https://codesandbox.io/api/v1/sandboxes/define?parameters="+(0,c.Z)({files:{"sandbox.config.json":{content:JSON.stringify({template:"create-react-app-typescript"},null,2),isBinary:!1},"index.tsx":{content:"\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport 'antd/dist/antd.css';\nimport 'react-antd-business-components/dist/style.css';\nimport App from './"+n+"';\n\nReactDOM.render(\n  <App />,\n  document.getElementById('root'),\n);\n          ",isBinary:!1},"package.json":{content:JSON.stringify({name:n,main:"index.tsx",dependencies:{...a.dependencies},devDependencies:{...a.devDependencies}},null,2),isBinary:!1},...s}});window.open(e)}},r.createElement(j,null))}},36586:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a(27378),r=a(13099);const s={propsTable:"business-theme-props-table__propsTable"};function l(e){const{data:t}=e,a=(0,n.useMemo)((()=>(0,r.ZP)({createElement:n.createElement})),[]);return null!=t&&t.props?n.createElement("div",{className:s.propsTable},n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{align:"left"},"\u53c2\u6570"),n.createElement("th",{align:"left"},"\u7c7b\u578b"),n.createElement("th",{align:"left"},"\u9ed8\u8ba4\u503c"))),n.createElement("tbody",null,Object.keys(t.props||{}).map((e=>{const{required:r,description:l,tsType:i,defaultValue:o}=t.props[e],c="string"==typeof l?a(l).tree:l;return n.createElement(n.Fragment,{key:e},n.createElement("tr",null,n.createElement("td",{className:s.paramsColumn,align:"left",rowSpan:2},n.createElement("b",null,e),!r&&"?"),n.createElement("td",{className:s.typeColumn,align:"left"},(null==i?void 0:i.raw)||(null==i?void 0:i.name)||"-"),n.createElement("td",{className:s.defaultColumn,align:"left"},(null==o?void 0:o.value)||"-")),n.createElement("tr",null,n.createElement("td",{className:s.descColumn,align:"left",colSpan:2},c||"-")))}))))):null}const i=(0,n.memo)(l)},72190:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>j,frontMatter:()=>h,metadata:()=>y,toc:()=>b});var n=a(25773),r=a(27378),s=a(35318),l=a(36586),i=a(23250),o=a(27859);const c=()=>r.createElement(o.uc,{data:[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200}],height:300}),u=()=>r.createElement(o.uc,{data:[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200}],height:300,showLabel:!1}),m=()=>r.createElement(o.uc,{data:[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200}],height:300,outerRadius:60}),d=()=>r.createElement(o.uc,{data:{dataKey:"badcaseCost",label:!0,nameKey:"badcasetype",chartData:[{badcasetype:"\u5c0f\u6837\u672c",badcaseAdNum:3959.5061753970003,badcaseImp:1986.759419469,badcaseCost:2863.5641501245536},{badcasetype:"\u65b0\u5e7f\u544a",badcaseAdNum:2902.829112675,badcaseImp:1808.219785075,badcaseCost:2727.3048648120844},{badcasetype:"\u77eb\u6b63\u5f02\u5e38",badcaseAdNum:2524.1903406009997,badcaseImp:2103.777411631,badcaseCost:1878.1476906503897}]},height:300}),p=()=>r.createElement(o.uc,{data:[{outerRadius:60,label:!1,chartData:[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200}]},{innerRadius:70,outerRadius:90,chartData:[{name:"A1",value:100},{name:"A2",value:300},{name:"B1",value:100},{name:"B2",value:80},{name:"B3",value:40},{name:"B4",value:30},{name:"B5",value:50},{name:"C1",value:100},{name:"C2",value:200},{name:"D1",value:150},{name:"D2",value:50}]}],height:300}),h={},f=void 0,y={unversionedId:"chart/PieChart",id:"chart/PieChart",title:"PieChart",description:"\u57fa\u672c\u4f7f\u7528",source:"@site/docs/components/chart/PieChart.mdx",sourceDirName:"chart",slug:"/chart/PieChart",permalink:"/react-doc-starter/components/chart/PieChart",draft:!1,editUrl:"https://github.com/samonxian/react-doc-starter/tree/master/docs/components/chart/PieChart.mdx",tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar",previous:{title:"LineChart",permalink:"/react-doc-starter/components/chart/LineChart"},next:{title:"VarietyChart",permalink:"/react-doc-starter/components/chart/VarietyChart"}},v={},b=[{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2},{value:"\u5c55\u793a Label",id:"\u5c55\u793a-label",level:2},{value:"\u63a7\u5236\u5927\u5c0f",id:"\u63a7\u5236\u5927\u5c0f",level:2},{value:"\u81ea\u5b9a\u4e49 nameKey \u548c dataKey",id:"\u81ea\u5b9a\u4e49-namekey-\u548c-datakey",level:2},{value:"\u4e24\u4e2a\u997c\u56fe",id:"\u4e24\u4e2a\u997c\u56fe",level:2},{value:"API",id:"api",level:2},{value:"PieChart \u5c5e\u6027",id:"piechart-\u5c5e\u6027",level:3}],g={toc:b};function j(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),(0,s.kt)(i.Z,{fileList:[{fileName:"Basic",fileSuffix:"tsx",fileContent:a(92813)}],sourceUrl:"demo/charts/PieChart/Basic.tsx",mdxType:"Playground"},(0,s.kt)(c,{mdxType:"BASICULCBEGAW13"})),(0,s.kt)("h2",{id:"\u5c55\u793a-label"},"\u5c55\u793a Label"),(0,s.kt)(i.Z,{fileList:[{fileName:"Label",fileSuffix:"tsx",fileContent:a(3919)}],sourceUrl:"demo/charts/PieChart/Label.tsx",mdxType:"Playground"},(0,s.kt)(u,{mdxType:"LABELPLBH3AT6FX"})),(0,s.kt)("h2",{id:"\u63a7\u5236\u5927\u5c0f"},"\u63a7\u5236\u5927\u5c0f"),(0,s.kt)(i.Z,{fileList:[{fileName:"SetSize",fileSuffix:"tsx",fileContent:a(21611)}],sourceUrl:"demo/charts/PieChart/SetSize.tsx",mdxType:"Playground"},(0,s.kt)(m,{mdxType:"SETSIZEGAUR8VAHTU9"})),(0,s.kt)("h2",{id:"\u81ea\u5b9a\u4e49-namekey-\u548c-datakey"},"\u81ea\u5b9a\u4e49 nameKey \u548c dataKey"),(0,s.kt)(i.Z,{fileList:[{fileName:"SetNameKeyDataKey",fileSuffix:"tsx",fileContent:a(72249)}],sourceUrl:"demo/charts/PieChart/SetNameKeyDataKey.tsx",mdxType:"Playground"},(0,s.kt)(d,{mdxType:"SETNAMEKEYDATAKEYIBNLOV8AMX8"})),(0,s.kt)("h2",{id:"\u4e24\u4e2a\u997c\u56fe"},"\u4e24\u4e2a\u997c\u56fe"),(0,s.kt)("p",null,"PieChart \u652f\u6301\u591a\u4e2a\u997c\u56fe\u7684\uff0c\u4e0d\u8fc7 label \u53ea\u53ef\u4ee5\u8bbe\u7f6e\u6700\u5916\u5c42\uff0c\u5176\u4ed6\u7684\u8bbe\u7f6e\u7684\u8bdd\uff0c\u4f1a\u5b58\u5728\u91cd\u53e0\u3002"),(0,s.kt)(i.Z,{fileList:[{fileName:"Nested",fileSuffix:"tsx",fileContent:a(86307)}],sourceUrl:"demo/charts/PieChart/Nested.tsx",mdxType:"Playground"},(0,s.kt)(p,{mdxType:"NESTED9HAB09QW698"})),(0,s.kt)("h2",{id:"api"},"API"),(0,s.kt)("h3",{id:"piechart-\u5c5e\u6027"},"PieChart \u5c5e\u6027"),(0,s.kt)("p",null,"\u5927\u90e8\u5206\u5c5e\u6027\u90fd\u548c recharts \u7684\u7ec4\u4ef6\u4fdd\u6301\u4e00\u81f4\uff0c\u9700\u8981\u770b recharts ",(0,s.kt)("a",{parentName:"p",href:"http://recharts.org/zh-CN/api/PieChart"},"PieChart")," \u548c ",(0,s.kt)("a",{parentName:"p",href:"http://recharts.org/zh-CN/api/Pie"},"Pie")," \u7684 API\u3002"),(0,s.kt)(l.Z,{src:"/data/project/github/react-doc-starter/packages/components/src/chart/PieChart.tsx",data:{description:"",displayName:"PieChart",methods:[],props:{data:{required:!1,tsType:{name:"union",raw:"PieChartData[] | OverwritePieChartDataItem | OverwritePieChartDataItem[]",elements:[{name:"Array",elements:[{name:"PieChartData"}],raw:"PieChartData[]"},{name:"Overwrite",elements:[{name:"PieProps"},{name:"signature",type:"object",raw:"{\n  /**\n   * \u9ed8\u8ba4\u7684 nameKey \u4e3a `name`\n   * Pie \u7c7b\u76ee\u6587\u6848\n   */\n  nameKey?: string;\n  /**\n   * \u9ed8\u8ba4\u7684 dataKey \u4e3a `value`\n   * Pie \u6307\u5b9a\u7684\u5b57\u6bb5\u6570\u636e\u6e90\n   */\n  dataKey?: string;\n  chartData: PieChartData[];\n  /**\n   * \u5176\u4ed6\u7684\u5c5e\u6027\u548c recharts [Pie](http://recharts.org/zh-CN/api/Pie) \u662fprops \u4e00\u81f4\u3002\n   */\n}",signature:{properties:[{key:"nameKey",value:{name:"string",required:!1}},{key:"dataKey",value:{name:"string",required:!1}},{key:"chartData",value:{name:"Array",elements:[{name:"PieChartData"}],raw:"PieChartData[]",required:!0}}]}}],raw:"Overwrite<PieProps, PieChartDataItem>"},{name:"Array",elements:[{name:"Overwrite",elements:[{name:"PieProps"},{name:"signature",type:"object",raw:"{\n  /**\n   * \u9ed8\u8ba4\u7684 nameKey \u4e3a `name`\n   * Pie \u7c7b\u76ee\u6587\u6848\n   */\n  nameKey?: string;\n  /**\n   * \u9ed8\u8ba4\u7684 dataKey \u4e3a `value`\n   * Pie \u6307\u5b9a\u7684\u5b57\u6bb5\u6570\u636e\u6e90\n   */\n  dataKey?: string;\n  chartData: PieChartData[];\n  /**\n   * \u5176\u4ed6\u7684\u5c5e\u6027\u548c recharts [Pie](http://recharts.org/zh-CN/api/Pie) \u662fprops \u4e00\u81f4\u3002\n   */\n}",signature:{properties:[{key:"nameKey",value:{name:"string",required:!1}},{key:"dataKey",value:{name:"string",required:!1}},{key:"chartData",value:{name:"Array",elements:[{name:"PieChartData"}],raw:"PieChartData[]",required:!0}}]}}],raw:"Overwrite<PieProps, PieChartDataItem>"}],raw:"OverwritePieChartDataItem[]"}]},description:"\u6570\u636e\u6e90"},useResponsiveContainer:{required:!1,tsType:{name:"boolean"},description:"\u662f\u5426\u4f7f\u7528\u54cd\u5e94\u5f0f\uff0c\u5f00\u542f\u7684\u8bdd\u6d4f\u89c8\u5668\u7a97\u53e3\u5927\u5c0f\u6539\u53d8\u4f1a\u54cd\u5e94\u5f0f\u9002\u5e94",defaultValue:{value:"true",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"\u662f\u5426\u5c55\u793a\u997c\u56fe\u6807\u7b7e",defaultValue:{value:"true",computed:!1}},formatter:{required:!1,tsType:{name:"Function"},description:"value \u683c\u5f0f\u5316\u51fd\u6570\uff0c\u76ee\u524d\u7684\u5e94\u7528\u573a\u666f\u6765\u770b\u6bd4\u8f83\u5c11\u7528\u5230\u3002"},width:{required:!1,tsType:{name:"number"},description:"\u5bbd\u5ea6"},height:{required:!1,tsType:{name:"number"},description:"\u9ad8\u5ea6",defaultValue:{value:"300",computed:!1}},valuePrecision:{required:!1,tsType:{name:"number"},description:"\u56fe\u8868\u6570\u636e\u7cbe\u5ea6\u5ea6\uff0c\u5373\u4fdd\u7559\u7684\u5c0f\u6570\u70b9\u6570",defaultValue:{value:"2",computed:!1}},percentPrecision:{required:!1,tsType:{name:"number"},description:"\u56fe\u8868\u767e\u5206\u6bd4\u7684\uff0c\u7cbe\u786e\u5ea6",defaultValue:{value:"2",computed:!1}},outerRadius:{required:!1,tsType:{name:"number"},description:"\u5916\u76f4\u5f84"},innerRadius:{required:!1,tsType:{name:"number"},description:"\u5185\u76f4\u5f84"}}},mdxType:"PropsTable"}))}j.isMDXComponent=!0},95126:(e,t,a)=>{var n={"./af":1009,"./af.js":1009,"./ar":88769,"./ar-dz":23739,"./ar-dz.js":23739,"./ar-kw":93745,"./ar-kw.js":93745,"./ar-ly":99576,"./ar-ly.js":99576,"./ar-ma":67408,"./ar-ma.js":67408,"./ar-sa":48781,"./ar-sa.js":48781,"./ar-tn":87856,"./ar-tn.js":87856,"./ar.js":88769,"./az":2030,"./az.js":2030,"./be":56476,"./be.js":56476,"./bg":25304,"./bg.js":25304,"./bm":48125,"./bm.js":48125,"./bn":34,"./bn-bd":29835,"./bn-bd.js":29835,"./bn.js":34,"./bo":64082,"./bo.js":64082,"./br":8317,"./br.js":8317,"./bs":93107,"./bs.js":93107,"./ca":68272,"./ca.js":68272,"./cs":98567,"./cs.js":98567,"./cv":61583,"./cv.js":61583,"./cy":10076,"./cy.js":10076,"./da":31760,"./da.js":31760,"./de":8973,"./de-at":63214,"./de-at.js":63214,"./de-ch":74728,"./de-ch.js":74728,"./de.js":8973,"./dv":54053,"./dv.js":54053,"./el":7499,"./el.js":7499,"./en-au":67876,"./en-au.js":67876,"./en-ca":47010,"./en-ca.js":47010,"./en-gb":34239,"./en-gb.js":34239,"./en-ie":99830,"./en-ie.js":99830,"./en-il":28438,"./en-il.js":28438,"./en-in":25322,"./en-in.js":25322,"./en-nz":43264,"./en-nz.js":43264,"./en-sg":55449,"./en-sg.js":55449,"./eo":39486,"./eo.js":39486,"./es":32430,"./es-do":16310,"./es-do.js":16310,"./es-mx":27038,"./es-mx.js":27038,"./es-us":73099,"./es-us.js":73099,"./es.js":32430,"./et":34975,"./et.js":34975,"./eu":87063,"./eu.js":87063,"./fa":68073,"./fa.js":68073,"./fi":50957,"./fi.js":50957,"./fil":8764,"./fil.js":8764,"./fo":81775,"./fo.js":81775,"./fr":74179,"./fr-ca":14306,"./fr-ca.js":14306,"./fr-ch":73791,"./fr-ch.js":73791,"./fr.js":74179,"./fy":47014,"./fy.js":47014,"./ga":46911,"./ga.js":46911,"./gd":62958,"./gd.js":62958,"./gl":87344,"./gl.js":87344,"./gom-deva":33161,"./gom-deva.js":33161,"./gom-latn":35798,"./gom-latn.js":35798,"./gu":68485,"./gu.js":68485,"./he":27917,"./he.js":27917,"./hi":52159,"./hi.js":52159,"./hr":95842,"./hr.js":95842,"./hu":30005,"./hu.js":30005,"./hy-am":51312,"./hy-am.js":51312,"./id":60781,"./id.js":60781,"./is":64101,"./is.js":64101,"./it":43467,"./it-ch":4759,"./it-ch.js":4759,"./it.js":43467,"./ja":44164,"./ja.js":44164,"./jv":70079,"./jv.js":70079,"./ka":57036,"./ka.js":57036,"./kk":92022,"./kk.js":92022,"./km":63418,"./km.js":63418,"./kn":43655,"./kn.js":43655,"./ko":30986,"./ko.js":30986,"./ku":91902,"./ku.js":91902,"./ky":4604,"./ky.js":4604,"./lb":99026,"./lb.js":99026,"./lo":20537,"./lo.js":20537,"./lt":22288,"./lt.js":22288,"./lv":1495,"./lv.js":1495,"./me":60690,"./me.js":60690,"./mi":2571,"./mi.js":2571,"./mk":93959,"./mk.js":93959,"./ml":97225,"./ml.js":97225,"./mn":88,"./mn.js":88,"./mr":46622,"./mr.js":46622,"./ms":11070,"./ms-my":48899,"./ms-my.js":48899,"./ms.js":11070,"./mt":63931,"./mt.js":63931,"./my":95393,"./my.js":95393,"./nb":4274,"./nb.js":4274,"./ne":8914,"./ne.js":8914,"./nl":33114,"./nl-be":68479,"./nl-be.js":68479,"./nl.js":33114,"./nn":4513,"./nn.js":4513,"./oc-lnc":46549,"./oc-lnc.js":46549,"./pa-in":28264,"./pa-in.js":28264,"./pl":32848,"./pl.js":32848,"./pt":90899,"./pt-br":55077,"./pt-br.js":55077,"./pt.js":90899,"./ro":92512,"./ro.js":92512,"./ru":21753,"./ru.js":21753,"./sd":16840,"./sd.js":16840,"./se":78362,"./se.js":78362,"./si":50464,"./si.js":50464,"./sk":66324,"./sk.js":66324,"./sl":41963,"./sl.js":41963,"./sq":53039,"./sq.js":53039,"./sr":93454,"./sr-cyrl":10466,"./sr-cyrl.js":10466,"./sr.js":93454,"./ss":95158,"./ss.js":95158,"./sv":28859,"./sv.js":28859,"./sw":57594,"./sw.js":57594,"./ta":26915,"./ta.js":26915,"./te":15677,"./te.js":15677,"./tet":92154,"./tet.js":92154,"./tg":74098,"./tg.js":74098,"./th":89071,"./th.js":89071,"./tk":49381,"./tk.js":49381,"./tl-ph":1869,"./tl-ph.js":1869,"./tlh":92346,"./tlh.js":92346,"./tr":71483,"./tr.js":71483,"./tzl":30266,"./tzl.js":30266,"./tzm":33138,"./tzm-latn":32960,"./tzm-latn.js":32960,"./tzm.js":33138,"./ug-cn":29456,"./ug-cn.js":29456,"./uk":50805,"./uk.js":50805,"./ur":61127,"./ur.js":61127,"./uz":29628,"./uz-latn":80840,"./uz-latn.js":80840,"./uz.js":29628,"./vi":56962,"./vi.js":56962,"./x-pseudo":49257,"./x-pseudo.js":49257,"./yo":62423,"./yo.js":62423,"./zh-cn":61002,"./zh-cn.js":61002,"./zh-hk":6046,"./zh-hk.js":6046,"./zh-mo":36903,"./zh-mo.js":36903,"./zh-tw":24710,"./zh-tw.js":24710};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id=95126},92813:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n="import React from 'react';\nimport { PieChart } from 'react-antd-business-components';\n\n// eslint-disable-next-line import/no-anonymous-default-export\nexport default () => {\n  const data = [\n    { name: 'Group A', value: 400 },\n    { name: 'Group B', value: 300 },\n    { name: 'Group C', value: 300 },\n    { name: 'Group D', value: 200 },\n  ];\n  return <PieChart data={data} height={300} />;\n};\n"},3919:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n="import React from 'react';\nimport { PieChart } from 'react-antd-business-components';\n\n// eslint-disable-next-line import/no-anonymous-default-export\nexport default () => {\n  const data = [\n    { name: 'Group A', value: 400 },\n    { name: 'Group B', value: 300 },\n    { name: 'Group C', value: 300 },\n    { name: 'Group D', value: 200 },\n  ];\n  return <PieChart data={data} height={300} showLabel={false} />;\n};\n"},86307:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n="import React from 'react';\nimport { PieChart } from 'react-antd-business-components';\n\n// eslint-disable-next-line import/no-anonymous-default-export\nexport default () => {\n  const data = [\n    {\n      outerRadius: 60,\n      label: false,\n      chartData: [\n        { name: 'Group A', value: 400 },\n        { name: 'Group B', value: 300 },\n        { name: 'Group C', value: 300 },\n        { name: 'Group D', value: 200 },\n      ],\n    },\n    {\n      innerRadius: 70,\n      outerRadius: 90,\n      chartData: [\n        { name: 'A1', value: 100 },\n        { name: 'A2', value: 300 },\n        { name: 'B1', value: 100 },\n        { name: 'B2', value: 80 },\n        { name: 'B3', value: 40 },\n        { name: 'B4', value: 30 },\n        { name: 'B5', value: 50 },\n        { name: 'C1', value: 100 },\n        { name: 'C2', value: 200 },\n        { name: 'D1', value: 150 },\n        { name: 'D2', value: 50 },\n      ],\n    },\n  ];\n  return <PieChart data={data} height={300} />;\n};\n"},72249:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n="import React from 'react';\nimport { PieChart, PieChartProps } from 'react-antd-business-components';\n\n// eslint-disable-next-line import/no-anonymous-default-export\nexport default () => {\n  const data: PieChartProps['data'] = {\n    dataKey: 'badcaseCost',\n    label: true,\n    nameKey: 'badcasetype',\n    chartData: [\n      {\n        badcasetype: '\u5c0f\u6837\u672c',\n        badcaseAdNum: 3959.5061753970003,\n        badcaseImp: 1986.759419469,\n        badcaseCost: 2863.5641501245536,\n      },\n      {\n        badcasetype: '\u65b0\u5e7f\u544a',\n        badcaseAdNum: 2902.829112675,\n        badcaseImp: 1808.219785075,\n        badcaseCost: 2727.3048648120844,\n      },\n      {\n        badcasetype: '\u77eb\u6b63\u5f02\u5e38',\n        badcaseAdNum: 2524.1903406009997,\n        badcaseImp: 2103.777411631,\n        badcaseCost: 1878.1476906503897,\n      },\n    ],\n  };\n  return <PieChart data={data} height={300} />;\n};\n"},21611:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n="import React from 'react';\nimport { PieChart, PieChartDataSource } from 'react-antd-business-components';\n\n// eslint-disable-next-line import/no-anonymous-default-export\nexport default () => {\n  const data: PieChartDataSource = [\n    { name: 'Group A', value: 400 },\n    { name: 'Group B', value: 300 },\n    { name: 'Group C', value: 300 },\n    { name: 'Group D', value: 200 },\n  ];\n  return <PieChart data={data} height={300} outerRadius={60} />;\n};\n"}}]);