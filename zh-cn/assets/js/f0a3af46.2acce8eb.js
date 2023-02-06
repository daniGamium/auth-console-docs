"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[5370],{49613:function(t,n,o){o.d(n,{Zo:function(){return p},kt:function(){return g}});var e=o(59496);function r(t,n,o){return n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}function a(t,n){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.push.apply(o,e)}return o}function i(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){r(t,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(o,n))}))}return t}function l(t,n){if(null==t)return{};var o,e,r=function(t,n){if(null==t)return{};var o,e,r={},a=Object.keys(t);for(e=0;e<a.length;e++)o=a[e],n.indexOf(o)>=0||(r[o]=t[o]);return r}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(e=0;e<a.length;e++)o=a[e],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var d=e.createContext({}),c=function(t){var n=e.useContext(d),o=n;return t&&(o="function"==typeof t?t(n):i(i({},n),t)),o},p=function(t){var n=c(t.components);return e.createElement(d.Provider,{value:n},t.children)},s={inlineCode:"code",wrapper:function(t){var n=t.children;return e.createElement(e.Fragment,{},n)}},k=e.forwardRef((function(t,n){var o=t.components,r=t.mdxType,a=t.originalType,d=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),k=c(o),g=r,m=k["".concat(d,".").concat(g)]||k[g]||s[g]||a;return o?e.createElement(m,i(i({ref:n},p),{},{components:o})):e.createElement(m,i({ref:n},p))}));function g(t,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var a=o.length,i=new Array(a);i[0]=k;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return e.createElement.apply(null,i)}return e.createElement.apply(null,o)}k.displayName="MDXCreateElement"},46850:function(t,n,o){o.r(n),o.d(n,{assets:function(){return p},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var e=o(665),r=o(40151),a=(o(59496),o(49613)),i=["components"],l={},d="LogtoClient",c={unversionedId:"sdk/Kotlin/android/io.logto.sdk.android/-logto-client/index",id:"sdk/Kotlin/android/io.logto.sdk.android/-logto-client/index",title:"LogtoClient",description:"open class LogtoClient(val logtoConfig Application)",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/index.md",sourceDirName:"sdk/Kotlin/android/io.logto.sdk.android/-logto-client",slug:"/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/",permalink:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/",draft:!1,editUrl:"https://github.com/gamiumapp/auth-console-docs/i18n/zh-cn/docusaurus-plugin-content-docs/current/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/index.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"io.logto.sdk.android",permalink:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android/"},next:{title:"getAccessToken",permalink:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/get-access-token-constructor"}},p={},s=[{value:"Constructors",id:"constructors",level:2},{value:"Functions",id:"functions",level:2},{value:"Properties",id:"properties",level:2}],k={toc:s};function g(t){var n=t.components,o=(0,r.Z)(t,i);return(0,a.kt)("wrapper",(0,e.Z)({},k,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"logtoclient"},"LogtoClient"),(0,a.kt)("p",null,"open class LogtoClient(val logtoConfig: ",(0,a.kt)("a",{parentName:"p",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.type/-logto-config/"},"LogtoConfig"),", application: ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/kotlin/android/app/Application.html"},"Application"),")"),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6982\u8981"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LogtoClient"),(0,a.kt)("td",{parentName:"tr",align:null},"fun LogtoClient(logtoConfig: ",(0,a.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.type/-logto-config/"},"LogtoConfig"),", application: ",(0,a.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/kotlin/android/app/Application.html"},"Application"),")")))),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6982\u8981"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"get-access-token-constructor"},"getAccessToken")),(0,a.kt)("td",{parentName:"tr",align:null},"fun ",(0,a.kt)("a",{parentName:"td",href:"get-access-token-constructor"},"getAccessToken"),"(completion: ",(0,a.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.completion/-completion/"},"Completion"),"<",(0,a.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.exception/-logto-exception/"},"LogtoException"),", ",(0,a.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.type/-access-token/"},"AccessToken"),">",")",(0,a.kt)("br",null),"fun ",(0,a.kt)("a",{parentName:"td",href:"get-access-token-constructor"},"getAccessToken"),"(resource: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),"?, completion: ",(0,a.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.completion/-completion/"},"Completion"),"<",(0,a.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.exception/-logto-exception/"},"LogtoException"),", ",(0,a.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.type/-access-token/"},"AccessToken"),">",")",(0,a.kt)("br",null),"\u83b7\u53d6\u8bbf\u95ee\u4ee4\u724c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/get-id-token-claims"},"getIdTokenClaims")),(0,a.kt)("td",{parentName:"tr",align:null},"fun ",(0,a.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/get-id-token-claims"},"getIdTokenClaims"),"(completion: ",(0,a.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.completion/-completion/"},"Completion"),"<",(0,a.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.exception/-logto-exception/"},"LogtoException"),", IdTokenClaims",">",")",(0,a.kt)("br",null),"\u83b7\u53d6 ID \u4ee4\u724c\u4e2d\u6240\u5305\u542b\u7684\u4fe1\u606f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/sign-in"},"signIn")),(0,a.kt)("td",{parentName:"tr",align:null},"fun ",(0,a.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/sign-in"},"signIn"),"(context: ",(0,a.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/kotlin/android/app/Activity.html"},"Activity"),", redirectUri: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", completion: ",(0,a.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.completion/-empty-completion/"},"EmptyCompletion"),"<",(0,a.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.exception/-logto-exception/"},"LogtoException"),">",")",(0,a.kt)("br",null),"\u767b\u5f55")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/sign-out"},"signOut")),(0,a.kt)("td",{parentName:"tr",align:null},"fun ",(0,a.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/sign-out"},"signOut"),"(completion: ",(0,a.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.completion/-empty-completion/"},"EmptyCompletion"),"<",(0,a.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.exception/-logto-exception/"},"LogtoException"),">","? = null)",(0,a.kt)("br",null),"\u767b\u51fa")))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6982\u8981"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/is-authenticated"},"isAuthenticated")),(0,a.kt)("td",{parentName:"tr",align:null},"val ",(0,a.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/is-authenticated"},"isAuthenticated"),": ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"},"Boolean"),(0,a.kt)("br",null),"\u7528\u6237\u662f\u5426\u5df2\u8ba4\u8bc1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/logto-config"},"logtoConfig")),(0,a.kt)("td",{parentName:"tr",align:null},"val ",(0,a.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/logto-config"},"logtoConfig"),": ",(0,a.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.type/-logto-config/"},"LogtoConfig"),(0,a.kt)("br",null),"Logto \u5ba2\u6237\u7aef\u914d\u7f6e")))))}g.isMDXComponent=!0}}]);