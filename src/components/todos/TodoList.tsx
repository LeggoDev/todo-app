import { ReactElement } from 'react'
import useTheme from '../../hooks/useTheme'

import TodoItem from './TodoItem'

import { Todos as TODOS_TYPES } from '../../types/todos'

interface TodoListProps {
  todos: TODOS_TYPES[]
  filterTodos: string
  updateTodo: any
}

const TodoList = ({
  todos,
  filterTodos,
  updateTodo,
  ...props
}: TodoListProps): ReactElement => {
  const [theme] = useTheme()
  return (
    <div className='TodoList'>
      {todos
        .filter((item) => {
          switch (filterTodos) {
            case 'active':
              return item.checked !== true
            case 'complete':
              return item.checked !== false
            default:
              return item
          }
        })
        .map((item: TODOS_TYPES, index: number) => (
          <>
            <TodoItem item={item} index={index} updateTodo={updateTodo} />
            <hr style={{ background: theme?.hr }} />
          </>
        ))}
    </div>
  )
}

export default TodoList
