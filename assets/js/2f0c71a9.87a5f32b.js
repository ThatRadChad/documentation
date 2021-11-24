(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{116:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(366)),o=["components"],c={title:"1.26.4",sidebar_label:"1.26.4"},l={unversionedId:"release-notes/1.26.4",id:"release-notes/1.26.4",isDocsHomePage:!1,title:"1.26.4",description:"General",source:"@site/../docs/release-notes/1.26.4.md",sourceDirName:"release-notes",slug:"/release-notes/1.26.4",permalink:"/documentation/release-notes/1.26.4",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.26.4.md",version:"current",lastUpdatedBy:"Benedikt Ziemons",lastUpdatedAt:1637745613,formattedLastUpdatedAt:"11/24/2021",sidebar_label:"1.26.4",frontMatter:{title:"1.26.4",sidebar_label:"1.26.4"}},u=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Bugs",id:"bugs-1",children:[]}]}],s={toc:u};function b(e){var t=e.components,r=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Database: Change OIC to 19.12  ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4803"},"#4803")),Object(i.b)("li",{parentName:"ul"},"Dataset deletion: Undertaker: Force deletion of replicas ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4689"},"#4689")),Object(i.b)("li",{parentName:"ul"},"Docker & Kubernetes: Export all ports to localhost with specific bind ip ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4782"},"#4782")),Object(i.b)("li",{parentName:"ul"},"Messaging: Change timeout behaviour of hermes ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4757"},"#4757"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Authentication & Authorisation: Temporary fix for token deletion hint ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4817"},"#4817")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Remove client_cert and client_key from atlas client template ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4787"},"#4787")),Object(i.b)("li",{parentName:"ul"},"WebUI: Fix setup_webui script ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4789"},"#4789"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Clients: Rucio download is not able to download files if the scope or name contains "/" ',Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3031"},"#3031"))))}b.isMDXComponent=!0},366:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(r),m=n,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||i;return r?a.a.createElement(d,c(c({ref:t},u),{},{components:r})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);