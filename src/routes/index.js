import Home from '../pages/Home.vue'
import Lamps from '../pages/Lamps.vue'
import DailyVirtue from '../pages/DailyVirtue.vue'
import Me from '../pages/Me.vue'
import Monks from '../pages/Monks.vue'
import ForPrice from '../pages/ForPrice.vue'
import ForAmount from '../pages/ForAmount.vue'
import Payfor from '../pages/Payfor.vue'
import NotFound from '../components/NotFound.vue'

const homeRoutes = [{
  path: 'lamps',
  name: 'lamps',
  component: Lamps,
  meta: {
    noAuth: true
  }
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
    component: Payfor
  },
  {
    path: '/suixi/forprice/:type/:id',
    name: 'forprice',
    component: ForPrice
  },
  {
    path: '/suixi/foramount/:type/:id',
    name: 'foramount',
    component: ForAmount
  },
  {
    path: '/daily/virtue',
    name: 'virtue',
    component: DailyVirtue
  },
  {
    path: '/me',
    name: 'me',
    component: Me
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
