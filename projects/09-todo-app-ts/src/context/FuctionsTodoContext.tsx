// este es el que tenemos que consumir
import { createContext, type ReactNode } from 'react'
import { type Todo } from '../types'

interface FunctionsTodoProviderProps {
  children: ReactNode
}
interface HandleRemove {
  id: string
  todos: Todo[]
}
interface CompleteTodo {
  id: string
  completed: boolean
  todos: Todo[]
}

export const FunctionsTodoContext = createContext()

// este es el que nos provee de acceso aal contexto
export function FunctionsTodoProvider({
  children
}: Readonly<FunctionsTodoProviderProps>): JSX.Element {
  return (
    <FunctionsTodoContext.Provider value={{ removeTodo, completeTodo }}>
      {children}
    </FunctionsTodoContext.Provider>
  )
}

function removeTodo({ id, todos }: HandleRemove): Todo[] {
  return todos.filter((todo) => todo.id !== id)
}

function completeTodo({ id, completed, todos }: CompleteTodo): Todo[] {
  return todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        completed
      }
    }
    return todo
  })
}
