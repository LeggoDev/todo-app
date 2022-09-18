import { ReactElement, useState } from 'react'
import useTheme from '../../hooks/useTheme'

import CheckIcon from '../../images/icon-check.svg'

interface TodoCreateProps {
  darkMode: boolean
  addTodo: any
}

const TodoCreate = ({
  darkMode,
  addTodo,
  ...props
}: TodoCreateProps): ReactElement => {
  const [theme] = useTheme()
  const [checked, setCheked] = useState<boolean>(false)
  const [hover, setHover] = useState<boolean>(false)
  const [todo, setTodo] = useState<string>('')

  const hoverStyle = (hover: boolean, checked: boolean) => {
    if (hover && checked) return theme?.circleGradientCompleted
    if (hover) return theme?.circleGradient
    return ''
  }

  const handlePress = (event: any) => {
    if (event?.charCode === 13) {
      addTodo(todo, checked)
      setCheked(false)
      setTodo('')
    }
  }

  const toggleHover = () => setHover(!hover)

  return (
    <div
      className='TodoCreate'
      style={{
        background: theme?.background,
        boxShadow: theme?.shadowContainer,
      }}
    >
      <div
        style={{
          background: checked ? theme?.completeGradient : theme?.background,
          backgroundImage: hoverStyle(hover, checked),
          border: theme?.circleBorder,
        }}
        onClick={() => setCheked(!checked)}
        onMouseOver={toggleHover}
        onMouseLeave={toggleHover}
      >
        {checked && <img src={CheckIcon} alt='check' />}
      </div>
      <input
        className={darkMode ? 'dark' : ''}
        type='text'
        placeholder='Create a new todo…'
        value={todo}
        onChange={(e) => setTodo(e?.target?.value)}
        onKeyPress={(e) => handlePress(e)}
        style={{ color: theme?.title, background: theme?.background }}
      />
    </div>
  )
}

export default TodoCreate
