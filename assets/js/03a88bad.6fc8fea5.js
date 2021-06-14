(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{348:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=s(n),m=o,d=b["".concat(a,".").concat(m)]||b[m]||p[m]||i;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var o=n(3),r=n(7),i=(n(0),n(348)),a=["components"],c={id:"index",title:"Welcome to Rucio's documentation!",sidebar_label:"Welcome!",slug:"/"},u={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Welcome to Rucio's documentation!",description:"Rucio is a project that provides services and associated libraries for allowing scientific",source:"@site/../docs/index.md",sourceDirName:".",slug:"/",permalink:"/documentation/",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/index.md",version:"current",lastUpdatedBy:"Benedikt Ziemons",lastUpdatedAt:1623678816,formattedLastUpdatedAt:"6/14/2021",sidebar_label:"Welcome!",frontMatter:{id:"index",title:"Welcome to Rucio's documentation!",sidebar_label:"Welcome!",slug:"/"},sidebar:"docs",next:{title:"Before you get started",permalink:"/documentation/Before-you-get-started"}},l=[{value:"Before You Get Started",id:"before-you-get-started",children:[]},{value:"Try Rucio!",id:"try-rucio",children:[]},{value:"Rucio User Playground",id:"rucio-user-playground",children:[]},{value:"Rucio Operator Documentation",id:"rucio-operator-documentation",children:[]},{value:"Rucio Developer Documentation",id:"rucio-developer-documentation",children:[]},{value:"Contributing to the Documentation",id:"contributing-to-the-documentation",children:[]},{value:"About Us",id:"about-us",children:[]}],s={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,a);return Object(i.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Rucio is a project that provides services and associated libraries for allowing scientific\ncollaborations to manage large volumes of data spread across facilities at\nmultiple institutions and organisations. Rucio has been developed by\n",Object(i.b)("a",{parentName:"p",href:"https://atlas.cern/"},"the ATLAS experiment")),Object(i.b)("p",null,"Rucio offers advanced features, is highly scalable, and modular. It is a data management\nsolution that could cover the needs of different communities in the scientific\ndomain (e.g., HEP, astronomy, biology)."),Object(i.b)("p",null,"Below are some resources to help you get you started on your journey. "),Object(i.b)("h2",{id:"before-you-get-started"},Object(i.b)("a",{parentName:"h2",href:"Before-you-get-started"},"Before You Get Started")),Object(i.b)("p",null,"What exactly is Rucio? What were the motivations behind developing such a system? Who\nuses it? What powers these systems? Answers to all these questions and more can be\nfound by browsing through the sub-sections of this topic."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/documentation/What-is-rucio"},"What is Rucio?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/documentation/Main-components-of-rucio"},"Main Components of Rucio")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/documentation/Additional-layers-and-Resources"},"Additional layers and Resources")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/documentation/concepts"},"Concepts & Terminology")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/documentation/releasepolicy"},"Release Policy"))),Object(i.b)("h2",{id:"try-rucio"},Object(i.b)("a",{parentName:"h2",href:"/documentation/Try-rucio"},"Try Rucio!")),Object(i.b)("p",null,"Get your hands dirty by trying to setup your very own demo environment on your local\nlaptop/desktop. Make sure you read the pre-requisites section before starting off, though!"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"setting-up-demo"},"Pre-requisites")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"setting-up-demo"},"Setting up Demo environment")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/documentation/bin"},"Rucio executables"))),Object(i.b)("h2",{id:"rucio-user-playground"},"Rucio User Playground"),Object(i.b)("p",null,"Congratulations on setting up your Rucio environment! Let us now have a look at some of\nthe common things you can do using Rucio by setting up the Rucio client. Also, this\nsection will introduce you to some common CLI commands that you, as a user, might find\nhelpful when working with Rucio."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"setting-up-rucio-client"},"Setting up Rucio Client")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"using-rucio-client"},"Rucio CLI playground"))),Object(i.b)("h2",{id:"rucio-operator-documentation"},Object(i.b)("a",{parentName:"h2",href:"operator"},"Rucio Operator Documentation")),Object(i.b)("p",null,"This section of the documentation deals with some of the material that an operator or\nadministrator of a Rucio environment would require. For example, how to install a server\nor some quick tips for working with the administrative CLI. Take a deep dive, but not\nbefore you ensure you've read through the pre-requisites section under each of the topics!"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"installing-rucio-server"},"Installing Rucio Server")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"installing-rucio-daemons"},"Installing Rucio Daemons")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/documentation/monitoring"},"Monitoring"))),Object(i.b)("h2",{id:"rucio-developer-documentation"},Object(i.b)("a",{parentName:"h2",href:"developer"},"Rucio Developer Documentation")),Object(i.b)("p",null,"Whether you want to develop with Rucio or contribute to the project, the Developer\ndocumentation will help you get started. Peruse some common REST API & Client API\nreferences that are directly derived from Rucio's python libraries. We also\nhave a contribution guide for those who wish to pitch in."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"rucio_client_api"},"Client API Documentation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"rucio_rest_api"},"REST API Documentation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"database"},"Database")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"configure-rucio-globus"},"Configuring Rucio to use Globus as an Online Transfer Tool")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"contributing"},"Contributing guide"))),Object(i.b)("h2",{id:"contributing-to-the-documentation"},Object(i.b)("a",{parentName:"h2",href:"Contributing"},"Contributing to the Documentation")),Object(i.b)("p",null,"Documentation is always a work in progress & we welcome both, qualitative and\ntechnical contributions from the community. Make sure you read through this section\n& understand the pre-requisites before you submit your first PR!"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"page-types"},"Types of pages")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"contributing-improvements"},"Contributing Improvements")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"new-content-contribution-guide"},"New Content Contribution Guide"))),Object(i.b)("h2",{id:"about-us"},"About Us"),Object(i.b)("p",null,"Learn more about the brilliant minds pioneering the development & maintenance\nof Rucio in this section. Should you wish to get in touch with us, we've also included\nseveral ways of doing so in the ",Object(i.b)("strong",{parentName:"p"},"Contact Us")," section."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"about-our-contributors"},"About Our Contributors")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"how-to-reach-us"},"Contact Us"))))}b.isMDXComponent=!0}}]);