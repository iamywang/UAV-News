<template>
  <div class="mainpage">
    <title v-bind:name=this.newsname></title>
    <div class="date_tag">
      <div style="width: 36%"><img class="tip-img" src="../../../static/imgs/ndate.png">{{date}}</div>
      <div style="width: 32%"><img class="tip-img" src="../../../static/imgs/nuser.png">{{tag}}</div>
      <div style="width: 16%"><img class="tip-img" src="../../../static/imgs/ncomment.png">{{comment}}</div>
      <div style="width: 16%"><img class="tip-img" src="../../../static/imgs/nsee.png">{{see}}</div>
    </div>
    <div><wxParse :content=text></wxParse></div>
    <div class="share">
      <button class="share-button" open-type="share"><img class="share-icon" src="../../../static/imgs/bookmark.png"/>收藏</button>
      <button class="share-button" open-type="share"><img class="share-icon" src="../../../static/imgs/share.png"/>分享</button>
      <button class="share-button" open-type="share"><img class="share-icon" src="../../../static/imgs/feedback.png"/>打赏</button>
    </div>
    <commentFrame v-bind:commentlist=commentlist v-bind:level=comment v-bind:id=id check="news"></commentFrame>
  </div>
</template>

<script>
  import title from '../../components/title'
  import tip from '../../components/tip'
  import commentFrame from '../../components/commentFrame'
  import wxParse from 'mpvue-wxparse'

  export default {
    onLoad (option) {
      this.id = option.id
      const db = wx.cloud.database()
      var _this = this
      db.collection('news').doc(_this.id).get({
        success (res) {
          _this.newsname = res.data.name
          _this.date = res.data.date
          _this.tag = res.data.tag
          _this.see = res.data.see + 1
          _this.text = res.data.newstext
          _this.comment = res.data.comment
          _this.commentlist = res.data.commentlist
          wx.setNavigationBarTitle({title: _this.newsname})
          wx.cloud.callFunction({
            name: 'updateSaw',
            data: {
              id: _this.id,
              type: 'news',
              see: _this.see
            }
          })
        }
      })
    },
    onPullDownRefresh () {
      const db = wx.cloud.database()
      var _this = this
      db.collection('news').doc(_this.id).get({
        success (res) {
          _this.id = res.data._id
          _this.newsname = res.data.name
          _this.date = res.data.date
          _this.tag = res.data.tag
          _this.see = res.data.see
          _this.text = res.data.newstext
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
    components: {title, tip, commentFrame, wxParse},
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
      text: {
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
      },
      see: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style scoped>
  @import url("~mpvue-wxparse/src/wxParse.css");

  .mainpage {
    margin: 4px;
  }

  .date_tag {
    overflow: hidden;
    text-overflow: ellipsis;
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

  .share{
    text-align: center;
  }

  .share-button {
    display: inline-block;
    margin: 8px;
    width: 100px;
    height: 36px;
    border-radius: 16px;
    border: 1px solid #ebebeb;
    background: #ebebeb;
    font-size: 14px;
  }

  .share-icon {
    float: left;
    margin: 4px;
    width: 24px;
    height: 24px;
  }
</style>
