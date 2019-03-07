import __ from 'underscore'

export function dealWithParts (types, data) {
  return __.map(data.collection.items, item => {
    let result = {
      ...item.data,
      href: item.link.href
    }
    if (types) result.typeName = types(item.data.type)
    return result
  })
}

export function createQueryString (condiFields, cond) {
  let r = ''
  let obj = {}
  for (let i = 0; i < condiFields.length; i++) {
    if (cond.filters[i] !== 0) {
      obj[condiFields[i]] = cond.filters[i]
    }
  }
  r = 'q=' + JSON.stringify(obj) + '&'
  if (cond.search) {
    let s = cond.search.trim()
    if (s.length > 0) r = r + 's=' + s
  }
  return r
}
