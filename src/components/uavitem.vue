<template>
  <a class="uav-item" :href="site">
    <img class="pic" :src="src">
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
      info: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        arrow: '>',
        site: '../datapage/main?name=' + this.text + '&pic=' + this.src + '&text=' + this.info
      }
    }
  }
</script>

<style scoped>
  .uav-item {
    border-bottom: 1px solid lightgrey;
    height: 80px;
    display: flex;
    flex-direction: row;
  }

  .pic {
    margin: 8px;
    width: 64px;
    height: 64px;
  }

  .text {
    width: 70%;
    font-size: 15px;
    line-height: 80px;
  }

  .arrow{
    width: 10%;
    text-align: center;
    font-size: 15px;
    line-height: 80px;
  }
</style>
