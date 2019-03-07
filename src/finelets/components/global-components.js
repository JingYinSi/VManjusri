import Vue from 'vue'
import Dropdown from './Dropdown'
import DropdownMenu from './DropdownMenu'
import IconButton from './IconButton'
import ValidateError from './ValidateError'
import Tabpage from './Tabpage'
import Octicon from 'vue-octicon/components/Octicon.vue'
import 'vue-octicon/icons'
import VueMaterialIcon from 'vue-material-icon'

Vue.component(VueMaterialIcon.name, VueMaterialIcon)
Vue.component('Octicon', Octicon)
Vue.component('Dropdown', Dropdown)
Vue.component('DropdownMenu', DropdownMenu)
Vue.component('IconButton', IconButton)
Vue.component('ValidateError', ValidateError)
Vue.component('Tabpage', Tabpage)
