import router from './router'

export default async function request(url, data = null, method = 'GET') {
  try {
    const headers = {}
    let body

    if (data) {
      headers['Content-Type'] = 'application/json'
      body = JSON.stringify(data)
      method = 'POST'
    }

    const response = await fetch('https://ural-university.ru/api/' + url, {
      method, headers, body
    })

    if (response.ok) {
      return response.json()
    }

    await router.push('/')

    return null
  }
  catch (e) {
    console.error('Request error', e)
  }
}