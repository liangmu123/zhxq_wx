// 全局组件
export const layout  = r => require.ensure([], () => r(require('@views/layout')), 'layout')

// 首页
export const dashboard  = r => require.ensure([], () => r(require('@views/dashboard')), 'dashboard')

// 数据分析
export const dataAnalysis  = r => require.ensure([], () => r(require('@views/dataAnalysis')), 'dataAnalysis')

// 个人中心
export const mycenter  = r => require.ensure([], () => r(require('@views/mycenter')), 'mycenter')

// 学分兑换
export const creditExchange  = r => require.ensure([], () => r(require('@views/creditExchange')), 'creditExchange')

// 我的积分
export const myCredit  = r => require.ensure([], () => r(require('@views/myCredit')), 'myCredit')

// 我的排行
export const myRank   = r => require.ensure([], () => r(require('@views/myRank')), 'myRank')

// 我的观看记录
export const myWatchRecord   = r => require.ensure([], () => r(require('@views/myWatchRecord')), 'myWatchRecord')

// 资讯详情
export const articleDetails  = r => require.ensure([], () => r(require('@views/articleDetails')), 'articleDetails')

// 视频详情
export const videoDetails  = r => require.ensure([], () => r(require('@views/videoDetails')), 'videoDetails')

// 图文混编列表
export const informationList = r => require.ensure([], () => r(require('@views/informationList')), 'informationList')

// 直播
export const live = r => require.ensure([], () => r(require('@views/live')), 'live')

// 三个不同模块的页面
export const threeModular = r => require.ensure([], () => r(require('@views/threeModular')), 'threeModular')