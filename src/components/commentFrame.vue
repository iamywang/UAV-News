<template>
  <div class="comment">
    <div class="comment-box">
      <div class="name-container">
        <img class="head-img" src="{{pic}}">
        <div class="name">{{username}}</div>
        <button class="get-button" open-type="getUserInfo" v-on:click="getInfo" style="visibility: {{flag}}">登录</button>
      </div>
      <div class="comment-push">
        <div class="input-container">
          <!--        <img class="input-img" src="../../static/imgs/comment.png">-->
          <input class="input" type="text" placeholder="请输入评论..." v-model="value">
        </div>
        <a class="push-box" open-type="getUserInfo" v-on:click="pushComment">
          <img class="push-image" src="../../static/imgs/send.png"/>
        </a>
      </div>
    </div>
    <tip name="热门评论"></tip>
    <div v-for="item in commentlist" v-if="item.like>100" :key="item.level">
      <comment v-bind:name=item.name v-bind:head=item.head v-bind:location=item.location v-bind:model=item.model
               v-bind:text=item.text v-bind:date=item.date v-bind:level=item.level v-bind:like=item.like
               @addLike="addlike"></comment>
    </div>
    <tip name="评论列表"></tip>
    <div v-for="item in commentlist" :key="item.level">
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
      wx.getUserInfo({
        success (res) {
          const userInfo = res.userInfo
          that.username = userInfo.nickName
          that.pic = userInfo.avatarUrl
          that.flag = 'hidden'
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
        flag: 'visible'
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
            wx.request({
              url: 'http://localhost:8000/addComment/',
              method: 'POST',
              header: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              data: {
                id: that.id,
                type: that.check,
                head: userInfo.avatarUrl,
                date: that.formatTime(new Date()),
                name: userInfo.nickName,
                location: userInfo.country,
                model: model,
                text: that.value
              },
              success (res) {
                that.level = that.level + 1
                that.value = ''
                wx.showModal({
                  title: '提示信息',
                  content: '评论成功！'
                })
              }
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

        return [year, month, day].join('.') + ' ' + [hour, minute, second].map(this.formatNumber).join(':')
      },
      addlike (msg) {
        this.commentlist[msg[1] - 1].like = msg[0]
        var that = this
        wx.request({
          url: 'http://localhost:8000/addLike/',
          method: 'POST',
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: {
            id: that.id,
            type: that.check,
            level: msg[1]
          },
          success (res) {
          }
        })
      }
    }
  }
</script>

<style scoped>
  .comment{
    border-top: 1px solid lightgray;
  }

  .comment-box {
    width: 100%;
    position: fixed;
    bottom: 0;
    background: white;
  }

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
    width: 85%;
  }

  .input {
    background: #f5f5f5;
    margin: 4px;
    font-size: 15px;
    line-height: 28px;
    height: 28px;
  }

  .push-box {
    width: 15%;
    background: #f5f5f5;
    height: 28px;
    margin: 4px;
    text-align: center;
  }

  .push-image {
    margin: 4px;
    width: 20px;
    height: 20px;
  }
</style>
