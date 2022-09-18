import { ReactElement } from 'react'
import useTheme from '../../hooks/useTheme'

interface TodoFilterProps {
  todosLength: number
  filterTodos: string
  filterTodo: any
  clearTodoCompleted: any
}

const TodoFilter = ({
  todosLength,
  filterTodos,
  filterTodo,
  clearTodoCompleted,
  ...props
}: TodoFilterProps): ReactElement => {
  const [theme] = useTheme()
  return (
    <div
      className='TodoFilter'
      style={{ background: theme?.background, boxShadow: theme?.shadowFilter }}
    >
      <span className='items' style={{ color: theme?.clear }}>
        {todosLength} items left
      </span>
      <div style={{ color: theme?.clear }}>
        <span
          className={filterTodos === 'all' ? 'active' : ''}
          onClick={() => filterTodo('all')}
        >
          All
        </span>
        <span
          className={filterTodos === 'active' ? 'active' : ''}
          onClick={() => filterTodo('active')}
        >
          Active
        </span>
        <span
          className={filterTodos === 'complete' ? 'active' : ''}
          onClick={() => filterTodo('complete')}
        >
          Completed
        </span>
      </div>
      <span
        className='clear'
        style={{ color: theme?.clear }}
        onClick={clearTodoCompleted}
      >
        Clear Completed
      </span>
    </div>
  )
}

export default TodoFilter
