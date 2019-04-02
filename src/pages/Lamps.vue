<template>
  <contribution-list v-bind="lampItems" @selected="onSelected"/>
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
      lampItems: {
        title: '',
        items: [],
        afterNum: '人已供灯',
        titleStyle: 'width:75px'
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
      let lamps = this.onlines()
      this.lampItems = {...this.lampItems, ...lamps.data.lamping}
    },
    onSelected (index) {
      this.$router.push({name: 'forprice', params: {type: this.lampItems.type, id: index}})
    }
  }
}
</script>
