const mutations = {
  entry: (state, data) => {
    state.entry = data
  },
  token: (state, data) => {
    state.token = data
  },
  onlines: (state, data) => {
    state.onlines = data
  },
  user: (state, user) => {
    state.user = user
  }
}

export default mutations
