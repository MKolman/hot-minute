(function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6535b14e"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var u=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,n[1](u)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"21bb":function(e,t,n){"use strict";var r=n("2dad"),o=n.n(r);o.a},"2dad":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(e,t,n){},"9dcb":function(e,t,n){},a034:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"app"}},[n("v-main",[n("router-view",{staticClass:"view"})],1),n("v-snackbar",{attrs:{bottom:"",right:"",value:e.updateExists,timeout:-1,color:"primary"}},[e._v(" An update is available "),n("v-btn",{attrs:{text:""},on:{click:e.refreshApp}},[e._v(" Update ")])],1)],1)},a=[],i={data:function(){return{refreshing:!1,registration:null,updateExists:!1}},created:function(){var e=this;document.addEventListener("swUpdated",this.updateAvailable,{once:!0}),navigator.serviceWorker.addEventListener("controllerchange",(function(){e.refreshing||(e.refreshing=!0,window.location.reload())}))},methods:{updateAvailable:function(e){this.registration=e.detail,this.updateExists=!0},refreshApp:function(){this.updateExists=!1,this.registration&&this.registration.waiting&&this.registration.waiting.postMessage({type:"SKIP_WAITING"})}}},s={name:"App",mixins:[i]},c=s,u=(n("5c0b"),n("2877")),l=n("6544"),d=n.n(l),f=n("7496"),p=n("8336"),v=n("f6c4"),h=n("2db4"),b=Object(u["a"])(c,o,a,!1,null,null,null),m=b.exports;d()(b,{VApp:f["a"],VBtn:p["a"],VMain:v["a"],VSnackbar:h["a"]});var g=n("9483");Object(g["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(e){console.log("New content is available; please refresh."),document.dispatchEvent(new CustomEvent("swUpdated",{detail:e}))},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var w=n("8c4f"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e._m(0),n("Card",{staticClass:"play",nativeOn:{click:function(t){return e.play()}}},[e._v("PLAY")]),n("Score",{attrs:{id:"score"}})],1)},_=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"top"},[n("div",[e._v(" menu ")])])}],C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"outer elevation-4"},[n("div",{staticClass:"inner"},[e._t("default")],2)])},x=[],E=r["a"].extend({name:"Card",mounted:function(){this.resizeTextSize(),window.addEventListener("resize",this.resizeTextSize)},destroyed:function(){window.removeEventListener("resize",this.resizeTextSize)},methods:{resizeTextSize:function(){this.$el.style.fontSize="".concat(.4*this.$el.clientHeight,"px")}}}),S=E,k=(n("e97d"),Object(u["a"])(S,C,x,!1,null,"4a94a5e7",null)),O=k.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("h1",[e._v("MY TEAM'S SCORE")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.scoreValue,expression:"scoreValue"}],staticClass:"elevation-4",domProps:{value:e.scoreValue},on:{input:function(t){t.target.composing||(e.scoreValue=t.target.value)}}}),n("div",{staticClass:"toolbox-shape"},[n("div",{staticClass:"toolbox"},[n("v-btn",{staticClass:"score-button elevation-4",attrs:{fab:""},on:{click:function(t){e.scoreValue+=5}}},[e._v(" +5 ")]),n("v-btn",{staticClass:"score-button elevation-4",attrs:{fab:""},on:{click:function(t){e.scoreValue+=1}}},[e._v(" +1 ")]),n("v-btn",{staticClass:"score-button elevation-4",attrs:{fab:""},on:{click:function(t){e.scoreValue-=1}}},[n("v-icon",{attrs:{dark:""}},[e._v("mdi-undo")])],1)],1)])])},A=[],V=r["a"].extend({name:"Score",data:function(){return{scoreValue:0}}}),P=V,z=(n("ebfa"),n("132d")),T=Object(u["a"])(P,j,A,!1,null,"73cb3dff",null),$=T.exports;d()(T,{VBtn:p["a"],VIcon:z["a"]});var M={name:"Home",components:{Card:O,Score:$},methods:{play:function(){console.log(this.$router),this.$router.push("selector")}}},L=M,N=(n("21bb"),Object(u["a"])(L,y,_,!1,null,null,null)),I=N.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Card",{staticClass:"speak"},[e._v("Speak")]),n("Card",{staticClass:"draw"},[e._v("Draw")]),n("Card",{staticClass:"show"},[e._v("Show")])],1)},H=[],U={name:"Selector",components:{Card:O}},q=U,F=Object(u["a"])(q,B,H,!1,null,null,null),J=F.exports;r["a"].use(w["a"]);var W=[{path:"/",name:"Home",component:I},{path:"/selector",name:"Select Activity",component:J},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Y=new w["a"]({routes:W}),D=Y,G=n("f309");r["a"].use(G["a"]);var K=new G["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:D,vuetify:K,render:function(e){return e(m)}}).$mount("#app")},e97d:function(e,t,n){"use strict";var r=n("a034"),o=n.n(r);o.a},ebfa:function(e,t,n){"use strict";var r=n("9dcb"),o=n.n(r);o.a}});
//# sourceMappingURL=app.383d8620.js.map