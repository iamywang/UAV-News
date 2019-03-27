<template>
  <div class="main-container">
    <div class="left-silde" v-if=open>
      <div class="notice">
        <img src="../../../static/imgs/broadcast.png" style="float: left; margin: 4px; width: 24px; height: 24px"/>
        侧边栏 Version 1.0
      </div>
      <searchbox></searchbox>
      <button class="info" open-type="getUserInfo" v-on:click="login">
        <img class="head" src="{{head}}">
        <div class="name">{{name}}</div>
      </button>
      <div class="button-group">
        <cirbutton v-bind:name=item.name v-bind:color=item.color v-bind:pic=item.pic
                   v-for="item in leftlist"></cirbutton>
      </div>
      <div style="margin: 4px">
        <settingitem src="../../static/imgs/comment.png" text="我的评论"></settingitem>
        <settingitem src="../../static/imgs/bookmark.png" text="我的收藏"></settingitem>
        <settingitem src="../../static/imgs/message.png" text="我的消息"></settingitem>
      </div>
      <div style="margin: 4px">
        <settingitem src="../../static/imgs/feedback.png" text="产品反馈"></settingitem>
        <settingitem src="../../static/imgs/share.png" text="分享"></settingitem>
      </div>
      <div style="margin: 4px">
        <settingitem src="../../static/imgs/setting.png" text="设置"></settingitem>
      </div>
    </div>
    <div class="right-center {{open ? 'c-state1' : ''}}">
      <div class="notice">
        <img src="../../../static/imgs/broadcast.png" style="float: left; margin: 4px; width: 24px; height: 24px"/>
        公告：无人机小程序 Version 1.0.10 版本
      </div>
      <div class="tab-changer">
        <img class="tab-item" src="../../../static/imgs/more.png" style="width: 26px" v-on:click="slide"/>
        <div class="tab-item {{currentTab == 0 ? 'on' : ''}}" v-on:click="setTab(0)">最新</div>
        <div class="tab-item {{currentTab == 1 ? 'on' : ''}}" v-on:click="setTab(1)">Top榜</div>
        <div class="tab-item {{currentTab == 2 ? 'on' : ''}}" v-on:click="setTab(2)">数据</div>
        <div class="tab-item {{currentTab == 3 ? 'on' : ''}}" v-on:click="setTab(3)">专题</div>
        <div class="tab-item {{currentTab == 4 ? 'on' : ''}}" v-on:click="setTab(4)">测试</div>
      </div>
      <swiper style="height: 830px" current="{{currentTab}}" @change="swiperChange">
        <!--页面1-->
        <swiper-item>
          <searchbox></searchbox>
          <swiper indicator-dots="{{true}}" previous-margin="48px" next-margin="48px" indicator-color="#FFFFFF"
                  indicator-active-color="#708090" style="height: 160px" current="{{swiperIndex}}"
                  @change="imageChange">
            <div v-for="item in piclist">
              <swiper-item style="display: flex; flex-direction: column; justify-content: center">
                <image class="swiper-img {{swiperIndex == index ? 'active' : ''}}" src="{{item.src}}"></image>
              </swiper-item>
            </div>
          </swiper>
          <div class="latest-content">
            <tip name="最新新闻"></tip>
            <div v-for="count in latestnum">
              <news v-bind:name=newslist[count-1].name v-bind:date=newslist[count-1].date
                    v-bind:tag=newslist[count-1].tag
                    v-bind:comment=newslist[count-1].comment v-bind:text=newslist[count-1].newstext
                    v-bind:pic=newslist[count-1].newsback
                    v-bind:commentlist=JSON.stringify(newslist[count-1].commentlist)
                    v-bind:id=newslist[count-1]._id></news>
            </div>
            <tip name="最新视频"></tip>
            <videox v-bind:name=videolist[0].name v-bind:date=videolist[0].date v-bind:time=videolist[0].time
                    v-bind:comment=videolist[0].comment v-bind:src=videolist[0].videosrc
                    v-bind:back=videolist[0].videoback
                    v-bind:commentlist=JSON.stringify(videolist[0].commentlist) v-bind:id=videolist[0]._id></videox>
          </div>
        </swiper-item>
        <!--页面2-->
        <swiper-item>
          <tip name="Top 专栏"></tip>
          <div class="button-group">
            <cirbutton v-bind:name=item.name v-bind:color=item.color v-bind:pic=item.pic
                       v-for="item in cirlist"></cirbutton>
          </div>
          <tip name="Top 搜"></tip>
          <div class="hotword-box">
            <div class="hotword">无人机</div>
            <div class="hotword">太阳能</div>
            <div class="hotword">地狱之门</div>
            <div class="hotword">环球网</div>
          </div>
          <tip name="Top 读"></tip>
          <news v-bind:name=newslist[0].name v-bind:date=newslist[0].date v-bind:tag=newslist[0].tag
                v-bind:comment=newslist[0].comment v-bind:text=newslist[0].newstext v-bind:pic=newslist[0].newsback
                v-bind:commentlist=JSON.stringify(newslist[0].commentlist) v-bind:id=newslist[0]._id></news>
          <tip name="Top 观"></tip>
          <videox v-bind:name=videolist[0].name v-bind:date=videolist[0].date v-bind:time=videolist[0].time
                  v-bind:comment=videolist[0].comment v-bind:src=videolist[0].videosrc
                  v-bind:back=videolist[0].videoback
                  v-bind:commentlist=JSON.stringify(videolist[0].commentlist) v-bind:id=videolist[0]._id></videox>
          <tip name="Top 评"></tip>
          <div v-for="item in newslist[0].commentlist" v-if="(item.like)>100">
            <comment v-bind:name=item.name v-bind:head=item.head v-bind:location=item.location v-bind:model=item.model
                     v-bind:text=item.text v-bind:date=item.date v-bind:level=item.level
                     v-bind:like=item.like></comment>
          </div>
        </swiper-item>
        <!--页面3-->
        <swiper-item>
          <tip name="会议日程数据"></tip>
          <uavitem text="无人机大会" src="../../static/imgs/technology.png"></uavitem>
          <uavitem text="无人机研发探讨" src="../../static/imgs/technology.png"></uavitem>
          <uavitem text="其他" src="../../static/imgs/technology.png"></uavitem>
          <tip name="机器参数数据"></tip>
          <uavitem text="固定翼无人机" src="../../static/imgs/technology.png"></uavitem>
          <uavitem text="无人直升机" src="../../static/imgs/technology.png"></uavitem>
          <uavitem text="多旋翼无人机" src="../../static/imgs/technology.png"></uavitem>
          <uavitem text="垂直起降固定翼" src="../../static/imgs/technology.png"></uavitem>
          <uavitem text="其他无人机" src="../../static/imgs/technology.png"></uavitem>
        </swiper-item>
        <!--页面4-->
        <swiper-item>
          <swiper indicator-dots="{{true}}" previous-margin="48px" next-margin="48px" indicator-color="#FFFFFF"
                  indicator-active-color="#708090" style="height: 160px" current="{{swiperIndex}}"
                  @change="imageChange">
            <div v-for="item in piclist">
              <swiper-item style="display: flex; flex-direction: column; justify-content: center">
                <image class="swiper-img {{swiperIndex == index ? 'active' : ''}}" src="{{item.src}}"></image>
              </swiper-item>
            </div>
          </swiper>
          <tip name="专题栏目"></tip>
          <div class="button-group">
            <cirbutton v-bind:name=item.name v-bind:color=item.color v-bind:pic=item.pic
                       v-for="item in spelist"></cirbutton>
          </div>
          <tip name="专栏文章"></tip>
          <div v-for="count in latestnum">
            <news v-bind:name=newslist[count-1].name v-bind:date=newslist[count-1].date
                  v-bind:tag=newslist[count-1].tag
                  v-bind:comment=newslist[count-1].comment v-bind:text=newslist[count-1].newstext
                  v-bind:pic=newslist[count-1].newsback
                  v-bind:commentlist=JSON.stringify(newslist[count-1].commentlist)
                  v-bind:id=newslist[count-1]._id></news>
          </div>
        </swiper-item>
        <!--页面5-->
        <swiper-item>
          <tip name="request测试"></tip>
          <div v-for="item in reqlist">
            <news v-bind:name=item.name v-bind:date=item.date v-bind:tag=item.tag v-bind:comment=item.comment
                  v-bind:text=item.newstext v-bind:pic=item.newsback v-bind:commentlist=JSON.stringify(item.commentlist)
                  v-bind:id=item._id></news>
          </div>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>

