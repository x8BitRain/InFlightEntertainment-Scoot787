InFlight.define("service_control/v1",["sdk/v1/http","sdk/v1/event","service_control/v1/service_status","sdk/v1/json2"],function(k,h,l,p){function m(f){setInterval(function(){e.getAllServices(function(n,b){if(!n)for(var g=0;g<b.length;g++){var a=b[g];if("undefined"!==typeof c[a.media_uri]){if(c[a.media_uri].blocked!==a.blocked||c[a.media_uri].enabled!==a.enabled){var d={};d.media_uri=a.media_uri;d.enabled=a.enabled;d.blocked=a.media_uri.blocked;f(d)}}else c[a.media_uri]={};c[a.media_uri].blocked=a.blocked;
c[a.media_uri].enabled=a.enabled}})},3E3)}var c={},e={Events:{SERVICE_CHANGE:"service_change"},addEventListener:function(f,c){if(h)h.register({event_name:f,namespace:"core.service_control",callback:function(b){"core.service_control.service_change"===b.type&&(b.media_uri=b.argv[0],b.enabled=b.argv[1],b.blocked=b.argv[2]);c(b)}});else switch(f){case e.Events.SERVICE_CHANGE:m(c)}},getAllServices:function(c){var e={url:InFlight.makeServiceURL("/service_control/v1/all_services")};k.getJSON(e,function(b,
e){if(null!==b)c(b,null);else{for(var a=e.body,d=0;d<a.length;d++)a[d]=new l(a[d]);c(null,a)}})}};return e});