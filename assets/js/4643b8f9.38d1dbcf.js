(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(386)),i=["components"],c={id:"what_is_rucio",title:"What is Rucio?"},u={unversionedId:"what_is_rucio",id:"what_is_rucio",isDocsHomePage:!1,title:"What is Rucio?",description:"Having demonstrated very large scale data management capabilities, Don Quijote",source:"@site/../docs/what_is_rucio.md",sourceDirName:".",slug:"/what_is_rucio",permalink:"/documentation/what_is_rucio",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/what_is_rucio.md",version:"current",lastUpdatedBy:"rcarpa",lastUpdatedAt:1649315907,formattedLastUpdatedAt:"4/7/2022",frontMatter:{id:"what_is_rucio",title:"What is Rucio?"},sidebar:"docs",previous:{title:"Before you get started",permalink:"/documentation/before_you_get_started"},next:{title:"Main Components",permalink:"/documentation/main_components"}},s=[{value:"What can Rucio do",id:"what-can-rucio-do",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Having demonstrated very large scale data management capabilities, Don Quijote\n(DQ2), the ",Object(o.b)("strong",{parentName:"p"},"ATLAS Distributed Data Management System")," used for ",Object(o.b)("strong",{parentName:"p"},"HEP\nexperiments at CERN")," had reached its limits in terms of scalability. The\nprimary concerns were"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"the requirement of a large number of support staff to operate."),Object(o.b)("li",{parentName:"ul"},"difficulty in interfacing with new technologies")),Object(o.b)("p",null,"To address these very scaling requirements for HEP experiments, ",Object(o.b)("strong",{parentName:"p"},"Rucio")," as a\nDistributed Data Management System was developed. Drawing benefits from advances\nin Cloud & Big Data computations, it relies on a conceptual data model to ensure\nsystem stability. Dataflow autonomy and automation are the key design principles\nguiding the development of Rucio. To reduce the operational overheads of the\nsupport staff, it employs an automation framework and also accounts for newer\nuse cases & user requirements of the LHC Run2 experiments."),Object(o.b)("h2",{id:"what-can-rucio-do"},"What can Rucio do"),Object(o.b)("p",null,"Standing on the shoulders of its predecessor, ",Object(o.b)("strong",{parentName:"p"},"ATLAS"),", the capabilities of\nRucio are currently leveraged for:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Storage of detector data, simulator data, and user data"),Object(o.b)("li",{parentName:"ul"},"Unified interfacing of heterogenous network & storage infrastructure"),Object(o.b)("li",{parentName:"ul"},"Support for newer protocols in Storage & Network using plugins"),Object(o.b)("li",{parentName:"ul"},"Data Recovery"),Object(o.b)("li",{parentName:"ul"},"Adaptive Replication")))}p.isMDXComponent=!0},386:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);