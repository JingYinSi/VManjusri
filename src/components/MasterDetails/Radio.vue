<template>
  <div class="d-flex flex-item-center">
      <octicon :name="icon" class="mt-1 mr-2"/>
      <div class="form-check form-check-inline" v-for="option in options" :key="option.value">
          <input class="form-check-input" type="radio" :id="option.name" :name="option.name"
              :checked="option.value === value" @click="onClick(option.value)"/>
          <label class="form-check-label" :for="option.name">{{option.name}}</label>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    options: Array,
    value: [String, Number]
  },
  model: {
    prop: 'value',
    event: 'update'
  },
  computed: {
  },
  methods: {
    checked (option) {
      return this.value === option
    },
    onClick (val) {
      this.$emit('update', val)
    }
  }
}
</script>
