"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[1160],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),l=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(a,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(f,s(s({ref:t},p),{},{components:n})):o.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<i;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83256:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var o=n(665),r=n(40151),i=(n(59496),n(49613)),s=["components"],c={sidebar_label:"Connector file structure",sidebar_position:1},a="Connector file structure",l={unversionedId:"docs/recipes/create-your-connector/connector-file-structure",id:"docs/recipes/create-your-connector/connector-file-structure",title:"Connector file structure",description:"Attached is a file tree to demonstrate how are connectors' files organized as a TypeScript project.",source:"@site/docs/docs/recipes/create-your-connector/connector-file-structure.mdx",sourceDirName:"docs/recipes/create-your-connector",slug:"/docs/recipes/create-your-connector/connector-file-structure",permalink:"/docs/recipes/create-your-connector/connector-file-structure",draft:!1,editUrl:"https://github.com/gamiumapp/auth-console-docs/docs/docs/recipes/create-your-connector/connector-file-structure.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Connector file structure",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"\ud83e\uddd1\u200d\ud83d\udd2c Create your connector",permalink:"/docs/recipes/create-your-connector/"},next:{title:"Guide to implement connectors",permalink:"/docs/recipes/create-your-connector/connector-implementation-guide"}},p={},u=[{value:"package.extend.json",id:"packageextendjson",level:2},{value:"README.md",id:"readmemd",level:2},{value:"logo.svg",id:"logosvg",level:2},{value:"logo-dark.svg",id:"logo-darksvg",level:2},{value:"configTemplate.json",id:"configtemplatejson",level:2},{value:"index.ts",id:"indexts",level:2},{value:"index.test.ts",id:"indextestts",level:2},{value:"types.ts",id:"typests",level:2},{value:"constant.ts",id:"constantts",level:2},{value:"mock.ts",id:"mockts",level:2},{value:"utils.ts",id:"utilsts",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"connector-file-structure"},"Connector file structure"),(0,i.kt)("p",null,"Attached is a file tree to demonstrate how are connectors' files organized as a TypeScript project."),(0,i.kt)("p",null,"Files whose name ends up with ",(0,i.kt)("inlineCode",{parentName:"p"},"^")," refer to an optional file, otherwise are required."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ConnectorRootDir/\n\u251c\u2500\u2500 package.extend.json\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 logo.svg\n\u251c\u2500\u2500 logo-dark.svg^\n\u251c\u2500\u2500 docs/\n\u2502   \u2514\u2500\u2500 configTemplate.json\n\u2514\u2500\u2500 src/\n    \u251c\u2500\u2500 index.ts\n    \u251c\u2500\u2500 index.test.ts\n    \u251c\u2500\u2500 types.ts\n    \u251c\u2500\u2500 constant.ts\n    \u251c\u2500\u2500 mock.ts^\n    \u251c\u2500\u2500 utils.ts^\n    \u251c\u2500\u2500 utils.test.ts^\n    \u2514\u2500\u2500 ...\n")),(0,i.kt)("p",null,"Based on the connector file structure, let's go through each file and figure out how they work together as a whole system."),(0,i.kt)("h2",{id:"packageextendjson"},"package.extend.json"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"package.extend.json")," contains configurations of this connector repo. It will be merged with a sharing ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),", which contains common dependencies and attributes."),(0,i.kt)("h2",{id:"readmemd"},"README.md"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"README.md")," is an elaborated guide for setting up the connector's config."),(0,i.kt)("h2",{id:"logosvg"},"logo.svg"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"logo.svg")," is a file that stores the connector's logo in vector image format."),(0,i.kt)("h2",{id:"logo-darksvg"},"logo-dark.svg"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"logo-dark.svg")," file contains vector graphic of connector's dark mode logo."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"See ",(0,i.kt)("a",{parentName:"p",href:"../../references/connectors/#logo"},"connector logo")," to know more about the relationship between ",(0,i.kt)("inlineCode",{parentName:"p"},"logo.svg")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"logo-dark.svg"),".")),(0,i.kt)("h2",{id:"configtemplatejson"},"configTemplate.json"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"configTemplate.json")," gives an example of connector config."),(0,i.kt)("h2",{id:"indexts"},"index.ts"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"index.ts")," is the file for connector class implementation."),(0,i.kt)("h2",{id:"indextestts"},"index.test.ts"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"index.test.ts")," is a file containing corresponding unit tests (UTs) for implementations in ",(0,i.kt)("inlineCode",{parentName:"p"},"index.ts"),"."),(0,i.kt)("h2",{id:"typests"},"types.ts"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"types.ts")," is where you should define variables' types."),(0,i.kt)("h2",{id:"constantts"},"constant.ts"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"constant.ts")," is where you should put constants related to the connector, including endpoints, connector metadata, etc."),(0,i.kt)("h2",{id:"mockts"},"mock.ts"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"mock.ts")," is the file you may put mocked values for testing purposes."),(0,i.kt)("h2",{id:"utilsts"},"utils.ts"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"utils.ts")," is the file where developers put utility functions, and ",(0,i.kt)("inlineCode",{parentName:"p"},"utils.test.ts")," should contain relating UTs."))}m.isMDXComponent=!0}}]);