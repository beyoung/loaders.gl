"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[6785],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(f,l(l({ref:t},p),{},{components:r})):a.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},72933:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={},l="JSON-style Loaders",i={unversionedId:"specifications/category-json",id:"specifications/category-json",title:"JSON-style Loaders",description:"The json category loaders supports loading loosely structured data including:",source:"@site/../docs/specifications/category-json.md",sourceDirName:"specifications",slug:"/specifications/category-json",permalink:"/docs/specifications/category-json",draft:!1,editUrl:"https://github.com/uber-web/loaders.gl/tree/master/website/../docs/specifications/category-json.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Worker Threads",permalink:"/docs/developer-guide/concepts/worker-threads"},next:{title:"Table Loaders",permalink:"/docs/specifications/category-table"}},s={},c=[{value:"JSON Category Loaders",id:"json-category-loaders",level:2},{value:"Data Structure",id:"data-structure",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"json-style-loaders"},"JSON-style Loaders"),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"json")," category loaders supports loading loosely structured data including:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"associative arrays (also known as name-value pairs), "),(0,n.kt)("li",{parentName:"ul"},"integer indexed arrays"),(0,n.kt)("li",{parentName:"ul"},"and a suite of fundamental scalar types. ")),(0,n.kt)("h2",{id:"json-category-loaders"},"JSON Category Loaders"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Loader"),(0,n.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/modules/json/api-reference/json-loader"},(0,n.kt)("inlineCode",{parentName:"a"},"JSONLoader"))),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/modules/bson/api-reference/bson-loader"},(0,n.kt)("inlineCode",{parentName:"a"},"BSONLoader"))),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/modules/xml/api-reference/xml-loader"},(0,n.kt)("inlineCode",{parentName:"a"},"XMLLoader"))),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/modules/xml/api-reference/html-loader"},(0,n.kt)("inlineCode",{parentName:"a"},"HTMLLoader"))),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h2",{id:"data-structure"},"Data Structure"),(0,n.kt)("p",null,"Objects and arrays containing other object and arrays or primitive values."))}u.isMDXComponent=!0}}]);