require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{"8goH":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("5nAL"),s=i.n(a),n=i("PuqW");s.a.config.errorHandler=function(t){console&&console.error&&console.error(t)},new s.a(n.a).$mount()},KIO9:function(t,e,i){"use strict";var a=i("Pexp"),s=i("TDe6"),n=i("JLxF");e.a={onLoad:function(t){this.id=t.id,this.newsname=t.newsname,this.date=t.date,this.tag=t.tag,this.src=t.src,this.comment=Number(t.comment),this.commentlist=JSON.parse(t.commentlist),wx.setNavigationBarTitle({title:this.newsname})},onPullDownRefresh:function(){var t=this;wx.cloud.database().collection("videos").doc(t.id).get({success:function(e){t.id=e.data._id,t.newsname=e.data.name,t.date=e.data.date,t.tag=e.data.time,t.src=e.data.videosrc,t.comment=e.data.comment,t.commentlist=e.data.commentlist,wx.stopPullDownRefresh()}})},onShareAppMessage:function(){return{title:this.newsname}},components:{title:a.a,tip:s.a,commentFrame:n.a},props:{newsname:{type:String,default:""},date:{type:String,default:""},tag:{type:String,default:""},comment:{type:Number,default:0},src:{type:String,default:""},commentlist:{type:Array,default:[]},id:{type:String,default:""}}}},PuqW:function(t,e,i){"use strict";var a=i("KIO9"),s=i("epZR");var n=function(t){i("zXEB")},c=i("ybqe")(a.a,s.a,n,"data-v-c400e138",null);e.a=c.exports},epZR:function(t,e,i){"use strict";var a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mainpage"},[i("title",{attrs:{name:this.newsname,mpcomid:"0"}}),t._v(" "),i("div",{staticClass:"date_tag"},[i("div",{staticStyle:{width:"40%"}},[i("img",{staticClass:"tip-img",attrs:{src:"../../../static/imgs/ndate.png"}}),t._v(t._s(t.date))]),t._v(" "),t._m(0),t._v(" "),i("div",{staticStyle:{width:"20%"}},[i("img",{staticClass:"tip-img",attrs:{src:"../../../static/imgs/ntime.png"}}),t._v(t._s(t.tag))]),t._v(" "),i("div",{staticStyle:{width:"20%"}},[i("img",{staticClass:"tip-img",attrs:{src:"../../../static/imgs/ncomment.png"}}),t._v(t._s(t.comment))])]),t._v(" "),i("video",{staticStyle:{width:"100%","margin-top":"8px"},attrs:{src:"{{src}}"}}),t._v(" "),i("tip",{attrs:{name:"相关视频",mpcomid:"1"}}),t._v(" "),i("div",{staticClass:"comment"},[t._v(t._s(t.id))]),t._v(" "),i("commentFrame",{attrs:{commentlist:t.commentlist,level:t.comment,id:t.id,check:"videos",mpcomid:"2"}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{width:"20%"}},[e("img",{staticClass:"tip-img",attrs:{src:"../../../static/imgs/nuser.png"}}),this._v("null")])}]};e.a=a},zXEB:function(t,e){}},["8goH"]);