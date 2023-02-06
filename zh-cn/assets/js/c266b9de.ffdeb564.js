"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[6572],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||l[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49999:function(e,t,n){n.d(t,{ZP:function(){return p}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),i=["components"],c={toc:[{value:"\u83b7\u53d6 Logto \u7684 OIDC \u914d\u7f6e",id:"\u83b7\u53d6-logto-\u7684-oidc-\u914d\u7f6e",level:3}]};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u83b7\u53d6-logto-\u7684-oidc-\u914d\u7f6e"},"\u83b7\u53d6 Logto \u7684 OIDC \u914d\u7f6e"),(0,a.kt)("p",null,"\u4f60\u5c06\u9700\u8981\u4e00\u4e2a JWK \u516c\u94a5\u96c6\u548c\u4ee4\u724c\u9881\u53d1\u8005\u6807\u8bc6\u6765\u9a8c\u8bc1\u6240\u6536\u5230\u7684 JWS \u4ee4\u724c\u7684\u7b7e\u540d\u53ca\u6765\u6e90\u7684\u6709\u6548\u6027\u3002\u6240\u6709\u6700\u65b0\u7684 Logto \u516c\u5171\u6743\u9650\u914d\u7f6e\u4fe1\u606f\u90fd\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"https://<your-logto-domain>/oidc/.well-known/openid-configuration")," \u4e2d\u627e\u5230\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"https://logto.dev/oidc/.well-known/openid-configuration"),"\u3002\u4e0d\u53ef\u4ee5\u5728\u8fd4\u56de\u6b63\u6587\u4e2d\u627e\u5230\u4ee5\u4e0b\u4e24\u4e2a\u5b57\u6bb5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jwks_uri": "https://logto.dev/oidc/jwks",\n  "issuer": "https://logto.dev/oidc"\n}\n')))}p.isMDXComponent=!0},56612:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),i=n(49999),c=["components"],p={sidebar_label:"Node (Express)"},s="\u4fdd\u62a4\u4f60\u7684 Node (Express) API",u={unversionedId:"docs/recipes/protect-your-api/node",id:"docs/recipes/protect-your-api/node",title:"\u4fdd\u62a4\u4f60\u7684 Node (Express) API",description:"\u5728\u7ee7\u7eed\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u4f60\u5df2\u7ecf\u5728 Logto \u7ba1\u7406\u63a7\u5236\u53f0\u4e2d\u6ce8\u518c\u4e86\u4f60\u7684 API \u8d44\u6e90\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/recipes/protect-your-api/node.mdx",sourceDirName:"docs/recipes/protect-your-api",slug:"/docs/recipes/protect-your-api/node",permalink:"/zh-cn/docs/recipes/protect-your-api/node",draft:!1,editUrl:"https://github.com/gamiumapp/auth-console-docs/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/recipes/protect-your-api/node.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Node (Express)"},sidebar:"docsSidebar",previous:{title:"\u2694\ufe0f \u4fdd\u62a4\u4f60\u7684 API",permalink:"/zh-cn/docs/recipes/protect-your-api/"},next:{title:"Python",permalink:"/zh-cn/docs/recipes/protect-your-api/python"}},l={},d=[{value:"\u4ece\u8bf7\u6c42\u5934\u4e2d\u63d0\u53d6\u4ee4\u724c",id:"\u4ece\u8bf7\u6c42\u5934\u4e2d\u63d0\u53d6\u4ee4\u724c",level:2},{value:"\u9a8c\u8bc1\u4ee4\u724c",id:"\u9a8c\u8bc1\u4ee4\u724c",level:2},{value:"\u6dfb\u52a0 jose \u5230\u4f60\u7684\u4f9d\u8d56\u4e2d",id:"\u6dfb\u52a0-jose-\u5230\u4f60\u7684\u4f9d\u8d56\u4e2d",level:3},{value:"\u6dfb\u52a0\u4e00\u4e2a\u6743\u9650\u6821\u9a8c\u7684\u4e2d\u95f4\u4ef6",id:"\u6dfb\u52a0\u4e00\u4e2a\u6743\u9650\u6821\u9a8c\u7684\u4e2d\u95f4\u4ef6",level:3},{value:"\u52a0\u8f7d\u4e2d\u95f4\u4ef6",id:"\u52a0\u8f7d\u4e2d\u95f4\u4ef6",level:2}],m={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4fdd\u62a4\u4f60\u7684-node-express-api"},"\u4fdd\u62a4\u4f60\u7684 Node (Express) API"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5728\u7ee7\u7eed\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u4f60\u5df2\u7ecf\u5728",(0,a.kt)("a",{parentName:"p",href:"/zh-cn/docs/recipes/protect-your-api/#register-the-api-resources-using-logto-admin-console"}," Logto \u7ba1\u7406\u63a7\u5236\u53f0\u4e2d\u6ce8\u518c\u4e86\u4f60\u7684 API \u8d44\u6e90"),"\u3002")),(0,a.kt)("h2",{id:"\u4ece\u8bf7\u6c42\u5934\u4e2d\u63d0\u53d6\u4ee4\u724c"},"\u4ece\u8bf7\u6c42\u5934\u4e2d\u63d0\u53d6\u4ee4\u724c"),(0,a.kt)("p",null,"\u6388\u6743\u8bf7\u6c42\u5e94\u5305\u542b\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization")," \u8bf7\u6c42\u5934\uff0c\u5176\u5185\u5bb9\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"Bearer <\u6388\u6743\u4ee4\u724c>"),"\u3002\u4f60\u9700\u8981\u4ece\u8bf7\u6c42\u5934\u4e2d\u63d0\u53d6\u8be5\u6388\u6743\u4ee4\u724c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// auth_middleware.ts\n\nimport { IncomingHttpHeaders } from 'http';\n\nconst extractBearerTokenFromHeaders = ({ authorization }: IncomingHttpHeaders) => {\n  if (!authorization) {\n    throw new Error({ code: 'auth.authorization_header_missing', status: 401 });\n  }\n\n  if (!authorization.startsWith('Bearer')) {\n    throw new Error({ code: 'auth.authorization_token_type_not_supported', status: 401 });\n  }\n\n  return authorization.slice(bearerTokenIdentifier.length + 1);\n};\n")),(0,a.kt)("h2",{id:"\u9a8c\u8bc1\u4ee4\u724c"},"\u9a8c\u8bc1\u4ee4\u724c"),(0,a.kt)("p",null,"\u5728\u672c\u4e8b\u4f8b\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/panva/jose"},"jose")," \u5305\u6765\u9a8c\u8bc1\u4ee4\u724c\u7684\u7b7e\u540d\u3001\u5230\u671f\u72b6\u6001\u548c\u6240\u9700\u7684\u58f0\u660e\u53d8\u91cf\u3002"),(0,a.kt)("h3",{id:"\u6dfb\u52a0-jose-\u5230\u4f60\u7684\u4f9d\u8d56\u4e2d"},"\u6dfb\u52a0 jose \u5230\u4f60\u7684\u4f9d\u8d56\u4e2d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm i jose --save\n")),(0,a.kt)(i.ZP,{mdxType:"RetrieveOidcConfiguration"}),(0,a.kt)("h3",{id:"\u6dfb\u52a0\u4e00\u4e2a\u6743\u9650\u6821\u9a8c\u7684\u4e2d\u95f4\u4ef6"},"\u6dfb\u52a0\u4e00\u4e2a\u6743\u9650\u6821\u9a8c\u7684\u4e2d\u95f4\u4ef6"),(0,a.kt)("p",null,"\u5f15\u7528 jose \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"jwtVerify")," \u65b9\u6cd5\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u5f88\u65b9\u4fbf\u7684\u9a8c\u8bc1\u4ee4\u724c\u7684 JWS \u683c\u5f0f\u3001\u4ee4\u724c\u7b7e\u540d\u3001\u53d1\u884c\u8005\u3001\u53d7\u4f17\u548c\u8fc7\u671f\u72b6\u6001\u3002\u5982\u679c\u9a8c\u8bc1\u5931\u8d25\uff0c\u4f1a\u62a5\u51fa\u6307\u5b9a\u9519\u8bef\u4fe1\u606f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// auth-middleware.ts\n\nimport { createRemoteJWKSet, jwtVerify } from 'jose';\n\n//...\n\nexport const verifyAuthFromRequest = async (req, res, next) => {\n  // \u4ece\u8bf7\u6c42\u5934\u4e2d\u83b7\u53d6\u4ee4\u724c\n  const token = extractBearerTokenFromHeaders(req.headers);\n\n  const { payload } = await jwtVerify(\n    token,\n    // \u4f7f\u7528\u6211\u4eec\u4ece Logto OIDC \u914d\u7f6e\u4fe1\u606f\u4e2d\u83b7\u53d6\u7684 \u516c\u5171 jwks_uri \u63d0\u53d6\u4e00\u4e2a\u516c\u94a5\u96c6\u3002\n    createRemoteJWKSet('https://<your-logto-domain>/oidc/jwks'),\n    {\n      // \u4ee4\u724c\u5e94\u7531 Logto \u670d\u52a1\u5668\u53d1\u884c\n      issuer: 'https://<your-logto-domain>/oidc',\n      // \u8be5\u4ee4\u724c\u7684\u76ee\u6807\u53d7\u4f17\u5e94\u4e3a\u5f53\u524d\u88ab\u8bf7\u6c42\u7684 API \u5730\u5740\n      audience: '<your request listener resource indicator>',\n    }\n  );\n\n  // \u63d0\u53d6 payload \u4fe1\u606f\n  userId = payload.sub;\n\n  return next();\n};\n")),(0,a.kt)("h2",{id:"\u52a0\u8f7d\u4e2d\u95f4\u4ef6"},"\u52a0\u8f7d\u4e2d\u95f4\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { verifyAuthFromRequest } from '/middleware/auth-middleware.ts';\n\napp.get('/user/:id', verifyAuthFromRequest, (req, res, next) => {\n  // \u4e1a\u52a1\u903b\u8f91\n});\n")))}f.isMDXComponent=!0}}]);