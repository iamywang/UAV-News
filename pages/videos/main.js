require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([5],{"/C+A":function(t,i,e){"use strict";var o=e("kzMD"),c=e("TDe6"),n=e("fWAk");i.a={components:{videox:o.a,tip:c.a,cirbutton:n.a},onLoad:function(){var t=wx.cloud.database(),i=this;t.collection("videos").orderBy("_id","desc").get({success:function(t){i.videolist=t.data}}),t.collection("lives").orderBy("_id","desc").get({success:function(t){i.livelist=t.data}})},onPullDownRefresh:function(){var t=wx.cloud.database(),i=this;t.collection("videos").orderBy("_id","desc").get({success:function(t){i.videolist=t.data}}),t.collection("lives").orderBy("_id","desc").get({success:function(t){i.livelist=t.data}}),wx.stopPullDownRefresh()},data:function(){return{videolist:[],livelist:[],cirlist:[{name:"最新视频",pic:"../../static/imgs/latest.png",color:"#905555"},{name:"一周热门",pic:"../../static/imgs/hot.png",color:"#13227A"},{name:"网络热议",pic:"../../static/imgs/network.png",color:"#234567"},{name:"行业前沿",pic:"../../static/imgs/technology.png",color:"#14AAAA"}],cirlivelist:[{name:"正在直播",pic:"../../static/imgs/live.png",color:"#364582"},{name:"热门直播",pic:"../../static/imgs/hot.png",color:"#13227A"},{name:"直播回看",pic:"../../static/imgs/backward.png",color:"#808000"}]}}}},"/iu9":function(t,i,e){"use strict";var o=e("/C+A"),c=e("3B7e");var n=function(t){e("dzBO")},s=e("ybqe")(o.a,c.a,n,"data-v-b1a5f364",null);i.a=s.exports},"3B7e":function(t,i,e){"use strict";var o={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"mainc"},[e("tip",{attrs:{name:"最新视频",mpcomid:"0"}}),t._v(" "),e("div",{staticClass:"button-group"},t._l(t.cirlist,function(t,i){return e("cirbutton",{attrs:{name:t.name,color:t.color,pic:t.pic,mpcomid:"1_"+i}})})),t._v(" "),t._l(t.videolist,function(t,i){return e("div",[e("videox",{attrs:{name:t.name,date:t.date,time:t.time,comment:t.comment,src:t.videosrc,back:t.videoback,commentlist:JSON.stringify(t.commentlist),id:t._id,mpcomid:"2_"+i}})],1)}),t._v(" "),e("tip",{attrs:{name:"正在直播",mpcomid:"3"}}),t._v(" "),e("div",{staticClass:"button-group"},t._l(t.cirlivelist,function(t,i){return e("cirbutton",{attrs:{name:t.name,color:t.color,pic:t.pic,mpcomid:"4_"+i}})})),t._v(" "),t._l(t.livelist,function(t,i){return e("div",[e("videox",{attrs:{name:t.name,date:t.date,time:t.time,comment:t.comment,src:t.videosrc,back:t.videoback,commentlist:JSON.stringify(t.commentlist),id:t._id,mpcomid:"5_"+i}})],1)})],2)},staticRenderFns:[]};i.a=o},dzBO:function(t,i){},so5v:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=e("5nAL"),c=e.n(o),n=e("/iu9");c.a.config.errorHandler=function(t){console&&console.error&&console.error(t)},new c.a(n.a).$mount()}},["so5v"]);