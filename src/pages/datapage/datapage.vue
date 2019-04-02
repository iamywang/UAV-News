<template>
  <div class="main-container">
    <div class="name-container">
      <img class="pic" src="{{pic}}">
      <div class="info" style="font-weight: bold">{{name}}</div>
    </div>
    <tip name="详细数据"></tip>
    <div class="info">{{text}}</div>
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
