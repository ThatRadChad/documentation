(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),c=(n(0),n(386)),i=["components"],o={title:"1.14.7",sidebar_label:"1.14.7"},l={unversionedId:"release-notes/1.14.7",id:"release-notes/1.14.7",isDocsHomePage:!1,title:"1.14.7",description:"General",source:"@site/../docs/release-notes/1.14.7.md",sourceDirName:"release-notes",slug:"/release-notes/1.14.7",permalink:"/documentation/release-notes/1.14.7",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.14.7.md",version:"current",lastUpdatedBy:"rcarpa",lastUpdatedAt:1649315907,formattedLastUpdatedAt:"4/7/2022",sidebar_label:"1.14.7",frontMatter:{title:"1.14.7",sidebar_label:"1.14.7"}},s=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Enhancements",id:"enhancements-2",children:[]}]}],u={toc:s};function b(e){var t=e.components,n=Object(a.a)(e,i);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"general"},"General"),Object(c.b)("h3",{id:"enhancements"},"Enhancements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Clients: CMS: Allow ",Object(c.b)("inlineCode",{parentName:"li"},"rucio upload")," to accept alternate LFNs ",Object(c.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/377"},"#377"))),Object(c.b)("h3",{id:"bugs"},"Bugs"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Transfers: Crash when trying to find matching scheme ",Object(c.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/460"},"#460"))),Object(c.b)("h2",{id:"clients"},"Clients"),Object(c.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Clients: Lifetime in add_container ignore ",Object(c.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/444"},"#444"))),Object(c.b)("h2",{id:"webui"},"WebUI"),Object(c.b)("h3",{id:"enhancements-2"},"Enhancements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"WebUI: Prevent user in R2D2 to select an RSE before any DID is selected ",Object(c.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/453"},"#453"))))}b.isMDXComponent=!0},386:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||c;return n?a.a.createElement(m,o(o({ref:t},s),{},{components:n})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);