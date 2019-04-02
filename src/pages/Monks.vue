<template>
  <contribution-list v-bind="monkItems" @selected="onSelected"/>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
    await this.loadOnlines()
  },
  methods: {
    ...mapGetters(['onlines']),
    ...mapActions(['onlineList']),
    async loadOnlines () {
      await this.onlineList()
      const onlines = this.onlines()
      this.monkItems = {...this.monkItems, ...onlines.data.formonks}
    },
    onSelected (index) {
      const item = this.monkItems.items[index]
      const type = item.target > 0 ? 'foramount' : 'forprice'
      this.$router.push({name: type, params: {type: this.monkItems.type, id: index}})
    }
  }
}
</script>
