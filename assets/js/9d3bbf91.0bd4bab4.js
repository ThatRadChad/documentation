(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{225:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(348)),i=["components"],c={title:"1.23.6",sidebar_label:"1.23.6"},u={unversionedId:"release-notes/1.23.6",id:"release-notes/1.23.6",isDocsHomePage:!1,title:"1.23.6",description:"General",source:"@site/../docs/release-notes/1.23.6.md",sourceDirName:"release-notes",slug:"/release-notes/1.23.6",permalink:"/documentation/release-notes/1.23.6",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.23.6.md",version:"current",lastUpdatedBy:"Benedikt Ziemons",lastUpdatedAt:1623678816,formattedLastUpdatedAt:"6/14/2021",sidebar_label:"1.23.6",frontMatter:{title:"1.23.6",sidebar_label:"1.23.6"}},s=[{value:"General",id:"general",children:[{value:"Bugs",id:"bugs",children:[]}]}],l={toc:s};function p(e){var t=e.components,r=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"general"},"General"),Object(a.b)("h3",{id:"bugs"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Messaging: Duplicate prometheus metrics when testing/importing hermes, hermes2 ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3977"},"#3977")),Object(a.b)("li",{parentName:"ul"},"Transfers: Multihop problems with multiple sources ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3989"},"#3989"))))}p.isMDXComponent=!0},348:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return r?o.a.createElement(f,c(c({ref:t},s),{},{components:r})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);