import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/page/Home.vue'
import Center from '@/page/Center.vue'
import About from '@/page/About.vue'

Vue.use(Router)

export default new Router({
  routes:[
    {
      path:'/',
      component:Home,
      redirect: '/home',
      children:[
        {
          path:'home',
          name:'home',
          component:Center,
        },
        {
          path: 'about', 
          name: 'about',
          component: About
        },
      ]
    }
  ]
})