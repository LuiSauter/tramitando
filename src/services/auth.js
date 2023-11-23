import { API_URL } from '../utils/contants'

export const registerWithEmail = async ({ name, email, password, photo, ci, direction, phone }) => {
  try {
    const register = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, photo, ci, direction, phone })
    })
    const data = await register.json()
    return data
  } catch (error) {
    return { status: error.message }
  }
}

export const loginWithEmail = async ({ email, password }) => {
  try {
    const login = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    const data = await login.json()
    return data
  } catch (error) {
    return { status: error.message }
  }
}

export const verifyTokenRequest = async () => {
  try {
    const verify = await fetch(`${API_URL}/auth/verify`, {
      method: 'GET'
    })
    const data = await verify.json()
    return data
  } catch (error) {
    return { status: error.message }
  }
}
