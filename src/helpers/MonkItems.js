import __ from 'underscore'

const remote = {
  summary: '供僧的功德总述',
  title: '随喜供斋僧位',
  items: [{
    img: '/static/img/img_gongxiu_2.jpg',
    name: '方丈位',
    target: 88888,
    amount: 33333,
    desc: '寺院方丈过斋时坐的位置，仅1个，认供完截止',
    num: 10000
  },
  {
    name: '僧位',
    price: 6666,
    desc: '出家僧众过斋的位置，共1000个僧位',
    num: 20000
  },
  {
    name: '随喜供斋',
    price: 88,
    desc: '出家僧众供斋',
    num: 30000
  }
  ]
}

function monks () {
  remote.items = __.map(remote.items, item => {
    return {
      ...item,
      img: item.img || '/static/img/img_gongxiu_2.jpg'
    }
  })
  return remote
}
export default monks()
