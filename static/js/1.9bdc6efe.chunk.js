"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[1],{623:function(n,t,e){function r(n,t,e,r,c,a,i){try{var o=n[a](i),u=o.value}catch(s){return void e(s)}o.done?t(u):Promise.resolve(u).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,a){var i=n.apply(t,e);function o(n){r(i,c,a,o,u,"next",n)}function u(n){r(i,c,a,o,u,"throw",n)}o(void 0)}))}}e.d(t,{FH:function(){return o},ZP:function(){return x},Jy:function(){return u},dt:function(){return s}});var a=e(757),i=e.n(a),o="https://api.themoviedb.org",u="bc8e4f8ef35238fae81789cd185c5d63",s="week";function p(){return p=c(i().mark((function n(t,e,r){var c;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(t,"/3/trending/movie/").concat(r,"?api_key=").concat(e));case 2:if(!(c=n.sent).ok){n.next=5;break}return n.abrupt("return",c.json());case 5:case"end":return n.stop()}}),n)}))),p.apply(this,arguments)}function f(){return f=c(i().mark((function n(t,e,r){var c;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(t,"/3/search/movie?api_key=").concat(e,"&language=en-US&query=").concat(r,"&page=1&include_adult=false"));case 2:if(!(c=n.sent).ok){n.next=5;break}return n.abrupt("return",c.json());case 5:case"end":return n.stop()}}),n)}))),f.apply(this,arguments)}function h(){return h=c(i().mark((function n(t,e,r){var c;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(t,"/3/movie/").concat(e,"?api_key=").concat(r,"&language=en-US"));case 2:if(!(c=n.sent).ok){n.next=5;break}return n.abrupt("return",c.json());case 5:case"end":return n.stop()}}),n)}))),h.apply(this,arguments)}function l(){return l=c(i().mark((function n(t,e,r){var c;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(t,"/3/movie/").concat(r,"/credits?api_key=").concat(e,"&language=en-US"));case 2:if(!(c=n.sent).ok){n.next=5;break}return n.abrupt("return",c.json());case 5:case"end":return n.stop()}}),n)}))),l.apply(this,arguments)}function d(){return d=c(i().mark((function n(t,e,r){var c;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(t,"/3/movie/").concat(r,"/reviews?api_key=").concat(e,"&language=en-US&page=1"));case 2:if(!(c=n.sent).ok){n.next=5;break}return n.abrupt("return",c.json());case 5:case"end":return n.stop()}}),n)}))),d.apply(this,arguments)}var v={FetchTrending:function(n,t,e){return p.apply(this,arguments)},FetchSearchMovies:function(n,t,e){return f.apply(this,arguments)},FetchMovieDetails:function(n,t,e){return h.apply(this,arguments)},FetchCredits:function(n,t,e){return l.apply(this,arguments)},FetchReviews:function(n,t,e){return d.apply(this,arguments)}},x=v},1:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,c,a,i=e(439),o=e(791),u=e(623),s=e(689),p=e(168),f=e(444),h=f.ZP.img(r||(r=(0,p.Z)(["\n  width: 200px;\n  height: auto;\n"]))),l=f.ZP.p(c||(c=(0,p.Z)(["\n  font-size: 15px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-weight: 500;\n  text-align: left;\n  text-align: center;\n"]))),d=f.ZP.div(a||(a=(0,p.Z)(["\n  margin-left: 20px;\n  width: 200px;\n"]))),v=e(184),x=function(n){var t=n.item;return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(d,{children:[(0,v.jsx)(h,{src:"https://www.themoviedb.org/t/p/w400"+t.profile_path,alt:t.name,width:"100"}),(0,v.jsxs)(l,{children:["Name:",t.name]}),(0,v.jsxs)(l,{children:["Character:",t.character]})]})})},m=e(14),w=function(){var n=(0,o.useState)([]),t=(0,i.Z)(n,2),e=t[0],r=t[1],c=(0,s.UO)().movieId;return(0,o.useEffect)((function(){u.ZP.FetchCredits(u.FH,u.Jy,c).then((function(n){return r(n.cast)})).catch((function(){m.ZP.error("Ups... Something is wrong.",{duration:4e3,position:"top-center"})}))}),[c]),(0,v.jsx)("section",{children:(0,v.jsx)("ul",{children:e.map((function(n){return(0,v.jsx)("li",{children:(0,v.jsx)(x,{item:n})},n.id)}))})})}}}]);
//# sourceMappingURL=1.9bdc6efe.chunk.js.map