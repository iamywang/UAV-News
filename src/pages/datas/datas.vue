<template>
  <div class="main-container">
    <div class="headinfo">
      <img class="head" src="../../../static/imgs/drone.png">
      <div class="name">无人机数据</div>
    </div>
    <div class="tab-changer">
      <div :class="['tab-item',currentTab === 0 ? 'on' : '']" v-on:click="setTab(0)">无人机数据</div>
      <div :class="['tab-item',currentTab === 1 ? 'on' : '']" v-on:click="setTab(1)">会议日程数据</div>
      <div :class="['tab-item',currentTab === 2 ? 'on' : '']" v-on:click="setTab(2)">电商购买数据</div>
    </div>

    <div v-if="currentTab === 0">
      <div v-for="item in datalist" :key="item.name">
        <uavitem v-bind:src=item.src v-bind:name=item.name v-bind:text=item.text></uavitem>
      </div>
    </div>
    <div v-if="currentTab === 1">
      <uavitem text="无人机大会1" src="../../static/imgs/technology.png"></uavitem>
      <uavitem text="无人机大会2" src="../../static/imgs/technology.png"></uavitem>
      <uavitem text="无人机大会3" src="../../static/imgs/technology.png"></uavitem>
      <uavitem text="无人机研发探讨" src="../../static/imgs/technology.png"></uavitem>
      <uavitem text="其他" src="../../static/imgs/technology.png"></uavitem>
    </div>
    <div v-if="currentTab === 2">
      <uavitem text="淘宝" src="../../static/imgs/taobao.png"></uavitem>
      <uavitem text="天猫" src="../../static/imgs/tmall.png"></uavitem>
      <uavitem text="京东" src="../../static/imgs/jd.png"></uavitem>
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
          {name: '固定翼无人机', src: 'https://product1.djicdn.com/uploads/photos/35446/medium_5ff80792-f403-4834-bf05-ac3e8b89be9b.jpg', text: '固定翼无人机'},
          {name: '无人直升机', src: 'https://product1.djicdn.com/uploads/photos/35446/medium_5ff80792-f403-4834-bf05-ac3e8b89be9b.jpg', text: '无人直升机'},
          {name: '多旋翼无人机', src: 'https://product1.djicdn.com/uploads/photos/35446/medium_5ff80792-f403-4834-bf05-ac3e8b89be9b.jpg', text: '多旋翼无人机'},
          {name: '垂直起降固定翼', src: 'https://product1.djicdn.com/uploads/photos/35446/medium_5ff80792-f403-4834-bf05-ac3e8b89be9b.jpg', text: '垂直起降固定翼'}
        ]
      }
    },
    methods: {
      setTab (index) {
        this.currentTab = index
      }
    }
  }
</script>

<style scoped>
  .headinfo {
    background: white;
    margin: 4px;
    height: 80px;
  }

  .head {
    float: left;
    margin: 8px;
    width: 64px;
    height: 64px;
    border-radius: 100%;
  }

  .name {
    font-size: 18px;
    line-height: 80px;
  }

  .tab-changer {
    display: flex;
    flex-direction: row;
    margin-top: 4px;
    margin-bottom: 4px;
    box-shadow: 0 2px 2px lightgray;
  }

  .tab-item {
    width: 33.3%;
    text-align: center;
    font-size: 15px;
    height: 26px;
  }

  .on {
    color: #708090;
    border-bottom: 3px solid #708090;
  }
</style>
