import routes from './routes/index'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function __beforeEach (to, from, next) {
  if (to.name === 'home') {
    router.replace({name: 'lamps'})
  }
  next()
}

const router = new VueRouter({
  routes
})
router.beforeEach(__beforeEach)

export default router
