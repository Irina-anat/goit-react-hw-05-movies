"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[135],{663:function(e,t,n){n.d(t,{Hx:function(){return _},Y5:function(){return v},bI:function(){return l},uV:function(){return h},wr:function(){return o}});var r=n(861),a=n(757),s=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="0846bf312f0a1b3f0d9b691dd26eb2d9";function o(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("trending/all/day?api_key=".concat(i));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("search/movie?api_key=".concat(i,"&query=").concat(t,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function v(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function h(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function _(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}},135:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(683),a=n(439),s=n(689),c=n(87),i=n(791),o=n(663),u="MovieDetails_movie__container__Frdjx",l="MovieDetails_movie__box__jsIk-",p="MovieDetails_movie__image__lLJIF",v="MovieDetails_movie__title__IriAM",d="MovieDetails_descriptin__title__4wRL8",h="MovieDetails_editional__title__7-OxC",f="MovieDetails_movie__text__N3Mp6",_=n(393),m=n(184),x=function(){var e,t,n=(0,s.UO)().movieId,x=(0,i.useState)({}),g=(0,a.Z)(x,2),j=g[0],w=g[1],b=j.title,k=j.poster_path,y=j.genres,Z=j.vote_average,N=j.release_date,M=j.overview,U=(0,s.TH)(),D=(0,i.useRef)(null!==(e=null===(t=U.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"./movies"),S=new Date(N).getFullYear(),I=Math.round(10*Z);return(0,i.useEffect)((function(){n&&(0,o.Y5)(n).then((function(e){return w((0,r.Z)({},e))})).catch((function(e){console.error("Error fetching video data:",e)}))}),[n]),(0,m.jsxs)("div",{className:u,children:[(0,m.jsxs)(c.rU,{to:D.current,children:[" ",(0,m.jsx)("button",{type:"button",children:"Go back"})]}),j&&(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:l,children:[(0,m.jsx)("img",{className:p,src:k?"https://image.tmdb.org/t/p/w300"+k:"https://via.placeholder.com/300x450",width:300,height:450,alt:"title"}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("h2",{className:v,children:[b," (",S,")"]}),(0,m.jsxs)("p",{className:f,children:["User score: ",I,"%"]}),(0,m.jsx)("h3",{className:d,children:"Overview:"}),(0,m.jsx)("p",{className:f,children:M}),(0,m.jsx)("h3",{className:d,children:"Genres:"}),null===y||void 0===y?void 0:y.map((function(e){return(0,m.jsx)("li",{children:e.name?e.name:"Unknown"},e.id)}))]})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h3",{className:d,children:"Additional information:"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)(c.OL,{className:h,to:"cast",children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(c.OL,{className:h,to:"reviews",children:"Movie review"})})]})]})]}),(0,m.jsx)(i.Suspense,{fallback:(0,m.jsx)(_.Z,{}),children:(0,m.jsx)(s.j3,{})})]})}}}]);
//# sourceMappingURL=135.76400ce8.chunk.js.map