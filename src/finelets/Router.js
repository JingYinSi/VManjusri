import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let __config

function __beforeEach (to, from, next) {
  if (!to.meta.public && !to.meta.guest && !__config.isSignIn()) {
    next({
      name: __config.routes.login,
      params: {
        wantedRoute: to.fullPath
      }
    })
    return
  }

  if (to.meta.guest && __config.isSignIn()) {
    next({
      name: __config.routes.home
    })
    return
  }
  next()
}

function __createRouter () {
  const router = new VueRouter({
    routes: __config.routes.items
  })
  router.beforeEach(__beforeEach)
  return router
}

function __create (config) {
  __config = config
  return __createRouter()
}

export default __create
