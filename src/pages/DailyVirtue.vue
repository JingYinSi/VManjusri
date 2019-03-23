<template>
  <div class="container-fluid">
    <div class="d-flex flex-column">
      <div class="d-flex justify-content-center">
        <img class="mt-2" height="220px" src="/static/img/banner-user.png"/>
      </div>
      <div class="w-100" style="margin-top:50px">
        <div class="row">
          <div class="col-1">
            <img class="mx-2" height="25px" src="/static/img/flower.png"/>
          </div>
          <div class="col-auto px-0">
            <h5 class="ml-4">金额：</h5>
          </div>
          <div class="col-6 pr-0">
            <input type="text" class="form-control text-right"/>
          </div>
          <div class="col-auto">
            <h5>元</h5>
          </div>
        </div>
        <div class="row">
          <div class="col-10 offset-1">
            <div class="d-flex mt-3 justify-content-between" style="height:65px">
              <div v-for="p in prices1" :key="p" style="width:30%">
                <div class="price-bar">{{p}}元</div>
              </div>
            </div>
            <div class="d-flex justify-content-between" style="height:50px">
              <div v-for="p in prices2" :key="p" style="width:30%">
                <div class="price-bar">{{p}}元</div>
              </div>
            </div>
          </div>
        </div>
        <div class="row" style="margin-top:40px">
          <div class="col-1">
            <img class="mx-2" height="25px" src="/static/img/flower.png"/>
          </div>
          <div class="col-10">
            <h5 class="ml-2">姓名：</h5>
            <input type="text" class="form-control"/>
          </div>
        </div>
        <div class="row" style="margin-top:40px">
          <div class="col-1">
            <img class="mx-2" height="25px" src="/static/img/flower.png"/>
          </div>
          <div class="col-10">
            <h5 class="ml-2">回向：</h5>
            <textarea  rows="3" class="form-control"
              style="z-index:auto;position:relative;line-height:28.5714px;
                    font-size:20px;transition:none 0s ease 0s;background:#f4f4f4;"/>
          </div>
        </div>
        <div class="row" style="margin-top:15px">
          <div class="col-12">
            <div class="mx-auto" style="width:150px">
                <button type="button" class="btn w-100" style="background-color:#fbc200">确认</button>
            </div>
          </div>
        </div>
      </div>
      <div class="row my-4 py-4" style="border-top:3px solid #fcf6d4">
          <div class="col-11 ml-3">
              <div class="d-flex flex-column">
                <div class="my-custom-scrollbar">
                    <tr v-for="(item, index) in virtues" :key="index" style="padding-bottom: 2cm;height:26px;">
                        <td width="150">{{item.month}}月{{item.day}}号</td>
                        <td width="250">{{item.name}}</td>
                        <td width="150">{{item.city}}</td>
                        <td width="150">计{{item.amount}}元</td>
                    </tr>
                </div>
                <div class="d-flex flex-row mx-auto mt-4">
                  <img src="/static/img/clould.png" width="30px" height="22px">
                  <div class="" style="font-size:16px">
                      随缘乐助<span style="color:#f0a50c;font-weight:600">10000</span>次，功德无量
                  </div>
                </div>
              </div>
          </div>

      </div>
      <div class="row px-2" style="mx-1">
          <div class="col-12 d-flex flex-column">
              <h3 class="mx-auto" style="font-family:微软雅黑;font-size:28px;letter-spacing:10px;font-weight: 600;">行善功德</h3>
              <span class="mx-auto" style="margin-bottom:20px;color:#8d8d8d;font-size:12px;font-weight:600;letter-spacing:2px;">ONE SMALL ACT EVERYDALL</span>
              <p style="font-family:微软雅黑;font-size:16px;line-height:28px;color:#827a7a;">五台山静音寺正在筹建，每天发心给寺院一点捐助，不仅获得人天福报，也利于我们早日圆满福慧资粮，而且，清净的善心善行也将利益无边的父母有情，寺院建成，它将是修学佛法的依托，众生解脱的家园。</p>
              <p style="font-family:微软雅黑;font-size:16px;line-height:28px;color:#827a7a;">日行一善，每日为寺院义捐，我们一起为建设解脱家园而努力！</p>
          </div>
      </div>
      <div class="row pt-4" style="background-color:#fcf6d4;padding-bottom:80px">
        <div class="col-12 d-flex flex-column">
          <img class="mx-auto" src="/static/img/logo.png" width="80px" height="97px"/>
        </div>
      </div>
    </div>
    <foot-menu/>
  </div>
</template>

<script>
import FootMenu from '../components/FootMenu'
import virtueList from '../helpers/DailyVirtueList.js'
export default {
  components: {
    FootMenu
  },
  computed: {
    prices1 () {
      return [1, 3, 5]
    },
    prices2 () {
      return [10, 88, 99]
    },
    virtues () {
      return virtueList
    }
  },
  methods: {
  }
}
</script>

<style>
.price-bar {
    width:100px;
    height: 50px;
    border-radius: 5px;
    background: #fcf6d4;
    color: #fbc200;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    margin-top: 15px;
}

.my-custom-scrollbar {
  position: relative;
  height: 130px;
  overflow: auto;
}
</style>
