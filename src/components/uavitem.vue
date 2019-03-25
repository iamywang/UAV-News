<template>
  <a class="uav-item" href="../datapage/main?name={{text}}&pic={{src}}&paras={{paras}}&advantages={{advs}}&fields={{fields}}">
    <img class="pic" src="{{src}}">
    <div class="text">{{text}}</div>
  </a>
</template>

<script>
  export default {
    props: {
      src: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      },
      paras: {
        type: String,
        default: ''
      },
      advs: {
        type: String,
        default: ''
      },
      fields: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>
  .uav-item {
    border-bottom: 1px solid lightgrey;
    margin-left: 4px;
    margin-right: 4px;
    height: 80px;
  }

  .pic {
    float: left;
    margin: 8px;
    width: 64px;
    height: 64px;
  }

  .text {
    font-size: 15px;
    line-height: 80px;
  }
</style>
