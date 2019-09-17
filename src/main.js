import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import YDUI from 'vue-ydui' /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css'
/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */

// 引入基础样式
import './style/common.css'
import './style/ydui.css'
import './style/element.css'

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

router.beforeEach((to,from,next) => {

    // 微信分享
    // WX_SHARE(to)

    // 获取token
    // if(!store.state.user.token){
    //     store.dispatch('getToken',{access_token:to.query.access_token})
    //     .then(function(){
    //         next()
    //     })
    // }else{
    //     next()
    // }
    next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
