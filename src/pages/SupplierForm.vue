<template>
  <div class="mx-auto w-75">
    <div class="row mt-4 justify-content-center">
      <div class="col-3">
          <img class="bg-dark" src="/static/img/JSM2-2.jpg" style="width:100%"/>
      </div>
      <div class="col-9">
        <div class="d-flex align-items-baseline">
           <h2 class="Subhead-heading">供应商</h2>
        </div>
        <form class="border-top" novalidate="true" @submit.prevent>
          <div class="mt-3">
            <p v-if="errors.length">
              <b>Please correct the following error(s):</b>
              <ul>
                <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
              </ul>
            </p>
            <div class="form-row">
              <div class="col-4 ml-1">
                  <div class="form-group">
                    <octicon name="shield" class=""/>
                    <label>编号：<validate-error :text="errors.code"/></label>
                    <input type="text" class="form-control form-control-sm" v-model="doc.code">
                  </div>
              </div>
            </div>
            <div class="form-row">
              <div class="col ml-1">
                  <div class="form-group">
                    <octicon name="milestone" class=""/>
                    <label>类型：</label>
                    <div class="form-check form-check-inline" v-for="option in supplierOptions" :key="option.value">
                      <input class="form-check-input" type="radio" :name="option.name" :id="option.name" :value="option.value" v-model="doc.type">
                      <label class="form-check-label" :for="option.name">{{option.name}}</label>
                    </div>
                  </div>
              </div>
            </div>
            <div class="form-row">
              <div class="col ml-1">
                  <div class="form-group">
                    <octicon name="note" class=""/>
                    <label>名称：<validate-error :text="errors.name"/></label>
                    <input type="text" class="form-control form-control-sm" v-model="doc.name">
                  </div>
              </div>
              <div class="col ml-1">
                  <div class="form-group">
                    <octicon name="hubot" class=""/>
                    <label>银行账户：</label>
                    <input type="text" class="form-control form-control-sm" v-model="doc.account">
                  </div>
              </div>
            </div>
            <div class="form-row">
              <div class="col ml-1">
                  <div class="form-group">
                    <octicon name="location" class=""/>
                    <label>地址：</label>
                    <input type="text" class="form-control form-control-sm" v-model="doc.address">
                  </div>
              </div>
            </div>
            <div class="form-row">
              <div class="col ml-1">
                  <div class="form-group">
                    <octicon name="tag" class=""/>
                    <label>标签：</label>
                    <input type="text" class="form-control form-control-sm" v-model="doc.tags">
                  </div>
              </div>
            </div>
            <div class="form-row">
              <div class="col ml-1">
                  <div class="form-group">
                    <octicon name="link" class=""/>
                    <label>链接：</label>
                    <input type="text" class="form-control form-control-sm" v-model="doc.link">
                  </div>
              </div>
            </div>
            <div class="d-flex mt-3">
              <icon-button class="ml-1" icon="circle-slash" text="取消" @click="cancel"/>
              <icon-button class="ml-1" width="100px" icon="database" text="保存" @click="save"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import enums from '../helpers/Enums.js'
import { mapActions, mapMutations } from 'vuex'
export default {
  data () {
    return {
      doc: {
        code: null,
        type: 1,
        name: null,
        address: null,
        tags: null,
        link: null
      },
      errors: {}
    }
  },
  async created () {
  },

  computed: {
    supplierOptions () {
      let {supplier} = enums
      return supplier
    }
  },
  methods: {
    ...mapActions(['createSupplier']),
    ...mapMutations(['selectedSupplier']),
    async cancel () {
      setTimeout(() => {
        this.$router.back()
      })
    },

    async save () {
      this.errors = {}
      // if (!this.doc.code) this.errors.code = '必须输入编号，且编号必须唯一'
      if (!this.doc.name) this.errors.name = '必须输入供应商名称'
      if (this.errors.name) return

      try {
        let created = await this.createSupplier(this.doc)
        console.log(JSON.stringify(created, null, 2))
        this.$router.back()
      } catch (e) {
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
