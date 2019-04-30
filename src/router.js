import routes from './routes/index'
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

Vue.use(VueRouter)

function redirectToWechatAuth2 (redirectUrl) {
  const appId = 'wx6fd4695fd38a8b3f'
  const oauth2BaseURL = 'https://open.weixin.qq.com/connect/oauth2/authorize'
  const wrapedUrl = `${oauth2BaseURL}?appid=${appId}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
  alert('redirectUrl: ' + wrapedUrl)
  window.location.href = wrapedUrl
}

function parseQueryParam (url, name) {
  const sec = url.split('?')
  if (sec.length < 2) return undefined
  return new URLSearchParams('?' + sec[1]).get(name)
}

async function __beforeEach (to, from, next) {
  const currentUrl = window.location.href
  if (to.name === 'home') {
    router.replace({
      name: 'lamps'
    })
  } else if (!to.meta.noAuth && !store.getters.user) {
    const code = parseQueryParam(currentUrl, 'code')
    if (!code || code.length === 0) {
      alert('we are going to redirect .....')
      const restUrl = store.getters('entry').wechatSignin
      alert('url of wechat is: ' + restUrl)
      redirectToWechatAuth2(`${restUrl}?url=${to.fullPath}`)
      return false
    }
    const signed = await store.dispatch('wechatUser', code)
    if (!signed) {
      return false
    }
  }
  next()
}

const router = new VueRouter({
  routes
})
router.beforeEach(__beforeEach)

export default router
