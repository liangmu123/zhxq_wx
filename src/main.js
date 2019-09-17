import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import YDUI from 'vue-ydui' /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css'
/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */

// 引入基础样式
import './assets/style/common.css'
import './assets/style/ydui.css'
import './assets/style/element.css'

Vue.use(YDUI)

// 请求方法
import REQUEST from '@api/request'

// 分享方法
import WX_SHARE from '@api/share'

Vue.prototype.$request= REQUEST

import VueVideoPlayer from 'vue-video-player'
Vue.use(VueVideoPlayer)

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
