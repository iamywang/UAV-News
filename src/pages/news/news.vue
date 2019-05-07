<template>
  <div class="mainc">
    <div class="headinfo">新闻列表</div>
    <swiper indicator-dots="true" previous-margin="48px" next-margin="48px" indicator-color="#FFFFFF"
            indicator-active-color="#708090" style="height: 160px" :current="swiperIndex"
            @change="imageChange">
      <div v-if="newslist[0]">
        <div v-for="i in 6" :key="newslist[i]._id">
          <swiper-item style="display: flex; flex-direction: column; justify-content: center">
            <img :class="['swiper-img',swiperIndex === index ? 'active' : '']" :src="newslist[i].newsback"/>
          </swiper-item>
        </div>
      </div>
    </swiper>
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
    methods: {
      imageChange (e) {
        this.swiperIndex = e.mp.detail.current
      }
    },
    data () {
      return {
        swiperIndex: 0,
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
