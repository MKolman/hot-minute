(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17d7c71d"],{"0617":function(t,e,i){"use strict";var n=i("1971"),s=i.n(n);s.a},"083a":function(t,e,i){"use strict";var n=i("a906"),s=i.n(n);s.a},"08e5":function(t,e,i){"use strict";var n=i("4a09"),s=i.n(n);s.a},"0ccb":function(t,e,i){var n=i("50c4"),s=i("1148"),a=i("1d80"),r=Math.ceil,o=function(t){return function(e,i,o){var c,u,d=String(a(e)),l=d.length,h=void 0===o?" ":String(o),p=n(i);return p<=l||""==h?d:(c=p-l,u=s.call(h,r(c/h.length)),u.length>c&&(u=u.slice(0,c)),t?d+u:u+d)}};t.exports={start:o(!1),end:o(!0)}},"132d":function(t,e,i){"use strict";i("7db0"),i("caad"),i("c975"),i("fb6a"),i("45fc"),i("a9e3"),i("2532"),i("498a"),i("c96a");var n,s=i("5530"),a=(i("4804"),i("7e2b")),r=i("a9ad"),o=i("af2b"),c=i("7560"),u=i("80d2"),d=i("2b0e"),l=i("58df");function h(t){return["fas","far","fal","fab","fad"].some((function(e){return t.includes(e)}))}function p(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(n||(n={}));var m=Object(l["a"])(a["a"],r["a"],o["a"],c["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(u["w"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(u["s"])(t).find((function(e){return t[e]}));return e&&n[e]||Object(u["g"])(this.size)},getDefaultData:function(){var t={staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(s["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$};return t},applyColors:function(t){t.class=Object(s["a"])(Object(s["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var i=[],n=this.getDefaultData(),s="material-icons",a=t.indexOf("-"),r=a<=-1;r?i.push(t):(s=t.slice(0,a),h(s)&&(s="")),n.class[s]=!0,n.class[t]=!r;var o=this.getSize();return o&&(n.style={fontSize:o}),this.applyColors(n),e(this.hasClickListener?"button":this.tag,n,i)},renderSvgIcon:function(t,e){var i=this.getSize(),n=Object(s["a"])(Object(s["a"])({},this.getDefaultData()),{},{style:i?{fontSize:i,height:i,width:i}:void 0});n.class["v-icon--svg"]=!0,this.applyColors(n);var a={attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:i||"24",width:i||"24",role:"img","aria-hidden":!0}};return e(this.hasClickListener?"button":"span",n,[e("svg",a,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var i=this.getDefaultData();i.class["v-icon--is-component"]=!0;var n=this.getSize();n&&(i.style={fontSize:n,height:n,width:n}),this.applyColors(i);var s=t.component;return i.props=t.props,i.nativeOn=i.on,e(s,i)}},render:function(t){var e=this.getIcon();return"string"===typeof e?p(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=d["a"].extend({name:"v-icon",$_wrapperFor:m,functional:!0,render:function(t,e){var i=e.data,n=e.children,s="";return i.domProps&&(s=i.domProps.textContent||i.domProps.innerHTML||s,delete i.domProps.textContent,delete i.domProps.innerHTML),t(m,i,s?[s]:n)}})},1971:function(t,e,i){},"1a99":function(t,e,i){"use strict";var n=i("638c"),s=i.n(n);s.a},"23a4":function(t,e,i){t.exports=i.p+"media/flip.ff253bd4.mp3"},"269a":function(t,e){t.exports=function(t,e){var i="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var n in"function"===typeof t.exports&&(i.directives=t.exports.options.directives),i.directives=i.directives||{},e)i.directives[n]=i.directives[n]||e[n]}},"30db":function(t,e,i){"use strict";var n=i("495b"),s=i.n(n);s.a},"34cf":function(t,e,i){t.exports=i.p+"media/timesup.cd734fd1.mp3"},3759:function(t,e,i){t.exports=i.p+"media/explosion_medium.c016446a.mp3"},4804:function(t,e,i){},"495b":function(t,e,i){},4984:function(t,e,i){t.exports=i.p+"media/winner.acaa6ee8.mp3"},"4a09":function(t,e,i){},"4d90":function(t,e,i){"use strict";var n=i("23e7"),s=i("0ccb").start,a=i("9a0c");n({target:"String",proto:!0,forced:a},{padStart:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},"55c4":function(t,e,i){"use strict";i("c975"),i("b0c0");var n=i("d4ec"),s=i("bee2"),a=i("0613"),r=function(){function t(e){Object(n["a"])(this,t),this.currentSound=0,this.name=e,this.allSounds=[];for(var i=0;i<(arguments.length<=1?0:arguments.length-1);i+=1)this.allSounds.push(new Audio(i+1<1||arguments.length<=i+1?void 0:arguments[i+1]))}return Object(s["a"])(t,[{key:"play",value:function(){if(-1===a["a"].state.enabledSounds.indexOf(this.name))return console.log(this.name,"sound is disabled and was not played"),this.allSounds[0];console.log("Playing",this.name),this.currentSound+=1,this.currentSound%=this.allSounds.length;var t=this.allSounds[this.currentSound].cloneNode();return t.play().catch((function(t){return console.log("Unable to play sound",t)})),t}}]),t}();e["a"]={bomb:new r("bomb",i("3759")),selected:new r("selected",i("6900")),select:new r("select",i("e339"),i("b16c"),i("7dab")),countdown:new r("countdown",i("e7b4")),timesup:new r("timesup",i("34cf")),winner:new r("winner",i("4984")),flip:new r("flip",i("23a4"))}},"638c":function(t,e,i){},6900:function(t,e,i){t.exports=i.p+"media/selected.f6ab28b7.mp3"},"7dab":function(t,e,i){t.exports=i.p+"media/select3.a60bcaa9.mp3"},8363:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.$route.params.type,attrs:{id:"play"}},[i("div",{staticClass:"header"},[i("Shine"),i("h1",[t._v(" "+t._s(t.title)+" ")])],1),i("CardFlip",{attrs:{sensitive:t.timerRunning},model:{value:t.cardVisible,callback:function(e){t.cardVisible=e},expression:"cardVisible"}},[t._v(" "+t._s(t.capitalize(t.txt))+" ")]),i("Timer",{on:{start:function(e){t.cardVisible=!1,t.timerRunning=!0},stop:function(e){t.timerRunning=!1}}})],1)},s=[],a=(i("fb6a"),i("2792")),r=i("84ac"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{attrs:{"xmlns:dc":"http://purl.org/dc/elements/1.1/","xmlns:cc":"http://creativecommons.org/ns#","xmlns:rdf":"http://www.w3.org/1999/02/22-rdf-syntax-ns#","xmlns:svg":"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg","xmlns:sodipodi":"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd","xmlns:inkscape":"http://www.inkscape.org/namespaces/inkscape",width:"221.33603pt",height:"150.03757pt",viewBox:"0 0 221.33602 150.03757",version:"1.1",id:"svg13","sodipodi:docname":"shine.svg","inkscape:version":"0.92.4 (5da689c313, 2019-01-14)"}},[i("metadata",{attrs:{id:"metadata17"}},[i("rdf:RDF",[i("cc:Work",{attrs:{"rdf:about":""}},[i("dc:format",[t._v("image/svg+xml")]),i("dc:type",{attrs:{"rdf:resource":"http://purl.org/dc/dcmitype/StillImage"}}),i("dc:title")],1)],1)],1),i("sodipodi:namedview",{attrs:{pagecolor:"#ffffff",bordercolor:"#666666",borderopacity:"1",objecttolerance:"10",gridtolerance:"10",guidetolerance:"10","inkscape:pageopacity":"0","inkscape:pageshadow":"2","inkscape:window-width":"1276","inkscape:window-height":"1401",id:"namedview15",showgrid:"false","fit-margin-top":"0","fit-margin-left":"0","fit-margin-right":"0","fit-margin-bottom":"0","inkscape:zoom":"1.8151253","inkscape:cx":"108.03685","inkscape:cy":"56.565159","inkscape:window-x":"1280","inkscape:window-y":"18","inkscape:window-maximized":"0","inkscape:current-layer":"svg13"}}),i("defs",{attrs:{id:"defs2"}}),i("path",{attrs:{id:"shape0","stroke-miterlimit":"2",d:"m 184.23277,97.20773 27.60476,15.93759","inkscape:connector-curvature":"0"}}),i("path",{attrs:{id:"shape1","stroke-miterlimit":"2",d:"m 185.58336,74.24762 h 32.52656","inkscape:connector-curvature":"0"}}),i("path",{attrs:{id:"shape2","stroke-miterlimit":"2",d:"M 172.07741,51.287436 193.85503,29.509831","inkscape:connector-curvature":"0"}}),i("path",{attrs:{id:"shape3","stroke-miterlimit":"2",d:"m 142.36434,41.833396 7.40703,-27.643473","inkscape:connector-curvature":"0"}}),i("path",{attrs:{id:"shape4","stroke-miterlimit":"2",d:"M 108.37725,39.132185 V 10.726102","inkscape:connector-curvature":"0"}}),i("path",{attrs:{id:"shape5","stroke-miterlimit":"2",d:"M 76.185205,37.781514 61.685958,12.668137","inkscape:connector-curvature":"0"}}),i("path",{attrs:{id:"shape6","stroke-miterlimit":"2",d:"M 43.770936,53.9887 17.356541,27.574306","inkscape:connector-curvature":"0"}}),i("path",{attrs:{id:"shape7","stroke-miterlimit":"2",d:"M 37.018036,71.54643 H 3.2261009","inkscape:connector-curvature":"0"}}),i("path",{attrs:{id:"shape8","stroke-miterlimit":"2",d:"m 42.420299,97.20773 -29.31128,16.9229","inkscape:connector-curvature":"0"}})],1)},c=[],u=(i("083a"),i("2877")),d={},l=Object(u["a"])(d,o,c,!1,null,null,null),h=l.exports,p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card-wrapper",class:{hidecard:t.hideCard}},[i("Card",{staticClass:"back",class:t.$route.params.type}),i("Card",{staticClass:"front",class:t.$route.params.type},[t._t("default")],2),i("v-btn",{directives:[{name:"touch",rawName:"v-touch",value:{start:t.touchstart,end:t.touchend},expression:"{\n        start: touchstart,\n        end: touchend,\n      }"}],staticClass:"eye",attrs:{"aria-label":"Show card"},on:{click:t.click}},[i("v-icon",[t._v("mdi-eye")])],1)],1)},m=[],f=i("2b0e"),v=i("ae8d"),g=i("55c4"),b=f["a"].extend({name:"CardFlip",props:["value","sensitive"],data:function(){return{onTouch:!1,touching:!1}},components:{Card:v["a"]},watch:{hideCard:function(t,e){t!==e&&g["a"].flip.play()}},computed:{hideCard:function(){return!(this.value||this.touching)}},methods:{touchstart:function(){this.sensitive&&(this.onTouch=!0,this.touching=!0)},click:function(){this.sensitive&&this.onTouch||this.$emit("input",!this.value)},touchend:function(){this.sensitive&&(this.touching=!1)}}}),w=b,x=(i("1a99"),i("6544")),k=i.n(x),y=i("8336"),C=i("132d"),S=i("269a"),$=i.n(S),_=i("c3f0"),z=Object(u["a"])(w,p,m,!1,null,"6b7bfacc",null),O=z.exports;k()(z,{VBtn:y["a"],VIcon:C["a"]}),$()(z,{Touch:_["a"]});var T={name:"Play",components:{Timer:r["a"],Shine:h,CardFlip:O},data:function(){return{cardVisible:!0,txt:"",timerRunning:!1}},mounted:function(){a["a"].loadSettings(),this.txt=a["a"].getRandom(this.$route.params.type)},computed:{title:function(){return this.capitalize(this.$route.params.type)}},methods:{capitalize:function(t){return t&&t.length?t[0].toUpperCase()+t.slice(1):t}}},j=T,L=(i("08e5"),Object(u["a"])(j,n,s,!1,null,"7e6581d2",null));e["default"]=L.exports},"84ac":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"timer"},[null===t.timer?i("v-btn",{staticClass:"ready",attrs:{"x-large":""},on:{click:function(e){return t.start()}}},[t._v(" I'm ready! ")]):t._e(),null!==t.timer?i("v-btn",{ref:"timer",staticClass:"ready",attrs:{"x-large":""}},[t._v(" "+t._s(t.timerTxt)+" ")]):t._e(),i("v-btn",{staticClass:"done",class:{hidden:null===t.timer},attrs:{large:"",to:t.pause?"/":null},on:{click:function(e){return t.pauseTimer()}}},[t._v(t._s(t.pause?"home":"stop"))])],1)},s=[],a=(i("99af"),i("d3b7"),i("25f0"),i("4d90"),i("2b0e")),r=i("55c4"),o=a["a"].extend({name:"Timer",props:{noConfirm:{type:Boolean,default:!1}},data:function(){return{timer:null,pause:!1,timeoutId:0}},computed:{timerTxt:function(){return"".concat(Math.floor(this.timer/60).toString().padStart(2,"0"),":").concat((this.timer%60).toString().padStart(2,"0"))}},mounted:function(){this.noConfirm&&this.start()},destroyed:function(){clearTimeout(this.timeoutId)},methods:{start:function(){this.timer=this.$store.state.timer+1,this.countdown(),this.$emit("start"),this.$ga.time({timingCategory:"timer",timingVar:"start",timingValue:this.timer,timingLabel:this.$route.params.type||"bomb"}),this.$ga.event({eventCategory:"action",eventAction:"timerStart",eventValue:this.timer})},pauseTimer:function(){this.pause=!0,this.$emit("stop"),this.$ga.time({timingCategory:"timer",timingVar:"pause",timingValue:this.timer,timingLabel:this.$route.params.type||"bomb"}),this.$ga.event({eventCategory:"action",eventAction:"timerPause",eventValue:this.timer})},countdown:function(){null!==this.timer&&this.timer<=0&&(this.pause=!0,this.$emit("stop"),this.$ga.event({eventCategory:"action",eventAction:"timerOver"})),this.pause?(this.$refs.timer&&this.$refs.timer.$el.classList.toggle("hidden"),this.timeoutId=setTimeout(this.countdown,500)):null!==this.timer&&this.timer>0&&(this.$refs.timer&&this.$refs.timer.$el.classList.remove("hidden"),this.timer-=1,0===this.timer?r["a"].timesup.play():this.timer<=5&&r["a"].countdown.play(),this.timeoutId=setTimeout(this.countdown,1e3))}}}),c=o,u=(i("0617"),i("2877")),d=i("6544"),l=i.n(d),h=i("8336"),p=Object(u["a"])(c,n,s,!1,null,"a584831c",null);e["a"]=p.exports;l()(p,{VBtn:h["a"]})},"9a0c":function(t,e,i){var n=i("342f");t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},a906:function(t,e,i){},ae8d:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"outer elevation-4"},[i("div",{staticClass:"inner"}),t._t("default")],2)},s=[],a=i("2b0e"),r=a["a"].extend({name:"Card",mounted:function(){this.resizeTextSize(),window.addEventListener("resize",this.resizeTextSize)},destroyed:function(){window.removeEventListener("resize",this.resizeTextSize)},methods:{resizeTextSize:function(){this.$el.style.fontSize="".concat(.4*this.$el.clientHeight,"px")}}}),o=r,c=(i("30db"),i("2877")),u=Object(c["a"])(o,n,s,!1,null,"447e02d4",null);e["a"]=u.exports},b16c:function(t,e,i){t.exports=i.p+"media/select2.eee4c828.mp3"},c3f0:function(t,e,i){"use strict";i("4160"),i("159b");var n=i("80d2"),s=function(t){var e=t.touchstartX,i=t.touchendX,n=t.touchstartY,s=t.touchendY,a=.5,r=16;t.offsetX=i-e,t.offsetY=s-n,Math.abs(t.offsetY)<a*Math.abs(t.offsetX)&&(t.left&&i<e-r&&t.left(t),t.right&&i>e+r&&t.right(t)),Math.abs(t.offsetX)<a*Math.abs(t.offsetY)&&(t.up&&s<n-r&&t.up(t),t.down&&s>n+r&&t.down(t))};function a(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function r(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),s(e)}function o(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function c(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return a(t,e)},touchend:function(t){return r(t,e)},touchmove:function(t){return o(t,e)}}}function u(t,e,i){var s=e.value,a=s.parent?t.parentElement:t,r=s.options||{passive:!0};if(a){var o=c(e.value);a._touchHandlers=Object(a._touchHandlers),a._touchHandlers[i.context._uid]=o,Object(n["s"])(o).forEach((function(t){a.addEventListener(t,o[t],r)}))}}function d(t,e,i){var s=e.value.parent?t.parentElement:t;if(s&&s._touchHandlers){var a=s._touchHandlers[i.context._uid];Object(n["s"])(a).forEach((function(t){s.removeEventListener(t,a[t])})),delete s._touchHandlers[i.context._uid]}}var l={inserted:u,unbind:d};e["a"]=l},e339:function(t,e,i){t.exports=i.p+"media/select1.caeaf6e0.mp3"},e7b4:function(t,e,i){t.exports=i.p+"media/alarm.984d89ec.mp3"}}]);
//# sourceMappingURL=chunk-17d7c71d.76e3488e.js.map