(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d155699"],{"30db":function(t,e,i){"use strict";i("495b")},"495b":function(t,e,i){},ae8d:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"outer elevation-4"},[i("div",{staticClass:"inner"}),t._t("default")],2)},s=[],o=i("2b0e"),r=o["a"].extend({name:"Card",mounted:function(){this.resizeTextSize(),window.addEventListener("resize",this.resizeTextSize)},destroyed:function(){window.removeEventListener("resize",this.resizeTextSize)},methods:{resizeTextSize:function(){this.$el.style.fontSize="".concat(.4*this.$el.clientHeight,"px")}}}),a=r,u=(i("30db"),i("2877")),h=Object(u["a"])(a,n,s,!1,null,"447e02d4",null);e["a"]=h.exports},b98e:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.activities,(function(e,n){var s;return i("Card",{key:e,class:(s={sat:n===t.highlight,desat:null!=t.highlight&&n!==t.highlight},s[e]=!0,s)},[t._v(t._s(t.capitalize(e)))])})),1)},s=[],o=(i("4160"),i("fb6a"),i("ac1f"),i("5319"),i("159b"),i("2f62")),r=i("ae8d");i("d81d"),i("13d5");function a(t){var e=(1-t)/3;return[e,e,e,t]}function u(t){var e=t.reduce((function(t,e){return t+e}),0);return t.map((function(t){return t/e}))}function h(t,e){var i=e.reduce((function(t,e){return t+e}),0),n=t;if(i>0)for(var s=0;s<t.length;s+=1)n[s]=Math.max(0,2*n[s]-e[s]/(i+2));return u(n)}function l(t){for(var e=h(a(t.state.bombProbability),t.state.activityHistory),i=Math.random(),n=0;n<e.length;n+=1){if(e[n]>=i)return t.commit("updateActivityHistory",n),n;i-=e[n]}return console.warn("Was unable to pick activity the proper way. Choosing randomly.",e),Math.floor(Math.random()*e.length)}var c=l,d={name:"Selector",components:{Card:r["a"]},data:function(){return{highlight:null,delay:33*this.$store.state.animationTimeS,timeoutIds:[null],activities:["speak","draw","show"]}},computed:Object(o["b"])(["tutorialStep"]),mounted:function(){var t=66*this.$store.state.animationTimeS;this.timeoutIds.push(setTimeout(this.roll,t)),this.timeoutIds.push(setTimeout(this.resolve,t+10*this.delay))},destroyed:function(){this.clearTimeouts()},methods:{goPlay:function(t){"bomb"===t?this.$router.replace("/play/bomb"):(this.$root.$emit("play",t),this.$router.replace({name:"Play",params:{type:t}}))},capitalize:function(t){return t&&t.length?t[0].toUpperCase()+t.slice(1):t},roll:function(){this.highlight=(this.highlight+1)%3,this.delay=Math.max(.92*this.delay,100),this.$root.$emit("play","select"),this.timeoutIds[0]=setTimeout(this.roll,this.delay)},resolve:function(){var t=this,e=this.tutorialStep<0?c(this.$store):0;if(3===e)this.timeoutIds.push(setTimeout((function(){return t.goPlay("bomb")}),2e3));else{this.clearTimeouts(),this.tutorialStep>0&&this.$store.commit("tutorialNext"),this.highlight=e;for(var i=200;i<1300;i+=200)this.timeoutIds.push(setTimeout((function(){-1===t.highlight&&t.$root.$emit("play","selected"),t.highlight=-1===t.highlight?e:-1}),i));this.tutorialStep<0&&this.timeoutIds.push(setTimeout((function(){return t.goPlay(t.activities[e])}),3e3))}},clearTimeouts:function(){this.timeoutIds.forEach((function(t){return clearTimeout(t)}))}}},m=d,f=i("2877"),p=Object(f["a"])(m,n,s,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-6d155699.734c174d.js.map