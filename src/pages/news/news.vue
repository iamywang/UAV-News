<template>
  <div class="mainc">
    <tip name="最新资讯"></tip>
    <div class="button-group">
      <cirbutton v-bind:name=item.name v-bind:color=item.color v-bind:pic=item.pic v-for="item in cirlist"></cirbutton>
    </div>
    <div v-for="item in newslist">
      <news v-bind:name=item.name v-bind:date=item.date v-bind:tag=item.tag v-bind:comment=item.comment
            v-bind:text=item.newstext v-bind:pic=item.newsback v-bind:commentlist=JSON.stringify(item.commentlist)
            v-bind:id=item._id v-bind:see=item.see></news>
    </div>
  </div>
</template>

<script>
  import news from '../../components/news'
  import tip from '../../components/tip'
  import cirbutton from '../../components/circleButton'

  export default {
    components: {news, tip, cirbutton},
    onLoad () {
      const db = wx.cloud.database()
      var _this = this
      db.collection('news').orderBy('_id', 'desc').where({
        type: 'news'
      }).get({
        success (res) {
          _this.newslist = res.data
        }
      })
    },
    onPullDownRefresh () {
      const db = wx.cloud.database()
      var _this = this
      db.collection('news').orderBy('_id', 'desc').where({
        type: 'news'
      }).get({
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
          {'name': '最新资讯', 'pic': '../../static/imgs/hot.png', 'color': '#13227A'},
          {'name': '一周热门', 'pic': '../../static/imgs/hot.png', 'color': '#13227A'},
          {'name': '网络焦点', 'pic': '../../static/imgs/hot.png', 'color': '#13227A'},
          {'name': '行业前沿', 'pic': '../../static/imgs/hot.png', 'color': '#13227A'}
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
