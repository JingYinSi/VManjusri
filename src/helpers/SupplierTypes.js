const types = {
  '1': '厂家',
  '2': '电商',
  '3': '实体店'
}
const convert = function (val) {
  return val ? types[val] : '未知'
}
export default convert
