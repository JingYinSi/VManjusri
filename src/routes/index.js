import Home from '../pages/Home.vue'
import Lamps from '../pages/Lamps.vue'
import Monks from '../pages/Monks.vue'
import Lamping from '../pages/Lamping.vue'
import ForMonks from '../pages/ForMonks.vue'
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
},
{
  path: '*',
  component: NotFound
}
]

const routes = [
  {
    path: '/main',
    component: Home,
    children: homeRoutes
  },
  {
    path: '/lamps/:obj/:id',
    name: 'lamping',
    component: Lamping
  },
  {
    path: '/monks/:obj/:id',
    name: 'forMonks',
    component: ForMonks
  }
]
export default routes
