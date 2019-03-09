import Vue from 'vue'
import 'bootstrap'
import 'babel-polyfill'
import 'bootstrap/dist/css/bootstrap.css'
import VueFetch from './plugins/fetch'
import './finelets/components/global-components'
import Main from './pages/Main.vue'
import router from './router'
import * as filters from './filters'
import store from './store'
import {
  sync
} from 'vuex-router-sync'

sync(store, router)

for (const key in filters) {
  Vue.filter(key, filters[key])
}

Vue.use(VueFetch, {
  entryUrl: process.env.NODE_ENV === 'production' ? 'http://192.168.5.166/cross/auth/login' : 'http://localhost:8090/cross/auth/login',
  baseUrl: process.env.NODE_ENV === 'production' ? 'http://192.168.5.166/cross/api' : 'http://localhost:8090/cross/api'
})

async function main () {
  new Vue({
    ...Main,
    router,
    store
  }).$mount('#app')
}

main()
