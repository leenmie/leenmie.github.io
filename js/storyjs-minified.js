LazyLoad=function(e){function m(b,c){var a=e.createElement(b),d;for(d in c)c.hasOwnProperty(d)&&a.setAttribute(d,c[d]);return a}function g(b){var c=p[b],a,d;c&&(a=c.callback,d=c.urls,d.shift(),h=0,d.length||(a&&a.call(c.context,c.obj),p[b]=null,q[b].length&&f(b)))}function r(){var b=navigator.userAgent;d={async:!0===e.createElement("script").async};(d.webkit=/AppleWebKit\//.test(b))||(d.ie=/MSIE/.test(b))||(d.opera=/Opera/.test(b))||(d.gecko=/Gecko\//.test(b))||(d.unknown=!0)}function f(b,c,a,f,h){var t=
function(){g(b)},x="css"===b,z=[],k,u,l,A;d||r();if(c)if(c="string"===typeof c?[c]:c.concat(),x||d.async||d.gecko||d.opera)q[b].push({urls:c,callback:a,obj:f,context:h});else for(k=0,u=c.length;k<u;++k)q[b].push({urls:[c[k]],callback:k===u-1?a:null,obj:f,context:h});if(!p[b]&&(A=p[b]=q[b].shift())){v||(v=e.head||e.getElementsByTagName("head")[0]);c=A.urls;k=0;for(u=c.length;k<u;++k)a=c[k],x?l=d.gecko?m("style"):m("link",{href:a,rel:"stylesheet"}):(l=m("script",{src:a}),l.async=!1),l.className="lazyload",
l.setAttribute("charset","utf-8"),d.ie&&!x?l.onreadystatechange=function(){/loaded|complete/.test(l.readyState)&&(l.onreadystatechange=null,t())}:x&&(d.gecko||d.webkit)?d.webkit?(A.urls[k]=l.href,s()):(l.innerHTML='@import "'+a+'";',y(l)):l.onload=l.onerror=t,z.push(l);k=0;for(u=z.length;k<u;++k)v.appendChild(z[k])}}function y(b){var c;try{c=!!b.sheet.cssRules}catch(a){h+=1;200>h?setTimeout(function(){y(b)},50):c&&g("css");return}g("css")}function s(){var b=p.css,c;if(b){for(c=t.length;0<=--c;)if(t[c].href===
b.urls[0]){g("css");break}h+=1;b&&(200>h?setTimeout(s,50):g("css"))}}var d,v,p={},h=0,q={css:[],js:[]},t=e.styleSheets;return{css:function(b,c,a,d){f("css",b,c,a,d)},js:function(b,c,a,d){f("js",b,c,a,d)}}}(this.document);LoadLib=function(e){function m(r){for(var f=0,e=!1,f=0;f<g.length;f++)g[f]==r&&(e=!0);if(e)return!0;g.push(r);return!1}var g=[];return{css:function(e,f,g,s){m(e)||LazyLoad.css(e,f,g,s)},js:function(e,f,g,s){m(e)||LazyLoad.js(e,f,g,s)}}}(this.document);var WebFontConfig;if("undefined"==typeof embed_path)var _tmp_script_path=getEmbedScriptPath("storyjs-embed.js"),embed_path=_tmp_script_path.substr(0,_tmp_script_path.lastIndexOf("js/"));function getEmbedScriptPath(e){for(var m=document.getElementsByTagName("script"),g="",r="",f=0;f<m.length;f++)m[f].src.match(e)&&(g=m[f].src);""!=g&&(r="/");return g.split("?")[0].split("/").slice(0,-1).join("/")+r}
(function(){"object"==typeof url_config?createStoryJS(url_config):"object"==typeof timeline_config?createStoryJS(timeline_config):"object"==typeof storyjs_config?createStoryJS(storyjs_config):"object"==typeof config&&createStoryJS(config)})();
function createStoryJS(e,m){function g(){LoadLib.js(a.js,r)}function r(){b.js=!0;"en"!=a.lang?LazyLoad.js(c.locale,f):b.language=!0;d()}function f(){b.language=!0;d()}function y(){b.font.css=!0;d()}function s(){b.font.js=!0;d()}function d(){40<b.checks?a.error_callback("Error Loading Files"):(b.checks++,b.js&&b.css&&b.font.css&&b.font.js&&b.language?b.finished||(b.finished=!0,VMM.debug=a.debug,v=new VMM.Timeline(a.id),v.init(a),t&&VMM.bindEvent(global,onHeadline,"HEADLINE"),a.success_callback()):
b.timeout=setTimeout("onloaded_check_again();",250))}var v,p,h,q,t=!1,b={timeout:"",checks:0,finished:!1,js:!1,css:!1,jquery:!1,has_jquery:!1,language:!1,font:{css:!1,js:!1}},c={base:embed_path,css:embed_path+"css/",js:embed_path+"js/",locale:embed_path+"js/locale/",jquery:"//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js",font:{google:!1,css:embed_path+"css/themes/font/",js:"//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js"}},a={version:"2.24",debug:!1,type:"timeline",id:"storyjs",
embed_id:"timeline-embed",embed:!0,width:"100%",height:"100%",source:"https://docs.google.com/spreadsheet/pub?key=0Agl_Dv6iEbDadFYzRjJPUGktY0NkWXFUWkVIZDNGRHc&output=html",lang:"en",font:"default",css:c.css+"timeline.css?2.24",js:"",api_keys:{google:"",flickr:"",twitter:""},gmap_key:"",success_callback:function(){},error_callback:function(a){}},w=[{name:"Merriweather-NewsCycle",google:["News+Cycle:400,700:latin","Merriweather:400,700,900:latin"]},{name:"NewsCycle-Merriweather",google:["News+Cycle:400,700:latin",
"Merriweather:300,400,700:latin"]},{name:"PoiretOne-Molengo",google:["Poiret+One::latin","Molengo::latin"]},{name:"Arvo-PTSans",google:["Arvo:400,700,400italic:latin","PT+Sans:400,700,400italic:latin"]},{name:"PTSerif-PTSans",google:["PT+Sans:400,700,400italic:latin","PT+Serif:400,700,400italic:latin"]},{name:"PT",google:["PT+Sans+Narrow:400,700:latin","PT+Sans:400,700,400italic:latin","PT+Serif:400,700,400italic:latin"]},{name:"DroidSerif-DroidSans",google:["Droid+Sans:400,700:latin","Droid+Serif:400,700,400italic:latin"]},
{name:"Lekton-Molengo",google:["Lekton:400,700,400italic:latin","Molengo::latin"]},{name:"NixieOne-Ledger",google:["Nixie+One::latin","Ledger::latin"]},{name:"AbrilFatface-Average",google:["Average::latin","Abril+Fatface::latin"]},{name:"PlayfairDisplay-Muli",google:["Playfair+Display:400,400italic:latin","Muli:300,400,300italic,400italic:latin"]},{name:"Rancho-Gudea",google:["Rancho::latin","Gudea:400,700,400italic:latin"]},{name:"Bevan-PotanoSans",google:["Bevan::latin","Pontano+Sans::latin"]},
{name:"BreeSerif-OpenSans",google:["Bree+Serif::latin","Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800:latin"]},{name:"SansitaOne-Kameron",google:["Sansita+One::latin","Kameron:400,700:latin"]},{name:"Lora-Istok",google:["Lora:400,700,400italic,700italic:latin","Istok+Web:400,700,400italic,700italic:latin"]},{name:"Pacifico-Arimo",google:["Pacifico::latin","Arimo:400,700,400italic,700italic:latin"]}];if("object"==typeof e)for(q in e)Object.prototype.hasOwnProperty.call(e,
q)&&(a[q]=e[q]);"undefined"!=typeof m&&(a.source=m);"object"==typeof url_config&&(t=!0,a.source.match("docs.google.com")||a.source.match("json")||a.source.match("storify")||(a.source="https://docs.google.com/spreadsheet/pub?key="+a.source+"&output=html"));a.js.match("locale")&&(a.lang=a.js.split("locale/")[1].replace(".js",""),a.js=c.js+"timeline-min.js?2.24");a.js.match("/")||(a.css=c.css+a.type+".css?2.24",a.js=c.js+a.type,a.js=a.debug?a.js+".js?2.24":a.js+"-min.js?2.24",a.id="storyjs-"+a.type);
a.lang.match("/")?c.locale=a.lang:c.locale=c.locale+a.lang+".js?2.24";(function(){var b="storyjs-embed";p=document.createElement("div");h=""!=a.embed_id?document.getElementById(a.embed_id):document.getElementById("timeline-embed");h.appendChild(p);p.setAttribute("id",a.id);a.width.toString().match("%")?h.style.width=a.width.split("%")[0]+"%":(a.width-=2,h.style.width=a.width+"px");a.height.toString().match("%")?(h.style.height=a.height,b+=" full-embed",h.style.height=a.height.split("%")[0]+"%"):(b=
a.width.toString().match("%")?b+" full-embed":b+" sized-embed",a.height-=16,h.style.height=a.height+"px");h.setAttribute("class",b);h.setAttribute("className",b);p.style.position="relative"})();LoadLib.css(a.css,function(){b.css=!0;d()});if("default"==a.font)b.font.js=!0,b.font.css=!0;else{var n;a.font.match("/")?(n=a.font.split(".css")[0].split("/"),c.font.name=n[n.length-1],c.font.css=a.font):(c.font.name=a.font,c.font.css=c.font.css+a.font+".css?2.24");LoadLib.css(c.font.css,y);for(n=0;n<w.length;n++)c.font.name==
w[n].name&&(c.font.google=!0,WebFontConfig={google:{families:w[n].google}});c.font.google?LoadLib.js(c.font.js,s):b.font.js=!0}try{if(b.has_jquery=jQuery,b.has_jquery=!0,b.has_jquery){var B=jQuery.fn.jquery.split("."),w=["1","7","1"];b.jquery=!0;for(n=0;2>n;n++)parseFloat(B[n])<parseFloat(w[n])&&(b.jquery=!1)}}catch(x){b.jquery=!1}b.jquery?g():LoadLib.js(c.jquery,g);this.onloaded_check_again=function(){d()}};
