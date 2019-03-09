<template>
  <contribution-list v-bind="props" @selected="onSelected"/>
</template>

<script>
import ContributionList from '../components/ContributionList'
export default {
  components: {
    ContributionList
  },
  data () {
    return {
    }
  },
  computed: {
    props () {
      return {
        summary: '供灯之功德总述',
        title: '供灯祈福',
        afterNum: '人已供灯',
        titleStyle: 'width:75px',
        items: [
          {
            img: '/static/img/lamps.jpg',
            name: '长明灯',
            price: 365,
            desc: '2019年365天整年在佛前供灯1盏',
            num: 3023,
            style: 'mr-auto'
          },
          {
            img: '/static/img/lamps.jpg',
            name: '长明灯',
            price: 1095,
            desc: '2019年365天整年在佛前供灯3盏',
            num: 1000
          },
          {
            img: '/static/img/lamps.jpg',
            name: '除障灯',
            price: 200,
            desc: '愿众生消除障碍违缘',
            num: 30000,
            style: 'mr-auto'
          },
          {
            img: '/static/img/lamps.jpg',
            name: '吉祥灯',
            price: 100,
            desc: '祈祷家庭和睦，婚缘顺意',
            num: 5000
          }
        ]
      }
    }
  },
  methods: {
    onSelected (index) {
      this.$router.push({name: 'contributions', params: {obj: 'lamp', id: index}})
      // console.log(JSON.stringify(this.props.items[index], null, 2))
    }
  }
}
</script>

<style>
</style>
