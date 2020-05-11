import Vue from 'vue'
import App from './App.vue'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import i18n from './i18n'
import store from './store'

import {post,fetch} from '../config/axios'
import router from './router'
Vue.use(ElementUi)
Vue.prototype.$get=fetch
Vue.prototype.$post=post
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
