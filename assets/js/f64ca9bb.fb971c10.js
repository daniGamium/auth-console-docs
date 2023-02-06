"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[5278],{49613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=o(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1215:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return m}});var a=n(665),r=n(40151),i=(n(59496),n(49613)),l=["components"],s={},p="\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66 Users",o={unversionedId:"docs/references/users/README",id:"docs/references/users/README",title:"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66 Users",description:"The users are the main entities of the identity service.",source:"@site/docs/docs/references/users/README.md",sourceDirName:"docs/references/users",slug:"/docs/references/users/",permalink:"/docs/references/users/",draft:!1,editUrl:"https://github.com/gamiumapp/auth-console-docs/docs/docs/references/users/README.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Platform SDK",permalink:"/docs/references/sdk-convention/platform-sdk-convention"},next:{title:"Social identities",permalink:"/docs/references/users/social-identities"}},d={},m=[{value:"Profile",id:"profile",level:2},{value:"Basic data",id:"basic-data",level:2},{value:"id",id:"id",level:3},{value:"username",id:"username",level:3},{value:"primary_email",id:"primary_email",level:3},{value:"primary_phone",id:"primary_phone",level:3},{value:"name",id:"name",level:3},{value:"avatar",id:"avatar",level:3},{value:"role_names",id:"role_names",level:3},{value:"application_id",id:"application_id",level:3},{value:"last_signed_in_at",id:"last_signed_in_at",level:3},{value:"password_encrypted",id:"password_encrypted",level:3},{value:"password_encryption_method",id:"password_encryption_method",level:3},{value:"is_suspended",id:"is_suspended",level:3},{value:"Property reference",id:"property-reference",level:2}],u={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-users"},"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66 Users"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"users")," are the main entities of the identity service.\nWe will describe the user-related concepts and details in the following."),(0,i.kt)("h2",{id:"profile"},"Profile"),(0,i.kt)("p",null,"Each user has a profile containing ",(0,i.kt)("a",{parentName:"p",href:"#property-reference"},"all user information"),"."),(0,i.kt)("p",null,"It consists of the following types of data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/references/users/social-identities"},"Social identities"),": stores the user info retrieved from social sign-in (i.e., sign-in with a social connector), such as Facebook, GitHub, and WeChat."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/references/users/custom-data"},"Custom data"),": stores additional user info not listed in the pre-defined user properties, such as user-preferred color and language."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#basic-data"},"Basic data"),": is the basic info from the user profile. It stores all other ",(0,i.kt)("em",{parentName:"li"},"user"),"'s properties except for ",(0,i.kt)("em",{parentName:"li"},"identities")," and ",(0,i.kt)("em",{parentName:"li"},"custom_data"),", such as user id, username, email, phone number, and when the user last signed in.")),(0,i.kt)("p",null,"Here is a sample of a user's data which is retrieved from a sign-in to Facebook:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "iHXPuSb9eMzt",\n  "username": null,\n  "primaryEmail": null,\n  "primaryPhone": null,\n  "name": "John Joe",\n  "avatar": "https://example.com/avatar.png",\n  "roleNames": ["admin"],\n  "customData": {\n    "preferences": {\n      "language": "en",\n      "color": "#f236c9"\n    }\n  },\n  "identities": {\n    "facebook": {\n      "userId": "106077000000000",\n      "details": {\n        "id": "106077000000000",\n        "name": "John Joe",\n        "email": "johnjoe@logto.io",\n        "avatar": "https://example.com/avatar.png"\n      }\n    }\n  },\n  "lastSignInAt": 1655799453171,\n  "applicationId": "admin_console"\n}\n')),(0,i.kt)("p",null,"You can query the user profile using\n",(0,i.kt)("a",{parentName:"p",href:"/docs/recipes/manage-users/admin-console#view-and-update-user-profile"},"Admin Console")," or\n",(0,i.kt)("a",{parentName:"p",href:"/docs/recipes/manage-users/management-api"},"Management API"),",\nsuch as ",(0,i.kt)("a",{href:"/api/#tag/Users/paths/~1api~1users~1:userId/get",target:"_blank"},(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/users/:userId")),"."),(0,i.kt)("h2",{id:"basic-data"},"Basic data"),(0,i.kt)("p",null,"Let's walk through all properties in of user's ",(0,i.kt)("em",{parentName:"p"},"basic data"),"."),(0,i.kt)("h3",{id:"id"},"id"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"id")," is a unique auto-generated key to identify the user in Logto."),(0,i.kt)("h3",{id:"username"},"username"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"username")," is used for sign-in with ",(0,i.kt)("em",{parentName:"p"},"username")," and password."),(0,i.kt)("p",null,"Its value is from the username that the user first registered with.\nIt may be ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),".\nIts non-null value should be no longer than 128 characters, only contain letters, numbers, and underscores (",(0,i.kt)("inlineCode",{parentName:"p"},"_"),"), and NOT start with a number."),(0,i.kt)("h3",{id:"primary_email"},"primary_email"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"primary_email")," is the user's email address, used for sign-in with the email and passcode."),(0,i.kt)("p",null,"Its value is usually from the email address that the user first registered with.\nIt may be ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),".\nIts max length is 128."),(0,i.kt)("h3",{id:"primary_phone"},"primary_phone"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"primary_phone")," is the user's phone number, used for sign-in with the phone number and passcode from SMS."),(0,i.kt)("p",null,"Its value is usually from the phone number that the user first registered with.\nIt may be ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),".\nIts non-null value should contain numbers prefixed with the\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_country_calling_codes"},"country calling code")," (excluding the plus sign ",(0,i.kt)("inlineCode",{parentName:"p"},"+"),")."),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"name")," is the user's full name.\nIts max length is 128."),(0,i.kt)("h3",{id:"avatar"},"avatar"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"avatar")," is the URL pointing to the user's avatar image.\nIts max length is 2048."),(0,i.kt)("p",null,"If the user registers with a social connector like Facebook and WeChat, its value may be retrieved from the social user info."),(0,i.kt)("h3",{id:"role_names"},"role_names"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"roles_names")," represent the roles granted to the user in Logto."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For example, only the users whose ",(0,i.kt)("em",{parentName:"p"},"roles_names")," contain ",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),', i.e., the admin users, have permission to use "Admin Console" and "Management API" in Logto.')),(0,i.kt)("p",null,"You cannot update the user's ",(0,i.kt)("em",{parentName:"p"},"role_names")," using ",(0,i.kt)("a",{parentName:"p",href:"/docs/recipes/manage-users/admin-console#view-and-update-user-profile"},"Admin Console")," for now."),(0,i.kt)("h3",{id:"application_id"},"application_id"),(0,i.kt)("p",null,"The value of ",(0,i.kt)("a",{parentName:"p",href:"/docs/references/applications/#application-id"},(0,i.kt)("em",{parentName:"a"},"application_id"))," is from the application the user first signed in to.\nIt may be ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,i.kt)("h3",{id:"last_signed_in_at"},"last_signed_in_at"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"last_signed_in_at")," is the timestamp with the timezone when the user signed in last time."),(0,i.kt)("h3",{id:"password_encrypted"},"password_encrypted"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"password_encrypted")," is used to store the user's encrypted password."),(0,i.kt)("p",null,"Its value is from the password that the user first registered with.\nIt may be ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),".\nIf its value is non-null, its original content before encryption should be at least six characters."),(0,i.kt)("h3",{id:"password_encryption_method"},"password_encryption_method"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"password_encryption_method")," is used to encrypt the user's password.\nIts value is initialized when the user registers with the username and password.\nIt may be ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,i.kt)("p",null,"Logto uses ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Argon2"},"Argon2"),"'s implementation ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ranisalt/node-argon2"},"node-argon2")," as the encryption method by default; see the reference for details if you're interested."),(0,i.kt)("p",null,"Sample a ",(0,i.kt)("em",{parentName:"p"},"password_encrypted")," and ",(0,i.kt)("em",{parentName:"p"},"password_encryption_method")," from a user whose password is ",(0,i.kt)("inlineCode",{parentName:"p"},"123456"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "password_encryption_method": "Argon2i",\n  "password_encrypted": "$argon2i$v=19$m=4096,t=10,p=1$aZzrqpSX45DOo+9uEW6XVw$O4MdirF0mtuWWWz68eyNAt2u1FzzV3m3g00oIxmEr0U"\n}\n')),(0,i.kt)("h3",{id:"is_suspended"},"is_suspended"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"is_suspended")," is a boolean value that indicates whether a user is suspended or not. The value can be managed by calling the ",(0,i.kt)("a",{parentName:"p",href:"/docs/recipes/manage-users/management-api"},"Logto Management API"),".\nOnce a user is suspended the pre-granted refresh tokens will be revoked immediately and the user won't be able to get authenticated by Logto anymore."),(0,i.kt)("h2",{id:"property-reference"},"Property reference"),(0,i.kt)("p",null,"The following properties (except ",(0,i.kt)("em",{parentName:"p"},"password_encrypted")," and ",(0,i.kt)("em",{parentName:"p"},"password_encryption_method"),") are visible on the user profile,\nwhich means you can query them using ",(0,i.kt)("a",{parentName:"p",href:"/docs/recipes/manage-users/management-api"},"Management API"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Unique"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#id"},"id")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Unique identifier"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#username"},"username")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Username for sign-in"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#primary_email"},"primary_email")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Primary email"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#primary_phone"},"primary_phone")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Primary phone number"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#name"},"name")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Full name"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#avatar"},"avatar")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"URL pointing to user's avatar image"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#role_names"},"role_names")),(0,i.kt)("td",{parentName:"tr",align:null},"string array"),(0,i.kt)("td",{parentName:"tr",align:null},"List of roles"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/references/users/social-identities"},"identities")),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"User info retrieved from social sign-in"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/references/users/custom-data"},"custom_data")),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"Additional info in customizable properties"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#application_id"},"application_id")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Application ID that the user first registered"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#last_signed_in_at"},"last_sign_in_at")),(0,i.kt)("td",{parentName:"tr",align:null},"date time"),(0,i.kt)("td",{parentName:"tr",align:null},"Timestamp when the user signed in last time"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#password_encrypted"},"password_encrypted")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Encrypted password"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#password_encryption_method"},"password_encryption_method")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Password encryption method"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#is_suspended"},"is_suspended")),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"User suspend mark"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Unique"),": Ensures the ",(0,i.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-UNIQUE-CONSTRAINTS"},"uniqueness")," of the values entered into a property of a database table."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Required"),": Ensures that the values entered a property of a database table can NOT be ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL"),"."))))}c.isMDXComponent=!0}}]);