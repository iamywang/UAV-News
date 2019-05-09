<template>
  <div class="search-box">
    <img class="pic" src="../../static/imgs/search.png">
    <input class="input" type="text" placeholder="请输入搜索内容" v-model="value" v-if="flag===false">
    <div class="push" style="width: 20%" v-if="flag===false" @click="navigateTo">
      <img class="pic" src="../../static/imgs/search.png">搜索
    </div>
    <a class="push" href="../writepage/main" v-if="flag===false">
      <img class="pic" src="../../static/imgs/write.png">新文章
    </a>
    <input class="input" type="text" placeholder="请输入搜索内容" v-model="value" style="width: 72%" v-if="flag===true">
    <div class="push" style="width: 28%" v-if="flag===true" @click="navigateTo">
      <img class="pic" src="../../static/imgs/search.png">搜索
    </div>
  </div>
</template>
s
<script>
  export default {
    props: {
      flag: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        value: '',
        site: '../searchpage/main?key=' + this.value
      }
    },
    methods: {
      navigateTo () {
        this.site = '../searchpage/main?key=' + this.value
        wx.navigateTo({
          url: this.site
        })
      }
    }
  }
</script>

<style scoped>
  .search-box {
    margin-left: 3%;
    width: 94%;
    margin-top: 8px;
    margin-bottom: 8px;
    height: 32px;
    display: flex;
    flex-direction: row;
    background: #ebebeb;
    border-radius: 16px;
  }

  .pic {
    float: left;
    width: 16px;
    height: 16px;
    margin: 8px;
  }

  .input {
    width: 50%;
    font-size: 15px;
    line-height: 32px;
    text-align: center;
    height: 32px;
  }

  .push {
    width: 25%;
    color: #878787;
    height: 32px;
    font-size: 15px;
    text-align: left;
    line-height: 32px;
    border-radius: 16px;
  }

</style>
