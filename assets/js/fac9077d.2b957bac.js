(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{362:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(373)),o=["components"],c={title:"1.20.9",sidebar_label:"1.20.9"},s={unversionedId:"release-notes/1.20.9",id:"release-notes/1.20.9",isDocsHomePage:!1,title:"1.20.9",description:"General",source:"@site/../docs/release-notes/1.20.9.md",sourceDirName:"release-notes",slug:"/release-notes/1.20.9",permalink:"/documentation/release-notes/1.20.9",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.20.9.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1639412489,formattedLastUpdatedAt:"12/13/2021",sidebar_label:"1.20.9",frontMatter:{title:"1.20.9",sidebar_label:"1.20.9"}},u=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Bugs",id:"bugs-1",children:[]}]}],l={toc:u};function b(e){var t=e.components,r=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Testing: Python 3.* tests for clients ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3032"},"#3032")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Add a quota_approver similar to rule_approver ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3053"},"#3053")),Object(i.b)("li",{parentName:"ul"},"Deletion: Tunable values for max_threads by host ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3081"},"#3081")),Object(i.b)("li",{parentName:"ul"},"Deletion: Reevaluate the list of RSEs to be processed by a reaper ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3085"},"#3085"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Infrastructure: docker setup issues ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3038"},"#3038"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: rucio client fails if username not defined ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3050"},"#3050"))))}b.isMDXComponent=!0},373:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),d=n,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||i;return r?a.a.createElement(m,c(c({ref:t},u),{},{components:r})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);