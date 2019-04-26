<template>
  <div id="tabBar">
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home" @click.native="goTo">
        <div class="iconfont icon-shouye"></div>
        <span class="tab-txt">首页</span>
      </mt-tab-item>
      <mt-tab-item id="project" @click.native="goTo">
        <div class="iconfont icon-icon_index_line"></div>
        <span class="tab-txt">专题</span>
      </mt-tab-item>
      <mt-tab-item id="star" @click.native="goTo">
        <div class="iconfont icon-icon_star"></div>
        <span class="tab-txt">收藏</span>
      </mt-tab-item>
      <mt-tab-item id="userinfo" @click.native="goTo">
        <div class="iconfont icon-icon_group"></div>
        <span class="tab-txt">个人中心</span>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "tabBar",
  data() {
    return {
      selected: "home"
    };
  },
  methods: {
    goTo() {
      this.$router.push({ name: this.selected });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#tabBar {
  .mint-tabbar {
    background-color: #fff;
    background-image: none;
    box-shadow: 0 0 3px #ccc;
    .iconfont {
      padding-bottom: 0.066667rem;
      font-size: 20px;
    }
    .tab-txt {
      font-size: 14px;
    }
    .mint-tab-item{
      text-decoration: none;
    }
    .is-selected {
      color: #d43d3d;
      background-color: #fff;
    }
  }
}
</style>
