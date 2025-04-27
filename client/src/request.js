import { notify } from "@kyvg/vue3-notification"
import router from './router'

export default async function request(
  url, data = null, method = 'GET',
  token = window.localStorage.getItem('token')
) {
  try {
    const headers = {}
    let body

    if (data) {
      headers['Content-Type'] = 'application/json'
      body = JSON.stringify(data)
      method = 'POST'
    }
    if (token) {
      headers['token'] = token
    }

    const response = await fetch('https://tg-forms.ru/api/' + url, {
      method, headers, body
    })
    // const response = await fetch('http://localhost:5000/' + url, {
    //   method, headers, body
    // })

    if (response.ok) {
      return response.json()
    }

    await router.push('/home')
    notify({
      title: (await response.json()).message,
      type: 'error',
    })

    return null
  }
  catch (e) {
    console.error('Request error', e)
  }
}