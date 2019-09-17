import Vue from 'vue'
import Router from 'vue-router'
import layout from './views/layout.vue'

Vue.use(Router)


export const asyncRouterMap =
  // mode: 'history',
  // base: process.env.BASE_URL,
  [
    {
      path: '/',
      name: 'layout',
      component: layout,
      redirect: '/dashboard',
      meta: {
        title: '首页',
        icon: require('./assets/images/homepage.png'),
        iconActive: require('./assets/images/homepage01.png')
      },
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('@views/dashboard'),
          meta: {
            keepAlive: false,
            title: '智慧小区'
          }
        },
        {
          path: 'informationList1',
          name: 'informationList1',
          component: () => import('@views/informationList'),
          meta: {
            keepAlive: false,
            title: '通知公告'
          }
        },
        {
          path: 'threeModular',
          name: 'threeModular',
          component: () => import('@views/threeModular'),
          meta: {
            keepAlive: false,
            title: '小区简介'
          }
        },
        {
          path: 'informationList2',
          name: 'informationList2',
          component: () => import('@views/informationList'),
          meta: {
            keepAlive: false,
            title: '物业维修'
          }
        },
        {
          path: 'informationList3',
          name: 'informationList3',
          component: () => import('@views/informationList'),
          meta: {
            keepAlive: false,
            title: '事件上报'
          }
        },
        {
          path: 'informationList4',
          name: 'informationList4',
          component: () => import('@views/informationList'),
          meta: {
            keepAlive: false,
            title: '投票评选'
          }
        }
      ]
    },
    {
      path: '/exchange',
      component: layout,
      redirect: '/exchange/creditExchange',
      name: 'exchange',
      meta: {
        title: '访客预约',
        icon: require('./assets/images/legal.png'),
        iconActive: require('./assets/images/legal01.png')
      },
      children: [
        {
          path: 'creditExchange',
          name: 'creditExchange',
          component: () => import('@views/creditExchange'),
          meta: {
            keepAlive: false,
            title: '访客预约'
          }
        }

      ]
    },
    {
      path: '/center',
      component: layout,
      redirect: '/center/mycenter',
      name: 'layout',
      meta: {
        title: '个人中心',
        icon: require('./assets/images/center.png'),
        iconActive: require('./assets/images/center01.png')
      },
      children: [
        {
          path: 'mycenter',
          name: 'mycenter',
          component: () => import('@views/mycenter'),
          meta: {
            keepAlive: false,
            title: '个人中心'
          }
        },
        {
          path: 'myCredit',
          name: 'myCredit',
          component: () => import('@views/myCredit'),
          meta: {
            keepAlive: false,
            title: '个人信息'
          }
        },
        // 我的排行
        {
          path: 'myRank',
          name: 'myRank',
          component: () => import('@views/myRank'),
          meta: {
            keepAlive: false,
            title: '我的上报'
          }
        },
        // 我的观看记录
        {
          path: 'myWatchRecord',
          name: 'myWatchRecord',
          component: () => import('@views/myWatchRecord'),
          meta: {
            keepAlive: false,
            title: '我的投票'
          }
        }
      ]
    }
  ]

const router = new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: asyncRouterMap
});

router.beforeEach((to, from, next) => {

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

router.afterEach((to, from) => { });

export default router;
