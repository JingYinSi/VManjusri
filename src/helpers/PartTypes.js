const types = {
  '1': '料品',
  '2': '资产',
  '3': '耗材'
}
const convert = function (val) {
  return val ? types[val] : '未知'
}
export default convert
