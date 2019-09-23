
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
    }
}

