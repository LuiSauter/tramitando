import { API_URL } from '../utils/contants'

export const getAllDescriptionTramit = async () => {
  try {
    const users = await fetch(`${API_URL}/descriptionTramit`, {
      method: 'GET'
    })
    const data = await users.json()
    return data
  } catch (error) {
    return { status: error.message }
  }
}

export const getDescriptionTramitById = async (id) => {
  try {
    const user = await fetch(`${API_URL}/descriptionTramit/${id}`, {
      method: 'GET'
    })
    const data = await user.json()
    return data
  } catch (error) {
    return { status: error.message }
  }
}

export const createDescriptionTramit = async ({ title, description, requirement, precio }) => {
  try {
    const user = await fetch(`${API_URL}/descriptionTramit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, requirement, precio })
    })
    await user.json()
  } catch (error) {
    return { status: error.message }
  }
}
