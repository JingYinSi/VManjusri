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

const entryUrl = '/manjusri'
const baseUrl = process.env.NODE_ENV === 'production' ? 'http://dev.jingyintemple.top/jingyin/rests' : 'http://localhost/jingyin/rests'
Vue.use(VueFetch, {entryUrl, baseUrl})

async function main () {
  await store.dispatch('entry')
  new Vue({
    ...Main,
    router,
    store
  }).$mount('#app')
}

main()
