<template>
  <div class="mx-auto" style="width:85%">
    <div class="form-group mt-3">
      <label>姓名</label>
      <input type="text" class="form-control" v-model="name">
    </div>
    <div class="form-group mt-3">
      <label>回向</label>
      <textarea  rows="5" class="form-control rounded-0" v-model="hope"/>
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
      <button type="button" class="btn btn-danger btn-lg mx-auto"
              style="width:85%" @click="pay">确认付款￥{{item.price}}元</button>
    </div>
  </div>
</template>

<script>
import onlines from '../helpers/Onlines.js'
export default {
  components: {
  },
  data () {
    return {
      name: null,
      hope: null
    }
  },
  computed: {
    title () {
      return onlines[this.$route.params.type].title
    },
    item () {
      return onlines[this.$route.params.type].items[this.$route.params.id]
    }
  },
  methods: {
    pay () {
      alert(JSON.stringify({name: this.name, hope: this.hope, amount: this.item.price}, null, 2))
      this.$router.go(-1)
    }
  }
}
</script>
