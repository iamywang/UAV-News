<template>
  <div class="main-container">
    <tip name="无人机数据"></tip>
    <div v-for="item in datalist" :key="item.name">
      <uavitem v-bind:src=item.src v-bind:name=item.name v-bind:text=item.text></uavitem>
    </div>
  </div>
</template>

<script>
  import uavitem from '../../components/uavitem'
  import tip from '../../components/tip'

  export default {
    components: {uavitem, tip},
    data () {
      return {
        datalist: [
          {name: '固定翼无人机', src: '../../static/imgs/technology.png', text: '固定翼无人机'},
          {name: '无人直升机', src: '../../static/imgs/technology.png', text: '无人直升机'},
          {name: '多旋翼无人机', src: '../../static/imgs/technology.png', text: '多旋翼无人机'},
          {name: '垂直起降固定翼', src: '../../static/imgs/technology.png', text: '垂直起降固定翼'}
        ]
      }
    }
  }
</script>

<style scoped>

</style>
