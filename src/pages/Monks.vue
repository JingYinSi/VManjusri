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
  computed: {
    props () {
      const items = {
        ...monkItems,
        titleStyle: 'width:120px'
      }
      return items
    }
  },
  methods: {
    onSelected (index) {
      const item = monkItems.items[index]
      const type = item.target > 0 ? 'foramount' : 'forprice'
      this.$router.push({name: type, params: {type: monkItems.type, id: index}})
    }
  }
}
</script>
