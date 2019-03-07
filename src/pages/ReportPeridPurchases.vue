<template>

  <div>
    <div class="row mt-3">
      <div class="col ml-2">
        <table class="table table-striped table-bordered">
          <caption>期间采购金额及明细表</caption>
          <thead>
            <tr>
              <th
                :style="fld.width ? 'min-width: ' + fld.width + '; text-align: center' : 'text-align: center'"
                v-for="fld in headers"
                :key="fld"
              >{{fld.name}}</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="task in purTransTasks"
              :key="task.transNo"
            >
              <td>{{task.data.task.transNo}}</td>
              <td>{{task.data.task.partType}}</td>
              <td>{{task.data.task.partName}}</td>
              <td>{{task.data.task.spec}}</td>
              <td>{{task.data.task.unit}}</td>
              <td>{{task.data.task.qty}}</td>
              <td>{{task.data.task.price}}</td>
              <td>{{task.data.task.amount}}</td>
              <td>{{task.data.task.supplier}}</td>
              <td>{{task.data.task.supply}}</td>
              <td>{{task.data.task.refNo}}</td>
              <td>{{task.data.task.supplyLink}}</td>
              <td>{{task.data.task.purPeriod}}</td>
              <td>{{task.data.task.applier}}</td>
              <td>{{task.data.task.appDate | date}}</td>
              <td>{{task.data.task.reviewer}}</td>
              <td>{{task.data.task.reviewDate | date}}</td>
              <td>{{task.data.task.purDate | date}}</td>
              <td>{{task.data.task.purchaser}}</td>
              <td>{{task.data.task.invDate | date}}</td>
              <td>{{task.data.task.user}}</td>
              <td>{{task.data.task.useDate | date}}</td>
              <td>{{task.data.task.useQty}}</td>
              <td>{{task.data.task.project}}</td>
              <td>{{task.data.task.invLoc}}</td>
              <td>{{task.data.task.remark}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      file: null,
      sty: 'min-width: 200px;',
      headers: [
        { name: '交易编号' },
        { name: '料品类型', width: '60px' },
        { name: '品名', width: '200px' },
        { name: '规格', width: '80px' },
        { name: '单位' },
        { name: '数量' },
        { name: '单价' },
        { name: '金额' },
        { name: '供应商名称', width: '240px' },
        { name: '供应商类型', width: '100px' },
        { name: '参考单号', width: '120px' },
        { name: '供应商链接', width: '120px' },
        { name: '采购周期' },
        { name: '申请人', width: '80px' },
        { name: '申请日期', width: '100px' },
        { name: '审核人', width: '80px' },
        { name: '审核日期', width: '100px' },
        { name: '采购日期', width: '100px' },
        { name: '采购人', width: '80px' },
        { name: '到货日期', width: '100px' },
        { name: '领用人', width: '80px' },
        { name: '领用日期', width: '100px' },
        { name: '领用数量' },
        { name: '领用项目', width: '100px' },
        { name: '货位' },
        { name: '备注', width: '100px' }
      ],
      purTransTasks: null,
      uploadresult: ''
    }
  },
  async created () {
    // this.purTransTasks = await this.$fetch('/task/purTransTasks')
    let data = await this.searchPurchaseTransTasks()
    this.purTransTasks = data.collection.items
  },
  methods: {
    ...mapActions(['importPurchasesFromCsv', 'searchPurchaseTransTasks']),
    search () {
      const q = this.queryCondi
      this.searchSpecs(q)
    },
    uploadFileChanged () {
      this.file = this.$refs.file.files[0]
      let formData = new FormData()
      formData.append('purchases.csv', this.file)
      return this.importPurchasesFromCsv(formData)
    }
  }
}
</script>
