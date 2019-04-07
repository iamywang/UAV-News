<template>
  <a class="setting-item" href="{{url}}">
    <img class="pic" src="{{src}}">
    <div class="text">{{text}}</div>
    <div class="arrow">{{arrow}}</div>
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
        default: ''
      }
    },
    data () {
      return {
        arrow: '>'
      }
    }
  }
</script>

<style scoped>
  .setting-item {
    border-bottom: 1px solid lightgrey;
    margin-left: 4px;
    margin-right: 4px;
    height: 44px;
    display: flex;
    flex-direction: row;
  }

  .pic {
    margin: 10px 8px;
    width: 24px;
    height: 24px;
  }

  .text {
    width: 90%;
    font-size: 15px;
    line-height: 44px;
  }

  .arrow{
    width: 10%;
    text-align: center;
    font-size: 15px;
    line-height: 44px;
  }
</style>
