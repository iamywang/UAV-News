<template>
  <div class="mainc">
    <tip name="测试request请求"></tip>
    <swiper indicator-dots="{{true}}" previous-margin="48px" next-margin="48px" indicator-color="#FFFFFF"
            indicator-active-color="#708090" style="height: 160px" current="{{swiperIndex}}"
            @change="imageChange">
      <div v-for="item in reqpiclist" :key="item.src">
        <swiper-item style="display: flex; flex-direction: column; justify-content: center">
          <image class="swiper-img {{swiperIndex == index ? 'active' : ''}}" src="{{item.src}}"></image>
        </swiper-item>
      </div>
    </swiper>
    <div v-for="item in lixinlist" :key="item.NewsID">
      <news v-bind:name=item.NewsTitle v-bind:date=item.CreateTime v-bind:tag=item.AuthorName
            v-bind:comment=item.ReadCount
            v-bind:text=item.NewsContent v-bind:pic=item.CoverImage v-bind:commentlist=JSON.stringify([])
            v-bind:id=item.NewsID v-bind:see=item.ReadCount></news>
    </div>
    <div v-for="item in reqlist" :key="item._id">
      <news v-bind:name=item.name v-bind:date=item.date v-bind:tag=item.tag v-bind:comment=item.comment
            v-bind:text=item.newstext v-bind:pic=item.newsback v-bind:commentlist=JSON.stringify(item.commentlist)
            v-bind:id=item._id v-bind:see=item.see></news>
    </div>
    <div v-for="item in reqvlist" :key="item._id">
      <videox v-bind:name=item.name v-bind:date=item.date v-bind:time=item.time v-bind:comment=item.comment
              v-bind:src=item.videosrc v-bind:back=item.videoback v-bind:commentlist=JSON.stringify(item.commentlist)
              v-bind:id=item._id v-bind:see=item.see></videox>
    </div>
  </div>
</template>

<script>
  import news from '../../components/news'
  import videox from '../../components/video'
  import tip from '../../components/tip'

  export default {
    components: {news, videox, tip},
    onLoad () {
      this.request_mysql()
    },
    onPullDownRefresh () {
      this.request_mysql()
      wx.stopPullDownRefresh()
    },
    data () {
      return {
        reqlist: [],
        reqvlist: [],
        reqpiclist: [],
        lixinlist: [],
        currentTab: 0,
        swiperIndex: 0
      }
    },
    methods: {
      request_mysql () {
        var _this = this
        wx.request({
          url: 'http://211.87.227.226:8089/news/wx_getListPaging',
          data: {
            key: 'key'
          },
          success (res) {
            _this.lixinlist = res.data.recs
            // console.log(_this.lixinlist)
          }
        })
        wx.request({
          url: 'http://localhost:8000/search/',
          data: {
            key: 'pics'
          },
          success (res) {
            _this.reqpiclist = res.data
          }
        })
        wx.request({
          url: 'http://localhost:8000/search/',
          data: {
            key: 'news'
          },
          success (res) {
            _this.reqlist = res.data
          }
        })
        wx.request({
          url: 'http://localhost:8000/search/',
          data: {
            key: 'videos'
          },
          success (res) {
            _this.reqvlist = res.data
          }
        })
      },
      imageChange (e) {
        this.swiperIndex = e.mp.detail.current
      }
    }
  }
</script>

<style scoped>
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
