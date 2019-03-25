<template>
  <div class="main-container">
    <tip name="无人机数据查询"></tip>
    <uavitem v-bind:src=this.src text="固定翼无人机" v-bind:paras=this.paras v-bind:advs=this.advs v-bind:fields=this.fields></uavitem>
    <uavitem v-bind:src=this.src text="无人直升机" v-bind:paras=this.paras v-bind:advs=this.advs v-bind:fields=this.fields></uavitem>
    <uavitem v-bind:src=this.src text="多旋翼无人机" v-bind:paras=this.paras v-bind:advs=this.advs v-bind:fields=this.fields></uavitem>
    <uavitem v-bind:src=this.src text="垂直起降固定翼" v-bind:paras=this.paras v-bind:advs=this.advs v-bind:fields=this.fields></uavitem>
    <uavitem v-bind:src=this.src text="其他无人机" v-bind:paras=this.paras v-bind:advs=this.advs v-bind:fields=this.fields></uavitem>
  </div>
</template>

<script>
  import uavitem from '../../components/uavitem'
  import tip from '../../components/tip'

  export default {
    components: {uavitem, tip},
    data () {
      return {
        src: '../../static/imgs/technology.png',
        advs: '优点',
        paras: '参数',
        fields: '应用'
      }
    },
    onPullDownRefresh () {
      wx.stopPullDownRefresh()
    }
  }
</script>

<style scoped>

</style>
