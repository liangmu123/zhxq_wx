import Vue from 'vue'
import Router from 'vue-router'
import layout from './views/layout.vue'
import infoDetail from './views/home/infoDetail.vue'
import store from './store'
import { userInfo } from '@api/api'
import  base  from "@/common/base";

Vue.use(Router)


export const asyncRouterMap =
  [
    {
      path: '/',
      name: 'layout',
      component: layout,
      hidden: true,
      redirect: '/dashboard',
      meta: {
        title: '首页',
        icon: require('./assets/images/home.png'),
        iconActive: require('./assets/images/homeActive.png')
      },
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('@views/home/dashboard'),
          meta: {
            keepAlive: false,
            title: '智慧小区'
          }
        },
        {
          path: 'notice',
          name: 'notice',
          component: () => import('@views/home/notice'),
          meta: {
            keepAlive: false,
            title: '通知公告'
          }
        },
        {
          path: 'biref',
          name: 'biref',
          component: infoDetail,
          meta: {
            keepAlive: false,
            title: '小区简介'
          }
        },
        {
          path: 'repair',
          name: 'repair',
          component: () => import('@views/home/repair'),
          meta: {
            keepAlive: false,
            title: '物业维修'
          }
        },
        {
          path: 'report',
          name: 'report',
          component: () => import('@views/home/report'),
          meta: {
            keepAlive: false,
            title: '事件上报'
          }
        },
        {
          path: 'vote',
          name: 'vote',
          component: () => import('@views/home/vote'),
          meta: {
            keepAlive: false,
            title: '投票评议'
          }
        },
        {
          path: 'infoDetail/:id',
          name: 'infoDetail',
          component: infoDetail,
          meta: {
            keepAlive: false,
            title: '公告详情'
          }
        },
        {
          path: 'voteDetail/:id',
          name: 'voteDetail',
          component: () => import('@views/home/voteDetail'),
          meta: {
            keepAlive: false,
            title: '投票详情'
          }
        },
        {
          path: 'repairDetail/:id',
          name: 'repairDetail',
          component: () => import('@views/home/repairDetail'),
          meta: {
            keepAlive: false,
            title: '维修详情'
          }
        },
      ]
    },
    {
      path: '/visitor',
      component: layout,
      redirect: '/visitor/appointment',
      name: 'visitor',
      hidden: true,
      meta: {
        title: '访客预约',
        icon: require('./assets/images/appointment.png'),
        iconActive: require('./assets/images/appointment.png')
      },
      children: [
        {
          path: 'appointment',
          name: 'appointment',
          component: () => import('@views/appointment/index'),
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
      name: 'center',
      hidden: true,
      meta: {
        title: '个人中心',
        icon: require('./assets/images/user.png'),
        iconActive: require('./assets/images/userActive.png')
      },
      children: [
        {
          path: 'myCenter',
          name: 'myCenter',
          component: () => import('@views/myCenter/index'),
          meta: {
            keepAlive: false,
            title: '个人中心'
          }
        },
        {
          path: 'information',
          name: 'information',
          component: () => import('@views/myCenter/information'),
          meta: {
            keepAlive: false,
            title: '个人信息'
          }
        },
        {
          path: 'myReport',
          name: 'myReport',
          component: () => import('@views/myCenter/myReport'),
          meta: {
            keepAlive: false,
            title: '我的上报'
          }
        },
        {
          path: 'myVote',
          name: 'myVote',
          component: () => import('@views/myCenter/myVote'),
          meta: {
            keepAlive: false,
            title: '我的投票'
          }
        },
        {
          path: 'myCars',
          name: 'myCars',
          component: () => import('@views/myCenter/myCars'),
          meta: {
            keepAlive: false,
            title: '我的车辆'
          }
        },
        {
          path: 'myWO',
          name: 'myWO',
          component: () => import('@views/myCenter/myReport'),
          meta: {
            keepAlive: false,
            title: '我的工单'
          }
        },
        {
          path: 'myreportDetail/:id',
          name: 'myreportDetail',
          component: () => import('@views/myCenter/myreportDetail'),
          meta: {
            keepAlive: false,
            title: '上报详情'
          }
        },
        {
          path: 'myhandleDetail/:id',
          name: 'myhandleDetail',
          component: () => import('@views/myCenter/myreportDetail'),
          meta: {
            keepAlive: false,
            title: '工单详情'
          }
        },
        {
          path: 'feedback/:id',
          name: 'feedback',
          component: () => import('@views/myCenter/feedback'),
          meta: {
            keepAlive: false,
            title: '工单反馈'
          }
        },



      ]
    },
    {
      path: '/login',
      component: () => import('@views/login/index'),
      name: 'login',
      meta: {
        title: '登录'
      },
      hidden: false,
    }
  ]

const router = new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: asyncRouterMap
});

//用户状态验证
let userVerification = (next) => {
  userInfo().then(res => {
    if (res.data.role == null) {
      next('/login')
    } else if (!localStorage.user) {
      let user = {
        role: res.data.rolename,
        userName: res.data.person.name,
        mobile: res.data.person.mobile,
        image: res.data.person.image,
        address: res.data.person.room_text
      };
      store.dispatch("setUser", user);
      var userStr = JSON.stringify(user);
      localStorage.setItem("user", userStr);
      next();
    } else {
      next();
    }
  })
}

router.beforeEach((to, from, next) => {
  // 获取token
  // console.log(store.state)
  if (!store.state.token) {
    console.log(1111111)
    store.dispatch('getToken', to.query.access_token)
      .then(() => {
        // console.log(base)
        if (base.getQueryString('token')) {
          userVerification(next)
        }
        // next()
      })
  } else {
    console.log(2222)
    if (to.path == "/login") {
      next();
    } else {
      userVerification(next)
    }
  }
  // next()
})

router.afterEach((to, from) => {
  console.log(to)
  if (to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
