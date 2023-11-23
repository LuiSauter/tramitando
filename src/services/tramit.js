import { API_URL } from '../utils/contants'

export const getAllTramits = async () => {
  try {
    const users = await fetch(`${API_URL}/tramit`, {
      method: 'GET'
    })
    const data = await users.json()
    return data
  } catch (error) {
    return { status: error.message }
  }
}

export const getTramit = async (id) => {
  try {
    const user = await fetch(`${API_URL}/tramit/${id}`, {
      method: 'GET'
    })
    const data = await user.json()
    return data
  } catch (error) {
    return { status: error.message }
  }
}

export const createTramit = async ({ state, user, descriptionTramit }) => {
  try {
    const newUser = await fetch(`${API_URL}/tramit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ state, user, descriptionTramit })
    })
    await newUser.json()
  } catch (error) {
    return { status: error.message }
  }
}
