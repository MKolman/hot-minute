(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58a3b572"],{"0bc6":function(t,e,i){},"132d":function(t,e,i){"use strict";i("7db0"),i("caad"),i("c975"),i("fb6a"),i("45fc"),i("a9e3"),i("2532"),i("498a"),i("c96a");var s,n=i("5530"),a=(i("4804"),i("7e2b")),r=i("a9ad"),o=i("af2b"),l=i("7560"),u=i("80d2"),c=i("2b0e"),h=i("58df");function d(t){return["fas","far","fal","fab","fad"].some((function(e){return t.includes(e)}))}function f(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(s||(s={}));var v=Object(h["a"])(a["a"],r["a"],o["a"],l["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(u["r"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(u["n"])(t).find((function(e){return t[e]}));return e&&s[e]||Object(u["e"])(this.size)},getDefaultData:function(){var t={staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(n["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$};return t},applyColors:function(t){t.class=Object(n["a"])(Object(n["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var i=[],s=this.getDefaultData(),n="material-icons",a=t.indexOf("-"),r=a<=-1;r?i.push(t):(n=t.slice(0,a),d(n)&&(n="")),s.class[n]=!0,s.class[t]=!r;var o=this.getSize();return o&&(s.style={fontSize:o}),this.applyColors(s),e(this.hasClickListener?"button":this.tag,s,i)},renderSvgIcon:function(t,e){var i=this.getSize(),s=Object(n["a"])(Object(n["a"])({},this.getDefaultData()),{},{style:i?{fontSize:i,height:i,width:i}:void 0});s.class["v-icon--svg"]=!0,this.applyColors(s);var a={attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:i||"24",width:i||"24",role:"img","aria-hidden":!0}};return e(this.hasClickListener?"button":"span",s,[e("svg",a,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var i=this.getDefaultData();i.class["v-icon--is-component"]=!0;var s=this.getSize();s&&(i.style={fontSize:s,height:s,width:s}),this.applyColors(i);var n=t.component;return i.props=t.props,i.nativeOn=i.on,e(n,i)}},render:function(t){var e=this.getIcon();return"string"===typeof e?f(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=c["a"].extend({name:"v-icon",$_wrapperFor:v,functional:!0,render:function(t,e){var i=e.data,s=e.children,n="";return i.domProps&&(n=i.domProps.textContent||i.domProps.innerHTML||n,delete i.domProps.textContent,delete i.domProps.innerHTML),t(v,i,n?[n]:s)}})},"1b2c":function(t,e,i){},"26d3":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"text-page"},[i("h1",[t._v(" Settings ")]),i("ul",[i("li",[i("router-link",{attrs:{to:"rules"}},[t._v("Rules")])],1),i("li",[i("router-link",{attrs:{to:"about"}},[t._v("About")])],1)]),i("v-subheader",[t._v(" Activity selection animation length: "+t._s(t.$store.state.animationTimeS)+"s ")]),i("v-slider",{attrs:{min:"0",max:"20",step:"0.1","thumb-label":""},scopedSlots:t._u([{key:"thumb-label",fn:function(e){var i=e.value;return[t._v(" "+t._s(i+"s")+" ")]}}]),model:{value:t.$store.state.animationTimeS,callback:function(e){t.$set(t.$store.state,"animationTimeS",e)},expression:"$store.state.animationTimeS"}}),i("v-subheader",[t._v(" Probability of humming bomb: "+t._s(t.$store.state.bombProbability)+" ")]),i("v-slider",{attrs:{min:"0",max:"1",step:"0.01","thumb-label":""},model:{value:t.$store.state.bombProbability,callback:function(e){t.$set(t.$store.state,"bombProbability",e)},expression:"$store.state.bombProbability"}}),i("HomeFab")],1)},n=[],a=i("fe1a"),r={name:"Settings",components:{HomeFab:a["a"]},data:function(){return{slider:0}}},o=r,l=(i("e1c8"),i("2877")),u=i("6544"),c=i.n(u),h=(i("99af"),i("caad"),i("c975"),i("d81d"),i("a9e3"),i("b680"),i("d3b7"),i("25f0"),i("2532"),i("498a"),i("ade3")),d=i("5530"),f=(i("9e29"),i("4de4"),i("ac1f"),i("1276"),i("d191"),i("9d26")),v=(i("1b2c"),i("a9ad")),p=i("7560"),m=i("58df"),b=i("80d2"),g=Object(m["a"])(p["a"]).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render:function(t,e){var i=e.children,s=e.listeners,n=e.props,a={staticClass:"v-label",class:Object(d["a"])({"v-label--active":n.value,"v-label--is-disabled":n.disabled},Object(p["b"])(e)),attrs:{for:n.for,"aria-hidden":!n.for},on:s,style:{left:Object(b["e"])(n.left),right:Object(b["e"])(n.right),position:n.absolute?"absolute":"relative"},ref:"label"};return t("label",v["a"].options.methods.setTextColor(n.focused&&n.color,a),i)}}),y=g,k=(i("8ff2"),Object(m["a"])(v["a"],p["a"]).extend({name:"v-messages",props:{value:{type:Array,default:function(){return[]}}},methods:{genChildren:function(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage:function(t,e){return this.$createElement("div",{staticClass:"v-messages__message",key:e},Object(b["k"])(this,"default",{message:t,key:e})||[t])}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}})),S=k,C=i("7e2b"),_=(i("fb6a"),i("53ca")),$=i("3206"),O=i("d9bd"),x=Object(m["a"])(v["a"],Object($["a"])("form"),p["a"]),V=x.extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:function(){return[]}},messages:{type:[String,Array],default:function(){return[]}},readonly:Boolean,rules:{type:Array,default:function(){return[]}},success:Boolean,successMessages:{type:[String,Array],default:function(){return[]}},validateOnBlur:Boolean,value:{required:!1}},data:function(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor:function(){if(!this.isDisabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError:function(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess:function(){return this.internalSuccessMessages.length>0||this.success},externalError:function(){return this.internalErrorMessages.length>0||this.error},hasMessages:function(){return this.validationTarget.length>0},hasState:function(){return!this.isDisabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages:function(){return this.genInternalMessages(this.errorMessages)},internalMessages:function(){return this.genInternalMessages(this.messages)},internalSuccessMessages:function(){return this.genInternalMessages(this.successMessages)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("input",t)}},isDisabled:function(){return this.disabled||!!this.form&&this.form.disabled},isInteractive:function(){return!this.isDisabled&&!this.isReadonly},isReadonly:function(){return this.readonly||!!this.form&&this.form.readonly},shouldValidate:function(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations:function(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState:function(){if(!this.isDisabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget:function(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages.length>0?this.internalSuccessMessages:this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler:function(t,e){Object(b["g"])(t,e)||this.validate()},deep:!0},internalValue:function(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused:function(t){t||this.isDisabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting:function(){var t=this;setTimeout((function(){t.hasInput=!1,t.hasFocused=!1,t.isResetting=!1,t.validate()}),0)},hasError:function(t){this.shouldValidate&&this.$emit("update:error",t)},value:function(t){this.lazyValue=t}},beforeMount:function(){this.validate()},created:function(){this.form&&this.form.register(this)},beforeDestroy:function(){this.form&&this.form.unregister(this)},methods:{genInternalMessages:function(t){return t?Array.isArray(t)?t:[t]:[]},reset:function(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:void 0},resetValidation:function(){this.isResetting=!0},validate:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0,i=[];e=e||this.internalValue,t&&(this.hasInput=this.hasFocused=!0);for(var s=0;s<this.rules.length;s++){var n=this.rules[s],a="function"===typeof n?n(e):n;!1===a||"string"===typeof a?i.push(a||""):"boolean"!==typeof a&&Object(O["b"])("Rules should return a string or boolean, received '".concat(Object(_["a"])(a),"' instead"),this)}return this.errorBucket=i,this.valid=0===i.length,this.valid}}}),j=(i("b64b"),i("6b75"));function w(t){if(Array.isArray(t))return Object(j["a"])(t)}i("a4d3"),i("e01a"),i("d28b"),i("a630"),i("3ca3"),i("ddb0");function B(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var M=i("06c5");function T(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function D(t){return w(t)||B(t)||Object(M["a"])(t)||T()}var L=i("3835"),E=i("b85c"),z={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function F(t){var e,i={},s=Object(E["a"])(t.split(z.styleList));try{for(s.s();!(e=s.n()).done;){var n=e.value,a=n.split(z.styleProp),r=Object(L["a"])(a,2),o=r[0],l=r[1];o=o.trim(),o&&("string"===typeof l&&(l=l.trim()),i[Object(b["b"])(o)]=l)}}catch(u){s.e(u)}finally{s.f()}return i}function I(){var t,e={},i=arguments.length;while(i--)for(var s=0,n=Object.keys(arguments[i]);s<n.length;s++)switch(t=n[s],t){case"class":case"directives":arguments[i][t]&&(e[t]=P(e[t],arguments[i][t]));break;case"style":arguments[i][t]&&(e[t]=A(e[t],arguments[i][t]));break;case"staticClass":if(!arguments[i][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[i][t].trim();break;case"on":case"nativeOn":arguments[i][t]&&(e[t]=N(e[t],arguments[i][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[i][t])break;e[t]||(e[t]={}),e[t]=Object(d["a"])(Object(d["a"])({},arguments[i][t]),e[t]);break;default:e[t]||(e[t]=arguments[i][t])}return e}function A(t,e){return t?e?(t=Object(b["t"])("string"===typeof t?F(t):t),t.concat("string"===typeof e?F(e):e)):t:e}function P(t,e){return e?t&&t?Object(b["t"])(t).concat(e):e:t}function N(t,e){if(!t)return e;if(!e)return t;for(var i,s=0,n=Object.keys(e);s<n.length;s++){var a;if(i=n[s],t[i])t[i]=Object(b["t"])(t[i]),(a=t[i]).push.apply(a,D(Object(b["t"])(e[i])));else t[i]=e[i]}return t}var R=Object(m["a"])(C["a"],V),q=R.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data:function(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes:function(){return Object(d["a"])({"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.isDisabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&null!=this.loading,"v-input--is-readonly":this.isReadonly,"v-input--dense":this.dense},this.themeClasses)},computedId:function(){return this.id||"input-".concat(this._uid)},hasDetails:function(){return this.messagesToDisplay.length>0},hasHint:function(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel:function(){return!(!this.$slots.label&&!this.label)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit(this.$_modelEvent,t)}},isDirty:function(){return!!this.lazyValue},isLabelActive:function(){return this.isDirty},messagesToDisplay:function(){var t=this;return this.hasHint?[this.hint]:this.hasMessages?this.validations.map((function(e){if("string"===typeof e)return e;var i=e(t.internalValue);return"string"===typeof i?i:""})).filter((function(t){return""!==t})):[]},showDetails:function(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.hasDetails}},watch:{value:function(t){this.lazyValue=t}},beforeCreate:function(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent:function(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl:function(){return this.$createElement("div",{staticClass:"v-input__control"},[this.genInputSlot(),this.genMessages()])},genDefaultSlot:function(){return[this.genLabel(),this.$slots.default]},genIcon:function(t,e){var i=this,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=this["".concat(t,"Icon")],a="click:".concat(Object(b["l"])(t)),r=!(!this.listeners$[a]&&!e),o=I({attrs:{"aria-label":r?Object(b["l"])(t).split("-")[0]+" icon":void 0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,light:this.light},on:r?{click:function(t){t.preventDefault(),t.stopPropagation(),i.$emit(a,t),e&&e(t)},mouseup:function(t){t.preventDefault(),t.stopPropagation()}}:void 0},s);return this.$createElement("div",{staticClass:"v-input__icon",class:t?"v-input__icon--".concat(Object(b["l"])(t)):void 0},[this.$createElement(f["a"],o,n)])},genInputSlot:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:Object(b["e"])(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel:function(){return this.hasLabel?this.$createElement(y,{props:{color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages:function(){var t=this;return this.showDetails?this.$createElement(S,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:function(e){return Object(b["k"])(t,"message",e)}}}):null},genSlot:function(t,e,i){if(!i.length)return null;var s="".concat(t,"-").concat(e);return this.$createElement("div",{staticClass:"v-input__".concat(s),ref:s},i)},genPrependSlot:function(){var t=[];return this.$slots.prepend?t.push(this.$slots.prepend):this.prependIcon&&t.push(this.genIcon("prepend")),this.genSlot("prepend","outer",t)},genAppendSlot:function(){var t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","outer",t)},onClick:function(t){this.$emit("click",t)},onMouseDown:function(t){this.hasMouseDown=!0,this.$emit("mousedown",t)},onMouseUp:function(t){this.hasMouseDown=!1,this.$emit("mouseup",t)}},render:function(t){return t("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}}),H=q;function K(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length,s=new Array(i>1?i-1:0),n=1;n<i;n++)s[n-1]=arguments[n];return(t=Array()).concat.apply(t,[e].concat(s))}function W(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",i=arguments.length>2?arguments[2]:void 0;return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:i},origin:{type:String,default:e}},render:function(e,i){var s="transition".concat(i.props.group?"-group":""),n={props:{name:t,mode:i.props.mode},on:{beforeEnter:function(t){t.style.transformOrigin=i.props.origin,t.style.webkitTransformOrigin=i.props.origin}}};return i.props.leaveAbsolute&&(n.on.leave=K(n.on.leave,(function(t){return t.style.position="absolute"}))),i.props.hideOnLeave&&(n.on.leave=K(n.on.leave,(function(t){return t.style.display="none"}))),e(s,I(i.data,n),i.children)}}}function U(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:t,functional:!0,props:{mode:{type:String,default:i}},render:function(i,s){return i("transition",I(s.data,{props:{name:t},on:e}),s.children)}}}var Y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e?"width":"height",s="offset".concat(Object(b["s"])(i));return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=Object(h["a"])({transition:t.style.transition,visibility:t.style.visibility,overflow:t.style.overflow},i,t.style[i])},enter:function(e){var n=e._initialStyle,a="".concat(e[s],"px");e.style.setProperty("transition","none","important"),e.style.visibility="hidden",e.style.visibility=n.visibility,e.style.overflow="hidden",e.style[i]="0",e.offsetHeight,e.style.transition=n.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((function(){e.style[i]=a}))},afterEnter:a,enterCancelled:a,leave:function(t){t._initialStyle=Object(h["a"])({transition:"",visibility:"",overflow:t.style.overflow},i,t.style[i]),t.style.overflow="hidden",t.style[i]="".concat(t[s],"px"),t.offsetHeight,requestAnimationFrame((function(){return t.style[i]="0"}))},afterLeave:n,leaveCancelled:n};function n(e){t&&e._parent&&e._parent.classList.remove(t),a(e)}function a(t){var e=t._initialStyle[i];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[i]=e),delete t._initialStyle}},X=(W("carousel-transition"),W("carousel-reverse-transition"),W("tab-transition"),W("tab-reverse-transition"),W("menu-transition"),W("fab-transition","center center","out-in"),W("dialog-transition"),W("dialog-bottom-transition"),W("fade-transition")),J=W("scale-transition"),G=(W("scroll-x-transition"),W("scroll-x-reverse-transition"),W("scroll-y-transition"),W("scroll-y-reverse-transition"),W("slide-x-transition")),Q=(W("slide-x-reverse-transition"),W("slide-y-transition"),W("slide-y-reverse-transition"),U("expand-transition",Y()),U("expand-x-transition",Y("",!0)),i("2b0e")),Z=(i("c7cd"),i("6ece"),i("fe6c"));function tt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return Q["a"].extend({name:"proxyable",model:{prop:t,event:e},props:Object(h["a"])({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(h["a"])({},t,(function(t){this.internalLazyValue=t}))})}var et=tt(),it=et,st=Object(m["a"])(v["a"],Object(Z["b"])(["absolute","fixed","top","bottom"]),it,p["a"]),nt=st.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(b["e"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(b["e"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(h["a"])(t,this.isReversed?"right":"left",Object(b["e"])(this.normalizedValue,"%")),Object(h["a"])(t,"width",Object(b["e"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return Object(d["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?X:G},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(b["e"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(b["k"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(h["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),i=e.width;this.internalValue=t.offsetX/i*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(b["e"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),at=nt,rt=Q["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(at,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}});i("45fc");function ot(){return!0}function lt(t,e,i){var s="function"===typeof i.value?i.value:i.value.handler,n="object"===Object(_["a"])(i.value)&&i.value.closeConditional||ot;if(t&&!1!==n(t)&&!("isTrusted"in t&&!t.isTrusted||"pointerType"in t&&!t.pointerType)){var a=("object"===Object(_["a"])(i.value)&&i.value.include||function(){return[]})();a.push(e),!a.some((function(e){return e.contains(t.target)}))&&setTimeout((function(){n(t)&&s&&s(t)}),0)}}var ut={inserted:function(t,e){var i=function(i){return lt(i,t,e)},s=document.querySelector("[data-app]")||document.body;s.addEventListener("click",i,!0),t._clickOutside=i},unbind:function(t){if(t._clickOutside){var e=document.querySelector("[data-app]")||document.body;e&&e.removeEventListener("click",t._clickOutside,!0),delete t._clickOutside}}},ct=ut,ht=Object(m["a"])(H,rt).extend({name:"v-slider",directives:{ClickOutside:ct},mixins:[rt],props:{disabled:Boolean,inverseLabel:Boolean,max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:1},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:function(t){return"boolean"===typeof t||"always"===t}},thumbSize:{type:[Number,String],default:32},tickLabels:{type:Array,default:function(){return[]}},ticks:{type:[Boolean,String],default:!1,validator:function(t){return"boolean"===typeof t||"always"===t}},tickSize:{type:[Number,String],default:2},trackColor:String,trackFillColor:String,value:[Number,String],vertical:Boolean},data:function(){return{app:null,oldValue:null,keyPressed:0,isFocused:!1,isActive:!1,noClick:!1}},computed:{classes:function(){return Object(d["a"])(Object(d["a"])({},H.options.computed.classes.call(this)),{},{"v-input__slider":!0,"v-input__slider--vertical":this.vertical,"v-input__slider--inverse-label":this.inverseLabel})},internalValue:{get:function(){return this.lazyValue},set:function(t){t=isNaN(t)?this.minValue:t;var e=this.roundValue(Math.min(Math.max(t,this.minValue),this.maxValue));e!==this.lazyValue&&(this.lazyValue=e,this.$emit("input",e))}},trackTransition:function(){return this.keyPressed>=2?"none":""},minValue:function(){return parseFloat(this.min)},maxValue:function(){return parseFloat(this.max)},stepNumeric:function(){return this.step>0?parseFloat(this.step):0},inputWidth:function(){var t=(this.roundValue(this.internalValue)-this.minValue)/(this.maxValue-this.minValue)*100;return t},trackFillStyles:function(){var t,e=this.vertical?"bottom":"left",i=this.vertical?"top":"right",s=this.vertical?"height":"width",n=this.$vuetify.rtl?"auto":"0",a=this.$vuetify.rtl?"0":"auto",r=this.isDisabled?"calc(".concat(this.inputWidth,"% - 10px)"):"".concat(this.inputWidth,"%");return t={transition:this.trackTransition},Object(h["a"])(t,e,n),Object(h["a"])(t,i,a),Object(h["a"])(t,s,r),t},trackStyles:function(){var t,e=this.vertical?this.$vuetify.rtl?"bottom":"top":this.$vuetify.rtl?"left":"right",i=this.vertical?"height":"width",s="0px",n=this.isDisabled?"calc(".concat(100-this.inputWidth,"% - 10px)"):"calc(".concat(100-this.inputWidth,"%)");return t={transition:this.trackTransition},Object(h["a"])(t,e,s),Object(h["a"])(t,i,n),t},showTicks:function(){return this.tickLabels.length>0||!(this.isDisabled||!this.stepNumeric||!this.ticks)},numTicks:function(){return Math.ceil((this.maxValue-this.minValue)/this.stepNumeric)},showThumbLabel:function(){return!this.isDisabled&&!(!this.thumbLabel&&!this.$scopedSlots["thumb-label"])},computedTrackColor:function(){if(!this.isDisabled)return this.trackColor?this.trackColor:this.isDark?this.validationState:this.validationState||"primary lighten-3"},computedTrackFillColor:function(){if(!this.isDisabled)return this.trackFillColor?this.trackFillColor:this.validationState||this.computedColor},computedThumbColor:function(){return this.thumbColor?this.thumbColor:this.validationState||this.computedColor}},watch:{min:function(t){var e=parseFloat(t);e>this.internalValue&&this.$emit("input",e)},max:function(t){var e=parseFloat(t);e<this.internalValue&&this.$emit("input",e)},value:{handler:function(t){this.internalValue=t}}},beforeMount:function(){this.internalValue=this.value},mounted:function(){this.app=document.querySelector("[data-app]")||Object(O["c"])("Missing v-app or a non-body wrapping element with the [data-app] attribute",this)},methods:{genDefaultSlot:function(){var t=[this.genLabel()],e=this.genSlider();return this.inverseLabel?t.unshift(e):t.push(e),t.push(this.genProgress()),t},genSlider:function(){return this.$createElement("div",{class:Object(d["a"])({"v-slider":!0,"v-slider--horizontal":!this.vertical,"v-slider--vertical":this.vertical,"v-slider--focused":this.isFocused,"v-slider--active":this.isActive,"v-slider--disabled":this.isDisabled,"v-slider--readonly":this.isReadonly},this.themeClasses),directives:[{name:"click-outside",value:this.onBlur}],on:{click:this.onSliderClick}},this.genChildren())},genChildren:function(){return[this.genInput(),this.genTrackContainer(),this.genSteps(),this.genThumbContainer(this.internalValue,this.inputWidth,this.isActive,this.isFocused,this.onThumbMouseDown,this.onFocus,this.onBlur)]},genInput:function(){return this.$createElement("input",{attrs:Object(d["a"])({value:this.internalValue,id:this.computedId,disabled:this.isDisabled,readonly:!0,tabindex:-1},this.$attrs)})},genTrackContainer:function(){var t=[this.$createElement("div",this.setBackgroundColor(this.computedTrackColor,{staticClass:"v-slider__track-background",style:this.trackStyles})),this.$createElement("div",this.setBackgroundColor(this.computedTrackFillColor,{staticClass:"v-slider__track-fill",style:this.trackFillStyles}))];return this.$createElement("div",{staticClass:"v-slider__track-container",ref:"track"},t)},genSteps:function(){var t=this;if(!this.step||!this.showTicks)return null;var e=parseFloat(this.tickSize),i=Object(b["f"])(this.numTicks+1),s=this.vertical?"bottom":this.$vuetify.rtl?"right":"left",n=this.vertical?this.$vuetify.rtl?"left":"right":"top";this.vertical&&i.reverse();var a=i.map((function(i){var a,r=[];t.tickLabels[i]&&r.push(t.$createElement("div",{staticClass:"v-slider__tick-label"},t.tickLabels[i]));var o=i*(100/t.numTicks),l=t.$vuetify.rtl?100-t.inputWidth<o:o<t.inputWidth;return t.$createElement("span",{key:i,staticClass:"v-slider__tick",class:{"v-slider__tick--filled":l},style:(a={width:"".concat(e,"px"),height:"".concat(e,"px")},Object(h["a"])(a,s,"calc(".concat(o,"% - ").concat(e/2,"px)")),Object(h["a"])(a,n,"calc(50% - ".concat(e/2,"px)")),a)},r)}));return this.$createElement("div",{staticClass:"v-slider__ticks-container",class:{"v-slider__ticks-container--always-show":"always"===this.ticks||this.tickLabels.length>0}},a)},genThumbContainer:function(t,e,i,s,n,a,r){var o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"thumb",l=[this.genThumb()],u=this.genThumbLabelContent(t);return this.showThumbLabel&&l.push(this.genThumbLabel(u)),this.$createElement("div",this.setTextColor(this.computedThumbColor,{ref:o,key:o,staticClass:"v-slider__thumb-container",class:{"v-slider__thumb-container--active":i,"v-slider__thumb-container--focused":s,"v-slider__thumb-container--show-label":this.showThumbLabel},style:this.getThumbContainerStyles(e),attrs:Object(d["a"])({role:"slider",tabindex:this.isDisabled?-1:this.$attrs.tabindex?this.$attrs.tabindex:0,"aria-label":this.label,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-valuenow":this.internalValue,"aria-readonly":String(this.isReadonly),"aria-orientation":this.vertical?"vertical":"horizontal"},this.$attrs),on:{focus:a,blur:r,keydown:this.onKeyDown,keyup:this.onKeyUp,touchstart:n,mousedown:n}}),l)},genThumbLabelContent:function(t){return this.$scopedSlots["thumb-label"]?this.$scopedSlots["thumb-label"]({value:t}):[this.$createElement("span",[String(t)])]},genThumbLabel:function(t){var e=Object(b["e"])(this.thumbSize),i=this.vertical?"translateY(20%) translateY(".concat(Number(this.thumbSize)/3-1,"px) translateX(55%) rotate(135deg)"):"translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)";return this.$createElement(J,{props:{origin:"bottom center"}},[this.$createElement("div",{staticClass:"v-slider__thumb-label-container",directives:[{name:"show",value:this.isFocused||this.isActive||"always"===this.thumbLabel}]},[this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb-label",style:{height:e,width:e,transform:i}}),[this.$createElement("div",t)])])])},genThumb:function(){return this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb"}))},getThumbContainerStyles:function(t){var e=this.vertical?"top":"left",i=this.$vuetify.rtl?100-t:t;return i=this.vertical?100-i:i,Object(h["a"])({transition:this.trackTransition},e,"".concat(i,"%"))},onThumbMouseDown:function(t){t.preventDefault(),this.oldValue=this.internalValue,this.keyPressed=2,this.isActive=!0;var e=!b["q"]||{passive:!0,capture:!0},i=!!b["q"]&&{passive:!0};"touches"in t?(this.app.addEventListener("touchmove",this.onMouseMove,i),Object(b["a"])(this.app,"touchend",this.onSliderMouseUp,e)):(this.app.addEventListener("mousemove",this.onMouseMove,i),Object(b["a"])(this.app,"mouseup",this.onSliderMouseUp,e)),this.$emit("start",this.internalValue)},onSliderMouseUp:function(t){t.stopPropagation(),this.keyPressed=0;var e=!!b["q"]&&{passive:!0};this.app.removeEventListener("touchmove",this.onMouseMove,e),this.app.removeEventListener("mousemove",this.onMouseMove,e),this.$emit("mouseup",t),this.$emit("end",this.internalValue),Object(b["g"])(this.oldValue,this.internalValue)||(this.$emit("change",this.internalValue),this.noClick=!0),this.isActive=!1},onMouseMove:function(t){var e=this.parseMouseMove(t),i=e.value;this.internalValue=i},onKeyDown:function(t){if(this.isInteractive){var e=this.parseKeyDown(t,this.internalValue);null==e||e<this.minValue||e>this.maxValue||(this.internalValue=e,this.$emit("change",e))}},onKeyUp:function(){this.keyPressed=0},onSliderClick:function(t){if(this.noClick)this.noClick=!1;else{var e=this.$refs.thumb;e.focus(),this.onMouseMove(t),this.$emit("change",this.internalValue)}},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},parseMouseMove:function(t){var e=this.vertical?"top":"left",i=this.vertical?"height":"width",s=this.vertical?"clientY":"clientX",n=this.$refs.track.getBoundingClientRect(),a=n[e],r=n[i],o="touches"in t?t.touches[0][s]:t[s],l=Math.min(Math.max((o-a)/r,0),1)||0;this.vertical&&(l=1-l),this.$vuetify.rtl&&(l=1-l);var u=o>=a&&o<=a+r,c=parseFloat(this.min)+l*(this.maxValue-this.minValue);return{value:c,isInsideTrack:u}},parseKeyDown:function(t,e){if(this.isInteractive){var i=b["m"].pageup,s=b["m"].pagedown,n=b["m"].end,a=b["m"].home,r=b["m"].left,o=b["m"].right,l=b["m"].down,u=b["m"].up;if([i,s,n,a,r,o,l,u].includes(t.keyCode)){t.preventDefault();var c=this.stepNumeric||1,h=(this.maxValue-this.minValue)/c;if([r,o,l,u].includes(t.keyCode)){this.keyPressed+=1;var d=this.$vuetify.rtl?[r,u]:[o,u],f=d.includes(t.keyCode)?1:-1,v=t.shiftKey?3:t.ctrlKey?2:1;e+=f*c*v}else if(t.keyCode===a)e=this.minValue;else if(t.keyCode===n)e=this.maxValue;else{var p=t.keyCode===s?1:-1;e-=p*c*(h>100?h/10:10)}return e}}},roundValue:function(t){if(!this.stepNumeric)return t;var e=this.step.toString().trim(),i=e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0,s=this.minValue%this.stepNumeric,n=Math.round((t-s)/this.stepNumeric)*this.stepNumeric+s;return parseFloat(Math.min(n,this.maxValue).toFixed(i))}}}),dt=(i("0bc6"),Object(m["a"])(p["a"]).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:Object(d["a"])({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})),ft=Object(l["a"])(o,s,n,!1,null,null,null);e["default"]=ft.exports;c()(ft,{VSlider:ht,VSubheader:dt})},"3f57":function(t,e,i){},4804:function(t,e,i){},"6ece":function(t,e,i){},"8ff2":function(t,e,i){},"9d26":function(t,e,i){"use strict";var s=i("132d");e["a"]=s["a"]},"9e29":function(t,e,i){},b585:function(t,e,i){"use strict";var s=i("db4e"),n=i.n(s);n.a},d191:function(t,e,i){},db4e:function(t,e,i){},e1c8:function(t,e,i){"use strict";var s=i("3f57"),n=i.n(s);n.a},fe1a:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-btn",{attrs:{id:"home",fab:"",large:"",to:"/"}},[i("v-icon",[t._v("mdi-home")])],1)},n=[],a=(i("b585"),i("2877")),r=i("6544"),o=i.n(r),l=i("8336"),u=i("132d"),c={},h=Object(a["a"])(c,s,n,!1,null,null,null);e["a"]=h.exports;o()(h,{VBtn:l["a"],VIcon:u["a"]})}}]);
//# sourceMappingURL=chunk-58a3b572.3144016e.js.map