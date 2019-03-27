import __ from 'underscore'
import store from '../store'

/* const remote = {
  type: 'lamping',
  summary: '供灯之功德总述',
  title: '供灯祈福',
  items: [{
    img: '/static/img/lamps.jpg',
    name: '长明灯',
    price: 365,
    desc: '2019年365天整年在佛前供灯1盏',
    num: 3023
  },
  {
    name: '长明灯',
    price: 1095,
    desc: '2019年365天整年在佛前供灯3盏',
    num: 1000
  },
  {
    name: '除障灯',
    price: 200,
    desc: '愿众生消除障碍违缘',
    num: 30000
  },
  {
    name: '吉祥灯',
    price: 100,
    desc: '祈祷家庭和睦，婚缘顺意',
    num: 5000
  }
  ]
} */

function lamps () {
  console.log('enter lamps list ......')
  const lamps = store.dispatch('lamplist')
  console.log('enter lamps list is listed ......')
  lamps.items = __.map(lamps.items, item => {
    return {
      ...item,
      img: item.img || '/static/img/lamps.jpg'
    }
  })
  return lamps
}
export default lamps
