<template>
  <a class="videox" href="../videopage/main?newsname={{name}}&date={{date}}&id={{id}}&tag={{time}}&see={{see}}&commentlist={{commentlist}}&comment={{comment}}&src={{src}}">
    <div class="name"  style="background: url({{back}}) no-repeat;background-size: cover;-moz-background-size: cover;-webkit-background-size: cover;-o-background-size: cover">{{name}}</div>
    <div class="dc-container">
        <div style="width: 36%"><img class="tip-img" src="../../static/imgs/ndate.png">{{date}}</div>
        <div style="width: 20%"><img class="tip-img" src="../../static/imgs/nuser.png">视频</div>
        <div style="width: 20%"><img class="tip-img" src="../../static/imgs/ntime.png">{{time}}</div>
        <div style="width: 14%"><img class="tip-img" src="../../static/imgs/ncomment.png">{{comment}}</div>
        <div style="width: 14%"><img class="tip-img" src="../../static/imgs/nsee.png">{{see}}</div>
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
      src: {
        type: String,
        default: ''
      },
      back: {
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
      },
      see: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style scoped>
  .videox {
    height: 160px;
    margin: 8px 16px 8px 16px;
    border-radius: 8px;
    box-shadow: 4px 4px 4px lightgrey;
  }

  .name {
    height: 128px;
    color: snow;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    line-height: 32px;
    border-radius: 8px;
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
