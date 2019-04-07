<template>
  <div class="main-container">
    <div class="left-silde" v-if="open">
      <searchbox v-bind:flag=true></searchbox>
      <button class="info" open-type="getUserInfo" v-on:click="login">
        <img class="head" src="{{head}}">
        <div class="name">{{name}}</div>
      </button>
      <div class="button-group">
        <cirbutton v-bind:name=item.name v-bind:color=item.color v-bind:pic=item.pic v-bind:corner=item.corner
                   v-for="item in leftlist" :key="item.name"></cirbutton>
      </div>
      <settingitem src="../../static/imgs/comment.png" text="我的评论"></settingitem>
      <settingitem src="../../static/imgs/bookmark.png" text="我的收藏"></settingitem>
      <settingitem src="../../static/imgs/message.png" text="我的消息"></settingitem>
      <settingitem src="../../static/imgs/feedback.png" text="产品反馈"></settingitem>
      <settingitem src="../../static/imgs/share.png" text="分享"></settingitem>
      <settingitem src="../../static/imgs/setting.png" text="设置"></settingitem>
    </div>
    <div class="right-center {{open ? 'c-state1' : ''}}">
      <div class="notice">
        <img src="../../../static/imgs/broadcast.png" style="float: left; margin: 4px; width: 24px; height: 24px"/>
        公告栏：云开发全部迁移至Django and MySQL
      </div>
      <div class="tab-changer">
        <img src="../../../static/imgs/more.png" style="width: 18px; height: 18px; margin: 4px" v-on:click="slide"/>
        <div class="tab-item {{currentTab == 0 ? 'on' : ''}}" v-on:click="setTab(0)">最新</div>
        <div class="tab-item {{currentTab == 1 ? 'on' : ''}}" v-on:click="setTab(1)">Top榜</div>
        <div class="tab-item {{currentTab == 2 ? 'on' : ''}}" v-on:click="setTab(2)">部落</div>
        <div class="tab-item {{currentTab == 3 ? 'on' : ''}}" v-on:click="setTab(3)">数据</div>
        <div class="tab-item {{currentTab == 4 ? 'on' : ''}}" v-on:click="setTab(4)">专题</div>
      </div>
      <swiper style="height: 930px" current="{{currentTab}}" @change="swiperChange">
        <!--页面0-->
        <swiper-item>
          <searchbox></searchbox>
          <swiper indicator-dots="{{true}}" previous-margin="48px" next-margin="48px" indicator-color="#FFFFFF"
                  indicator-active-color="#708090" style="height: 160px" current="{{swiperIndex}}"
                  @change="imageChange">
            <div v-for="item in piclist" :key="item.src">
              <swiper-item style="display: flex; flex-direction: column; justify-content: center">
                <image class="swiper-img {{swiperIndex == index ? 'active' : ''}}" src="{{item.src}}"></image>
              </swiper-item>
            </div>
          </swiper>
          <div class="latest-content">
            <tip name="最新新闻"></tip>
            <div v-if="newslist[0]">
              <div v-for="count in latestnum" :key="count">
                <news v-bind:name=newslist[count-1].name v-bind:date=newslist[count-1].date
                      v-bind:tag=newslist[count-1].tag v-bind:comment=newslist[count-1].comment
                      v-bind:text=newslist[count-1].newstext v-bind:pic=newslist[count-1].newsback
                      v-bind:id=newslist[count-1]._id v-bind:see=newslist[count-1].see marktag="最新"></news>
              </div>
            </div>
            <tip name="最新视频"></tip>
            <div v-if="videolist[0]">
              <videox v-bind:name=videolist[0].name v-bind:date=videolist[0].date v-bind:time=videolist[0].time
                      v-bind:comment=videolist[0].comment v-bind:back=videolist[0].videoback
                      v-bind:id=videolist[0]._id v-bind:see=videolist[0].see></videox>
            </div>
          </div>
        </swiper-item>
        <!--页面1-->
        <swiper-item>
          <searchbox v-bind:flag=true></searchbox>
          <tip name="Top 专栏"></tip>
          <div class="button-group">
            <cirbutton v-bind:name=item.name v-bind:color=item.color v-bind:pic=item.pic v-bind:corner=item.corner
                       v-for="item in cirlist" :key="item.name"></cirbutton>
          </div>
          <tip name="Top 搜"></tip>
          <div class="hotword-box">
            <div class="hotword">无人机</div>
            <div class="hotword">太阳能</div>
            <div class="hotword">地狱之门</div>
            <div class="hotword">环球网</div>
          </div>
          <tip name="Top 读"></tip>
          <div v-for="item in newslist" v-if="item.see > 50" :key="item._id">
            <news v-bind:name=item.name v-bind:date=item.date v-bind:tag=item.tag v-bind:comment=item.comment
                  v-bind:text=item.newstext v-bind:pic=item.newsback v-bind:id=item._id v-bind:see=item.see marktag="Top"></news>
          </div>
          <tip name="Top 观"></tip>
          <div v-for="item in videolist" v-if="item.see > 50" :key="item._id">
            <videox v-bind:name=item.name v-bind:date=item.date v-bind:time=item.time v-bind:comment=item.comment
                    v-bind:back=item.videoback v-bind:id=item._id v-bind:see=item.see></videox>
          </div>
          <tip name="Top 评"></tip>
          <div v-if="newslist[0]">
            <div v-for="item in newslist[0].commentlist" v-if="item.like > 100" :key="item.level">
              <comment v-bind:name=item.name v-bind:head=item.head v-bind:location=item.location v-bind:model=item.model
                       v-bind:text=item.text v-bind:date=item.date v-bind:level=item.level v-bind:like=item.like></comment>
            </div>
          </div>
        </swiper-item>
        <!--页面2-->
        <swiper-item>
          <searchbox></searchbox>
          <div v-for="item in articlelist" :key="item._id">
            <news v-bind:name=item.name v-bind:date=item.date v-bind:tag=item.tag v-bind:comment=item.comment
                  v-bind:text=item.newstext v-bind:pic=item.newsback v-bind:id=item._id v-bind:see=item.see marktag="部落"></news>
          </div>
        </swiper-item>
        <!--页面3-->
        <swiper-item>
          <tip name="会议日程数据"></tip>
          <uavitem text="无人机大会" src="../../static/imgs/technology.png"></uavitem>
          <uavitem text="无人机研发探讨" src="../../static/imgs/technology.png"></uavitem>
          <uavitem text="其他" src="../../static/imgs/technology.png"></uavitem>
          <tip name="无人机数据"></tip>
          <div v-for="item in datalist" :key="item.name">
            <uavitem v-bind:src=item.src v-bind:name=item.name v-bind:text=item.text></uavitem>
          </div>
        </swiper-item>
        <!--页面4-->
        <swiper-item>
          <swiper indicator-dots="{{true}}" previous-margin="48px" next-margin="48px" indicator-color="#FFFFFF"
                  indicator-active-color="#708090" style="height: 160px" current="{{swiperIndex}}"
                  @change="imageChange">
            <div v-for="item in piclist" :key="item.src">
              <swiper-item style="display: flex; flex-direction: column; justify-content: center">
                <image class="swiper-img {{swiperIndex == index ? 'active' : ''}}" src="{{item.src}}"></image>
              </swiper-item>
            </div>
          </swiper>
          <tip name="专题栏目"></tip>
          <div class="button-group">
            <cirbutton v-bind:name=item.name v-bind:color=item.color v-bind:pic=item.pic v-bind:corner=item.corner
                       v-for="item in spelist" :key="item.name"></cirbutton>
          </div>
          <tip name="专栏文章"></tip>
          <div v-if="newslist[0]">
            <div v-for="count in latestnum" :key="count">
              <news v-bind:name=newslist[count-1].name v-bind:date=newslist[count-1].date
                    v-bind:tag=newslist[count-1].tag  v-bind:comment=newslist[count-1].comment
                    v-bind:text=newslist[count-1].newstext v-bind:pic=newslist[count-1].newsback
                    v-bind:id=newslist[count-1]._id v-bind:see=newslist[count-1].see marktag="专栏"></news>
            </div>
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
    onShow () {
      wx.cloud.init({
        env: 'ywang-env-4a3998'
      })
      this.request_mysql()
      var that = this
      wx.getUserInfo({
        success (res) {
          const userInfo = res.userInfo
          that.name = userInfo.nickName
          that.head = userInfo.avatarUrl
        }
      })
    },
    onPullDownRefresh () {
      this.request_mysql()
      wx.stopPullDownRefresh()
    },
    data () {
      return {
        newslist: [],
        articlelist: [],
        videolist: [],
        piclist: [],
        livelist: [],
        open: false,
        head: '../../static/imgs/user.png',
        name: '点击登录',
        currentTab: 0,
        swiperIndex: 0,
        latestnum: 3,
        leftlist: [
          {'name': '功能1', 'pic': '../../static/imgs/hot.png', 'color': '#122222', corner: 5},
          {'name': '功能2', 'pic': '../../static/imgs/hot.png', 'color': '#233333', corner: 3},
          {'name': '功能3', 'pic': '../../static/imgs/hot.png', 'color': '#344444', corner: 2}
        ],
        cirlist: [
          {'name': '热门新闻', 'pic': '../../static/imgs/hot.png', 'color': '#123333', corner: 99},
          {'name': '热门视频', 'pic': '../../static/imgs/hot.png', 'color': '#234444', corner: 9},
          {'name': '其他热门', 'pic': '../../static/imgs/hot.png', 'color': '#345555', corner: 0}
        ],
        spelist: [
          {'name': '早报', 'pic': '../../static/imgs/hot.png', 'color': '#117711', corner: 3},
          {'name': '精品文章', 'pic': '../../static/imgs/hot.png', 'color': '#771111', corner: 0},
          {'name': '潮流热机', 'pic': '../../static/imgs/hot.png', 'color': '#111177', corner: 0},
          {'name': '数据先锋', 'pic': '../../static/imgs/hot.png', 'color': '#227722', corner: 7},
          {'name': '专家言论', 'pic': '../../static/imgs/hot.png', 'color': '#772222', corner: 7},
          {'name': '测评室', 'pic': '../../static/imgs/hot.png', 'color': '#222277', corner: 0},
          {'name': '购买建议', 'pic': '../../static/imgs/hot.png', 'color': '#338888', corner: 0},
          {'name': '其他', 'pic': '../../static/imgs/hot.png', 'color': '#888833', corner: 99}
        ],
        datalist: [
          {name: '固定翼无人机', src: '../../static/imgs/technology.png', text: '固定翼无人机'},
          {name: '无人直升机', src: '../../static/imgs/technology.png', text: '无人直升机'},
          {name: '多旋翼无人机', src: '../../static/imgs/technology.png', text: '多旋翼无人机'},
          {name: '垂直起降固定翼', src: '../../static/imgs/technology.png', text: '垂直起降固定翼'},
          {name: '其他无人机', src: '../../static/imgs/technology.png', text: '其他无人机'}
        ]
      }
    },
    methods: {
      request_mysql () {
        var _this = this
        wx.request({
          url: 'http://localhost:8000/search/',
          data: {
            key: 'pics'
          },
          success (res) {
            _this.piclist = res.data
          }
        })
        wx.request({
          url: 'http://localhost:8000/search/',
          data: {
            key: 'news'
          },
          success (res) {
            _this.newslist = res.data
          }
        })
        wx.request({
          url: 'http://localhost:8000/search/',
          data: {
            key: 'article'
          },
          success (res) {
            _this.articlelist = res.data
          }
        })
        wx.request({
          url: 'http://localhost:8000/search/',
          data: {
            key: 'videos'
          },
          success (res) {
            _this.videolist = res.data
          }
        })
      },
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
    background: #fafafa;
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

  .hotword-box {
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

  .tab-item {
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
    transition: all .2s ease-in 0s;
    z-index: 20;
  }
</style>
