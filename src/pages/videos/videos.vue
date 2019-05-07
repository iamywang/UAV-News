<template>
  <div class="mainc">
    <div class="headinfo">视频列表</div>
    <div v-if="videolist[0]">
      <video :title=videolist[0].name :poster=videolist[0].videoback :src=videolist[0].videosrc style="width: 100%; height: 200px">
        <div class="mark">最新</div>
        <div class="name">{{videolist[0].name}}</div>
      </video>
    </div>
    <tip name="视频专栏"></tip>
    <div class="button-group">
      <cirbutton v-bind:name=item.name v-bind:color=item.color v-bind:pic=item.pic v-bind:corner=item.corner
                 v-for="item in cirlist" :key="item.name"></cirbutton>
    </div>
    <tip name="最新视频"></tip>
    <div v-for="item in videolist" :key="item._id">
      <videox v-bind:name=item.name v-bind:date=item.date v-bind:time=item.time v-bind:comment=item.comment
              v-bind:back=item.videoback v-bind:videosrc=item.videosrc v-bind:id=item._id v-bind:see=item.see></videox>
    </div>
    <!-- <tip name="直播专栏"></tip>
    <div class="button-group">
      <cirbutton v-bind:name=item.name v-bind:color=item.color v-bind:pic=item.pic v-bind:corner=item.corner
                 v-for="item in cirlivelist" :key="item.name"></cirbutton>
    </div>
    <tip name="正在直播"></tip>
    <div v-for="item in livelist" :key="item._id">
      <videox v-bind:name=item.name v-bind:date=item.date v-bind:time=item.time v-bind:comment=item.comment
              v-bind:back=item.videoback v-bind:id=item._id></videox>
    </div> -->
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
        url: 'http://localhost:8000/search/',
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
        url: 'http://localhost:8000/search/',
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

  .headinfo {
    border-radius: 8px;
    margin: 4px;
    color: white;
    font-size: 15px;
    line-height: 32px;
    background: rgba(70, 80, 90, 0.75);
    box-shadow: 0 0 2px black;
    text-align: center;
  }

  .name {
    color: lightcyan;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    line-height: 32px;
    background: rgba(0, 0, 0, 0.75);
    box-shadow: 0 0 2px black;
    border-radius: 8px;
  }

  .mark {
    float: left;
    border-radius: 8px;
    margin: 6px;
    font-size: 12px;
    color: white;
    background: rgba(255, 0, 0, 0.75);
    box-shadow: 0 0 2px lightcoral;
    text-align: center;
    width: 48px;
    line-height: 20px;
  }
</style>
