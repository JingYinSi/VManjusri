<template>
  <div class="d-flex flex-item-center">
      <octicon :name="icon" class="mt-2"/>
      <input :type="type" class="form-control form-control-sm ml-2" :value="value" @input="onInput($event.target.value)" />
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    type: {
      type: String,
      default: 'text'
    },
    value: [String, Number]
  },
  methods: {
    onInput (val) {
      this.$emit('input', val)
    }
  }
}
</script>
