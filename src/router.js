import routes from './routes/index'
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

Vue.use(VueRouter)

function redirectToWechatAuth2 (redirectUrl) {
  const appId = 'wx6fd4695fd38a8b3f'
  const oauth2BaseURL = 'https://open.weixin.qq.com/connect/oauth2/authorize'
  const wrapedUrl = `${oauth2BaseURL}?appid=${appId}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_userinfo#wechat_redirect`

  window.location.href = encodeURI(wrapedUrl)
}

async function __beforeEach (to, from, next) {
  if (to.name === 'home') {
    router.replace({
      name: 'lamps'
    })
  } else if (!to.matched.some(item => item.meta.noAuth) && !store.getters.user) {
    const code = new URL(window.location.href).searchParams.get('code') // 截取url上的code ,可能没有,则返回''空字符串
    if (!code || code.length === 0) {
      // 跳转到微信授权页面
      console.log(window.location.origin)
      console.log(to.fullPath)
      // 这个redirectUrl用 当前页路径或者tof.fullPath(将要进入的路径)
      let redirectUrl = window.location.href
      console.log(redirectUrl)
      redirectToWechatAuth2(redirectUrl)
      // redirectToWechatAuth2('http://dev.jingyintemple.top/jingyin/rests/manjusri/wx/signin')
      return
    }
    window.alert('code: ' + code)
    await store.dispatch('wechatSignin', code) // 获取用户信息,后端可首先通过cookie,session等判断,没有信息则通过code获取
  }
  next()
}

const router = new VueRouter({
  routes
})
router.beforeEach(__beforeEach)

export default router
