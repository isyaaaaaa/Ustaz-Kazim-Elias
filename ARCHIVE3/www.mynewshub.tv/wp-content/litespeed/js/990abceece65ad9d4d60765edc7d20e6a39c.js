var tdbMenu={};(function(){tdbMenu={ui_events:"mouseover click keydown wheel touchmove touchstart".split(" "),items:[],item:function(){this.blockAtts=this.blockUid="";this._outsideClickArea=this._mainMenu=this._itemsWithSubmenu=null;this._outsideClickExcludedAreas="";this._openMenuClass="tdb-hover";this._openMenuBodyClass="tdb-open-menu";this.isMegaMenuParentPos=this.isMegaMenuFull=this.inComposer=!1;this.megaMenuLoadType="";this._is_initialized=!1},init:function(){tdbMenu.items=[]},_initialize_item:function(a){if(!0!==a._is_initialized){tdbMenu._setHover(a);var b=0<jQuery("."+a.blockUid).parents(".td-header-template-wrap").length,e=a.jqueryObj.find(".tdb-menu .tdb-mega-menu .sub-menu"),d=a.jqueryObj.find(".tdb-menu .tdb-mega-menu-page .sub-menu"),f=a.jqueryObj.find(".tdb-menu .tdb-mega-menu-cat .sub-menu");0<e.length&&(window.tdb_p_autoload_vars.isAjax?b||(a.isMegaMenuFull&&tdbMenu.megaMenuFull(a,a.inComposer),a.isMegaMenuParentPos&&tdbMenu.megaMenuParentPos(a,a.inComposer)):(a.isMegaMenuFull&&tdbMenu.megaMenuFull(a,a.inComposer),a.isMegaMenuParentPos&&tdbMenu.megaMenuParentPos(a,a.inComposer)));if("ui_delayed"===a.megaMenuLoadType&&!a.inComposer&&(0<d.length||0<f.length))a.jqueryObj.on("ui_delayed_load",function(){0<d.length&&tdbMenu.loadDelayedPageMM(a);0<f.length&&tdbMenu.loadDelayedCatMM(a)});0<d.length&&0<jQuery("."+a.blockUid).parents(".tdc-row-is-sticky").length&&(window.tdb_p_autoload_vars.isAjax?b||tdbMenu.pageMegaMenuHeight(a,a.inComposer):tdbMenu.pageMegaMenuHeight(a,a.inComposer));a._is_initialized=!0}},loadDelayed:function(a){for(a=0;a<tdbMenu.items.length;a++){var b=tdbMenu.items[a];"ui_delayed"!==b.megaMenuLoadType||b.inComposer||b.jqueryObj.trigger("ui_delayed_load")}tdbMenu.ui_events.forEach(function(a){window.removeEventListener(a,tdbMenu.loadDelayed,{passive:!0})})},loadDelayedPageMM:function(a){a.jqueryObj.find(".tdb-menu .tdb-mega-menu-page").each(function(){var a=jQuery(this).find("li.menu-item-0"),e=a.find(".tdb-menu-item-text"),d=a.data("p-mm-id");jQuery.ajax({type:"POST",url:td_ajax_url,data:{action:"tdb_get_mm_page",pageId:d,td_res_context_registered_atts:td_res_context_registered_atts},success:function(a,b,c){a=jQuery.parseJSON(a);"undefined"!==typeof a.content&&(jQuery(a.content).appendTo(e),"undefined"!==typeof window.tdAnimationStack&&!0===window.tdAnimationStack.activated&&window.tdAnimationStack.reinit())},error:function(a,b,c){console.group("%c tdbMenu.loadDelayedPageMM/tdb_get_mm_page: error","color: orangered;");console.log("Post: ",{pageId:d});console.log("errorThrown: ",c);console.groupEnd()}})})},loadDelayedCatMM:function(a){a.jqueryObj.find(".tdb-menu .tdb-mega-menu-cat").each(function(){var b=jQuery(this).find("li.menu-item-0"),e=b.find(".tdb-menu-item-text"),d=b.data("cat-mm-id");jQuery.ajax({type:"POST",url:td_ajax_url,data:{action:"tdb_get_mm_cat",td_block_atts:a.blockAtts,cat_mm_id:d},success:function(a,b,c){a=jQuery.parseJSON(a);"undefined"!==typeof a.content&&(jQuery(a.content).appendTo(e),"undefined"!==typeof window.tdAnimationStack&&!0===window.tdAnimationStack.activated&&window.tdAnimationStack.reinit())},error:function(a,b,c){console.group("%c tdbMenu.loadDelayedCatMM/tdb_get_mm_cat: error","color: orangered;");console.log("Post: ",{cat_mm_id:d});console.log("errorThrown: ",c);console.groupEnd()}})})},addItem:function(a){if("undefined"===typeof a.blockUid)throw"item.blockUid is not defined";tdbMenu.items.push(a);tdbMenu._initialize_item(a)},deleteItem:function(a){for(var b=0;b<tdbMenu.items.length;b++)if(tdbMenu.items[b].blockUid===a)return tdbMenu.items.splice(b,1),!0;return!1},megaMenuFull:function(a,b){function e(){k=d.find(".tdb-menu .tdb-mega-menu .sub-menu");k.each(function(){c=-f.left+"px";jQuery(this).attr("style","left:"+c+"; width: "+jQuery("body").outerWidth()+"px !important")});h||(d.find(".tdb-mega-menu-inactive").removeClass("tdb-mega-menu-inactive"),h=!0)}var d=a.jqueryObj,f,g,c,k,h=!1;jQuery(window).resize(function(){setTimeout(function(){f=d.offset();g=f.left;e();b&&setInterval(function(){f=d.offset();f.left!==g&&(e(),g=f.left)},1E3)},1500)});jQuery(window).resize()},megaMenuParentPos:function(a,b){function e(){c=d.find(".tdb-menu .tdb-mega-menu > ul");c.show();c.each(function(){jQuery(this).css("left","");k=jQuery(this).offset();h=k.left;0>h?jQuery(this).offset({left:0}):(l=jQuery(window).width()-(h+jQuery(this).outerWidth()),0>l&&jQuery(this).offset({left:jQuery(window).width()-jQuery(this).outerWidth()}))});m||(d.find(".tdb-mega-menu-inactive").removeClass("tdb-mega-menu-inactive"),m=!0);c.hide()}var d=a.jqueryObj,f,g,c,k,h,l,m=!1;setTimeout(function(){jQuery(window).resize(function(){f=d.offset();g=f.left;e();b&&setInterval(function(){f=d.offset();f.left!==g&&(e(),g=f.left)},1E3)});jQuery(window).resize()},60)},pageMegaMenuHeight:function(a,b){function e(){g.show();g.each(function(){var a=jQuery(this),b=a.find("> li"),e=f.offset().top+f.outerHeight();b=b.outerHeight();var g=d.scrollTop(),m=d.height();e+b>m+g?a.css({height:m+g-e,"overflow-y":"auto"}):a.css({height:"auto","overflow-y":"visible"})});g.hide()}var d=jQuery(window),f=a.jqueryObj,g=f.find(".tdb-menu .tdb-mega-menu-page > ul");setTimeout(function(){d.on("resize scroll",function(){e();b&&setInterval(function(){e()},1E3)});d.resize().scroll()},1500)},_getSubmenuPosition:function(a){var b=jQuery(window).width();a=a.children(".sub-menu").first();if(0<a.length){var e=a.offset().left+a.width();e>b&&(a.parent().parent().hasClass("tdb-menu")?a.css("left","-"+(e-b)+"px"):a.addClass("reversed").css("left","-"+(a.width()+0)+"px"))}},_getMouseAngleDirection:function(a,b,e,d){return Math.atan2(e-a,d-b)/Math.PI*180},_setHover:function(a){var b=a.jqueryObj.find(".tdb-menu");b.supersubs({minWidth:10,maxWidth:20,extraWidth:1,applyMin:!0});var e=b.find(".menu-item-has-children > a, .tdb-mega-menu > a");e.parent().find(".sub-menu").first().css("display","none");if(tdDetect.isTouchDevice)jQuery(document).on("touchstart","body",function(c){var b=e.parent(),d=jQuery("body");d.hasClass(a._openMenuBodyClass)&&!b.is(c.target)&&0===b.has(c.target).length&&(b.removeClass(a._openMenuClass),b.children(".sub-menu").hide(),d.removeClass(a._openMenuBodyClass))}),e.on("touchstart",function(c){c.preventDefault();c.stopPropagation();var b=jQuery(this);c=b.parent();var d=jQuery("body");c.hasClass(a._openMenuClass)?null!==b.attr("href")&&"#"!==b.attr("href")?window.location.href=b.attr("href"):((c.parent().hasClass("tdb-menu")||c.parent().hasClass("top-header-menu"))&&d.removeClass(a._openMenuBodyClass),c.removeClass(a._openMenuClass),c.find(".sub-menu").hide(),c.find("li").removeClass(a._openMenuClass)):(c.parent().hasClass("tdb-menu")||c.parent().hasClass("top-header-menu")?(e.parent().removeClass(a._openMenuClass),e.parent().children(".sub-menu").hide()):(b=c.siblings(),b.removeClass(a._openMenuClass),b.find(".sub-menu").hide(),b.find("li").removeClass(a._openMenuClass)),c.addClass(a._openMenuClass),c.children(".sub-menu").show(),tdbMenu._getSubmenuPosition(c),d.addClass(a._openMenuBodyClass))});else{var d={},f,g=!0;b.on("mouseleave",function(){e.parent().removeClass(a._openMenuClass);e.parent().children(".sub-menu").hide();d={}});b.find(".menu-item").hover(function(){var b=jQuery(this),k="",h,l;if(b.hasClass("menu-item-has-children")||b.hasClass("tdb-mega-menu"))if(b.parent().hasClass("tdb-menu"))if(jQuery.isEmptyObject(d))b.addClass(a._openMenuClass),b.children(".sub-menu").show(),d=b;else{if(b[0]!==d[0]){var m=l=h=0;var n=null;!0===g&&(g=!1,f=setTimeout(function(){e.parent().removeClass(a._openMenuClass);e.parent().children(".sub-menu").hide();b.addClass(a._openMenuClass);b.children(".sub-menu").show();d=b},400));b.on("mousemove",function(c){5<=h?(h=0,n=tdbMenu._getMouseAngleDirection(l,m,c.pageX,c.pageY),l=c.pageX,m=c.pageY):(h++,0===l&&0===m&&(l=c.pageX,m=c.pageY));null!==n&&(85<n||-85>n)&&(e.parent().removeClass(a._openMenuClass),e.parent().children(".sub-menu").hide(),b.addClass(a._openMenuClass),b.children(".sub-menu").show(),b.off("mousemove"),clearTimeout(f),g=!0,d=b)})}}else k=b.siblings(),k.removeClass(a._openMenuClass),k.find(".sub-menu").hide(),k.find("li").removeClass(a._openMenuClass),b.addClass(a._openMenuClass),b.children(".sub-menu").show(),tdbMenu._getSubmenuPosition(b);else b.parent().hasClass("tdb-menu")?jQuery.isEmptyObject(d)||(m=l=h=0,n=null,!0===g&&(g=!1,f=setTimeout(function(){e.parent().removeClass(a._openMenuClass);e.parent().children(".sub-menu").hide();d={}},400)),b.on("mousemove",function(c){5<=h?(h=0,n=tdbMenu._getMouseAngleDirection(l,m,c.pageX,c.pageY),l=c.pageX,m=c.pageY):(h++,0===l&&0===m&&(l=c.pageX,m=c.pageY));null!==n&&(85<n||-85>n)&&(e.parent().removeClass(a._openMenuClass),e.parent().children(".sub-menu").hide(),b.off("mousemove"),clearTimeout(f),g=!0,d={})})):(d=b.parent(),k=b.siblings(),k.removeClass(a._openMenuClass),k.find(".sub-menu").hide(),k.find("li").removeClass(a._openMenuClass))},function(){var a=jQuery(this);!1===g&&(clearTimeout(f),g=!0);a.off("mousemove")})}},unsetHover:function(a){null!==a._itemsWithSubmenu&&a._itemsWithSubmenu.off();null!==a._outsideClickArea&&a._outsideClickArea.off()}}})();var tdbMenuItemPullDown={};(function(){tdbMenuItemPullDown={init:function(){setTimeout(function(){jQuery(".tdb-menu-items-pulldown").each(function(a,b){var e=jQuery(b),d=e.parent().attr("id");b=jQuery("."+d);var f="";"none"!==b.css("max-width")&&(f=b.css("max-width"));if(b.hasClass("tdb-menu-items-in-more")){var g=e.find(".tdb-menu:first"),c=g.parents(".tdb-menu-items-pulldown:first"),k=[];a=new tdPullDown.item;if(void 0!==b.css("display")&&"inline-block"===b.css("display")){var h=b.closest(".vc_column_container");c=h;var l="";l=0!==h.find(".tdc-elements").length?".tdc-elements":".wpb_wrapper";h.find(l+" > .td_block_wrap").each(function(){var a=.9*h.outerWidth(!0),b=jQuery(this).outerWidth(!0);if(jQuery(this).data("td-block-uid")!==d)if(b<a)k.push(jQuery(this));else return!1})}a.blockUid=d;a.horizontal_jquery_obj=g;a.vertical_jquery_obj=e.find(".tdb-menu-items-dropdown:first");a.horizontal_element_css_class="tdb-menu-item-button";a.horizontal_no_items_css_class="tdb-menu-items-empty";a.container_jquery_obj=c;a.horizontal_max_width=f;a.excluded_jquery_elements=k;a.isTdbMenu=!0;e=b.find(".tdb-main-sub-icon-fake");e.length&&(a.main_sub_icon=e.html());b=b.find(".tdb-sub-icon-fake");b.length&&(a.sub_icon=b.html());tdPullDown.add_item(a)}g.parents(".tdb-menu-items-pulldown:first").hasClass("tdb-menu-items-pulldown-inactive")&&g.parents(".tdb-menu-items-pulldown:first").removeClass("tdb-menu-items-pulldown-inactive")})},50)}}})();jQuery().ready(function(){});jQuery(document).ready(function(){tdbMenuItemPullDown.init();tdbMenu.ui_events.forEach(function(a){window.addEventListener(a,tdbMenu.loadDelayed,{passive:!0})})});