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

  async lamplist ({
    getter,
    commit
  }) {
    try {
      /* let links = getter('entry')
      // console.log(JSON.stringify(links, null, 2))
      if (!links) {
        console.log('AAAAAAAAAAAAAAAAAAAAAAAAA')
        links = await $entry()
        commit('entry', links)
        console.log(JSON.stringify(links, null, 2))
      } */
      const lamps = await $get('/manjusri/lamps/index')
      return lamps
    } catch (e) {
      // do nothing
    }
  }
}

export default actions
