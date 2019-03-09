import Lamps from '../pages/Lamps.vue'
import Monks from '../pages/Monks.vue'
import NotFound from '../components/NotFound.vue'

const routes = [{
  path: '/lamps',
  name: 'lamps',
  component: Lamps
},
{
  path: '/monks',
  name: 'monks',
  component: Monks
},
{
  path: '*',
  component: NotFound
}
]

export default routes
