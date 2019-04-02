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

function dealWithLinkages (linkages) {
  let links = {}
  __.each(linkages, item => {
    links[item.rel] = item.href
  })
  return links
}

const actions = {
  async entry (ctx) {
    let entry = await $entry()
    let links = dealWithLinkages(entry)
    ctx.commit('entry', links)
  },

  async onlineList (ctx) {
    let entry = ctx.getters.entry
    const onlines = await $get(entry.Onlines)
    ctx.commit('onlines', onlines)
  }
}

export default actions
