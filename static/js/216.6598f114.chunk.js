"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[216],{623:function(n,e,t){function r(n,e,t,r,o,a,i){try{var c=n[a](i),u=c.value}catch(s){return void t(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function o(n){return function(){var e=this,t=arguments;return new Promise((function(o,a){var i=n.apply(e,t);function c(n){r(i,o,a,c,u,"next",n)}function u(n){r(i,o,a,c,u,"throw",n)}c(void 0)}))}}t.d(e,{FH:function(){return c},ZP:function(){return v},Jy:function(){return u},dt:function(){return s}});var a=t(757),i=t.n(a),c="https://api.themoviedb.org",u="bc8e4f8ef35238fae81789cd185c5d63",s="week";function p(){return p=o(i().mark((function n(e,t,r){var o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(e,"/3/trending/movie/").concat(r,"?api_key=").concat(t));case 2:if(!(o=n.sent).ok){n.next=5;break}return n.abrupt("return",o.json());case 5:case"end":return n.stop()}}),n)}))),p.apply(this,arguments)}function f(){return f=o(i().mark((function n(e,t,r){var o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(e,"/3/search/movie?api_key=").concat(t,"&language=en-US&query=").concat(r,"&page=1&include_adult=false"));case 2:if(!(o=n.sent).ok){n.next=5;break}return n.abrupt("return",o.json());case 5:case"end":return n.stop()}}),n)}))),f.apply(this,arguments)}function h(){return h=o(i().mark((function n(e,t,r){var o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(e,"/3/movie/").concat(t,"?api_key=").concat(r,"&language=en-US"));case 2:if(!(o=n.sent).ok){n.next=5;break}return n.abrupt("return",o.json());case 5:case"end":return n.stop()}}),n)}))),h.apply(this,arguments)}function d(){return d=o(i().mark((function n(e,t,r){var o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(e,"/3/movie/").concat(r,"/credits?api_key=").concat(t,"&language=en-US"));case 2:if(!(o=n.sent).ok){n.next=5;break}return n.abrupt("return",o.json());case 5:case"end":return n.stop()}}),n)}))),d.apply(this,arguments)}function x(){return x=o(i().mark((function n(e,t,r){var o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(e,"/3/movie/").concat(r,"/reviews?api_key=").concat(t,"&language=en-US&page=1"));case 2:if(!(o=n.sent).ok){n.next=5;break}return n.abrupt("return",o.json());case 5:case"end":return n.stop()}}),n)}))),x.apply(this,arguments)}var l={FetchTrending:function(n,e,t){return p.apply(this,arguments)},FetchSearchMovies:function(n,e,t){return f.apply(this,arguments)},FetchMovieDetails:function(n,e,t){return h.apply(this,arguments)},FetchCredits:function(n,e,t){return d.apply(this,arguments)},FetchReviews:function(n,e,t){return x.apply(this,arguments)}},v=l},216:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var r,o,a,i=t(433),c=t(439),u=t(791),s=t(597),p=t(14),f=t(168),h=t(444),d=h.ZP.div(r||(r=(0,f.Z)(["\nmargin-top:15px;\nmargin-left:30px; \nborder-radius:5px;\n"]))),x=h.ZP.input(o||(o=(0,f.Z)(["\n  margin-top: 15px;\n  margin-left: 30px;\n  border-radius: 5px;\n  width: 200px;\n  height: 40px;\n"]))),l=h.ZP.button(a||(a=(0,f.Z)(["\n  margin-left: 10px;\n  width: 150px;\n  height: 40px;\n  border-radius: 5px;\n  background: rgba(247, 40, 40, 0.68);\n  color:#fff;\n  border-radius: 10px;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);\n  -moz-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);\n  -webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);\n    :hover {\n    color: orangered;\n    background:rgba(247, 40, 40, 0.17);\n  }\n"]))),v=t(184),m=function(n){var e=n.onSubmit,t=(0,u.useState)(""),r=(0,c.Z)(t,2),o=r[0],a=r[1];return(0,v.jsx)("form",{onSubmit:function(n){if(n.preventDefault(),""===o.trim())return(0,p.ZP)("Please enter Movie Title here"),void a("");e(o),a("")},children:(0,v.jsxs)(d,{children:[(0,v.jsx)("label",{children:(0,v.jsx)(x,{name:"q",onChange:function(n){a(n.currentTarget.value.toLowerCase())}})}),(0,v.jsx)(l,{type:"submit",children:"Search movies"})]})})},b=t(623),g=function(){var n=(0,u.useState)([]),e=(0,c.Z)(n,2),t=e[0],r=e[1];return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(m,{onSubmit:function(n){b.ZP.FetchSearchMovies(b.FH,b.Jy,n).then((function(n){if(0===n.results.length)p.ZP.error("Sorry,we did not find...");else{var e=[];n.results.map((function(n){return e.push({id:n.id,title:n.title})})),r.apply(void 0,(0,i.Z)(t).concat([e]))}})).catch((function(){p.ZP.error("Ups... Something is wrong.",{duration:4e3,position:"top-center"})}))}}),(0,v.jsx)(s.O,{movies:t})]})}},597:function(n,e,t){t.d(e,{O:function(){return x}});var r,o,a,i=t(168),c=t(444),u=c.ZP.ul(r||(r=(0,i.Z)(["\n  margin-top: 10px;\n  margin-left: 20px;\n"]))),s=c.ZP.li(o||(o=(0,i.Z)(["\n  margin-bottom: 5px;\n"]))),p=(t(791),t(87)),f=(0,c.ZP)(p.OL)(a||(a=(0,i.Z)(["\n  color: black;\n  text-decoration: none;\n  font-size: 20px;\n\n  :hover {\n    color: orangered;\n  }\n"]))),h=t(184),d=function(n){var e=n.movie;return(0,h.jsx)(f,{to:"/movies/".concat(e.id),children:e.title})},x=function(n){var e=n.movies;return(0,h.jsx)(u,{children:e.map((function(n){return(0,h.jsx)(s,{children:(0,h.jsx)(d,{movie:n})},n.id)}))})}}}]);
//# sourceMappingURL=216.6598f114.chunk.js.map