<template>
  <div class="main-container">
    <div class="tab-changer">
      <div :class="['tab-item',currentTab === 0 ? 'on' : '']">会议日程数据</div>
      <div :class="['tab-item',currentTab === 1 ? 'on' : '']">无人机数据</div>
    </div>
    <tip name="会议日程数据"></tip>
    <uavitem text="无人机大会" src="../../static/imgs/technology.png"></uavitem>
    <uavitem text="无人机研发探讨" src="../../static/imgs/technology.png"></uavitem>
    <uavitem text="其他" src="../../static/imgs/technology.png"></uavitem>
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
        currentTab: 0,
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
  .tab-changer {
    display: flex;
    flex-direction: row;
    margin-top: 4px;
    margin-bottom: 4px;
    box-shadow: 0 2px 2px lightgray;
  }

  .tab-item {
    width: 50%;
    text-align: center;
    font-size: 15px;
    height: 28px;
  }

  .on {
    color: #708090;
    border-bottom: 3px solid #708090;
  }
</style>
