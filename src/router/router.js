import {
    layout,
    dashboard,
    dataAnalysis,
    creditExchange,
    mycenter,
    myCredit,
    myRank,
    myWatchRecord,
    articleDetails,
    videoDetails,
    informationList,
    live,
    threeModular
} from './components'

import {navigationData,titleData} from './navigation_title'

export default function(){
    return {
              // mode: 'history',
              // base: process.env.BASE_URL,
              routes: [
                  // 首页
                  {
                      path: '/',
                      component: layout,
                      redirect: '/dashboard',
                      name: 'layout',
                      meta:{
                          title:navigationData[0].title,
                          imgActive:navigationData[0].imgActive
                      },
                      children: [
                          // 首页重定向页面
                          {
                            path: 'dashboard',
                            name:'dashboard',
                            component: dashboard,
                            meta:{
                              keepAlive:false,
                              title:titleData[0].title[0]
                            }
                          },
                          // 图文混编列表
                          {
                            path: 'informationList1',
                            name:'informationList1',
                            component: informationList,
                            meta:{
                              keepAlive:false,
                              title:titleData[0].title[1]
                            }
                          },
                          // 三个不同模块的页面
                          {
                            path: 'threeModular',
                            name:'threeModular',
                            component: threeModular,
                            meta:{
                              keepAlive:false,
                              title:titleData[0].title[2]
                            }
                          },
                          // 图文混编列表
                          {
                            path: 'informationList2',
                            name:'informationList2',
                            component: informationList,
                            meta:{
                              keepAlive:false,
                              title:titleData[0].title[3]
                            }
                          },
                          // 图文混编列表
                          {
                            path: 'informationList3',
                            name:'informationList3',
                            component: informationList,
                            meta:{
                              keepAlive:false,
                              title:titleData[0].title[4]
                            }
                          },
                          // 直播
                          {
                            path: 'live',
                            name:'live',
                            component: live,
                            meta:{
                              keepAlive:false,
                              title:titleData[0].title[5]
                            }
                          },
                          // 资讯详情
                          {
                            path: 'articleDetails',
                            name:'articleDetails',
                            component: articleDetails,
                            meta:{
                              keepAlive:false
                            }
                          },
                          // 视频详情
                          {
                            path: 'videoDetails',
                            name:'videoDetails',
                            component: videoDetails,
                            meta:{
                              keepAlive:false
                            }
                          }
                      ]
                  },
                  // 学分兑换
                  {
                      path: '/exchange',
                      component: layout,
                      redirect: '/exchange/creditExchange',
                      name: 'exchange',
                      meta:{
                          title:navigationData[1].title,
                          imgActive:navigationData[1].imgActive
                      },
                      children: [
                          // 重定向页面
                          {
                            path: 'creditExchange',
                            name:'creditExchange',
                            component: creditExchange,
                            meta:{
                              keepAlive:false,
                              title:titleData[1].title[0]
                            }
                          }
                          
                      ]
                  },
                  // 个人中心
                  {
                      path: '/center',
                      component: layout,
                      redirect: '/center/mycenter',
                      name: 'layout',
                      meta:{
                          title:navigationData[2].title,
                          imgActive:navigationData[2].imgActive
                      },
                      children: [
                          // 重定向页面
                          {
                            path: 'mycenter',
                            name:'mycenter',
                            component: mycenter,
                            meta:{
                              keepAlive:false,
                              title:titleData[2].title[0]
                            }
                          },
                          // 我的积分
                          {
                            path: 'myCredit',
                            name:'myCredit',
                            component: myCredit,
                            meta:{
                              keepAlive:false,
                              title:titleData[2].title[1]
                            }
                          },
                          // 我的排行
                          {
                            path: 'myRank',
                            name:'myRank',
                            component: myRank,
                            meta:{
                              keepAlive:false,
                              title:titleData[2].title[2]
                            }
                          },
                          // 我的观看记录
                          {
                            path: 'myWatchRecord',
                            name:'myWatchRecord',
                            component: myWatchRecord,
                            meta:{
                              keepAlive:false,
                              title:titleData[2].title[3]
                            }
                          },
                          // 资讯详情
                          {
                            path: 'articleDetails',
                            name:'articleDetails',
                            component: articleDetails,
                            meta:{
                              keepAlive:false
                            }
                          },
                          // 视频详情
                          {
                            path: 'videoDetails',
                            name:'videoDetails',
                            component: videoDetails,
                            meta:{
                              keepAlive:false
                            }
                          }
                      ]
                  }
                  // 对象结尾
              ]
              // routes数组结尾
          }
}
