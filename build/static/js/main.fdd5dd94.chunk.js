(this.webpackJsonpposts=this.webpackJsonpposts||[]).push([[0],{34:function(t,e,n){},35:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n.n(c),r=n(28),a=n.n(r),o=(n(34),n(35),n(10)),i=n(2),j=n(5),u=n.n(j),l=n(9),b=n(13),p=n(14),d=n.n(p),h={getPaginatedPosts:function(){var t=Object(l.a)(u.a.mark((function t(e){var n,c,s,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(localStorage.allPosts){t.next=6;break}return t.next=3,d.a.get("https://jsonplaceholder.typicode.com/posts");case 3:n=t.sent,c=n.data,localStorage.setItem("allPosts",JSON.stringify(c));case 6:return s=JSON.parse(localStorage.getItem("allPosts")),r=s.slice(20*e,20*(e+1)),t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),getComments:function(){var t=Object(l.a)(u.a.mark((function t(e){var n,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("https://jsonplaceholder.typicode.com/posts/".concat(e,"/comments"));case 2:return n=t.sent,c=n.data,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),getPost:function(){var t=Object(l.a)(u.a.mark((function t(e){var n,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("https://jsonplaceholder.typicode.com/posts/".concat(e));case 2:return n=t.sent,c=n.data,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=n(1);function x(t){var e=t.post;return Object(O.jsxs)("div",{className:"post",children:[Object(O.jsxs)("h1",{children:[" ",e.id]}),Object(O.jsx)(o.b,{to:"/info/".concat(e.id),children:Object(O.jsxs)("h2",{children:[" ",e.title," "]})}),Object(O.jsxs)("p",{children:[" ",e.body," "]})]})}function f(){var t=Object(i.g)().pageNumber,e=parseInt(t,10),n=Object(c.useState)([]),s=Object(b.a)(n,2),r=s[0],a=s[1];return Object(c.useEffect)(Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.getPaginatedPosts(e);case 2:n=t.sent,a(n);case 4:case"end":return t.stop()}}),t)}))),[t]),Object(O.jsx)("div",{className:"posts",children:r.map((function(t){return Object(O.jsx)(x,{post:t})}))})}function m(){var t=Object(i.g)().id,e=Object(c.useState)([]),n=Object(b.a)(e,2),s=n[0],r=n[1],a=Object(c.useState)({}),o=Object(b.a)(a,2),j=o[0],p=o[1];return Object(c.useEffect)(Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=r,e.next=3,h.getComments(t);case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=p,e.next=8,h.getPost(t);case 8:e.t3=e.sent,(0,e.t2)(e.t3);case 10:case"end":return e.stop()}}),e)}))),[]),Object(O.jsxs)("div",{className:"Info",children:[Object(O.jsxs)("h2",{children:[" Post ",t]}),Object(O.jsxs)("h3",{children:[" ",j.title," "]}),Object(O.jsxs)("p",{children:[" ",j.body]}),Object(O.jsxs)("div",{className:"comments",children:[Object(O.jsx)("h2",{children:" Comments "}),s.map((function(t){return Object(O.jsxs)("div",{className:"comment",children:[Object(O.jsx)("h2",{children:t.name}),Object(O.jsx)("h3",{children:t.email}),Object(O.jsx)("p",{children:t.body})]})}))]})]})}function g(){return Object(O.jsx)(o.a,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:Object(O.jsx)("ul",{className:"pageNumbers",children:Array.from(Array(5).keys()).map((function(t){return Object(O.jsx)("li",{style:{listStyle:"none"},children:Object(O.jsxs)(o.b,{to:"/posts/".concat(t),children:["Page",t]})})}))})}),Object(O.jsxs)(i.d,{children:[Object(O.jsx)(i.b,{exact:!0,path:"/posts/:pageNumber",children:Object(O.jsx)(f,{})}),Object(O.jsx)(i.b,{exact:!0,path:"/info/:id",children:Object(O.jsx)(m,{})}),Object(O.jsx)(i.b,{exact:!0,path:"/",children:Object(O.jsx)(i.a,{to:{pathname:"/posts/2"}})})]})]})})}var v=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(g,{className:"home"})})},y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),c(t),s(t),r(t),a(t)}))};a.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(v,{})}),document.getElementById("root")),y()}},[[61,1,2]]]);
//# sourceMappingURL=main.fdd5dd94.chunk.js.map