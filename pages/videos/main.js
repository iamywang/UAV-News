require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([3],{"/C+A":function(t,i,s){"use strict";var e=s("kzMD"),a=s("TDe6");i.a={components:{videox:e.a,tip:a.a},onLoad:function(){wx.setNavigationBarTitle({title:"视频"});var t=this;wx.cloud.database().collection("videos").get({success:function(i){t.videolist=i.data}})},onPullDownRefresh:function(){var t=this;wx.cloud.database().collection("videos").get({success:function(i){t.videolist=i.data}})},data:function(){return{videolist:[]}}}},"/iu9":function(t,i,s){"use strict";var e=s("/C+A"),a=s("3B7e");var n=function(t){s("dzBO")},c=s("ybqe")(e.a,a.a,n,"data-v-b1a5f364",null);i.a=c.exports},"3B7e":function(t,i,s){"use strict";var e={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"mainc"},[s("tip",{attrs:{name:"最新视频",mpcomid:"0"}}),t._v(" "),t._m(0),t._v(" "),t._l(t.videolist,function(t,i){return s("div",[s("videox",{attrs:{name:t.name,date:t.date,time:t.time,comment:t.comment,src:t.videosrc,back:t.videoback,mpcomid:"1_"+i}})],1)}),t._v(" "),s("tip",{attrs:{name:"正在直播",mpcomid:"2"}}),t._v(" "),t._m(1),t._v(" "),t._l(t.videolist,function(t,i){return s("div",[s("videox",{attrs:{name:t.name,date:t.date,time:t.time,comment:t.comment,src:t.videosrc,back:t.videoback,mpcomid:"3_"+i}})],1)})],2)},staticRenderFns:[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"button-group"},[s("div",{staticClass:"button-plus"},[s("a",{staticClass:"circle-button",staticStyle:{background:"url('https://www.easyicon.net/api/resizeApi.php?id=1170634&size=48')"},attrs:{href:"../error/main"}}),t._v(" "),s("div",{staticClass:"button-text"},[t._v("最新视频")])]),t._v(" "),s("div",{staticClass:"button-plus"},[s("a",{staticClass:"circle-button",staticStyle:{background:"url('https://www.easyicon.net/api/resizeApi.php?id=1170634&size=48')"},attrs:{href:"../error/main"}}),t._v(" "),s("div",{staticClass:"button-text"},[t._v("一周热点")])]),t._v(" "),s("div",{staticClass:"button-plus"},[s("a",{staticClass:"circle-button",staticStyle:{background:"url('https://www.easyicon.net/api/resizeApi.php?id=1170634&size=48')"},attrs:{href:"../error/main"}}),t._v(" "),s("div",{staticClass:"button-text"},[t._v("网络热议")])]),t._v(" "),s("div",{staticClass:"button-plus"},[s("a",{staticClass:"circle-button",staticStyle:{background:"url('https://www.easyicon.net/api/resizeApi.php?id=1170634&size=48')"},attrs:{href:"../error/main"}}),t._v(" "),s("div",{staticClass:"button-text"},[t._v("行业前沿")])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"button-group"},[s("div",{staticClass:"button-plus"},[s("a",{staticClass:"circle-button",staticStyle:{background:"url('https://www.easyicon.net/api/resizeApi.php?id=1170634&size=48')"},attrs:{href:"../error/main"}}),t._v(" "),s("div",{staticClass:"button-text"},[t._v("正在直播")])]),t._v(" "),s("div",{staticClass:"button-plus"},[s("a",{staticClass:"circle-button",staticStyle:{background:"url('https://www.easyicon.net/api/resizeApi.php?id=1170634&size=48')"},attrs:{href:"../error/main"}}),t._v(" "),s("div",{staticClass:"button-text"},[t._v("热门直播")])]),t._v(" "),s("div",{staticClass:"button-plus"},[s("a",{staticClass:"circle-button",staticStyle:{background:"url('https://www.easyicon.net/api/resizeApi.php?id=1170634&size=48')"},attrs:{href:"../error/main"}}),t._v(" "),s("div",{staticClass:"button-text"},[t._v("直播回看")])])])}]};i.a=e},dzBO:function(t,i){},so5v:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("5nAL"),a=s.n(e),n=s("/iu9");a.a.config.errorHandler=function(t){console&&console.error&&console.error(t)},new a.a(n.a).$mount()}},["so5v"]);