var tdAjaxCount={};(function(){tdAjaxCount={tdGetViewsCountsAjax:function(c,d){var b="td_ajax_get_views";"post"===c&&(b="td_ajax_update_views");jQuery.ajax({type:"POST",url:td_ajax_url,cache:!0,data:{action:b,td_post_ids:d},success:function(a,b,c){a=jQuery.parseJSON(a);a instanceof Object&&jQuery.each(a,function(a,b){jQuery(".td-nr-views-"+a).html(b)})},error:function(a,b,c){}})}}})();