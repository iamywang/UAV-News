<template>
  <div class="writepage">
    <tip name="发表新文章"></tip>
    <div class="input-container">
      <img class="input-img" src="../../../static/imgs/write2.png">
      <input class="input-title" type="text" placeholder="请输入标题..." v-model="newsname">
    </div>
    <div class="name-container">
      <img class="head-img" v-bind:src=pic>
      <div class="name">{{tag}}</div>
      <button class="get-button" open-type="getUserInfo" v-on:click="getInfo" style="visibility: {{flag}}">登录</button>
    </div>
    <tip name="正文"></tip>
    <textarea class="input-text" type="text" placeholder="请输入正文..." v-model="text"></textarea>
    <button class="push-button" open-type="getUserInfo" v-on:click="pushPage">发表文章</button>
  </div>
</template>

<script>
  import tip from '../../components/tip'

  export default {
    onShow () {
      var that = this
      wx.getUserInfo({
        success (res) {
          const userInfo = res.userInfo
          that.tag = userInfo.nickName
          that.pic = userInfo.avatarUrl
          that.flag = 'hidden'
        }
      })
    },
    onPullDownRefresh () {
      wx.stopPullDownRefresh()
    },
    components: {tip},
    data () {
      return {
        newsname: '',
        date: '',
        tag: 'user',
        pic: '../../static/imgs/user.png',
        text: '',
        flag: 'visible'
      }
    },
    methods: {
      getInfo () {
        var that = this
        wx.getUserInfo({
          success (res) {
            const userInfo = res.userInfo
            that.tag = userInfo.nickName
            that.pic = userInfo.avatarUrl
            that.flag = 'hidden'
          }
        })
      },
      pushPage () {
        var that = this
        that.date = that.formatTime(new Date())
        wx.getUserInfo({
          success (res) {
            const userInfo = res.userInfo
            that.name = userInfo.nickName
            that.pic = userInfo.avatarUrl
          }
        })
        wx.request({
          url: 'http://localhost:8000/insertArticle/',
          data: {
            id: 'article' + that.date,
            name: that.newsname,
            date: that.date,
            tag: that.tag,
            newsback: that.pic,
            newstext: '<p>' + that.text + '</p>' + '<p><img src="' + that.pic + '"/></p>'
          },
          success (res) {
            that.newsname = ''
            that.text = ''
            wx.showModal({
              title: '提示信息',
              content: '发表成功！'
            })
          }
        })
      },
      formatNumber (n) {
        n = n.toString()
        return n[1] ? n : '0' + n
      },
      formatTime (date) {
        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var day = date.getDate()

        var hour = date.getHours()
        var minute = date.getMinutes()

        return [year, month, day].join('.') + ' ' + [hour, minute].map(this.formatNumber).join(':')
      }
    }
  }
</script>

<style scoped>
  .input-container {
    margin: 4px;
    height: 36px;
  }

  .input-img {
    float: left;
    margin: 4px;
    width: 28px;
    height: 28px;
  }

  .input-title {
    border-bottom: 2px solid #708090;
    margin-right: 8px;
    font-size: 15px;
    line-height: 36px;
    height: 36px;
  }

  .name-container {
    margin: 4px;
    height: 36px;
    display: flex;
    flex-direction: row;
  }

  .head-img {
    border-radius: 100%;
    margin: 4px;
    width: 28px;
    height: 28px;
  }

  .name {
    color: #708090;
    font-size: 14px;
    line-height: 36px;
    height: 36px;
  }

  .get-button {
    font-size: 14px;
    line-height: 28px;
    background: #708090;
    color: white;
    outline: none;
    width: 80px;
    height: 28px;
    margin: 4px;
  }

  .input-text {
    width: 95%;
    border: 1px solid #708090;
    border-radius: 8px;
    margin: 8px;
    font-size: 15px;
    line-height: 24px;
    min-height: 360px;
  }
  .push-button {
    font-size: 15px;
    line-height: 48px;
    background: #708090;
    color: white;
    outline: none;
    height: 48px;
    margin: 8px;
  }
</style>
