// este es el que tenemos que consumir
import { createContext } from 'react'
export const FiltersContext = createContext()

// este es el que nos provee de acceso aal contexto
export function FiltersProvider({ children }) {
  return (
    <FiltersContext.Provider value={{ category: 'all', minPrice: 0 }}>
      {children}
    </FiltersContext.Provider>
  )
}
