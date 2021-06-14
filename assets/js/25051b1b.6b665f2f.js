(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var o=n(3),i=n(7),r=(n(0),n(348)),a=["components"],s={id:"using-rucio-client",title:"Using the Rucio Client",sidebar_label:"Using the Rucio Client"},c={unversionedId:"using-rucio-client",id:"using-rucio-client",isDocsHomePage:!1,title:"Using the Rucio Client",description:"Rucio provides several commands for the end-user. See executables.",source:"@site/../docs/using-rucio-client.md",sourceDirName:".",slug:"/using-rucio-client",permalink:"/documentation/using-rucio-client",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/using-rucio-client.md",version:"current",lastUpdatedBy:"Benedikt Ziemons",lastUpdatedAt:1623678816,formattedLastUpdatedAt:"6/14/2021",sidebar_label:"Using the Rucio Client",frontMatter:{id:"using-rucio-client",title:"Using the Rucio Client",sidebar_label:"Using the Rucio Client"},sidebar:"docs",previous:{title:"Setting Up the Rucio Client",permalink:"/documentation/setting-up-rucio-client"},next:{title:"Prerequisites",permalink:"/documentation/installing-rucio-server"}},u=[{value:"Getting user information",id:"getting-user-information",children:[]},{value:"Open ID Connect authentication examples",id:"open-id-connect-authentication-examples",children:[]},{value:"Querying basic information about RSEs",id:"querying-basic-information-about-rses",children:[]},{value:"Querying information about DIDs",id:"querying-information-about-dids",children:[]},{value:"Rules operations",id:"rules-operations",children:[]},{value:"Accessing files",id:"accessing-files",children:[]}],l={toc:u};function d(e){var t=e.components,n=Object(i.a)(e,a);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Rucio provides several commands for the end-user. See ",Object(r.b)("a",{parentName:"p",href:"/documentation/bin"},"executables"),"."),Object(r.b)("h2",{id:"getting-user-information"},"Getting user information"),Object(r.b)("p",null,"The first thing you might try is to check who you are:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ rucio whoami\nstatus     : ACTIVE\naccount    : jdoe\naccount_type : SERVICE\ncreated_at : 2014-01-17T07:52:18\nupdated_at : 2014-01-17T07:52:18\nsuspended_at : None\ndeleted_at : None\nemail      : jdoe@blahblah.com\n")),Object(r.b)("p",null,"You can switch between different accounts by setting the RUCIO_ACCOUNT\nvariable:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ export RUCIO_ACCOUNT=root\n$ rucio whoami\nstatus     : ACTIVE\naccount    : jdoe\naccount_type : SERVICE\ncreated_at : 2014-01-17T07:51:59\nupdated_at : 2014-01-17T07:51:59\nsuspended_at : None\ndeleted_at : None\nemail      : root@blahblah.com\n")),Object(r.b)("p",null,"If you try to authenticate with an account that is not mapped with your\ncredentials:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ export RUCIO_ACCOUNT=janedoe\n$ rucio whoami\ncannot get auth_token\n2018-01-30 16:50:08,554 ERROR   Cannot authenticate.\nDetails: x509 authentication failed\n2018-01-30 16:50:08,554 ERROR   Please verify that your proxy is still valid and renew it if needed.\n")),Object(r.b)("p",null,"If you're running a multi-VO instance of Rucio, then the VO to\nauthenticate against is set in the configuration file. However you can\nspecify a different VO as a CLI argument if your credentials map to an\naccount there too:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ rucio whoami\nstatus     : ACTIVE\naccount    : jdoe\naccount_type : SERVICE\ncreated_at : 2014-01-17T07:52:18\nupdated_at : 2014-01-17T07:52:18\nsuspended_at : None\ndeleted_at : None\nemail      : jdoe@normalvo.com\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ rucio --vo abc --account root whoami\nstatus     : ACTIVE\naccount    : root\naccount_type : SERVICE\ncreated_at : 2014-01-17T07:51:59\nupdated_at : 2014-01-17T07:51:59\nsuspended_at : None\ndeleted_at : None\nemail      : root@abc.com\n")),Object(r.b)("h2",{id:"open-id-connect-authentication-examples"},"Open ID Connect authentication examples"),Object(r.b)("p",null,"There are 3 CLI login methods. Two were introduced in order to avoid\ntyping the password in the Rucio CLI. The default Identity Provider\n(IdP)/issuer is configured on the side of Rucio server. In case multiple\nIdPs are supported, user can specify which one he desires to use by\n",Object(r.b)("inlineCode",{parentName:"p"},"--oidc-issuer=\\<IdP nickname\\>")," option (where IdP nickname is the key\nunder which issuers are configured on Rucio server side in the\n","[idpsecrets.json]","{.title-ref} file). In the following examples we assume\nthat user does not want to use the rucio account name specified in the\nrucio.cfg file on the client side (if so ",Object(r.b)("inlineCode",{parentName:"p"},"-a")," parameter can be omitted).\nIf ","[auth_type]","{.title-ref}",'[ is specified to be \\"oidc\\" in the rucio.cfg\nfile, ]',"{.title-ref}","[-S]","{.title-ref}","`"," can be omitted as well.\nFurthermore, we use the same default issuer as configured on Rucio\nserver side."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Login via user's browser + fetch code:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"rucio -a=\\<rucio_account_name\\> -S=OIDC -v whoami\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Login via user's browser + polling Rucio auth server:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"rucio -a=\\<rucio_account_name\\> -S=OIDC --oidc-polling -v whoami\n")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Automatic login:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"rucio -a=\\<rucio_account_name\\> -S=OIDC --oidc-user=\\<idp_username\\> --oidc-password=\\<idp_password\\> --oidc-auto -v whoami\n")),Object(r.b)("p",null,"We strongly discourage this approach, typing your password in CLI does\nnot comply with OAuth2/OIDC standard !"),Object(r.b)("p",null,"Options for automatic token refresh: Assuming the rucio-oauth-manager\ndaemon is running on the Rucio server side, one can also grant Rucio a\nrefresh token and specify the time for which Rucio should act on behalf\nof the user (in hours) using the ",Object(r.b)("inlineCode",{parentName:"p"},"--refresh-lifetime")," option:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'rucio -a=\\<rucio_account_name\\> -S=OIDC --oidc-scope="openid profile offline_access" --oidc-refresh-lifetime=24 -v whoami\n')),Object(r.b)("p",null,"If Rucio Server is granted a user both valid access and refresh tokens,\nit is also possible to configure Rucio Client to ask Rucio Server for\ntoken refresh. Assuming user used one of the 3 CLI authentication\nmethods above + requested offline_access in the scope, rucio.cfg file\ncan be configured with the following parameters in the client\nsection:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"[client]\nauth_oidc_refresh_active true\nauth_oidc_refresh_before_exp 20\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"auth_oidc_refresh_active")," is false by default. If set to true, the\nRucio Client will be following up token expiration timestamp. As soon as\nthe current time gets to ",Object(r.b)("inlineCode",{parentName:"p"},"auth_oidc_refresh_before_exp")," minutes (20 min\ndefault) before token expiration, Rucio Client will ask Rucio Server for\ntoken refresh with every command. If the token has been refreshed in the\nrecent 5 min already once, the same one will be returned (protection on\nthe Rucio Server side). If the presented token has been refreshed\nautomatically on the Rucio Server side by a oauth_manager daemon run, it\nwill return this existing new token. If the presented token is\ninvalid/expired/does not have refresh token in the DB, no refresh will\nbe attempted."),Object(r.b)("p",null,"Example of rucio.cfg file configuration with automatic token refresh:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"[client]\n\nrucio_host = https://\\<rucio_host\\>:443\nauth_host = https://\\<rucio_auth_host\\>:443\nauth_type = oidc\naccount = \\<rucio_account_name\\>\noidc_audience = rucio\noidc_scope = openid profile offline_access\noidc_issuer = wlcg\nauth_oidc_refresh_active true\nauth_oidc_refresh_before_exp 20\n")),Object(r.b)("p",null,"Then, you should be able to do simply:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"rucio -v whoami\n")),Object(r.b)("p",null,"and follow the instruction for first log-in with your browser. New token\nwill be requested before the current expires if a user types a rucio\ncommand within ",Object(r.b)("inlineCode",{parentName:"p"},"auth_oidc_refresh_before_exp")," minutes before the expiry.\nNote: If user does not use Rucio Client within\n",Object(r.b)("inlineCode",{parentName:"p"},"auth_oidc_refresh_before_exp")," minutes before token expires, it will be\nnecessary to re-authenticate asking for a new offline_access token."),Object(r.b)("p",null,"If a user wishes to authenticate with Rucio using a JSON web token not\nissued via the Rucio login mechanisms (CLI, WebUI), one has to make sure\nthat:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The token scope claim is no less than the minimum scope (e.g. 'openid profile') required by the Rucio Auth server (configured there in the rucio.cfg file)."),Object(r.b)("li",{parentName:"ul"},"same as above is true for the use of audience claim"),Object(r.b)("li",{parentName:"ul"},"token issuer is known to Rucio Authentication server"),Object(r.b)("li",{parentName:"ul"},'the identity of the token ("SUB=\\<user sub claim',">",", ISS=\\<issuer url",">",'") is assigned to an existing Rucio account (pre-provisioned)')),Object(r.b)("p",null,"If so, one can directly present the token to the Rucio REST endpoint in\nthe \\'X-Rucio-Auth-Token\\' header, e.g.:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},' python\n import requests\n s=requests.session()\n your_token=\\<your JWT access token string\\>\n headers={\'X-Rucio-Auth-Token\': your_token}\n address=\'https://\\<Rucio Auth Server Name\\>/accounts/guenther\'\n result=s.get(address, headers=headers, verify=False)\n result.text\n u\'{"status": "ACTIVE", "account": "guenther", "account_type": "USER", "created_at": "2019-11-13T13:01:58", "suspended_at": null, "updated_at": "2019-11-13T13:01:58", "deleted_at": null, "email": "jaroslav.guenther@gmail.com"}\'\n')),Object(r.b)("p",null,"There is also an option to specify a ",Object(r.b)("inlineCode",{parentName:"p"},"auth_token_file_path")," in the\n",Object(r.b)("inlineCode",{parentName:"p"},"client")," section of the rucio.cfg file. Rucio Client will then store\nand search for user's token saved in such file:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"    [client]\n    auth_token_file_path = /path/to/token/file\n")),Object(r.b)("h2",{id:"querying-basic-information-about-rses"},"Querying basic information about RSEs"),Object(r.b)("p",null,"You can query the list of available RSEs:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ rucio list-rses\nSITE1_DISK\nSITE1_TAPE\nSITE2_DISK\nSITE2_SCRATCH\nSITE3_TAPE\n")),Object(r.b)("p",null,"If the RSEs are tagged with attributes you can build RSE expressions and\nquery the sites matching these expressions:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'$ rucio list-rses --expression "tier=1&disk=1"\nSITE1_DISK\nSITE2_DISK\n')),Object(r.b)("h2",{id:"querying-information-about-dids"},"Querying information about DIDs"),Object(r.b)("p",null,"To list all the possible scopes:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ rucio list-scopes\nmc\ndata\nuser.jdoe\nuser.janedoe\n")),Object(r.b)("p",null,"You can query the DIDs matching a certain pattern. It always requires to\nspecify the scope in which you want to search:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ rucio list-dids user.jdoe:*\n+-------------------------------------------+--------------+\n| SCOPE:NAME                                | [DID TYPE]   |\n|-------------------------------------------+--------------|\n| user.jdoe:user.jdoe.test.container.1234.1 | CONTAINER    |\n| user.jdoe:user.jdoe.test.container.1234.2 | CONTAINER    |\n| user.jdoe:user.jdoe.test.dataset.1        | DATASET      |\n| user.jdoe:user.jdoe.test.dataset.2        | DATASET      |\n| user.jdoe:test.file.1                     | FILE         |\n| user.jdoe:test.file.2                     | FILE         |\n| user.jdoe:test.file.3                     | FILE         |\n|-------------------------------------------+--------------|\n")),Object(r.b)("p",null,"You can filter by key/value, e.g.:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ rucio list-dids --filter type=CONTAINER\n+-------------------------------------------+--------------+\n| SCOPE:NAME                                | [DID TYPE]   |\n|-------------------------------------------+--------------|\n| user.jdoe:user.jdoe.test.container.1234.1 | CONTAINER    |\n| user.jdoe:user.jdoe.test.container.1234.2 | CONTAINER    |\n|-------------------------------------------+--------------|\n")),Object(r.b)("p",null,"If you want to resolve a collection (CONTAINER or DATASET) into the list\nof its constituents:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ rucio list-content user.jdoe:user.jdoe.test.container.1234.1\n+------------------------------------+--------------+\n| SCOPE:NAME                         | [DID TYPE]   |\n|------------------------------------+--------------|\n| user.jdoe:user.jdoe.test.dataset.1 | DATASET      |\n| user.jdoe:user.jdoe.test.dataset.2 | DATASET      |\n+------------------------------------+--------------+\n")),Object(r.b)("p",null,"You can resolve also the collections (CONTAINER or DATASET) into the\nlist of files:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ rucio list-files user.jdoe:user.jdoe.test.container.1234.1\n+-----------------------+--------------------------------------+-------------+------------+----------+\n| SCOPE:NAME            | GUID                                 | ADLER32     | FILESIZE   | EVENTS   |\n|-----------------------+--------------------------------------+-------------+------------+----------|\n| user.jdoe:test.file.1 | 9DF32550-D0D1-4482-9A26-0FBC46D6902A | ad:56fb0723 | 39.247 kB  |          |\n| user.jdoe:test.file.2 | 67E8CF14-F953-45F3-B3F5-E6143F89915F | ad:e3e573b5 | 636.075 kB |          |\n| user.jdoe:test.file.3 | 32CD7F8E-944B-4EA4-83E3-BABE48DB5751 | ad:22849380 | 641.427 kB |          |\n+-----------------------+--------------------------------------+-------------+------------+----------+\nTotal files : 3\nTotal size : 1.316 MB:\n")),Object(r.b)("h2",{id:"rules-operations"},"Rules operations"),Object(r.b)("p",null,"You can create a new rule like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'$ rucio add-rules --lifetime 1209600 user.jdoe:user.jdoe.test.container.1234.1 1 "tier=1&disk=1"\na12e5664555a4f12b3cc6991db5accf9\n')),Object(r.b)("p",null,"The command returns the rule_id of the rule."),Object(r.b)("p",null,"You can list the rules for a particular DID:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ rucio list-rules user.jdoe:user.jdoe.test.container.1234.1\nID                                ACCOUNT    SCOPE:NAME                                 STATE[OK/REPL/STUCK]    RSE_EXPRESSION        COPIES  EXPIRES (UTC)\n--------------------------------  ---------  -----------------------------------------  ----------------------  ------------------  --------  -------------------\na12e5664555a4f12b3cc6991db5accf9  jdoe       user.jdoe:user.jdoe.test.container.1234.1  OK[3/0/0]               tier=1&disk=1       1         2018-02-09 03:57:46\nb0fcde2acbdb489b874c3c4537595adc  janedoe    user.jdoe:user.jdoe.test.container.1234.1  REPLICATING[4/1/1]      tier=1&tape=1       2\n4a6bd85c13384bd6836fbc06e8b316d7  mc         user.jdoe:user.jdoe.test.container.1234.1  OK[3/0/0]               tier=1&tape=1       2\n")),Object(r.b)("p",null,"The state indicates how many locks (physical replicas of the files) are\nOK, Replicating or Stuck"),Object(r.b)("h2",{id:"accessing-files"},"Accessing files"),Object(r.b)("p",null,"The command to download DIDs locally is called rucio download. It\nsupports various sets of option. You can invoke it like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"# rucio download user.jdoe:user.jdoe.test.container.1234.1\n2018-02-02 15:13:08,450 INFO    Thread 1/3 : Starting the download of user.jdoe:test.file.2\n2018-02-02 15:13:08,451 INFO    Thread 2/3 : Starting the download of user.jdoe:test.file.3\n2018-02-02 15:13:08,451 INFO    Thread 3/3 : Starting the download of user.jdoe:test.file.1\n2018-02-02 15:13:08,503 INFO    Thread 1/3 : File user.jdoe:test.file.2 trying from SITE1_DISK\n2018-02-02 15:13:08,549 INFO    Thread 2/3 : File user.jdoe:test.file.3 trying from SITE2_DISK\n2018-02-02 15:13:08,551 INFO    Thread 3/3 : File user.jdoe:test.file.1 trying from SITE1_DISK\n2018-02-02 15:13:10,399 INFO    Thread 3/3 : File user.jdoe:test.file.1 successfully downloaded from SITE1_DISK\n2018-02-02 15:13:10,415 INFO    Thread 2/3 : File user.jdoe:test.file.3 successfully downloaded from SITE2_DISK\n2018-02-02 15:13:10,420 INFO    Thread 3/3 : File user.jdoe:test.file.1 successfully downloaded. 39.247 kB in 1.85 seconds = 0.02 MBps\n2018-02-02 15:13:10,537 INFO    Thread 2/3 : File user.jdoe:test.file.3 successfully downloaded. 641.427 kB in 1.87 seconds = 0.34 MBps\n2018-02-02 15:13:10,614 INFO    Thread 1/3 : File user.jdoe:test.file.2 successfully downloaded from SITE1_DISK\n2018-02-02 15:13:10,633 INFO    Thread 1/3 : File user.jdoe:test.file.2 successfully downloaded. 636.075 kB in 2.11 seconds = 0.3 MBps\n----------------------------------\nDownload summary\n----------------------------------------\nDID user.jdoe:user.jdoe.test.container.1234.1\nTotal files :                                 3\nDownloaded files :                            3\nFiles already found locally :                 0\nFiles that cannot be downloaded :             0\n")))}d.isMDXComponent=!0},348:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n(0),i=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),p=o,h=d["".concat(a,".").concat(p)]||d[p]||b[p]||r;return n?i.a.createElement(h,s(s({ref:t},u),{},{components:n})):i.a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<r;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);