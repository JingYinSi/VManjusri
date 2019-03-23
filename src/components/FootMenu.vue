<template>
  <div class="nav bg-white nav-pills fixed-bottom nav-fill py-2 w-100" style="z-index:1">
    <li v-for="(item, index) in menuItems"  :key="index" class="nav-item">
        <router-link :to="{name: item.to}"  style="color:darkgrey;font-size:20px" :style="menuItemStyle(item.to)">
          {{item.name}}
        </router-link>
    </li>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import defaultMenu from '../helpers/MainMenus.js'
export default {
  computed: {
    ...mapGetters(['route']),
    menuItems () {
      return this.menu || defaultMenu
    }
  },
  props: {
    menu: {
      type: Array
    }
  },
  methods: {
    menuItemStyle (name) {
      return name === this.route.name ? 'color:orange' : ''
    }
  }
}
</script>
