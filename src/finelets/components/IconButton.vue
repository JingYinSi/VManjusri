<template>
    <button class="btn btn-success btn-sm" :style="btnStyle" @click="onClick">
            <octicon class="mb-2 mr-1" :name="icon"/>{{this.text}}
    </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    width: String
  },
  computed: {
    btnStyle () {
      let style = {}
      if (this.width) style.width = this.width
      return style
    }
  },
  methods: {
    onClick: function () {
      this.$emit('click')
    }
  }
}
</script>
