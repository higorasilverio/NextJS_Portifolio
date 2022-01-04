import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com'
})

api.interceptors.request.use(async config => {
  // eslint-disable-next-line no-undef
  const token = process.env.GITHUB_TOKEN

  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  return config
})

export default api
