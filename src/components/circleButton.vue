<template>
  <a class="button-plus" href="">
    <div>
      <div class="corner" v-if="corner>0">{{corner}}</div>
      <div class="corner" style="background: rgba(0,0,0,0)" v-if="corner===0"></div>
      <img class="img" src="{{pic}}">
    </div>
    <div class="button-text">
      <div style="color:{{color}}">{{name}}</div>
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
    height: 20px;
    color: white;
    background: rgba(255, 0, 0, 0.8);
    border-radius: 100%;
    float: left;
    position: relative;
    top: 4px;
    left: 42px;
    z-index: 1;
  }

  .img {
    position: relative;
    border-radius: 100%;
    left: -10px;
    margin: 4px;
    width: 44px;
    height: 44px;
    z-index: 0;
  }

  .button-text {
    float: bottom;
    width: 72px;
    line-height: 20px;
    font-size: 14px;
  }
</style>
