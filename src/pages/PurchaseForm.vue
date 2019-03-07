<template>
  <div class="mx-auto w-75">
    <div class="row mt-4 justify-content-center">
      <div class="col-3">
        <img
          class="bg-dark"
          src="/static/img/JSM2-2.jpg"
          style="width:100%"
        />
      </div>
      <div class="col-9">
        <div class="d-flex align-items-baseline">
          <h2 class="Subhead-heading">采购单</h2>
          <h6 v-if="selectedPurchase && po.code">单号：{{po.code}}</h6>
        </div>
        <form class="border-top" novalidate="true" @submit.prevent>
          <div class="mt-3">
            <p v-if="errors.length">
              <b>Please correct the following error(s):</b>
              <ul>
                <li
                  v-for="(error, index) in errors"
                  :key="index"
                >{{ error }}</li>
              </ul>
            </p>
            <div class="form-row">
              <div class="col-4 ml-1">
                <div class="form-group">
                  <octicon
                    name="shield"
                    class=""
                  />
                  <label>单号：<validate-error :text="errors.code" /></label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    v-model="po.code"
                  >
                </div>
              </div>
            </div>
            <div class="form-row ml-1">
              <div class="form-group w-100">
                <octicon name="rocket"/>
                <label>料品：
                  <validate-error :text="errors.part" /></label>
                <div class="d-flex align-items-baseline">
                  <div class="input-group mb-3 mr-5" style="width:50%">
                    <input type="text" class="form-control form-control-sm" v-model="po.part.name" @change="onPartInputed"/>
                    <div class="input-group-append">
                      <div class="dropdown">
                        <button type="button" class="btn btn-success dropdown-toggle border-0 btn-sm" data-toggle="dropdown" @click="onPartDropdown"/>
                        <div class="dropdown-menu">
                          <a
                            class="dropdown-item"
                            v-for="(part, index) in parts"
                            :key="index"
                            @click="onPartSelected(part)"
                          >
                            {{part.name}} - {{part.spec}}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <octicon v-if="po.part.brand" name="bookmark" class="mr-1"/>
                  <input type="text" v-if="po.part.brand" readonly class="form-control-plaintext text-truncate" style="width:20%" :value="po.part.brand"/>
                  <octicon v-if="po.part.spec" name="eye" class="mr-1"/>
                  <input type="text" v-if="po.part.spec" readonly class="form-control-plaintext text-truncate" style="width:40%" :value="po.part.spec"/>
                </div>
              </div>
            </div>
            <validate-error v-if="errors.purDate" :text="errors.purDate" />
            <validate-error v-if="errors.qty" :text="errors.qty" />
            <validate-error v-if="errors.amount" :text="errors.amount" />
            <div class="form-row">
              <div class="col-4 ml-1">
                <div class="form-group">
                  <octicon
                    name="calendar"
                    class=""
                  />
                  <label>日期：</label>
                  <input
                    type="date"
                    class="form-control form-control-sm"
                    v-model="po.purDate"
                  >
                </div>
              </div>
              <div class="col-2 ml-1">
                <div class="form-group">
                  <octicon
                    name="pulse"
                    class=""
                  />
                  <label>数量：</label>
                  <input
                    type="number"
                    class="form-control form-control-sm"
                    v-model="po.qty"
                  >
                </div>
              </div>
              <div class="col-2 ml-1">
                <div class="form-group">
                  <octicon
                    name="pulse"
                    class=""
                  />
                  <label>单价：</label>
                  <input
                    type="number"
                    class="form-control form-control-sm"
                    v-model="po.price"
                  >
                </div>
              </div>
              <div class="col-2 ml-1">
                <div class="form-group">
                  <octicon
                    name="pulse"
                    class=""
                  />
                  <label>金额：</label>
                  <input
                    type="number"
                    class="form-control form-control-sm"
                    v-model="po.amount"
                  >
                </div>
              </div>
            </div>
            <div class="form-row ml-1">
              <div class="col-8">
                <div class="form-group w-100">
                  <octicon
                    name="organization"
                    class=""
                  />
                  <label>供应商：
                    <validate-error :text="errors.supplier" /></label>
                  <div class="d-flex align-items-baseline">
                    <div class="input-group mb-3 mr-auto">
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        v-model="po.supplier.name"
                        @change="onSupplierInputed"
                      />
                      <div class="input-group-append">
                        <div class="dropdown">
                          <button
                            type="button"
                            class="btn btn-success dropdown-toggle border-0 btn-sm"
                            data-toggle="dropdown"
                            @click="onSupplierDropdown"
                          />
                          <div class="dropdown-menu">
                            <a
                              class="dropdown-item"
                              v-for="(supplier, index) in suppliers"
                              :key="index"
                              @click="onSupplierSelected(supplier)"
                            >
                              {{supplier.name}}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <octicon
                    name="info"
                    class=""
                  />
                  <label>参考单号：</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    v-model="po.refNo"
                  >
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="col ml-1">
                <div class="form-group">
                  <octicon
                    name="tag"
                    class=""
                  />
                  <label>备注：</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    v-model="po.remark"
                  >
                </div>
              </div>
            </div>
            <div class="d-flex">
              <icon-button
                class="ml-1"
                icon="circle-slash"
                text="取消"
                @click="cancel"
              />
              <icon-button
                class="ml-1"
                width="100px"
                icon="database"
                text="保存"
                @click="save"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import __ from 'underscore'
