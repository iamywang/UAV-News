<template>
  <a class="videox" :href="site">
    <div class="mark">视频</div>
    <div class="name"  :style="backgroundstyle">{{name}}</div>
    <div class="dc-container">
        <div style="width: 40%"><img class="tip-img" src="../../static/imgs/ndate.png">{{date}}</div>
        <div style="width: 28%"><img class="tip-img" src="../../static/imgs/ntime.png">{{time}}</div>
        <div style="width: 16%"><img class="tip-img" src="../../static/imgs/ncomment.png">{{comment}}</div>
        <div style="width: 16%"><img class="tip-img" src="../../static/imgs/nsee.png">{{see}}</div>
      </div>
  </a>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: ''
      },
      date: {
        type: String,
        default: ''
      },
      time: {
        type: String,
        default: ''
      },
      comment: {
        type: Number,
        default: 0
      },
      back: {
        type: String,
        default: ''
      },
      id: {
        type: String,
        default: ''
      },
      see: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        site: '../videopage/main?id=' + this.id,
        backgroundstyle: 'background: url(' + this.back + ') no-repeat;background-size: cover;-moz-background-size: cover;-webkit-background-size: cover;-o-background-size: cover'
      }
    }
  }
</script>

<style scoped>
  .videox {
    height: 160px;
    margin: 8px;
    /*border-radius: 8px;*/
    box-shadow:0 0 4px darkgray;
  }

  .name {
    height: 128px;
    color: snow;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 32px;
    /*border-radius: 8px;*/
  }

  .mark {
    border-radius: 8px;
    margin: 6px;
    font-size: 12px;
    color: black;
    background: rgba(255, 255, 255, 0.75);
    box-shadow: 0 0 2px white;
    text-align: center;
    width: 48px;
    line-height: 20px;
    position: absolute;
    right: 6px;
  }

  .dc-container {
    float: bottom;
    margin-left: 4px;
    margin-right: 4px;
    line-height: 32px;
    height: 32px;
    display: flex;
    flex-direction: row;
    font-size: 13px;
    color: darkslategray;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .tip-img {
    float: left;
    width: 16px;
    height: 16px;
    margin: 8px;
  }
</style>
