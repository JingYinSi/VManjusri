<template>
  <master-details :logo="master.img" :title="master.name" :subtitle="master.typeName"
      @edit="onEditMaster" @save="onSaveMaster">
      <div slot="master">
          <div class="d-flex flex-item-center my-2">
              <octicon name="milestone" class="mt-1 mr-2"/>
              <div class="form-check form-check-inline" v-for="option in options" :key="option.value">
                  <input class="form-check-input" type="radio" :id="option.name" :name="option.name" :value="option.value" v-model="editingAttrs.type">
                  <label class="form-check-label" :for="option.name">{{option.name}}</label>
              </div>
          </div>
          <div class="d-flex flex-item-center my-2">
              <octicon name="shield" class="mt-2"/>
              <input type="text" class="form-control form-control-sm ml-2" v-model="editingAttrs.code"/>
          </div>
          <div class="d-flex flex-item-center my-2">
              <octicon name="note" class="mt-2"/>
              <input type="text" class="form-control form-control-sm ml-2" v-model="editingAttrs.name"/>
          </div>
          <div class="d-flex flex-item-center my-2">
              <octicon name="location" class="mt-2"/>
              <input type="text" class="form-control form-control-sm ml-2" v-model="editingAttrs.address"/>
          </div>
          <div class="d-flex flex-item-center my-2">
              <octicon name="hubot" class="mt-2"/>
              <input type="text" class="form-control form-control-sm ml-2" v-model="editingAttrs.account"/>
          </div>
          <div class="d-flex flex-item-center my-2">
              <octicon name="link" class="mt-2"/>
              <input type="text" class="form-control form-control-sm ml-2" v-model="editingAttrs.link"/>
          </div>
          <div class="d-flex flex-item-center my-2">
              <octicon name="tag" class="mt-2"/>
              <input type="text" class="form-control form-control-sm ml-2" v-model="editingAttrs.tags"/>
          </div>
      </div>
      <tabpage class="col-9" :tabs="tabs" activated="purchases" slot="details" @changed="onPageChanged">
        <div slot="overview">
          <h1>Welcome to our support center 1.0.1</h1>
          <p>
            Here we will list all indexed about current part!
          </p>
        </div>
        <div slot="purchases">
          <filters-form
            :config="purchaseFilters"
            class="my-2"
            @search="onSearchPurchases"
            @action="editPurchaseForm()"
          />
          <item-list :items="purchases">
            <template slot-scope="po">
              <div class="row border-0 p-2">
                <div class="col">
                  <div class="d-flex">
                    <h6 class="text-primary mb-1 mr-auto selectable" @click="editPurchaseForm(po.item.href)">
                        <octicon :name="po.item.stateIcon" scale="1" style="color:green"/>
                        {{po.item.code}}
                    </h6>
                  </div>
                  <div class="d-flex mt-1">
                    <h6 class="text-primary mb-1 mr-auto selectable" @click="selectPart(po.item.partObj)">{{po.item.partObj.Part.name}}</h6>
                    <octicon v-if="po.item.partObj.Part.brand" name="bookmark" class="mt-1 mr-1" size="16" style="color:green"/>
                    <h6 class="font-weight-bolder">{{po.item.partObj.Part.brand}}</h6>
                    <octicon v-if="po.item.partObj.Part.spec" name="eye" class="mt-1 mr-1 ml-3" size="16" style="color:green"/>
                    <h6 class="font-weight-bolder">{{po.item.partObj.Part.spec}}</h6>
                  </div>
                  <div class="d-flex justify-content-between">
                      <span class="ml-1">单价：{{po.item.price}}</span>
                      <span class="ml-1">数量：{{po.item.qty}}</span>
                      <span class="ml-1">金额: {{po.item.amount}}</span>
                      <span class="" style="width:100px">
                        <div class="progress mt-2" style="height:10px">
                              <div class="progress-bar bg-success" :class="po.item.progress.color" :style="po.item.progress.progress"></div>
                        </div>
                      </span>
                  </div>
                  <div class="d-flex mt-3">
                      <span v-if="po.item.refNo" class="" style="font-size:10px"><octicon name="pin" scale="1" style="color:yellow"/>{{po.item.refNo}}</span>
                      <octicon v-if="po.item.remark" name="tag" class="ml-3 mt-1" size="16" style="color:green"/>
                      <h6 class="ml-1 mt-1 mr-auto"  style="font-size:10px">{{po.item.remark}}</h6>
                      <octicon name="primitive-dot" scale="1.1" style="color:yellow"/>
                      <span class="ml-1" style="font-size:10px">更新于 {{po.item.modifiedDate | date}}</span>
                  </div>
              </div>
              </div>
            </template>
          </item-list>
        </div>
      </tabpage>
  </master-details>
