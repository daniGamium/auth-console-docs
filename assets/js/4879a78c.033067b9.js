"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[5889],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return g}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),g=a,f=d["".concat(c,".").concat(g)]||d[g]||u[g]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36423:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(665),a=r(40151),o=(r(59496),r(49613)),i=["components"],l={sidebar_position:1},c="\ud83d\udd17 Integrate Logto in your application",p={unversionedId:"docs/recipes/integrate-logto/README",id:"docs/recipes/integrate-logto/README",title:"\ud83d\udd17 Integrate Logto in your application",description:"We provide a bunch of SDKs to let you integrate Logto with your clients with ease. If the list doesn't cover your desired platform / framework, please file a feature request or contribute a new SDK.",source:"@site/docs/docs/recipes/integrate-logto/README.md",sourceDirName:"docs/recipes/integrate-logto",slug:"/docs/recipes/integrate-logto/",permalink:"/docs/recipes/integrate-logto/",draft:!1,editUrl:"https://github.com/gamiumapp/auth-console-docs/docs/docs/recipes/integrate-logto/README.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Migrate configs from env",permalink:"/docs/tutorials/using-cli/migrate-from-env"},next:{title:"Android",permalink:"/docs/recipes/integrate-logto/android"}},s={},u=[{value:"Native App",id:"native-app",level:2},{value:"Single Page App",id:"single-page-app",level:2},{value:"Traditional Web",id:"traditional-web",level:2},{value:"Machine to Machine",id:"machine-to-machine",level:2}],d={toc:u};function g(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-integrate-logto-in-your-application"},"\ud83d\udd17 Integrate Logto in your application"),(0,o.kt)("p",null,"We provide a bunch of SDKs to let you integrate Logto with your clients with ease. If the list doesn't cover your desired platform / framework, please file a feature request or contribute a new SDK."),(0,o.kt)("h2",{id:"native-app"},"Native App"),(0,o.kt)("p",null,"An app that runs in a native environment."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/recipes/integrate-logto/ios"},"iOS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/recipes/integrate-logto/android"},"Android"))),(0,o.kt)("p",null,"Usually, Native apps need to talk to an API (resource). Please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/recipes/protect-your-api/"},"Protect your API")," for authenticating in your API."),(0,o.kt)("h2",{id:"single-page-app"},"Single Page App"),(0,o.kt)("p",null,"An app that runs in a web browser and dynamically updates data in place."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/recipes/integrate-logto/vanilla-js"},"Vanilla JS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/recipes/integrate-logto/react"},"React")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/recipes/integrate-logto/vue"},"Vue"))),(0,o.kt)("p",null,"Usually, SPAs need to talk to an API (resource). Please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/recipes/protect-your-api/"},"Protect your API")," for authenticating in your API."),(0,o.kt)("h2",{id:"traditional-web"},"Traditional Web"),(0,o.kt)("p",null,"An app that renders and updates pages by the web server alone. E.g., server-side rending."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/recipes/integrate-logto/traditional"},"Traditional Web general guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/recipes/integrate-logto/next-js"},"Next.js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/recipes/integrate-logto/express"},"Express")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/recipes/integrate-logto/go-web"},"Go"))),(0,o.kt)("h2",{id:"machine-to-machine"},"Machine to Machine"),(0,o.kt)("p",null,"An app (usually without UI) that directly talks to resources."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/recipes/integrate-logto/machine-to-machine"},"Machine to Machine"))))}g.isMDXComponent=!0}}]);