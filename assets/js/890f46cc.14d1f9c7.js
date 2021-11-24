(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{214:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(366)),i=["components"],c={id:"Main-components-of-rucio",title:"Main Components of Rucio",sidebar_label:"Main Components of Rucio"},s={unversionedId:"Main-components-of-rucio",id:"Main-components-of-rucio",isDocsHomePage:!1,title:"Main Components of Rucio",description:"Rucio is based on a distributed system architecture & can be sectioned into four major layers:",source:"@site/../docs/Main-components-of-rucio.md",sourceDirName:".",slug:"/Main-components-of-rucio",permalink:"/documentation/Main-components-of-rucio",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/Main-components-of-rucio.md",version:"current",lastUpdatedBy:"Benedikt Ziemons",lastUpdatedAt:1637745613,formattedLastUpdatedAt:"11/24/2021",sidebar_label:"Main Components of Rucio",frontMatter:{id:"Main-components-of-rucio",title:"Main Components of Rucio",sidebar_label:"Main Components of Rucio"},sidebar:"docs",previous:{title:"What is Rucio?",permalink:"/documentation/What-is-rucio"},next:{title:"Additional Layers and Resources",permalink:"/documentation/Additional-layers-and-Resources"}},l=[{value:"Clients",id:"clients",children:[]},{value:"Server",id:"server",children:[]},{value:"Core",id:"core",children:[]},{value:"Daemons",id:"daemons",children:[]}],u={toc:l};function p(e){var t=e.components,c=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},u,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Rucio is based on a distributed system architecture & can be sectioned into four major layers:"),Object(a.b)("h2",{id:"clients"},"Clients"),Object(a.b)("p",null,"The clients layer consists of components such as the command line clients (CLI), Python clients, and the Javascript-based web user interface and configuration."),Object(a.b)("h2",{id:"server"},"Server"),Object(a.b)("p",null,"The server layer serves the purpose of authentication & provides a common API for interaction with clients & other external application, as also the Web UI."),Object(a.b)("h2",{id:"core"},"Core"),Object(a.b)("p",null,"This layer consists of all the Rucio-level abstractions that are explained at length in the ",Object(a.b)("a",{parentName:"p",href:"/documentation/concepts"},"Concepts & Terminology")," section."),Object(a.b)("h2",{id:"daemons"},"Daemons"),Object(a.b)("p",null,"The daemons layer takes care of all the asynchronous & continuous workflows in the background."),Object(a.b)("p",null,"A diagrammatic representation of the 4 layers is as shown below "),Object(a.b)("p",null,Object(a.b)("img",{alt:"image",src:n(428).default})),Object(a.b)("p",null,"To learn more about each of these layers in detail, download our ",Object(a.b)("a",{parentName:"p",href:"https://link.springer.com/article/10.1007/s41781-019-0026-3"},"peer reviewed scientific paper"),"."))}p.isMDXComponent=!0},366:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},428:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/architecture-a407801cb690fc1a73a930e2691f761f.png"}}]);