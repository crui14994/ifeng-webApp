<template>
  <div >
      <transition name="fade">
        <keep-alive>
         <router-view ></router-view>
      </keep-alive>
      </transition>
      <tab-bar></tab-bar>  
  </div>
</template>

<script>
import tabBar from "@/components/tabBar";

export default {
  name: "index",
  data() {
    return {
    };
  },
  components: {
    tabBar
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  padding-top: 40px;
  .fade-enter {
    opacity: 0;
  }
  .fade-leave {
    opacity: 1;
  }
  .fade-enter-active {
    transition: opacity 0.5s;
  }
  .fade-leave-active {
    opacity: 0;
    transition: opacity 0.5s;
  }
}
</style>
