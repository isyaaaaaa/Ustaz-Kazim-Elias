(self.webpackChunk_ali_psolution_lzd_head_foot=self.webpackChunk_ali_psolution_lzd_head_foot||[]).push([[633,781,600,442],{9057:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var i=n(1543),o=n(5033),a=n(3736),r=n(6005),s=n(717),l=n.n(s),u=n(1186),c=n(2277),d=n(551),f="get-the-app-error",p="get-the-app-loading",h=function(){function e(t){(0,i._)(this,e),(0,a._)(this,"$el",void 0),(0,a._)(this,"cfg",void 0),(0,a._)(this,"$form",void 0),(0,a._)(this,"$input",void 0),(0,a._)(this,"$successMsg",void 0),(0,a._)(this,"$errorMsg",void 0),this.$el=t,this.cfg={url:"SG"===r.regionID||"TH"===r.regionID||"MY"===r.regionID?"//www.".concat(r.domain,"/index/smsproxy/"):"//www.".concat(r.domain,"/index/smsproxy"),ajaxForm:!0,defaultParams:{key:"smshp"},numberPrefix:{VN:"+84",TH:"+66",SG:"+65",PH:"+63",ID:"+62",MY:"+60"}},this.$form=l()("#topActionDownloadForm"),this.$input=l()("#topActionDownloadInput"),this.$successMsg=l()("#topActionDownloadSuccessMsg"),this.$errorMsg=l()("#topActionDownloadErrorMsg"),this.initialize()}return(0,o._)(e,[{key:"initialize",value:function(){this.$form.on("submit",this.onFormSubmit.bind(this))}},{key:"onFormSubmit",value:function(e){var t,n,i=this;(0,c.clickEvent)("/lzdhome.desktop.footer_download_btn",{venture:(null===(n=window)||void 0===n||null===(t=n.g_config)||void 0===t?void 0:t.regionID)||""});var o=this.$input.val().trim();e.preventDefault(),this.clearError(),this.isValid(o)?(this.showLoading(),(0,d.default)({url:"".concat(this.cfg.url,"?key=smshp&mobile=").concat(encodeURIComponent(this.getPhoneNumberWithPrefix(o))),method:"GET",headers:{"X-Requested-With":"XMLHttpRequest","Access-Control-Allow-Origin":"*"}}).then((function(e){i.hideLoading(),0===parseFloat(e.status)?i.showSuccess():i.showError(e["error-text"]||"Fail, please try later!")}),(function(){i.hideLoading()}))):this.showError("Please enter a valid phone number!")}},{key:"isValid",value:function(e){return e&&""!==e&&/^\d{8,20}$/g.test(e.replace("+",""))}},{key:"getPhoneNumberWithPrefix",value:function(e){var t=r.regionID,n=this.cfg.numberPrefix[t]||this.cfg.numberPrefix.VN;return 0===e.indexOf("+")?e:n+e.replace(/^0+/,"")}},{key:"clearError",value:function(){this.$errorMsg.html(""),this.$el.removeClass(f)}},{key:"showSuccess",value:function(){this.$el.addClass("get-the-app-success")}},{key:"showError",value:function(e){e&&this.$errorMsg.html(u.default[e]),this.$el.addClass(f)}},{key:"showLoading",value:function(){this.$el.addClass(p)}},{key:"hideLoading",value:function(){this.$el.removeClass(p)}}]),e}()},196:function(e,t,n){n.r(t);var i={updateNumber(e){var t=e&&e.size||0,n=document.getElementById("topActionCartNumber");n&&(t>0?(n.innerHTML=t,n.style.display="block"):(n.innerHTML="",n.style.display="none"))}};window.LZD=window.LZD||{},window.LZD.Cart=i,t.default=i},1428:function(e,t,n){n.r(t),n.d(t,{isInternal:function(){return i}});var i=function(e,t){var n=new Image;n.src="https://tpsservice-files-inner.cn-hangzhou.oss-cdn.aliyun-inc.com/images/resources/9dd6917e501f4144dd7af71009cceb63-1-1.png?d=".concat((new Date).getTime()),n.onload=function(){e()},n.onerror=t}},1633:function(e,t,n){n.r(t);var i=n(1543),o=n(5033),a=n(2483),r=n(2661),s=n(717),l=n.n(s),u=n(6005),c=n(551),d=n(4233),f=n(196),p=n(1428),h=n(9057),m=n(2696),g=n(9726),v=n(3583),b=u.domain,w=function(){function e(){(0,i._)(this,e),this.poperBind(),this.initialize()}return(0,o._)(e,[{key:"fetchUserInfo",value:function(){var e=this,t=(0,u.isDaily)()?"//buyer.lazada.test/user/api/getUser":"//member.".concat(b,"/user/api/getUser");this.requestRestful(t).then((function(t){var n={isLogin:!1};t.module&&(t.module.name||t.module.email||t.module.phone)&&(n=(0,a._)({isLogin:!0},t.module),(0,v.default)({isLogin:n.isLogin,first_name:n.name||n.email||n.phone}),e.accountDropdown()),l()("body").trigger("userInfoUpdate",(0,r._)((0,a._)({},n),{isLogin:n.isLogin,is_loyalty_member:n.isLiveUp,enableEwallet:n.enableEwallet})),new m.default(l()(".lzd-track-content"),{customerInfo:n})}),(function(){new m.default(l()(".lzd-track-content"),{})}))}},{key:"fetchCartInfo",value:function(){var e=(0,u.isDaily)()?"//buyer.lazada.test/cart/api/count":"//cart.".concat(b,"/cart/api/count");this.requestRestful(e).then((function(e){e.module&&e.module.cartNum&&f.default.updateNumber({size:e.module.cartNum})}))}},{key:"initialize",value:function(){var e=l()("#topActionInternalFeedback"),t=l()("#topActionFeedback");(0,p.isInternal)((function(){e&&e.css("display","inline-block"),t&&t.css("display","none")}),(function(){})),new h.default(l()(".get-the-app")),new g.default,b&&(this.fetchUserInfo(),this.fetchCartInfo())}},{key:"requestJSONP",value:function(){return(0,c.default)({url:"//layout.".concat(b,"/v2/layout/variables/"),type:"jsonp",timeout:3e4,jsonpCallback:"callback",withCredentials:!0})}},{key:"requestRestful",value:function(e){if(e){var t=(0,c.default)({url:e,method:"GET",timeout:3e4,type:"json",withCredentials:!0}),n=new Promise((function(e,t){e({module:{id:1198832013,name:"Ellie Wang",birthday:null,email:"wyl257221@lazada.com",emailConfirmed:!1,phone:"",phonePrefixCode:"",gender:null,avatar:null,passwordVersion:null,alipayUserId:"2161220092208467",language:"en_SG",taxId:null,branchId:null,contactEmail:"wyl257221@lazada.com",contactPhone:null,isVerified:!1,b2b:!1,isTest:!1,status:"NORMAL",type:"BUYER",isLiveUp:!1,liveUpStatus:"NO_MEMBER_FOR_NEW",enableEwallet:!1,hasAddress:!1,memberLevel:"TRUSTED",enableNewsletter:!0,enableSmsNewsletter:!1,userTag1:null,userTag2:null,userTag3:null,userTag4:null,userTag5:null,ext:'{"lzdAppVersion":"1.0","referer":"https://member.lazada.sg/user/pure-login?signupType=email","emailConfirmed":false,"cookie":"client_type=desktop; _uab_collina=167997442307208373197685; client_type=desktop; __wpkreporterwid_=9abe087a-6a20-41e3-9a17-fbd1e796dbb4; anon_uid=10935cb467cd8b5a45912e9786b41cb4; t_fv=1634527941568; cna=SRXwGWgnbVoCAWoLH9e9nuiA; t_uid=10935cb467cd8b5a45912e9786b41cb4; lwrid=AQGGVFF1bNqUKl7lOUymeiduI26G; hng=SG|en-SG|SGD|702; _gcl_au=1.1.514790850.1678157470; lzd_cid=8e0c8a20-7c01-4fed-ba42-02bbd3b94aae; _ga=GA1.2.1615169705.1678854831; _bl_uid=hel5Rfk7r35pwCemtakj56pqqv16; G_ENABLED_IDPS=google; AMCV_126E248D54200F960A4C98C6%40AdobeOrg=-1124106680%7CMCIDTS%7C19446%7CMCMID%7C84222243479677918110996633795590048835%7CMCAAMLH-1680660996%7C11%7CMCAAMB-1680660996%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1680063396s%7CNONE%7CvVersion%7C5.2.0; lzd_sid=15c5820b520acd23421cfd5cee97e419; _tb_token_=7e588543b36e9; cto_bundle=dC78i19laTBrWEhneExydEMzSDlVdWxwaWVjQlVIRzRTMTlHTmh0UzVVTnFWSGRCRjZSemdRRmF5S0t0aG9wcSUyRlEyaTdOYVA1aFV2NyUyQnAzT1gyUDFOelduJTJCSmdielIlMkJsWTRzd2RCNlhDS01LbFlhWmZHaTZWMWdLS3NZT0xOb1RlbkpiNWNCZUhIa3p3ZExBWUkyM3VBVXlSM1J1RCUyRlZ3ZGMlMkZiOURYNU1zSWFQemRpZFNoeEhKOTloczdhMTR2RUVjRHg; t_sid=kL3pKaLZ3hC960cMnjTT3QtTzG8Ec3q7; utm_channel=NA; _uetsid=53737a00d20711ed9735f5324c2544c0; _uetvid=0369c9d02fc411ecbbf83ba3999087a3; xlly_s=1; _m_h5_tk=d6cfcc5e9eab8bce45440f48930d9e12_1680525443815; _m_h5_tk_enc=ff6360162533e090515e002ad9f79442; utm_origin=https://aliyuque.antfin.com/; l=fBEOPElHT7j6vVtzBO5Zhurza77t3IOf1sPzaNbMiIEGa6sP6ef8lNCsb_kkJdtj_TCUaetyIZTzrdEwJgUwwiLbEEKtaeOmuxvTi15e4; tfstk=cqZ5BiajwWE2hlsHqb64c9nOVSi1abKS3TG0F_SZI1aMsieSMsVwbf1amJAxYvHf.; isg=BNTUhiYJTK1G298nvrnvTQS2pRRGLfgXnDtpP260dt_iWXejlj1dp8jbWVlBoTBv","kernel":"true","language":"en_SG","userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36","isAdmin":true,"sessionId":"15c5820b520acd23421cfd5cee97e419","havanaId":476768665759,"platform":"WEB","x-ua":"140#DIudffGVzzWPbzo2wW++l6sXLgESKvvcw8dKIyho4L1w0tHf+4QWKJ8wqpjVRgz5Y/M5bkaM2rxFH8OH+sC+QMrGcwEpZk6nzK8mzy67L9WOAres+jsMcDpLsT0UGtqnTu/mbxO9UFfv21fx2R4qlbzxG0tsMoXlzzcOhO0iltQzzPzbVXlqlbrd/5fI2EPuzq+2LcJNUpsrxDrbL8/qlbrVixK+VPrbzRsi2FTKl0+xz/fizFoqqETxkIdKWt1BzFrK2XQ4lpgax8rYIXICy7Ox2uP+X6h/V7ri2CeklNMxI8+iAdnqKbrxzDw+Q3GuzbcQ2XQNe3fpzXMIVclultTd2jK+VCiGzP2in1Y4WrMxIIriWxVqnzrx18c+Y61uzFcTL1QtUpN6zPnsIOshKbc9zy92sbxLMZ2aMX2ssP6t9u5GhSJEUBzjo+InWi6BAaJnNB8X71YhjqqFEkqaRF1/iONDHg3vjGpshYAypLdiLG6g1gHm7fVgpP9VEJR7aXbUYun+8e/1Bkh7NxBq+LUOK13t9DJDnJyzUiTZaYxymw0zSdjTlg+6c4qmi3D0cSNzASPWCGpVcrM94ViJeRJR6sAregMAq16g/25gzGdJCia+u5jBYmgX68zG6Lw+fkBeMLuPE0gBjzRPZ7VZkZWazYCFucdDXYLtlEQtBjC5lUk58dPbNtnVx5p953j48v3gszmOH4H0BCwt5ubEueST5aV1VkNjpuOWxPtMjCZ+lzAp48N1oxMbyKjM2c0pva94w5C6vJ8WHJETdpGMK3SzzoXZqyoLoOZBLxTd/fHTn8TmjXIo3diRAv/skpWiKedpV3eQGN8Gbd0/T6GRTi1VdBU5UVeHDM5welv+Yny7OGzclGsySXSHiCXlFhCOeS5CUXxyfDukg5x9V82W679pLSjAjfAll8f3l7UBpoOKBEUOnSh3aHofIWLHre8DckvzGPlp6Mn6Ei3Oh1fbz2eH0A4B7n6+MTVS8Gi4yzJZwUpiRVKg3w093Re8YEHdtT261GMfUUbGSr8nVuTdm8dDUe1dcsTZ6J+unkNNniESNrRvJbCKwuzggmcMoWmmgbWwfkOMFD9jCdvOXmbz838zzanzIs3cujr6Hg4X1pBPtSW4cYdm9A9EwOtP0eTb+jxvD0JAgX3Oir4TBaimr4aMyqE6ukl9gYST6Ygn3sM6Ab4Jo0dhfYZEx7WHT+xl17HBRA5moMkv0squAUebHRf9Qr1wyeAewOMgpju1eH0la/1zhcqIlW399+7sjU3aa9F2xNG05njReonvBnrU5ZU46t2LSG6w+SKZ10lWH88G3wkIbuyrcCgQAucbPRfbwYJuDDutxRHRpZfWs1WZ6gQiUganiGFRX1nUkueszOvP0fd20s7Y2K1uIWDlJGiynKyR3/Cr/I6iw/+VDHdn+bwS/1FMWmQs81khdGe81vdffrKc5et1jhtCWVBuY8vy7pxY5LCCpJHolE6boArfmrS6MBVoe7SkDkKFNO9uq4UBn4NkrKfEGRpWkkjgG+BJss5bAbcd/qrYpaqCloa9nH5KyYdgNamoiqWIK8QACvbm+pOaivlIt1SQFrGW0+qxCEn3io4pU9+2YkEog6LqROjDtoiZKdMxX15sxoJ1p++78PxwRYpvrd1GxT98/0fhXl8ruACeLZZvdcZIk44vscNZ+lpdXXNbUtOHDwrRul0tfQj2hlqY5szp050sSa+dedSbSRrAHQ5yMU7NmaD0Esu9Wzx4M6WtWpcyKtHnD2DILwwvR2Umb92WxX8lLcMePgGR6RCayxZftVrlYDj3pKf95jwvh1kF+Bnbuq2=","clientIp":"106.11.31.211","cna":"SRXwGWgnbVoCAWoLH9e9nuiA","x-umidtoken":"T2gAJJGJUjYdITvRE4G9LFqX5CxQlM6D2OXYhWVXqyu-vNDTeW4Akd8VrWobLo0ZeII="}',gmtCreate:1680518368.319,gmtModified:1680518368.319,siteId:"SG",hasPassword:!0,hasPinCode:!1,isShowPinCode:!1,isShowBiometric:!0,site:32,originalPhone:""},success:!0,errorCode:null,retry:!1,repeated:!1,notSuccess:!1})})),i=new Promise((function(e,t){e({success:!0,module:{showRedDot:"0",cartNum:1}})}));return(0,u.isDaily)()?"//buyer.lazada.test/cart/api/count"===e?i:n:t}}},{key:"popperInit",value:function(e,t){return new d.default(e,t,{className:"top-popup-wrap-active"})}},{key:"accountDropdown",value:function(){var e=this.popperInit(".lzd-account-popup","#topActionUserAccont");this.mouseOutHide(e,[l()(".lzd-account-popup"),l()("#topActionUserAccont")])}},{key:"poperBind",value:function(){var e=this.popperInit(".lzd-download-popup","#topActionDownload");this.bodyClickHide(e);var t=this.popperInit(".lzd-customcare-popup","#topActionCustomCare");this.mouseOutHide(t,[l()(".lzd-customcare-popup"),l()("#topActionCustomCare")]);var n=this.popperInit(".lzd-track-popup","#topActionTrack");this.bodyClickHide(n);var i=this.popperInit(".lzd-switch-popup","#topActionSwitchLang");this.mouseOutHide(i,[l()(".lzd-switch-popup"),l()("#topActionSwitchLang")])}},{key:"bodyClickHide",value:function(e){l()("body").on("click",(function(t){var n,i,o=null===(n=l()(e.triggerRef))||void 0===n?void 0:n.get(0);o&&!(null===(i=l())||void 0===i?void 0:i.contains(o,l()(t.target).get(0)))&&e.hide()}))}},{key:"mouseOutHide",value:function(e,t){t.map((function(t){l()(t).on("mouseleave",(function(){e.hide()}))}))}}]),e}();t.default=w},9726:function(e,t,n){n.r(t);var i=n(717),o=n.n(i),a=n(3469);t.default=function(){a.default.removeRoot&&a.default.removeRoot(),a.default.get()&&"null"!==a.default.get()||a.default.setDefault(),o()(".lzd-switch-item").on("click",(function(e){var t;(t=o()(e.currentTarget).attr("data-lang"))&&a.default.setLang(t),location.reload()}))}},3583:function(e,t,n){n.r(t),n.d(t,{default:function(){return r}});var i=n(1186),o=n(717),a=n.n(o);function r(e){if(e.isLogin){var t=i.default["siteNav.account"].replace("{user}",e.first_name);a()("#anonLogin").remove(),a()("#anonSignup").remove(),a()("#topActionUserAccont").removeClass("top-links-item-hidden").find("#myAccountTrigger").text(t)}}},3469:function(e,t,n){n.r(t);var i=n(519),o=n(6005),a="userLanguageML",r="localhost";function s(e){if(e){e=function(e,t){var n;try{n=o.SITE_CONFIGS[t].lang}catch(i){}return n?Array.isArray(n)?(n.forEach((function(t){(t===e||t.indexOf(e)>-1)&&(e=t)})),e):n:null}(e,o.regionID);var t=o.SITE_CONFIGS[o.regionID],n=location.hostname.indexOf(r)>=0;if(e||t){var s={domain:".".concat(n?r:t.domain),expires:30};(0,i.d8)("hng","".concat(o.regionID,"|").concat(e,"|").concat(t.currency,"|").concat(t.id),s),n||((0,i.nJ)(a,{path:"/",domain:".".concat(t.domain)}),e=e.substring(0,2),(0,i.d8)(a,e,{expires:30}))}}}var l={setDefault:function(){var e;try{e=o.SITE_CONFIGS[o.regionID].lang}catch(t){}if(e)return Array.isArray(e)?e.indexOf(o.language)>-1?s(o.language):s(e[0]):s(e)},setLang:s,get:function(){return(0,i.ej)("hng")},removeRoot:function(){var e=o.SITE_CONFIGS[o.regionID],t=e?{path:"/",domain:".".concat(e.domain)}:{path:"/"};(0,i.nJ)(a,t)}};t.default=l},4233:function(e,t,n){n.r(t);var i=n(1543),o=n(5033),a=n(717),r=n.n(a),s=function(){function e(t,n,o){(0,i._)(this,e),this.elementRef=t,this.triggerRef=n,this.options=o,this.isShow=!1,this.attach()}return(0,o._)(e,[{key:"attach",value:function(){var e=this;this.triggerRef&&r()(this.triggerRef).on("click",(function(t){if(e.isShow){var n,i=null===(n=r()(e.elementRef))||void 0===n?void 0:n.get(0);i&&!r().contains(i,t.target)&&e.hide()}else e.calcPosition(),e.show();e.options.stopPropagation&&t.stopPropagation()}))}},{key:"detach",value:function(){this.triggerRef&&r()(this.triggerRef).off("click")}},{key:"calcPosition",value:function(){var e=this.options.offset,t=void 0===e?{}:e,n=r()(this.triggerRef);if(r()(this.elementRef)){var i=n.height();r()(this.elementRef).css({top:i+parseInt(t&&t.x?t.x:0,10)})}}},{key:"show",value:function(e){this.isShow||(r()(this.elementRef).addClass(this.options.className),this.isShow=!0,e&&e())}},{key:"hide",value:function(e){this.isShow&&(r()(this.elementRef).removeClass(this.options.className),this.isShow=!1,e&&e())}}]),e}();t.default=s}}]);