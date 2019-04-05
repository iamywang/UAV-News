<template>
  <div class="tip">
    <div class="left"></div>
    <div class="name">{{name}}</div>
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
  .tip {
    margin: 4px;
    height: 28px;
  }

  .left {
    float: left;
    width: 7px;
    height: 28px;
    background: #708090;
    margin-right: 4px;
  }

  .name {
    font-size: 14px;
    color: darkgreen;
    text-align: left;
    line-height: 28px;
  }
</style>
