import { useState } from 'react'
import { Todos } from './components/Todo'

const mockTodos = [
  {
    id: '1',
    title: 'todo 1',
    completed: true
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false
  }
]

function App(): JSX.Element {
  const [todos, setTodos] = useState(mockTodos)
  return <Todos todos={todos} />
}

export default App
