(self.webpackChunk_ali_psolution_lzd_head_foot=self.webpackChunk_ali_psolution_lzd_head_foot||[]).push([[545,847,769],{519:function(a,n,e){e.d(n,{d8:function(){return o},ej:function(){return i},nJ:function(){return t}});var o=function(a,n,e){if("number"===typeof(e=Object.assign({path:"/"},e)).expires){var o=new Date;o.setMilliseconds(o.getMilliseconds()+864e5*e.expires),e.expires=o}e.expires=e.expires?e.expires.toUTCString():"","object"===typeof n&&(n=JSON.stringify(n)),n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),a=(a=(a=encodeURIComponent(String(a))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var i="";for(var t in e)e[t]&&(i+="; ".concat(t),!0!==e[t]&&(i+="=".concat(e[t])));return document.cookie="".concat(a,"=").concat(n).concat(i)},i=function(a){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=a?null:{},o=document.cookie?document.cookie.split("; "):[],i=/(%[0-9A-Z]{2})+/g,t=0;t<o.length;t++){var r=o[t].split("="),c=r.slice(1).join("=");n.json||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var d=r[0].replace(i,decodeURIComponent);if(c=c.replace(i,decodeURIComponent),n.json)try{c=JSON.parse(c)}catch(m){}if(a===d){e=c;break}a||(e[d]=c)}catch(m){}}return e},t=function(a){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(a,"",Object.assign(n,{expires:-1}))}},8644:function(a,n,e){e.d(n,{EU:function(){return l},GR:function(){return d},Gg:function(){return s},PU:function(){return D},Qi:function(){return g},Yq:function(){return c},ej:function(){return b},qA:function(){return u},tq:function(){return r},y1:function(){return m}});var o=e(519),i=e(4261),t="undefined"!==typeof navigator&&navigator.userAgent?navigator.userAgent:"";function r(){return/Android|webOS|iPhone|iPad|BlackBerry/.test(t)}function c(){return/AliApp\(LA/i.test(t)}function d(){return/AliApp\(DZ/i.test(t)||/AliApp\(SM/i.test(t)}function m(){var a="object"===typeof location&&location.hostname||"";return!!a&&/127\.0\.0\.1|localhost|daily|waptest|\.test/.test(a)}function l(){var a="object"===typeof location&&location.hostname||"";return!!a&&(a.indexOf("pre-www.")>=0||a.indexOf("pre-wormhole.")>=0||a.indexOf("-p.lazada.")>=0||a.indexOf("-p.daraz.")>=0||a.indexOf("-p.shop.")>=0||a.indexOf("pre-wallet-nav.")>=0||a.indexOf("pre-ewallet-aipay.")>=0||a.indexOf("i.lazada.")>=0||a.indexOf("pre.lazada.")>=0||a.indexOf("-staging.lazada.")>=0||a.indexOf("-staging.daraz.")>=0||a.indexOf("-staging.shop.")>=0)}function s(){return!m()&&!l()}function u(){var a=t.toLocaleLowerCase();if(/skywalker/i.test(a))return"dana";var n="",e=a.match(/(gcash|tngkit|truemoney|momo|zalo|paylah|lazlite)/gi);return e&&e[0]&&(n=e[0]),n}function p(a){return a?a.split("|"):[]}function w(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";a=a.toLocaleUpperCase();var e=i.Z[a]?i.Z[a].lang:[];if(!Array.isArray(e))return n;for(var o="",t=0;t<e.length;t++){var r=e[t];if(r&&r.indexOf(n)>-1){o=r;break}}return o||(o=e[0]),o}function f(){var a=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e="",t="",r=p((0,o.ej)("hng"));if("object"===typeof window&&window._i18n_){var c=window._i18n_;if("string"===typeof c)try{c=JSON.parse(c)}catch(l){}"object"===typeof c&&(e=c.regionID,t=c.language)}if(!e&&window.g_config&&"object"===typeof window.g_config&&(e=window.g_config.regionID,t=window.g_config.language),!e&&"object"===typeof location&&location.hostname){for(var d in i.Z){var m=i.Z[d];if(m&&m.domain&&location.hostname.indexOf(m.domain)>-1){e=m.regionID;break}}r.length>1&&(t=r[1])}return e||r.length>=4&&(e=r[0],t=r[1]),n&&r.length>1&&(t=r[1]),t=w(e=e||"SG",t)||"en",a&&(t=t.substring(0,2)),{regionID:e.toLocaleUpperCase(),language:t}}function g(){var a=f().regionID;return["SG","MY","PH","VN","TH","ID"].includes(a)}function b(){var a=f().regionID;return["BD","LK","MM","NP","PK"].includes(a)}function D(){return"MM"===f().regionID}n.ZP=f},2545:function(a,n,e){e.d(n,{Z:function(){return I}});var o=e(2483),i=e(519),t=e(8644),r="callback";function c(){return"jsonp_".concat(Date.now(),"_").concat(Math.ceil(1e5*Math.random()))}function d(a){try{delete window[a]}catch(n){window[a]=void 0}}function m(a){document.getElementsByTagName("head")[0].removeChild(a)}function l(a){document.getElementsByTagName("head")[0].appendChild(a)}var s={DAILY:{prefix:"acs",subDomain:"waptest",mainDomain:"lazada.test"},PRE:{ID:{prefix:"",subDomain:"acs-wapa",mainDomain:"lazada.co.id"},MY:{prefix:"",subDomain:"acs-wapa",mainDomain:"lazada.com.my"},PH:{prefix:"",subDomain:"acs-wapa",mainDomain:"lazada.com.ph"},SG:{prefix:"",subDomain:"acs-wapa",mainDomain:"lazada.sg"},SG_RED_MART:{prefix:"",subDomain:"acs-wapa-rm",mainDomain:"lazada.sg"},TH:{prefix:"",subDomain:"acs-wapa",mainDomain:"lazada.co.th"},VN:{prefix:"",subDomain:"acs-wapa",mainDomain:"lazada.vn"},PK:{prefix:"",subDomain:"acs-wapa",mainDomain:"daraz.pk"},BD:{prefix:"",subDomain:"acs-wapa",mainDomain:"daraz.com.bd"},MM:{prefix:"",subDomain:"acs-wapa",mainDomain:"shop.com.mm"},NP:{prefix:"",subDomain:"acs-wapa",mainDomain:"daraz.com.np"},LK:{prefix:"",subDomain:"acs-wapa",mainDomain:"daraz.lk"}},PROD:{ID:{prefix:"",subDomain:"acs-m",mainDomain:"lazada.co.id"},MY:{prefix:"",subDomain:"acs-m",mainDomain:"lazada.com.my"},PH:{prefix:"",subDomain:"acs-m",mainDomain:"lazada.com.ph"},SG:{prefix:"",subDomain:"acs-m",mainDomain:"lazada.sg"},TH:{prefix:"",subDomain:"acs-m",mainDomain:"lazada.co.th"},VN:{prefix:"",subDomain:"acs-m",mainDomain:"lazada.vn"},PK:{prefix:"",subDomain:"acs-m",mainDomain:"daraz.pk"},BD:{prefix:"",subDomain:"acs-m",mainDomain:"daraz.com.bd"},MM:{prefix:"",subDomain:"acs-m",mainDomain:"shop.com.mm"},NP:{prefix:"",subDomain:"acs-m",mainDomain:"daraz.com.np"},LK:{prefix:"",subDomain:"acs-m",mainDomain:"daraz.lk"}}},u={en:"Network error, please try again later",id:"Kesalahan jaringan, coba lagi nanti",ms:"Ralat rangkaian, sila cuba lagi kemudian",my:"\u1000\u103d\u1014\u103a\u101a\u1000\u103a\u1000\u102d\u102f\u1021\u1019\u103e\u102c\u1038, \u1014\u1031\u102c\u1000\u103a\u1019\u103e\u102c\u1011\u1015\u103a\u1000\u103c\u102d\u102f\u1038\u1005\u102c\u1038\u1000\u103c\u100a\u1037\u103a\u1015\u102b",th:"\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14\u0e02\u0e2d\u0e07\u0e40\u0e04\u0e23\u0e37\u0e2d\u0e02\u0e48\u0e32\u0e22\u0e42\u0e1b\u0e23\u0e14\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07\u0e43\u0e19\u0e20\u0e32\u0e22\u0e2b\u0e25\u0e31\u0e07",vi:"L\u1ed7i m\u1ea1ng, vui l\xf2ng th\u1eed l\u1ea1i sau",bn:"\u09a8\u09c7\u099f\u0993\u09af\u09bc\u09be\u09b0\u09cd\u0995 \u09a4\u09cd\u09b0\u09c1\u099f\u09bf, \u09a6\u09af\u09bc\u09be \u0995\u09b0\u09c7 \u09aa\u09b0\u09c7 \u0986\u09ac\u09be\u09b0 \u099a\u09c7\u09b7\u09cd\u099f\u09be \u0995\u09b0\u09c1\u09a8",si:"\u0da2\u0dcf\u0dbd \u0daf\u0ddd\u0dc2\u0dba, \u0db1\u0dd0\u0dc0\u0dad \u0d8b\u0dad\u0dca\u0dc3\u0dcf\u0dc4 \u0d9a\u0dbb\u0db1\u0dca\u0db1",ne:"\u0938\u091e\u094d\u091c\u093e\u0932 \u0924\u094d\u0930\u0941\u091f\u093f, \u0915\u0943\u092a\u092f\u093e \u092a\u091b\u093f \u092b\u0947\u0930\u093f \u092a\u094d\u0930\u092f\u093e\u0938 \u0917\u0930\u094d\u0928\u0941\u0939\u094b\u0938\u094d",ur:"\u0646\u06cc\u0679 \u0648\u0631\u06a9 \u06a9\u06cc \u063a\u0644\u0637\u06cc\u060c \u0628\u0631\u0627\u06c1 \u06a9\u0631\u0645 \u0628\u0639\u062f \u0645\u06cc\u06ba \u062f\u0648\u0628\u0627\u0631\u06c1 \u06a9\u0648\u0634\u0634 \u06a9\u0631\u06cc\u06ba"};function p(){var a=(0,t.ZP)(!0,!0).language;return u[(void 0===a?"EN":a).toLowerCase()]||u.en}function w(a){var n=a&&a.length&&a[0].split("::");return-1!==a[0].indexOf("FAIL_SYS")||-1!==a[0].indexOf("SYSTEM_ERROR")||-1!==a[0].indexOf("UNKNOWN_FAIL_CODE")||-1!==a[0].indexOf("TIMEOUT")?{key:n[0],displayMessage:p()}:n&&n[1]?{key:n[0],displayMessage:n[1]}:{key:a[0],displayMessage:p()}}var f=["SESSION_EXPIRED","SID_INVALID","AUTH_REJECT","NEED_LOGIN"],g=(0,t.ZP)(!0,!0),b=g.regionID,D=g.language,h=function(){var a=(0,t.y1)();return(0,t.Qi)()?a?"4272":"24677475":(0,t.ej)()?(0,t.PU)()?a?"60040780":"24936599":a?"60040781":"24937400":void 0};function z(){return(0,t.y1)()?"buyer.lazada.test":(0,t.EU)()?{SG:"member-p.lazada.sg",MY:"member-p.lazada.com.my",ID:"member-p.lazada.co.id",VN:"member-p.lazada.vn",TH:"member-p.lazada.co.th",PH:"member-p.lazada.com.ph",PK:"member-p.daraz.pk",BD:"member-p.daraz.com.bd",MM:"member-p.shop.com.mm",NP:"member-p.daraz.com.np",LK:"member-p.daraz.lk"}[b]||"":{SG:"member-m.lazada.sg",MY:"member-m.lazada.com.my",ID:"member-m.lazada.co.id",VN:"member-m.lazada.vn",TH:"member-m.lazada.co.th",PH:"member-m.lazada.com.ph",PK:"member-m.daraz.pk",BD:"member-m.daraz.com.bd",MM:"member-m.shop.com.mm",NP:"member-m.daraz.com.np",LK:"member-m.daraz.lk"}[b]||""}function y(){return(0,t.y1)()?"buyer.lazada.test":(0,t.EU)()?{SG:"pre-www.lazada.sg",MY:"pre-www.lazada.com.my",ID:"pre-www.lazada.co.id",VN:"pre-www.lazada.vn",TH:"pre-www.lazada.co.th",PH:"pre-www.lazada.com.ph",PK:"pre-www.daraz.pk",BD:"pre-www.daraz.com.bd",MM:"pre-www.shop.com.mm",NP:"pre-www.daraz.com.np",LK:"pre-www.daraz.lk"}[b]||"":{SG:"www.lazada.sg",MY:"www.lazada.com.my",ID:"www.lazada.co.id",VN:"www.lazada.vn",TH:"www.lazada.co.th",PH:"www.lazada.com.ph",PK:"www.daraz.pk",BD:"www.daraz.com.bd",MM:"www.shop.com.mm",NP:"www.daraz.com.np",LK:"www.daraz.lk"}[b]||""}function v(){var a=(0,t.ZP)().regionID.toLowerCase(),n="/wow/gcp/".concat(a,"/member/");return(0,t.EU)()?"".concat(n,"login-signup-test"):"".concat(n,"login-signup")}var P=function(a){},x=(0,t.y1)()?s.DAILY:(0,t.EU)()?s.PRE[b]:s.PROD[b],M={};function k(a,n,e,o){var i=a.replace(/-/g,"_"),t=a.replace(/,/g,"/"),s="//overseas-aladdin.alicdn.com/bottom/".concat(t,"/language=").concat(D,"/regionID=").concat(b,"/data.jsonp"),u="callback_".concat(i,"_language_").concat(D,"_regionID_").concat(b);if(n&&n.isByBackParamGen){for(var p=function(a){if(Object.prototype.hasOwnProperty.call(n.data,w[a])){var e=n.data[w[a]];if("undefined"!==typeof e&&null!==e&&""!==e.toString().trim()){var o=e,i="_".concat(e);if("extParam"===w[a]){for(var t=JSON.parse(e),r=0;r<z.length;r++)Object.prototype.hasOwnProperty.call(t,z[r])&&delete t[z[r]];var c="";Object.keys(t).sort().forEach((function(a){c+="_".concat(a,"_").concat(t[a])})),i=c,o=c.substr(1)}g+="/".concat(w[a],"=").concat(o),f+="_".concat(w[a]).concat(i)}}},w=n.data.backupParams.split(",").sort(),f="",g="",h=n.host||"ald-lamp.alicdn.com",z=n.needRemoveExtParamLists||[],y=0;y<w.length;y++)p(y);s="//".concat(h,"/bottom/").concat(t).concat(g,"/data.jsonp"),u="callback_".concat(i).concat(f)}(function(a){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(e,o){var i,t=n.timeout,s=n.jsonpCallback,u=n.jsonpCallbackFunctionName;t||(t=5e3),s||(s=r),u||(u=c());var p=document.createElement("script");window[u]=function(a){e({ok:!0,json:function(){return Promise.resolve(a)}}),i&&clearTimeout(i),m(p),d(u)},a+=-1===a.indexOf("?")?"?":"&",p.setAttribute("src","".concat(a).concat(s,"=").concat(u)),l(p),i=setTimeout((function(){clearTimeout(i),o(new Error("JSONP request to ".concat(a," timed out"))),d(u),m(p)}),t)}))})(s,{jsonpCallbackFunctionName:u}).then((function(a){e(a.json())})).catch((function(a){o(a)}))}function S(a,n,e){var o=a.isIcmsMtop||0,i=a.data&&a.data.appId||a.api,t=a.data&&a.data.isbackup||"",r=a.bottomConfig||{};return r.data||(r.data=a.data||{}),window.lib.mtop.request(a,(function(c){var d=c&&c.ret&&c.ret.length&&c.ret[0].split("::");c&&c.ret&&c.ret.length&&"WV_ERR::PARAM_PARSE_ERROR"===c.ret[0]?window.lib.mtop.H5Request(a,n,e):"SUCCESS"===d[0]&&c.data?o&&c.data.resultValue&&c.data.resultValue[i]?"false"===c.data.resultValue[i].success&&c.data.resultValue[i].success&&t?k(i,r,n,e):n(c.data.resultValue[i]):n(c):o&&t?k(i,r,n,e):(c.errorCode=w(c.ret)||{},c.errorCodeMessage=c.errorCode.displayMessage,e(c))}),(function(a){o&&t?k(i,r,n,e):(a.errorCode=w(a.ret)||{},a.errorCodeMessage=a.errorCode.displayMessage,e(a))}))}var I={request:function(a,n,e){var o=a.lzdExtraParams;delete a.lzdExtraParams,a.method&&delete a.method,a.method&&delete a.mock,a.data=a.data||{};var r={"x-i18n-language":D,"x-i18n-regionID":b,entrance:(0,t.qA)()};a=Object.assign({},{api:"",v:"1.0",ecode:0,type:"GET",isSec:1,AntiCreep:!0,timeout:2e4,needLogin:!1,appKey:h(),dataType:"json",sessionOption:"AutoLoginOnly"},r,a);var c=(0,i.ej)("lzd_uid");c&&(r["x-uid"]=c);var d=function(a){var n={};return window.umidTokenFromHeader?n={"x-ua":window.uabModule&&window.uabModule.getUA?window.uabModule.getUA({OnlyHost:a}):window.UAFromHeader,"x-umidtoken":window.umidTokenFromHeader}:window.Group_umid&&window.Group_umid.getUA&&window.Group_umid.getUmidToken&&(n={"x-ua":window.Group_umid.getUA(),"x-umidtoken":window.Group_umid.getUmidToken()}),n}(a.shortUa?1:0),m=function(a){var n={};return 1===a.isSec&&window.fyModule&&(n={"x-ua":window.fyModule.getFYToken?window.fyModule.getFYToken():"","x-umidtoken":window.fyModule.getUidToken?window.fyModule.getUidToken():""}),n}(a);if(a.ext_headers=Object.assign(a.ext_headers||{},r,d,m),0!==a.api.length){if(!Promise){var l="\u5f53\u524d\u6d4f\u89c8\u5668\u4e0d\u652f\u6301Promise\uff0c\u8bf7\u5728windows\u5bf9\u8c61\u4e0a\u6302\u8f7dPromise\u5bf9\u8c61,\u53ef\u53c2\u8003\uff08http://gitlab.alibaba-inc.com/mtb/lib-es6polyfill/tree/master\uff09\u4e2d\u7684\u89e3\u51b3\u65b9\u6848";throw window.lib.mtop={ERROR:l},new Error(l)}return new Promise((function(i,r){var c=function(a){n?n(a):i(a)},d=function(a){console.warn("UAT mtop error log:".concat(JSON.stringify(a))),e?e(a):r(a)};if(window.lib&&window.lib.mtop)return function(){var a=Object.assign({prefix:"",subDomain:"acs-m",mainDomain:"lazada.com"},x,M),n=a.prefix,e=a.subDomain,o=a.mainDomain;window.lib.mtop.config.prefix=n,window.lib.mtop.config.subDomain=e,window.lib.mtop.config.mainDomain=o,window.lib.mtop.config.pageDomain=o}(),S(a,c,(function(n){if(!function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";for(var n in"string"!==typeof a&&(a=JSON.stringify(a)),f)if(-1!==a.indexOf(f[n]))return!0;return!1}(n.ret)||!0!==a.needLogin)return d(n);!function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:P,o=window.location.href;if((0,t.Yq)()||(0,t.GR)())window&&window.WindVane&&window.WindVane.call("LAWVUserInfo","login",{},(function(a){n&&n(a)}),(function(){e&&e({errorCode:{displayMessage:"Sorry, you have not login"}})}));else{var i="",r="spm=".concat(a.spm||"").concat(a.bizScene?"&bizScene=".concat(a.bizScene):"");i=(0,t.y1)()?"//buyer.lazada.test/user/login?redirect=".concat(encodeURIComponent(o),"&hybrid=1&").concat(r):(0,t.qA)()||!(0,t.tq)()?"//".concat(z(),"/user/login?redirect=").concat(encodeURIComponent(o),"&hybrid=1&").concat(r):"//".concat(y()).concat(v(),"?redirect=").concat(encodeURIComponent(o),"&hybrid=1&").concat(r),window.location.href=i}}(o,(function(){a.fromLoginCallBack=!0,S(a,c,d)}),d)}));d("lib is not defined, please check out lib-mtop.js has been loaded")}))}console.error("api can not be empty")},config:function(a,n){"undefined"!==typeof window.lib&&window.lib.mtop&&("string"===typeof a?(M[a]=n,window.lib.mtop.config[a]=n):(M=(0,o._)({},window.lib.mtop.config,a),window.lib.mtop.config=(0,o._)({},window.lib.mtop.config,a)))},setDomain:function(a){Object.assign(M,a)},RESPONSE_TYPE:{ERROR:-1,SUCCESS:0,TOKEN_EXPIRED:1,SESSION_EXPIRED:2}}},4261:function(a,n){n.Z={ID:{id:"360",lang:["id","en"],langShort:["id","en"],currency:"IDR",domain:"lazada.co.id",regionID:"ID"},MY:{id:"458",currency:"MYR",lang:["en-MY","ms","zh"],langShort:["en","ms","zh"],domain:"lazada.com.my",regionID:"MY"},PH:{id:"608",currency:"PHP",lang:["en-PH"],langShort:["en"],domain:"lazada.com.ph",regionID:"PH"},SG:{id:"702",currency:"SGD",lang:["en-SG","zh"],langShort:["en","zh"],domain:"lazada.sg",regionID:"SG"},TH:{id:"764",currency:"THB",lang:["th","en"],domain:"lazada.co.th",regionID:"TH"},VN:{id:"704",currency:"VND",lang:["vi","en"],domain:"lazada.vn",regionID:"VN"},KH:{id:"116",lang:["km-KH","zh-KH","en-KH"],langShort:["km","zh","en"],currency:"KHR",domain:"kh.lazada.com",regionID:"KH"},BD:{id:"050",currency:"BDT",lang:["en-BD","bn-BD"],langShort:["en","bn"],domain:"daraz.com.bd",regionID:"BD"},LK:{id:"144",currency:"LKR",lang:["en-LK","si-LK"],langShort:["en","si"],domain:"daraz.lk",regionID:"LK"},MM:{id:"104",currency:"MMK",lang:["en-MM","my-MM"],langShort:["en","my"],domain:"shop.com.mm",regionID:"MM"},NP:{id:"524",currency:"NPR",lang:["en-NP","ne-NP"],langShort:["en","ne"],domain:"daraz.com.np",regionID:"NP"},PK:{id:"586",currency:"PKR",lang:["en-PK","ur-PK"],langShort:["en","ur"],domain:"daraz.pk",regionID:"PK"}}}}]);