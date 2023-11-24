import { API_URL } from '../utils/contants'

export const getAllDescriptionTramit = async () => {
  try {
    const allDescriptions = await fetch(`${API_URL}/descriptionTramit`)
    const data = await allDescriptions.json()
    return data
  } catch (error) {
    return { status: error.message }
  }
}

export const getDescriptionTramitById = async (id) => {
  try {
    const descriptionTramit = await fetch(`${API_URL}/descriptionTramit/${id}`, {
      method: 'GET'
    })
    const data = await descriptionTramit.json()
    return data
  } catch (error) {
    return { status: error.message }
  }
}

export const createDescriptionTramit = async ({ title, description, requirement, precio }) => {
  try {
    const createDescriptionTramit = await fetch(`${API_URL}/descriptionTramit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, requirement, precio })
    })
    await createDescriptionTramit.json()
  } catch (error) {
    return { status: error.message }
  }
}
