import axios from "axios"
import * as SecureStore from "expo-secure-store"
import { APP_CONSTANTS } from "./constants"

// Create axios instance
const api = axios.create({
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
})

// Request interceptor to add auth token
api.interceptors.request.use(
  async (config) => {
    try {
      const token = await SecureStore.getItemAsync(APP_CONSTANTS.AUTH_TOKEN_KEY)
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    } catch (error) {
      console.error("Error getting auth token:", error)
    }
    return config
  },
  (error) => Promise.reject(error),
)

// Response interceptor to handle common errors
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    // Handle 401 Unauthorized errors
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      // Clear stored tokens and user info
      await SecureStore.deleteItemAsync(APP_CONSTANTS.AUTH_TOKEN_KEY)
      await SecureStore.deleteItemAsync(APP_CONSTANTS.USER_KEY)
    }

    return Promise.reject(error)
  },
)

export default api
