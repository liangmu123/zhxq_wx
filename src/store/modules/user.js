import {getQueryString} from '@/api/getData.js'

const user = {
    state:{
        token:'',//用户token
    },
    mutations:{
        // 保存用户token
        SET_TOKEN : (state,token)=>{
            state.token = token
            if(window.localStorage.getItem('') != null){
                window.localStorage.removeItem('access_token')
            }
            window.localStorage.setItem('access_token',token)
        },
    },
    actions:{
        // 获取用户token
        getToken({commit},{access_token}){
            return new Promise(resolve => {
              if(access_token){
                  commit('SET_TOKEN',access_token)
                  resolve()
                  return
              }
              var token = getQueryString('access_token')
              if(token == null){
                  var url = encodeURIComponent(window.location.href)
                  window.location.href = process.env.VUE_APP_INTERFACE_PATH + url
              }else{
                  commit('SET_TOKEN',token)
                  resolve()
              }
            })
        }
    }
}
export default user