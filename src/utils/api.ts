// src/utils/api.ts
import axios from 'axios'


const baseURL = 'http://localhost:3333'

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// (Opcional) interceptors para tratamento global de erros, token, etc.

api.interceptors.response.use(
  response => response,
  error => {
    // Tratamento global de 401, logging, notificações…
    return Promise.reject(error)
  }
)

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken'); // Obtém o token do localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
