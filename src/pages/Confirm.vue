<template>
  <div class="mx-auto" style="width:85%">
    <div class="form-group mt-3">
      <label>供灯人姓名</label>
      <input type="text" class="form-control">
    </div>
    <div class="form-group mt-3">
      <label>回向</label>
      <textarea  rows="5" class="form-control rounded-0"/>
    </div>
    <div class="d-flex align-items-start mt-5">
        <img class="mr-3" height="110px" width="110px" :src="item.img"/>
        <div class="d-flex flex-column w-100">
          <div class="d-flex w-100">
              <div class="mr-auto" style="font-size:20px;font-weight:600">{{item.name}}</div>
              <div class="" style="font-size:20px;font-weight:600">￥{{item.price}}</div>
          </div>
          <div class="d-flex w-100 mt-2">
              <div class="text-secondary" style="font-size:18px;">{{item.desc}}</div>
          </div>
        </div>
    </div>
    <div class="d-flex fixed-bottom my-4">
      <button type="button" class="btn btn-danger btn-lg mx-auto" style="width:85%">确认付款￥{{item.price}}元</button>
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
  }
}
</script>

<style>
</style>
