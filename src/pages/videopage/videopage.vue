<template>
  <div class="mainpage">
    <title v-bind:name=this.newsname></title>
    <div class="date_tag">
      <div style="width: 36%"><img class="tip-img" src="../../../static/imgs/ndate.png">{{date}}</div>
      <div style="width: 18%"><img class="tip-img" src="../../../static/imgs/nuser.png">视频</div>
      <div style="width: 18%"><img class="tip-img" src="../../../static/imgs/ntime.png">{{tag}}</div>
      <div style="width: 16%"><img class="tip-img" src="../../../static/imgs/ncomment.png">{{comment}}</div>
      <div style="width: 16%"><img class="tip-img" src="../../../static/imgs/nsee.png">{{see}}</div>
    </div>
    <video src="{{src}}" title="{{newsname}}" autoplay="{{true}}" style="width: 100%; margin-top: 8px"></video>
    <div class="share">
      <button class="share-button" open-type="share"><img class="share-icon" src="../../../static/imgs/bookmark.png"/>收藏</button>
      <button class="share-button" open-type="share"><img class="share-icon" src="../../../static/imgs/share.png"/>分享</button>
      <button class="share-button" open-type="share"><img class="share-icon" src="../../../static/imgs/feedback.png"/>打赏</button>
    </div>
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
      this.request_mysql()
      var _this = this
      wx.request({
        url: 'http://wqc.frp.206680.xyz/updateVideoSaw/',
        method: 'POST',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: {
          id: _this.id
        },
        success (res) {
          _this.request_mysql()
        }
      })
    },
    onPullDownRefresh () {
      this.request_mysql()
      wx.stopPullDownRefresh()
    },
    onShareAppMessage () {
      return {
        title: this.newsname
      }
    },
    methods: {
      request_mysql () {
        var _this = this
        wx.request({
          url: 'http://wqc.frp.206680.xyz/getOneVideo/',
          data: {
            id: _this.id
          },
          success (res) {
            _this.newsname = res.data.name
            _this.date = res.data.date
            _this.tag = res.data.time
            _this.see = res.data.see
            _this.src = res.data.videosrc
            _this.comment = res.data.comment
            _this.commentlist = res.data.commentlist
            wx.setNavigationBarTitle({title: _this.newsname})
          }
        })
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
      },
      see: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style scoped>
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
