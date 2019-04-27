import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/pages/index'),
      children:[
        {
          path: '/',
          name: 'home',
          component: () => import('@/pages/home')
        },
        {
          path: 'project',
          name: 'project',
          component: () => import('@/pages/project')
        },
        {
          path: 'star',
          name: 'star',
          component: () => import('@/pages/star')
        },
        {
          path: 'userinfo',
          name: 'userinfo',
          component: () => import('@/pages/userinfo')
        }
      ]
    },
    
  ]
})
