/*
  Using object literals & dot notation we can keep our JS organized and easy
  to maintain. Functions are comma separated, well named parameter values,
  and triggered by calling them like this Engine.ui.functionName();
*/$(document).ready(function(){"use strict";$("form").garlic();var e={ui:{footerContributors:function(){function e(){function o(e){n.html("");var t="";$(e).each(function(e,n){t+='<li><a href="'+n.url.replace("api.","").replace("users/","")+'"><img src="'+n.avatar_url+'" alt="'+n.login+'" class="contributor-avatar"></a></li>'});n.html(t);localStorage.setItem("contribsHtml",t);localStorage.setItem("contribsLoaded",!0)}function u(){n.html(localStorage.getItem("contribsHtml"))}function a(e){var t=e.Link,n=r;n.html("");$(t).each(function(e,t){var r=t[1].rel,s=t[0],o="<li><a href="+s+" class='"+i+"'>"+r+"</a></li>";n.append(o)});p()}function f(){r.html(localStorage.getItem("contribsPagination"))}function l(){$("."+i).click(function(e){e.preventDefault();localStorage.removeItem("contribsLoaded");var t=$(this).attr("href");c(t)})}function c(e){if(localStorage.getItem("contribsLoaded")&&localStorage.getItem("pageLoads")<=20){u();f();l()}else{localStorage.removeItem("pageLoads");$.ajax({type:"GET",url:e,async:!1,contentType:"application/json",dataType:"jsonp",success:function(e){if(e.meta.status!="200")h(e.meta);else{o(e.data);a(e.meta);l()}},error:function(e){}})}}function h(e){n.text("Error Loading Contributors...")}function p(){s.find("li").each(function(){var e=$(this).find("a").text();switch(e){case"first":$(this).hide();break;case"last":$(this).hide();break;case"next":$(this).find("a").text("Next");break;case"prev":$(this).find("a").text("Previous");break;default:}});localStorage.setItem("contribsPagination",s.html())}var e=42,t="https://api.github.com/repos/a11yproject/a11yproject.com/contributors?per_page="+e+"&callback=?",n=$("#contributors-list"),r=$(".contributors-pagination"),i="contributors-pagination-link",s=$(".pager");localStorage.getItem("pageLoads")?localStorage.setItem("pageLoads",parseInt(localStorage.getItem("pageLoads"))+1):localStorage.setItem("pageLoads",0);window.matchMedia("(min-width: 480px)").matches&&c(t)}function t(){function a(e,t,n){$(e).text(t);n&&localStorage.setItem(n,t)}function f(e){$.ajax({type:"GET",url:e,async:!0,contentType:"application/json",dataType:"jsonp",success:function(e){var e=e.data;a(t,e.length,"contribStat")},error:function(e){console.log(e.message)}})}function l(e){$.ajax({type:"GET",url:e,async:!0,contentType:"application/json",dataType:"jsonp",success:function(e){var e=e.data;a(n,e.stargazers_count,"starStat")},error:function(e){console.log(e.message)}})}function c(e){$.ajax({type:"GET",url:e,async:!0,contentType:"application/json",dataType:"jsonp",success:function(e){var e=e.data;a(r,e.open_issues_count,"openIssueStat")},error:function(e){console.log(e.message)}})}var e=$(".github-data"),t=e.find(".data.contributors"),n=e.find(".data.stars"),r=e.find(".data.open-issues"),i="https://api.github.com/repos/a11yproject/a11yproject.com",s=i+"/contributors?per_page=5000&callback=?",o=i,u=i;if(localStorage.getItem("contribsLoaded")&&localStorage.getItem("pageLoads")<=20){a(t,localStorage.getItem("contribStat"));a(n,localStorage.getItem("starStat"));a(r,localStorage.getItem("openIssueStat"))}else{f(s);l(o);c(u)}}e();t()},footerCopyright:function(){$(".a11y-copyright").text((new Date).getFullYear())},toc:function(){var e=$("#toc");if(e.length){e.prepend('<li class="nav-header">Archive Categories</li>');$(".category-title").each(function(){e.append("<li><a href=#"+this.id+">"+$(this).text()+"</a>")})}}}};e.ui.footerContributors();e.ui.footerCopyright();e.ui.toc()});