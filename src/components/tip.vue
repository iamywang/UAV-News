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
    height: 24px;
  }

  .left {
    float: left;
    width: 6px;
    height: 24px;
    background: #708090;
    margin-right: 4px;
  }

  .name {
    font-size: 13px;
    color: #708090;
    text-align: left;
    line-height: 24px;
  }
</style>
