"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[9467],{4815:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var n=t(85893),i=t(11151);const s={},l="GLBWriter",d={id:"modules/gltf/api-reference/glb-writer",title:"GLBWriter",description:'The GLBWriter is a writer for the GLB binary "envelope" format.',source:"@site/../docs/modules/gltf/api-reference/glb-writer.md",sourceDirName:"modules/gltf/api-reference",slug:"/modules/gltf/api-reference/glb-writer",permalink:"/docs/modules/gltf/api-reference/glb-writer",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/gltf/api-reference/glb-writer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GLTFWriter",permalink:"/docs/modules/gltf/api-reference/gltf-writer"},next:{title:"ImageWriter",permalink:"/docs/modules/images/api-reference/image-writer"}},c={},o=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Data Format",id:"data-format",level:2},{value:"Remarks",id:"remarks",level:2}];function a(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"glbwriter",children:"GLBWriter"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"GLBWriter"}),' is a writer for the GLB binary "envelope" format.']}),"\n",(0,n.jsxs)(r.p,{children:["Note: applications that want to encode GLB-formatted glTF files should normally use the ",(0,n.jsx)(r.code,{children:"GLTFWriter"})," instead. The ",(0,n.jsx)(r.code,{children:"GLBWriter"})," enables applications to save custom data that combines JSON and binary resources."]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Loader"}),(0,n.jsx)(r.th,{children:"Characteristic"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"File Extensions"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:".glb"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"File Type"}),(0,n.jsx)(r.td,{children:"Binary"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Data Format"}),(0,n.jsx)(r.td,{children:"See below"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"File Format"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#glb-file-format-specification",children:"GLB v2"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Supported APIs"}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"encode"}),", ",(0,n.jsx)(r.code,{children:"encodeSync"})]})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"import {GLBWriter} from '@loaders.gl/gltf';\nimport {encodeSync} from '@loaders.gl/core';\n\nconst arrayBuffer = encodeSync(gltf, GLBWriter, options);\n"})}),"\n",(0,n.jsx)(r.h2,{id:"options",children:"Options"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Option"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"N/A"}),(0,n.jsx)(r.td,{children:"N/A"}),(0,n.jsx)(r.td,{children:"N/A"}),(0,n.jsx)(r.td,{children:"N/A"})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"data-format",children:"Data Format"}),"\n",(0,n.jsxs)(r.p,{children:["See ",(0,n.jsx)(r.a,{href:"/docs/modules/gltf/api-reference/glb-loader",children:(0,n.jsx)(r.code,{children:"GLBLoader"})}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["While the ",(0,n.jsx)(r.code,{children:"GLBLoader"})," supports reading both GLB v1 and v2, only GLB v2 can be written."]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>d,a:()=>l});var n=t(67294);const i={},s=n.createContext(i);function l(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);