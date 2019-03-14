<template>
  <div class="container-fluid">
    <main-head v-bind="head"></main-head>
    <div class="row">
      <div class="col">
        <router-view />
      </div>
    </div>
    <foot-menu :menu="foot"/>
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
    },
    foot () {
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
  }
}
</script>
