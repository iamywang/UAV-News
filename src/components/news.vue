<template>
  <a class="news"
     href="../mainpage/main?id={{id}}">
    <div class="mark" v-if="marktag">{{marktag}}</div>
    <div class="name">{{name}}</div>
    <div class="main-container">
      <img class="img" src="{{pic}}">
      <div class="text">{{text}}</div>
    </div>
    <div class="dc-container">
      <div style="width: 36%"><img class="tip-img" src="../../static/imgs/ndate.png">{{date}}</div>
      <div style="width: 32%"><img class="tip-img" src="../../static/imgs/nuser.png">{{tag}}</div>
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
      tag: {
        type: String,
        default: ''
      },
      comment: {
        type: Number,
        default: 0
      },
      text: {
        type: String,
        default: ''
      },
      pic: {
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
      },
      marktag: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>
  .news {
    /*border-radius: 8px;*/
    height: 160px;
    margin: 8px;
    box-shadow: 0 0 4px darkgray;
  }

  .name {
    margin-left: 8px;
    height: 32px;
    font-size: 15px;
    font-weight: bold;
    color: black;
    text-align: left;
    width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 32px;
  }

  .mark {
    border-radius: 8px;
    margin: 6px;
    font-size: 12px;
    color: white;
    background: rgba(255, 75, 75, 0.75);
    box-shadow: 0 0 2px red;
    text-align: center;
    width: 48px;
    line-height: 20px;
    position: absolute;
    right: 6px;
  }

  .main-container {
    height: 96px;
  }

  .img {
    float: left;
    width: 120px;
    height: 80px;
    margin: 8px;
    border-radius: 8px;
    box-shadow: 0 0 4px lightgray;
  }

  .text {
    text-align: left;
    line-height: 24px;
    height: 96px;
    font-size: 13px;
    color: lightslategray;
    overflow: hidden;
    text-overflow: ellipsis;
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
