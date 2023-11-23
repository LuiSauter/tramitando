import { createContext, useContext, useState } from 'react'
import { createDescriptionTramit, getAllDescriptionTramit, getDescriptionTramitById } from '../services/descriptionTramit'

const DescriptionTramitContext = createContext()

export const useDescriptionTramit = () => {
  const context = useContext(DescriptionTramitContext)
  if (!context) throw new Error('useTasks must be used within a TaskProvider')
  return context
}

export function DescriptionTramitProvider({ children }) {
  const [descriptionTramit, setDescriptionTramit] = useState([])

  const allDescriptionTramits = async () => {
    const res = await getAllDescriptionTramit()
    setDescriptionTramit(res.data)
  }

  const addDescriptionTramit = async ({ title, description, requirement, precio }) => {
    try {
      const res = await createDescriptionTramit({ title, description, requirement, precio })
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getDescriptionTramit = async (id) => {
    try {
      const res = await getDescriptionTramitById(id)
      return res.data
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <DescriptionTramitContext.Provider
      value={{
        descriptionTramit,
        allDescriptionTramits,
        addDescriptionTramit,
        getDescriptionTramit
      }}
    >
      {children}
    </DescriptionTramitContext.Provider>
  )
}
