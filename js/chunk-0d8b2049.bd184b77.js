(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d8b2049"],{"009c":function(t,e,i){t.exports=i.p+"media/show.776e4459.mp3"},"23a4":function(t,e,i){t.exports=i.p+"media/flip.ff253bd4.mp3"},"30db":function(t,e,i){"use strict";i("495b")},"34cf":function(t,e,i){t.exports=i.p+"media/timesup.cd734fd1.mp3"},3759:function(t,e,i){t.exports=i.p+"media/explosion_medium.c016446a.mp3"},"495b":function(t,e,i){},4984:function(t,e,i){t.exports=i.p+"media/winner.acaa6ee8.mp3"},"55c4":function(t,e,i){"use strict";i("c975"),i("b0c0");var n=i("d4ec"),a=i("bee2"),o=i("0613"),s=function(){function t(e){Object(n["a"])(this,t),this.currentSound=0,this.name=e,this.allSounds=[];for(var i=0;i<(arguments.length<=1?0:arguments.length-1);i+=1)this.allSounds.push(new Audio(i+1<1||arguments.length<=i+1?void 0:arguments[i+1]))}return Object(a["a"])(t,[{key:"play",value:function(){if(-1===o["a"].state.enabledSounds2.indexOf(this.name))return console.log(this.name,"sound is disabled and was not played"),this.allSounds[0];console.log("Playing",this.name),this.currentSound+=1,this.currentSound%=this.allSounds.length;var t=this.allSounds[this.currentSound].cloneNode();return t.play().catch((function(t){return console.log("Unable to play sound",t)})),t}}]),t}();e["a"]={bomb:new s("bomb",i("3759")),selected:new s("selected",i("6900")),select:new s("select",i("e339"),i("b16c"),i("7dab")),countdown:new s("countdown",i("e7b4")),timesup:new s("timesup",i("34cf")),winner:new s("winner",i("4984")),flip:new s("flip",i("23a4")),speak:new s("activity_type",i("f393")),draw:new s("activity_type",i("91ab")),show:new s("activity_type",i("009c"))}},6900:function(t,e,i){t.exports=i.p+"media/selected.f6ab28b7.mp3"},"7dab":function(t,e,i){t.exports=i.p+"media/select3.a60bcaa9.mp3"},"91ab":function(t,e,i){t.exports=i.p+"media/draw.ab41d09e.mp3"},ae8d:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"outer elevation-4"},[i("div",{staticClass:"inner"}),t._t("default")],2)},a=[],o=i("2b0e"),s=o["a"].extend({name:"Card",mounted:function(){this.resizeTextSize(),window.addEventListener("resize",this.resizeTextSize)},destroyed:function(){window.removeEventListener("resize",this.resizeTextSize)},methods:{resizeTextSize:function(){this.$el.style.fontSize="".concat(.4*this.$el.clientHeight,"px")}}}),r=s,u=(i("30db"),i("2877")),c=Object(u["a"])(r,n,a,!1,null,"447e02d4",null);e["a"]=c.exports},b16c:function(t,e,i){t.exports=i.p+"media/select2.eee4c828.mp3"},b98e:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.activities,(function(e,n){var a;return i("Card",{key:e,class:(a={sat:n===t.highlight,desat:null!=t.highlight&&n!==t.highlight},a[e]=!0,a)},[t._v(t._s(t.capitalize(e)))])})),1)},a=[],o=(i("4160"),i("fb6a"),i("ac1f"),i("5319"),i("159b"),i("2f62")),s=i("ae8d"),r=i("55c4"),u=(i("d81d"),i("13d5"),i("0613"));function c(){var t=(1-u["a"].state.bombProbability)/3;return[t,t,t,u["a"].state.bombProbability]}function l(t){var e=t.reduce((function(t,e){return t+e}),0);return t.map((function(t){return t/e}))}function h(t,e){var i=e.reduce((function(t,e){return t+e}),0),n=t;if(i>0)for(var a=0;a<t.length;a+=1)n[a]=Math.max(0,2*n[a]-e[a]/(i+2));return l(n)}function d(){for(var t=h(c(),u["a"].state.activityHistory),e=Math.random(),i=0;i<t.length;i+=1){if(t[i]>=e)return u["a"].commit("updateActivityHistory",i),i;e-=t[i]}return console.warn("Was unable to pick activity the proper way. Choosing randomly.",t),Math.floor(Math.random()*t.length)}var p=d,m={name:"Selector",components:{Card:s["a"]},data:function(){return{highlight:null,delay:33*this.$store.state.animationTimeS,timeoutIds:[null],activities:["speak","draw","show"],activityPicker:p}},computed:Object(o["b"])(["tutorialStep"]),mounted:function(){var t=66*this.$store.state.animationTimeS;this.timeoutIds.push(setTimeout(this.roll,t)),this.timeoutIds.push(setTimeout(this.resolve,t+10*this.delay))},destroyed:function(){this.clearTimeouts()},methods:{goPlay:function(t){"bomb"===t?this.$router.replace("/play/bomb"):(r["a"][t].play(),this.$router.replace({name:"Play",params:{type:t}}))},capitalize:function(t){return t&&t.length?t[0].toUpperCase()+t.slice(1):t},roll:function(){this.highlight=(this.highlight+1)%3,this.delay=Math.max(.92*this.delay,100),r["a"].select.play(),this.timeoutIds[0]=setTimeout(this.roll,this.delay)},resolve:function(){var t=this,e=this.tutorialStep<0?this.activityPicker():0;if(3===e)this.timeoutIds.push(setTimeout((function(){return t.goPlay("bomb")}),2e3));else{this.clearTimeouts(),this.tutorialStep>0&&this.$store.commit("tutorialNext"),this.highlight=e;for(var i=200;i<1300;i+=200)this.timeoutIds.push(setTimeout((function(){-1===t.highlight&&r["a"].selected.play(),t.highlight=-1===t.highlight?e:-1}),i));this.tutorialStep<0&&this.timeoutIds.push(setTimeout((function(){return t.goPlay(t.activities[e])}),3e3))}},clearTimeouts:function(){this.timeoutIds.forEach((function(t){return clearTimeout(t)}))}}},f=m,b=i("2877"),y=Object(b["a"])(f,n,a,!1,null,null,null);e["default"]=y.exports},e339:function(t,e,i){t.exports=i.p+"media/select1.caeaf6e0.mp3"},e7b4:function(t,e,i){t.exports=i.p+"media/alarm.984d89ec.mp3"},f393:function(t,e,i){t.exports=i.p+"media/speak.ece9fdbb.mp3"}}]);
//# sourceMappingURL=chunk-0d8b2049.bd184b77.js.map