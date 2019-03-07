<template>
  <div class="form-row">
    <div class="form-group col-12">
      <label :for="name">{{label}}</label>
      <input
        :type="type"
        :id="name"
        :class="inputClass"
        :placeholder="placeholder"
        :value.prop="value"
        :required="required"
        :autofocus="autofocus"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    label: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      required: true
    },
    placeholder: {
      type: String
    },
    invalid: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    inputClass () {
      return {
        invalid: this.invalid
      }
    }
  }
}
</script>
