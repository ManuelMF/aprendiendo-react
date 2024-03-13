import { createContext, useState, type ReactNode } from 'react'
import { type Todo } from '../types'

interface Props {
  children: ReactNode
}

const mockTodos: Todo[] = [
  {
    id: '1',
    title: 'Ir al gimnasio',
    completed: true
  },
  {
    id: '2',
    title: 'Ver video de react',
    completed: false
  },
  {
    id: '3',
    title: 'Ir a comprar',
    completed: false
  }
]

export const TodoContext = createContext<{
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}>({
  todos: mockTodos,
  setTodos: () => {} // función temporal para satisfacer el tipo
})

export function TodoProvider({ children }: Props): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>(mockTodos)

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  )
}
