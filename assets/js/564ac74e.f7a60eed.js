(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{166:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),i=(a(0),a(386)),c=["components"],s={title:"1.21.0rc1",sidebar_label:"1.21.0rc1"},o={unversionedId:"release-notes/1.21.0rc1",id:"release-notes/1.21.0rc1",isDocsHomePage:!1,title:"1.21.0rc1",description:"Release Candidate",source:"@site/../docs/release-notes/1.21.0rc1.md",sourceDirName:"release-notes",slug:"/release-notes/1.21.0rc1",permalink:"/documentation/release-notes/1.21.0rc1",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.21.0rc1.md",version:"current",lastUpdatedBy:"rcarpa",lastUpdatedAt:1649315907,formattedLastUpdatedAt:"4/7/2022",sidebar_label:"1.21.0rc1",frontMatter:{title:"1.21.0rc1",sidebar_label:"1.21.0rc1"}},b=[{value:"Release Candidate",id:"release-candidate",children:[]},{value:"Upgrade Instructions",id:"upgrade-instructions",children:[]},{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Bugs",id:"bugs-1",children:[]}]}],l={toc:b};function u(e){var t=e.components,a=Object(n.a)(e,c);return Object(i.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"release-candidate"},"Release Candidate"),Object(i.b)("p",null,"This is a release candidate! Only to be used in testing environments!"),Object(i.b)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),Object(i.b)("p",null,"This feature release requires a database schema upgrade. Please consult the ",Object(i.b)("a",{parentName:"p",href:"https://rucio.readthedocs.io/en/latest/database.html"},"documentation")," about\nupgrading your database schema."),Object(i.b)("p",null,"The following changes are necessary and are covered by the ",Object(i.b)("inlineCode",{parentName:"p"},"alembic upgrade head")," command:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Adding columns ",Object(i.b)("inlineCode",{parentName:"p"},"created_at")," and ",Object(i.b)("inlineCode",{parentName:"p"},"updated_at")," to ",Object(i.b)("inlineCode",{parentName:"p"},"did_meta")," table. This only needs to be executed if the columns are not existing (Alembic revision\n",Object(i.b)("inlineCode",{parentName:"p"},"53b479c3cb0f"),")")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Adding ",Object(i.b)("inlineCode",{parentName:"p"},"SAML")," as authentication typ to ",Object(i.b)("inlineCode",{parentName:"p"},"identities")," and ",Object(i.b)("inlineCode",{parentName:"p"},"account_map")," tables (Alembic revision ",Object(i.b)("inlineCode",{parentName:"p"},"9a1b149a2044"),")")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Adding ",Object(i.b)("inlineCode",{parentName:"p"},"staging_started_at")," and ",Object(i.b)("inlineCode",{parentName:"p"},"staging_finished_at")," to ",Object(i.b)("inlineCode",{parentName:"p"},"requests")," and ",Object(i.b)("inlineCode",{parentName:"p"},"requests_history")," tables (Alembic revision ",Object(i.b)("inlineCode",{parentName:"p"},"bc68e9946deb"),")")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Adding ",Object(i.b)("inlineCode",{parentName:"p"},"third_party_copy_write")," and ",Object(i.b)("inlineCode",{parentName:"p"},"third_party_copy_read")," columns to ",Object(i.b)("inlineCode",{parentName:"p"},"rse_protocols")," table (Alembic revision ",Object(i.b)("inlineCode",{parentName:"p"},"2b69addda658"),")")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Added new ",Object(i.b)("inlineCode",{parentName:"p"},"account_glob_limits")," table (Alembic revision ",Object(i.b)("inlineCode",{parentName:"p"},"a74275a1ad30"),")")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Added new ",Object(i.b)("inlineCode",{parentName:"p"},"dids_followed")," and ",Object(i.b)("inlineCode",{parentName:"p"},"dids_followed_events")," tables (Alembic revision ",Object(i.b)("inlineCode",{parentName:"p"},"7541902bf173"),")")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Added ",Object(i.b)("inlineCode",{parentName:"p"},"strategy"),", ",Object(i.b)("inlineCode",{parentName:"p"},"direction"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"deadline")," column to ",Object(i.b)("inlineCode",{parentName:"p"},"rse_transfer_limits")," table (Alembic revision ",Object(i.b)("inlineCode",{parentName:"p"},"810a41685bc1"),")"))),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: Global account qutoas ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2315"},"#2315")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Removal of fts3-rest-api dependency ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2518"},"#2518")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Add Source rse mode to throttler ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2611"},"#2611")),Object(i.b)("li",{parentName:"ul"},"Deletion: Use signed URLs when deleting from object stores ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2411"},"#2411")),Object(i.b)("li",{parentName:"ul"},"Collection following mechanism ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2304"},"#2304")),Object(i.b)("li",{parentName:"ul"},"Release management: Dependency upgrade for 1.21 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3054"},"#3054")),Object(i.b)("li",{parentName:"ul"},"Testing: flake8 and pycodestyles upgrade ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2156"},"#2156")),Object(i.b)("li",{parentName:"ul"},"Testing: activate python3 client tests ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2943"},"#2943")),Object(i.b)("li",{parentName:"ul"},"Transfers: Generic Multi-Hop transfers ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2632"},"#2632")),Object(i.b)("li",{parentName:"ul"},"Transfers: Rucio support for Globus Online as a transfer tool ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2905"},"#2905")),Object(i.b)("li",{parentName:"ul"},"Transfers: Add staging timestamps to request history ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3023"},"#3023")),Object(i.b)("li",{parentName:"ul"},"WebUI: Login to WebUI with SSO ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2306"},"#2306")),Object(i.b)("li",{parentName:"ul"},"WebUI: Create username/password authentication for Rucio WebUI ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2614"},"#2614"))),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: S3 URL signing code should pass endpoint to boto3 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2715"},"#2715")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: S3 URL signing code should use RSE name to index credentials ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2717"},"#2717")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: session() replaced by Session() in requests ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3011"},"#3011")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Permission : Add a quota_approver similar to rule_approver ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3053"},"#3053")),Object(i.b)("li",{parentName:"ul"},"Infrastructure: Add objectstore to development Docker image ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2855"},"#2855")),Object(i.b)("li",{parentName:"ul"},"Infrastructure: Add a docker-compose that brings services up only listening on localhost ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2990"},"#2990")),Object(i.b)("li",{parentName:"ul"},"Testing: fix setup problems in python3 travis tests ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2597"},"#2597")),Object(i.b)("li",{parentName:"ul"},"Testing: Activate grouped FIFO tests for mysql ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2802"},"#2802")),Object(i.b)("li",{parentName:"ul"},"Testing: Python 3.* tests for clients ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3032"},"#3032"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: problems upgrading to latest mysql/mariadb version ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2421"},"#2421")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Missing created_at and updated_at columns in did_meta table ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2462"},"#2462")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Integer attribute value '1' displayed as 'True' in the client.  ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2787"},"#2787")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: missing dot in schema in alembic scripts ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2823"},"#2823")),Object(i.b)("li",{parentName:"ul"},"Infrastructure: docker setup issues ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3038"},"#3038"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: rucio client fails if username not defined ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3050"},"#3050"))))}u.isMDXComponent=!0},386:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),l=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=l(a),d=r,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||i;return a?n.a.createElement(m,s(s({ref:t},b),{},{components:a})):n.a.createElement(m,s({ref:t},b))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var b=2;b<i;b++)c[b]=a[b];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);