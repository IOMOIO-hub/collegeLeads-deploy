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

    // const response = await fetch('https://tg-forms.ru/api/' + url, {
    //   method, headers, body
    // })
    const response = await fetch('http://localhost:5000/' + url, {
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