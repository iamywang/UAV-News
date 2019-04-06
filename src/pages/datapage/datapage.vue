<template>
  <div class="main-container">
    <div class="name-container">
      <img class="pic" src="{{pic}}">
      <div class="info" style="font-weight: bold">{{name}}</div>
    </div>
    <tip name="详细数据"></tip>
    <div class="info">{{text}}</div>
    <wxParse :content=demo></wxParse>
    <tip name="数据来源"></tip>
    <div class="info" style="color: gray">无人机之家</div>
    <div class="info" style="color: gray">http://www.wrjzj.com/mall/classid-6.aspx</div>
  </div>

</template>

<script>
  import tip from '../../components/tip'
  import wxParse from 'mpvue-wxparse'

  export default {
    components: {tip, wxParse},
    onLoad (option) {
      this.name = option.name
      this.pic = option.pic
      this.text = option.text
      wx.setNavigationBarTitle({title: this.name})
    },
    onPullDownRefresh () {
      wx.stopPullDownRefresh()
    },
    onShareAppMessage () {
      return {
        title: this.newsname
      }
    },
    props: {
      name: {
        type: String,
        default: ''
      },
      pic: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        demo: '<p>无人驾驶飞机简称“无人机”，英文缩写为“UAV”，是利用无线电遥控设备和自备的程序控制装置操纵的不载人飞机，或者由车载计算机完全地或间歇地自主地操作。</p><p>与有人驾驶飞机相比，无人机往往更适合那些太“愚钝，肮脏或危险”的任务。无人机按应用领域，可分为军用与民用。军用方面，无人机分为侦察机和靶机。民用方面，无人机+行业应用，是无人机真正的刚需；目前在航拍、农业、植保、微型自拍、快递运输、灾难救援、观察野生动物、监控传染病、测绘、新闻报道、电力巡检、救灾、影视拍摄、制造浪漫等等领域的应用，大大的拓展了无人机本身的用途，发达国家也在积极扩展行业应用与发展无人机技术。</p><p>2018年9月份，世界海关组织协调制度委员会（HSC）第62次会议决定，将无人机归类为“会飞的照相机”。</p>'
      }
    }
  }
</script>

<style scoped>
  @import url("~mpvue-wxparse/src/wxParse.css");
  .main-container {
    margin: 4px;
  }

  .name-container {
    text-align: center;
    height: 136px;

  }

  .pic {
    width: 96px;
    height: 96px;
    margin: 4px;
  }

  .info {
    line-height: 32px;
    font-size: 15px;
    text-align: center;
  }

</style>
