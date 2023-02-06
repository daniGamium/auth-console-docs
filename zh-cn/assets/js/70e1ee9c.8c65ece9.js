"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[4624],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var o=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,g=p["".concat(s,".").concat(d)]||p[d]||f[d]||i;return r?o.createElement(g,c(c({ref:t},u),{},{components:r})):o.createElement(g,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},47448:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return f}});var o=r(665),n=r(40151),i=(r(59496),r(49613)),c=["components"],a={},s=void 0,l={unversionedId:"sdk/Swift/Logto/Protocols/UserInfoProtocol",id:"sdk/Swift/Logto/Protocols/UserInfoProtocol",title:"UserInfoProtocol",description:"PROTOCOL",source:"@site/docs/sdk/Swift/Logto/Protocols/UserInfoProtocol.md",sourceDirName:"sdk/Swift/Logto/Protocols",slug:"/sdk/Swift/Logto/Protocols/UserInfoProtocol",permalink:"/zh-cn/sdk/Swift/Logto/Protocols/UserInfoProtocol",draft:!1,editUrl:"https://github.com/gamiumapp/auth-console-docs/docs/sdk/Swift/Logto/Protocols/UserInfoProtocol.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"NetworkSession",permalink:"/zh-cn/sdk/Swift/Logto/Protocols/NetworkSession"},next:{title:"URLSession",permalink:"/zh-cn/sdk/Swift/Logto/Extensions/URLSession"}},u={},f=[],p={toc:f};function d(e){var t=e.components,r=(0,n.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"PROTOCOL")),(0,i.kt)("h1",{id:"userinfoprotocol"},(0,i.kt)("inlineCode",{parentName:"h1"},"UserInfoProtocol")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public protocol UserInfoProtocol: Codable, Equatable {\n    var name: String? { get }\n    var picture: String? { get }\n    var username: String? { get }\n    var email: String? { get }\n    var emailVerified: String? { get }\n    var phoneNumber: String? { get }\n    var phoneNumberVerified: String? { get }\n}\n")))}d.isMDXComponent=!0}}]);