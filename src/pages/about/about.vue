<template>
  <div class="main-container">
    <tip name="个人信息"></tip>
    <button class="info" open-type="getUserInfo" v-on:click="login">
      <img class="head" src="{{head}}">
      <div class="name">{{name}}</div>
    </button>
<!--    <img src="../../../static/imgs/bolang.png" style="width: 360px; height: 50px"/>-->
    <div>
      <div style="height: 8px; width: 100%; background: #ebebeb"></div>
      <settingitem src="../../static/imgs/comment.png" text="我的评论"></settingitem>
      <settingitem src="../../static/imgs/bookmark.png" text="我的收藏"></settingitem>
      <settingitem src="../../static/imgs/message.png" text="我的消息"></settingitem>
      <div style="height: 8px; width: 100%; background: #ebebeb"></div>
      <settingitem src="../../static/imgs/feedback.png" text="产品反馈"></settingitem>
      <settingitem src="../../static/imgs/share.png" text="分享"></settingitem>
      <div style="height: 8px; width: 100%; background: #ebebeb"></div>
      <settingitem src="../../static/imgs/setting.png" text="设置"></settingitem>
      <div style="height: 8px; width: 100%; background: #ebebeb"></div>
    </div>
    <tip name="程序信息"></tip>
    <div class="version">名称：无人机小程序</div>
    <div class="version">开发者：iamywang</div>
    <div class="version">版本：1.2.0</div>
    <div class="version">更新时间：2019.4.7</div>
  </div>
</template>

<script>
  import settingitem from '../../components/settingitem'
  import tip from '../../components/tip'

  export default {
    components: {settingitem, tip},
    props: {
      head: {
        type: String,
        default: '../../static/imgs/user.png'
      },
      name: {
        type: String,
        default: '点击登录'
      }
    },
    onShow () {
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
      wx.stopPullDownRefresh()
    },
    methods: {
      login () {
        var that = this
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
  .info {
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

  .version {
    text-align: center;
    line-height: 24px;
    font-size: 13px;
    color: gray;
  }
</style>
