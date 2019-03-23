<template>
  <div class="mx-auto" style="width:90%">
    <img class="w-100" style="height:180px" :src="item.img"/>
    <div class="d-flex mt-3">
      <p class="" style="font-size:20px;font-weight:600">{{item.name}}</p>
    </div>
    <div class="d-flex">
      <p class="text-secondary" style="font-size:18px">{{item.desc}}</p>
    </div>
    <div class="progress" style="height: 10px;">
      <div class="progress-bar bg-danger" :style="item.progress"></div>
    </div>
    <div class="d-flex justify-content-between mt-3">
      <div class="d-flex flex-column">
          <p class="text-secondary">目标随喜款/元</p>
          <h5 class="" style="font-size:20px;font-weight:600">{{item.target}}</h5>
      </div>
      <div class="d-flex flex-column">
          <p class="text-secondary">当前随喜款/元</p>
          <h5 class="" style="font-size:20px;font-weight:600">{{item.amount}}</h5>
      </div>
      <div class="d-flex flex-column">
          <p class="text-secondary">随喜人次/次</p>
          <h5 class="" style="font-size:20px;font-weight:600">{{item.num}}</h5>
      </div>
    </div>
    <div class="d-flex mt-4">
      <p class="text-dark pl-2" style="border-left-style:solid;border-left-width:7px;
          border-left-color:red;font-size:20px;height:35px;font-weight:600">详情介绍</p>
    </div>
    <div class="d-flex" style="height:60px">
      {{item.desc}}
    </div>
    <div class="d-flex mt-2">
      <p class="text-dark pl-2" style="border-left-style:solid;border-left-width:7px;
          border-left-color:red;font-size:20px;height:35px;font-weight:600">随喜人员流水</p>
    </div>
    <div class="my-custom-scrollbar">
      <div class="row" v-for="(item, index) in flows" :key="index">
        <div class="col-2">
          <img width="36" height="36" class="rounded-circle ml-3" :src="item.img"/>
        </div>
        <div class="col-5">
          <p class="mt-1">{{item.nick}}</p>
        </div>
        <div class="col-2">
          <p class="mt-1">{{item.amount}}</p>
        </div>
        <div class="col-3">
          <p class="mt-1">1分钟前</p>
        </div>
      </div>
    </div>
    <div class="d-flex bg-white">
      <button type="button" class="btn btn-danger btn-lg mx-auto my-3" style="width:85%"
        data-toggle="modal" data-target="#topay">随喜</button>
    </div>
    <div class="modal fade" id="topay" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <div class="d-flex">
                <img class="" style="height:120px;width:120px" :src="item.img"/>
                <div class="d-flex flex-column ml-4">
                    <h4 class="" style="">随喜{{item.name}}</h4>
                    <div class="d-flex flex-row">
                      <h5 class="mt-2 mr-1">￥</h5>
                      <h3 class="text-danger">{{suixi}}</h3>
                    </div>
                </div>
            </div>
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="d-flex flex-row justify-content-between">
              <div v-for="item in predefinedAmounts" :key="item"
                class="bg-white border text-center" :class="amountStyle(item)"
                    style="width:100px;height:38px" @click="setPredefinedAmount(item)"><p class="mt-1">{{item}}元</p></div>
              </div>
            <div class="d-flex flex-row mt-3">
              <input class="form-control border border-secondary" type="number"
                    placeholder="￥自定金额" style="width:235px" v-model="anyAmount"/>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-danger w-50">确认</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import itemsList from '../helpers/MonkItems.js'
import suixiList from '../helpers/SuixiList.js'

const __predefinedAmounts = [20, 50, 100]
export default {
  data () {
    return {
      anyAmount: null,
      amount: 20
    }
  },
  computed: {
    flows () {
      let {type, id} = this.$route.params
      return suixiList(type, id)
    },
    suixi () {
      return this.anyAmount > 0 ? this.anyAmount : this.amount
    },
    predefinedAmounts () {
      return __predefinedAmounts
    },
    item () {
      const item = itemsList.items[this.$route.params.id]
      return {
        title: itemsList.title,
        progress: item.target > 0 && item.amount >= 0 ? 'width:' + item.amount * 100 / item.target + '%' : '',
        ...item
      }
    }
  },
  created () {
  },
  methods: {
    amountStyle (amt) {
      return amt === this.amount ? 'border-danger' : 'border-secondary'
    },
    setPredefinedAmount (amt) {
      this.anyAmount = null
      this.amount = amt
    }
  }
}
</script>

<style>
.my-custom-scrollbar {
  position: relative;
  height: 130px;
  overflow: auto;
}
</style>
