"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[216],{623:function(n,e,r){function t(n,e,r,t,i,a,o){try{var c=n[a](o),u=c.value}catch(p){return void r(p)}c.done?e(u):Promise.resolve(u).then(t,i)}function i(n){return function(){var e=this,r=arguments;return new Promise((function(i,a){var o=n.apply(e,r);function c(n){t(o,i,a,c,u,"next",n)}function u(n){t(o,i,a,c,u,"throw",n)}c(void 0)}))}}r.d(e,{FH:function(){return c},ZP:function(){return m},Jy:function(){return u},dt:function(){return p}});var a=r(757),o=r.n(a),c="https://api.themoviedb.org",u="bc8e4f8ef35238fae81789cd185c5d63",p="week";function s(){return s=i(o().mark((function n(e,r,t){var i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(e,"/3/trending/movie/").concat(t,"?api_key=").concat(r));case 2:if(!(i=n.sent).ok){n.next=5;break}return n.abrupt("return",i.json());case 5:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function d(){return d=i(o().mark((function n(e,r,t){var i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(e,"/3/search/movie?api_key=").concat(r,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:if(!(i=n.sent).ok){n.next=5;break}return n.abrupt("return",i.json());case 5:case"end":return n.stop()}}),n)}))),d.apply(this,arguments)}function f(){return f=i(o().mark((function n(e,r,t){var i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(e,"/3/movie/").concat(r,"?api_key=").concat(t,"&language=en-US"));case 2:if(!(i=n.sent).ok){n.next=5;break}return n.abrupt("return",i.json());case 5:case"end":return n.stop()}}),n)}))),f.apply(this,arguments)}function l(){return l=i(o().mark((function n(e,r,t){var i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(e,"/3/movie/").concat(t,"/credits?api_key=").concat(r,"&language=en-US"));case 2:if(!(i=n.sent).ok){n.next=5;break}return n.abrupt("return",i.json());case 5:case"end":return n.stop()}}),n)}))),l.apply(this,arguments)}function x(){return x=i(o().mark((function n(e,r,t){var i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(e,"/3/movie/").concat(t,"/reviews?api_key=").concat(r,"&language=en-US&page=1"));case 2:if(!(i=n.sent).ok){n.next=5;break}return n.abrupt("return",i.json());case 5:case"end":return n.stop()}}),n)}))),x.apply(this,arguments)}var h={FetchTrending:function(n,e,r){return s.apply(this,arguments)},FetchSearchMovies:function(n,e,r){return d.apply(this,arguments)},FetchMovieDetails:function(n,e,r){return f.apply(this,arguments)},FetchCredits:function(n,e,r){return l.apply(this,arguments)},FetchReviews:function(n,e,r){return x.apply(this,arguments)}},m=h},216:function(n,e,r){r.r(e),r.d(e,{default:function(){return w}});var t,i,a,o=r(439),c=r(791),u=r(776),p=r(87),s=r(14),d=r(168),f=r(444),l=f.ZP.div(t||(t=(0,d.Z)(["\n  @media screen and (min-width: 320px) {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 10px;\n  }\n  @media screen and (min-width: 480px) {\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: center;\n  }\n  display: flex;\n  margin-top: 15px;\n  margin-left: 30px;\n  border-radius: 5px;\n"]))),x=f.ZP.input(i||(i=(0,d.Z)(["\n  border-radius: 5px;\n  width: 200px;\n  height: 40px;\n  padding: 0;\n"]))),h=f.ZP.button(a||(a=(0,d.Z)(["\n  width: 150px;\n  height: 40px;\n  border-radius: 5px;\n  background: rgba(247, 40, 40, 0.68);\n  color: #fff;\n  border-radius: 10px;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);\n  -moz-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);\n  -webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);\n  :hover {\n    color: orangered;\n    background: rgba(247, 40, 40, 0.17);\n  }\n"]))),m=r(184),g=function(n){var e,r=n.onSubmit,t=(0,p.lr)(),i=(0,o.Z)(t,2),a=i[0],c=i[1],u=null!==(e=a.get("q"))&&void 0!==e?e:"";return u&&r(u),(0,m.jsx)("form",{onSubmit:function(n){n.preventDefault();var e=n.target.q.value;""!==e.trim()?(r(e),c({q:e})):(0,s.ZP)("Please enter Movie Title here")},method:"get",children:(0,m.jsxs)(l,{children:[(0,m.jsx)("label",{children:(0,m.jsx)(x,{name:"q",defaultValue:u})}),(0,m.jsx)(h,{type:"submit",children:"Search movies"})]})})},v=r(623),w=function(){var n=(0,c.useState)([]),e=(0,o.Z)(n,2),r=e[0],t=e[1];return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(g,{onSubmit:function(n){v.ZP.FetchSearchMovies(v.FH,v.Jy,n).then((function(n){if(0===n.results.length)s.ZP.error("Sorry,we did not find...");else{var e=[];n.results.map((function(n){return e.push({poster_path:n.poster_path,id:n.id,title:n.title})})),t(e)}})).catch((function(){s.ZP.error("Ups... Something is wrong.",{duration:4e3,position:"top-center"})}))}}),(0,m.jsx)(u.O,{movies:r})]})}},776:function(n,e,r){r.d(e,{O:function(){return x}});var t,i,a=r(603),o=(r(791),r(689)),c=r(168),u=r(444),p=r(87),s=(0,u.ZP)(p.rU)(t||(t=(0,c.Z)(["\n  color: black;\n  text-decoration: none;\n  font-size: 20px;\n\n  :hover {\n    color: orangered;\n  }\n"]))),d=u.ZP.div(i||(i=(0,c.Z)(["\n  text-align: center;\n"]))),f=r(184),l=function(n){var e=n.movie,r=(0,o.TH)();return(0,f.jsxs)(s,{to:"/movies/".concat(e.id),state:{from:r},children:[(0,f.jsx)("img",{src:"https://www.themoviedb.org/t/p/w400"+e.poster_path,alt:e.title}),(0,f.jsx)(d,{children:e.title})]})},x=function(n){var e=n.movies;return(0,f.jsx)(a.im,{children:e.map((function(n){return(0,f.jsx)(a.ck,{children:(0,f.jsx)(a.ck,{children:(0,f.jsx)(l,{movie:n})})},n.id)}))})}},603:function(n,e,r){r.d(e,{ck:function(){return p},im:function(){return u}});var t,i,a,o=r(168),c=r(444),u=(c.ZP.ul(t||(t=(0,o.Z)(["\n  margin-top: 10px;\n  margin-left: 20px;\n"]))),c.ZP.div(i||(i=(0,o.Z)(["\n  @media screen and (min-width: 320px) {\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    grid-column-gap: 10px;\n    grid-row-gap: 10px;\n    margin: 20px;\n  }\n  @media screen and (min-width: 480px) {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    grid-column-gap: 10px;\n    grid-row-gap: 10px;\n    margin: 20px;\n  }\n  @media screen and (min-width: 1240px) {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    grid-column-gap: 10px;\n    grid-row-gap: 10px;\n    margin: 20px;\n  }\n"])))),p=c.ZP.div(a||(a=(0,o.Z)([""])))}}]);
//# sourceMappingURL=216.f0d2d0d6.chunk.js.map