import Vue from 'vue'
import App from './App.vue'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import {post,fetch} from '../config/axios'
import router from './router'
Vue.use(ElementUi)
Vue.prototype.$get=fetch
Vue.prototype.$post=post
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
