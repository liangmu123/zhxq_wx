import { getQueryString } from '@/api/getData.js'
export default {
    setUser: ({ commit }, user) => {
        commit("SET_USER", user)
    },
    setLoading: ({ commit }, loadingState) => {
        commit("SET_LOADING", loadingState)
    },
    getToken: ({ commit }, access_token) => {
        if (access_token) {
            commit('SET_TOKEN', access_token)
            return
        }
        var token = getQueryString('token');
        if (token == null) {
            var url = encodeURIComponent(window.location.href.split('?')[0])
            //   console.log(window.location.href.split('?')[0])
            //   console.log(process.env.VUE_APP_AUTHORIZATION_PATH)
            window.location.href = process.env.VUE_APP_AUTHORIZATION_PATH + url
        } else {
            commit('SET_TOKEN', token)
        }
    }
}