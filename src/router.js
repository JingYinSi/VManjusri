import routes from './routes/index'
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

Vue.use(VueRouter)

/* function redirectToWechatAuth2(redirectUrl) {
  const appId = 'wx6fd4695fd38a8b3f'
  const oauth2BaseURL = 'https://open.weixin.qq.com/connect/oauth2/authorize'
  const wrapedUrl = `${oauth2BaseURL}?appid=${appId}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
  // const wrapedUrl = `${oauth2BaseURL}?appid=${appId}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_base&state=123#wechat_redirect`
  alert('redirect to ' + wrapedUrl)
  window.location.href = wrapedUrl
  // window.location.href = encodeURI(wrapedUrl)
} */

/* async function __beforeEach (to, from, next) {
  if (to.name === 'home') {
    router.replace({
      name: 'lamps'
    })
  } else if (!to.matched.some(item => item.meta.noAuth) && !store.getters.user) {
    const code = new URL(window.location.href).searchParams.get('code') // 截取url上的code ,可能没有,则返回''空字符串
    if (!code || code.length === 0) {
      // 跳转到微信授权页面
      window.alter(window.location.origin)
      console.log(to.fullPath)
      // 这个redirectUrl用 当前页路径或者tof.fullPath(将要进入的路径)
      let redirectUrl = window.location.href
      console.log(redirectUrl)
      // redirectToWechatAuth2(redirectUrl)
      redirectToWechatAuth2('http://dev.jingyintemple.top/jingyin/rests/manjusri/wx/signin')
      window.alert('aaaaaaaaaaaaaaaa')
      return router.replace(to)
    }
    window.alert('code: ' + code)
    await store.dispatch('wechatSignin', code) // 获取用户信息,后端可首先通过cookie,session等判断,没有信息则通过code获取
  }
  next()
} */

async function __beforeEach (to, from, next) {
  alert('enter beforeEach ......')
  if (to.name === 'home') {
    router.replace({
      name: 'lamps'
    })
  } else if (to.matched.some(item => item.meta.noAuth !== true) && !store.getters.user) {
    alert('we are going to auth')
    /* const code = new URL(window.location.href).searchParams.get('code') // 截取url上的code ,可能没有,则返回''空字符串
    if (!code || code.length === 0) {
      // 跳转到微信授权页面
      alert('orignurl is: ' + window.location.origin)
      alert('location.href is: ' + window.location.href)
      // 这个redirectUrl用 当前页路径或者tof.fullPath(将要进入的路径)
      let redirectUrl = window.location.origin + to.fullPath
      alert(`redirectUrl is:${redirectUrl}`)
      redirectToWechatAuth2(redirectUrl)
      // redirectToWechatAuth2('http://dev.jingyintemple.top/jingyin/rests/manjusri/wx/signin')
      return false */
  }
  next()
  /* alert('code: ' + code)
  await store.dispatch('wechatSignin', code) // 获取用户信息,后端可首先通过cookie,session等判断,没有信息则通过code获取 */
}

const router = new VueRouter({
  routes // ,
  // mode: 'history'
})
router.beforeEach(__beforeEach)

export default router
