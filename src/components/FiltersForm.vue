<template>
  <form class="form-inline" @submit.prevent>
    <input class="form-control mr-auto" placeholder="Search" :style="search.style" v-model="searchValue"
      @change="searchChanged"/>
    <div class="btn-group">
      <dropdown class="ml-1" :options="filter.options" :label="filter.label" :value="filtervals[index]"
                v-for="(filter, index) in config.filters" :key="index"
                @changed="(...args)=>filterChanged(index,...args)"/>
    </div>
    <icon-button class="ml-3" icon="repo" text="New" @click="triggerAction"/>
  </form>
</template>

<script>
import __ from 'underscore'
export default {
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  data () {
    let obj = {}
    if (this.config.search) {
      obj.searchValue = this.config.search.value
    }
    let filtervals
    if (this.config.filters && this.config.filters.length > 0) {
      filtervals = __.map(this.config.filters, filter => {
        return filter.value
      })
    }
    if (filtervals) {
      obj.filtervals = filtervals
    }
    return obj
  },
  computed: {
    search () {
      let width = this.config.search ? (this.config.search.width || 400) : 400
      return {
        style: {
          width: '' + width + 'px'
        }
      }
    }
  },
  methods: {
    triggerAction () {
      this.$emit('action')
    },
    filterChanged (index, val) {
      this.filtervals[index] = val
      this.$emit('search', {search: this.searchValue, filters: this.filtervals})
    },
    searchChanged () {
      this.$emit('search', {search: this.searchValue, filters: this.filtervals})
    }
  }
}
</script>
