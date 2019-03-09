import Home from '../pages/Home.vue'
import Lamps from '../pages/Lamps.vue'
import Monks from '../pages/Monks.vue'
import Contributions from '../pages/Contributions.vue'
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
    path: '/contributions/:obj/:id',
    name: 'contributions',
    component: Contributions
  }
]
export default routes
