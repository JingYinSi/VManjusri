<template>
  <contribution-list v-bind="monkItems" @selected="onSelected"/>
</template>

<script>
import { mapActions } from 'vuex'
import ContributionList from '../components/ContributionList'
export default {
  components: {
    ContributionList
  },
  data () {
    return {
      monkItems: {
        title: '',
        items: [],
        titleStyle: 'width:120px'
      }
    }
  },
  async created () {
    let monks = await this.monklist()
    this.monkItems = {...this.lampItems, ...monks.data}
  },
  methods: {
    ...mapActions(['monklist']),
    onSelected (index) {
      const item = this.monkItems.items[index]
      const type = item.target > 0 ? 'foramount' : 'forprice'
      this.$router.push({name: type, params: {type: this.monkItems.type, id: index}})
    }
  }
}
</script>
