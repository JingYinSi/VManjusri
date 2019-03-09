<template>
  <div class="container-fluid">
    <div class="row">
      <img class="w-100" style="height:180px" src="/static/img/img_banner_dz.jpg"/>
      <div style="top:120px;left:10px;z-index:1;position:absolute;">
        <div class="d-inline-flex align-items-center">
          <img src="/static/img/logo1.png" style="height:90px"/>
          <h5 class="text-white ml-2">静音寺文殊禅林</h5>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <router-view />
      </div>
    </div>
    <div class="nav bg-white nav-pills fixed-bottom nav-fill py-2">
      <li v-for="(item, index) in menu"  :key="index" class="nav-item" :class="item.class">
          <router-link :to="item.to"  style="color:darkgrey;font-size:20px" :style="menuItemStyle(item.to)">
            {{item.name}}
          </router-link>
      </li>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
  },
  data () {
    return {
      page: 0
    }
  },
  computed: {
    ...mapGetters(['route']),
    menu () {
      return [
        {
          to: 'lamps',
          name: '供灯'
        },
        {
          to: 'monks',
          name: '供僧'
        },
        {
          to: 'virtue',
          name: '随喜建寺'
        },
        {
          to: 'me',
          name: '我'
        }
      ]
    }
  },
  methods: {
    ...mapActions([]),
    menuItemStyle (name) {
      return name === this.route.name ? 'color:orange' : ''
    }
  }
}
</script>

<style>
</style>
