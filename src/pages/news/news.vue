<template>
  <div class="mainc">
    <tip name="新闻专栏"></tip>
    <div class="button-group">
      <cirbutton v-bind:name=item.name v-bind:color=item.color v-bind:pic=item.pic v-bind:corner=item.corner
                 v-for="item in cirlist" :key="item.name"></cirbutton>
    </div>
    <tip name="最新资讯"></tip>
    <div v-for="item in newslist" :key="item._id">
      <news v-bind:name=item.name v-bind:date=item.date v-bind:tag=item.tag v-bind:comment=item.comment
            v-bind:text=item.newstext v-bind:pic=item.newsback v-bind:id=item._id v-bind:see=item.see></news>
    </div>
  </div>
</template>

<script>
  import news from '../../components/news'
  import tip from '../../components/tip'
  import cirbutton from '../../components/circleButton'

  export default {
    components: {news, tip, cirbutton},
    onShow () {
      var _this = this
      wx.request({
        url: 'http://localhost:8000/search/',
        data: {
          key: 'news'
        },
        success (res) {
          _this.newslist = res.data
        }
      })
    },
    onPullDownRefresh () {
      var _this = this
      wx.request({
        url: 'http://localhost:8000/search/',
        data: {
          key: 'news'
        },
        success (res) {
          _this.newslist = res.data
        }
      })
      wx.stopPullDownRefresh()
    },
    data () {
      return {
        newslist: [],
        cirlist: [
          {'name': '最新资讯', 'pic': '../../static/imgs/hot.png', 'color': '#13227A', corner: 0},
          {'name': '一周热门', 'pic': '../../static/imgs/hot.png', 'color': '#13227A', corner: 0},
          {'name': '网络焦点', 'pic': '../../static/imgs/hot.png', 'color': '#13227A', corner: 0},
          {'name': '行业前沿', 'pic': '../../static/imgs/hot.png', 'color': '#13227A', corner: 0}
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
