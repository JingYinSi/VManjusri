<template>
    <div class="dropdown" :id="id">
        <button class="btn btn-light border dropdown-toggle btn-sm" type="button" data-toggle="dropdown">
          {{this.text}}
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#" v-for="option in options" :key="option.value"
              @click="selected(option.value)">{{option.name}}</a>
        </div>
    </div>
</template>

<script>
import __ from 'underscore'
export default {
  props: {
    id: {
      type: String
    },
    label: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    }
  },
  data () {
    return {
      current: this.value
    }
  },
  computed: {
    text: function () {
      let op = __.find(this.options, o => {
        return this.current === o.value
      })
      return op ? this.label + ': ' + op.name : this.label + ': 未选'
    }
  },
  methods: {
    selected (val) {
      this.current = val
      this.$emit('changed', val)
    }
  }
}
</script>
