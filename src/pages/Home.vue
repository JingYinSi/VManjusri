<template>
  <div class="w-100">
    <main-head v-bind="head"></main-head>
    <div class="row">
      <div class="col-12">
        <router-view />
      </div>
    </div>
    <foot-menu/>
  </div>
</template>

<script>
import MainHead from '../components/MainHead'
import FootMenu from '../components/FootMenu'
export default {
  components: {
    MainHead,
    FootMenu
  },
  computed: {
    head () {
      return {
        banner: '/static/img/img_banner_dz.jpg',
        logo: '/static/img/logo1.png',
        header: '静音寺文殊禅林'
      }
    }
  }
}
</script>
