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
    <tip name="相关文章"></tip>
    <div class="relative">{{id}}</div>
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
      this.newsname = option.newsname
      this.date = option.date
      this.tag = option.tag
      this.see = Number(option.see) + 1
      this.text = option.text
      this.comment = Number(option.comment)
      this.commentlist = JSON.parse(option.commentlist)
      const db = wx.cloud.database()
      var _this = this
      db.collection('news').doc(_this.id).get({
        success (res) {
          _this.text = res.data.newstext
        }
      })
      wx.cloud.callFunction({
        name: 'updateSaw',
        data: {
          id: _this.id,
          type: 'news',
          see: _this.see
        }
      })
      wx.setNavigationBarTitle({title: this.newsname})
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

  .relative {
    font-size: 14px;
    line-height: 32px;
    text-align: center;
  }
</style>
