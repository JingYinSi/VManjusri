<template>
  <contribution-list v-bind="lampItems" @selected="onSelected"/>
</template>

<script>
// import lampItems from '../helpers/LampItems.js'
import { mapActions } from 'vuex'
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
    let lamps = await this.lamplist()
    this.lampItems = {...this.lampItems, ...lamps.data}
  },
  methods: {
    ...mapActions(['lamplist']),
    onSelected (index) {
      this.$router.push({name: 'forprice', params: {type: this.lampItems.type, id: index}})
    }
  }
}
</script>
