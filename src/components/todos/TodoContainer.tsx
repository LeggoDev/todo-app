import { ReactElement, useState } from 'react'
import useTheme from '../../hooks/useTheme'

import TodoHeader from './TodoHeader'
import TodoCreate from './TodoCreate'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'

import { Todos as TODOS_TYPES } from '../../types/todos'
import { data } from './data'

interface TodoContainerProps {
  darkMode: boolean
  switchMode: any
}

const TodoContainer = ({
  darkMode,
  switchMode,
  ...props
}: TodoContainerProps): ReactElement => {
  const [theme] = useTheme()
  const [todos, setTodos] = useState<TODOS_TYPES[]>(data)
  const [filterTodos, setFilterTodos] = useState<string>('all')

  const addTodo = (title: string, checked: boolean) => {
    setTodos([...todos, { title, checked }])
  }

  const updateTodo = (index: number, checked: boolean) => {
    let tempTodo = [...todos]
    tempTodo[index].checked = checked
    setTodos(tempTodo)
  }

  const clearTodoCompleted = () => {
    const tempTodo = [...todos]?.filter((item) => item?.checked !== true)
    setTodos(tempTodo)
  }

  const filterTodo = (option: string) => {
    setFilterTodos(option)
  }

  return (
    <main>
      <div className='TodoContainer'>
        <TodoHeader darkMode={darkMode} switchMode={switchMode} />
        <TodoCreate addTodo={addTodo} darkMode={darkMode} />
        {todos?.length > 0 && (
          <section
            style={{
              background: theme?.background,
              boxShadow: theme?.shadowContainer,
            }}
          >
            <TodoList
              todos={todos}
              filterTodos={filterTodos}
              updateTodo={updateTodo}
            />
            <TodoFilter
              todosLength={todos?.length}
              filterTodos={filterTodos}
              filterTodo={filterTodo}
              clearTodoCompleted={clearTodoCompleted}
            />
          </section>
        )}
      </div>
    </main>
  )
}

export default TodoContainer
