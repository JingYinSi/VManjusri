<template>
  <contribution-list v-bind="props" @selected="onSelected"/>
</template>

<script>
// import lampItems from '../helpers/LampItems.js'
import { mapActions } from 'vuex'
import ContributionList from '../components/ContributionList'
export default {
  components: {
    ContributionList
  },
  computed: {
    props () {
      const lamps = this.lamplist()
      const items = {
        ...lamps,
        afterNum: '人已供灯',
        titleStyle: 'width:75px'
      }
      return items
    }
  },
  methods: {
    ...mapActions(['lamplist']),
    onSelected (index) {
      const lamps = this.lamplist()
      this.$router.push({name: 'forprice', params: {type: lamps.type, id: index}})
    }
  }
}
</script>
