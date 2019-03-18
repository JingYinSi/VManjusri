<template>
  <div class="container-fluid">
    <div class="d-flex flex-column mx-auto" style="width:95%;margin-bottom:50px">
      <div class="d-flex align-items-center mt-2 pb-3" style="border-bottom:1px solid #827a7a">
        <img class="mt-2 rounded-circle" height="60px" src="/static/img/clx.jpg"/>
        <h5 class="ml-3 mt-3">安然昵称</h5>
      </div>
      <div v-for="(group, index) in types" :key="index" class="" style="border-bottom:4px solid secondary">
        <div class="d-flex border-bottom align-items-center" style="height:50px">
          <h5 class="ml-3" style="font-size:18px;font-weight:600">{{group.title}}</h5>
        </div>
        <div class="d-flex align-items-center  border-bottom" style="height:50px">
          <div v-for="(fld, colIdx) in group.columns" :key="colIdx"
              class="d-flex justify-content-center" style="font-size:18px" :style="fld.width">{{fld.name}}</div>
        </div>
        <div class="my-custom-scrollbar" style="height:100px">
          <div class="d-flex border-bottom align-items-center" style="height:50px"
               v-for="(row, rowIdx) in group.items" :key="rowIdx">
            <div class="d-flex justify-content-center" style="width:25%">{{row.name}}</div>
            <div class="d-flex justify-content-center" style="width:45%">{{row.amount}}元</div>
            <div class="d-flex justify-content-center" style="width:30%">{{row.date}}</div>
          </div>
        </div>
      </div>
      <div>
        <div class="d-flex border-bottom align-items-center" style="height:50px">
          <h5 class="ml-3" style="font-size:18px;font-weight:600">{{virtues.title}}</h5>
        </div>
        <div class="d-flex align-items-center  border-bottom" style="height:50px">
          <div class="d-flex justify-content-center mr-auto" style="font-size:18px;width:30%">随喜金额</div>
          <div class="d-flex justify-content-center" style="font-size:18px;width:30%">随喜时间</div>
        </div>
        <div class="my-custom-scrollbar" style="height:100px">
          <div class="d-flex border-bottom align-items-center" style="height:50px"
               v-for="(row, rowIdx) in virtues.items" :key="rowIdx">
            <div class="d-flex justify-content-center mr-auto" style="width:30%">{{row.amount}}元</div>
            <div class="d-flex justify-content-center" style="width:30%">{{row.date}}</div>
          </div>
        </div>
      </div>
    </div>
    <foot-menu/>
  </div>
</template>

<script>
import FootMenu from '../components/FootMenu'
export default {
  components: {
    FootMenu
  },
  computed: {
    types () {
      return [
        {
          type: 'lamping',
          title: '供灯祈福',
          columns: [
            {name: '供灯类型', width: 'width:25%'},
            {name: '金额', width: 'width:45%'},
            {name: '供灯时间', width: 'width:30%'}
          ],
          items: [
            {name: '长寿灯', amount: '200', date: '2019-03-12'},
            {name: '长寿灯', amount: '300', date: '2019-03-12'},
            {name: '长寿灯', amount: '400', date: '2019-03-12'},
            {name: '长寿灯', amount: '500', date: '2019-03-12'},
            {name: '长寿灯', amount: '600', date: '2019-03-12'},
            {name: '长寿灯', amount: '700', date: '2019-03-12'},
            {name: '长寿灯', amount: '800', date: '2019-03-12'},
            {name: '长寿灯', amount: '900', date: '2019-03-12'}
          ]
        },
        {
          type: 'formonks',
          title: '随喜斋僧位',
          columns: [
            {name: '供僧类型', width: 'width:25%'},
            {name: '金额', width: 'width:45%'},
            {name: '供僧时间', width: 'width:30%'}
          ],
          items: [
            {name: '方丈位', amount: '200', date: '2019-03-12'},
            {name: '僧位', amount: '300', date: '2019-03-12'},
            {name: '僧位', amount: '400', date: '2019-03-12'},
            {name: '僧位', amount: '500', date: '2019-03-12'},
            {name: '僧位', amount: '600', date: '2019-03-12'},
            {name: '僧位', amount: '700', date: '2019-03-12'},
            {name: '僧位', amount: '800', date: '2019-03-12'},
            {name: '僧位', amount: '900', date: '2019-03-12'}
          ]
        }
      ]
    },
    virtues () {
      return {
        title: '随喜建寺',
        columns: [
          {name: '随喜金额'},
          {name: '随喜时间'}
        ],
        items: [
          {amount: '200', date: '2019-03-12'},
          {amount: '300', date: '2019-03-12'},
          {amount: '400', date: '2019-03-12'},
          {amount: '500', date: '2019-03-12'},
          {amount: '600', date: '2019-03-12'},
          {amount: '700', date: '2019-03-12'},
          {amount: '800', date: '2019-03-12'},
          {amount: '900', date: '2019-03-12'}
        ]
      }
    }
  },
  methods: {
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
