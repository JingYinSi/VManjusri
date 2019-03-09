<template>
    <router-view />
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
