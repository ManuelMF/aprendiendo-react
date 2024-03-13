// este es el que tenemos que consumir
import { createContext, type ReactNode } from 'react'
import { type Todo } from '../types'

interface RemoveTodoProviderProps {
  children: ReactNode
}
interface HandleRemove {
  id: string
  todos: Todo[]
}

export const RemoveTodoContext = createContext()

// este es el que nos provee de acceso aal contexto
export function RemoveTodoProvider({
  children
}: Readonly<RemoveTodoProviderProps>): JSX.Element {
  return (
    <RemoveTodoContext.Provider value={removeTodo}>
      {children}
    </RemoveTodoContext.Provider>
  )
}

function removeTodo({ id, todos }: HandleRemove): Todo[] {
  return todos.filter((todo) => todo.id !== id)
}