import moment from 'moment'
// import {validEmail} from '../finelets/Validators.js'
import { $get } from '../plugins/fetch.js'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { createQueryString } from '../helpers/QueryHelper.js'
export default {
  data () {
    return {
      oldPo: null,
      po: {
        code: null,
        part: { name: null },
        purDate: null,
        qty: null,
        price: null,
        amount: null,
        supplier: { name: null },
        refNo: null,
        remark: null
      },
      parts: [],
      suppliers: [],
      errors: {}
    }
  },
  async created () {
    if (this.selectedPurchase) {
      let data = await $get(this.selectedPurchase)
      this.oldPo = { ...data.Purchase, href: data.href }
      let part = await this.getPart(this.oldPo.part)
      let supplier = await this.getSupplier(this.oldPo.supplier)
      let purDate = moment(this.oldPo.purDate).format('YYYY-MM-DD')
      this.po = {
        ...this.oldPo,
        part: part.Part,
        supplier: supplier.Supplier,
        purDate
      }
    }
  },

  computed: {
    ...mapGetters(['selectedPurchase'])
  },
  methods: {
    ...mapActions([
      'searchParts',
      'searchSuppliers',
      'getPart',
      'getSupplier',
      'updatePurchase',
      'createPurchase'
    ]),
    ...mapMutations(['selectedPart', 'selectedSupplier']),
    async onPartDropdown () {
      const cond = { search: this.po.part.name, filters: [] }
      let r = createQueryString([], cond)
      try {
        let data = await this.searchParts(r)
        data = __.map(data.collection.items, item => {
          return item.data
        })
        this.parts = data
      } catch (e) {}
    },
    onPartSelected (selected) {
      this.po.part = selected
    },

    async onPartInputed () {
      const cond = { search: this.po.part.name, filters: [] }
      let r = createQueryString([], cond)
      let data = await this.searchParts(r)
      data = __.map(data.collection.items, item => {
        return item.data
      })
      if (data.length === 1) {
        this.po.part = data[0]
      } else {
        this.po.part = { name: this.po.part.name }
      }
    },

    async onSupplierDropdown () {
      const cond = { search: this.po.supplier.name, filters: [] }
      let r = createQueryString([], cond)
      try {
        let data = await this.searchSuppliers(r)
        data = __.map(data.collection.items, item => {
          return item.data
        })
        this.suppliers = data
      } catch (e) {}
    },

    onSupplierSelected (selected) {
      this.po.supplier = selected
    },

    async onSupplierInputed () {
      const cond = { search: this.po.supplier.name, filters: [] }
      let r = createQueryString([], cond)
      let data = await this.searchSuppliers(r)
      data = __.map(data.collection.items, item => {
        return item.data
      })
      if (data.length === 1) {
        this.po.supplier = data[0]
      } else {
        this.po.supplier = { name: this.po.supplier.name }
      }
    },

    async refesh () {
      let data = await $get(this.selectedPurchase)
      this.oldPo = { ...data.Purchase, href: data.href }
      let part = await this.getPart(this.oldPo.part)
      let supplier = await this.getSupplier(this.oldPo.supplier)
      let purDate = moment(this.oldPo.purDate).format('YYYY-MM-DD')
      this.po = {
        ...this.oldPo,
        part: part.Part,
        supplier: supplier.Supplier,
        purDate
      }
    },

    async cancel () {
      setTimeout(() => {
        this.$router.go(-1)
      })
    },

    async save () {
      this.errors = {}
      if (!this.po.code) this.errors.code = '必须输入采购单号'
      if (!this.po.part.id) this.errors.part = '必须输入料品'
      if (!this.po.purDate) this.errors.purDate = '必须输入采购日期'
      if (!this.po.qty) this.errors.qty = '必须输入采购数量'
      else if (this.po.qty <= 0) this.errors.qty = '采购数量必须大于零'
      if (!this.po.amount) this.errors.amount = '必须输入采购金额'
      else if (this.po.amount <= 0) this.errors.amount = '采购金额必须大于零'
      if (!this.po.supplier.id) this.errors.supplier = '必须输入供应商'
      if (
        this.errors.part ||
        this.errors.supplier ||
        this.errors.purDate ||
        this.errors.qty ||
        this.errors.amount
      ) { return }

      let part = this.po.part.id
      this.selectedPart(this.po.part)
      let supplier = this.po.supplier.id
      this.selectedSupplier(this.po.supplier)

      if (this.selectedPurchase) {
        let href = this.oldPo.href
        let modifiedDate = this.oldPo.modifiedDate
        let purDate = this.po.purDate
        let toUpdate = {
          ...this.po,
          href,
          part,
          supplier,
          purDate,
          modifiedDate
        }
        try {
          this.oldPo.modifiedDate = await this.updatePurchase(toUpdate)
          this.$router.back()
        } catch (e) {}
      } else {
        let toCreate = {
          ...this.po,
          part,
          supplier
        }
        try {
          await this.createPurchase(toCreate)
          this.$router.back()
        } catch (e) {}
      }
    }
  }
}
</script>

<style>
.Subhead-heading {
  flex: 1 1 auto;
  font-size: 24px;
  font-weight: 400;
}
</style>
