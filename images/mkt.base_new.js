/**
 * Ctrip JavaScript Code
 * http://www.ctrip.com/
 * Copyright(C) 2008 - 2016, Ctrip All rights reserved.
 * Version: 160706
 * Date: 2016-07-06
 */
;window.replace=function(){return ''};!function(){function t(t,e,a,o){function r(){var t=navigator.userAgent.toLowerCase();return("ctripwireless"==t.match((/ctripWireless/i))?!0:!1)}if(!r()){e&&"function"==typeof e&&e();var s=document.head||document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.charset="utf-8",n.async=!0,n.onload=function(){a&&a()
},n.onerror=function(){o&&o(),s.removeChild(n)},n.src=t,s.appendChild(n)}}function e(){window.Mkt=o;var e=o.Store&&o.Store.CommonStore.getInstance();o.Utils.setMktPsValue(e),(window.location.search.indexOf("?ps=")>-1||window.location.search.indexOf("&ps=")>-1)&&window.__bfi.push(["_tracklog","mkt_ps_log_h5",o.Utils.getUrlParam("ps")]),window.Lizard||window.__bfi.push(["_tracklog","mkt_IsLoadLizard","url:"+window.location.href]);
var a="_2016070601",s=r+"//webresource.c-ctrip.com/res/concat?f=/ResADVOnline/R2/Js/Sales/wake.up.js?v="+a+",/ResADVOnline/R2/dist/sales/float.v2.0.js?v"+a;t(r+"//webresource.c-ctrip.com/res/concat?f=/ResUnionOnline/R7/h5mask/Public/wakeupRules.js?v="+a+",customizeRule.js?v="+a,"",function(){(o.Utils.getUrlParam("mktfloattest")?t(r+"//webresource.c-ctrip.com/ResADVOnline/R2/Js/Sales/wake.up.js?v="+a,"",function(){t(r+"//webresource.c-ctrip.com/ResADVOnline/R2/dist/sales/float.v2.0.js?v"+a)
}):t(s,"",function(){}))})}var a={isPrivacy:function(){try{return window.localStorage.Mkt_isPrivacy="isPrivacy",window.localStorage.removeItem("Mkt_isPrivacy"),!1}catch(t){return!0}},isImportLizard:function(){if(this.isPrivacy())try{return window.localStorage.setItem("mkttest","tt"),window.localStorage.removeItem("mkttest"),!0
}catch(t){return!1}return!0}};if(a.isImportLizard()){var o={},r=window.location.protocol,s=a.isPrivacy();"undefined"==typeof window.__bfi&&(window.__bfi=[]);var n="v20150908";"undefined"==typeof window.__union&&(window.__union=[]),o.buildNamespace=function(t){if("string"!=typeof t)return!1;for(var e=o,a=t.split("."),r=("Mkt"===a[0]?1:0),s=a.length;s>r;r++)e[a[r]]=e[a[r]]||{},e=e[a[r]]
},o.buildNamespace("Store"),o.Store.CommonStore=function(){function t(){function t(t){try{if(a&&JSON&&"function"==typeof JSON.parse)return JSON.parse(a.getItem(t))}catch(e){}return null}function e(t,e,a,r){if(arguments.length<2)throw"The arguments less than 2";for(var s=this,n=s.getStore(t)||null,i=null,p=e.telh5||e.tel||"",c="",l=0;l<p.length;l++){if(6==l){c+=p.substring(l);
break}c=c+p.substring(l,l+3)+" ",l+=2}i=("SALES_OBJECT"===t?{value:{key:e.longparam,value:"",sid:e.shortparam,sales:"",tel:p,teltitle:c,isseo:"1",appurl:e.appurl,isonlypay:null},tag:e.longparam||"",oldvalue:(n&&n.oldvalue?n.oldvalue:null),timeout:o.Utils.formatDate("Y/m/d H:i:s",new Date,r),savedate:o.Utils.formatDate("Y/m/d H:i:s",new Date)}:{data:{appurl:"",isonlypay:"",isseo:"",key:"",sales:"",sid:"",tel:"",teltitle:"",value:""},union:{key:e.longparam,value:"",sid:e.shortparam,sales:"",tel:p,teltitle:c,isseo:"1",appurl:e.apprul,isonlypay:null},timeout:o.Utils.formatDate("Y/m/d H:i:s",new Date,r)}),s.setStore(t,i)
}function n(t,e){var a=this,e=e||"data",o=a.getStore(t);return (o&&o[e]?o[e]:null)}function i(t){try{return (s?JSON.parse(o.Utils.getCookie(t)):(JSON&&"function"==typeof JSON.parse?JSON.parse(r.getItem(t)):null))}catch(e){}}function p(t,e){try{if(s){var a={};a[t]=JSON.stringify(e),o.Utils.setCookie(a,"",72e5)
}else r.removeItem(t),(JSON&&"function"==typeof JSON.stringify?r.setItem(t,JSON.stringify(e)):r.setItem(t,e))}catch(n){}}function c(t,e){a.removeItem(t),(JSON&&"function"==typeof JSON.stringify?a.setItem(t,JSON.stringify(e)):a.setItem(t,e))}function l(t){a.removeItem(t)}function d(){return this.getStore("Union_qbMask_Status")
}function u(t,e){var a=this.getStatus()||{};a[t]=e,this.setStore("Union_qbMask_Status",a)}function f(){this.removeStore("Union_qbMask_Status")}function m(t){this.setStatus("popupType",t),this.setStatus("status","out"),this.setStatus("clicked",0),this.setStatus("action","atnow"),this.setStatus("flag",0)
}return{getStore:t,setStore:c,setStoreParam:e,getStoreParam:n,removeStore:l,getStatus:d,setStatus:u,removeStatus:f,getSessionStore:i,setSessionStore:p,initStatus:m}}var e=null,a=window.localStorage,r=window.sessionStorage;if(a)return{getInstance:function(){return e||(e=t.call(o.Store)),e}}}(),o.buildNamespace("Mkt.Dom"),o.Dom.elems=[],o.Dom.getByClass=function(t,e,a){var o=this,r=[],s=e,n=("string"==typeof a?a:"*");
s=(s?("string"==typeof s?o.getById(s):e):document.body);for(var i=s.getElementsByTagName(n),p=0,c=i.length;c>p;p++)try{for(var l=0,d=i[p].className.split(" "),u=d.length;u>l;l++)if(d[l]==t){r.push(i[p]);break}}catch(f){}return o.elems=(r.length>0?r:[]),o},o.Dom.getById=function(t){var e=this,a=document.getElementById(t);
return e.elems=[],a&&e.elems.push(a),e},o.Dom.html=function(t){for(var e=this,a=0,o=e.elems.length;o>a;a++)e.elems[a]&&1===e.elems[a].nodeType&&"string"==typeof t&&(e.elems[a].innerHTML=t);return e},o.Dom.show=function(t){var e=this,a=0,o=e.elems.length;if(t&&1===t.nodeType)return t.style.display="block",e;
for(;o>a;a++)e.elems[a]&&1===e.elems[a].nodeType&&(e.elems[a].style.display="block");return e},o.Dom.hide=function(t){var e=this,a=0,o=e.elems.length;if(t&&1===t.nodeType)return t.style.display="none",e;for(;o>a;a++)e.elems[a]&&1===e.elems[a].nodeType&&(e.elems[a].style.display="none");return e},o.Dom.hideAnimation=function(t){var e=o.Store.CommonStore.getInstance(),a=o.Dom.getByClass("pop_ad_layer_close").elems[0];
a&&(a.style.display="block"),t.style.left="-"+window.screen.width+"px",e.setStatus("status","in")},o.Dom.showAnimation=function(){var t=o.Store.CommonStore.getInstance(),e=o.Dom.getByClass("pop_ad_layer_close").elems[0],a=o.Dom.getByClass("pop_ad_layer_b").elems[0];e&&(e.style.display="none"),a&&(a.style.left="0px"),t.setStatus("status","out")
},o.Dom.parseDom=function(t){var e=document.createElement("div");return e.innerHTML=t,[].slice.call(e.childNodes)},o.Dom.appendChild=function(t,e){var a=this,t=t||document.body,o=e,r=0,s=0;if(o){if("string"==typeof o&&(o=a.parseDom(e)),o instanceof Array&&o.length>0)for(s=o.length;s>r;r++)t.appendChild(o[r]);
return"object"==typeof o&&1===o.nodeType&&t.appendChild(o),o}},o.Dom.insertBefore=function(t,e,a){var o=this,e=e||document.body,r=t,s=(a?a:document.getElementById("main")||document.body.firstChild);if("string"==typeof r&&(r=o.parseDom(t)),r instanceof Array&&r.length>0)for(var n=0,i=r.length;i>n;n++)e.insertBefore(r[n],s);
"object"==typeof r&&1===r.nodeType&&e.insertBefore(t,e.firstChild)},o.buildNamespace("Mkt.Ajax"),o.Ajax.obj=function(){var t;try{t=new XMLHttpRequest}catch(e){try{t=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){try{t=new ActiveXObject("Microsoft.XMLHTTP")}catch(e){throw"您的浏览器不支持AJAX"}}}return t}(),o.Ajax.httpSuccess=function(t){return t.status>=200&&t.status<300||304==t.status
},o.Ajax.serialize=function(t){var e=[];if(t){for(var a in t)e.push(encodeURIComponent(a)+"="+encodeURIComponent(t[a]));return e.join("&")}},o.Ajax.submitRequest=function(t){if(t){var e=this,a=e.obj;a.onreadystatechange=function(){4==a.readyState&&((e.httpSuccess(a)&&a.responseText?"function"==typeof t.success&&t.success(a.responseText):"function"==typeof t.error&&t.error(a.responseText)))
},a.open(t.type,t.url,t.async||!0),a.setRequestHeader("Content-type",t.contentType||"text/plain; charset=UTF-8"),a.send(t.param)}},o.buildNamespace("Mkt.Loader"),o.Loader.js=function(t,e,a,o){e&&"function"==typeof e&&e();var r=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");
s.type="text/javascript",s.charset="utf-8",s.async=!0,s.onload=function(){a&&a(),r.removeChild(s)},s.onerror=function(){o&&o(),r.removeChild(s)},s.src=t,r.appendChild(s)},o.buildNamespace("utils"),o.Utils={getHostName:function(t){var e=new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),a=e.exec(t);
return (a?a[1]:t)},setCookie:function(t,e,a){var o=(document.domain||"").replace((/^[\w\W]*\.ctrip(corp)??\.com(.hk)??/),"ctrip$1.com$2"),r=[];for(var s in t){var n=(null===t[s]?"":t[s]);r.push(s+"="+n)}var i=new Date;i.setTime(i.getTime()+a),document.cookie=(""==e?r.join("&")+"; expires="+i.toGMTString()+"; domain="+o+";path=/;":r.join("&")+"; domain="+o+";path=/;")
},formatDate:function(t,e,a){function o(t){return t=t||0,s.setDate(s.getDate()+t),s}function r(t){"string"!=typeof t&&(t="");for(var e in n)t=n[e].call(this,t,s,e);return t}var s=e,n={d:function(t,e,a){var o=e.getDate().toString();return o.length<2&&(o="0"+o),t.replace(new RegExp(a,"mg"),o)},m:function(t,e,a){var o=(e.getMonth()+1).toString();
return o.length<2&&(o="0"+o),t.replace(new RegExp(a,"mg"),o)},Y:function(t,e,a){return t.replace(new RegExp(a,"mg"),e.getFullYear())},H:function(t,e,a){var o=e.getHours().toString();return o.length<2&&(o="0"+o),t.replace(new RegExp(a,"mg"),o)},i:function(t,e,a){var o=e.getMinutes().toString();return o.length<2&&(o="0"+o),t.replace(new RegExp(a,"mg"),o)
},s:function(t,e,a){var o=e.getSeconds().toString();return o.length<2&&(o="0"+o),t.replace(new RegExp(a,"mg"),o)}};return (a?(s=o(a),r(t)):r(t))},getUa:function(){var t=window.navigator.userAgent.toLocaleLowerCase(),e=!!t.match((/(ipad|iphone)/i)),a=!!t.match((/android/i)),o=!!t.match((/MSIE/i));return{isApple:e,isAndroid:a,isWinPhone:o}
},getPlatFormCode:function(){var t=this,e=t.getUa();return (e.isApple?e="ios-app":(e.isAndroid?e="android-app":e.isWinPhone&&(e="win-app"))),e},getUrlParam:function(){var t=[].slice.call(arguments),e="",a="";(t.length>1?(e=t[0],a=t[1]):(e=document.location.search,a=t[0]));var o=new RegExp("(\\?|&)"+a+"=([^&]+)(&|$)","i"),r=e.match(o);
return (r?r[2]:"")},isInApp:function(){var t=navigator.userAgent.toLowerCase();return("ctripwireless"==t.match((/ctripWireless/i))?!0:!1)},base64:function(){function t(t){t=t.replace((/\r\n/g),"\n");for(var e="",a=0;a<t.length;a++){var o=t.charCodeAt(a);(128>o?e+=String.fromCharCode(o):(o>127&&2048>o?(e+=String.fromCharCode(o>>6|192),e+=String.fromCharCode(63&o|128)):(e+=String.fromCharCode(o>>12|224),e+=String.fromCharCode(o>>6&63|128),e+=String.fromCharCode(63&o|128))))
}return e}function e(t){for(var e="",a=0,o=0,r=0,s=0;a<t.length;)o=t.charCodeAt(a),(128>o?(e+=String.fromCharCode(o),a++):(o>191&&224>o?(r=t.charCodeAt(a+1),e+=String.fromCharCode((31&o)<<6|63&r),a+=2):(r=t.charCodeAt(a+1),s=t.charCodeAt(a+2),e+=String.fromCharCode((15&o)<<12|(63&r)<<6|63&s),a+=3)));return e
}var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o=function(e){var o,r,s,n,i,p,c,l="",d=0;for(e=t(e);d<e.length;)o=e.charCodeAt(d++),r=e.charCodeAt(d++),s=e.charCodeAt(d++),n=o>>2,i=(3&o)<<4|r>>4,p=(15&r)<<2|s>>6,c=63&s,(isNaN(r)?p=c=64:isNaN(s)&&(c=64)),l=l+a.charAt(n)+a.charAt(i)+a.charAt(p)+a.charAt(c);
return l},r=function(t){var o,r,s,n,i,p,c,l="",d=0;for(t=t.replace((/[^A-Za-z0-9\+\/\=]/g),"");d<t.length;)n=a.indexOf(t.charAt(d++)),i=a.indexOf(t.charAt(d++)),p=a.indexOf(t.charAt(d++)),c=a.indexOf(t.charAt(d++)),o=n<<2|i>>4,r=(15&i)<<4|p>>2,s=(3&p)<<6|c,l+=String.fromCharCode(o),64!=p&&(l+=String.fromCharCode(r)),64!=c&&(l+=String.fromCharCode(s));
return l=e(l)};return{encode:o,decode:r}},isSaleUa:function(){var t,e=this.browserName();switch(e){case"Firefox":case"Opera":case"miuibrowser":case"Safari":case"qqbrowser":case"ucbrowser":case"lbbrowser":case"qhbrowser":case"sogousearch":case"baidubrowser":case"hao123":t=1;break;default:t=0}return t},browserName:function(){var t=window.navigator.userAgent.toLowerCase(),e="";
return (window.ActiveXObject?e="IE":(document.getBoxObjectFor||t.indexOf("firefox")>-1?e="Firefox":(t.indexOf("qqbrowser")>-1?e="qqbrowser":(t.indexOf("qq/")>-1?e="qqclient":(t.indexOf("baiduboxapp")>-1?e="baiduboxapp":(t.indexOf("baidubrowser")>-1?e="baiduboxapp":(t.indexOf("baidubrowser")>-1?e="baidubrowser":(t.indexOf("ucbrowser")>-1?e="ucbrowser":(t.indexOf("miuibrowser")>-1?e="miuibrowser":(t.indexOf("lbbrowser")>-1?e="lbbrowser":(t.indexOf("qhbrowser")>-1||t.indexOf("360browser")>-1?e="qhbrowser":(t.indexOf("hao123")>-1?e="hao123":(t.indexOf("sogoumobilebrowser")>-1?e="sogousearch":(t.indexOf("maxthon")>-1?e="maxthon":(t.indexOf("androidbrowser")>-1?e="androidbrowser":(t.indexOf("samsung")>-1?e="samsung":(t.indexOf("huawei")>-1?e="huawei":(t.indexOf("vivo")>-1?e="vivo":(t.indexOf("oppo")>-1?e="oppo":(t.indexOf("lenovo")>-1?e="lenovo":(t.indexOf("micromessenger")>-1?e="micromessenger":(t.indexOf("weibo")>-1?e="weibo":(t.indexOf("chrome")>-1?e="Chrome":(window.opera?e="Opera":t.indexOf("safari")>-1&&(e="Safari"))))))))))))))))))))))))),e
},generateGUID:function(){return this._res=this._S4()+this._S4()+"-"+this._S4()+"-"+this._S4()+"-"+this._S4()+"-"+this._S4()+this._S4()+this._S4(),"AM_"+n+"_"+this._res},_S4:function(){return(65536*(1+Math.random())|0).toString(16).substring(1)},IsTimeOutSalesObj:function(t){var e=o.Store.CommonStore.getInstance(),a=e.getStore("SALES_OBJECT");
return (t?(a&&a.value[t]&&Date.now()<Date.parse(a.timeout)?!0:!1):(a&&Date.now()<Date.parse(a.timeout)?!0:!1))},AddTraceLog:function(t,e){e=e||function(){AppUtility.IsDownload&&o.AwakenAndDownload.downLoad(!0)};var a=o.Utils.getPlatFormCode(),s="GUID="+t.GUID;if(s+=";;;URL="+window.location.href,s+=";;;assd="+AppUtility.appProtocolUrl().replace("GUID={0}",""),s+=";;;schema="+t.schema,s+=";;;datetime="+o.Utils.formatDate("Y/m/d H:i:s",new Date),s+=";;;isMatch="+t.isMatch,s+=";;;system="+a,s+=";;;browser="+o.Utils.browserName(),s+=";;;maskType="+t.maskType,s+=";;;ua="+window.navigator.userAgent,s+=";;;typeclass="+o.Utils.IsPrdEnv(),s+=";;;IsAwaken="+t.IsAwaken,s+=";;;Versions="+n,s+=";;;islogin:${is_login};uid:${duid}","CenterPage"==t.maskType){var i=o.Sales.getSales();
s+=("ios-app"==a?";;;gotodown:itunes.app.com":";;;gotodown:"+((o.Utils.IsTimeOutSalesObj("appurl")?i.appurl:r+"//m.ctrip.com/market/download.aspx?from=H5"))),s+=";;;"}window.__bfi.push(["_tracklog","Marking_SEO_mask",s,e])},AddTraveLogForAwaken:function(t){var e=(o.Dom.getById("page_id").elems&&o.Dom.getById("page_id").elems[0]?o.Dom.getById("page_id").elems[0].value:""),a=o.Utils.IsPrdEnv(),r="GUID="+t.GUID;
r+=";;;schema="+t.schema,r+=";;;typeclass="+a+";;;typeclassurl="+window.location.href,r+=";;;ua="+window.navigator.userAgent,r+=";;;maskType="+t.maskType,r+=";;;datetime="+o.Utils.formatDate("Y/m/d H:i:s",new Date),r+=";;;page_id="+e,r+=";;;Versions="+n,window.__bfi.push(["_tracklog",t.Key,r])},IsPad:function(){var t=navigator.userAgent.toLowerCase();
return("ipad"==t.match((/ipad/i))?!0:!1)},isHtpps:function(){return("https:"==window.location.protocol?!0:!1)},IsPrdEnv:function(){var t=window.location.hostname;return(-1!=t.indexOf("ctrip.com")?"prd":"test")},getBuType:function(){var t=window.Mkt.__whiteBuClass,e=window.location.href,a={};for(var o in t){var r=t[o],s=(r[0]instanceof Array?"array":(r[0]instanceof RegExp?"reg":null));
if("reg"==s&&r[0].test(e)){a={type:o,IsAuto:r[1],IsDirectLink:r[2]};break}if("array"==s)for(var n=0,i=r.length;i>n;n++)if(r[n][0].test(e)){a={type:o,IsAuto:r[n][1],IsDirectLink:r[n][2]};break}}return a},getMaskHtml:function(t){var e={no_1:{def:['<div class="gift_flt_mask">','<div class="gift_flt_wrap">','<div class="slgn_wrap">','<div class="slgn_icon slgn_icon_bus"></div>','<div class="slgn_words slgn_words_bus"></div>',"</div>",'<div class="flt_avt">','<a class="flt_btn"><span>下载APP 立享优惠</span></a>',"</div>",'<div class="flt_close">&times;</div>',"</div>","</div>"].join("")},no_4:{def:['<div class="dl_cnt"><i class="dl_ico-logo"></i><p>手机预订</p>','<p class="dl_txt-i">比官网更优惠<span class="dl_txt-bg">50%</span></p>',"</div>"].join(""),diyfhxsdp:['<div class="dl_cnt"><i class="dl_ico-logo"></i><p>携程客户端</p>','<p class="dl_txt-i">自由行最高省<span class="dl_txt-bg">30%</span></p>',"</div>"].join("")},no_7:{def:['<a href="javascript:void(0)" class="pop_arrow_l" id="popup_7_def_close">关闭</a>','<h2 class="pop_logo">携程APP</h2>',"<p>携程客户端专享</p>",'<p class="pop_discount">最高立减<strong>50</strong><em>元</em></p>','<a href="tel:4006526685,00000" class="pop_btn_tel popup-tel" id="popup_7_def_tel">电话</a> ','<a href="javascript:void(0)" data-action="atnow" class="pop_btn" id="popup_7_def_ty">立即体验</a>'].join(""),hotel:['<a href="javascript:void(0)" class="pop_arrow_l" id="popup_7_hotel_close">关闭</a>','<h2 class="pop_logo">携程APP</h2>',"<p>携程客户端</p>",'<p class="pop_discount">订酒店买<strong>1</strong>送<strong>1</strong></p>','<a href="tel:4006526685,00000" class="pop_btn_tel popup-tel" id="popup_7_hotel_tel">电话</a> ','<a href="javascript:void(0)" data-action="atnow" class="pop_btn" id="popup_7_hotel_ty">立即体验</a>'].join(""),train:['<a href="javascript:void(0)" class="pop_arrow_l" id="popup_7_train_close">关闭</a>','<h2 class="pop_logo">携程APP</h2>','<p class="pop_discount">','<span class="pop_discount_train"><strong>免费抢票</strong><!--元红包大派送--></span>',"</p>",'<a href="tel:4006526685,00000" class="pop_btn_tel popup-tel" id="popup_7_train_tel">电话</a> ','<a href="javascript:void(0)" data-action="atnow" class="pop_btn" id="popup_7_train_ty">立即体验</a>'].join(""),tuan:['<a href="javascript:void(0)" class="pop_arrow_l" id="popup_7_tuan_close">关闭</a>','<h2 class="pop_logo">携程APP</h2>','<p class="pop_discount">团购产品<strong>1</strong><em>元起</em></p>',"<p>携程客户端</p>",'<a href="tel:4006526685,00000" class="pop_btn_tel popup-tel" id="popup_7_tuan_tel">电话</a> ','<a href="javascript:void(0)" data-action="atnow" class="pop_btn" id="popup_7_tuan_ty">立即体验</a>'].join(""),ticket:['<a href="javascript:void(0)" class="pop_arrow_l" id="popup_7_ticket_close">关闭</a>','<h2 class="pop_logo">携程APP</h2>',"<p>携程客户端</p>",'<p class="pop_discount"><strong></strong>景点门票 <strong>1元</strong>起</p>','<a href="tel:4006526685,00000" class="pop_btn_tel popup-tel" id="popup_7_ticket_tel">电话</a> ','<a href="javascript:void(0)" data-action="atnow" class="pop_btn" id="popup_7_ticket_ty">立即体验</a>'].join(""),tour:['<a href="javascript:void(0)" class="pop_arrow_l" id="popup_7_tour_close">关闭</a>','<h2 class="pop_logo">携程APP</h2>',"<p>携程客户端</p>",'<p class="pop_discount"><strong>2</strong>人同行&nbsp;&nbsp;&nbsp;&nbsp;<strong>1</strong>人免单</p>','<a href="tel:4006526685,00000" class="pop_btn_tel popup-tel" id="popup_7_tour_tel">电话</a> ','<a href="javascript:void(0)" data-action="atnow" class="pop_btn" id="popup_7_tour_ty">立即体验</a>'].join(""),car:['<a href="javascript:void(0)" class="pop_arrow_l" id="popup_7_car_close">关闭</a>','<h2 class="pop_logo">携程APP</h2>',"<p>携程客户端</p>",'<p class="pop_discount">全场<strong>5</strong>折&nbsp;&nbsp;最低<strong>34</strong>元/天</p>','<a href="tel:4006526685,00000" class="pop_btn_tel popup-tel" id="popup_7_car_tel">电话</a> ','<a href="javascript:void(0)" data-action="atnow" class="pop_btn" id="popup_7_car_ty">立即体验</a>'].join("")},no_8:{def:['<a href="javascript:void(0)" class="pop_arrow_l" id="popup_8_def_close">关闭</a>','<h2 class="pop_logo">携程APP</h2>',"<p>携程客户端专享</p>",'<p class="pop_discount">最高立减<strong>50</strong><em>元</em></p>','<a href="javascript:void(0)" data-action="atnow" class="pop_btn" id="popup_8_def_ty">立即体验</a>'].join(""),hotel:['<a href="javascript:void(0)" class="pop_arrow_l" id="popup_8_hotel_close">关闭</a>','<h2 class="pop_logo">携程APP</h2>',"<p>携程客户端</p>",'<p class="pop_discount">订酒店买<strong>1</strong>送<strong>1</strong></p>','<a href="javascript:void(0)" data-action="atnow" class="pop_btn" id="popup_8_hotel_ty">立即体验</a>'].join(""),train:['<a href="javascript:void(0)" class="pop_arrow_l" id="popup_8_train_close">关闭</a>','<h2 class="pop_logo">携程APP</h2>','<p class="pop_discount">','<span class="pop_discount_train"><strong>免费抢票</strong><!--元红包大派送--></span>',"</p>",'<a href="javascript:void(0)" data-action="atnow" class="pop_btn" id="popup_8_train_ty">立即体验</a>'].join(""),tuan:['<a href="javascript:void(0)" class="pop_arrow_l" id="popup_8_tuan_close">关闭</a>','<h2 class="pop_logo">携程APP</h2>','<p class="pop_discount">团购产品<strong>1</strong><em>元起</em></p>',"<p>携程客户端</p>",'<a href="javascript:void(0)" data-action="atnow" class="pop_btn" id="popup_8_tuan_ty">立即体验</a>'].join(""),ticket:['<a href="javascript:void(0)" class="pop_arrow_l" id="popup_8_ticket_close">关闭</a>','<h2 class="pop_logo">携程APP</h2>',"<p>携程客户端</p>",'<p class="pop_discount"><strong></strong>景点门票 <strong>1元</strong>起</p>','<a href="javascript:void(0)" data-action="atnow" class="pop_btn" id="popup_8_ticket_ty">立即体验</a>'].join(""),tour:['<a href="javascript:void(0)" class="pop_arrow_l" id="popup_8_tour_close">关闭</a>','<h2 class="pop_logo">携程APP</h2>',"<p>携程客户端</p>",'<p class="pop_discount"><strong>2</strong>人同行&nbsp;&nbsp;&nbsp;&nbsp;<strong>1</strong>人免单</p>','<a href="javascript:void(0)" data-action="atnow" class="pop_btn" id="popup_8_tour_ty">立即体验</a>'].join(""),car:['<a href="javascript:void(0)" class="pop_arrow_l" id="popup_8_car_close">关闭</a>','<h2 class="pop_logo">携程APP</h2>',"<p>携程客户端</p>",'<p class="pop_discount">全场<strong>5</strong>折&nbsp;&nbsp;最低<strong>34</strong>元/天</p>','<a href="javascript:void(0)" data-action="atnow" class="pop_btn" id="popup_8_car_ty">立即体验</a>'].join("")},no_9:{def:"",hotel:"",flight:"",trains:"",tuan:"",ticket:""},no_10:{def:['<a href="javascript:void(0)" class="pop_close" id="popup_10_close">关闭</a>','<h2 class="pop_logo">携程APP</h2>',"<p>手机预订</p>",'<p class="pop_discount">优惠<strong>50</strong><em>%</em></p>','<a href="javascript:void(0)" data-action="atnow" class="pop_btn" id="popup_10_open">打开</a>','<a href="tel:4006526685,00000" class="pop_btn_tel popup-tel" id="popup_10_tel">电话</a>'].join(""),hotel:"",flight:"",trains:"",tuan:"",ticket:""},no_11:{def:['<a href="javascript:void(0)" class="pop_close" id="popup_11_close">关闭</a>','<h2 class="pop_logo">携程APP</h2>',"<p>携程旅行客户端</p>",'<p class="pop_discount">最高可返<strong>2000</strong><em>元</em></p>','<a href="javascript:void(0)" data-action="download" class="pop_dl" id="popup_11_down">立即下载</a>'].join(""),hotel:"",flight:"",trains:"",tuan:"",ticket:""}};
return e["no_"+t][("home"==this.getBuType().type?"def":this.getBuType().type)]},getMaskLoadHtml:function(t){return("bottom"==t?['<div class="pop_bottom_ad" style="display:;">','<div class="loading"><i></i><span>正在打开携程旅行客户端...</span></div>',"</div>"].join(""):['<div class="pop_top_ad" style="display:;">','<div class="loading"><i></i><span>正在打开携程旅行客户端...</span></div>',"</div>"].join(""))
},setPbMaskStatus:function(t,e,a){var r=o.Store.CommonStore.getInstance(),s=r.getStatus();if(s)if(+s.flag){var n=e&&a,i=e[0].getElementsByClassName("pop_btn")[0],p=(e[0]?e[0].getElementsByClassName("popup-tel"):null);"in"==s.status&&n&&(document.getElementsByClassName("pop_ad_layer pop_ad_layer_b")[0].style.left="-"+window.screen.width+"px",document.getElementsByClassName("pop_ad_layer pop_ad_layer_b pop_ad_layer_close")[0].style.display="block"),(s.clicked?i&&p&&(i.innerHTML="立即下载",i.className="pop_dl",p&&p[0]&&(p[0].style.display="none")):i&&p&&(i.innerHTML="立即体验",i.className="pop_btn",p&&p[0]&&(p[0].style.display=""))),i&&i.setAttribute("data-action",s.action),r.setStatus("flag",0)
}else r.initStatus(t);else r.initStatus(t)},seoReferMatch:function(){var t=!1,e=o.Ad.deCfg.referKeys,a=0,r=e.length,s=location.host,n=document.referrer;if(n=n.split("?")[0],n=n.replace("http://","").replace("https://","").split("/")[0].toLowerCase(),-1!=n.indexOf(s))t=!1;else for(;r>a;a++)if(n.match(e[a])){t=!0;
break}return t},isctripRefer:function(){var t=location.host,e=document.referrer;return e=e.split("?")[0],e=e.replace("http://","").replace("https://","").split("/")[0].toLowerCase(),(-1!=e.indexOf(t)?!0:!1)},autoTypeClass:function(){var t=o.Store.CommonStore.getInstance(),e=t.getStore("UNION"),a="",r="";
return (e&&e.data.AllianceID&&e.data.SID&&(a=e.data.AllianceID,r=e.data.SID,window.Mkt.__assdWhiteParam[a+"-"+r])?window.Mkt.__assdWhiteParam[a+"-"+r]:(o.Utils.getUrlParam("allianceid")&&o.Utils.getUrlParam("sid")&&(a=o.Utils.getUrlParam("allianceid"),r=o.Utils.getUrlParam("sid"),window.Mkt.__assdWhiteParam[a+"-"+r])?window.Mkt.__assdWhiteParam[a+"-"+r]:""))
},IsWeChat:function(){return (window.navigator.userAgent.toLowerCase().match("micromessenger")||window.navigator.userAgent.match("MicroMessenger")?!0:!1)},uaType:function(){var t=(location.host,document.referrer);t=t.split("?")[0];var e="",a="";return window&&window.navigator&&window.navigator.userAgent&&(e=window.navigator.userAgent.toLowerCase()),(o.Utils.IsWeChat()?a="wechat":(e.indexOf("ucbrowser")>-1?a="ucbrowser":(e.indexOf("firefox")>-1?a="firefox":(e.indexOf("baiduboxapp")>-1?a="baiduboxapp":(e.indexOf("opera")>-1?a="opera":(e.indexOf("huawei")>-1?a="huawei":(e.indexOf("miuibrowser")>-1?a="miuibrowser":(e.indexOf("mqqbrowser")>-1?a="mqqbrowser":(e.indexOf("360browser")>-1?a="360browser":e.indexOf("baidubrowser")>-1&&(a="baidubrowser")))))))))),""==a&&(e.indexOf("safari")>-1&&(a="safari"),e.indexOf("chrom")>-1&&(a="chrom")),a
},isVetScreen:function(){var t=0;switch(window.orientation){case 0:t=0;break;case-90:t=1;break;case 90:t=1;break;case 180:t=0;break;default:t=0}return!!t},isVetScreenHandler:function(){var t=this.isVetScreen(),e=o.Dom.getByClass("js_MKT_UNION_CTL").elems;if(e)if(t)for(var a=0;a<e.length;a++)e[a].style.display="none";
else for(var a=0;a<e.length;a++)e[a].style.display="block"},getCookie:function(t){if(document.cookie.length>0){var e=document.cookie.indexOf(t+"=");if(-1!=e){e=e+t.length+1;var a=document.cookie.indexOf(";",e);return-1==a&&(a=document.cookie.length),document.cookie.substring(e,a)}}return""},downloadOnly:function(t){setTimeout(function(){0==AppUtility.hasApp&&(window.location=t)
},4e3)},isNatureFlux:function(){var t=o.Store.CommonStore.getInstance(),e=t.getStore("UNION");return (e&&"281258"==e.data.AllianceID&&"728710"==e.data.SID?!0:!1)},setMktPsValue:function(t){if(""!=o.Utils.getUrlParam("ps"))o.Utils.setCookie({mkt_ps:o.Utils.getUrlParam("ps")},"",18e5),t.setStore("mkt_ps",o.Utils.getUrlParam("ps")),t.setStore("mkt_ps_timeStart",new Date);
else{if(t.getStore("mkt_ps_timeStart"))var e=new Date(t.getStore("mkt_ps_timeStart"));new Date-e>18e5&&(t.removeStore("mkt_ps_timeStart"),t.removeStore("mkt_ps"))}},getFingerPrint:function(){var t="";return window.__bfi.push(["_getFP",function(e){t=e}]),t}},o.buildNamespace("Mkt.Ad.Utils"),o.Ad.deCfg={KEY_POPUP:"MKT_POPUP",popupType:0,referKeys:["baidu","google","soso.com","sogou","so.com","bing.com","yahoo","youdao","so.360","jike.com","babylon.com","ask.com","avg.com","easou.com","panguso.com","yandex.com","sm.cn","chinaso","haosou"],appUrlId:"app_url",blacklist:["Lottery","webapp/youth","accounts.ctrip","secure.ctrip","book","uat.qa","finish","complete","order","sinfo.ctrip.com","webapp/lipin","webapp/cf","pages.ctrip.com","zerolotterydrawwebapp","price","pay","lipin","calendar","rewards","finish","complete","myctrip","webapp/cruise","html5/cruise","order","sinfo.ctrip.com","secure.ctrip.com","accounts.ctrip.com","conferenceguess","market-campaign-answerwebapp","m.ctrip.com/webapp/corpctrip","booking","isdproductdetail","osd/osdproductdetail","ochproductdetail","webapp/mt/index","webapp/mkt/centerpage/down","middlepage/weixin/cardbag","webapp/grab","webapp/mkt/spread/hotel","app.ctrip.com/market/down.html","wechatcard-redirect-h5","webapp/golf","senioryearactivityonline","giftbagwebapp","cshop","mkt/activity-app/weixin","webapp/sr","www.skysea.com","webapp/cbcard","html5/hhtravel","webapp/hhtravel","app.ctrip.com/market/qcode.html","webapp/activity/choosedate","promotion/group","promotion/brand","promotion/destination","promotion/vacationcity","tour/bargain","contents.ctrip.com/mktactivitypage","wx.kztpms.com","collectwordswebapp","tour/detail"],wakeupblacklist:["accounts.ctrip","secure.ctrip","booking","accounts.ctrip","secure.ctrip","uat.qa","finish","complete","order","price","pay","senioryearactivityonline"]},o.Sales=function(){function t(t){var e=d();
return (e&&e.tel?"tel:"+e.tel:t)}function e(){var t=d();if(t){if(t.isseo&&n.getByClass("module").show(),t.appurl)return t.appurl;var e=(t.sid?t.sid:t.sales);return"/market/download.aspx?from="+e}return null}function a(){var a,o="__hreftel__",r="__conttel__",s="__appaddress__",i=e();if(n.getByClass(o)){a=n.getByClass(o).elems;
for(var p=0,c=a.length;c>p;p++)a[p].href=t(a[p].href)}if(n.getByClass(r)){a=n.getByClass(r).elems;for(var p=0,c=a.length;c>p;p++)a[p].innerHTML=t(a[p].innerHTML)}if(n.getByClass(s)){a=n.getByClass(s).elems;for(var p=0,c=a.length;c>p;p++){var l=i;if(!l)switch(!0){case _.isApple:l=a[p].getAttribute("data-ios-app");
break;case _.isAndroid:l=a[p].getAttribute("data-android-app");break;case _.isWinPhone:l=a[p].getAttribute("data-win-app")}l&&a[p].setAttribute("href",l)}}}function s(){function t(){a()}var e=null,o=c.getStore("UNION"),r="";o&&o.data&&o.data.SourceID&&(r=o.data.SourceID),l(r,function(t){p=(t&&t.tel?t.tel:"4006526685,00000"),a()
}),clearInterval(e),e=setInterval(t,1e3)}var n=o.Dom,i=null,p="4006526685,00000",c=o.Store.CommonStore.getInstance(),l=function(t,e,a){var s=t,p=t;switch(t.length){case 4:s="5555"+t;break;case 8:s=t,p=t.substring(4);break;case 3:s="55550"+t}var l=(c.getStore("SALES_OBJECT")&&c.getStore("SALES_OBJECT").value?c.getStore("SALES_OBJECT").value:null);
if(l&&l.sid==t)i=l,(!l.appurl||l.appurl.length<=0?n.getById("dl_app").hide():n.getById("dl_app").show()),e&&e(l);else{var d=("http:"==r?"http://m.ctrip.com/restapi/soa2/10054/DynamicPackage_TelH5Info.json":"https://sec-m.ctrip.com/restapi/soa2/10054/DynamicPackage_TelH5Info.json");o.Ajax.submitRequest({url:d,type:"POST",param:'{"Sourceid":"'+s+'"}',success:function(r){if(JSON||"function"==typeof JSON.parse){var l={};
if(r=JSON.parse(r),1==r.ResultCode){if(r.AppPackageList&&r.AppPackageList[0]){for(var d in r.AppPackageList[0])l[d.toLocaleLowerCase()]=r.AppPackageList[0][d];l.longparam=s,l.shortparam=p,r.Data=l,(!r.Data.appurl||r.Data.appurl.length<=0?n.getById("dl_app").hide():n.getById("dl_app").show());var u=30;c.setStoreParam("SALES_OBJECT",r.Data,t,u),c.setStoreParam("SALESOBJ",r.Data,t,u)
}else t&&(l=JSON.parse('{"longparam":"55551825","shortparam":"1825","telh5":"4006235134","appurl":"http://m.ctrip.com/m/c1050"}'),r.Data=l,c.setStoreParam("SALES_OBJECT",r.Data,t,30),c.setStoreParam("SALESOBJ",r.Data,t,30));var f={timeout:o.Utils.formatDate("Y-m-d H:i:s",new Date,1),timeby:!0,data:{sales:"",sourceid:t}};
window.localStorage.setItem("SALES",JSON.stringify(f)),i=(c.getStore("SALES_OBJECT")&&c.getStore("SALES_OBJECT").value?c.getStore("SALES_OBJECT").value:null),e&&e(r.Data)}else a&&a(r)}},error:function(t){a&&a(t)}})}},d=function(){var t=(c.getStore("SALES_OBJECT")&&c.getStore("SALES_OBJECT").value?c.getStore("SALES_OBJECT").value:null);
return i||t},u=function(t){c.setStoreParam("SALES",{sales:t})},f=function(t){c.setStoreParam("SALES",{sourceid:t})},m=function(t){c.setStoreParam("UNION",t)},_=o.Utils.getUa();return window.__union.push({callback:s}),{warning404:p,replaceContent:a,replaceTel:t,getSales:d,getSalesObject:l,setUnion:m,setSourceId:f,setSales:u,updateSales:s}
}(),e()}}();