import { type Todo as TodoType } from '../types'
import { useContext } from 'react'
import { FunctionsTodoContext } from '../context/FuctionsTodoContext'
import { TodoContext } from '../context/TodoContext'

export const Todo: React.FC<TodoType> = ({ id, title, completed }) => {
  const { removeTodo, completeTodo } = useContext(FunctionsTodoContext)
  const { todos, setTodos } = useContext(TodoContext)

  const handleRemove = (): void => {
    const newTodos = removeTodo({ id, todos })

    setTodos(newTodos)
  }
  const handleCompleted = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const newTodos = completeTodo({
      id,
      completed: event.target.checked,
      todos
    })

    setTodos(newTodos)
  }

  return (
    <div className='view'>
      <input
        className='toggle'
        checked={completed}
        type='checkbox'
        onChange={handleCompleted}
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
