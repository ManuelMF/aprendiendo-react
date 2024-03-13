import { type Todo as TodoType } from '../types'
import { useContext } from 'react'
import { RemoveTodoContext } from '../context/RemoveTodoContext'
import { TodoContext } from '../context/TodoContext'

export const Todo: React.FC<TodoType> = ({ id, title, completed }) => {
  const removeTodo = useContext(RemoveTodoContext)
  const { todos, setTodos } = useContext(TodoContext)

  const handleRemove = (): void => {
    const newTodos = removeTodo({ id, todos })

    setTodos(newTodos)
  }

  return (
    <div className='view'>
      <input
        className='toggle'
        checked={completed}
        type='checkbox'
        onChange={() => {}}
      />
      <label>{title}</label>
      <button
        className='destroy'
        onClick={() => {
          handleRemove()
        }}
      />
    </div>
  )
}
