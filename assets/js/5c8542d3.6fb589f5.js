(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{157:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(366)),o=["components"],c={title:"1.26.8",sidebar_label:"1.26.8"},s={unversionedId:"release-notes/1.26.8",id:"release-notes/1.26.8",isDocsHomePage:!1,title:"1.26.8",description:"General",source:"@site/../docs/release-notes/1.26.8.md",sourceDirName:"release-notes",slug:"/release-notes/1.26.8",permalink:"/documentation/release-notes/1.26.8",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.26.8.md",version:"current",lastUpdatedBy:"Benedikt Ziemons",lastUpdatedAt:1637745613,formattedLastUpdatedAt:"11/24/2021",sidebar_label:"1.26.8",frontMatter:{title:"1.26.8",sidebar_label:"1.26.8"}},u=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]}]}],l={toc:u};function b(e){var t=e.components,r=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Authentication & Authorisation: Database: fix deletion of old tokens ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4815"},"#4815")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Metadata: Add an option to inherit the metadata from the parents ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4515"},"#4515")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Improve AD32 checksum calculation ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4879"},"#4879")),Object(i.b)("li",{parentName:"ul"},"Policies: Add ESCAPE permission schema and validation schema  ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4942"},"#4942")),Object(i.b)("li",{parentName:"ul"},"Recovery: Protect the Evaulator from the Necromancer ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4892"},"#4892")),Object(i.b)("li",{parentName:"ul"},"Rules: Pause evaluating DIDs in case of Unique Constraint hit ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4939"},"#4939")),Object(i.b)("li",{parentName:"ul"},"Transfers: rucio-conveyor-finisher fails at a non-deterministic endpoint with root protocol ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4833"},"#4833"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Recovery: Wrong query and problem due to overlapping partition ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4925"},"#4925")),Object(i.b)("li",{parentName:"ul"},"Replicas: Replica registration protocol issue ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4617"},"#4617"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Use X.509 credentials specified in rucio.cfg with gfal operations ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3957"},"#3957")),Object(i.b)("li",{parentName:"ul"},"Clients: Allow configuring default metadata plugin in client rucio.cfg ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4825"},"#4825"))))}b.isMDXComponent=!0},366:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||i;return r?a.a.createElement(d,c(c({ref:t},u),{},{components:r})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);