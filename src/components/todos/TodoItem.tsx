import { ReactElement } from 'react'
import useTheme from '../../hooks/useTheme'

import { Todos as TODOS_TYPES } from '../../types/todos'

import CheckIcon from '../../images/icon-check.svg'

interface TodoItemProps {
  item: TODOS_TYPES
  index: number
  updateTodo: any
}

const TodoItem = ({
  item,
  index,
  updateTodo,
  ...props
}: TodoItemProps): ReactElement => {
  const [theme] = useTheme()
  return (
    <div
      className='TodoItem'
      key={index}
      style={{ background: theme?.background, boxShadow: theme?.shadowFilter }}
    >
      <div
        style={{
          background: item.checked
            ? theme?.completeGradient
            : theme?.background,
          border: theme?.circleBorder,
        }}
        onClick={() => updateTodo(index, !item?.checked)}
      >
        {item?.checked && <img src={CheckIcon} alt='check' />}
      </div>
      <span
        style={{
          color: item?.checked ? theme?.complete : theme?.title,
          textDecoration: item?.checked ? 'line-through' : '',
        }}
      >
        {item?.title}
      </span>
    </div>
  )
}

export default TodoItem
