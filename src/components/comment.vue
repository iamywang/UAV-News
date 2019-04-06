<template>
    <div class="comment-item">
      <div class="info">
        <img class="head" src="{{head}}">
        <div class="name-container">
          <div class="name">{{name}}
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
        <div class="review">回复</div>
        <div style="width: 30%"></div>
        <div class="like" v-on:click="addlike">
          <img class="like-pic" src="../../static/imgs/like.png"/>{{like}}
        </div>
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
    margin: 8px;
    /*border-bottom: 1px solid lightgray;*/
    box-shadow: 0 0 4px darkgray;
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
    height: 12px;
  }

  .level {
    font-size: 14px;
    margin-right: 8px;
    float: right;
    line-height: 20px;
    height: 20px;
    color: gray;
  }

  .content {
    line-height: 22px;
    font-size: 14px;
    text-align: left;
    margin-left: 44px;
    margin-top: 8px;
    margin-bottom: 8px;
    min-height: 44px;
  }

  .bottom {
    float: bottom;
    font-size: 13px;
    display: flex;
    flex-direction: row;
    height: 24px;
    line-height: 24px;
  }

  .date {
    margin-left: 44px;
    color: lightslategray;
    width: 50%;
  }

  .review {
    width: 64px;
    border-radius: 12px;
    line-height: 20px;
    margin: 2px;
    background: #ebebeb;
    text-align: center;
  }

  .like {
    width: 20%;
    border-radius: 16px;
    text-align: left;
    color: white;
    line-height: 20px;
    height: 20px;
    margin-top: 2px;
    margin-bottom: 2px;
    margin-right: 8px;
    background: rgba(0, 0, 0, 0.75);
  }

  .like-pic {
    float: left;
    width: 16px;
    height: 16px;
    margin: 2px 6px;
  }
</style>
