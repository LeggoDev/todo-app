import { useContext } from 'react'
import { ThemeContext } from '../theme/ThemeProvider'

const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme doit etre dans ThemeProvider')
  }
  return context
}

export default useTheme
