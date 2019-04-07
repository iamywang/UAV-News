<template>
  <div class="main-container">
    <img src="../../../static/imgs/404.png" style="margin:8px; width: 96px; height: 96px"/>
    <tip name="友情提示"></tip>
    <div class="info">页面不存在</div>
  </div>
</template>

<script>
  import tip from '../../components/tip'

  export default {
    components: {tip}
  }
</script>

<style scoped>
  .main-container {
    text-align: center;
  }

  .info {
    margin: 4px;
    line-height: 32px;
    font-size: 14px;
    text-align: center;
  }
</style>
