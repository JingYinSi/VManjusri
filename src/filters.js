import moment from 'moment'

export function date (value) {
  return moment(value).format('YYYY-MM-D LT')
}

export function relativeDate (value) {
  return moment(value).fromNow()
}
