import { ReactElement, useEffect } from 'react'
import { themes } from '../../theme/theme'
import useTheme from '../../hooks/useTheme'

import MoonImg from '../../images/icon-moon.svg'
import SunImg from '../../images/icon-sun.svg'

interface TodoHeaderProps {
  darkMode: boolean
  switchMode: any
}

const TodoHeader = ({
  darkMode,
  switchMode,
  ...props
}: TodoHeaderProps): ReactElement => {
  const [theme, setTheme] = useTheme()

  useEffect(() => {
    setTheme(darkMode ? themes?.dark : themes?.light)
  }, [darkMode])

  const changeMode = () => {
    switchMode()
  }

  return (
    <header className='TodoHeader'>
      <h1>Todo</h1>
      <img
        src={darkMode ? SunImg : MoonImg}
        onClick={() => changeMode()}
        alt='moon'
      />
    </header>
  )
}

export default TodoHeader
