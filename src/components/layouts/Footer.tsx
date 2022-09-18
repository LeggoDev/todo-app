import { ReactElement } from 'react'
import useTheme from '../../hooks/useTheme'

const Footer = (): ReactElement => {
  const [theme] = useTheme()
  return (
    <footer style={{ background: theme?.body }}>
      <p style={{ color: theme?.clear }}>Drag and drop to reorder list</p>
    </footer>
  )
}

export default Footer
