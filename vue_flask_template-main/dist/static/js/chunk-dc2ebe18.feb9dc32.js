(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dc2ebe18"],{"02dd":function(t,e,a){},"303a":function(t,e,a){"use strict";a("30e5")},"30e5":function(t,e,a){},3529:function(t,e,a){"use strict";a("02dd")},f092:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"fill-height messaging pa-0",attrs:{fluid:""}},[a("v-row",{staticClass:"fill-height",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("chat-window")],1)],1)],1)},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chat_window"},[a("v-toolbar",{staticClass:"chat_window__toolbar",attrs:{text:"",light:""}},[a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{color:"text--secondary"}},[t._v("mdi-arrow-left")])],1),a("v-spacer"),a("v-toolbar-title",[a("v-subheader",[t._v("The server will not store the message")])],1),a("v-spacer"),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({attrs:{slot:"activator",icon:""},slot:"activator"},s),[a("v-icon",{attrs:{color:"text--secondary"}},[t._v("mdi-plus")])],1)]}}])},[a("span",[t._v("Add user")])])],1),a("v-card",[a("vue-perfect-scrollbar",{ref:"scrollbar",staticClass:"chat_window__scrollbar grey lighten-5",style:t.computeHeight},[a("v-card-text",{staticClass:"messaging_list pa-3"},[t._l(t.getMessages,(function(t,e){return[a("chat-messaging-item",{key:e,attrs:{username:t.username,text:t.text,"created-at":t.createdAt}})]}))],2),a("div",{attrs:{id:"#messageBottom"}})],1)],1),a("div",{staticClass:"chat_window__input"},[a("v-text-field",{staticClass:"rounded-0",attrs:{"full-width":"",text:"",clearable:"",solo:"","hide-details":"",autofocus:"","aria-autocomplete":"off","append-icon":"mdi-send",label:"Type some message here"},on:{"click:append":t.handleSendMessage,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSendMessage.apply(null,arguments)}},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}},[a("div",{attrs:{slot:"prepend-inner"},slot:"prepend-inner"},[a("v-icon",[t._v("mdi-image-outline")]),a("v-icon",[t._v("mdi-face")])],1)])],1)],1)},i=[],o=a("5530"),c=a("9d63"),l=a.n(c),u=a("2f62"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"messaging_item",class:t.rowReverse},[a("div",{staticClass:"messaging_item__avatar"},[a("c-avatar",{attrs:{size:36,username:t.username,src:t.computeAvatar(t.username),status:"online"}})],1),a("div",{staticClass:"messaging_item__body"},[a("div",{staticClass:"pa-2"},[t._v(" "+t._s(t.text)+" ")]),a("div",{staticClass:"caption px-2 text--secondary"},[t._v(" "+t._s(t._f("formateDate")(t.createdAt))+" ")])])])},m=[],g=(a("a9e3"),a("f126")),f=a("b166"),v={components:{CAvatar:g["a"]},filters:{formateDate:function(t){return Object(f["a"])(t,"yyyy-MM-dd H:mm:s")}},props:{username:[Number,String],status:[Number,String],text:[String],createdAt:[String,Number]},data:function(){return{}},computed:Object(o["a"])(Object(o["a"])({},Object(u["b"])(["getAvatar","getUsername","getClientId","getStatusByName"])),{},{isMyOwn:function(){return this.username===this.getUsername},rowReverse:function(){return{"flex-row-reverse":!this.isMyOwn}}}),methods:{computeAvatar:function(t){return this.getUsername===t?this.getAvatar:""}}},h=v,p=(a("303a"),a("2877")),b=Object(p["a"])(h,d,m,!1,null,"4adab954",null),_=b.exports,w={components:{VuePerfectScrollbar:l.a,ChatMessagingItem:_},props:{height:{type:String,default:null}},data:function(){return{message:null}},computed:Object(o["a"])(Object(o["a"])({},Object(u["b"])(["getMessages"])),{},{computeHeight:function(){return{height:this.height||""}}}),watch:{"getMessages.length":{handler:function(){var t=this;this.$nextTick((function(){var e=t.$refs.scrollbar.$el;e.scrollTop=e.scrollHeight}))}}},created:function(){},methods:{handleSendMessage:function(){this.message&&(this.$store.dispatch("sendMessage",this.message),this.message=null)}}},y=w,C=(a("3529"),a("6544")),x=a.n(C),V=a("8336"),k=a("b0af"),O=a("99d9"),S=a("132d"),M=a("2fa4"),j=a("e0c7"),T=a("8654"),A=a("71d9"),$=a("2a7f"),E=a("3a2f"),H=Object(p["a"])(y,r,i,!1,null,"5baf5c28",null),N=H.exports;x()(H,{VBtn:V["a"],VCard:k["a"],VCardText:O["b"],VIcon:S["a"],VSpacer:M["a"],VSubheader:j["a"],VTextField:T["a"],VToolbar:A["a"],VToolbarTitle:$["b"],VTooltip:E["a"]});var B={components:{ChatWindow:N},data:function(){return{}},computed:{}},I=B,R=a("62ad"),U=a("a523"),D=a("0fd9"),J=Object(p["a"])(I,s,n,!1,null,null,null);e["default"]=J.exports;x()(J,{VCol:R["a"],VContainer:U["a"],VRow:D["a"]})}}]);