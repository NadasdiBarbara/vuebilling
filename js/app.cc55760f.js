(function(t){function e(e){for(var n,a,l=e[0],u=e[1],s=e[2],p=0,d=[];p<l.length;p++)a=l[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);c&&c(e);while(d.length)d.shift()();return o.push.apply(o,s||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,l=1;l<i.length;l++){var u=i[l];0!==r[u]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=i[0]))}return t}var n={},r={app:0},o=[];function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vuebilling/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var c=u;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Table",{attrs:{rows:t.rows}})],1)},o=[],a=(i("d81d"),i("a434"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("table",[t._m(0),i("tbody",[t._l(t.rows,(function(e){return i("TableItem",{key:e.title,attrs:{row:e},on:{"selected-row-changed":t.Changed,"selected-row-torles":t.Torles}})})),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],attrs:{type:"number"},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}})]),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.quality,expression:"quality"}],attrs:{type:"number"},domProps:{value:t.quality},on:{input:function(e){e.target.composing||(t.quality=e.target.value)}}})]),i("td",[i("button",{on:{click:t.Post}},[t._v(" Hozzáad ")])])],2)])])}),l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",[i("th",[t._v("Title")]),i("th",[t._v("Price")]),i("th",[t._v("Quality")]),i("th",[t._v("Operations")]),i("th",[t._v("Összérték")])])])}],u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[t.edit?t._e():i("td",[t._v(" "+t._s(t.title)+" ")]),t.edit?t._e():i("td",[t._v(" "+t._s(t.quantity)+" ")]),t.edit?t._e():i("td",[t._v(" "+t._s(t.price)+" ")]),t.edit?i("td",[i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}},"input",t.title,!1))]):t._e(),t.edit?i("td",[i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],attrs:{type:"number"},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=e.target.value)}}},"input",t.quantity,!1))]):t._e(),t.edit?i("td",[i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],attrs:{type:"number"},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}},"input",t.price,!1))]):t._e(),t.edit?t._e():i("td",[i("button",{on:{click:t.Torles}},[t._v("X")]),t._v(" "),i("button",{on:{click:t.Edit}},[t._v("Edit")])]),t.edit?i("td",[i("button",{on:{click:t.Save}},[t._v("Mentés")])]):t._e(),t.edit?t._e():i("td",[t._v(" "+t._s(t.quantity*t.price)+" ")])])},s=[],c={props:["row"],data:function(){return{title:this.row.title,price:this.row.price,quantity:this.row.quantity,edit:!1}},methods:{Edit:function(){this.edit=!0},Save:function(){this.edit=!1,this.$emit("selected-title-changed",{original:this.row,new:{title:this.title}}),this.$emit("selected-price-changed",{original:this.row,new:{price:this.price}}),this.$emit("selected-quantity-changed",{original:this.row,new:{quantity:this.quantity}})},Torles:function(){this.$emit("table-item-torles",{original:this.row})}}},p=c,d=i("2877"),m=Object(d["a"])(p,u,s,!1,null,null,null),h=m.exports,f={props:["rows"],components:{TableItem:h},methods:{Changed:function(t){this.$emit("table-title-changed",t),this.$emit("table-price-changed",t),this.$emit("table-quality-changed",t)},Post:function(){this.$emit("table-item-post",{new:{title:this.title,price:this.price,quantity:this.quantity}}),this.title="",this.price=null,this.quantity=null},Torles:function(t){this.$emit("table-item-torles",t)}}},v=f,y=Object(d["a"])(v,a,l,!1,null,null,null),g=y.exports,b={name:"App",components:{Table:g},data:function(){return{rows:[{title:"Kerék",price:100,quantity:12},{title:"Teleszkóp",price:1e3,quantity:300},{title:"Kormány",price:230,quantity:5},{title:"Ajtó",price:45120,quantity:321}]}},methods:{Changed:function(t){this.rows.map((function(e){return e.title!=t.original||(e.title=t.new.title),e}))},Post:function(t){this.rows.push(t.new)},Torles:function(t){this.rows.splice(this.rows.indexOf(t.original),1)}}},_=b,w=(i("034f"),Object(d["a"])(_,r,o,!1,null,null,null)),q=w.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(q)}}).$mount("#app")},"85ec":function(t,e,i){}});
//# sourceMappingURL=app.cc55760f.js.map