</template>

<script>
// import __ from 'underscore'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import typeEnums from '../helpers/Enums.js'
import {createQueryString, dealWithParts} from '../helpers/QueryHelper.js'
import MasterDetails from '../components/MasterDetails'
import FiltersForm from '../components/FiltersForm'
import ItemList from '../components/ItemList'

const PO_STATE_TO_ICON = {
  Draft: 'keyboard',
  Approved: 'checklist',
  Open: 'pulse',
  Closed: 'star',
  Canceled: 'x'
}

function poProgress (po) {
  let progress = 'width:' + (po.qty - po.left) * 100 / po.qty + '%'
  let color = progress < 20 ? 'bg-danger' : 'bg-success'
  return {progress, color}
}

export default {
  components: {
    MasterDetails,
    FiltersForm,
    ItemList
  },
  data () {
    return {
      purchases: [],
      editingAttrs: {
        type: 0,
        code: null,
        name: null,
        address: null,
        tags: null,
        link: null
      }
    }
  },
  computed: {
    ...mapGetters(['selectedSupplier']),
    master () {
      let img = '/static/img/suixi.jpg'
      return { ...this.selectedSupplier, img }
    },
    options () {
      let {supplier} = typeEnums
      return supplier
    },
    tabs () {
      return [
        {
          id: 'overview',
          title: '概要'
        },
        {
          id: 'purchases',
          title: '采购'
        }
      ]
    },
    purchaseFilters () {
      return {
        search: {width: 400},
        filters: []
      }
    }
  },
  async created () {
    this.onPageChanged('purchases')
  },
  methods: {
    ...mapActions(['updateSupplier', 'searchPurchases', 'getPart']),
    ...mapMutations(['selectedPurchase', 'selectedPart']),
    onEditMaster () {
      this.editingAttrs = {
        ...this.master
      }
    },
    async onSaveMaster (save) {
      if (save) {
        await this.updateSupplier(this.editingAttrs)
      }
    },
    async onSearchPurchases (cond) {
      this.purchases = []
      cond.filters = [this.selectedSupplier.id]
      let r = createQueryString(['supplier'], cond)
      // try {
      let data = await this.searchPurchases(r)
      data = dealWithParts(null, data)
      for (let i = 0; i < data.length; i++) {
        let po = data[i]
        // po.code = 'PO2019-23-001' // TODO: Generate PO code when it was created
        po.stateIcon = PO_STATE_TO_ICON[po.state]
        po.progress = poProgress(po)
        let part = await this.getPart(po.part)
        po.partObj = part
      }
      this.purchases = data
      // } catch (e) {
      // }
    },
    onPageChanged (page) {
      const loaders = {purchases: this.onSearchPurchases}
      loaders[page]({search: '', filters: [this.master.id]})
    },
    selectPart (part) {
      this.selectedPart({...part.Part, href: part.href})
      let path = {
        name: 'masterPart'
      }
      this.$router.push(path)
    },
    editPurchaseForm (href) {
      this.selectedPurchase(href)
      let path = {
        name: 'purchaseForm'
      }
      this.$router.push(path)
    }
  }
}
</script>
