require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{JYpK:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("5nAL"),i=e.n(a),n=e("iOef");i.a.config.errorHandler=function(t){console&&console.error&&console.error(t)},new i.a(n.a).$mount()},XZQt:function(t,s,e){"use strict";var a=e("cBVB"),i=e("TDe6");s.a={components:{news:a.a,tip:i.a},onLoad:function(t){this.key=t.key,this.search()},data:function(){return{key:"",hotlist:[],reslist:[],hislist:[]}},methods:{search:function(){var t=wx.cloud.database(),s=this;""!==s.key&&t.collection("news").orderBy("_id","desc").where({tag:s.key}).get({success:function(t){s.reslist=t.data,s.hislist[s.hislist.length]=s.key,s.key=""}})}}}},c25k:function(t,s,e){"use strict";var a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"search-page"},[e("div",{staticClass:"search-box"},[e("img",{staticClass:"pic",attrs:{src:"../../../static/imgs/search.png"}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.key,expression:"key"}],staticClass:"input",attrs:{type:"text",placeholder:"请输入搜索内容...",eventid:"0"},domProps:{value:t.key},on:{input:function(s){s.target.composing||(t.key=s.target.value)}}}),t._v(" "),e("a",{staticClass:"push",attrs:{href:"",eventid:"1"},on:{click:t.search}},[e("img",{staticClass:"pic",attrs:{src:"../../../static/imgs/search.png"}}),t._v("搜索")])]),t._v(" "),e("tip",{attrs:{name:"历史搜索",mpcomid:"0"}}),t._v(" "),e("div",{staticClass:"hot-box"},t._l(t.hislist,function(s,a){return e("div",{staticClass:"hot"},[t._v(t._s(s))])})),t._v(" "),e("tip",{attrs:{name:"热搜词",mpcomid:"1"}}),t._v(" "),t._m(0),t._v(" "),e("tip",{attrs:{name:"结果",mpcomid:"2"}}),t._v(" "),t._l(t.reslist,function(t,s){return e("div",[e("news",{attrs:{name:t.name,date:t.date,tag:t.tag,comment:t.comment,text:t.newstext,pic:t.newsback,commentlist:JSON.stringify(t.commentlist),id:t._id,mpcomid:"3_"+s}})],1)})],2)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"hot-box"},[e("div",{staticClass:"hot"},[t._v("无人机")]),t._v(" "),e("div",{staticClass:"hot"},[t._v("太阳能")]),t._v(" "),e("div",{staticClass:"hot"},[t._v("地狱之门")]),t._v(" "),e("div",{staticClass:"hot"},[t._v("中国无人机")]),t._v(" "),e("div",{staticClass:"hot"},[t._v("环球网")]),t._v(" "),e("div",{staticClass:"hot"},[t._v("无人机之家")])])}]};s.a=a},iOef:function(t,s,e){"use strict";var a=e("XZQt"),i=e("c25k");var n=function(t){e("owXv")},c=e("ybqe")(a.a,i.a,n,"data-v-8f69ab24",null);s.a=c.exports},owXv:function(t,s){}},["JYpK"]);