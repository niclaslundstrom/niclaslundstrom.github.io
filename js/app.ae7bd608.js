(function(t){function e(e){for(var r,a,c=e[0],s=e[1],u=e[2],f=0,p=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"258b":function(t,e,n){},"3c61":function(t,e,n){"use strict";n("842a")},"437c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",[r("b-nav",[r("b-nav-item",{attrs:{active:""}},[t._v("Active")]),r("b-nav-item",[t._v("Link")]),r("b-nav-item",[t._v("Another Link")])],1)],1),r("nav",[r("img",{attrs:{alt:"Rymd tupp",src:n("aa29")}}),r("br"),r("div",{attrs:{id:"page-nav"}},[r("router-link",{attrs:{to:"/"}},[t._v("sida 1 ")]),t._v(" | "),r("router-link",{attrs:{to:"/page2"}},[t._v("Yes or No")])],1)]),r("router-view")],1)},i=[],a=(n("5c0b"),n("2877")),c={},s=Object(a["a"])(c,o,i,!1,null,null,null),u=s.exports,l=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("cities")],1)},p=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Städer!")]),n("ul",t._l(t.cities,(function(e){return n("li",{key:e.id,attrs:{value:e}},[t._v(" "+t._s(e.name)+" "+t._s(e.population)+" ")])})),0)])},v=[],b=(n("d3b7"),{data:function(){return{cities:{}}},created:function(){var t=this;fetch("https://avancera.app/cities/").then((function(t){return t.json()})).then((function(e){console.log(e),t.cities=e}))},name:"cities"}),h=b,m=(n("94a5"),Object(a["a"])(h,d,v,!1,null,"6fc11bc5",null)),g=m.exports,_={components:{cities:g}},w=_,y=(n("c54f"),Object(a["a"])(w,f,p,!1,null,"a5a6b44e",null)),x=y.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(t.answer))]),n("br"),n("img",{attrs:{src:t.img,alt:"detta är en gif"}}),n("br"),n("input",{staticClass:"[ btn btn-secondary ][ bobutton ]",attrs:{type:"button",value:"Yes or No"},on:{click:function(e){return t.fetchData()}}}),n("textfield",{attrs:{text:"inget värde skickat!"}})],1)},j=[],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.textfield,expression:"textfield"}],attrs:{type:"text"},domProps:{value:t.textfield},on:{input:function(e){e.target.composing||(t.textfield=e.target.value)}}}),n("br"),null==t.textfield?n("h2",[t._v(t._s(t.text))]):n("h2",[t._v("Ett korekt värde skickats!")]),n("input",{staticClass:"[ btn btn-primary ][ bobutton ]",attrs:{type:"button",value:"payload-värde"},on:{click:t.onClick}})])},P=[],S={props:["text"],data:function(){return{textfield:null}},methods:{onClick:function(){console.log(this.$emit),this.$emit("text-input",this.textfield)}},name:"textfield"},$=S,E=(n("3c61"),Object(a["a"])($,O,P,!1,null,"54094140",null)),N=E.exports,A={components:{textfield:N},data:function(){return{answer:null,img:null}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;fetch("https://cors-anywhere.herokuapp.com/http://yesno.wtf/api/").then((function(t){return t.json()})).then((function(e){console.log(e),t.answer=e.answer,t.img=e.image}))}},name:"Yesorno"},C=A,M=(n("6546"),Object(a["a"])(C,k,j,!1,null,"8f1a9fd6",null)),D=M.exports;r["a"].use(l["a"]);var T=[{component:x,name:"whatever",path:"/"},{component:D,name:"whaateääver",path:"/page2"}],Y=new l["a"]({routes:T}),F=Y,J=(n("ab8b"),n("2dd8"),n("2f62"));r["a"].use(J["a"]);var L=new J["a"].Store({state:{},mutations:{},actions:{},modules:{}}),q=(n("abe2"),n("f9bc")),B=n("9483");Object(B["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),r["a"].use(q["a"]),r["a"].config.productionTip=!1,new r["a"]({router:F,store:L,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5fbb":function(t,e,n){},6546:function(t,e,n){"use strict";n("258b")},"842a":function(t,e,n){},"94a5":function(t,e,n){"use strict";n("437c")},"9c0c":function(t,e,n){},aa29:function(t,e,n){t.exports=n.p+"img/Group 11.8657bbf5.png"},abe2:function(t,e,n){},c54f:function(t,e,n){"use strict";n("5fbb")}});
//# sourceMappingURL=app.ae7bd608.js.map