(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5690,4710],{640:function(e,t,n){"use strict";var r=n(1742),i={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,o,a,s,c,u,l=!1;t||(t={}),n=t.debug||!1;try{if(a=r(),s=document.createRange(),c=document.getSelection(),(u=document.createElement("span")).textContent=e,u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=i[t.format]||i.default;window.clipboardData.setData(o,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(u),s.selectNodeContents(u),c.addRange(s),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");l=!0}catch(d){n&&console.error("unable to copy using execCommand: ",d),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),l=!0}catch(d){n&&console.error("unable to copy using clipboardData: ",d),n&&console.error("falling back to prompt"),o=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(o,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(s):c.removeAllRanges()),u&&document.body.removeChild(u),a()}return l}},2730:function(e,t,n){!function(e,t){"use strict";function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}}(e,t)||s(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e){var t,n,r,o,s,c,u,l,m,p,h,v,b,g,x,y,w,j,k,S,E,O,A,M,_,N,C,T,P,I,R,D,U,Z,L=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},B="data-keen-slider-moves",z="data-keen-slider-v",F=[],W=null,H=!1,V=!1,G=0,Y=[];function q(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};e.addEventListener(t,n,r),F.push([e,t,n,r])}function K(e){if(j&&k===Q(e)&&ue()){var n=te(e).x;if(!re(e)&&M)return J(e);M&&(He(),S=n,M=!1),e.cancelable&&e.preventDefault();var r=S-n;_+=Math.abs(r),!N&&_>5&&(N=!0,t.setAttribute(B,!0)),De(A(r,Xe)*(de()?-1:1),e.timeStamp),S=n}}function X(e){j||!ue()||ne(e.target)||(j=!0,M=!0,k=Q(e),N=!1,_=0,re(e),he(),w=p,S=te(e).x,De(0,e.timeStamp),se("dragStart"))}function J(e){j&&k===Q(e,!0)&&ue()&&(t.removeAttribute(B),j=!1,ge(),se("dragEnd"))}function $(e){return e.changedTouches}function Q(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?$(e):ee(e);return t?t[0]?t[0].identifier:"error":"default"}function ee(e){return e.targetTouches}function te(e){var t=ee(e);return{x:me()?t?t[0].screenY:e.pageY:t?t[0].screenX:e.pageX,timestamp:e.timeStamp}}function ne(e){return e.hasAttribute(y.preventEvent)}function re(e){var t=ee(e);if(!t)return!0;var n=t[0],r=me()?n.clientY:n.clientX,i=me()?n.clientX:n.clientY,o=void 0!==E&&void 0!==O&&Math.abs(O-i)<=Math.abs(E-r);return E=r,O=i,o}function ie(e){ue()&&j&&e.preventDefault()}function oe(){q(window,"orientationchange",Ce),q(window,"resize",(function(){return Ne()})),q(t,"dragstart",(function(e){ue()&&e.preventDefault()})),q(t,"mousedown",X),q(y.cancelOnLeave?t:window,"mousemove",K),y.cancelOnLeave&&q(t,"mouseleave",J),q(window,"mouseup",J),q(t,"touchstart",X,{passive:!0}),q(t,"touchmove",K,{passive:!1}),q(t,"touchend",J,{passive:!0}),q(t,"touchcancel",J,{passive:!0}),q(window,"wheel",ie,{passive:!1})}function ae(){F.forEach((function(e){e[0].removeEventListener(e[1],e[2],e[3])})),F=[]}function se(e){y[e]&&y[e](Xe)}function ce(){return y.centered}function ue(){return void 0!==n?n:y.controls}function le(){return y.loop&&r>1}function de(){return y.rtl}function fe(){return!y.loop&&y.rubberband}function me(){return!!y.vertical}function pe(){C=window.requestAnimationFrame(ve)}function he(){C&&(window.cancelAnimationFrame(C),C=null),T=null}function ve(e){T||(T=e);var t=e-T,n=be(t);if(t>=I)return De(P-D,!1),Z?Z():void se("afterChange");var r=Ue(n);if(0===r||le()||fe()||U){if(0!==r&&fe()&&!U)return ke();D+=n,De(n,!1),pe()}else De(n-r,!1)}function be(e){return P*R(e/I)-D}function ge(){switch(se("beforeChange"),y.mode){case"free":we();break;case"free-snap":je();break;default:xe()}}function xe(){ye((1===u&&0!==h?w:p)+Math.sign(h))}function ye(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y.duration,r=function(e){return 1+--e*e*e*e*e};Se(ze(e=Be(e,arguments.length>3&&void 0!==arguments[3]&&arguments[3],arguments.length>4&&void 0!==arguments[4]&&arguments[4])),n,r,t)}function we(){if(0===b)return!(!Ue(0)||le())&&ye(p);var e=y.friction/Math.pow(Math.abs(b),-.5);Se(Math.pow(b,2)/e*Math.sign(b),6*Math.abs(b/e),(function(e){return 1-Math.pow(1-e,5)}))}function je(){if(0===b)return ye(p);var e=y.friction/Math.pow(Math.abs(b),-.5),t=Math.pow(b,2)/e*Math.sign(b),n=6*Math.abs(b/e),r=(G+t)/(c/u);Se((-1===h?Math.floor(r):Math.ceil(r))*(c/u)-G,n,(function(e){return 1-Math.pow(1-e,5)}))}function ke(){if(he(),0===b)return ye(p,!0);var e=.04/Math.pow(Math.abs(b),-.5),t=Math.pow(b,2)/e*Math.sign(b),n=function(e){return--e*e*e+1},r=b;Se(t,3*Math.abs(r/e),n,!0,(function(){Se(ze(Be(p)),500,n,!0)}))}function Se(e,t,n,r,i){he(),P=e,D=0,I=t,R=n,U=r,Z=i,T=null,pe()}function Ee(n){var r=d(e);r.length&&(t=r[0],Ne(n),oe(),se("mounted"))}function Oe(){var e,t=L.breakpoints||[];for(var n in t)window.matchMedia(n).matches&&(e=n);if(e===W)return!0;var r=(W=e)?t[W]:L;r.breakpoints&&W&&delete r.breakpoints,y=i(i(i({},Ke),L),r),H=!0,m=null,se("optionsChanged"),_e()}function Ae(e){if("function"==typeof e)return e();var t=y.autoAdjustSlidesPerView;t||(r=Math.max(e,r));var n=le()&&t?r-1:r;return f(e,1,Math.max(n,1))}function Me(){Oe(),V=!0,se("created")}function _e(e,t){e&&(L=e),t&&(W=null),Te(),Ee(t)}function Ne(e){var n=window.innerWidth;if(Oe()&&(n!==m||e)){m=n;var i=y.slides;"number"==typeof i?(s=null,r=i):(s=d(i,t),r=s?s.length:0);var a=y.dragSpeed;A="function"==typeof a?a:function(e){return e*a},c=me()?t.offsetHeight:t.offsetWidth,u=Ae(y.slidesPerView),l=f(y.spacing,0,c/(u-1)-1),c+=l,o=ce()?(c/2-c/u/2)/c:0,Ie();var h=!V||H&&y.resetSlide?y.initial:p;qe(le()?h:Ze(h)),me()&&t.setAttribute(z,!0),H=!1}}function Ce(e){Ne(),setTimeout(Ne,500),setTimeout(Ne,2e3)}function Te(){ae(),Re(),t&&t.hasAttribute(z)&&t.removeAttribute(z),se("destroyed")}function Pe(){s&&s.forEach((function(e,t){var n=g[t].distance*c-t*(c/u-l/u-l/u*(u-1)),r=me()?0:n,i=me()?n:0,o="translate3d(".concat(r,"px, ").concat(i,"px, 0)");e.style.transform=o,e.style["-webkit-transform"]=o}))}function Ie(){s&&s.forEach((function(e){var t="calc(".concat(100/u,"% - ").concat(l/u*(u-1),"px)");me()?(e.style["min-height"]=t,e.style["max-height"]=t):(e.style["min-width"]=t,e.style["max-width"]=t)}))}function Re(){if(s){var e=["transform","-webkit-transform"];e=[].concat(a(e),me?["min-height","max-height"]:["min-width","max-width"]),s.forEach((function(t){e.forEach((function(e){t.style.removeProperty(e)}))}))}}function De(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];We(e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now()),t&&(e=Ge(e)),G+=e,Ve()}function Ue(e){var t=c*(r-1*(ce()?1:u))/u,n=G+e;return n>t?n-t:n<0?n:0}function Ze(e){return f(e,0,r-1-(ce()?0:u-1))}function Le(){var e=Math.abs(x),t=G<0?1-e:e;return{direction:h,progressTrack:t,progressSlides:t*r/(r-1),positions:g,position:G,speed:b,relativeSlide:(p%r+r)%r,absoluteSlide:p,size:r,slidesPerView:u,widthOrHeight:c}}function Be(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return le()?t?Fe(e,n):e:Ze(e)}function ze(e){return-(-c/u*e+G)}function Fe(e,t){var n=(p%r+r)%r,i=n<(e=(e%r+r)%r)?-n-r+e:-(n-e),o=n>e?r-n+e:e-n,a=t?Math.abs(i)<=o?i:o:e<n?i:o;return p+a}function We(e,t){clearTimeout(v);var n=Math.sign(e);if(n!==h&&He(),h=n,Y.push({distance:e,time:t}),v=setTimeout((function(){Y=[],b=0}),50),(Y=Y.slice(-6)).length<=1||0===h)return b=0;var r=Y.slice(0,-1).reduce((function(e,t){return e+t.distance}),0),i=Y[Y.length-1].time,o=Y[0].time;b=f(r/(i-o),-10,10)}function He(){Y=[]}function Ve(){x=le()?G%(c*r/u)/(c*r/u):G/(c*r/u),Ye();for(var e=[],t=0;t<r;t++){var n=(1/r*t-(x<0&&le()?x+1:x))*r/u+o;le()&&(n+=n>(r-1)/u?-r/u:n<-r/u+1?r/u:0);var i=1/u,a=n+i,s=a<i?a/i:a>1?1-(a-1)*u/1:1;e.push({portion:s<0||s>1?0:s,distance:de()?-1*n+1-i:n})}g=e,Pe(),se("move")}function Ge(e){if(le())return e;var t,n=Ue(e);return fe()?0===n?e:e*(t=n/c,(1-Math.abs(t))*(1-Math.abs(t))):e-n}function Ye(){var e=Math.round(G/(c/u));e!==p&&(!le()&&(e<0||e>r-1)||(p=e,se("slideChanged")))}function qe(e){se("beforeChange"),De(ze(e),!1),se("afterChange")}var Ke={autoAdjustSlidesPerView:!0,centered:!1,breakpoints:null,controls:!0,dragSpeed:1,friction:.0025,loop:!1,initial:0,duration:500,preventEvent:"data-keen-slider-pe",slides:".keen-slider__slide",vertical:!1,resetSlide:!1,slidesPerView:1,spacing:0,mode:"snap",rtl:!1,rubberband:!0,cancelOnLeave:!0},Xe={controls:function(e){n=e},destroy:Te,refresh:function(e){_e(e,!0)},next:function(){ye(p+1,!0)},prev:function(){ye(p-1,!0)},moveToSlide:function(e,t){ye(e,!0,t)},moveToSlideRelative:function(e){ye(e,!0,arguments.length>2?arguments[2]:void 0,!0,arguments.length>1&&void 0!==arguments[1]&&arguments[1])},resize:function(){Ne(!0)},details:function(){return Le()},options:function(){var e=i({},y);return delete e.breakpoints,e}};return Me(),Xe}function l(e){return Array.prototype.slice.call(e)}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"function"==typeof e?l(e()):"string"==typeof e?l(t.querySelectorAll(e)):e instanceof HTMLElement!=0?[e]:e instanceof NodeList!=0?e:[]}function f(e,t,n){return Math.min(Math.max(e,t),n)}Math.sign||(Math.sign=function(e){return(e>0)-(e<0)||+e});var m=function e(t,n){var r=Object.prototype.toString.call(t);if(r!==Object.prototype.toString.call(n))return!1;if(["[object Array]","[object Object]"].indexOf(r)<0)return!1;var i="[object Array]"===r?t.length:Object.keys(t).length;if(i!==("[object Array]"===r?n.length:Object.keys(n).length))return!1;var o=function(t,n){var r=Object.prototype.toString.call(t);if(["[object Array]","[object Object]"].indexOf(r)>=0){if(!e(t,n))return!1}else{if(r!==Object.prototype.toString.call(n))return!1;if("[object Function]"===r){if(t.toString()!==n.toString())return!1}else if(t!==n)return!1}};if("[object Array]"===r){for(var a=0;a<i;a++)if(!1===o(t[a],n[a]))return!1}else for(var s in t)if(t.hasOwnProperty(s)&&!1===o(t[s],n[s]))return!1;return!0};e.default=u,e.useKeenSlider=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.useRef(),r=t.useRef();function i(e){return m(r.current,e)||(r.current=e),r.current}var a=o(t.useState(null),2),s=a[0],c=a[1];return t.useEffect((function(){var e=new u(n.current,r.current);return c(e),function(){e.destroy()}}),[i(e)]),[n,s]},Object.defineProperty(e,"__esModule",{value:!0})}(t,n(7294))},5100:function(e,t,n){"use strict";n.r(t);var r=n(7294),i=(n(3935),n(7928)),o=n(6871),a=n(1163),s=n(4184),c=n.n(s),u=n(5893);t.default=function(e){var t=e.inventory,n=e.sizes,s=e.inLayout,l=e.oopType,d=e.targeting,f=e.disableBadge,m=void 0!==f&&f,p=(0,r.useState)(!1),h=(p[0],p[1]),v=!n,b=n&&300===n[0][0]&&300===n[0][1],g=!!s,x=v?null:n[0][1],y=v?null:n[0][0],w="/".concat(o.OR,"/").concat(t),j="debugads"in(0,a.useRouter)().query,k=v?function(){if("bc"===l)return"dfp_bc_inject_".concat(w)}():"";return(0,r.useEffect)((function(){h(!0)}),[]),g?null:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{children:j&&t}),(0,u.jsx)("div",{className:"flex items-center justify-center relative print:hidden h-full",style:{maxHeight:"".concat(x,"px")},children:(0,u.jsxs)("div",{className:c()({"flex justify-center items-center ":!v,"bg-white":b,"bg-white h-full":!b}),style:{maxHeight:"".concat(x,"px"),minWidth:"".concat(y,"px")},children:[!v&&!m&&(0,u.jsx)("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border text-xxs py-1 px-2 bg-coolGray-50 opacity-50",children:"ADS"}),(0,u.jsxs)("div",{className:"relative lg:h-full",children:[v&&(0,u.jsx)("div",{id:k,className:"commercial-space commercial-bc"}),v?(0,u.jsx)(i.Un,{adUnit:t,renderOutOfThePage:v,targetingArguments:d}):(0,u.jsx)(i.Un,{sizes:n,adUnit:t,targetingArguments:d})]})]})})]})}},9060:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(5627),i=n.n(r),o=n(7294),a=n(3935),s=n(8190),c=n(1163),u=n(9499),l=n(5893);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var f=function(e){var t=e.attrs;return(0,l.jsx)("div",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({className:"OUTBRAIN"},t))},m=function(e){var t=(0,o.useRef)(null),n=e.dataSrc,r=void 0===n?"":n,i=e.dataWidgetId,a=void 0===i?"":i,s=(e.obUserId,e.obInstallationKey,e.obInstallationType,e.obAppVer,e.isSecured,e.obContentUrl),c=void 0===s?null:s,u=e.obPortalUrl,d=void 0===u?null:u,m=e.obBundleUrl,p=void 0===m?null:m,h=(e.obLanguage,e.obPsub,e.obAppId,e.externalId,{"data-src":r,"data-widget-id":a}),v=r||c||d||p;return(0,o.useEffect)((function(){(function(){var e=t.current.querySelector(".OUTBRAIN");return!!e&&!!e.getAttribute("data-ob-mark")})()||function(e){var t=window.OBR;t&&t.extern&&"function"===typeof t.extern.renderSpaWidgets&&t.extern.renderSpaWidgets(e)}(v)}),[h]),(0,l.jsx)("div",{ref:t,className:"OB-REACT-WRAPPER",children:(0,l.jsx)(f,{attrs:h},Date.now())})};m.defaultProps={obUserId:"",obInstallationKey:"",obInstallationType:"",obAppVer:"",isSecured:"",obContentUrl:null,obPortalUrl:null,obBundleUrl:null,obLanguage:null,obPsub:null,obAppId:null,externalId:null};var p="//widgets.outbrain.com/outbrain.js",h="https://m.malaysiakini.com",v="https://www.malaysiakini.com",b={my:"AR_1",en:"AR_2",zh:"AR_3"},g={my:"MB_1",en:"MB_2"},x="Malaysiakini_1",y=function(e){var t=e.home,n=void 0!==t&&t,r=p,u=v,d=h,f=b,y=g,w=x,j=(0,o.useContext)(s.Z),k=j.platform,S=j.story,E=j.lang,O=j.isMobile,A=((0,c.useRouter)(),O?d:u);(0,o.useEffect)((function(){var e=document.createElement("script");e.src=r,e.async=!0,e.onload=function(){return function(){var e=n?"https://m.malaysiakini.com/".concat(E):"".concat(A,"/").concat(S.category,"/").concat(S.sid),t=n?y[E]:f[E];a.render((0,l.jsx)(l.Fragment,{children:(0,l.jsx)(m,{dataSrc:e,dataWidgetId:t,obTemplate:w})}),document.getElementById("outbrain"))}()},document.body.appendChild(e)}),[]);try{return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{id:"outbrain",style:{padding:"0",overflow:"hidden",width:"mobile"===k?"100vw":"auto",maxWidth:"100vw",position:"relative"},className:"jsx-3378166531"}),(0,l.jsx)(i(),{id:"3378166531",children:[".AR_2.ob-widget .ob-rec-text{color:#212121;font-weight:500;padding:5px 0;}",".AR_2.ob-widget .ob_bctrl{display:none;}",".MB_2.ob-widget{background:#f5f5f5 !important;margin:10px;padding:10px 0;padding-left:10px;border-radius:8px;}",".MB_2.ob-widget .ob-rec-image-container{float:left;borderoverflow:hidden;margin:0 2% 0 0;width:41% !important;margin-right:15px !important;border-radius:4px;}",".MB_2.ob-widget .ob-rec-text{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto, Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif !important;font-weight:500;font-size:15px !important;color:#212121 !important;padding:0 !important;}",".MB_2.ob-widget .ob-rec-source{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto, Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif !important;font-size:10px !important;color:#888 !important;text-transform:uppercase;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;margin-top:5px !important;}",".MB_2.ob-widget .ob_bctrl{display:none;}",".MB_2.ob-widget .ob_what{margin-top:-20px;}"]})]})}catch(M){console.log(M)}}},4483:function(e,t,n){"use strict";var r=n(7928),i=n(5630),o=n(2826),a=n(5893);t.Z=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(i.Z,{lang:"en",children:(0,a.jsx)(r.Un,{adUnit:"MK_TAG_PLACEMENT",sizes:["fluid"]})}),(0,a.jsx)(i.Z,{lang:"my",children:(0,a.jsx)(r.Un,{adUnit:"MK_TAG_PLACEMENT_MY",sizes:["fluid"]})}),(0,a.jsx)(i.Z,{lang:"zh",children:(0,a.jsx)(r.Un,{adUnit:"MK_TAG_PLACEMENT_ZH",sizes:["fluid"]})})]})})}},7714:function(e,t,n){"use strict";var r=n(7294),i=n(8190),o=n(7962),a=n(9669),s=n.n(a),c=n(5893);t.Z=function(e){var t=e.children,n=(0,r.useContext)(i.Z),a=n.payWallBlocked,u=n.isContentLoading,l=n.story,d=n.lang,f=n.isMobile,m=(0,r.useContext)(o.V),p=m.user,h=m.isAuthLoading,v=(0,r.useState)(!1),b=v[0],g=v[1],x=(0,r.useState)(0),y=x[0],w=x[1],j=(0,r.useState)(0),k=j[0],S=j[1],E=(0,r.useState)(!1),O=E[0],A=E[1],M=(0,r.useState)(!1),_=M[0],N=M[1],C=(0,r.useState)(null),T=C[0],P=C[1],I=(0,r.useRef)(null),R=(0,r.useRef)(null),D=(0,r.useRef)(null),U=(0,r.useRef)(null);I.current=k,R.current=O,D.current=h,U.current=T,(0,r.useEffect)((function(){var e=function(e){O||(w(e.target.documentElement.scrollTop),g(e.target.documentElement.scrollTop>y))};return window.addEventListener("scroll",e),P("https://www.malaysiakini.com".concat(window.location.pathname)),function(){O||Z(),window.removeEventListener("scroll",e)}}),[I]);var Z=function(){return!(!R.current&&l&&!D.current.isAuthLoading)||(0===I.current&&!_||(!(-1!==I.current||!p||2!==p.status)||(!(!l.free||-1!==I.current)||(A(!0),void s().post("/api/analytics/scroll",{url:U.current,user_id:p?p.userId:null,user_status:p?p.textStatus:null,user_status_number:p?p.status:null,publisherId:"malaysiakini",property:d,sid:l.sid,free:l.free,contentLength:I.current,device:f?"m":"d"})))))};return(0,r.useEffect)((function(){console.log("pageview now",k),h||p&&2===p.status||l.free||(S(-1),N(!0)),75===k&&Z()}),[k]),(0,r.useEffect)((function(){_&&Z()}),[_]),(0,r.useEffect)((function(){if(b&&!u)if(!a||p&&"ACTIVE"===p.textStatus||l.frees){var e=document.querySelector("#story_content_analytics").scrollHeight,t=(y/e*100).toFixed(0);t>74&&k<74?(S(75),console.log("75%")):t>39&&k<39&&(S(40),console.log("40%"))}else S(-1)}),[y]),(0,r.useEffect)((function(){setTimeout((function(){Z()}),6e5)}),[]),(0,c.jsx)("div",{id:"story_content_analytics",children:t})}},8259:function(e,t,n){"use strict";var r=n(7294),i=n(8190),o=(n(9040),n(1664)),a=n.n(o),s=(n(9338),n(7450),n(5910)),c=n(5630),u=n(3854),l=n(5893);t.Z=function(){var e=(0,r.useContext)(i.Z),t=(e.doesAuthorImageExist,e.story),n=e.lang,o=e.t,d=t.author.split(",");return(0,l.jsxs)("div",{className:" flex md:flex-col items-center md:items-start text-center md:text-left rounded-lg cursor-pointer mt-4 mb-2 md:mb-0  print:hidden mx-4 md:mx-0",children:[(0,l.jsx)(s.Z,{lang:"zh",children:(0,l.jsxs)("div",{className:"text-xs whitespace-nowrap text-coolGray-500 hidden md:block",children:[o.read_more_from_this_author," "]})}),(0,l.jsx)(c.Z,{lang:"zh",children:(0,l.jsx)("div",{className:"text-xs whitespace-nowrap text-coolGray-500 hidden md:block",children:"\u70b9\u51fb\u9605\u8bfb\u4f5c\u8005"})}),(0,l.jsx)("div",{className:"inline-block text-xs font-medium opacity-90 no-underline md:mt-2 md:tracking-wide space-x-1",children:d.map((function(e){return(0,l.jsx)(a(),{href:"/".concat(n,"/author/").concat(e.trim()),children:(0,l.jsx)("a",{children:(0,l.jsxs)("div",{className:"inline-flex items-center cursor-pointer text-gray-700 lg:text-white bg-gray-200  lg:bg-gradient-to-br from-orange-500 to-amber-500 pl-1.5 pr-2 py-1 lg:rounded-md lg:py-1 lg:px-3 rounded-md",children:[" ",(0,l.jsx)("span",{className:"flex md:hidden h-4 w-4 bg-white text-gray-700 items-center justify-center rounded-full mr-1",children:(0,l.jsx)(u._K$,{})})," ",e.trim()]})})},e)}))}),(0,l.jsx)(c.Z,{lang:"zh",children:(0,l.jsx)("div",{className:"text-xs whitespace-nowrap text-coolGray-500",children:"\u7684\u5176\u4ed6\u4f5c\u54c1"})})]})}},4223:function(e,t,n){"use strict";var r=n(29),i=n(7794),o=n.n(i),a=n(9669),s=n.n(a),c=n(7294),u=n(8190),l=n(5893);t.Z=function(){var e=(0,c.useContext)(u.Z).story,t=e.sid,n=(0,c.useState)(!1),i=n[0],a=n[1],d=(0,c.useState)(null),f=d[0],m=d[1],p=function(){var e=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("https://mk-embed.kinitv.com/embed/".concat(t,".json"));case 3:e.sent.data.map((function(e){e.primary&&("dailymotion"===e.type&&m("https://www.dailymotion.com/embed/video/".concat(e.id,"?autoPlay=0")),"youtube"===e.type&&m("https://www.youtube.com/embed/".concat(e.id)),a(!0))})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a(!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){p()}),[e.sid]),i?(0,l.jsx)("div",{style:{width:"100%",paddingTop:"56%"},className:"relative",children:(0,l.jsx)("iframe",{src:f,className:"absolute inset-0",width:"100%",height:"100%"})}):null}},1301:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(29),i=n(7794),o=n.n(i),a=(n(4298),n(7294)),s=n(8190),c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=(0,a.useState)(0),o=i[0],s=i[1],c=(0,a.useState)(!1),u=c[0],l=c[1];(0,a.useEffect)((function(){window.addEventListener("scroll",(function(e){s(e.target.documentElement.scrollTop)}))}),[]),(0,a.useEffect)((function(){var e=document.querySelector("#story_content_analytics").scrollHeight,t=(o/e*100).toFixed(0);parseInt(t)>=40&&l(!0)}),[o]),(0,a.useEffect)((function(){if(u){var i=document.createElement("script");i.setAttribute("src","".concat(e,"?cb=").concat(Date.now())),i.setAttribute("async",r),i.setAttribute("onload",t),i.setAttribute("id","".concat(n,"-embed-script")),document.head.appendChild(i)}}),[u])},u=n(5893),l=function(){var e=(0,a.useContext)(s.Z),t=e.story,n=e.isMobile,i=t.embed_scripts,l=t.sid,d={fb:"https://connect.facebook.net/ms_MY/sdk.js#xfbml=1&version=v6.0",tw:"https://platform.twitter.com/widgets.js",ig:"https://www.instagram.com/embed.js",flourish:"https://public.flourish.studio/resources/embed.js",infogram:"https://e.infogram.com/js/dist/embed-loader-min.js",tiktok:"https://www.tiktok.com/embed.js"},f=function(){var e=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:h(),n||v();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.keys(d).map((function(e){return p(e)})),e.next=3,Promise.all(t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=document.getElementById(b(t)))&&n.remove();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){try{var e=JSON.parse(i);if(e)if("providers"in e)e.providers.map((function(e){return g((function(){return x(e)})),null}))}catch(t){}},v=function(){[].map((function(e){return g((function(){return x(e)})),null}))},b=function(e){return"".concat(e,"-embed-script")},g=function(e,t){if(window.requestIdleCallback)try{window.requestIdleCallback(e(),{timeout:t})}catch(n){setTimeout((function(){e()}),t)}else setTimeout((function(){e()}),t)},x=function(e){var t=document.createElement("script");t.src=d[e],t.async=!0,t.defer=!0,t.id=b(e);var n=document.getElementById(b(e));n&&n.remove(),document.head.appendChild(t)};return(0,a.useEffect)((function(){f(),window.instgrm&&window.instgrm.Embeds.process()}),[l]),Object.keys(d).map((function(e){c(d[e],"ig"===e?"window.instgrm.Embeds.process()":"",e)})),(0,u.jsx)(u.Fragment,{})}},283:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(7294),i=n(2568),o=n.n(i),a=n(29),s=n(7794),c=n.n(s),u=n(9669),l=n.n(u),d=n(5675),f=n.n(d),m=n(5893),p=(0,r.memo)((function(e){var t=e.isExpired,n=void 0!==t&&t,i=e.isInvalid,o=void 0!==i&&i,s=e.classes,u=void 0===s?"bg-orange-500/20":s,d=e.magicLink,p=void 0===d?"":d,h=(0,r.useState)(""),v=h[0],b=h[1],g=(0,r.useState)(!1),x=g[0],y=g[1],w=function(){var e=(0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l().post("https://friendshare.newscdn.net/".concat(n?"receive_story_via_email":"subscribe"),{email:v,magic_link:p});case 3:t=e.sent,console.log(t.data),y(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{className:"".concat(u," md:rounded-xl md:mb-4 relative"),children:(0,m.jsxs)("div",{className:"flex p-4 md:p-5 md:space-x-5",children:[(0,m.jsx)("div",{className:"md:flex hidden",children:(0,m.jsx)("div",{className:"bg-gray-100 rounded-full h-16 w-16 flex items-center justify-center",children:(0,m.jsx)(f(),{src:"https://static01.malaysiakini.com/m7/img//friendlink-icon.png",width:"40px",height:"40px",alt:"friend link icon",unoptimized:!0})})}),(0,m.jsxs)("div",{className:" w-full",children:[n&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"font-semibold md:text-2xl sm:text-lg text-white",children:"We are sorry."}),(0,m.jsx)("div",{className:"text-base mt-2",children:"This read4free link has already been read by 10 friends. Enter your email to receive this story."})]}),!n&&!o&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"font-semibold md:text-2xl sm:text-lg text-orange-500",children:"Greetings from Malaysiakini's FriendLink"}),(0,m.jsxs)("div",{className:"md:text-base text-sm mt-2 mb-4",children:[(0,m.jsx)("div",{className:"mb-2",children:"You have received this full article from Malaysiakini or one of our subscribers."}),(0,m.jsx)("div",{children:"If you would like to receive more selected stories, please leave your email here."})]})]}),o&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"font-semibold md:text-2xl sm:text-lg text-white",children:"We are sorry."}),(0,m.jsx)("div",{className:"text-base mt-2",children:"The Friendlink URL is not valid."})]}),!o&&(0,m.jsx)("form",{className:"flex mt-2",onSubmit:function(e){e.preventDefault(),w()},children:x?(0,m.jsx)("div",{className:"text-base font-semibold text-center",children:"Thank You"}):(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:"flex w-full bg-coolGray-100 p-1 rounded-md",children:[(0,m.jsx)("input",{type:"email",name:"email",value:v,placeholder:"Enter your email",className:"flex-grow font-medium text-sm cursor-text border-0 rounded bg-coolGray-100 w-[75%]",onChange:function(e){return b(e.target.value)},required:!0,autoComplete:"email"}),(0,m.jsx)("input",{type:"submit",value:"Join Now",className:"flex justify-center py-2 px-4 rounded text-xs uppercase font-semibold text-orange-500 bg-orange-500/20 w-[25%]"})]}),(0,m.jsxs)("div",{className:"mt-2",children:["For unlimited access to all our stories and to share your comments, subscribe to Malaysiakini now. Select a package that suits you best:"," ",(0,m.jsx)("a",{className:" flex justify-center py-2 px-4 rounded text-xs uppercase font-semibold mt-2 bg-orange-500 w-[30%] text-white hover:bg-white hover:text-orange-400",target:"_blank",href:"https://membership.malaysiakini.com/membership/start?lang=en",children:"VIEW PLANS NOW"})]})]})})]})]})})})})),h=p,v=(0,r.memo)((function(){if(""!==window.location.hash){var e=window.location.hash.split("-");return"#friendshare"===e[0]&&"link"===e[1]&&""!==e[2]?"expired"!==e[2]?e[3]===o()(e[2]+"f0be087f100eb9f3cc2cd4de860f9635")?(0,m.jsx)(h,{magicLink:e[2]}):(0,m.jsx)(h,{isInvalid:!0,classes:"bg-red-300",magicLink:e[2]}):(0,m.jsx)(h,{isExpired:!0,classes:"bg-red-300",magicLink:e[2]}):null}return null}))},7440:function(e,t,n){"use strict";var r=n(7294),i=n(6893),o=n(7962),a=n(8190),s=n(5893);t.Z=function(){var e=(0,r.useContext)(o.V),t=e.paywallQuota,n=e.isNotificationsLoading,c=(0,r.useContext)(a.Z).lang;if(n)return null;var u={zh:"\u4f60\u8fd8\u80fd\u514d\u8d39\u9605\u8bfb".concat(t,"\u7bc7\u65b0\u95fb\u3002\u559c\u6b22\u6211\u4eec\u7684\u5185\u5bb9\u5417? \u9a6c\u4e0a\u8ba2\u9605\u4ee5\u65e0\u9650\u7545\u8bfb\u5168\u7ad9\u5185\u5bb9"),en:"You have ".concat(t," free article remaining. Enjoyed our content? Subscribe for unlimited access to more articles and exclusive content."),my:"You have ".concat(t," free article remaining. Enjoyed our content? Subscribe for unlimited access to more articles and exclusive content.")};return(0,s.jsxs)("div",{className:"bg-orange-500/10 flex px-4 md:px-8 pt-6 md:pb-4 pb-3 space-x-2",children:[(0,s.jsx)("div",{children:(0,s.jsx)(i.H33,{className:"text-orange-500 w-4 md:w-5 h-4 md:h-5"})}),(0,s.jsx)("span",{className:"text-xs md:text-sm text-slate-600",children:u[c]})]})}},5910:function(e,t,n){"use strict";var r=n(7294),i=n(6871),o=n(8190);t.Z=function(e){var t=e.lang,n=void 0===t?i.Hj:t,a=e.children;return n!==(0,r.useContext)(o.Z).lang?a:null}},9504:function(e,t,n){"use strict";var r=n(7294),i=n(7962);t.Z=function(e){var t=e.children,n=(0,r.useContext)(i.V),o=n.user;return!n.isAuthLoading&&o?t:null}},1742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);