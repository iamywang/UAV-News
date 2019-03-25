<template>
  <div class="search-page">
    <div class="search-box">
      <img class="pic" src="../../../static/imgs/search.png">
      <input class="input" type="text" placeholder="请输入搜索内容..." v-model="key">
      <a class="push" v-on:click="search" href="">
        <img class="pic" src="../../../static/imgs/search.png">搜索</a>
    </div>
    <tip name="历史搜索"></tip>
    <div class="hot-box">
      <div class="hot" v-for="item in hislist">{{item}}</div>
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
    <tip name="结果"></tip>
    <div v-for="item in reslist">
      <news v-bind:name=item.name v-bind:date=item.date v-bind:tag=item.tag v-bind:comment=item.comment
            v-bind:text=item.newstext v-bind:pic=item.newsback v-bind:commentlist=JSON.stringify(item.commentlist)
            v-bind:id=item._id></news>
    </div>
  </div>
</template>

<script>
  import news from '../../components/news'
  import tip from '../../components/tip'

  export default {
    components: {news, tip},
    onLoad (option) {
      this.key = option.key
      this.search()
    },
    data () {
      return {
        key: '',
        hotlist: [],
        reslist: [],
        hislist: []
      }
    },
    methods: {
      search () {
        const db = wx.cloud.database()
        var _this = this
        if (_this.key !== '') {
          db.collection('news').orderBy('_id', 'desc').where({
            tag: _this.key
          }).get({
            success (res) {
              _this.reslist = res.data
              _this.hislist[_this.hislist.length] = _this.key
              _this.key = ''
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
