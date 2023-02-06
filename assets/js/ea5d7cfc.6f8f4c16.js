"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[9137],{49613:function(t,n,e){e.d(n,{Zo:function(){return d},kt:function(){return m}});var r=e(59496);function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){i(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function l(t,n){if(null==t)return{};var e,r,i=function(t,n){if(null==t)return{};var e,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var s=r.createContext({}),p=function(t){var n=r.useContext(s),e=n;return t&&(e="function"==typeof t?t(n):a(a({},n),t)),e},d=function(t){var n=p(t.components);return r.createElement(s.Provider,{value:n},t.children)},k={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(t,n){var e=t.components,i=t.mdxType,o=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),g=p(e),m=i,c=g["".concat(s,".").concat(m)]||g[m]||k[m]||o;return e?r.createElement(c,a(a({ref:n},d),{},{components:e})):r.createElement(c,a({ref:n},d))}));function m(t,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof t||i){var o=e.length,a=new Array(o);a[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=t,l.mdxType="string"==typeof t?t:i,a[1]=l;for(var p=2;p<o;p++)a[p]=e[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,e)}g.displayName="MDXCreateElement"},18283:function(t,n,e){e.r(n),e.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return k}});var r=e(665),i=e(40151),o=(e(59496),e(49613)),a=["components"],l={},s="OidcConfigResponse",p={unversionedId:"sdk/Kotlin/kotlin/io.logto.sdk.core.type/-oidc-config-response/index",id:"sdk/Kotlin/kotlin/io.logto.sdk.core.type/-oidc-config-response/index",title:"OidcConfigResponse",description:"data class OidcConfigResponse(val authorizationEndpoint String, val endSessionEndpoint String, val issuer String)",source:"@site/docs/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-oidc-config-response/index.md",sourceDirName:"sdk/Kotlin/kotlin/io.logto.sdk.core.type/-oidc-config-response",slug:"/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-oidc-config-response/",permalink:"/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-oidc-config-response/",draft:!1,editUrl:"https://github.com/gamiumapp/auth-console-docs/docs/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-oidc-config-response/index.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"IdTokenClaims",permalink:"/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-id-token-claims/"},next:{title:"RefreshTokenTokenResponse",permalink:"/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-refresh-token-token-response/"}},d={},k=[{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2}],g={toc:k};function m(t){var n=t.components,e=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},g,e,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"oidcconfigresponse"},"OidcConfigResponse"),(0,o.kt)("p",null,"data class OidcConfigResponse(val authorizationEndpoint: ",(0,o.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val tokenEndpoint: ",(0,o.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val endSessionEndpoint: ",(0,o.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val jwksUri: ",(0,o.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val issuer: ",(0,o.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val revocationEndpoint: ",(0,o.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),")"),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"OidcConfigResponse"),(0,o.kt)("td",{parentName:"tr",align:null},"fun OidcConfigResponse(authorizationEndpoint: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", tokenEndpoint: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", endSessionEndpoint: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", jwksUri: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", issuer: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", revocationEndpoint: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),")")))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"authorizationEndpoint"),(0,o.kt)("td",{parentName:"tr",align:null},"val authorizationEndpoint: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"endSessionEndpoint"),(0,o.kt)("td",{parentName:"tr",align:null},"val endSessionEndpoint: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"issuer"),(0,o.kt)("td",{parentName:"tr",align:null},"val issuer: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"jwksUri"),(0,o.kt)("td",{parentName:"tr",align:null},"val jwksUri: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"revocationEndpoint"),(0,o.kt)("td",{parentName:"tr",align:null},"val revocationEndpoint: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"tokenEndpoint"),(0,o.kt)("td",{parentName:"tr",align:null},"val tokenEndpoint: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))))))}m.isMDXComponent=!0}}]);