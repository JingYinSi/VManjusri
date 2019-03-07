import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'vuex', // The key to store the state on in the storage provider.
  storage: window.localStorage // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  // reducer: state => state,
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
})

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state () {
    return state
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
  plugins: [vuexLocalStorage.plugin]
})

export default store
