let baseUrl, entryUrl

async function __sendHttp (url, method, data) {
  const options = {
    headers: {
      'content-type': 'application/json'
    },
    method: method,
    body: data
  }
  const response = await fetch(url, options)
  if (response.ok) {
    const data = await response.json()
    return data
  } else {
    const message = await response.text()
    const error = new Error(message)
    error.response = response
    throw error
  }
}

export async function $get (url) {
  const finalUrl = url.startsWith(baseUrl) ? url : `${baseUrl}${url}`
  const response = await __sendHttp(finalUrl, 'GET')
  return response
}

export async function $post (url, data) {
  const finalUrl = url.startsWith(baseUrl) ? url : `${baseUrl}${url}`
  const response = await __sendHttp(finalUrl, 'POST', data)
  return response
}

export async function $put (url, version, data) {
  const finalUrl = url.startsWith(baseUrl) ? url : `${baseUrl}${url}`
  const options = {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'If-Unmodified-Since': version
    },
    body: JSON.stringify(data)
  }
  const response = await fetch(finalUrl, options)
  if (response.status === 200 || response.status === 204) {
    let result = response.headers.get('Last-Modified')
    return result
  } else {
    const message = await response.text()
    const error = new Error(message)
    error.response = response
    throw error
  }
}

export async function $upload (url, formData) {
  const finalOptions = {
    headers: {},
    method: 'POST',
    body: formData
  }
  const result = await fetch(`${baseUrl}${url}`, finalOptions)
  return result
}

export async function $entry () {
  const data = await $get(entryUrl)
  return data
}

export default {
  install (Vue, options) {
    // Plugin options
    baseUrl = options.baseUrl
    entryUrl = options.entryUrl
  }
}
