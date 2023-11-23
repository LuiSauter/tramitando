import { createContext, useContext, useState } from 'react'
import { createTramit, getAllTramits, getTramit } from '../services/tramit'

const TramitContext = createContext()

export const useTramit = () => {
  const context = useContext(TramitContext)
  if (!context) throw new Error('useTasks must be used within a TaskProvider')
  return context
}

export function TramitProvider({ children }) {
  const [tramits, setTramits] = useState([])

  const getTramits = async () => {
    const res = await getAllTramits()
    setTramits(res.data)
  }

  const addTramit = async ({ state, user, descriptionTramit }) => {
    try {
      const res = await createTramit({ state, user, descriptionTramit })
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getTramitById = async (id) => {
    try {
      const res = await getTramit(id)
      return res.data
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <TramitContext.Provider
      value={{
        tramits,
        getTramits,
        addTramit,
        getTramitById
      }}
    >
      {children}
    </TramitContext.Provider>
  )
}
