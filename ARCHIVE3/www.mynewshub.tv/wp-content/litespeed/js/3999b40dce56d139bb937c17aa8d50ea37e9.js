(self.AMP=self.AMP||[]).push({m:0,v:"2405300626000",n:"amp-auto-ads",ev:"0.1",l:!0,f:function(t,n){!function(){function n(t,n,i){return n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}function i(t,n){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),i.push.apply(i,r)}return i}function r(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?i(Object(e),!0).forEach((function(i){n(t,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,r=new Array(n);i<n;i++)r[i]=t[i];return r}function u(t,n){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(i)return(i=i.call(t)).next.bind(i);if(Array.isArray(t)||(i=function(t,n){if(t){if("string"==typeof t)return e(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){i&&(t=i);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=function(){var t=this;this.promise=new Promise((function(n,i){t.resolve=n,t.reject=i}))};function c(t,n){return(c=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,n){if(n&&("object"===f(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}var l=Array.isArray;function d(t,n){var i=t.length-n.length;return i>=0&&t.indexOf(n,i)==i}var v=Object.prototype,p=(v.hasOwnProperty,v.toString);function m(t){var n=Object.create(null);return t&&Object.assign(n,t),n}function g(t,n,i,r,e,u,o,a,c,s,f){return t}function b(t){return JSON.parse(t)}var y=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function w(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{return decodeURIComponent(t)}catch(t){return n}}function S(t){var n,i=m();if(!t)return i;for(;n=y.exec(t);){var r=w(n[1],n[1]),e=n[2]?w(n[2].replace(/\+/g," "),n[2]):"";i[r]=e}return i}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var A=self.__AMP_LOG;function j(t,n){throw new Error("failed to call initLogConstructor")}function C(t){return A.user||(A.user=M()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(A.user.win,t)?A.userForEmbed||(A.userForEmbed=M()):A.user}function M(t){return j()}function O(t,n,i,r,e,u,o,a,c,s,f){return t}function P(t,n,i,r,e,u,o,a,c,s,f){return C().assert(t,n,i,r,e,u,o,a,c,s,f)}function x(t){return(t.ownerDocument||t).defaultView}function k(t,n){return N(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n)}function E(t,n){return N((i=I(t),(r=I(i)).isSingleDoc()?r.win:r),n);var i,r}function I(t){return t.nodeType?(n=x(t),k(n,"ampdoc")).getAmpDoc(t):t;var n}function N(t,n){O(function(t,n){var i=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!i||!i.ctor)}(t,n));var i=function(t){var n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}(t)[n];return i.obj||(O(i.ctor),O(i.context),i.obj=new i.ctor(i.context),O(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}var R,q="__AMP__EXPERIMENT_TOGGLES";function T(t,n){return t.replace(/^|,/g,"$&".concat(n," "))}function _(t,n,i){return function(t,n){for(var i in n)t.setAttribute(i,n[i]);return t}(t.createElement(n),i)}var D=function(t){return E(t,"documentInfo").get()},U=function(t){return k(t,"extensions")},B=function(t){return E(t,"viewport")};function z(t,n,i,r){var e=[],u=r&&null!=r.value&&""!==r.value?encodeURIComponent(r.name)+"="+encodeURIComponent(String(r.value)):null,o=i-t.length;u&&(o-=u.length+1);for(var a=Object.keys(n),c=0;c<a.length;c++){var s=a[c],f=n[s];if(null!=f&&""!==f){var h=encodeURIComponent(s)+"=",l=encodeURIComponent(String(f)),d=h.length+l.length+1;if(d>o){var v=l.substr(0,o-h.length-1).replace(/%\w?$/,"");v&&e.push(h+v),u&&e.push(u);break}e.push(h+l),o-=d}}return e.length?t+"?"+e.join("&"):t}var F="amp-auto-ads",G={"type":!0,"rtc-config":!0,"layout":!0,"height":!0,"width":!0,"sticky":!0},$="attributes";function Y(t,n){return t[n]?(i=t[n],"[object Object]"!==p.call(i)||l(t[n])?(C().warn(F,n+" property not an object"),{}):function(t){var n={};for(var i in t)if(G[i]||i.startsWith("data-")){var r=f(t[i]);"number"==r||"string"==r||"boolean"==r?n[i]=String(t[i]):C().warn(F,"Attribute type not supported: "+r)}else C().warn(F,"Attribute not whitlisted: "+i);return n}(t[n])):{};var i}var K,L,X=function(){function t(t){this.fi=t,this.li=0,this.vi=0,this.di=m()}var n=t.prototype;return n.has=function(t){return!!this.di[t]},n.get=function(t){var n=this.di[t];if(n)return n.access=++this.vi,n.payload},n.put=function(t,n){this.has(t)||this.li++,this.di[t]={payload:n,access:this.vi},this.mi()},n.mi=function(){if(!(this.li<=this.fi)){var t,n=this.di,i=this.vi+1;for(var r in n){var e=n[r].access;e<i&&(i=e,t=r)}void 0!==t&&(delete n[t],this.li--)}},t}();function J(t,n){return K||(K=self.document.createElement("a"),L=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new X(100))),function(t,n,i){if(i&&i.has(n))return i.get(n);t.href=n,t.protocol||(t.href=t.href);var r,e={href:t.href,protocol:t.protocol,host:t.host,hostname:t.hostname,port:"0"==t.port?"":t.port,pathname:t.pathname,search:t.search,hash:t.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname),("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)&&(e.port="",e.host=e.hostname),r=t.origin&&"null"!=t.origin?t.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href,e.origin=r;var u=e;return i&&i.put(n,u),u}(K,t,n?null:L)}var H=function(){function t(t){this.lS=t}var n=t.prototype;return n.isEnabled=function(){return!0},n.isResponsiveEnabled=function(){return!0},n.getConfigUrl=function(){var t=D(this.lS),n=J(t.canonicalUrl).hostname,i=x(this.lS);return z("//pagead2.googlesyndication.com/getconfig/ama",{"client":this.lS.getAttribute("data-ad-client"),"plah":n,"ama_t":"amp","url":t.canonicalUrl,"debug_experiment_id":(/(?:#|,)deid=([\d,]+)/i.exec(i.location.hash)||[])[1]||null},4096)},n.filterConfig=function(t){return x(this.lS).adsbygoogle&&t.stickyAdAttributes&&(t.stickyAdAttributes["data-no-fill"]="true"),t},n.getAttributes=function(){var t={"type":"adsense","data-ad-client":this.lS.getAttribute("data-ad-client")},n=this.lS.getAttribute("data-ad-host"),i=this.lS.getAttribute("data-ad-host-channel");return n&&(t["data-ad-host"]=n,i&&(t["data-ad-host-channel"]=i)),t},n.getDefaultAdConstraints=function(){var t=B(this.lS).getSize().height;return{initialMinSpacing:t,subsequentMinSpacing:[{adCount:3,spacing:2*t},{adCount:6,spacing:3*t}],maxAdCount:8}},n.getSizing=function(){return{}},t}(),Q=function(){function t(t){this.lS=t}var n=t.prototype;return n.isEnabled=function(){return!0},n.isResponsiveEnabled=function(){return!1},n.getConfigUrl=function(){var t=D(this.lS);return z("//analytics.alright.network/amp/",{"p":this.lS.getAttribute("data-publisher-id"),"t":this.lS.getAttribute("data-page-type"),"c":this.lS.getAttribute("data-content-category")||"","u":t.canonicalUrl,"w":window.screen.width,"h":window.screen.height},4096)},n.filterConfig=function(t){return t},n.getAttributes=function(){return{"width":300,"height":250,"layout":"responsive","data-multi-size-validation":"false","type":"doubleclick","data-ad":"alright"}},n.getDefaultAdConstraints=function(){var t=B(this.lS).getSize().height;return{initialMinSpacing:t,subsequentMinSpacing:[{adCount:3,spacing:2*t},{adCount:6,spacing:3*t}],maxAdCount:8}},n.getSizing=function(){return{width:300,height:250}},t}(),V=function(){function t(t){this.lS=t}var n=t.prototype;return n.isEnabled=function(t){return!0},n.isResponsiveEnabled=function(){return!0},n.getConfigUrl=function(){var t=D(this.lS),n=this.lS.getAttribute("data-account-id");return n?z("https://v3.denakop.com/ad-request",{"a":n,"v":"amp","u":t.canonicalUrl},4096):z("//v2.denakop.com/ad-request/amp",{"p":this.lS.getAttribute("data-publisher-id"),"t":this.lS.getAttribute("data-tag-id"),"u":t.canonicalUrl},4096)},n.filterConfig=function(t){return t},n.getAttributes=function(){return{"data-multi-size-validation":"false","type":"doubleclick","data-ad":"denakop","style":"position:relative !important"}},n.getDefaultAdConstraints=function(){var t=B(this.lS).getSize().height;return{initialMinSpacing:t,subsequentMinSpacing:[{adCount:4,spacing:2*t},{adCount:8,spacing:3*t}],maxAdCount:20}},n.getSizing=function(){return{}},t}(),W=function(){function t(t){this.lS=t}var n=t.prototype;return n.isEnabled=function(t){return!0},n.isResponsiveEnabled=function(){return!1},n.getConfigUrl=function(){var t=D(this.lS),n=J(t.canonicalUrl).hostname;return z("//pagead2.googlesyndication.com/getconfig/ama",{"client":this.lS.getAttribute("data-ad-legacy-client"),"plah":n,"ama_t":"amp","url":t.canonicalUrl},4096)},n.filterConfig=function(t){return t},n.getAttributes=function(){return{"type":"doubleclick","data-slot":this.lS.getAttribute("data-slot"),"json":this.lS.getAttribute("data-json")}},n.getDefaultAdConstraints=function(){var t=B(this.lS).getSize().height;return{initialMinSpacing:t,subsequentMinSpacing:[{adCount:3,spacing:2*t},{adCount:6,spacing:3*t}],maxAdCount:8}},n.getSizing=function(){var t=function(t,n){try{return b(t)}catch(t){return null}}(this.lS.getAttribute("data-experiment"));return t?{height:t.height?Number(t.height):250,width:t.width?Number(t.width):void 0}:{}},t}(),Z=function(){function t(t){this.lS=t,this.pvid64=0}var n=t.prototype;return n.isEnabled=function(t){return!0},n.isResponsiveEnabled=function(){return!1},n.getConfigUrl=function(){var t=this,n=0;D(this.lS).pageViewId64.then((function(n){t.pvid64=n}));var i=window.location,r=i.hash,e=i.host,u=i.pathname,o=i.search,a=Object.assign(S(r),S(o)),c=D(this.lS),s=u.match(/amp\/fi\/(\d+)\//);null!=s&&2==s.length&&(n=s[1]);var f=a.fi_reveal,h=a.fi_demand,l=a.fi_geo,d=a.disable_fi,v=a.fi_cdnhost||(n?e:"cdn.firstimpression.io"),p=a.fi_cdnpath||(n?"/amp-preview.php":"/delivery/amp.php"),m=this.lS.getAttribute("data-website-id"),g=this.lS.getAttribute("data-targeting"),b={"id":m,"url":c.canonicalUrl,"w":window.screen.width,"h":window.screen.height};return g&&(b.targeting=g),void 0!==f&&(b.fi_reveal=f),void 0!==h&&(b.fi_demand=h),l&&(b.fi_geo=l),d&&(b.disable_fi=d),n&&(b.preview_id=n),z("https://"+v+p,b,4096)},n.filterConfig=function(t){return t},n.getAttributes=function(){return{"type":"firstimpression","data-pvid64":this.pvid64}},n.getDefaultAdConstraints=function(){var t=B(this.lS).getSize().height;return{initialMinSpacing:t,subsequentMinSpacing:[{adCount:3,spacing:2*t},{adCount:6,spacing:3*t}],maxAdCount:8}},n.getSizing=function(){return{height:1}},t}(),tt=function(){function t(t){this.lS=t}var n=t.prototype;return n.isEnabled=function(){return!0},n.isResponsiveEnabled=function(){return!1},n.getConfigUrl=function(){var t=this.lS.dataset,n=t.host||"https://tags.premiumads.com.br";return z("".concat(n,"/autoads/").concat(t.publisher),{},4096)},n.filterConfig=function(t){return t},n.getAttributes=function(){var t=this.lS.dataset;return{"type":"doubleclick","data-ad":"premiumads","json":t.json||"","layout":t.layout||"fixed","style":t.style||"margin: 15px auto; position: relative !important; display: block !important;"}},n.getDefaultAdConstraints=function(){var t=B(this.lS).getSize().height;return{initialMinSpacing:t,subsequentMinSpacing:[{adCount:3,spacing:2*t},{adCount:6,spacing:3*t}],maxAdCount:8}},n.getSizing=function(){return{}},t}(),nt=function(){function t(t){this.lS=t}var n=t.prototype;return n.isEnabled=function(t){var n=this.lS.getAttribute("data-website-id");return!(!n||!n.match(/^[0-9]+$/))},n.isResponsiveEnabled=function(){return!0},n.getConfigUrl=function(){var t=D(this.lS);return z("https://api.bounceexchange.com/bounce/amp",{"w_id":this.lS.getAttribute("data-website-id"),"calling_url":t.sourceUrl},4096)},n.filterConfig=function(t){return t},n.getAttributes=function(){return{"type":"wunderkind","data-ad":"wunderkind","layout":"responsive","height":"75vw","width":"100vw"}},n.getDefaultAdConstraints=function(){return{initialMinSpacing:B(this.lS).getSize().height,subsequentMinSpacing:[],maxAdCount:10}},n.getSizing=function(){return{}},t}();function it(t){if(g(function(t){var n=t.tagName;return n.startsWith("AMP-")&&!("AMP-STICKY-AD-TOP-PADDING"==n||"AMP-BODY"==n)}(t)),t.createdCallback)return Promise.resolve(t);if(!t.__AMP_UPG_PRM){var n=new a;t.__AMP_UPG_PRM=n.promise,t.__AMP_UPG_RES=n.resolve}var i=t.__AMP_UPG_PRM;return g(i),i}function rt(t){return(n=x(t),k(n,"vsync")).measurePromise((function(){return function(t){for(var n=t.ownerDocument.body,i=0,r=0,e=t;e&&e!=n;e=e.offsetParent)i+=e.offsetLeft,r+=e.offsetTop;var u=t.offsetHeight;return function(t,n,i,r){return{left:t,top:n,width:i,height:r,bottom:n+r,right:t+i,x:t,y:n}}(i,r,t.offsetWidth,u)}(t)}));var n}var et="amp-auto-ads",ut=["AMP-SIDEBAR","AMP-APP-BANNER"],ot={1:function(t,n){t.parentNode.insertBefore(n,t)},4:function(t,n){t.parentNode.insertBefore(n,t.nextSibling)},2:function(t,n){t.insertBefore(n,t.firstChild)},3:function(t,n){t.appendChild(n)}},at=function(){function t(t,n,i,r,e,u){this.ampdoc=t,this.pu=E(n,"mutator"),this.dS=n,this.vS=i,this.pS=r,this.mS=e,this.gS=u,this.bS=null,this.Ai=0}var n=t.prototype;return n.getAdElement=function(){return this.bS},n.getEstimatedPosition=function(){var t=this;return rt(this.dS).then((function(n){return t.yS(n)}))},n.yS=function(t){switch(this.vS){case 1:case 2:return t.top;case 3:case 4:return t.bottom;default:throw new Error("Unknown position")}},n.placeAd=function(t,n,i,r){var e=this;return this.getEstimatedPosition().then((function(u){return e.ampdoc.win.scrollY>u?(e.Ai=0,e.Ai):i.isTooNearAnAd(u).then((function(i){if(i)return e.Ai=3,e.Ai;var u=r&&e.wS(e.dS);return e.bS=u?e.SS(t):e.AS(t,n.width),e.pS(e.dS,e.getAdElement()),u?it(e.getAdElement()).then((function(){return e.getAdElement().build()})).then((function(){var t=!e.getAdElement().classList.contains("i-amphtml-layout-awaiting-size");return e.Ai=t?2:1,e.Ai})):e.jS(n).then((function(t){return it(e.getAdElement()).then((function(){return e.getAdElement().build()})).then((function(){return e.pu.requestChangeSize(e.getAdElement(),t.height,t.width,t.margins)})).then((function(){return e.Ai=2,e.Ai}),(function(){return e.Ai=1,e.Ai}))}))}))}))},n.jS=function(t){return Promise.resolve({height:t.height||250,margins:this.gS})},n.AS=function(t,n){var i=r(r({"layout":n?"fixed":"fixed-height","height":"0","width":n||"auto","class":"i-amphtml-layout-awaiting-size"},t),this.mS);return _(this.ampdoc.win.document,"amp-ad",i)},n.SS=function(t){var n=r(r({"width":"100vw","height":"0","layout":"fixed","class":"i-amphtml-layout-awaiting-size","data-auto-format":"rspv","data-full-width":""},t),this.mS);return _(this.ampdoc.win.document,"amp-ad",n)},n.wS=function(t){return B(t).getSize().width<488},t}();function ct(t,n){var i=n.placements;if(!i)return C().info(et,"No placements in config"),[];var r=[];return i.forEach((function(n){!function(t,n,i){var r=ot[n.pos];if(r){var e=n.anchor;if(e){var u=st(t.getRootNode(),e);if(u.length){var o=void 0;if(n.style){var a=parseInt(n.style.top_m,10),c=parseInt(n.style.bot_m,10);(a||c)&&(o={top:a||void 0,bottom:c||void 0})}u.forEach((function(e){if(function(t,n){var i=1==n||4==n?t.parentElement:t;if(!i)return C().warn(et,"Parentless anchor with BEFORE/AFTER position."),!1;var r=i;return!ut.some((function(t){return i=t,!!((n=r).closest?n.closest(i):function(t,n,i){var r;for(r=t;r&&void 0!==r;r=r.parentElement)if(n(r))return r;return null}(n,(function(t){return function(t,n){var i=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector;return!!i&&i.call(t,n)}(t,i)})))&&(C().warn(et,"Placement inside denylisted ancestor: "+t),!0);var n,i}))}(e,n.pos)){var u=Y(n,$);i.push(new at(t,e,n.pos,r,u,o))}}))}else C().warn(et,"No anchor element found")}else C().warn(et,"No anchor in placement")}else C().warn(et,"No injector for position")}(t,n,r)})),r}function st(t,n){var i=n.selector;if(!i)return C().warn(et,"No selector in anchor"),[];var r=[].slice.call(function(t,n){return(void 0!==R?R:R=function(t){try{var n=t.ownerDocument,i=n.createElement("div"),r=n.createElement("div");return i.appendChild(r),i.querySelector(":scope div")===r}catch(t){return!1}}(t))?t.querySelectorAll(T(n,":scope")):function(t,n){var i=t.classList,r="i-amphtml-scoped";i.add(r);var e=T(n,".".concat(r)),u=t.querySelectorAll(e);return i.remove(r),u}(t,n)}(t.documentElement||t,i)),e=n.min_c||0;if(e>0&&(r=r.filter((function(t){return t.textContent.length>=e}))),"number"==typeof n.index||!n.all){var u=r[n.index||0];r=u?[u]:[]}if(0==r.length)return[];if(n.sub){var o=[];return r.forEach((function(t){o=o.concat(st(t,n.sub))})),o}return r}var ft=function(){function t(t,n,i,r){var e=arguments.length>4&&void 0!==arguments[4]&&arguments[4];this.CS=t.slice(0),this.MS=n,this.OS=i,this.PS=r,this.xS=0,this.kS=e}var n=t.prototype;return n.run=function(){var t,n=this;return this.PS.isMaxAdCountReached()?(t=function(){return n.ES()},new Promise((function(n){n(t())}))):this.IS().then((function(t){return t?n.run():n.ES()}))},n.ES=function(){return{adsPlaced:this.xS,totalAdsOnPage:this.PS.getAdCount()}},n.IS=function(){var t=this,n=this.CS.shift();return n?n.placeAd(this.MS,this.OS,this.PS,this.kS).then((function(i){return 2==i?(t.PS.addAd(n.getAdElement()),t.xS++,!0):t.IS()})):(C().info("amp-auto-ads","unable to fulfill ad strategy"),Promise.resolve(!1))},t}(),ht="amp-auto-ads",lt=function(){function t(t,n){this.NS=t,this.RS=n.initialMinSpacing,this.qS=n.subsequentMinSpacing.slice(0).sort((function(t,n){return t.adCount-n.adCount})),this.TS=n.maxAdCount,this._S=this.DS()}var n=t.prototype;return n.addAd=function(t){this.NS.push(t),this._S=this.DS()},n.getAdCount=function(){return this.NS.length},n.isMaxAdCountReached=function(){return this.getAdCount()>=this.TS},n.isTooNearAnAd=function(t){return this.US(t,0)},n.US=function(t,n){var i=this;return n>=this.NS.length?Promise.resolve(!1):this.BS(t,this.NS[n]).then((function(r){return r<i._S||i.US(t,n+1)}))},n.BS=function(t,n){return rt(n).then((function(n){return t>=n.top&&t<=n.bottom?0:Math.min(Math.abs(t-n.top),Math.abs(t-n.bottom))}))},n.DS=function(){for(var t=this.getAdCount(),n=this.RS,i=0;i<this.qS.length;i++){var r=this.qS[i];r.adCount<=t&&(n=r.spacing)}return n},t}();function dt(t,n){if(!t)return null;var i=parseFloat(t);return isNaN(i)||i<0?null:d(t,"px")?i:d(t,"vp")?i*n:null}var vt=function(){function t(t,n,i){this.ampdoc=t,this.MS=n,this.zS=i}var n=t.prototype;return n.run=function(){return this.FS()?(C().warn("amp-auto-ads","Auto ads may not work because of already existing <amp-sticky-ad>."),Promise.resolve(!1)):this.GS()?("top"===this.MS.sticky?(U(this.ampdoc.win).installExtensionForDoc(this.ampdoc,"amp-ad","0.1"),this.$S()):(U(this.ampdoc.win).installExtensionForDoc(this.ampdoc,"amp-sticky-ad","1.0"),this.YS()),Promise.resolve(!0)):Promise.resolve(!1)},n.FS=function(){return!!this.ampdoc.getRootNode().querySelector("amp-sticky-ad, amp-ad[sticky]")},n.GS=function(){return C().assertArray(this.zS.optInStatus||[]).includes(2)},n.$S=function(){var t=B(this.ampdoc).getWidth(),n=r(r({},this.MS),{},{"width":String(t),"height":this.MS.height||"100"}),i=_(this.ampdoc.win.document,"amp-ad",n),e=this.ampdoc.getBody();e.insertBefore(i,e.firstChild)},n.YS=function(){var t=this.MS,n=B(this.ampdoc).getWidth(),i=r(r({},t),{},{"width":String(n),"height":t.height||"100"});delete i.sticky;var e=this.ampdoc.win.document,u=_(e,"amp-ad",i),o=_(e,"amp-sticky-ad",{"layout":"nodisplay"});o.appendChild(u);var a=this.ampdoc.getBody();a.insertBefore(o,a.firstChild)},t}(),pt="amp-auto-ads",mt=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&c(t,n)}(a,t);var n,i,e=(n=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=s(n);if(i){var e=s(this).constructor;t=Reflect.construct(r,arguments,e)}else t=r.apply(this,arguments);return h(this,t)});function a(){return e.apply(this,arguments)}var f=a.prototype;return f.buildCallback=function(){var t=this,n=this.element.getAttribute("type");if(P(n,"Missing type attribute"),this.KS=function(t,n){return"adsense"==t?new H(n):"alright"==t?new Q(n):"denakop"==t?new V(n):"doubleclick"==t?new W(n):"firstimpression.io"==t?new Z(n):"premiumads"==t?new tt(n):"wunderkind"==t?new nt(n):null}(n,this.element),P(this.KS,"No AdNetworkConfig for type: "+n),this.KS.isEnabled(this.win)){var i=this.getAmpDoc();U(this.win).installExtensionForDoc(i,"amp-ad"),this.LS=this.getAmpDoc().whenFirstVisible().then((function(){return t.KS.filterConfig(t.XS(t.KS.getConfigUrl()))})),this.JS()||this.HS()}},f.isLayoutSupported=function(){return!0},f.layoutCallback=function(){return this.JS()?this.HS():o||(o=Promise.resolve(void 0))},f.XS=function(t){var n,i=this;return(n=this.win,k(n,"xhr")).fetchJson(t,{mode:"cors",method:"GET",credentials:"omit"}).then((function(t){return t.json()})).catch((function(t){return i.user().error(pt,"amp-auto-ads config xhr failed: "+t),null}))},f.JS=function(){return t=this.win,n="auto-ads-layout-callback",i=function(t){var n,i,e,o,a;if(t[q])return t[q];t[q]=m();var c=t[q];g(c);var s=r(r({},null!==(n=t.AMP_CONFIG)&&void 0!==n?n:{}),null!==(i=t.AMP_EXP)&&void 0!==i?i:b((null===(e=t.__AMP_EXP)||void 0===e?void 0:e.textContent)||"{}"));for(var f in s){var h=s[f];"number"==typeof h&&h>=0&&h<=1&&(c[f]=Math.random()<h)}var d=null===(o=t.AMP_CONFIG)||void 0===o?void 0:o["allow-doc-opt-in"];if(l(d)&&d.length){var v=t.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(v)for(var p,y,w=u((null===(p=v.getAttribute("content"))||void 0===p?void 0:p.split(","))||[],!0);!(y=w()).done;){var C=y.value;d.includes(C)&&(c[C]=!0)}}Object.assign(c,function(t){var n,i="";try{var r;"localStorage"in t&&(i=null!==(r=t.localStorage.getItem("amp-experiment-toggles"))&&void 0!==r?r:"")}catch(t){(A.dev||(A.dev=j())).warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}for(var e,o=(null===(n=i)||void 0===n?void 0:n.split(/\s*,\s*/g))||[],a=m(),c=u(o,!0);!(e=c()).done;){var s=e.value;s&&("-"==s[0]?a[s.substr(1)]=!1:a[s]=!0)}return a}(t));var M=null===(a=t.AMP_CONFIG)||void 0===a?void 0:a["allow-url-opt-in"];if(l(M)&&M.length)for(var O,P=S(t.location.originalHash||t.location.hash),x=u(M,!0);!(O=x()).done;){var k=O.value,E=P["e-".concat(k)];"1"==E&&(c[k]=!0),"0"==E&&(c[k]=!1)}return c}(t),!!i[n];var t,n,i},f.HS=function(){var t=this,n=this.getAmpDoc();return this.LS.then((function(i){if(i){var e=i.noConfigReason;e&&t.user().warn(pt,e);var u=ct(n,i),o=r(r({},t.KS.getAttributes()),Y(i,$)),a=t.KS.getSizing(),c=function(t,n){var i=n.adConstraints;if(!i)return null;var r=B(t).getHeight(),e=dt(i.initialMinSpacing,r);if(null==e)return C().warn(ht,"Invalid initial min spacing"),null;var u=(i.subsequentMinSpacing||[]).map((function(t){var n=t.adCount;if(null==n)return C().warn(ht,"No subsequentMinSpacing adCount specified"),null;var i=dt(t.spacing,r);return null==i?(C().warn(ht,"Invalid subsequent min spacing"),null):{adCount:n,spacing:i}}));return-1!=u.indexOf(null)?null:null==i.maxAdCount?(C().warn(ht,"No maxAdCount specified"),null):{initialMinSpacing:e,subsequentMinSpacing:u,maxAdCount:i.maxAdCount}}(n,i)||t.KS.getDefaultAdConstraints(),s=new lt(function(t){return[].slice.call(t.getRootNode().querySelectorAll("AMP-AD")).filter((function(t){return!t.parentElement||"AMP-STICKY-AD"!=t.parentElement.tagName}))}(n),c);new ft(u,o,a,s,t.KS.isResponsiveEnabled()).run();var f=r(r({},o),Y(i,"stickyAdAttributes"));new vt(n,f,i).run()}}))},a}(t.BaseElement);t.registerElement(pt,mt)}();/*!https://mths.be/cssescape v1.5.1 by @mathias | MIT license*/}});