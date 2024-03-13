import { useState, useContext } from 'react'
import { Todos } from './components/Todos'
import { TodoContext } from './context/TodoContext'

function App(): JSX.Element {
  const { todos, setTodos } = useContext(TodoContext)

  return (
    <div className='todoapp'>
      <Todos todos={todos} />
    </div>
  )
}

export default App
