<template>
  <a class="setting-item" href="{{url}}">
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
      url: {
        type: String,
        default: '../error/main'
      }
    }
  }
</script>

<style scoped>
  .setting-item {
    background: white;
    border-bottom: 1px solid lightgrey;
    margin-left: 4px;
    margin-right: 4px;
    height: 44px;
  }

  .pic {
    float: left;
    margin: 10px 8px;
    width: 24px;
    height: 24px;
  }

  .text {
    font-size: 15px;
    line-height: 44px;
  }
</style>
