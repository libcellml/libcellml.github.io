(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["api"],{3283:function(e,t,a){},"64d5":function(e,t,a){"use strict";a("7682")},6962:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"api-reference"},[a("v-container",[a("v-row",[a("v-col",[a("BreadCrumbs",{attrs:{versionChoices:e.getVersions(),currentVersion:""+e.$route.params.version,versionType:"api"}}),a("DoxygenXml",{attrs:{baseURL:"/data/api/"+e.$route.params.version},on:{updated:e.updated}})],1)],1)],1)],1)},i=[],s=(a("d3b7"),a("ac1f"),a("3ca3"),a("841c"),a("ddb0"),a("2b3d"),a("ce14")),c=a("f423"),o=a("0306"),r=a("aaf7"),l={name:"APIPage",components:{DoxygenXml:s["DoxygenXml"],BreadCrumbs:c["a"]},mounted:function(){setTimeout((function(){var e=new URLSearchParams(window.location.search),t=e.get("fName");r["a"].goToSignature(t)}),this.$store.getters.getTransitionDelay)},watch:{$route:function(){setTimeout((function(){var e=new URLSearchParams(window.location.search),t=e.get("fName");r["a"].goToSignature(t)}),this.$store.getters.getTransitionDelay)}},methods:{getVersions:function(){return Object(o["a"])()},updated:function(){this.$store.commit("togglePageContentChanged")}}},d=l,u=(a("b029"),a("64d5"),a("2877")),f=a("6544"),m=a.n(f),v=a("62ad"),g=a("a523"),b=a("0fd9"),p=Object(u["a"])(d,n,i,!1,null,"0fd77cb0",null);t["default"]=p.exports;m()(p,{VCol:v["a"],VContainer:g["a"],VRow:b["a"]})},7682:function(e,t,a){},aaf7:function(e,t,a){"use strict";a("4de4"),a("4160"),a("498a"),a("159b");t["a"]={addClickHandlerToggles:function(){var e=document.querySelectorAll(".header, .header-left");e.forEach((function(e){e.classList.add("inactive"),e.addEventListener("click",(function(){var t=e.nextElementSibling;while(null!==t)t.style.display="block"!==t.style.display?"block":"none",t=t.nextElementSibling;e.classList.toggle("active"),e.classList.toggle("inactive")}))}))},addClickHandlerTabs:function(){var e=document.querySelectorAll(".tab2name");e.forEach((function(e){e.addEventListener("click",(function(){var t=e.parentElement.parentElement;t.querySelectorAll(".tab2").forEach((function(e){e.classList.remove("active"),e.classList.add("inactive")})),t.querySelectorAll(".tab2name").forEach((function(e){e.classList.remove("active"),e.classList.add("inactive")}));var a=t.querySelector("#"+e.id+"tab");a?(a.classList.add("active"),a.classList.remove("inactive")):alert("oops"),e.classList.add("active"),e.classList.remove("inactive")}))}))},processSphinxTabs:function(){var e=document.querySelectorAll(".sphinx-tabs");e.forEach((function(e,t){if(!e.querySelector(".tab2menu")){var a=document.createElement("div");a.classList.add("tab2menu"),a.id="g"+t+"menu";var n=e.firstElementChild,i=0,s=e.firstElementChild,c="active";while(null!==s){s.classList.add("tab2"),s.classList.add("inactive"),s.id="g"+t+"t"+i+"tab";var o=s.querySelector(".container .item");o&&(o.classList.add("tab2name"),o.classList.add(c),c="inactive",o.classList.remove("item"),o.id="g"+t+"t"+i,o.innerHTML=o.firstChild.innerHTML,a.appendChild(o)),s=s.nextElementSibling,i+=1}var r=document.createElement("div");r.classList.add("tab2spacer"),a.appendChild(r),n&&(n.classList.add("active"),n.classList.remove("inactive"),n.insertAdjacentElement("beforebegin",a));var l=a.querySelector("#g"+t+"t0");l&&l.classList.add("active")}})),e.forEach((function(e){e.classList="tabs2"}))},goToSignature:function(e){var t=document.querySelectorAll(".sig-name"),a=Array.prototype.filter.call(t,(function(t){return t.textContent.trim()===e}));if(0!=a.length){var n=a[0].closest(".function");null!==n&&window.scrollTo({top:n.offsetTop,behavior:"smooth"})}}}},b029:function(e,t,a){"use strict";a("3283")}}]);
//# sourceMappingURL=api.0fa29afb.js.map