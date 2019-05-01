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

  async wechatUser (ctx, code) {
    let entry = ctx.getters.entry
    const url = `${entry.wechatAuth}?code=${code}`
    try {
      let {token} = await $get(url)
      ctx.commit('token', token)
      return token
    } catch (e) {
    }
  },

  async wechatPrepay (ctx, data) {
    let entry = ctx.getters.entry
    // const resData = await $post(entry.DailyVirtues, data)
    alert('wechatPrepay:' + JSON.stringify(data, null, 2))
    const resData = await $get(entry.needAuth)
    alert('needAuth:' + JSON.stringify(resData, null, 2))
    return resData
  }
}

export default actions
