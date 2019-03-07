<template>
  <div class="mx-auto w-75">
    <div class="row mt-4 justify-content-center">
      <div class="col-3 d-flex flex-column">
        <img :src="master.logo" height="240px"/>
        <h1 class="vcard-names mt-3">
          <span class="vcard-fullname d-block">{{master.title}}</span>
          <span v-if="master.subtitle" class="vcard-subname d-block">{{master.subtitle}}</span>
        </h1>
        <div v-if="master.email" class="d-inline text-truncate font-weight-light">
          <octicon name="mail" />
          <small>{{master.email}}</small>
        </div>
        <div class="position-relative" :class="collapse" id="masterform">
            <div>
              <div v-for="(item, index) in master.items" :key="index">
                <input-text v-if="!item.type || item.type=='text'" class="mt-2" :icon="item.icon" v-model="masterAttrs[item.name]"/>
                <radio v-if="item.type=='radio'" class="mt-2" :icon="item.icon" :options="item.options" v-model="masterAttrs[item.name]"/>
              </div>
            </div>
            <div class="d-flex my-3">
              <button type="button" class="btn btn-success btn-sm border-1 ml-2" @click="onSave(true)">保存</button>
              <button type="button" class="btn btn-light btn-cancel btn-sm border-1 ml-2" @click="onSave()">取消</button>
          </div>
        </div>
        <button type="button" class="btn border-secondary bg-light mt-3 p-0"
          data-toggle="collapse" data-target="#masterform" @click="onEdit">
          Edit
        </button>
      </div>
      <slot name="details"/>
    </div>
  </div>
</template>

<script>
// import __ from 'underscore'
import Radio from './Radio'
import InputText from './Input'

export default {
  components: {
    Radio,
    InputText
  },
  props: {
    master: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      masterAttrs: {},
      showmaster: false
    }
  },
  computed: {
    collapse () {
      let collapse = this.showmaster ? 'collapse.show' : 'collapse'
      return collapse
    }
  },
  methods: {
    onEdit () {
      this.showmaster = true
      this.masterAttrs = {...this.master.data}
    },
    onSave: function (save) {
      this.showmaster = false
      if (save) this.master.update(this.masterAttrs)
    }
  }
}
</script>

<style>
.vcard-names {line-height: 1;}
.vcard-fullname {font-size: 26px; line-height: 30px;}
.vcard-subname {color: #666; font-size: 20px; font-style: normal; font-weight: 300; line-height: 24px;}
.flex-auto {
    flex: 1 1 auto!important;
}
.btn-cancel {
    border: 1px solid rgba(27,31,35,.2);
}
</style>
