
export default {
    setUser: ({ commit }, user) => {
        commit("SET_USER", user)
    },
    setLoading: ({ commit }, loadingState) => {
        commit("SET_LOADING", loadingState)
    }
}