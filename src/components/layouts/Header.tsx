import { ReactElement } from 'react'
import useTheme from '../../hooks/useTheme'

interface HeaderProps {
  darkMode: boolean
}

const Header = ({ darkMode, ...props }: HeaderProps): ReactElement => {
  const [theme] = useTheme()
  return (
    <header style={{ background: theme?.body }}>
      <img
        src={
          darkMode
            ? require('../../images/bg-desktop-dark.jpg')
            : require('../../images/bg-desktop-light.jpg')
        }
        alt='background-header'
      />
    </header>
  )
}

export default Header
