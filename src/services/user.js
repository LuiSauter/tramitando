import { API_URL } from '../utils/contants'

export const getAllUsers = async () => {
  try {
    const users = await fetch(`${API_URL}/user`, {
      method: 'GET'
    })
    const data = await users.json()
    return data
  } catch (error) {
    return { status: error.message }
  }
}

export const getUserById = async (userId) => {
  try {
    const user = await fetch(`${API_URL}/user/${userId}`)
    const data = await user.json()
    return data
  } catch (error) {
    return { status: error.message }
  }
}
