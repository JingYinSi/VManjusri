<template>
  <div class="mx-auto w-75">
    <div class="row mt-4 justify-content-center">
      <div class="col-3 d-flex flex-column">
        <img :src="logo" height="240px"/>
        <h1 class="vcard-names mt-3">
          <span class="vcard-fullname d-block">{{title}}</span>
          <span v-if="subtitle" class="vcard-subname d-block">{{subtitle}}</span>
        </h1>
        <div v-if="email" class="d-inline text-truncate font-weight-light">
          <octicon name="mail" />
          <small>{{email}}</small>
        </div>
        <div class="position-relative" :class="collapse" id="masterform">
            <slot name="master"/>
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
export default {
  props: {
    logo: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String
    },
    email: {
      type: String
    }
  },
  data () {
    return {
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
      this.$emit('edit')
    },
    onSave: function (save) {
      this.showmaster = false
      this.$emit('save', save)
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
