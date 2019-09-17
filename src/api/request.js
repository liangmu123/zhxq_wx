import axios from 'axios'
import { Message } from 'element-ui'

axios.defaults.baseURL = process.env.VUE_APP_INTERFACE_PATH
axios.defaults.withCredentials = true

// loading框设置局部刷新，且所有请求完成后关闭loading框
let needLoadingRequestCount = 0 // 声明一个对象用于存储请求个数
function startLoading () {
    store.dispatch('SET_LOAD_MUTATIONS',{loading:true})
}
function endLoading () {
    store.dispatch('SET_LOAD_MUTATIONS',{loading:false})
}
function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}
function hideFullScreenLoading () {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}

// //request拦截器
// axios.interceptors.request.use(
//     config => {
//         showFullScreenLoading()
//         //每次发送请求之前检测都vuex存有token,那么都要放在请求头发送给服务器
//         // if(store.state.user.token){
//         //     //config.headers.Authorization = `token ${store.state.token}`;
//         // }else{
//         //     store.dispatch('getToken')
//         // }
//         return config;
//     },
//     err => {
//       hideFullScreenLoading()
//       return Promise.reject(err)
//     }
// )
// //respone拦截器
// axios.interceptors.response.use(
//     response => {
//         hideFullScreenLoading()
//         // if(response.data.code == 10002){
//         //     var hash = window.location.hash
//         //     var url = encodeURIComponent(BASE_TWO + '/' + hash)
//         //     window.location.href = BASE + '/home/auth/wxlogin?redirect_uri='+url
//         // }
//         return response
//     },
//     error => { //默认除了2XX之外的都是错误的，就会走这里
//         hideFullScreenLoading()
//         if(error.response){   
//         }
//         return Promise.reject(error.response);
//     }
// )
/**
 * 
 * @param {*} type  请求类型，boolean值为false则为get,为true则为post
 * @param {*} url   请求得路径
 * @param {*} params 请求得参数，get为字符串，post为对象
 * @param {*} callback 拿到数据后得回调
 * @param {*} isCarryToken 是否携带token  默认取window.localStorage.getItem('access_token')
 */
function REQUEST(type,url,params,callback,isCarryToken=false){
    // get方法
    if(!type){
        // 必须要字符串噢~
        if(Object.prototype.toString.call(params) != "[object String]"){
            alert('get方法需要得是字符串噢~~')
        }
        // 携带token
        isCarryToken ? params + '&&access_token=' + window.localStorage.getItem('access_token') : params
        // 请求主体
        axios.get(url + '?' + params)
        .then(res=>{
            // 成功回调
            callback(res.data)
        })
        .catch(err=>{
            Message.error('网络环境异常')
        })
    }else{
        // post方法
        // 必须要对象噢~
        if(Object.prototype.toString.call(params) != '[object Object]'){
            alert('post方法需要得是对象噢~')
        }
        // 携带token
        isCarryToken ? params.access_token = window.localStorage.getItem('access_token') : params
        // 请求主体
        axios.post(url,params)
        .then(res=>{
            // 成功回调
            callback(res.data)
        })
        .catch(err=>{
            Message.error('网络环境异常')
        })
    }
}

export default REQUEST