<script>
  import news from '../../components/news'
  import videox from '../../components/video'
  import tip from '../../components/tip'
  import uavitem from '../../components/uavitem'
  import searchbox from '../../components/searchbox'
  import cirbutton from '../../components/circleButton'
  import comment from '../../components/comment'
  import settingitem from '../../components/settingitem'

  export default {
    components: {news, videox, tip, uavitem, searchbox, cirbutton, comment, settingitem},
    onLoad () {
      wx.cloud.init({
        env: 'ywang-env-4a3998'
      })
      const db = wx.cloud.database()
      var _this = this
      db.collection('news').orderBy('_id', 'desc').get({
        success (res) {
          _this.newslist = res.data
        }
      })
      db.collection('pics').orderBy('_id', 'desc').get({
        success (res) {
          _this.piclist = res.data
        }
      })
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
      wx.request({
        url: 'http://localhost:8000/search/',
        data: {
          re: 'search'
        },
        success (res) {
          _this.reqlist = res.data
        }
      })
    },
    onPullDownRefresh () {
      const db = wx.cloud.database()
      var _this = this
      db.collection('news').orderBy('_id', 'desc').get({
        success (res) {
          _this.newslist = res.data
        }
      })
      db.collection('pics').orderBy('_id', 'desc').get({
        success (res) {
          _this.piclist = res.data
        }
      })
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
      wx.request({
        url: 'http://localhost:8000/search/',
        data: {
          fun: 'search'
        },
        success (res) {
          console.log(res.data)
          _this.reqlist = res.data
        }
      })
      wx.stopPullDownRefresh()
    },
    data () {
      return {
        newslist: [],
        videolist: [],
        piclist: [],
        livelist: [],
        reqlist: [],
        open: false,
        head: '../../static/imgs/user.png',
        name: '点击登录',
        currentTab: 0,
        swiperIndex: 0,
        latestnum: 3,
        leftlist: [
          {'name': '功能1', 'pic': '../../static/imgs/hot.png', 'color': '#13227A'},
          {'name': '功能2', 'pic': '../../static/imgs/hot.png', 'color': '#13227A'},
          {'name': '功能3', 'pic': '../../static/imgs/hot.png', 'color': '#13227A'}
        ],
        cirlist: [
          {'name': '热门新闻', 'pic': '../../static/imgs/hot.png', 'color': '#13227A'},
          {'name': '热门视频', 'pic': '../../static/imgs/hot.png', 'color': '#13227A'},
          {'name': '其他热门', 'pic': '../../static/imgs/hot.png', 'color': '#13227A'}
        ],
        spelist: [
          {'name': '早报', 'pic': '../../static/imgs/hot.png', 'color': '#234567'},
          {'name': '精品文章', 'pic': '../../static/imgs/hot.png', 'color': '#234567'},
          {'name': '潮流热机', 'pic': '../../static/imgs/hot.png', 'color': '#234567'},
          {'name': '数据先锋', 'pic': '../../static/imgs/hot.png', 'color': '#234567'},
          {'name': '专家言论', 'pic': '../../static/imgs/hot.png', 'color': '#234567'},
          {'name': '测评室', 'pic': '../../static/imgs/hot.png', 'color': '#234567'},
          {'name': '购买建议', 'pic': '../../static/imgs/hot.png', 'color': '#234567'},
          {'name': '其他', 'pic': '../../static/imgs/hot.png', 'color': '#234567'}
        ]
      }
    },
    methods: {
      setTab (e) {
        var _this = this
        _this.currentTab = e
      },
      swiperChange (e) {
        this.currentTab = e.mp.detail.current
      },
      imageChange (e) {
        this.swiperIndex = e.mp.detail.current
      },
      slide () {
        if (this.open === true) {
          this.open = false
        } else {
          this.open = true
        }
      },
      login () {
        var that = this
        // wx.login({
        //   success (res) {
        //     if (res.code) {
        //       // 发起网络请求
        //       wx.request({
        //         url: 'http://localhost:8000/onLogin',
        //         data: {
        //           code: res.code
        //         },
        //         success (ress) {
        //           console.log(ress)
        //         }
        //       })
        //     } else {
        //       console.log('登录失败！' + res.errMsg)
        //     }
        //   }
        // })
        wx.getUserInfo({
          success (res) {
            const userInfo = res.userInfo
            that.name = userInfo.nickName
            that.head = userInfo.avatarUrl
          }
        })
      }
    }
  }
