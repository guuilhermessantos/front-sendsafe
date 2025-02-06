import axios from 'axios'

const api = axios.create({
  baseURL: 'back-sendsafe01.vercel.app',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Interceptador para adicionar token automaticamente
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Interceptador para tratar erros globais
api.interceptors.response.use(
  response => response,
  error => {
    console.error('Erro na API:', error.response?.data || error.message)
    return Promise.reject(error)
  }
)

export default api
