(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{271:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(377)),o=["components"],c={title:"1.27.1",sidebar_label:"1.27.1"},l={unversionedId:"release-notes/1.27.1",id:"release-notes/1.27.1",isDocsHomePage:!1,title:"1.27.1",description:"General",source:"@site/../docs/release-notes/1.27.1.md",sourceDirName:"release-notes",slug:"/release-notes/1.27.1",permalink:"/documentation/release-notes/1.27.1",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.27.1.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1646241928,formattedLastUpdatedAt:"3/2/2022",sidebar_label:"1.27.1",frontMatter:{title:"1.27.1",sidebar_label:"1.27.1"}},s=[{value:"General",id:"general",children:[{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements",children:[]}]}],u={toc:s};function p(e){var t=e.components,r=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: Error declaring bad file replicas ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5066"},"#5066")),Object(i.b)("li",{parentName:"ul"},"Rules: .add_replication_rule allows for 0 copies as input ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5035"},"#5035")),Object(i.b)("li",{parentName:"ul"},"Testing: test_upload_download of test-server fails ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5023"},"#5023")),Object(i.b)("li",{parentName:"ul"},"Testing: ",Object(i.b)("inlineCode",{parentName:"li"},"common/test_rucio_server")," file path bug ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5037"},"#5037")),Object(i.b)("li",{parentName:"ul"},"Traces: json schema validation causes a lot of entries in the logfile ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5074"},"#5074"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Adding example to help message of additional argument --younger_than for CLI command list-suspicious-replicas ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5060"},"#5060"))))}p.isMDXComponent=!0},377:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return r?a.a.createElement(m,c(c({ref:t},s),{},{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);