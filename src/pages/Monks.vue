<template>
  <contribution-list v-bind="props" @selected="onSelected"/>
</template>

<script>
import monkItems from '../helpers/MonkItems.js'
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
        ...monkItems,
        titleStyle: 'width:110px'
      }
      return items
    }
  },
  methods: {
    onSelected (index) {
      this.$router.push({name: 'forMonks', params: {obj: 'monk', id: index}})
    }
  }
}
</script>

<style>
</style>
