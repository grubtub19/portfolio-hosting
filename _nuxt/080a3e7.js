(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{300:function(t,e,n){var content=n(322);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("2065e928",content,!0,{sourceMap:!1})},301:function(t,e,n){"use strict";n.r(e);n(139),n(140),n(67),n(31),n(24),n(68);var o=n(303),c=n.n(o),r={data:function(){return{projects:[]}},mounted:function(){var t=this;c.a.get("https://api.github.com/users/grubtub19/repos").then((function(e){e.status,console.log(e),e.data.forEach((function(e){if(console.log(e.name),e.stargazers_count>0){var n={};n.name=e.name,n.desc=e.description,c.a.get("https://api.github.com/repos/grubtub19/"+e.name+"/readme").then((function(e){for(var o,c=/!\[.*\]\((.*)\)/g,r=atob(e.data.content);o=c.exec(r);)n.image=o[1];t.projects.push(n),console.log(n.image)})).catch((function(t){console.log(t.response)}))}}))})).catch((function(t){console.log(t.response)}))}},l=n(35),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"entry github"},t._l(t.projects,(function(e){return o("section",{key:e.name},[e.image?o("img",{staticClass:"image",attrs:{src:e.image}}):o("img",{staticClass:"image",attrs:{src:n(302)}}),t._v(" "),o("div",{staticClass:"desc"},[t._v(t._s(e.desc))])])})),0)}),[],!1,null,null,null);e.default=component.exports},302:function(t,e,n){t.exports=n.p+"img/github.b92ba8b.png"},321:function(t,e,n){"use strict";n(300)},322:function(t,e,n){(e=n(49)(!1)).push([t.i,'body{font-family:Muli,Arial,"Lucida Grande",sans-serif;font-weight:700}.entry{width:100%}.entry section{position:relative;margin-bottom:150px}.entry section img{position:relative;left:8.333333333%;width:83.333333333%}@media(min-width:767px){.entry section img{position:relative;left:33.333333333%;width:58.333333333%}}.entry section .desc{position:relative;top:0;left:8.333333333%;width:25%;font-size:20px;color:#fff}@media(min-width:767px){.entry section .desc{position:absolute;font-size:30px}}@media(min-width:1023px){.entry section .desc{font-size:50px}}.container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}',""]),t.exports=e},323:function(t,e,n){"use strict";n.r(e);var o=n(301),c=n(104),r={components:{Github:o.default},mounted:function(){(new c.a.timeline).from(".NuxtLogo",{transform:"translateX(-80vw)",duration:1,rotation:500})}},l=(n(321),n(35)),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("github")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Github:n(301).default})}}]);