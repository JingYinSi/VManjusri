<template>
  <contributions v-bind="props"/>
</template>

<script>
import Contributions from '../components/Contributions'
export default {
  components: {
    Contributions
  },
  data () {
    return {
    }
  },
  computed: {
    props () {
      return {
        summary: '供僧的功德总述',
        title: '随喜供斋僧位',
        titleStyle: 'width:110px',
        items: [
          {
            img: '/static/img/lamps.jpg',
            name: '方丈位',
            price: 88888,
            desc: '寺院方丈过斋时坐的位置，仅1个',
            num: 10000,
            style: 'mr-auto'
          },
          {
            img: '/static/img/lamps.jpg',
            name: '僧位',
            price: 6666,
            desc: '出家僧众过斋的位置，共1000个僧位',
            num: 20000
          },
          {
            img: '/static/img/lamps.jpg',
            name: '随喜供斋',
            price: 88,
            desc: '出家僧众供斋',
            num: 30000,
            style: 'mr-auto'
          }
        ]
      }
    }
  }
}
</script>

<style>
</style>
