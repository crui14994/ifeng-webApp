<template>
  <div >
      <div class="container" >
          <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
            <ul>
              <li style="height:80px;" v-for="item in list">{{ item }}</li>
            </ul>
          </mt-loadmore>
      </div>
  </div>
</template>

<script>
export default {
  name: "project",
  data() {
    return {
      list: [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      allLoaded: false,
      busy: false
    };
  },
  components: {},
  methods: {
    loadTop() {
      // ...// 加载更多数据
      this.$refs.loadmore.onTopLoaded();
    },
    loadBottom() {
      // ...// 加载更多数据
      // this.allLoaded = true; // 若数据已全部获取完毕
      console.log(123);
      this.$refs.loadmore.onBottomLoaded();
    },
    loadMore() {
      this.busy = true;
      setTimeout(() => {
        for (var i = 0, j = 10; i < j; i++) {
          // this.list.push({ name: count++ });
        }
        this.busy = false;
      }, 1000);
      console.log(123);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
}
</style>
