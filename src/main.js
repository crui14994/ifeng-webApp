// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 按需引入部分组件
import 'mint-ui/lib/style.css'
import './assets/css/my-mint.scss' //全局修改mint-UI样式
// import { Tabbar, TabItem ,Header} from 'mint-ui';
// Vue.component(Tabbar.name, Tabbar);
// Vue.component(TabItem.name, TabItem);
// Vue.component(Header.name, Header);
import Mint from 'mint-ui';
Vue.use(Mint);

import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)

//jsonp
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
