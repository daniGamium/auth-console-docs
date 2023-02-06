"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[6361],{49613:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return p}});var n=r(59496);function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e){if(null==t)return{};var r,n,l=function(t,e){if(null==t)return{};var r,n,l={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(l[r]=t[r]);return l}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(l[r]=t[r])}return l}var c=n.createContext({}),u=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=u(t.components);return n.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var r=t.components,l=t.mdxType,i=t.originalType,c=t.parentName,s=a(t,["components","mdxType","originalType","parentName"]),k=u(r),p=l,f=k["".concat(c,".").concat(p)]||k[p]||d[p]||i;return r?n.createElement(f,o(o({ref:e},s),{},{components:r})):n.createElement(f,o({ref:e},s))}));function p(t,e){var r=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var i=r.length,o=new Array(i);o[0]=k;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=t,a.mdxType="string"==typeof t?t:l,o[1]=a;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},27807:function(t,e,r){r.r(e),r.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return d}});var n=r(665),l=r(40151),i=(r(59496),r(49613)),o=["components"],a={},c="CallbackUriUtils",u={unversionedId:"sdk/Kotlin/kotlin/io.logto.sdk.core.util/-callback-uri-utils/index",id:"sdk/Kotlin/kotlin/io.logto.sdk.core.util/-callback-uri-utils/index",title:"CallbackUriUtils",description:"object CallbackUriUtils",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-callback-uri-utils/index.md",sourceDirName:"sdk/Kotlin/kotlin/io.logto.sdk.core.util/-callback-uri-utils",slug:"/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-callback-uri-utils/",permalink:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-callback-uri-utils/",draft:!1,editUrl:"https://github.com/gamiumapp/auth-console-docs/i18n/zh-cn/docusaurus-plugin-content-docs/current/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-callback-uri-utils/index.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"io.logto.sdk.core.util",permalink:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.util/"},next:{title:"verifyAndParseCodeFromCallbackUri",permalink:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-callback-uri-utils/verify-and-parse-code-from-callback-uri"}},s={},d=[{value:"Functions",id:"functions",level:2}],k={toc:d};function p(t){var e=t.components,r=(0,l.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},k,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"callbackuriutils"},"CallbackUriUtils"),(0,i.kt)("p",null,"object CallbackUriUtils"),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:null},"\u6982\u8981"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-callback-uri-utils/verify-and-parse-code-from-callback-uri"},"verifyAndParseCodeFromCallbackUri")),(0,i.kt)("td",{parentName:"tr",align:null},"fun ",(0,i.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-callback-uri-utils/verify-and-parse-code-from-callback-uri"},"verifyAndParseCodeFromCallbackUri"),"(callbackUri: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", redirectUri: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", state: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),"): ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),(0,i.kt)("br",null),"\u6821\u9a8c Callback URI \u5e76\u4ece\u4e2d\u63d0\u53d6\u6388\u6743\u7801")))))}p.isMDXComponent=!0}}]);