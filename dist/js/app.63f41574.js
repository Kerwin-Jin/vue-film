(function(t){function e(e){for(var r,a,l=e[0],c=e[1],u=e[2],s=0,p=[];s<l.length;s++)a=l[s],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(o.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},i={app:0},o=[];function a(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-2d2086b7":"b230c37e"}[t]+".js"}function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=i[t]=[e,r]}));e.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=a(t);var u=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(s);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}i[t]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/vue-film/dist/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"006a":function(t,e,n){"use strict";n("fa8b")},2612:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("tabbar"),n("router-view")],1)},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("ul",[n("router-link",{attrs:{to:"/film",tag:"li","active-class":"kerwinactive"}},[t._v("电影")]),n("router-link",{attrs:{to:"/cinema",tag:"li","active-class":"kerwinactive"}},[t._v("影院")]),n("router-link",{attrs:{to:"/center",tag:"li","active-class":"kerwinactive"}},[t._v("我的")])],1)])},l=[],c=(n("f003"),n("2877")),u={},s=Object(c["a"])(u,a,l,!1,null,"5bc69c8a",null),f=s.exports,p={data:function(){return{info:"轮播图"}},components:{tabbar:f}},d=p,v=Object(c["a"])(d,i,o,!1,null,"2e54611a",null),m=v.exports,h=(n("d3b7"),n("8c4f")),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("ul",[n("router-link",{attrs:{to:"/film/nowplaying",tag:"li","active-class":"kerwinactive"}},[t._v("正在热映")]),n("router-link",{attrs:{to:"/film/comingsoon",tag:"li","active-class":"kerwinactive"}},[t._v("即将上映")])],1),n("router-view")],1)},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"sliper"}},[n("h1",[t._v("大轮播")])])}],g=(n("006a"),{}),w=Object(c["a"])(g,b,_,!1,null,"414b1002",null),y=w.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Cinema ")])},j=[],O={},x=Object(c["a"])(O,k,j,!1,null,null,null),E=x.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("Center")])},P=[],C={beforeRouteEnter:function(t,e,n){localStorage.getItem("token")?n():(console.log("无token!"),n("/login"))},mounted:function(){}},S=C,T=Object(c["a"])(S,$,P,!1,null,null,null),L=T.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",t._l(t.dataList,(function(e){return n("li",{key:e.id,on:{click:function(n){return t.handleClick(e.id)}}},[t._v(t._s(e.title))])})),0)])},I=[],J={data:function(){return{dataList:[{id:111,title:"你好李焕英"},{id:222,title:"唐人街探案三"},{id:333,title:"新警察故事"},{id:444,title:"武林外传"}]}},methods:{handleClick:function(t){this.$router.push("/detail/".concat(t))}}},q=J,A=(n("d58b"),Object(c["a"])(q,M,I,!1,null,"1bdcc000",null)),R=A.exports,z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",[n("li",[t._v("你好李焕英2")]),n("li",[t._v("唐人街探案四")]),n("li",[t._v("新警察故事2")]),n("li",[t._v("宝贝计划3")])])])}],D={},F=Object(c["a"])(D,z,B,!1,null,null,null),G=F.exports,H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("影片详情页")])])}],N={data:function(){return{}},mounted:function(){console.log("利用请求的id通过ajax来获取后端的数据",this.$route.params.filmId)}},Q=N,U=Object(c["a"])(Q,H,K,!1,null,"5f41268c",null),V=U.exports;r["a"].use(h["a"]);var W=[{path:"/film",component:y,children:[{path:"nowplaying",component:R},{path:"/film/comingsoon",component:G},{path:"",redirect:"/film/nowplaying"}]},{path:"/cinema",component:E},{path:"/detail/:filmId",component:V},{path:"/center",component:L},{path:"/login",component:function(){return n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))}},{path:"*",redirect:"/film/nowplaying"}],X=new h["a"]({routes:W}),Y=X;r["a"].config.productionTip=!1,new r["a"]({router:Y,render:function(t){return t(m)}}).$mount("#app")},b73f:function(t,e,n){},d58b:function(t,e,n){"use strict";n("2612")},f003:function(t,e,n){"use strict";n("b73f")},fa8b:function(t,e,n){}});
//# sourceMappingURL=app.63f41574.js.map