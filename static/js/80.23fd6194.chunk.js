"use strict";(self.webpackChunkgoit_react_hw_05_movie=self.webpackChunkgoit_react_hw_05_movie||[]).push([[80],{80:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var r=t(885),a=t(791),c=t(739),i=t(237),s=t(731),o=t(7),u=t.n(o),l="Addititonal_title__SIPTz",d="Addititonal_item__s8-h+",f="Addititonal_link__vgkNm",h=t(184),p=[{href:"cast",text:"Cast"},{href:"reviews",text:"Reviews"}];p.propTypes={location:u().shape({pathname:u().string.isRequired,search:u().string.isRequired,key:u().string.isRequired,hash:u().string,state:u().bool}).isRequired};var v=function(e){var n=e.location;return(0,h.jsxs)("div",{children:[(0,h.jsx)("h4",{className:l,children:"Addititonal information"}),(0,h.jsx)("ul",{children:p.map((function(e){var t=e.href,r=e.text;return(0,h.jsx)("li",{className:d,children:(0,h.jsx)(s.rU,{to:t,state:{from:n},className:f,children:r})},t)}))}),(0,h.jsx)("hr",{})]})},_="InfoMovie_cardFilm__VOC91",m="InfoMovie_title__7-N3R",x="InfoMovie_img__QfNMG",g="InfoMovie_score__KbE3a",j=function(e){var n=e.movie,t=n.title,r=n.name,a=n.overview,c=n.genres,i=n.release_date,s=n.first_air_date,o=n.poster_path,u=n.vote_average,l=Math.round(10*u),d=o?"https://image.tmdb.org/t/p/w500".concat(o):"https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:_,children:[(0,h.jsx)("img",{src:d,alt:t||r,width:"200",className:x}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("h2",{className:m,children:[t||r," (",(s||i).slice(0,4),")"]}),(0,h.jsxs)("p",{className:g,children:["User Score: ",l,"%"]}),(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:a}),(0,h.jsx)("h3",{children:"Genres"}),(0,h.jsx)("p",{children:c.map((function(e){return e.name})).join(", ")})]})]}),(0,h.jsx)("hr",{})]})},k=t(185),w="GoBackButton_container__prr-a",b="GoBackButton_link__5eNxG",y=function(e){var n=e.backLinkHref;return(0,h.jsx)("div",{className:w,children:(0,h.jsxs)(s.rU,{to:n,className:b,children:[(0,h.jsx)(k.i1r,{size:20}),"Go back"]})})},N=t(2),Z=function(){var e,n,t=(0,a.useState)(null),s=(0,r.Z)(t,2),o=s[0],u=s[1],l=(0,c.UO)().movieId,d=null!==(e=null===(n=(0,c.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";if((0,a.useEffect)((function(){i.Pg(l).then((function(e){u(e)})).catch(console.log)}),[l]),o)return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(y,{backLinkHref:d}),(0,h.jsx)(j,{movie:o}),(0,h.jsx)(v,{location:d}),(0,h.jsx)(a.Suspense,{fallback:(0,h.jsx)(N.Z,{}),children:(0,h.jsx)(c.j3,{})})]})}},237:function(e,n,t){t.d(n,{GC:function(){return l},M1:function(){return f},Pg:function(){return d},rj:function(){return u},tx:function(){return h}});var r=t(861),a=t(757),c=t.n(a),i=t(388),s="d3828471647d87d229d1463076454bd6",o="https://api.themoviedb.org/3/",u=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o,"trending/movie/day?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o,"search/movie?api_key=").concat(s,"&query=").concat(n,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o,"movie/").concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o,"movie/").concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=80.23fd6194.chunk.js.map