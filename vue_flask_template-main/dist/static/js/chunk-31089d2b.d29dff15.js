(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31089d2b"],{5054:function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-card",{attrs:{tile:""}},[a("v-card-title",[a("div",{staticClass:"layout row ma-0 justify-space-between pb-1"},[a("div",{staticClass:"subheading"},[t._v(t._s(t.title))]),a("div",{staticClass:"icon"},[a("v-icon",{attrs:{mini:"",color:t.color}},[t._v(t._s(t.icon))])],1)])]),a("v-card-text",{staticClass:"pt-2"},[a("h3",{staticClass:"headline"},[t._v(t._s(t.subTitle))]),a("v-progress-linear",{attrs:{value:t.value,height:"5",color:t.color}}),a("span",{staticClass:"caption"},[t._v(t._s(t.caption))])],1)],1)},r=[],s=(a("a9e3"),{props:{icon:String,title:String,subTitle:String,value:Number,color:String},computed:{caption:function(){return this.value+"% "+this.subTitle}}}),l=s,c=a("2877"),n=a("6544"),o=a.n(n),u=a("b0af"),d=a("99d9"),v=a("132d"),p=a("8e36"),b=Object(c["a"])(l,e,r,!1,null,null,null);i["a"]=b.exports;o()(b,{VCard:u["a"],VCardText:d["b"],VCardTitle:d["c"],VIcon:v["a"],VProgressLinear:p["a"]})},"777a":function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-subheader",[t._v("Social")])],1),a("v-col",{attrs:{cols:"3"}},[a("mini-statistic-card",{attrs:{icon:"mdi-facebook",title:"100+","sub-title":"Likes",color:"indigo"}})],1),a("v-col",{attrs:{cols:"3"}},[a("mini-statistic-card",{attrs:{icon:"mdi-google",title:"150+","sub-title":"Connections",color:"red"}})],1),a("v-col",{attrs:{cols:"3"}},[a("mini-statistic-card",{attrs:{icon:"mdi-twitter",title:"200+","sub-title":"Followers",color:"light-blue"}})],1),a("v-col",{attrs:{cols:"3"}},[a("mini-statistic-card",{attrs:{icon:"mdi-instagram",title:"50+","sub-title":"Shots",color:"purple"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-subheader",[t._v("Linear Trending")])],1),t._l(t.trending,(function(t,i){return a("v-col",{key:"trending"+i,attrs:{cols:"4"}},[a("linear-statistic-card",{attrs:{title:t.subheading,"sub-title":t.caption,icon:t.icon.label,color:t.icon.color,value:t.linear.value}})],1)})),a("v-col",{attrs:{cols:"12"}},[a("v-subheader",[t._v("Circle Trending")])],1),t._l(t.trending2,(function(t,i){return a("v-col",{key:"c-trending"+i,attrs:{cols:"4"}},[a("circle-statistic-card",{attrs:{title:t.subheading,"sub-title":t.headline,caption:t.caption,icon:t.icon.label,color:t.linear.color,value:t.linear.value}})],1)}))],2)],1)},r=[],s=a("a56e"),l=a("c56c"),c=a("5054"),n={components:{MiniStatisticCard:s["a"],CircleStatisticCard:l["a"],LinearStatisticCard:c["a"]},data:function(){return{trending:[{subheading:"Sales",headline:"2,55",caption:"increase",percent:15,icon:{label:"mdi-trending-up",color:"success"},linear:{value:15,color:"success"}},{subheading:"Revenue",headline:"6,553",caption:"increase",percent:10,icon:{label:"mdi-trending-down",color:"error"},linear:{value:15,color:"error"}},{subheading:"Orders",headline:"5,00",caption:"increase",percent:50,icon:{label:"mdi-arrow-up",color:"info"},linear:{value:50,color:"info"}}],trending2:[{subheading:"Email",headline:"15+",caption:"email opens",percent:15,icon:{label:"mdi-email",color:"info"},linear:{value:15,color:"info"}},{subheading:"Tasks",headline:"90%",caption:"tasks completed.",percent:90,icon:{label:"mdi-view-list",color:"primary"},linear:{value:90,color:"success"}},{subheading:"Issues",headline:"100%",caption:"issues fixed.",percent:100,icon:{label:"mdi-bug",color:"primary"},linear:{value:100,color:"error"}}]}}},o=n,u=a("2877"),d=a("6544"),v=a.n(d),p=a("62ad"),b=a("a523"),g=a("0fd9"),h=a("e0c7"),C=Object(u["a"])(o,e,r,!1,null,null,null);i["default"]=C.exports;v()(C,{VCol:p["a"],VContainer:b["a"],VRow:g["a"],VSubheader:h["a"]})},a56e:function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-card",{attrs:{tile:""}},[a("v-card-text",{staticClass:"pa-0"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{staticClass:"pa-3"},[a("div",{staticClass:"layout justify-center align-center"},[a("v-icon",{attrs:{size:"56px",color:t.color}},[t._v(t._s(t.icon))])],1)]),a("v-col",{staticClass:"pa-3",class:t.color},[a("div",{staticClass:"white--text"},[t._v(t._s(t.title))]),a("span",{staticClass:"white--text"},[t._v(t._s(t.subTitle))])])],1)],1)],1)},r=[],s={props:{icon:String,title:String,subTitle:String,color:String}},l=s,c=a("2877"),n=a("6544"),o=a.n(n),u=a("b0af"),d=a("99d9"),v=a("62ad"),p=a("132d"),b=a("0fd9"),g=Object(c["a"])(l,e,r,!1,null,null,null);i["a"]=g.exports;o()(g,{VCard:u["a"],VCardText:d["b"],VCol:v["a"],VIcon:p["a"],VRow:b["a"]})},c56c:function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-card",{attrs:{tile:""}},[a("v-card-title",[a("div",{staticClass:"layout row ma-0 justify-space-between pb-1"},[a("div",{staticClass:"subheading"},[t._v(t._s(t.title))]),a("div",{staticClass:"icon"},[a("v-icon",{attrs:{color:t.color}},[t._v(t._s(t.icon))])],1)])]),a("v-card-text",[a("div",{staticClass:"justify-center row layout ma-0"},[a("v-progress-circular",{attrs:{size:150,width:15,rotate:-90,value:t.value,color:t.color}},[t._v(" "+t._s(t.value)+" ")])],1)]),a("v-divider"),a("v-card-actions",[a("div",{staticClass:"subheading mr-2"},[t._v(t._s(t.subTitle))]),a("div",{staticClass:"caption"},[t._v(t._s(t.caption))])])],1)},r=[],s=(a("a9e3"),{props:{icon:String,title:String,subTitle:String,caption:String,value:Number,color:String}}),l=s,c=a("2877"),n=a("6544"),o=a.n(n),u=a("b0af"),d=a("99d9"),v=a("ce7e"),p=a("132d"),b=a("490a"),g=Object(c["a"])(l,e,r,!1,null,null,null);i["a"]=g.exports;o()(g,{VCard:u["a"],VCardActions:d["a"],VCardText:d["b"],VCardTitle:d["c"],VDivider:v["a"],VIcon:p["a"],VProgressCircular:b["a"]})}}]);