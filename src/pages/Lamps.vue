<template>
  <contribution-list v-bind="props" @selected="onSelected"/>
</template>

<script>
import lampItems from '../helpers/LampItems.js'
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
      const items = {
        ...lampItems,
        afterNum: '人已供灯',
        titleStyle: 'width:75px'
      }
      return items
    }
  },
  methods: {
    onSelected (index) {
      this.$router.push({name: 'lamping', params: {obj: 'lamp', id: index}})
    }
  }
}
</script>

<style>
</style>
