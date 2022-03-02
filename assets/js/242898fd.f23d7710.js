(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{112:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),i=(a(0),a(377)),c=["components"],o={title:"1.26.0 'Donkey League of La Mancha'",sidebar_label:"1.26.0 'Donkey League of La Mancha'"},s={unversionedId:"release-notes/1.26.0",id:"release-notes/1.26.0",isDocsHomePage:!1,title:"1.26.0 'Donkey League of La Mancha'",description:"Long Term Support (LTS)",source:"@site/../docs/release-notes/1.26.0.md",sourceDirName:"release-notes",slug:"/release-notes/1.26.0",permalink:"/documentation/release-notes/1.26.0",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.26.0.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1646241928,formattedLastUpdatedAt:"3/2/2022",sidebar_label:"1.26.0 'Donkey League of La Mancha'",frontMatter:{title:"1.26.0 'Donkey League of La Mancha'",sidebar_label:"1.26.0 'Donkey League of La Mancha'"}},l=[{value:"Long Term Support (LTS)",id:"long-term-support-lts",children:[]},{value:"Upgrade Instructions",id:"upgrade-instructions",children:[]},{value:"Important changes",id:"important-changes",children:[]},{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]}],b={toc:l};function u(e){var t=e.components,a=Object(n.a)(e,c);return Object(i.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"long-term-support-lts"},"Long Term Support (LTS)"),Object(i.b)("p",null,"This release marks the start of the 1.26 ",Object(i.b)("strong",{parentName:"p"},"Long Term Support (LTS)")," release\nline. This release line will be supported with security and critical patches\nuntil at least ",Object(i.b)("strong",{parentName:"p"},"July 2023"),"."),Object(i.b)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),Object(i.b)("p",null,"This feature release requires a database schema upgrade. Please consult the\n",Object(i.b)("a",{parentName:"p",href:"https://rucio.cern.ch/documentation/database/"},"documentation")," about upgrading\nyour database schema."),Object(i.b)("p",null,"The following changes are necessary and are covered by the ",Object(i.b)("inlineCode",{parentName:"p"},"alembic upgrade\nhead")," command:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Extending columns for filter and replication rules in ",Object(i.b)("inlineCode",{parentName:"p"},"subscriptions"),". (Alembic revision ",Object(i.b)("inlineCode",{parentName:"p"},"e138c364ebd0"),")")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Add index and adapt column colum length in ",Object(i.b)("inlineCode",{parentName:"p"},"messages")," table. (Alembic revision `30fa38b6434e)")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Add index on ",Object(i.b)("inlineCode",{parentName:"p"},"replicas")," table. (Alembic revision ",Object(i.b)("inlineCode",{parentName:"p"},"52153819589c"),")")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Add column and index on ",Object(i.b)("inlineCode",{parentName:"p"},"did_meta")," table. (Alembic revision ",Object(i.b)("inlineCode",{parentName:"p"},"ccdbcd48206e"),")")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Remove PK in ",Object(i.b)("inlineCode",{parentName:"p"},"configs_history")," table. (Alembic revision ",Object(i.b)("inlineCode",{parentName:"p"},"739064d31565"),")"))),Object(i.b)("h2",{id:"important-changes"},"Important changes"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"This release removed the deprecated ",Object(i.b)("inlineCode",{parentName:"p"},"RSEBlacklisted")," exception and replaced it by ",Object(i.b)("inlineCode",{parentName:"p"},"RSEWriteBlocked"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"reaper2")," daemon was renamed to ",Object(i.b)("inlineCode",{parentName:"p"},"reaper"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"This release drops the support of mysql version 5."))),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Develop a lightweight client for Rucio ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4097"},"#4097")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Versioned (History) Tables should be defined explicitly ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2063"},"#2063")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Core & Internal : Add did_type column + index on did_meta table ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4668"},"#4668")),Object(i.b)("li",{parentName:"ul"},"Database: Add new index on messages.services ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4647"},"#4647")),Object(i.b)("li",{parentName:"ul"},"Multi VO: Supporting longer VO names in multi-VO rucio? ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4548"},"#4548")),Object(i.b)("li",{parentName:"ul"},"Release management: pyflakes, flake8, pylint, pycodestyle dependency upgrade ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4162"},"#4162")),Object(i.b)("li",{parentName:"ul"},"Replicas: replica sorting by GeoIP improvements ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4661"},"#4661")),Object(i.b)("li",{parentName:"ul"},"Rules: Possibility to inject rules delayed ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2639"},"#2639")),Object(i.b)("li",{parentName:"ul"},"Subscriptions: Subscriptions columns for filter and replication_rules need to be extended ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4298"},"#4298")),Object(i.b)("li",{parentName:"ul"},"Testing: Testing TPC transfers with Rucio  ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4190"},"#4190")),Object(i.b)("li",{parentName:"ul"},"Transfers: Rework transfers workflow ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4499"},"#4499"))),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Inconsistency in command-line options to specify RSEs ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1839"},"#1839")),Object(i.b)("li",{parentName:"ul"},"Clients: Further list_replicas changes ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4603"},"#4603")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Follow-up for moving EXTRA_MODULES importing to util function ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4168"},"#4168")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Replace FTSState ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4241"},"#4241")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Remove further sensitive language ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4677"},"#4677")),Object(i.b)("li",{parentName:"ul"},"Database: Add an rse_id index for the replicas table ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4627"},"#4627")),Object(i.b)("li",{parentName:"ul"},"Deletion: Make the time before tombstone is set configurable ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4436"},"#4436")),Object(i.b)("li",{parentName:"ul"},"Deletion: Rename reaper2 to reaper ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4462"},"#4462")),Object(i.b)("li",{parentName:"ul"},"REST & API: Remove webpy endpoints and dependency ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4044"},"#4044")),Object(i.b)("li",{parentName:"ul"},"Release management: setup.py and requirements.txt overhaul ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4456"},"#4456")),Object(i.b)("li",{parentName:"ul"},"Release management: Update PyYAML for tests due to CVE-2020-14343 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4501"},"#4501")),Object(i.b)("li",{parentName:"ul"},"Release management: Python 3.9 support ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4670"},"#4670")),Object(i.b)("li",{parentName:"ul"},"Replicas: Allow specification of a default tombstone when registering replicas ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4491"},"#4491")),Object(i.b)("li",{parentName:"ul"},"Testing: Python 3.8(/3.9) in Testing ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4453"},"#4453")),Object(i.b)("li",{parentName:"ul"},"Transfers: Multihop intermediate replica tombstone ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4188"},"#4188")),Object(i.b)("li",{parentName:"ul"},"WebUI: Error message for unregistered users in webui is ATLAS specific ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1109"},"#1109"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: Fix FTSCompleteState capitalisation ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4562"},"#4562")),Object(i.b)("li",{parentName:"ul"},"Database: SQLAlchemy changed the Enum create_constraint default ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4737"},"#4737")),Object(i.b)("li",{parentName:"ul"},"Release management: Upgrade urllib due to CVE-2021-33503 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4680"},"#4680")),Object(i.b)("li",{parentName:"ul"},"Testing: timeouts in integration_tests ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4674"},"#4674"))))}u.isMDXComponent=!0},377:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(a),m=r,d=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return a?n.a.createElement(d,o(o({ref:t},l),{},{components:a})):n.a.createElement(d,o({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);