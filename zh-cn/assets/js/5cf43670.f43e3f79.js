"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[3545],{49613:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return k}});var n=r(59496);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),u=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=u(t.components);return n.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),p=u(r),k=a,m=p["".concat(c,".").concat(k)]||p[k]||d[k]||l;return r?n.createElement(m,i(i({ref:e},s),{},{components:r})):n.createElement(m,i({ref:e},s))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=p;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},43205:function(t,e,r){r.r(e),r.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var n=r(665),a=r(40151),l=(r(59496),r(49613)),i=["components"],o={},c="verifyAndParseCodeFromCallbackUri",u={unversionedId:"sdk/Kotlin/kotlin/io.logto.sdk.core.util/-callback-uri-utils/verify-and-parse-code-from-callback-uri",id:"sdk/Kotlin/kotlin/io.logto.sdk.core.util/-callback-uri-utils/verify-and-parse-code-from-callback-uri",title:"verifyAndParseCodeFromCallbackUri",description:"fun verifyAndParseCodeFromCallbackUri(callbackUri String, state String",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-callback-uri-utils/verify-and-parse-code-from-callback-uri.md",sourceDirName:"sdk/Kotlin/kotlin/io.logto.sdk.core.util/-callback-uri-utils",slug:"/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-callback-uri-utils/verify-and-parse-code-from-callback-uri",permalink:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-callback-uri-utils/verify-and-parse-code-from-callback-uri",draft:!1,editUrl:"https://github.com/gamiumapp/auth-console-docs/i18n/zh-cn/docusaurus-plugin-content-docs/current/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-callback-uri-utils/verify-and-parse-code-from-callback-uri.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"CallbackUriUtils",permalink:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-callback-uri-utils/"},next:{title:"GenerateUtils",permalink:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-generate-utils/"}},s={},d=[{value:"Return",id:"return",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Throws",id:"throws",level:2}],p={toc:d};function k(t){var e=t.components,r=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"verifyandparsecodefromcallbackuri"},"verifyAndParseCodeFromCallbackUri"),(0,l.kt)("p",null,"fun verifyAndParseCodeFromCallbackUri(callbackUri: ",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", redirectUri: ",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", state: ",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),"): ",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String")),(0,l.kt)("p",null,"\u6821\u9a8c Callback URI \u5e76\u4ece\u4e2d\u63d0\u53d6\u6388\u6743\u7801"),(0,l.kt)("h4",{id:"return"},"Return"),(0,l.kt)("p",null,"\u6388\u6743\u7801"),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callbackUri"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u6821\u9a8c\u7684 Callback URI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"redirectUri"),(0,l.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55\u65f6\u4f7f\u7528\u7684\u91cd\u5b9a\u5411 URI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55\u65f6\u4f7f\u7528\u7684 state \u53c2\u6570\u503c")))),(0,l.kt)("h2",{id:"throws"},"Throws"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5f02\u5e38"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.exception/-callback-uri-verification-exception/"},"io.logto.sdk.core.exception.CallbackUriVerificationException"))))))}k.isMDXComponent=!0}}]);