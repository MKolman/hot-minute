(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ab01a6b"],{"132d":function(e,t,a){"use strict";a("7db0"),a("caad"),a("c975"),a("fb6a"),a("45fc"),a("a9e3"),a("2532"),a("498a"),a("c96a");var n,o=a("5530"),i=(a("4804"),a("7e2b")),s=a("a9ad"),r=a("af2b"),l=a("7560"),h=a("80d2"),c=a("2b0e"),u=a("58df");function m(e){return["fas","far","fal","fab","fad"].some((function(t){return e.includes(t)}))}function d(e){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(e)&&/[\dz]$/i.test(e)&&e.length>4}(function(e){e["xSmall"]="12px",e["small"]="16px",e["default"]="24px",e["medium"]="28px",e["large"]="36px",e["xLarge"]="40px"})(n||(n={}));var p=Object(u["a"])(i["a"],s["a"],r["a"],l["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var e="";return this.$slots.default&&(e=this.$slots.default[0].text.trim()),Object(h["w"])(this,e)},getSize:function(){var e={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},t=Object(h["s"])(e).find((function(t){return e[t]}));return t&&n[t]||Object(h["g"])(this.size)},getDefaultData:function(){var e={staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(o["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$};return e},applyColors:function(e){e.class=Object(o["a"])(Object(o["a"])({},e.class),this.themeClasses),this.setTextColor(this.color,e)},renderFontIcon:function(e,t){var a=[],n=this.getDefaultData(),o="material-icons",i=e.indexOf("-"),s=i<=-1;s?a.push(e):(o=e.slice(0,i),m(o)&&(o="")),n.class[o]=!0,n.class[e]=!s;var r=this.getSize();return r&&(n.style={fontSize:r}),this.applyColors(n),t(this.hasClickListener?"button":this.tag,n,a)},renderSvgIcon:function(e,t){var a=this.getSize(),n=Object(o["a"])(Object(o["a"])({},this.getDefaultData()),{},{style:a?{fontSize:a,height:a,width:a}:void 0});n.class["v-icon--svg"]=!0,this.applyColors(n);var i={attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:a||"24",width:a||"24",role:"img","aria-hidden":!0}};return t(this.hasClickListener?"button":"span",n,[t("svg",i,[t("path",{attrs:{d:e}})])])},renderSvgIconComponent:function(e,t){var a=this.getDefaultData();a.class["v-icon--is-component"]=!0;var n=this.getSize();n&&(a.style={fontSize:n,height:n,width:n}),this.applyColors(a);var o=e.component;return a.props=e.props,a.nativeOn=a.on,t(o,a)}},render:function(e){var t=this.getIcon();return"string"===typeof t?d(t)?this.renderSvgIcon(t,e):this.renderFontIcon(t,e):this.renderSvgIconComponent(t,e)}});t["a"]=c["a"].extend({name:"v-icon",$_wrapperFor:p,functional:!0,render:function(e,t){var a=t.data,n=t.children,o="";return a.domProps&&(o=a.domProps.textContent||a.domProps.innerHTML||o,delete a.domProps.textContent,delete a.domProps.innerHTML),e(p,a,o?[o]:n)}})},4804:function(e,t,a){},"9f78":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-page"},[a("h1",[e._v(" Rules "),a("small",[a("router-link",{attrs:{to:"settings"}},[e._v("Settings")]),a("router-link",{attrs:{to:"about"}},[e._v("About")])],1)]),e._m(0),a("p",[e._v(" Teams take turns playing a single round of the game. One person from the team will select play to make the app select an activity and phrase for them. They then have to communicate that phrase to the rest of their team in time under the restrictions that the activity demands. ")]),a("p",[e._v(" The team that is the first to reach 50 points wins the game. ")]),a("h2",[e._v("Speak")]),a("p",[e._v(" When speaking you have to verbally communicate the phrase thrust upon you. You are not allowed to use any hand gestures (e.g. pointing, miming a box) or any other props to help explain your point. Use of any words that appear in your phrase is also prohibitet, as are any words with a common root (e.g. type, typography, and typewriter). ")]),a("h2",[e._v("Draw")]),a("p",[e._v(" You are allowed a sheet of paper and one single colored pen or pencil to draw the object of your game. While doing so, you may not write out any numbers of letters on your drawings. Speaking, making other sounds or miming is not allowed during this activity. ")]),a("h2",[e._v("Show")]),a("p",[e._v(" This activity prohibits you from making any sounds. You have to pantomime what is written on your card to the best of your abilities without using any other person or object. ")]),a("h2",[e._v("Humming bomb")]),a("p",[e._v(" Occasionally you will be attacked by a Humming Bomb. This round you will not have any time to prepare -- the timer will start right away. In addition you will be performing for all players even those in opposing teams. Your goal is to hum, with your mouth closed, the melody and rhythm of the song given to you. ")]),a("h1",[e._v(" Scoring ")]),e._m(1),a("h2",[e._v("Humming bomb")]),e._m(2),a("h2",[e._v("3 Player variant")]),e._m(3),a("HomeFab")],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" Hot Minute requires players to be split into teams of at least two players each. If you have a hard time deciding you can use an app like "),a("a",{attrs:{href:"https://playerone.kevincox.ca/"}},[e._v("PlayerOne")]),e._v(" to do that for you. In principal everyone could be playing with only a single device displaying Hot Minute, but it's recommended that you have at least one per team. ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" Every team should have a designated score keeper that keeps track of how many points your team got. Every round that your team successfully communicates and guesses the correct term in time you are awarded "),a("b",[e._v("5 points")]),e._v(". ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" During a Humming Bomb round any team is free to guess the song. If any team guesses the song correctly they get awarder "),a("b",[e._v("3 points")]),e._v(". In addition the team whose member is doing the humming gets also awarded "),a("b",[e._v("3 points")]),e._v(" as long as anyone guesses the songs. This means that the team performing can get a total of "),a("b",[e._v("6 points")]),e._v(" if they are the ones to guess the song correctly. ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" If there are only three players they each form their own team. Every round is performed for every player regardless of the chosen activity. When a term is successfully guessed the player guessing and player performing both get "),a("b",[e._v("3 points")]),e._v(" each. ")])}],i=a("fe1a"),s={name:"Rules",components:{HomeFab:i["a"]}},r=s,l=a("2877"),h=Object(l["a"])(r,n,o,!1,null,null,null);t["default"]=h.exports},b585:function(e,t,a){"use strict";var n=a("db4e"),o=a.n(n);o.a},db4e:function(e,t,a){},fe1a:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-btn",{attrs:{id:"home",fab:"",large:"",to:"/"}},[a("v-icon",[e._v("mdi-home")])],1)},o=[],i=(a("b585"),a("2877")),s=a("6544"),r=a.n(s),l=a("8336"),h=a("132d"),c={},u=Object(i["a"])(c,n,o,!1,null,null,null);t["a"]=u.exports;r()(u,{VBtn:l["a"],VIcon:h["a"]})}}]);
//# sourceMappingURL=chunk-5ab01a6b.6ee3083a.js.map