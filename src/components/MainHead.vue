<template>
  <div>
    <img class="w-100" style="height:180px" :src="banner"/>
    <div style="top:120px;left:10px;z-index:1;position:absolute;">
      <div class="d-inline-flex align-items-center">
        <img :src="logo" style="height:90px"/>
        <h5 class="text-white ml-2">{{header}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    banner: {
      type: String,
      required: true
    },
    logo: {
      type: String,
      required: true
    },
    header: {
      type: String,
      required: true
    }
  }
}
</script>
