require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([10],{"29jZ":function(s,t){},Bjg5:function(s,t,a){"use strict";var i={render:function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"main-container"},[t("tip",{attrs:{name:"无人机数据查询",mpcomid:"0"}}),this._v(" "),t("uavitem",{attrs:{src:this.src,text:"固定翼无人机",paras:this.paras,advs:this.advs,fields:this.fields,mpcomid:"1"}}),this._v(" "),t("uavitem",{attrs:{src:this.src,text:"无人直升机",paras:this.paras,advs:this.advs,fields:this.fields,mpcomid:"2"}}),this._v(" "),t("uavitem",{attrs:{src:this.src,text:"多旋翼无人机",paras:this.paras,advs:this.advs,fields:this.fields,mpcomid:"3"}}),this._v(" "),t("uavitem",{attrs:{src:this.src,text:"垂直起降固定翼",paras:this.paras,advs:this.advs,fields:this.fields,mpcomid:"4"}}),this._v(" "),t("uavitem",{attrs:{src:this.src,text:"其他无人机",paras:this.paras,advs:this.advs,fields:this.fields,mpcomid:"5"}})],1)},staticRenderFns:[]};t.a=i},GtwZ:function(s,t,a){"use strict";var i=a("qm69"),e=a("Bjg5");var r=function(s){a("29jZ")},n=a("ybqe")(i.a,e.a,r,"data-v-cfba8abc",null);t.a=n.exports},Tg6H:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("5nAL"),e=a.n(i),r=a("GtwZ");e.a.config.errorHandler=function(s){console&&console.error&&console.error(s)},new e.a(r.a).$mount()},qm69:function(s,t,a){"use strict";var i=a("7ON2"),e=a("TDe6");t.a={components:{uavitem:i.a,tip:e.a},data:function(){return{src:"../../static/imgs/technology.png",advs:"优点",paras:"参数",fields:"应用"}},onPullDownRefresh:function(){wx.stopPullDownRefresh()}}}},["Tg6H"]);