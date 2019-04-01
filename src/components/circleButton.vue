<template>
  <a class="button-plus" href="../test/main">
    <img class="img" src="{{pic}}">
    <div class="button-text" style="color:{{color}}">{{name}}</div>
  </a>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: ''
      },
      pic: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>
  .button-plus {
    margin: 4px;
    width: 72px;
    height: 72px;
    text-align: center;
    display: inline-block;
  }

  .img {
    border-radius: 100%;
    width: 44px;
    height: 44px;
  }

  .button-text {
    float: bottom;
    line-height: 28px;
    font-size: 14px;
  }
</style>
