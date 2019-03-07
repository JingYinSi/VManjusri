<template>
  <div class="list-group">
      <div class="list-group-item border-0 p-0" v-for="item in items" :key="item.id">
        <div class="border-top">
          <slot :item="item">
          </slot>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
    }
  },
  methods: {}
}
</script>
