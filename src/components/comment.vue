<template>
    <div class="comment-item">
      <div class="info">
        <img class="head" src="{{head}}">
        <div class="name-container">
          <div class="name">{{name}}
            <!--<img class="lm-pic" src="../../static/imgs/level.png"/>-->
            <div class="level">{{level}} 楼</div>
          </div>
          <div class="loc_model">
            <div class="location"><img class="lm-pic" src="../../static/imgs/location.png"/>{{location}}</div>
            <div class="model"><img class="lm-pic" src="../../static/imgs/mobile.png"/>{{model}}</div>
          </div>
        </div>
      </div>
      <div class="content"><wxParse :content=text></wxParse></div>
      <div class="bottom">
        <div class="date">{{date}}</div>
        <img class="like-pic" src="../../static/imgs/like.png" v-on:click="addlike"/>
        <div class="like">{{like}}</div>
      </div>
    </div>
</template>

<script>
  import wxParse from 'mpvue-wxparse'
  export default {
    components: {wxParse},
    props: {
      name: {
        type: String,
        default: 'user'
      },
      head: {
        type: String,
        default: '../../static/imgs/user.png'
      },
      location: {
        type: String,
        default: '中国'
      },
      model: {
        type: String,
        default: '手机'
      },
      date: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      },
      level: {
        type: Number,
        default: 0
      },
      like: {
        type: Number,
        default: 0
      }
    },
    methods: {
      addlike () {
        this.$emit('addLike', [this.like + 1, this.level])
      }
    }
  }
</script>

<style scoped>
  @import url("~mpvue-wxparse/src/wxParse.css");
  .comment-item {
    margin: 8px 16px 8px 16px;
    border-bottom: 1px solid lightgray;
  }

  .info {
    height: 44px;
  }

  .head {
    float: left;
    width: 36px;
    height: 36px;
    border-radius: 100%;
    border: 1px solid gray;
    margin: 4px;
  }

  .name {
    float: top;
    font-size: 15px;
    line-height: 24px;
  }

  .loc_model {
    float: bottom;
    display: flex;
    flex-direction: row;
    font-size: 12px;
    line-height: 20px;
    color: gray;
  }
  .model{
    color: seagreen;
  }
  .lm-pic {
    float: left;
    margin: 4px;
    width: 12px;
    height: 12px
  }

  .level {
    text-align: right;
    font-size: 15px;
    margin-right: 8px;
    color: gray;
    float: right;
    width: 50px;
  }

  .content {
    line-height: 22px;
    font-size: 15px;
    text-align: left;
    margin-left: 36px;
    margin-top: 8px;
    margin-bottom: 8px;
    min-height: 44px;
  }

  .bottom {
    float: bottom;
    text-align: right;
    font-size: 14px;
    margin-right: 8px;
  }

  .date {
    float: left;
    display: inline-block;
    margin-left: 4px;
    color: black;
  }

  .like-pic {
    width: 16px;
    height: 16px;
    display: inline-block;
    margin-right: 4px;
  }

  .like {
    display: inline-block;
    color: #708090;
  }
</style>
