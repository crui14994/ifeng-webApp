<template>
  <div >
      <div class="container">
          <div class="swiper">
              <mt-swipe :auto="4000">
                <mt-swipe-item>1</mt-swipe-item>
                <mt-swipe-item>2</mt-swipe-item>
                <mt-swipe-item>3</mt-swipe-item>
                <mt-swipe-item>3</mt-swipe-item>
                <mt-swipe-item>3</mt-swipe-item>
                <mt-swipe-item>3</mt-swipe-item>
             </mt-swipe>
          </div>
      </div>

      <tab-bar></tab-bar> 
  </div>
</template>

<script>
import tabBar from '@/components/tabBar'
export default {
  name: 'project',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    tabBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container{
    .swiper{
        height: 5.333333rem;
    }
}
</style>
