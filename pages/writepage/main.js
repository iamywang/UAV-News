require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{RCpc:function(t,e,n){"use strict";var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"writepage"},[n("tip",{attrs:{name:"发表新文章",mpcomid:"0"}}),t._v(" "),n("div",{staticClass:"input-container"},[n("img",{staticClass:"input-img",attrs:{src:"https://blog.iamywang.cn/images/wechat/comment.png"}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newsname,expression:"newsname"}],staticClass:"input-title",attrs:{type:"text",placeholder:"请输入标题...",eventid:"0"},domProps:{value:t.newsname},on:{input:function(e){e.target.composing||(t.newsname=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"name-container"},[n("img",{staticClass:"head-img",attrs:{src:t.pic}}),t._v(" "),n("div",{staticClass:"name"},[t._v(t._s(t.tag))]),t._v(" "),n("button",{staticClass:"get-button",staticStyle:{visibility:"{{flag}}"},attrs:{"open-type":"getUserInfo",eventid:"1"},on:{click:t.getInfo}},[t._v("登录")])],1),t._v(" "),n("tip",{attrs:{name:"正文",mpcomid:"1"}}),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"input-text",attrs:{type:"text",placeholder:"请输入正文...",eventid:"2"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),n("button",{staticClass:"push-button",attrs:{"open-type":"getUserInfo",eventid:"3"},on:{click:t.pushPage}},[t._v("发表文章")])],1)},staticRenderFns:[]};e.a=a},jBrS:function(t,e,n){"use strict";var a=n("yHsv"),s=n("RCpc");var i=function(t){n("wOE+")},o=n("ybqe")(a.a,s.a,i,"data-v-0d8fe12c",null);e.a=o.exports},"wOE+":function(t,e){},yHsv:function(t,e,n){"use strict";var a=n("TDe6");e.a={onLoad:function(){var t=this;wx.getSetting({success:function(e){!0===e.authSetting.scope.userInfo&&(t.flag="hidden",wx.getUserInfo({success:function(e){var n=e.userInfo;t.tag=n.nickName,t.pic=n.avatarUrl}}))}})},onPullDownRefresh:function(){wx.stopPullDownRefresh()},components:{tip:a.a},data:function(){return{newsname:"",date:"",tag:"user",pic:"../../static/imgs/user.png",text:"",flag:"visible"}},methods:{getInfo:function(){var t=this;wx.getUserInfo({success:function(e){var n=e.userInfo;t.tag=n.nickName,t.pic=n.avatarUrl,t.flag="hidden"}})},pushPage:function(){var t=this;t.date=t.formatTime(new Date),wx.getUserInfo({success:function(e){var n=e.userInfo;t.name=n.nickName,t.pic=n.avatarUrl}}),wx.cloud.callFunction({name:"addNews",data:{comment:0,commentlist:[],date:t.date,name:t.newsname,newsback:t.pic,newstext:t.text,tag:t.tag},complete:function(e){t.newsname="",t.text="",wx.showModal({title:"提示信息",content:"发表成功！"})}})},formatNumber:function(t){return(t=t.toString())[1]?t:"0"+t},formatTime:function(t){var e=t.getFullYear(),n=t.getMonth()+1,a=t.getDate(),s=t.getHours(),i=t.getMinutes();return[e,n,a].map(this.formatNumber).join(".")+" "+[s,i].map(this.formatNumber).join(":")}}}},ysGD:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("5nAL"),s=n.n(a),i=n("jBrS");s.a.config.errorHandler=function(t){console&&console.error&&console.error(t)},new s.a(i.a).$mount()}},["ysGD"]);