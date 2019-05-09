<template>
  <div class="main-container" v-if="check==='book'">
    <div class="headinfo">
      <img class="head" :src=head>
      <div class="name">我的收藏</div>
    </div>
    <div class="tab-changer">
      <div :class="['tab-item',bookTab === 0 ? 'on' : '']" v-on:click="setBookTab(0)">新闻收藏</div>
      <div :class="['tab-item',bookTab === 1 ? 'on' : '']" v-on:click="setBookTab(1)">文章收藏</div>
      <div :class="['tab-item',bookTab === 2 ? 'on' : '']" v-on:click="setBookTab(2)">视频收藏</div>
    </div>
    <div v-if="bookTab === 0">
      <div v-if="newslist[0]">
        <div v-for="count in 3" :key="count">
          <news v-bind:name=newslist[count-1].name v-bind:date=newslist[count-1].date
                v-bind:tag=newslist[count-1].tag  v-bind:comment=newslist[count-1].comment
                v-bind:text=newslist[count-1].newstext v-bind:pic=newslist[count-1].newsback
                v-bind:id=newslist[count-1]._id v-bind:see=newslist[count-1].see marktag="收藏"></news>
        </div>
      </div>
    </div>
    <div v-if="bookTab === 1">
      <div v-if="artilelist[0]">
        <div v-for="count in 2" :key="count">
          <news v-bind:name=artilelist[count-1].name v-bind:date=artilelist[count-1].date
                v-bind:tag=artilelist[count-1].tag  v-bind:comment=artilelist[count-1].comment
                v-bind:text=artilelist[count-1].newstext v-bind:pic=artilelist[count-1].newsback
                v-bind:id=artilelist[count-1]._id v-bind:see=artilelist[count-1].see marktag="收藏"></news>
        </div>
      </div>
    </div>
    <div v-if="bookTab === 2">
      <div v-if="videolist[0]">
        <div v-for="count in 2" :key="count">
          <videox v-bind:name=videolist[count-1].name v-bind:date=videolist[count-1].date
                  v-bind:time=videolist[count-1].time v-bind:comment=videolist[count-1].comment
                  v-bind:back=videolist[count-1].videoback v-bind:videosrc=videolist[count-1].videosrc
                  v-bind:id=videolist[count-1]._id v-bind:see=videolist[count-1].see></videox>
        </div>
      </div>
    </div>
  </div>
  <div class="main-container" v-else-if="check==='comment'">
    <div class="headinfo">
      <img class="head" :src=head>
      <div class="name">我的评论</div>
    </div>
    <div class="tab-changer">
      <div :class="['tab-item',currentTab === 0 ? 'on' : '']" v-on:click="setTab(0)">所有评论</div>
      <div :class="['tab-item',currentTab === 1 ? 'on' : '']" v-on:click="setTab(1)">热门评论</div>
      <div :class="['tab-item',currentTab === 2 ? 'on' : '']" v-on:click="setTab(2)">其他</div>
    </div>
    <div v-if="currentTab === 0">
      <div v-if="newslist[0]">
        <div v-for="(news,index_) in newslist" :key="news._id">
          <div v-for="item in news.commentlist" v-if="item.name === name" :key="item.level">
            <tip v-bind:name=news.name></tip>
            <comment v-bind:name=item.name v-bind:head=item.head v-bind:location=item.location v-bind:model=item.model
                     v-bind:text=item.text v-bind:date=item.date v-bind:level=item.level v-bind:like=item.like></comment>
          </div>
        </div>
      </div>
    </div>
    <div v-if="currentTab === 1">
      <div v-if="newslist[0]">
        <div v-for="(news,index_) in newslist" :key="news._id">
          <div v-for="item in news.commentlist" v-if="item.name === name && item.like > 100" :key="item.level">
            <tip v-bind:name=news.name></tip>
            <comment v-bind:name=item.name v-bind:head=item.head v-bind:location=item.location v-bind:model=item.model
                     v-bind:text=item.text v-bind:date=item.date v-bind:level=item.level v-bind:like=item.like></comment>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="main-container" v-else-if="check==='push'">
    <div class="headinfo">
      <img class="head" :src=head>
      <div class="name">我的发表</div>
    </div>
    <div v-if="newslist[0]">
      <div v-for="item in artilelist" :key="item._id" v-if="item.tag === name">
        <news v-bind:name=item.name v-bind:date=item.date v-bind:tag=item.tag v-bind:comment=item.comment
              v-bind:text=item.newstext v-bind:pic=item.newsback v-bind:id=item._id v-bind:see=item.see></news>
      </div>
    </div>
  </div>
</template>

<script>
  import tip from '../../components/tip'
  import news from '../../components/news'
  import videox from '../../components/video'
  import comment from '../../components/comment'

  export default {
    components: {tip, news, comment, videox},
    onLoad (res) {
      this.check = res.check
      if (this.check === 'comment') {
        wx.setNavigationBarTitle({title: '我的评论'})
      } else if (this.check === 'book') {
        wx.setNavigationBarTitle({title: '我的收藏'})
      } else if (this.check === 'push') {
        wx.setNavigationBarTitle({title: '我的发表'})
      }
      var _this = this
      wx.getUserInfo({
        success (res) {
          const userInfo = res.userInfo
          _this.name = userInfo.nickName
          _this.head = userInfo.avatarUrl
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
          _this.artilelist = res.data
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
    data () {
      return {
        name: '',
        head: '',
        check: '',
        bookTab: 0,
        currentTab: 0,
        newslist: [],
        artilelist: [],
        videolist: []
      }
    },
    methods: {
      setTab (index) {
        this.currentTab = index
      },
      setBookTab (index) {
        this.bookTab = index
      }
    }
  }
</script>

<style scoped>
  .headinfo {
    background: white;
    margin: 4px;
    height: 80px;
  }

  .head {
    float: left;
    margin: 8px;
    width: 64px;
    height: 64px;
    border-radius: 100%;
  }

  .name {
    font-size: 18px;
    line-height: 80px;
  }

  .tab-changer {
    display: flex;
    flex-direction: row;
    margin-top: 4px;
    margin-bottom: 4px;
    box-shadow: 0 2px 2px lightgray;
  }

  .tab-item {
    width: 33.3%;
    text-align: center;
    font-size: 15px;
    height: 26px;
  }

  .on {
    color: #708090;
    border-bottom: 3px solid #708090;
  }
</style>
