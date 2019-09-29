
export default {
    //用户信息
    SET_USER: (state, user) => {
        state.user = user;
    },

    //路由
    SET_ROUTERS: (state, routers) => {
        state.routers = routers
    },

    //loading
    SET_LOADING: (state, loadingState) => {
        state.loading = loadingState
    },
    //保存token
    SET_TOKEN: (state, token) => {
        state.token = token;
        if (window.localStorage.getItem('access_token') != null) {
            window.localStorage.removeItem('access_token')
        }
        window.localStorage.setItem('access_token', token)
        console.log(11)
    }
}

