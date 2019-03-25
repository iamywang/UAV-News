<template>
  <div class="main-container">
    <tip name="产品名称"></tip>
    <div class="name-container">
      <img class="pic" src="{{pic}}">
      <div class="info">{{name}}</div>
    </div>
    <tip name="技术参数"></tip>
    <div class="info">{{paras}}</div>
    <tip name="产品优点"></tip>
    <div class="info">{{advantages}}</div>
    <tip name="应用范围"></tip>
    <div class="info">{{fields}}</div>
    <tip name="数据来源"></tip>
    <div class="info" style="color: gray">无人机之家</div>
    <div class="info" style="color: gray">http://www.wrjzj.com/mall/classid-6.aspx</div>
  </div>

</template>

<script>
  import tip from '../../components/tip'

  export default {
    components: {tip},
    onLoad (option) {
      this.name = option.name
      this.pic = option.pic
      this.paras = option.paras
      this.advantages = option.advantages
      this.fields = option.fields
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
      paras: {
        type: String,
        default: ''
      },
      advantages: {
        type: String,
        default: ''
      },
      fields: {
        type: String,
        default: ''
      }
    }

  }
</script>

<style scoped>
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
