import routes from './routes/index'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

function __beforeEach (to, from, next) {
  // console.log(JSON.stringify(to, null, 2))
  next()
}

const router = new VueRouter({
  routes
})
router.beforeEach(__beforeEach)

export default router
