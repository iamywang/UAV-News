<template>
  <div>
    <tip name="友情提示"></tip>
    <div style="text-align: center; font-size: 16px">页面不存在</div>
  </div>
</template>

<script>
  import tip from '../../components/tip'

  export default {
    onLoad () {
      wx.setNavigationBarTitle({title: 'Error'})
    },
    onPullDownRefresh () {
      wx.stopPullDownRefresh()
    },
    components: {tip}
  }
</script>

<style scoped>

</style>