</script>

<style scoped>
  .left-silde {
    position: fixed;
    width: 75%;
    height: 100%;
    background: #f9f9f9;
  }

  .info {
    background: white;
    margin: 4px;
    height: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .head {
    float: left;
    margin: 8px;
    width: 64px;
    height: 64px;
    border-radius: 100%;
  }

  .name {
    font-size: 16px;
    line-height: 80px;
  }

  .right-center {
    /*position: auto;*/
    width: 100%;
    transition: All 0.4s ease;
    -webkit-transition: All 0.4s ease;
  }

  .c-state1 {
    transform: rotate(0deg) scale(1) translate(75%, 0%);
    -webkit-transform: rotate(0deg) scale(1) translate(75%, 0%);
  }

  .tab-changer {
    display: flex;
    flex-direction: row;
    margin-top: 4px;
    margin-bottom: 4px;
    box-shadow: 0 2px 2px lightgray;
  }

  .notice {
    font-size: 14px;
    line-height: 32px;
    color: #ff6f00;
    background-color: lightyellow;
    margin-bottom: 4px;
  }
  .hotword-box{
    color: darkslategray;
    font-size: 15px;
    text-align: center;
    margin-left: 4%;
    width: 92%;
  }

  .hotword {
    margin: 8px;
    height: 32px;
    line-height: 32px;
    display: inline-block;
    min-width: 130px;
    background: #ebebeb;
    border-radius: 16px;
  }

  .button-group {
    text-align: center;
  }
  .tab-item{
    width: 20%;
    text-align: center;
    font-size: 15px;
    height: 26px;
  }
  .on {
    color: #708090;
    border-bottom: 3px solid #708090;
  }

  .swiper-img {
    box-shadow: 0 0 8px gray;
    width: 94%;
    height: 140px;
    margin-left: 3%;
  }

  .active {
    transform: scale(1.12);
    transition:all .2s ease-in 0s;
    z-index: 20;
  }
</style>
