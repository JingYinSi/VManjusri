function wrapWechatRedirecuUrl () {
  const appId = 'wx6fd4695fd38a8b3f'
  const oauth2BaseURL = 'https://open.weixin.qq.com/connect/oauth2/authorize'
  const redirectUrl = 'http://dev.jingyintemple.top/jingyin/rests/manjusri/wx/signin'

  var wrapedUrl = oauth2BaseURL + '?appid=' + appId +
    '&redirect_uri=' + redirectUrl + '&response_type=code&scope=snsapi_userinfo#wechat_redirect'
  return wrapedUrl
};

export default async function signinWechat () {
  const url = wrapWechatRedirecuUrl()
  window.location.href = url
}
