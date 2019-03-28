/* eslint-disable no-unused-vars */
import {
  $get,
  $post,
  $entry,
  $put,
  $upload
} from '../plugins/fetch'
import router from '../router'
import __ from 'underscore'

const actions = {
  async entry (ctx) {
    let entry = ctx.getters.entry
    if (!entry) {
      entry = await $entry()
      let links = {}
      __.each(entry, item => {
        links[item.rel] = item.href
      })
      ctx.commit('entry', links)
      entry = links
    }
    return entry
  },

  async lamplist (ctx) {
    let entry = ctx.getters.entry
    const data = $get(entry.Lamps)
    return data
  },

  async monklist (ctx) {
    let entry = ctx.getters.entry
    const data = $get(entry.Monks)
    return data
  }
}

export default actions
