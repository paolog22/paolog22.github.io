const baseUrl = 'http://api.timezonedb.com'
const prefix = 'v2.1'
const key = '26H3ZTU1RPAB'

const api = async (url, data = {}) => {
  const search = new URLSearchParams(data)
  const endpoint = new URL(`${baseUrl}/${prefix}/${url}?${search}`)
  return await fetch(endpoint)
}

const convertTimeZone = async (from = 'Asia/Manila', to = 'Australia/Melbourne') => {
  return await api('convert-time-zone', {
    key,
    format: 'json',
    from,
    to
  }).then(response => response.json())
    .catch(error => new Error(`No Api response ${error}`))
}

export {
  api,
  convertTimeZone
}
