<template>
    <small v-if="text" class="text-danger">{{text}}</small>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    }
  }
}
</script>
