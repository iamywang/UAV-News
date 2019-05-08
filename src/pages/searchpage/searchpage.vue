<template>
  <div class="search-page">
    <div class="search-box">
      <img class="pic" src="../../../static/imgs/search.png">
      <input class="input" type="text" placeholder="请输入搜索内容" v-model="key">
      <a class="push" v-on:click="search" href="">
        <img class="pic" src="../../../static/imgs/search.png">搜索</a>
    </div>
    <tip name="历史搜索"></tip>
    <div class="hot-box">
      <div class="hot" v-for="item in hislist" :key="item">{{item}}</div>
    </div>
    <tip name="热搜词"></tip>
    <div class="hot-box">
      <div class="hot">无人机</div>
      <div class="hot">太阳能</div>
      <div class="hot">地狱之门</div>
      <div class="hot">中国无人机</div>
      <div class="hot">环球网</div>
      <div class="hot">无人机之家</div>
    </div>
    <div v-if="reslist1[0]">
      <tip name="无人机新闻"></tip>
      <div v-for="item in reslist1" :key="item._id">
        <news v-bind:name=item.name v-bind:date=item.date v-bind:tag=item.tag v-bind:comment=item.comment
              v-bind:text=item.newstext v-bind:pic=item.newsback v-bind:see=item.see v-bind:id=item._id marktag="搜索"></news>
      </div>
    </div>
    <div v-if="reslist2[0]">
      <tip name="用户部落文章"></tip>
      <div v-for="item in reslist2" :key="item._id">
        <news v-bind:name=item.name v-bind:date=item.date v-bind:tag=item.tag v-bind:comment=item.comment
              v-bind:text=item.newstext v-bind:pic=item.newsback v-bind:see=item.see v-bind:id=item._id marktag="搜索"></news>
      </div>
    </div>
    <div v-if="reslist3[0]">
    <tip name="无人机视频"></tip>
    <div v-for="item in reslist3" :key="item._id">
      <videox v-bind:name=item.name v-bind:date=item.date v-bind:time=item.time v-bind:comment=item.comment
              v-bind:back=item.videoback v-bind:videosrc=item.videosrc v-bind:id=item._id v-bind:see=item.see></videox>
    </div>
  </div>
  </div>
</template>

<script>
  import news from '../../components/news'
  import videox from '../../components/video'
  import tip from '../../components/tip'

  export default {
    components: {news, tip, videox},
    onLoad (option) {
      this.key = option.key
      this.search()
    },
    data () {
      return {
        key: '',
        hotlist: [],
        reslist1: [],
        reslist2: [],
        reslist3: [],
        hislist: []
      }
    },
    methods: {
      search () {
        var _this = this
        if (_this.key !== '') {
          wx.request({
            url: 'http://localhost:8000/allSearch/',
            data: {
              key: _this.key,
              type: 'news'
            },
            success (res) {
              _this.reslist1 = res.data
              wx.request({
                url: 'http://localhost:8000/allSearch/',
                data: {
                  key: _this.key,
                  type: 'article'
                },
                success (res) {
                  _this.reslist2 = res.data
                  wx.request({
                    url: 'http://localhost:8000/allSearch/',
                    data: {
                      key: _this.key,
                      type: 'videos'
                    },
                    success (res) {
                      _this.reslist3 = res.data
                      _this.hislist[_this.hislist.length] = _this.key
                      _this.key = ''
                    }
                  })
                }
              })
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
  .hot-box{
    color: darkslategray;
    font-size: 15px;
    text-align: center;
    margin-left: 4%;
    width: 92%;
  }

  .hot {
    margin: 8px;
    height: 32px;
    line-height: 32px;
    display: inline-block;
    min-width: 100px;
    background: #ebebeb;
    border-radius: 16px;
  }

  .search-box {
    margin-left: 5%;
    width: 90%;
    margin-top: 8px;
    margin-bottom: 8px;
    height: 32px;
    display: flex;
    flex-direction: row;
    background: #ebebeb;
    border-radius: 16px;
  }

  .pic {
    float: left;
    width: 16px;
    height: 16px;
    margin: 8px;
  }

  .input {
    width: 75%;
    font-size: 15px;
    line-height: 32px;
    text-align: center;
    height: 32px;
  }

  .push {
    width: 25%;
    color: #878787;
    height: 32px;
    font-size: 15px;
    text-align: left;
    line-height: 32px;
    border-radius: 16px;
  }
</style>
