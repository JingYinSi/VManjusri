/* eslint-disable no-unused-vars */
import {
  $get,
  $post,
  $entry,
  $put,
  $upload
} from '../plugins/fetch'
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
  },

  async wechatSignin (ctx, code) {
    let entry = ctx.getters.entry
    const url = `${entry.wechatSignin}?code=${code}`
    const userInfo = await $get(url)
    ctx.commit('user', userInfo)
  },

  async wechatPrepay (ctx, data) {
    let entry = ctx.getters.entry
    const resData = await $post(entry.DailyVirtues, data)
    return resData
  }
}

export default actions
