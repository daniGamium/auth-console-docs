"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[8732],{49613:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return y}});var n=o(59496);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(o),y=r,h=d["".concat(p,".").concat(y)]||d[y]||l[y]||a;return o?n.createElement(h,i(i({ref:t},c),{},{components:o})):n.createElement(h,i({ref:t},c))}));function y(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},99985:function(e,t,o){o.d(t,{ZP:function(){return p}});var n=o(665),r=o(40151),a=(o(59496),o(49613)),i=["components"],s={toc:[{value:"Retrieve Logto&#39;s OIDC configurations",id:"retrieve-logtos-oidc-configurations",level:3}]};function p(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"retrieve-logtos-oidc-configurations"},"Retrieve Logto's OIDC configurations"),(0,a.kt)("p",null,"You will need a JWK public key set and the token issuer to verify the signature and source of the received JWS token. All the latest public Logto Authorization Configurations can be found at ",(0,a.kt)("inlineCode",{parentName:"p"},"https://<your-logto-domain>/oidc/.well-known/openid-configuration"),"."),(0,a.kt)("p",null,"e.g. Call ",(0,a.kt)("inlineCode",{parentName:"p"},"https://logto.dev/oidc/.well-known/openid-configuration"),". And locate the following two fields in the response body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jwks_uri": "https://logto.dev/oidc/jwks",\n  "issuer": "https://logto.dev/oidc"\n}\n')))}p.isMDXComponent=!0},21074:function(e,t,o){o.r(t),o.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var n=o(665),r=o(40151),a=(o(59496),o(49613)),i=o(99985),s=["components"],p={sidebar_label:"Python"},u="Protect your API on Python",c={unversionedId:"docs/recipes/protect-your-api/python",id:"docs/recipes/protect-your-api/python",title:"Protect your API on Python",description:"Make sure to register your api resource in Logto Admin Console before continuing.",source:"@site/docs/docs/recipes/protect-your-api/python.mdx",sourceDirName:"docs/recipes/protect-your-api",slug:"/docs/recipes/protect-your-api/python",permalink:"/docs/recipes/protect-your-api/python",draft:!1,editUrl:"https://github.com/gamiumapp/auth-console-docs/docs/docs/recipes/protect-your-api/python.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Python"},sidebar:"docsSidebar",previous:{title:"Node (Express)",permalink:"/docs/recipes/protect-your-api/node"},next:{title:"Spring Boot",permalink:"/docs/recipes/protect-your-api/spring-boot"}},l={},d=[{value:"Extract the Bearer Token from request header",id:"extract-the-bearer-token-from-request-header",level:2},{value:"Token validation",id:"token-validation",level:2},{value:"Install <code>python-jose</code> as your dependency",id:"install-python-jose-as-your-dependency",level:3},{value:"Create the authorization validation decorator",id:"create-the-authorization-validation-decorator",level:3},{value:"Apply decorator to your API",id:"apply-decorator-to-your-api",level:2}],y={toc:d};function h(e){var t=e.components,o=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},y,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"protect-your-api-on-python"},"Protect your API on Python"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Make sure to ",(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/protect-your-api/#register-the-api-resources-using-logto-admin-console"},"register your api resource in Logto Admin Console")," before continuing.")),(0,a.kt)("h2",{id:"extract-the-bearer-token-from-request-header"},"Extract the Bearer Token from request header"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"\"\"\"requires-auth.py\n\"\"\"\ndef get_auth_token():\n  auth = request.headers.get(\"Authorization\", None)\n\n  if not auth:\n    raise Error({ code: 'auth.authorization_header_missing', status: 401 })\n\n  contents = auth.split()\n\n  if len(contents) < 2\n    raise Error({code: 'auth.authorization_token_invalid_format', status: 401})\n\n  elif contents[0] != 'Bearer'\n    raise Error({code: 'auth.authorization_token_type_not_supported', status: 401})\n\n  return contents[1]\n\n")),(0,a.kt)("h2",{id:"token-validation"},"Token validation"),(0,a.kt)("p",null,"For demonstration, we use the Flask app and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mpdavis/python-jose"},"jose")," package to create the require_auth decorator to validate the token's signature, expiration status, and required claims."),(0,a.kt)("h3",{id:"install-python-jose-as-your-dependency"},"Install ",(0,a.kt)("inlineCode",{parentName:"h3"},"python-jose")," as your dependency"),(0,a.kt)("p",null,"Pick the cryptography your are using in Logto. (",(0,a.kt)("inlineCode",{parentName:"p"},"ecdsa")," by default)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pip install python-jose[ecdsa]\n")),(0,a.kt)(i.ZP,{mdxType:"RetrieveOidcConfiguration"}),(0,a.kt)("h3",{id:"create-the-authorization-validation-decorator"},"Create the authorization validation decorator"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"\"\"\"requires-auth.py\n\"\"\"\n\nimport json\nfrom flask import request,  _request_ctx_stack\nfrom six.moves.urllib.request import urlopen\nfrom functools import wraps\nfrom jose import jwt\n\ndef requires_auth(f):\n  @wraps(f)\n  def decorated(*args, **kwargs):\n    token = get_token_auth_header()\n\n    # jwks_uri endpoint retrieved from Logto\n    jwks_uri = urlopen('https://<your-logto-domain>/oidc/jwks')\n\n    # issuer retrieved from Logto\n    issuer = 'https://<your-logto-domain>/oidc'\n\n    jwks = json.loads(jwks_uri.read())\n\n    try:\n      payload = jwt.decode(\n        token,\n        jwks,\n        algorithms='ES256',\n        audience='<your request listener resource indicator>',\n        issue=issuer\n        options={\n          'verify_at_hash': False\n        }\n      )\n    except Exception:\n      # exception handler\n      raise Error({code: 'invalid_token', status: 401})\n\n      # Custom code to process payload\n    _request_ctx_stack.top.user_id = payload.get('sub')\n\n    return f(*args, **kwargs)\n  return decorated\n\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For ",(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/rbac"},"\ud83d\udd10 RBAC"),", scope validation is also required.")),(0,a.kt)("h2",{id:"apply-decorator-to-your-api"},"Apply decorator to your API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from flask import Flask\nfrom flask_cors import cross_origin\n\nAPP = Flask(__name__)\n\n@APP.route("/user/info")\n@cross_origin(headers=["Content-Type", "Authorization"])\n@requires_auth\ndef api:\n  # Your API Logic\n\n')))}h.isMDXComponent=!0}}]);