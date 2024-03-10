import { useState } from 'react'
import { Todos } from './components/Todos'

const mockTodos = [
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

function App(): JSX.Element {
  const [todos, setTodos] = useState(mockTodos)
  return (
    <div className='todoapp'>
      <Todos todos={todos} />
    </div>
  )
}

export default App
