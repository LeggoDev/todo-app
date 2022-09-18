import { useState } from 'react'
import ThemeProvider from './theme/ThemeProvider'

import Header from './components/layouts/Header'
import TodoContainer from './components/todos/TodoContainer'
import Footer from './components/layouts/Footer'

import './App.css'

const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  const switchMode = () => setDarkMode(!darkMode)

  return (
    <div
      className='App'
      style={{ background: darkMode ? '#171823' : '#ffffff' }}
    >
      <ThemeProvider>
        <Header darkMode={darkMode} />
        <TodoContainer darkMode={darkMode} switchMode={switchMode} />
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default App
