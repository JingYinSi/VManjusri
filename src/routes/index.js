import Home from '../pages/Home.vue'
import Lamps from '../pages/Lamps.vue'
import DailyVirtue from '../pages/DailyVirtue.vue'
import Monks from '../pages/Monks.vue'
import ForPrice from '../pages/ForPrice.vue'
import ForAmount from '../pages/ForAmount.vue'
import Confirm from '../pages/Confirm.vue'
import NotFound from '../components/NotFound.vue'

const homeRoutes = [{
  path: 'lamps',
  name: 'lamps',
  component: Lamps
},
{
  path: 'monks',
  name: 'monks',
  component: Monks
}
]

const routes = [
  {
    path: '/main',
    component: Home,
    children: homeRoutes
  },
  {
    path: '/payfor/:type/:id',
    name: 'payfor',
    component: Confirm
  },
  {
    path: '/suixi/forprice/:type/:id',
    name: 'forprice',
    component: ForPrice
  },
  {
    path: '/suixi/foramount/:/type/:id',
    name: 'foramount',
    component: ForAmount
  },
  {
    path: '/daily/virtue',
    name: 'virtue',
    component: DailyVirtue
  },
  {
    path: '/',
    name: 'home'
  },
  {
    path: '*',
    component: NotFound
  }
]
export default routes
