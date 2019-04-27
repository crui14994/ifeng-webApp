<template>
  <div id="header">
      <mt-header fixed title="首页">
        <div slot="left" class="iconfont icon-iconset0337"></div>
        <div slot="right" class="iconfont icon-sousuo"></div>
      </mt-header>
  </div>
</template>

<script>
export default {
  name: "headerTop",
  data() {
    return {
        
    };
  },
  methods:{
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#header{
  .mint-header{
    background-color: #F54343;
    font-size: 21px;
  }
  .iconfont {
    font-size: 24px;
  }
}
</style>
