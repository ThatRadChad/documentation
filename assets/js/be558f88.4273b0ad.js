(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{267:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(348)),o=["components"],c={title:"1.25.5",sidebar_label:"1.25.5"},l={unversionedId:"release-notes/1.25.5",id:"release-notes/1.25.5",isDocsHomePage:!1,title:"1.25.5",description:"General",source:"@site/../docs/release-notes/1.25.5.md",sourceDirName:"release-notes",slug:"/release-notes/1.25.5",permalink:"/documentation/release-notes/1.25.5",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.25.5.md",version:"current",lastUpdatedBy:"Benedikt Ziemons",lastUpdatedAt:1623678816,formattedLastUpdatedAt:"6/14/2021",sidebar_label:"1.25.5",frontMatter:{title:"1.25.5",sidebar_label:"1.25.5"}},u=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Bugs",id:"bugs-1",children:[]}]}],s={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: imp deprecation warning in favour of importlib ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4372"},"#4372"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Authentication & Authorisation: SSH public key padding ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3115"},"#3115")),Object(i.b)("li",{parentName:"ul"},"Messaging: Hermes2: Add a protection against empty transferred_at ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4618"},"#4618")),Object(i.b)("li",{parentName:"ul"},"Recovery: Reason is not maintained for temporarily unavailable replicas ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4023"},"#4023"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Upload/Download CLI does not properly log INFO ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4629"},"#4629"))))}p.isMDXComponent=!0},348:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);