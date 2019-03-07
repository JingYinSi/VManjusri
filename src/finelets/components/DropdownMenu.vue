<template>
  <div class="dropdown">
    <div class="btn-group" :class="clazz">
      <img src="/static/img/clx.jpg" width="20" height="20"
            class="dropdown-toggle shadow round" data-toggle="dropdown"/>
      <octicon name="triangle-down" class="text-white dropdown-toggle mt-1 ml-1"
            scale="0.8" data-toggle="dropdown"/>
      <div class="dropdown-menu" style="font-size:14px">
        <a class="dropdown-item" href="#" v-for="(item, index) in items" :key="index">
          <span v-if="item.action" @click="onClick(item.action)">{{item.name}}</span>
          <router-link v-else-if="item.to" :to="routeTo(item.to)">
            <span class="text-dark">{{item.name}}</span>
          </router-link>
          <div  v-else class="dropdown-divider"></div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    direction: {
      type: String
    }
  },
  computed: {
    clazz () {
      let drop = this.direction ? 'drop' + this.direction : ''
      return [drop]
    }
  },
  methods: {
    routeTo (routeName) {
      return {name: routeName}
    },
    onClick (event) {
      this.$emit(event)
    }
  }
}
</script>

<style>
</style>
