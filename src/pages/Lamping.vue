<template>
  <div class="mx-auto" style="width:90%">
    <img class="w-100" style="height:180px" src="/static/img/lamps.jpg"/>
    <div class="d-flex mt-4">
      <p class="mr-auto" style="font-size:20px;font-weight:600">{{item.name}}</p>
      <p class="" style="font-size:20px;font-weight:600">￥{{item.price}}</p>
    </div>
    <div class="d-flex">
      <p class="text-secondary" style="font-size:18px">{{item.desc}}</p>
    </div>
    <div class="d-flex">
      <p class="text-dark pl-2" style="border-left-style:solid;border-left-width:7px;
          border-left-color:red;font-size:20px;height:35px;font-weight:600">详情介绍</p>
    </div>
    <div class="d-flex" style="height:320px">
      {{item.desc}}
    </div>
    <div class="d-flex">
      <button type="button" class="btn btn-danger btn-lg mx-auto" style="width:85%" @click="toConfirmPage">{{title}}</button>
    </div>
  </div>
</template>

<script>
import lampItems from '../helpers/LampItems.js'
import monkItems from '../helpers/MonkItems.js'
const types = {lamp: lampItems, monk: monkItems}
export default {
  components: {
  },
  data () {
    return {
      page: 0
    }
  },
  computed: {
    title () {
      return types[this.$route.params.obj].title
    },
    item () {
      return types[this.$route.params.obj].items[this.$route.params.id]
    }
  },
  methods: {
    toConfirmPage () {
      this.$router.push({name: 'payfor', params: this.$route.params})
    }
  }
}
</script>

<style>
</style>
