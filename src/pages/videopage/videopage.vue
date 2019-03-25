<template>
  <div class="mainpage">
    <title v-bind:name=this.newsname></title>
    <div class="date_tag">
      <div style="width: 40%"><img class="tip-img" src="../../../static/imgs/ndate.png">{{date}}</div>
      <div style="width: 20%"><img class="tip-img" src="../../../static/imgs/nuser.png">视频</div>
      <div style="width: 20%"><img class="tip-img" src="../../../static/imgs/ntime.png">{{tag}}</div>
      <div style="width: 20%"><img class="tip-img" src="../../../static/imgs/ncomment.png">{{comment}}</div>
    </div>
    <video src="{{src}}" title="{{newsname}}" style="width: 100%; margin-top: 8px"></video>
    <tip name="相关视频"></tip>
    <div class="comment">{{id}}</div>
    <commentFrame v-bind:commentlist=commentlist v-bind:level=comment v-bind:id=id check="videos"></commentFrame>
  </div>
</template>

<script>
  import title from '../../components/title'
  import tip from '../../components/tip'
  import commentFrame from '../../components/commentFrame'

  export default {
    onLoad (option) {
      this.id = option.id
      this.newsname = option.newsname
      this.date = option.date
      this.tag = option.tag
      this.src = option.src
      this.comment = Number(option.comment)
      this.commentlist = JSON.parse(option.commentlist)
      wx.setNavigationBarTitle({title: this.newsname})
    },
    onPullDownRefresh () {
      const db = wx.cloud.database()
      var _this = this
      db.collection('videos').doc(_this.id).get({
        success (res) {
          _this.id = res.data._id
          _this.newsname = res.data.name
          _this.date = res.data.date
          _this.tag = res.data.time
          _this.src = res.data.videosrc
          _this.comment = res.data.comment
          _this.commentlist = res.data.commentlist
          wx.stopPullDownRefresh()
        }
      })
    },
    onShareAppMessage () {
      return {
        title: this.newsname
      }
    },
    components: {title, tip, commentFrame},
    props: {
      newsname: {
        type: String,
        default: ''
      },
      date: {
        type: String,
        default: ''
      },
      tag: {
        type: String,
        default: ''
      },
      comment: {
        type: Number,
        default: 0
      },
      src: {
        type: String,
        default: ''
      },
      commentlist: {
        type: Array,
        default: []
      },
      id: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>
  .mainpage {
    margin: 4px;
  }

  .date_tag {
    display: flex;
    flex-direction: row;
    text-align: left;
    line-height: 32px;
    height: 32px;
    font-size: 14px;
    color: gray;
    border-bottom: 1px solid lightgray;
  }

  .tip-img {
    float: left;
    width: 16px;
    height: 16px;
    margin: 8px;
  }

  .comment {
    font-size: 14px;
    line-height: 32px;
    text-align: center;
  }
</style>
