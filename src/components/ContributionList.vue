<template>
  <div class="mx-auto" style="width:88%">
    <div class="row" style="height:100px;margin-top:35px">
      <p class="border w-100" style="font-size:18px">
          {{summary}}
      </p>
    </div>
    <div class="row mt-2" style="margin-bottom:80px">
      <div class="col p-0">
        <div class="font-weight-bold" style="width:76px;font-size:18px;border-bottom:2px solid red" :style="titleStyle">
          {{title}}
        </div>
        <div class="d-flex flex-wrap mt-2">
          <div v-for="(item, index) in items" :key="index" class="d-flex flex-column mb-3"
            :class="item.style" style="width: 160px" @click="onClicked(index)">
            <img :src="item.img" class="" style="height:120px">
            <div class="d-inline-flex mt-2" style="height:30px">
              <p class="mr-auto"  style="font-size:18px">{{item.name}}</p>
              <p class="" style="font-size:18px">￥{{item.price}}</p>
            </div>
            <div class="d-flex">{{item.desc}}</div>
            <div class="d-flex mt-1">{{item.num}}{{afterNum}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    summary: {
      type: String
    },
    title: {
      type: String,
      required: true
    },
    titleStyle: {
      type: String
    },
    items: {
      type: Array,
      required: true
    },
    afterNum: {
      type: String,
      default: '人已随喜'
    }
  },
  methods: {
    onClicked (index) {
      this.$emit('selected', index)
    }
  }
}
</script>

<style>
</style>
