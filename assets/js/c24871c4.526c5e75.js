"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[8046],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(a),c=r,k=s["".concat(d,".").concat(c)]||s[c]||u[c]||l;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1765:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={},i="CSVLoader",o={unversionedId:"modules/csv/api-reference/csv-loader",id:"modules/csv/api-reference/csv-loader",title:"CSVLoader",description:"Streaming loader for comma-separated value and delimiter-separated value encoded files.",source:"@site/../docs/modules/csv/api-reference/csv-loader.md",sourceDirName:"modules/csv/api-reference",slug:"/modules/csv/api-reference/csv-loader",permalink:"/docs/modules/csv/api-reference/csv-loader",draft:!1,editUrl:"https://github.com/uber-web/loaders.gl/tree/master/website/../docs/modules/csv/api-reference/csv-loader.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BSONWriter",permalink:"/docs/modules/bson/api-reference/bson-writer"},next:{title:"DracoLoader",permalink:"/docs/modules/draco/api-reference/draco-loader"}},d={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2}],m={toc:p},s="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"csvloader"},"CSVLoader"),(0,r.kt)("p",null,"Streaming loader for comma-separated value and ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Delimiter-separated_values"},"delimiter-separated value")," encoded files."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Loader"),(0,r.kt)("th",{parentName:"tr",align:null},"Characteristic"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"File Extension"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".csv"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".tsv"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".dsv"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MIME Types"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"text/csv"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"text/tab-separated-values"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"text/dsv"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"File Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"File Format"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc4180"},"RFC4180"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data Format"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/specifications/category-table"},"Classic Table"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Supported APIs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"load"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"parse"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"parseSync"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"parseInBatches"))))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {CSVLoader} from '@loaders.gl/csv';\nimport {load} from '@loaders.gl/core';\n\nconst data = await load(url, CSVLoader);\n// or\nconst data = await load(url, CSVLoader, {csv: options});\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"csv.shape")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object-row-table")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'object-row-table'")," rows are objects (keyed by colum name). ",(0,r.kt)("inlineCode",{parentName:"td"},"'array-row-table'")," rows are arrays of values."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"csv.header")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean ","|"," String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"auto")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the first row of parsed data will be interpreted as field names. If ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),", the first row is interpreted as data."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"csv.columnPrefix")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"column")),(0,r.kt)("td",{parentName:"tr",align:null},"The prefix to use when naming columns for CSV files with no header. Defaults to 'column1', 'column2' etc."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"csv.delimiter")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"auto-detect"),(0,r.kt)("td",{parentName:"tr",align:null},"The delimiting character."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"csv.newline")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"auto-detect"),(0,r.kt)("td",{parentName:"tr",align:null},"The newline sequence. Must be ",(0,r.kt)("inlineCode",{parentName:"td"},"\\r"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"\\n"),", or ",(0,r.kt)("inlineCode",{parentName:"td"},"\\r\\n"),"."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"csv.quoteChar")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"')),(0,r.kt)("td",{parentName:"tr",align:null},"The character used to quote fields."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"csv.escapeChar")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"')),(0,r.kt)("td",{parentName:"tr",align:null},"The character used to escape the quote character within a field."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"csv.dynamicTyping")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", numeric and boolean data values will be converted to their type (instead if strings. ",(0,r.kt)("strong",{parentName:"td"},"Note"),": if you disable ",(0,r.kt)("inlineCode",{parentName:"td"},"dynamicTyping"),", you need to explicitly set ",(0,r.kt)("inlineCode",{parentName:"td"},"header")," to a boolean value. Otherwise, ",(0,r.kt)("inlineCode",{parentName:"td"},"header: 'auto'")," would automatically treat the first row as a header."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"csv.comments")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},'Comment indicator (for example, "#" or "//"). Lines starting with this string are skipped.'),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"csv.skipEmptyLines")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", lines that are completely empty (those which evaluate to an empty string) will be skipped. If set to ",(0,r.kt)("inlineCode",{parentName:"td"},"'greedy'"),", lines that don't have any content (those which have only whitespace after parsing) will also be skipped."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"csv.transform")),(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"A function to apply on each value. The function receives the value as its first argument and the column number or header name when enabled as its second argument. The return value of the function will replace the value it received. The transform function is applied before dynamicTyping."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"csv.delimitersToGuess")),(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null},"`[',', '\\t', '"),(0,r.kt)("td",{parentName:"tr",align:null},"', ';']`"),(0,r.kt)("td",{parentName:"tr",align:null},"An array of delimiters to guess from if the ",(0,r.kt)("inlineCode",{parentName:"td"},"delimiter")," option is not set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"csv.fastMode")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"auto-detect"),(0,r.kt)("td",{parentName:"tr",align:null},'Force set "fast mode". Fast mode speeds up parsing significantly for large inputs but only works when the input has no quoted fields. Fast mode will be auto enabled if no ',(0,r.kt)("inlineCode",{parentName:"td"},'"')," characters appear in the input."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"Remarks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A complication with the CSV format is that CSV files can come with or without an initial header line. Use ",(0,r.kt)("inlineCode",{parentName:"li"},"options.csv.header")," to specify how to handle the first line."),(0,r.kt)("li",{parentName:"ul"},"Many options are passed on to papaparse, so the ",(0,r.kt)("a",{parentName:"li",href:"https://www.papaparse.com/docs#config"},"papaparse docs")," can serve as a source for more information.")))}u.isMDXComponent=!0}}]);