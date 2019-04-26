function doPay (payData) {
  const data = {
    appId: payData.appId, // 公众号名称，由商户传入
    timeStamp: payData.timeStamp, // 时间戳，自1970年以来的秒数
    nonceStr: payData.nonceStr, // 随机串
    package: 'prepay_id=' + payData.prepay_id,
    signType: payData.signType, // 微信签名方式：
    paySign: payData.paySign // 微信签名
  }

  function onBridgeReady () {
    // eslint-disable-next-line no-undef
    WeixinJSBridge.invoke(
      'getBrandWCPayRequest', data,
      function (res) {
        let result = res.err_msg // result = 'get_brand_wcpay_request:ok
        if (result.indexOf('ok') !== -1) {
          alert('result of wechat payment ' + payData.prepay_id + ' is ok')
          // window.location = '{{links.notify}}?virtueId={{virtue}}'
        } else if (result.indexOf('cancel') !== -1) {
          alert('result of wechat payment ' + payData.prepay_id + ' is cancel')
          // window.location = '{{links.home}}'
        } else if (result.indexOf('fail') !== -1) {
          alert('result of wechat payment ' + payData.prepay_id + ' is fail')
          // window.location = '{{links.home}}'
        }
      }
    )
  }

  if (typeof WeixinJSBridge === 'undefined') {
    if (document.addEventListener) {
      document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false)
    } else if (document.attachEvent) {
      document.attachEvent('WeixinJSBridgeReady', onBridgeReady)
      document.attachEvent('onWeixinJSBridgeReady', onBridgeReady)
    }
  } else {
    onBridgeReady()
  }
}

export default doPay
