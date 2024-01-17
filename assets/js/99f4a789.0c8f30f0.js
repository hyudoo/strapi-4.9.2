"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7738],{2870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(3117),a=(n(7294),n(3905));const i={},o="Linking the Strapi Design System",s={unversionedId:"core/admin/link-strapi-design-system",id:"core/admin/link-strapi-design-system",title:"Linking the Strapi Design System",description:"Follow these steps to use a local version of the Strapi design system with the Strapi monorepo",source:"@site/docs/core/admin/link-strapi-design-system.md",sourceDirName:"core/admin",slug:"/core/admin/link-strapi-design-system",permalink:"/core/admin/link-strapi-design-system",draft:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/core/admin/link-strapi-design-system.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Introduction",permalink:"/"},next:{title:"Core",permalink:"/category/core"}},p={},l=[{value:"Relative path",id:"relative-path",level:3},{value:"Yarn link",id:"yarn-link",level:3}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"linking-the-strapi-design-system"},"Linking the Strapi Design System"),(0,a.kt)("p",null,"Follow these steps to use a local version of the Strapi design system with the Strapi monorepo"),(0,a.kt)("p",null,"First, run ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn build")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"strapi-design-system/packages/strapi-design-system")," to generate the bundle."),(0,a.kt)("p",null,"In your copy of Strapi, you can link the design system using either a ",(0,a.kt)("a",{parentName:"p",href:"#relative-path"},"relative path")," or ",(0,a.kt)("a",{parentName:"p",href:"#yarn-link"},"yarn link"),"."),(0,a.kt)("h3",{id:"relative-path"},"Relative path"),(0,a.kt)("p",null,"Replace the version number in both ",(0,a.kt)("inlineCode",{parentName:"p"},"strapi/packages/core/admin/package.json")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"strapi/packages/core/helper-plugin/package.json")," with the relative path to your copy of the design system:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"@strapi/design-system": "link:../../../../strapi-design-system/packages/strapi-design-system"\n')),(0,a.kt)("h3",{id:"yarn-link"},"Yarn link"),(0,a.kt)("p",null,"Alternatively, you can use ",(0,a.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/lang/en/docs/cli/link/"},(0,a.kt)("inlineCode",{parentName:"a"},"yarn link"))," by first running ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn link")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"strapi-design-system/packages/design-system")," and then ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn link @strapi/design-system")," in both ",(0,a.kt)("inlineCode",{parentName:"p"},"strapi/packages/core/admin")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"strapi/packages/core/helper-plugin"),". With this approach, no changes need to be made to the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")),(0,a.kt)("p",null,"Once the link is setup, run the following command from the root of the monorepo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn clean && yarn setup\n")))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,y=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);