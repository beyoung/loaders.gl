"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[3153],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(a),u=i,c=d["".concat(m,".").concat(u)]||d[u]||g[u]||r;return a?n.createElement(c,l(l({ref:t},s),{},{components:a})):n.createElement(c,l({ref:t},s))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},91630:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={},l="Image Utilities",o={unversionedId:"modules/images/api-reference/parsed-image-api",id:"modules/images/api-reference/parsed-image-api",title:"Image Utilities",description:"A small set of image utility functions functions intended to help write image handling code that works across platforms.",source:"@site/../docs/modules/images/api-reference/parsed-image-api.md",sourceDirName:"modules/images/api-reference",slug:"/modules/images/api-reference/parsed-image-api",permalink:"/docs/modules/images/api-reference/parsed-image-api",draft:!1,editUrl:"https://github.com/uber-web/loaders.gl/tree/master/website/../docs/modules/images/api-reference/parsed-image-api.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/modules/images/"},next:{title:"Binary Image Utilities",permalink:"/docs/modules/images/api-reference/binary-image-api"}},m={},p=[{value:"Usage",id:"usage",level:2},{value:"Functions",id:"functions",level:2},{value:"getSupportedImageTypes(): <code>Promise&lt;Set&lt;string&gt;&gt;</code>",id:"getsupportedimagetypes-promisesetstring",level:3},{value:"isImageTypeSupported(mimeType : string): boolean",id:"isimagetypesupportedmimetype--string-boolean",level:3},{value:"isImage(image : any): boolean",id:"isimageimage--any-boolean",level:3},{value:"getImageType(image : any): String",id:"getimagetypeimage--any-string",level:3},{value:"getImageData(image : any): Object",id:"getimagedataimage--any-object",level:3}],s={toc:p},d="wrapper";function g(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"image-utilities"},"Image Utilities"),(0,i.kt)("p",null,"A small set of image utility functions functions intended to help write image handling code that works across platforms."),(0,i.kt)("p",null,"Background: The image returned by the ",(0,i.kt)("a",{parentName:"p",href:"/docs/modules/images/api-reference/image-loader"},(0,i.kt)("inlineCode",{parentName:"a"},"ImageLoader"))," depends on the environment, i.e. whether the application is running in a new or old browser, or under Node.js."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"E.g., the ",(0,i.kt)("inlineCode",{parentName:"p"},"getImageData")," method enables the application to get width, height and pixel data from an image returned by the ",(0,i.kt)("inlineCode",{parentName:"p"},"ImageLoader")," in a platform independent way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {ImageLoader, getImageSize, getImageData} from `@loaders.gl/images`;\nimport {load} from `@loaders.gl/core`;\n\nconst image = await load(URL, ImageLoader);\n\n// Get an image data object regardless of whether the image is already an `Image`, `ImageBitmap` or already an image data object\nconst imageData = getImageData(image);\nconsole.log(imageData.width, imageData.height, imageData.data);\n")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"getsupportedimagetypes-promisesetstring"},"getSupportedImageTypes(): ",(0,i.kt)("inlineCode",{parentName:"h3"},"Promise<Set<string>>")),(0,i.kt)("p",null,"Returns a promise that resolves to a ",(0,i.kt)("inlineCode",{parentName:"p"},"Set")," of MIME types that ",(0,i.kt)("inlineCode",{parentName:"p"},"@loaders.gl/images")," can parse on the current platform (depends on the current browser, or whether the app is running under Node.js)."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Asynchronous testing of supported image formats is more reliable and is preferred in browsers. A small caveat is that some formats like AVIF and WebP support different options in terms of bit-depths and packing and this function just tests for basic image support.")),(0,i.kt)("h3",{id:"isimagetypesupportedmimetype--string-boolean"},"isImageTypeSupported(mimeType : string): boolean"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mimeType"),": value to test")),(0,i.kt)("p",null,"Synchronously checks if an image type is supported. "),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if ",(0,i.kt)("inlineCode",{parentName:"p"},"mimeType")," is one of the MIME types that ",(0,i.kt)("inlineCode",{parentName:"p"},"@loaders.gl/images")," can use on the current platform (depends on browser, or whether running under Node.js)."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Run-time checks for some recent image formats such as AVIF (and to a lesser extent, WEBP) can not reliably be done using synchronous techniques. If your code allows for asynchronous calls, use ",(0,i.kt)("inlineCode",{parentName:"p"},"getSupportedImageTypes()")," for the most accurate results.")),(0,i.kt)("h3",{id:"isimageimage--any-boolean"},"isImage(image : any): boolean"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"image"),": An image returned by an image category loader, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"ImageLoader"))),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if ",(0,i.kt)("inlineCode",{parentName:"p"},"image")," is one of the types that ",(0,i.kt)("inlineCode",{parentName:"p"},"@loaders.gl/images")," can return."),(0,i.kt)("h3",{id:"getimagetypeimage--any-string"},"getImageType(image : any): String"),(0,i.kt)("p",null,"Returns the type of an image. Can be used when loading images with the default setting of ",(0,i.kt)("inlineCode",{parentName:"p"},"options.type: 'auto'")," to discover what type was actually returned."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"image"),": An image returned by an image category loader, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"ImageLoader"))),(0,i.kt)("p",null,"Returns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a string describing the type of the image.")),(0,i.kt)("p",null,"Throws"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"if ",(0,i.kt)("inlineCode",{parentName:"li"},"image")," is not of a recognized type.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"JavaScript Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:null},"Image data object: ",(0,i.kt)("inlineCode",{parentName:"td"},"data"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"width"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"height")," .."),(0,i.kt)("td",{parentName:"tr",align:null},"Node.js representation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"imagebitmap")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ImageBitmap")),(0,i.kt)("td",{parentName:"tr",align:null},"The newer HTML5 image class (modern browsers only)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"image")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Image")," aka ",(0,i.kt)("inlineCode",{parentName:"td"},"HTMLImageElement")),(0,i.kt)("td",{parentName:"tr",align:null},"More widely supported (but less performant and flexible) image class")))),(0,i.kt)("h3",{id:"getimagedataimage--any-object"},"getImageData(image : any): Object"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"image"),": An image returned by an image category loader, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"ImageLoader"))),(0,i.kt)("p",null,"Returns and image data object with the following fields"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data")," typed array containing the pixels of the image"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"width")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"height"))),(0,i.kt)("p",null,"Throws"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"if ",(0,i.kt)("inlineCode",{parentName:"li"},"image")," is not of a recognized type.")))}g.isMDXComponent=!0}}]);