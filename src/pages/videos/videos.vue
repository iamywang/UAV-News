<template>
  <div class="mainc">
    <tip name="最新视频"></tip>
    <div class="button-group">
      <cirbutton v-bind:name=item.name v-bind:color=item.color v-bind:pic=item.pic v-bind:corner=item.corner
                 v-for="item in cirlist" :key="item.name"></cirbutton>
    </div>
    <div v-for="item in videolist" :key="item._id">
      <videox v-bind:name=item.name v-bind:date=item.date v-bind:time=item.time v-bind:comment=item.comment
              v-bind:back=item.videoback v-bind:id=item._id v-bind:see=item.see></videox>
    </div>
    <tip name="正在直播"></tip>
    <div class="button-group">
      <cirbutton v-bind:name=item.name v-bind:color=item.color v-bind:pic=item.pic v-bind:corner=item.corner
                 v-for="item in cirlivelist" :key="item.name"></cirbutton>
    </div>
    <div v-for="item in livelist" :key="item._id">
      <videox v-bind:name=item.name v-bind:date=item.date v-bind:time=item.time v-bind:comment=item.comment
              v-bind:back=item.videoback v-bind:id=item._id></videox>
    </div>
  </div>
</template>

<script>
  import videox from '../../components/video'
  import tip from '../../components/tip'
  import cirbutton from '../../components/circleButton'

  export default {
    components: {videox, tip, cirbutton},
    onShow () {
      var _this = this
      wx.request({
        url: 'http://10.27.246.15:8000/search/',
        data: {
          key: 'videos'
        },
        success (res) {
          _this.videolist = res.data
          _this.livelist = res.data
        }
      })
    },
    onPullDownRefresh () {
      var _this = this
      wx.request({
        url: 'http://10.27.246.15:8000/search/',
        data: {
          key: 'videos'
        },
        success (res) {
          _this.videolist = res.data
          _this.livelist = res.data
        }
      })
      wx.stopPullDownRefresh()
    },
    data () {
      return {
        videolist: [],
        livelist: [],
        cirlist: [
          {'name': '最新视频', 'pic': '../../static/imgs/hot.png', 'color': '#13227A', corner: 0},
          {'name': '一周热门', 'pic': '../../static/imgs/hot.png', 'color': '#13227A', corner: 0},
          {'name': '网络热议', 'pic': '../../static/imgs/hot.png', 'color': '#13227A', corner: 0},
          {'name': '行业前沿', 'pic': '../../static/imgs/hot.png', 'color': '#13227A', corner: 0}
        ],
        cirlivelist: [
          {'name': '正在直播', 'pic': '../../static/imgs/hot.png', 'color': '#13227A', corner: 0},
          {'name': '热门直播', 'pic': '../../static/imgs/hot.png', 'color': '#13227A', corner: 0},
          {'name': '直播回看', 'pic': '../../static/imgs/hot.png', 'color': '#13227A', corner: 0}
        ]
      }
    }
  }
</script>

<style scoped>
  .button-group {
    text-align: center;
  }
</style>
