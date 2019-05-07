<template>
  <div class="main-container" v-if="check==='book'">
    <div class="headinfo">
      <img class="head" :src=head>
      <div class="name">我的收藏</div>
    </div>
    <div v-if="newslist[0]">
      <div v-for="count in 5" :key="count">
        <news v-bind:name=newslist[count-1].name v-bind:date=newslist[count-1].date
              v-bind:tag=newslist[count-1].tag  v-bind:comment=newslist[count-1].comment
              v-bind:text=newslist[count-1].newstext v-bind:pic=newslist[count-1].newsback
              v-bind:id=newslist[count-1]._id v-bind:see=newslist[count-1].see marktag="收藏"></news>
      </div>
    </div>
  </div>
  <div class="main-container" v-else-if="check==='comment'">
    <div class="headinfo">
      <img class="head" :src=head>
      <div class="name">我的评论</div>
    </div>
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
  import comment from '../../components/comment'

  export default {
    components: {tip, news, comment},
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
    },
    data () {
      return {
        name: '',
        head: '',
        check: '',
        newslist: [],
        artilelist: []
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
</style>
