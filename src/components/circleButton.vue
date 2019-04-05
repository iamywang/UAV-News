<template>
  <div class="button-plus">
    <div>
      <div class="corner" v-if="corner>0">{{corner}}</div>
      <img class="img" src="{{pic}}">
    </div>
    <div class="button-text">
      <div style="color:{{color}}; width: 52px; float: left">{{name}}</div>
    </div>
  </div>
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
      },
      corner: {
        type: Number,
        default: 0
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

  .corner {
    font-size: 13px;
    width: 20px;
    line-height: 20px;
    color: white;
    background: rgba(255, 0, 0, 0.8);
    border-radius: 100%;
    float: right;
    position: relative;
    top: 0;
    right: 20px;
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
