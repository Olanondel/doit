export const state = () => ({

})

export const mutations = {

}

export const actions= {
  nuxtServerInit({ commit }, { res }) {
    if (res && res.locals && res.locals.user) {
      const { authUser } = res.locals.user

      commit('setUser', authUser)
    }
  },
}

export const getters= {}
