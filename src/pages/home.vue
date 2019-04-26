<template>
  <div >
      <header-top></header-top>
      123
  </div>
</template>

<script>
import headerTop from '@/components/headerTop'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
      headerTop,
  },
  methods:{
    
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container{
    padding-top: 40px;
}

</style>
