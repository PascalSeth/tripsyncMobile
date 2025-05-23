import axios from "axios"
import * as SecureStore from "expo-secure-store"
import { APP_CONSTANTS, AUTH_ENDPOINTS } from "./constants"

// Registration interface
interface RegisterParams {
  email: string
  password: string
  firstName: string
  lastName: string
  phone: string
}

// Login interface
interface LoginParams {
  email: string
  password: string
}

// User interface
export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  isDriver: boolean
}

// Auth responses
interface AuthResponse {
  token: string
  user: User
}

// Register a new user
export const registerUser = async (userData: RegisterParams): Promise<AuthResponse> => {
  try {
    const response = await axios.post(AUTH_ENDPOINTS.REGISTER, userData)

    if (response.data.token) {
      await SecureStore.setItemAsync(APP_CONSTANTS.AUTH_TOKEN_KEY, response.data.token)
      await SecureStore.setItemAsync(APP_CONSTANTS.USER_KEY, JSON.stringify(response.data.user))
    }

    return response.data
  } catch (error) {
    console.error("Registration error:", error)
    throw error
  }
}

// Login user
export const loginUser = async (credentials: LoginParams): Promise<AuthResponse> => {
  try {
    const response = await axios.post(AUTH_ENDPOINTS.LOGIN, credentials)

    if (response.data.token) {
      await SecureStore.setItemAsync(APP_CONSTANTS.AUTH_TOKEN_KEY, response.data.token)
      await SecureStore.setItemAsync(APP_CONSTANTS.USER_KEY, JSON.stringify(response.data.user))
    }

    return response.data
  } catch (error) {
    console.error("Login error:", error)
    throw error
  }
}

// Check if user is authenticated
export const isAuthenticated = async (): Promise<boolean> => {
  try {
    const token = await SecureStore.getItemAsync(APP_CONSTANTS.AUTH_TOKEN_KEY)
    return !!token
  } catch (error) {
    console.error("Auth check error:", error)
    return false
  }
}

// Get current user
export const getCurrentUser = async (): Promise<User | null> => {
  try {
    const userJson = await SecureStore.getItemAsync(APP_CONSTANTS.USER_KEY)
    return userJson ? JSON.parse(userJson) : null
  } catch (error) {
    console.error("Get current user error:", error)
    return null
  }
}

// Logout user
export const logoutUser = async (): Promise<void> => {
  try {
    await SecureStore.deleteItemAsync(APP_CONSTANTS.AUTH_TOKEN_KEY)
    await SecureStore.deleteItemAsync(APP_CONSTANTS.USER_KEY)
  } catch (error) {
    console.error("Logout error:", error)
  }
}
