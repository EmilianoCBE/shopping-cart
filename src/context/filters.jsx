import { createContext, useState } from "react"

// Crear Contexto, esto se consume
export const FiltersContext = createContext() //Solo se crea una vez: Singleton

//Crear el Provider, para proveer el acceso al contexto
export function FiltersProvider({children}){
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}>
      {children}
    </FiltersContext.Provider>
  )
}