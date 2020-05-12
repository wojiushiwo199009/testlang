import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/page/Home.vue'
import Center from '@/page/Center.vue'
import Scroll from '@/page/Scroll.vue'
import Http from '@/page/Http.vue'
import I18n from '@/page/I18n.vue'

Vue.use(Router)
const router = new Router({
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
          path: 'scroll', 
          name: 'scroll',
          component: Scroll
        },
        {
          path: 'http',
          name: 'http',
          component: Http
        },
        {
          path: 'i18n',
          name: 'i18n',
          component: I18n
        },
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
// router.beforeEach((to,from,next)=>{
//   console.log(to);
//   console.log(from);
//   if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
//     if (localStorage.getItem('access_token')) { //判断本地是否存在access_token
//       next();
//     } else {
//       if (to.path === '/home') {
//         next();
//       } else {
//         next({
//           path: '/home'
//         })
//       }
//     }
//   }
//   else {
//     next();
//   }
//   /*如果本地 存在 token 则 不允许直接跳转到 登录页面*/
//   if (to.fullPath == "/login") {
//     if (localStorage.getItem('access_token')) {
//       next({
//         path: from.fullPath
//       });
//     } else {
//       next();
//     }
//   }
// })
export default router