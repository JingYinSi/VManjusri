const mutations = {
  token: (state, token) => { state.token = token },
  user: (state, user) => {
    state.user = user
  },
  selectedPart: (state, data) => {
    state.selectedPart = data
  },
  selectedSupplier: (state, data) => {
    state.selectedSupplier = data
  },
  selectedPurchase: (state, data) => {
    state.selectedPurchase = data
  },
  purTransTasks: (state, data) => {
    state.purTransTasks = data
  }
}

export default mutations
