<template>
  <div class="mainc">
    <tip name="最新视频"></tip>
    <div class="button-group">
      <cirbutton v-bind:name=item.name v-bind:color=item.color v-bind:pic=item.pic  v-for="item in cirlist"></cirbutton>
    </div>
    <div v-for="item in videolist">
      <videox v-bind:name=item.name v-bind:date=item.date v-bind:time=item.time v-bind:comment=item.comment
              v-bind:src=item.videosrc v-bind:back=item.videoback v-bind:commentlist=JSON.stringify(item.commentlist) v-bind:id=item._id></videox>
    </div>
    <tip name="正在直播"></tip>
    <div class="button-group">
      <cirbutton v-bind:name=item.name v-bind:color=item.color v-bind:pic=item.pic v-for="item in cirlivelist"></cirbutton>
    </div>
    <div v-for="item in livelist">
      <videox v-bind:name=item.name v-bind:date=item.date v-bind:time=item.time v-bind:comment=item.comment
              v-bind:src=item.videosrc v-bind:back=item.videoback v-bind:commentlist=JSON.stringify(item.commentlist) v-bind:id=item._id></videox>
    </div>
  </div>
</template>

<script>
  import videox from '../../components/video'
  import tip from '../../components/tip'
  import cirbutton from '../../components/circleButton'

  export default {
    components: {videox, tip, cirbutton},
    onLoad () {
      const db = wx.cloud.database()
      var _this = this
      db.collection('videos').orderBy('_id', 'desc').get({
        success (res) {
          _this.videolist = res.data
        }
      })
      db.collection('lives').orderBy('_id', 'desc').get({
        success (res) {
          _this.livelist = res.data
        }
      })
    },
    onPullDownRefresh () {
      const db = wx.cloud.database()
      var _this = this
      db.collection('videos').orderBy('_id', 'desc').get({
        success (res) {
          _this.videolist = res.data
        }
      })
      db.collection('lives').orderBy('_id', 'desc').get({
        success (res) {
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
          {'name': '最新视频', 'pic': '../../static/imgs/hot.png', 'color': '#13227A'},
          {'name': '一周热门', 'pic': '../../static/imgs/hot.png', 'color': '#13227A'},
          {'name': '网络热议', 'pic': '../../static/imgs/hot.png', 'color': '#13227A'},
          {'name': '行业前沿', 'pic': '../../static/imgs/hot.png', 'color': '#13227A'}
        ],
        cirlivelist: [
          {'name': '正在直播', 'pic': '../../static/imgs/hot.png', 'color': '#13227A'},
          {'name': '热门直播', 'pic': '../../static/imgs/hot.png', 'color': '#13227A'},
          {'name': '直播回看', 'pic': '../../static/imgs/hot.png', 'color': '#13227A'}
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
