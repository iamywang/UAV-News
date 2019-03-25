<template>
  <a class="news"
     href="../mainpage/main?newsname={{name}}&date={{date}}&id={{id}}&tag={{tag}}&text={{text}}&commentlist={{commentlist}}&comment={{comment}}">
    <div class="name">{{name}}</div>
    <div class="main-container">
      <img class="img" src="{{pic}}">
      <div class="text">{{text}}</div>
    </div>
    <div class="dc-container">
      <div style="width: 30%"><img class="tip-img" src="../../static/imgs/ndate.png">{{date}}</div>
      <div style="width: 50%"><img class="tip-img" src="../../static/imgs/nuser.png">{{tag}}</div>
      <div style="width: 20%"><img class="tip-img" src="../../static/imgs/ncomment.png">{{comment}}</div>
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
      commentlist: {
        type: String,
        default: ''
      },
      id: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>
  .news {
    border-radius: 8px;
    height: 128px;
    margin: 8px 16px 8px 16px;
    box-shadow: 4px 4px 4px lightgrey;
  }

  .name {
    height: 24px;
    font-size: 15px;
    font-weight: bold;
    color: black;
    text-align: center;
    line-height: 24px;
  }

  .main-container {
    height: 72px;
  }

  .img {
    float: left;
    width: 100px;
    height: 64px;
    margin: 4px;
    border-radius: 8px;
  }

  .text {
    text-align: center;
    line-height: 24px;
    height: 72px;
    font-size: 14px;
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
