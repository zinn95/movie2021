(this.webpackJsonpmovie2021=this.webpackJsonpmovie2021||[]).push([[0],{43:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),i=s(13),r=s.n(i),c=s(4),o=s.n(c),l=s(14),m=s(15),d=s(16),j=s(19),u=s(18),v=s(17),h=s.n(v),b=(s(43),s(0));var g=function(e){e.id;var t=e.title,s=e.year,a=e.summary,n=e.poster,i=e.genres;return Object(b.jsx)("div",{className:"movie",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{className:"movie__data",src:n,alt:t,title:t}),Object(b.jsx)("h3",{className:"movie__title",style:{backgroundColor:"white"},children:t}),Object(b.jsx)("h3",{className:"movie__year",children:s}),Object(b.jsx)("ul",{className:"genres",children:i.map((function(e,t){return Object(b.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(b.jsxs)("p",{className:"movie__summary",children:[a.slice(0,140),"..."]})]})})},p=(s(45),function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(m.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(o.a.mark((function t(){var s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,console.log(a),e.setState({movies:a,isLoading:!1});case 6:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(b.jsx)("section",{className:"container",children:t?Object(b.jsx)("div",{className:"loader",children:Object(b.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(b.jsx)("div",{className:"movies",children:s.map((function(e){return Object(b.jsx)(g,{id:e.id,title:e.title,year:e.year,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(n.a.Component));r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("tomato"))}},[[46,1,2]]]);
//# sourceMappingURL=main.0883e8a4.chunk.js.map