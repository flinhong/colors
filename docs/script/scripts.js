$(document).ready(function(){$(document).bind("mobileinit",function(){$.mobile.touchOverflowEnabled=!0}),$("#preloader").fadeOut(2e3,function(){$("#preloader").remove()});var t=window.innerHeight,e=!1;function d(t){var e=$(t).find(".card-title").text(),d=$(t).find(".en-name").text(),i=$(t).find(".hex-value").text().toLowerCase(),o=$(t).find(".dd-c").text(),a=$(t).find(".dd-m").text(),n=$(t).find(".dd-y").text(),s=$(t).find(".dd-k").text(),r=(c=(c=i).replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,d,i){return e+e+d+d+i+i}),(c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c))?{r:parseInt(c[1],16),g:parseInt(c[2],16),b:parseInt(c[3],16)}:null),l="rgb("+r.r+", "+r.g+", "+r.b+")",c=.2126*r.r+.7152*r.g+.0722*r.b;c<150?$("body, footer p a, .c-sns__list a").css("color","#eee"):$("body, footer p a, .c-sns__list a").css("color","#1c1c1c"),200<c?$(".main").css("background-color","rgba(0, 0, 0, 0.2)"):$(".main").css("background-color","transparent"),$("#infors").find(".card-title").text(e),$("#infors").find(".en-name").text(d),$("#infors").find(".card-footer p:first").text(i),$("#infors").find(".card-footer p:last").text(l),$("#details .dd-c").text(o).change(),$("#details .dd-c").prev().text("C: "+o.split("/",1)),$("#details .dd-m").text(a).change(),$("#details .dd-m").prev().text("M: "+a.split("/",1)),$("#details .dd-y").text(n).change(),$("#details .dd-y").prev().text("Y: "+n.split("/",1)),$("#details .dd-k").text(s).change(),$("#details .dd-k").prev().text("K: "+s.split("/",1)),$("#details .bg-r").css("height",100*r.r/255+"%"),$("#details .bg-r").text(r.r),$("#details .bg-g").css("height",100*r.g/255+"%"),$("#details .bg-g").text(r.g),$("#details .bg-b").css("height",100*r.b/255+"%"),$("#details .bg-b").text(r.b),$(t).addClass("change-color"),$("body, #shareModal .modal-content").css("background-color",i)}window.innerHeight>window.innerWidth&&(e=!0),t<=800||e?($("#details .dd-c").peity("donut",{fill:["#0d5661","#eee"],innerRadius:26,radius:30}),$("#details .dd-m").peity("donut",{fill:["#cb1b45","#eee"],innerRadius:26,radius:30}),$("#details .dd-y").peity("donut",{fill:["#ffc408","#eee"],innerRadius:26,radius:30}),$("#details .dd-k").peity("donut",{fill:["#1c1c1c","#eee"],innerRadius:26,radius:30})):($("#details .dd-c").peity("donut",{fill:["#0d5661","#eee"],innerRadius:36,radius:40}),$("#details .dd-m").peity("donut",{fill:["#cb1b45","#eee"],innerRadius:36,radius:40}),$("#details .dd-y").peity("donut",{fill:["#ffc408","#eee"],innerRadius:36,radius:40}),$("#details .dd-k").peity("donut",{fill:["#1c1c1c","#eee"],innerRadius:36,radius:40})),$("#colors .hex-value").each(function(){var t=$(this).text();$(this).closest(".card").css("border-color",t)}),$("#colors .card-body").each(function(){var e=$(this).closest(".col-2");$(this).on("touchstart click",function(t){!1!==t.handled&&(t.stopPropagation(),t.preventDefault(),t.handled=!0,$("#colors .change-color").removeClass("change-color"),d(e))})}),$('[data-toggle="tooltip"]').tooltip(),$("#infors .card-footer p").each(function(){$(this).on("touchstart click",function(){var t,e;t=$(this),e=$("<input>"),$("body").append(e),e.val($(t).text()).select(),document.execCommand("copy"),e.remove(),$(this).tooltip("hide").attr("data-original-title","已复制到剪贴板").tooltip("show")}).on("mouseleave",function(){$(this).attr("data-original-title","点击复制")})});var i,o,e=$("#colors .col-2").length,e=(i=0,o=e,Math.floor(Math.random()*(o-i+1)+i)),e=$("#colors .col-2")[e];d(e),$("#colors").animate({scrollTop:$(e).offset().top-15},100)});