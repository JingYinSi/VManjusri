<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-md fixed-top p-0">
      <img class="w-100" style="height:150px" src="/static/img/img_banner_dz.jpg"/>
    </nav>
    <div class="row" style="margin-top:150px">
      <div class="col">
        <router-view />
      </div>
    </div>
    <div class="nav fixed-bottom nav-pills nav-fill py-2">
      <li v-for="(item, index) in menu"  :key="index" class="nav-item" :class="item.class">
          <router-link :to="{name: item.to}"  style="color:darkgrey;font-size:20px" :style="item.class">
            {{item.name}}
          </router-link>
      </li>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['user']),
    menu () {
      return [
        {
          to: 'home',
          name: '供灯',
          class: 'color:orange'
        },
        {
          to: 'masterPart',
          name: '供僧',
          class: ''

        },
        {
          to: 'masterSupplier',
          name: '随喜建寺',
          class: ''
        },
        {
          to: 'ImportPurchasesFromExcel',
          name: '我',
          class: ''
        }
      ]
    }
  },
  components: {
  },
  methods: {
    ...mapActions(['logout'])
  }
}
</script>

<style>
</style>
