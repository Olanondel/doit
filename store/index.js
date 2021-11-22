export const state = () => ({
  currentUser: null
})

export const mutations = {
  setUser(s, user) {
    s.currentUser = user
  }
}

export const actions= {
  async getCurrentUser(ctx) {
    console.log(await ctx)
  }
}

export const getters= {}
