(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{202:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(377)),o=["components"],c={title:"1.20.8",sidebar_label:"1.20.8"},s={unversionedId:"release-notes/1.20.8",id:"release-notes/1.20.8",isDocsHomePage:!1,title:"1.20.8",description:"General",source:"@site/../docs/release-notes/1.20.8.md",sourceDirName:"release-notes",slug:"/release-notes/1.20.8",permalink:"/documentation/release-notes/1.20.8",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.20.8.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1646241928,formattedLastUpdatedAt:"3/2/2022",sidebar_label:"1.20.8",frontMatter:{title:"1.20.8",sidebar_label:"1.20.8"}},u=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}]}],l={toc:u};function b(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: Datatype to store a DID ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3013"},"#3013")),Object(i.b)("li",{parentName:"ul"},"Documentation: Add demons --run-once examples to docker documentation ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2996"},"#2996"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: alembic: move schema back to callable for interactive use ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3039"},"#3039")),Object(i.b)("li",{parentName:"ul"},'Messaging: Hermes triggers SSL "truncation attack" errors on the message brokers ',Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2861"},"#2861")),Object(i.b)("li",{parentName:"ul"},"Recovery: minos-expiration doesn't handle properly ReplicaNotFound ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3028"},"#3028"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Remove DownloadClient.download_file_from_archive and rsemanager.download ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2021"},"#2021")),Object(i.b)("li",{parentName:"ul"},"Clients: checksum after download ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2399"},"#2399")),Object(i.b)("li",{parentName:"ul"},"Clients: rucio download should return a clear message if a DID doesn't exist ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2661"},"#2661")),Object(i.b)("li",{parentName:"ul"},"Clients: Add rse update support in rucio-admin ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3022"},"#3022"))),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: ConfigNotFound exception not handled in rucio-admin ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3019"},"#3019"))))}b.isMDXComponent=!0},377:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||i;return n?a.a.createElement(d,c(c({ref:t},u),{},{components:n})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);