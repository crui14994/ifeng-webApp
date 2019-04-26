<template>
  <div >
      <div>
          <mt-header fixed >
              123
          </mt-header>
      </div>
      <tab-bar></tab-bar> 
  </div>
</template>

<script>
import tabBar from '@/components/tabBar'
export default {
  name: 'star',
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
<style scoped>

</style>
