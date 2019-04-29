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

  async wechatUser (ctx) {
    let entry = ctx.getters.entry
    const url = entry.wechatUser
    const userInfo = await $get(url)
    ctx.commit('user', userInfo)
    return userInfo
  },

  /* async wechatSignin (ctx) {
    let entry = ctx.getters.entry
    const appId = 'wx6fd4695fd38a8b3f'
    const oauth2BaseURL = 'https://open.weixin.qq.com/connect/oauth2/authorize'
    const wrapedUrl = `${oauth2BaseURL}?appid=${appId}&redirect_uri=${entry.wechatSignin}&response_type=code&scope=snsapi_userinfo#wechat_redirect`
    const userInfo = await $get(wrapedUrl)
    const response = await fetch(wrapedUrl)
    if (response.ok) {
      const data = await response.json()
      return data
    } else {
      const message = await response.text()
      const error = new Error(message)
      error.response = response
      throw error
    }
    ctx.commit('user', userInfo)
  }, */

  async wechatPrepay (ctx, data) {
    let entry = ctx.getters.entry
    const resData = await $post(entry.DailyVirtues, data)
    return resData
  }
}

export default actions
