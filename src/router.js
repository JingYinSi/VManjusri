import routes from './routes/index'
import Vue from 'vue'
import VueRouter from 'vue-router'
import signinWechat from './helpers/SigninWechat'

Vue.use(VueRouter)

function __beforeEach (to, from, next) {
  if (to.name === 'home') {
    router.replace({
      name: 'lamps'
    })
    next()
    return
  }
  if (to.matched.some(item => item.meta.noAuth)) {
    next()
  } else {
    // 上面的获取用户信息接口,如果cookie,session拿不到用户信息,且传递的code为空,则跳转到微信授权页面
    console.log(window.location.origin)
    console.log(to.fullPath)
    // 这个redirectUrl用 当前页路径或者tof.fullPath(将要进入的路径)
    let redirectUrl = window.location.href
    console.log(redirectUrl)

    signinWechat(redirectUrl)
    // redirectUrl = signinWechat(redirectUrl)
    // window.location.href = redirectUrl
  }
}

const router = new VueRouter({
  routes
})
router.beforeEach(__beforeEach)

export default router
