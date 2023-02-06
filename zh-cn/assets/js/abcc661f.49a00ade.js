"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[9273],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80044:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(665),a=n(40151),o=(n(59496),n(49613)),i=["components"],l={},c=void 0,u={unversionedId:"sdk/Swift/Logto/Structs/IdTokenClaims",id:"sdk/Swift/Logto/Structs/IdTokenClaims",title:"IdTokenClaims",description:"\u7ed3\u6784\u4f53",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/sdk/Swift/Logto/Structs/IdTokenClaims.md",sourceDirName:"sdk/Swift/Logto/Structs",slug:"/sdk/Swift/Logto/Structs/IdTokenClaims",permalink:"/zh-cn/sdk/Swift/Logto/Structs/IdTokenClaims",draft:!1,editUrl:"https://github.com/gamiumapp/auth-console-docs/i18n/zh-cn/docusaurus-plugin-content-docs/current/sdk/Swift/Logto/Structs/IdTokenClaims.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"LogtoUtilities",permalink:"/zh-cn/sdk/Swift/Logto/Enums/LogtoUtilities"},next:{title:"JwtHeader",permalink:"/zh-cn/sdk/Swift/Logto/Structs/JwtHeader"}},s={},p=[{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"<code>sub</code>",id:"sub",level:3},{value:"<code>atHash</code>",id:"athash",level:3},{value:"<code>aud</code>",id:"aud",level:3},{value:"<code>exp</code>",id:"exp",level:3},{value:"<code>iat</code>",id:"iat",level:3},{value:"<code>iss</code>",id:"iss",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u6784\u4f53")),(0,o.kt)("h1",{id:"idtokenclaims"},(0,o.kt)("inlineCode",{parentName:"h1"},"IdTokenClaims")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public struct IdTokenClaims: Codable, Equatable\n")),(0,o.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,o.kt)("h3",{id:"sub"},(0,o.kt)("inlineCode",{parentName:"h3"},"sub")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public let sub: String\n")),(0,o.kt)("h3",{id:"athash"},(0,o.kt)("inlineCode",{parentName:"h3"},"atHash")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public let atHash: String?\n")),(0,o.kt)("h3",{id:"aud"},(0,o.kt)("inlineCode",{parentName:"h3"},"aud")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public let aud: String\n")),(0,o.kt)("h3",{id:"exp"},(0,o.kt)("inlineCode",{parentName:"h3"},"exp")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public let exp: Int64\n")),(0,o.kt)("h3",{id:"iat"},(0,o.kt)("inlineCode",{parentName:"h3"},"iat")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public let iat: Int64\n")),(0,o.kt)("h3",{id:"iss"},(0,o.kt)("inlineCode",{parentName:"h3"},"iss")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public let iss: String\n")))}m.isMDXComponent=!0}}]);