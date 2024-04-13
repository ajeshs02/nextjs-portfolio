import qs from 'query-string'

export function formUrlQuery({ params, key, value }) {
  const currentUrl = qs.parse(params)

  if (key && value) {
    currentUrl[key] = value
  }

  return qs.stringifyUrl(
    { url: window.location.pathname, query: currentUrl },
    { skipNull: true }
  )
}
