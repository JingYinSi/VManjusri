import Home from '../pages/Home.vue'
import Lamps from '../pages/Lamps.vue'
import Monks from '../pages/Monks.vue'
import Lamping from '../pages/Lamping.vue'
import ForMonks from '../pages/ForMonks.vue'
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
    path: '/payfor/:obj/:id',
    name: 'payfor',
    component: Confirm
  },
  {
    path: '/lamping/:id',
    name: 'lamping',
    component: Lamping
  },
  {
    path: '/monks/:obj/:id',
    name: 'forMonks',
    component: ForMonks
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
