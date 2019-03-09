<template>
  <div class="container-fluid">
    <div class="card" style="width: 18rem;">
      <img src="/static/img/lampContribution.jpg" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
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
