<template>
  <div class="title">
    <div class="name"><img class="ico" src="../../static/imgs/news.png">{{name}}</div>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>
  .title {
    margin: 4px;
  }

  .ico {
    float: left;
    width: 32px;
    height: 32px;
  }

  .name {
    font-size: 16px;
    font-weight: bold;
    color: black;
    text-align: center;
    line-height: 32px;
  }
</style>
