<template>
  <div class="comment">
    <tip name="发表评论"></tip>
    <div class="name-container">
      <img class="head-img" src="{{pic}}">
      <div class="name">{{username}}</div>
      <button class="get-button" open-type="getUserInfo" v-on:click="getInfo" style="visibility: {{flag}}">登录</button>
    </div>
    <div class="comment-push">
      <div class="input-container">
        <img class="input-img" src="../../static/imgs/comment.png">
        <input class="input" type="text" placeholder="请输入评论..." v-model="value">
      </div>
      <button class="push-button" open-type="getUserInfo" v-on:click="pushComment">发表评论</button>
    </div>
    <tip name="热门评论"></tip>
    <div v-for="item in commentlist" v-if="item.like>100">
      <comment v-bind:name=item.name v-bind:head=item.head v-bind:location=item.location v-bind:model=item.model
               v-bind:text=item.text v-bind:date=item.date v-bind:level=item.level v-bind:like=item.like
               @addLike="addlike"></comment>
    </div>
    <tip name="评论列表"></tip>
    <div v-for="item in commentlist">
      <comment v-bind:name=item.name v-bind:head=item.head v-bind:location=item.location v-bind:model=item.model
               v-bind:text=item.text v-bind:date=item.date v-bind:level=item.level v-bind:like=item.like
               @addLike="addlike"></comment>
    </div>
  </div>
</template>

<script>
  import comment from '../components/comment'
  import tip from '../components/tip'

  export default {
    components: {comment, tip},
    onLoad () {
      var that = this
      wx.getSetting({
        success (rs) {
          if (rs.authSetting.scope.userInfo === true) {
            that.flag = 'hidden'
            wx.getUserInfo({
              success (res) {
                const userInfo = res.userInfo
                that.username = userInfo.nickName
                that.pic = userInfo.avatarUrl
              }
            })
          }
        }
      })
    },
    props: {
      commentlist: {
        type: Array,
        default: []
      },
      level: {
        type: Number,
        default: 0
      },
      id: {
        type: String,
        default: ''
      },
      check: {
        type: String,
        default: ''
      },
      username: {
        type: String,
        default: ''
      },
      pic: {
        type: String,
        default: '../../static/imgs/user.png'
      }
    },
    data () {
      return {
        value: '',
        flag: 'visible',
        testlist: ''
      }
    },
    methods: {
      getInfo () {
        var that = this
        wx.getUserInfo({
          success (res) {
            const userInfo = res.userInfo
            that.username = userInfo.nickName
            that.pic = userInfo.avatarUrl
            that.flag = 'hidden'
          }
        })
      },
      pushComment () {
        var that = this
        var model
        wx.getSystemInfo({
          success (res) {
            model = res.model
          }
        })
        wx.getUserInfo({
          success (res) {
            const userInfo = res.userInfo
            that.commentlist[that.commentlist.length] = {
              'name': userInfo.nickName,
              'head': userInfo.avatarUrl,
              'location': userInfo.country,
              'model': model,
              'text': that.value,
              'date': that.formatTime(new Date()),
              'level': that.level + 1,
              'like': 0}
            that.testlist = JSON.stringify(that.commentlist)
          }
        })
        wx.cloud.callFunction({
          name: 'updateComments',
          data: {
            id: that.id,
            type: that.check,
            comment: that.level,
            commentlist: that.testlist
          },
          complete: res => {
            that.level = that.level + 1
            that.value = ''
            wx.showModal({
              title: '提示信息',
              content: '评论成功！'
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
        var second = date.getSeconds()

        return [year, month, day].map(this.formatNumber).join('.') + ' ' + [hour, minute, second].map(this.formatNumber).join(':')
      },
      addlike (msg) {
        this.commentlist[msg[1] - 1].like = msg[0]
        var that = this
        that.testlist = JSON.stringify(that.commentlist)
        wx.cloud.callFunction({
          name: 'updateComments',
          data: {
            id: that.id,
            type: that.check,
            comment: that.level,
            commentlist: that.testlist
          }
        })
      }
    }
  }
</script>

<style scoped>
  .comment-push {
    margin: 4px;
    height: 36px;
    display: flex;
    flex-direction: row;
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

  .input-container {
    height: 36px;
    width: 75%;
  }
  .input-img {
    float: left;
    margin: 4px;
    width: 28px;
    height: 28px;
  }

  .input {
    border-bottom: 2px solid #708090;
    margin-right: 8px;
    font-size: 15px;
    line-height: 36px;
    height: 36px;
  }

  .push-button {
    width: 25%;
    font-size: 15px;
    line-height: 28px;
    background: #708090;
    color: white;
    outline: none;
    height: 28px;
    margin: 4px;
  }
</style>
