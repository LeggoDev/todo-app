import { useState, createContext } from 'react'
import { themes } from './theme'

export const ThemeContext = createContext<any>(themes.light)

const ThemeProvider = (props: any) => {
  const [theme, setTheme] = useState(themes.light)
  const value = [theme, setTheme]
  return <ThemeContext.Provider value={value} {...props} />
}

export default ThemeProvider
