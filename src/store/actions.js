/* eslint-disable no-unused-vars */
import {
  $get,
  $post,
  $entry,
  $put,
  $upload
} from '../plugins/fetch'
import router from '../router'
// import moment from 'moment'

const actions = {
  async entry ({
    commit
  }) {
    try {
      const links = await $entry()
      if (links) {
        commit('entry', links)
        let path = router.currentRoute.params.wantedRoute || {
          name: 'home'
        }
        router.replace(
          path
        )
      }
    } catch (e) {
      // do nothing
    }
  },

  async logout ({
    commit
  }) {
    commit('user', null)
    if (router.currentRoute.matched.some(r => !r.meta.public)) {
      router.replace({
        name: 'login',
        params: {
          wantedRoute: router.currentRoute.fullPath
        }
      })
    }
  }
}

export default actions
