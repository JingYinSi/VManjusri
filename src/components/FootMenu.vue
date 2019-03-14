<template>
  <div class="nav bg-white nav-pills fixed-bottom nav-fill py-2">
    <li v-for="(item, index) in menu"  :key="index" class="nav-item">
        <router-link :to="{name: item.to}"  style="color:darkgrey;font-size:20px" :style="menuItemStyle(item.to)">
          {{item.name}}
        </router-link>
    </li>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['route'])
  },
  props: {
    menu: {
      type: Array,
      required: true
    }
  },
  methods: {
    menuItemStyle (name) {
      return name === this.route.name ? 'color:orange' : ''
    }
  }
}
</script>
