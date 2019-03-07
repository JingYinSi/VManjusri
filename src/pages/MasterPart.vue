<template>
  <master-details :master="master">
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
                    <h6 class="text-primary font-weight-bolder selectable"  @click="selectSupplier(po.item.supplierObj)">{{po.item.supplierObj.Supplier.name}}</h6>
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
import {createQueryString, dealWithParts} from '../helpers/QueryHelper.js'
import { mapActions, mapMutations, mapGetters } from 'vuex'
import typeEnums from '../helpers/Enums.js'
import MasterDetails from '../components/MasterDetails/MasterDetails'
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
      purchases: []
    }
  },
  computed: {
    ...mapGetters(['selectedPart']),
    master () {
      let img = this.selectedPart.img ? this.selectedPart.img : '/static/img/suixi.jpg'
      let subtitle
      if (this.selectedPart.brand) {
        subtitle = this.selectedPart.brand
        if (this.selectedPart.spec) {
          subtitle = subtitle + ' -- ' + this.selectedPart.spec
        }
      } else {
        subtitle = this.selectedPart.spec
      }
      return {
        logo: img,
        title: this.selectedPart.name,
        subtitle,
        items: [
          {
            name: 'type',
            icon: 'milestone',
            type: 'radio',
            options: typeEnums.part
          },
          {
            name: 'code',
            icon: 'shield'
          },
          {
            name: 'name',
            icon: 'note'
          },
          {
            name: 'brand',
            icon: 'bookmark'
          },
          {
            name: 'spec',
            icon: 'eye'
          },
          {
            name: 'tags',
            icon: 'tag'
          },
          {
            name: 'unit',
            icon: 'ellipsis'
          }
        ],
        data: this.selectedPart,
        update: this.onSaveMaster
      }
    },
    purchaseFilters () {
      return {
        search: {width: 400},
        filters: []
      }
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
    }
  },
  async created () {
    this.onPageChanged('purchases')
  },

  methods: {
    ...mapActions(['updatePart', 'searchPurchases', 'getSupplier']),
    ...mapMutations(['selectedPurchase', 'selectedSupplier']),
    async onSaveMaster (data) {
      if (data) {
        await this.updatePart(data)
      }
    },
    async onSearchPurchases (cond) {
      this.purchases = []
      cond.filters = [this.selectedPart.id]
      let r = createQueryString(['part'], cond)
      // try {
      let data = await this.searchPurchases(r)
      data = dealWithParts(null, data)
      for (let i = 0; i < data.length; i++) {
        let po = data[i]
        // po.code = 'PO2019-23-001' // TODO: Generate PO code when it was created
        po.stateIcon = PO_STATE_TO_ICON[po.state]
        po.progress = poProgress(po)
        let supplier = await this.getSupplier(po.supplier)
        po.supplierObj = supplier
      }
      this.purchases = data
      // } catch (e) {
      // }
    },
    onPageChanged (page) {
      const loaders = {purchases: this.onSearchPurchases}
      loaders[page]({search: '', filters: [this.selectedPart.id]})
    },
    selectSupplier (supplier) {
      this.selectedSupplier({...supplier.Supplier, href: supplier.href})
      let path = {
        name: 'masterSupplier'
      }
      this.$router.push(path)
    },
    // TODO: 当新增采购单时，料品或供应商应缺省为当前所选料品或供应商
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
